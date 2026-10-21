import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { guides as esGuides } from "../content/es.mjs";
import { packs } from "../content/latin-registry.mjs";
import { localeList } from "../content/locale-list.mjs";
import { profiles } from "../content/quiz.mjs";
import { series } from "../content/series.mjs";
import { traits } from "../content/traits.mjs";
import { toolCopy } from "../content/tools.mjs";
import { guides as zhGuides } from "../content/zh-guides.mjs";
import { fitDescription } from "./description.mjs";

const LOCALES = ["zh", "es", "pt", "fr", "de", "id", "vi", "it", "tr"];

function langOf(path) {
  const code = path.split("/").filter(Boolean)[0] || "en";
  return LOCALES.includes(code) ? code : "en";
}

const guideDir = new URL("../content/guide-pages/", import.meta.url);
const enGuides = fs
  .readdirSync(guideDir)
  .filter((name) => name.endsWith(".ts") && name !== "types.ts" && name !== "index.ts")
  .flatMap((name) => {
    const src = fs.readFileSync(new URL(name, guideDir), "utf8");
    const slug = (src.match(/slug: "([^"]+)"/) || [])[1];
    const description = (src.match(/description: "([^"]+)"/) || [])[1];
    return slug && description ? [{ slug, description }] : [];
  });

const SEO_FILES = [
  "en-home.ts",
  "en-hub.ts",
  "en-tools.ts",
  "en-blog.ts",
  "en-methodology.ts",
  "en-signature-guides.ts",
  "zh.ts",
  "zh-signature-guides.ts",
];

function seoDescriptions(file) {
  const src = fs.readFileSync(new URL(`../content/seo/${file}`, import.meta.url), "utf8");
  const found = [];
  for (const match of src.matchAll(/^\s*meta: "([^"]+)",/gm)) {
    const before = src.slice(0, match.index);
    const paths = [...before.matchAll(/^\s*path: "([^"]+)",/gm)];
    const slugs = [...before.matchAll(/^\s*slug: "([^"]+)",/gm)];
    const key = paths.length ? paths[paths.length - 1][1] : slugs[slugs.length - 1][1];
    found.push({ path: key.startsWith("/") ? key : `/blog/${key}`, description: match[1] });
  }
  return found;
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) out.push(...walk(new URL(`${entry.name}/`, dir)));
    else if (entry.name === "page.tsx") out.push(new URL(entry.name, dir));
  }
  return out;
}

// The descriptions that live in a page file instead of a content file.
function appDescriptions() {
  const found = [];
  for (const file of walk(new URL("../app/", import.meta.url))) {
    const src = fs.readFileSync(file, "utf8");
    for (const block of src.matchAll(/pageMeta\(\{([\s\S]*?)\n\}\)/g)) {
      const body = block[1];
      const path = (body.match(/path: "([^"]+)"/) || [])[1];
      const description = (body.match(/description:\s*"([^"]+)"/) || [])[1];
      if (path && description) found.push({ path, description });
    }
  }
  return found;
}

function pages() {
  const list = [];
  const add = (path, description) => list.push({ path, description });
  for (const item of appDescriptions()) add(item.path, item.description);
  for (const profile of profiles) {
    add(
      `/results/${profile.slug}`,
      `${profile.name}: ${profile.sentence} A fictional label in the handwriting personality test.`,
    );
  }
  for (const guide of enGuides) add(`/guides/${guide.slug}`, guide.description);
  for (const guide of zhGuides) add(`/zh/guides/${guide.slug}`, guide.description);
  for (const guide of esGuides) add(`/es/guides/${guide.slug}`, guide.description);
  for (const file of SEO_FILES) {
    for (const item of seoDescriptions(file)) add(item.path, item.description);
  }
  for (const code of ["en", "zh", "es"]) {
    const prefix = code === "en" ? "" : `/${code}`;
    add(`${prefix}/guides`, traits[code].description);
    add(`${prefix}/faq`, series[code].faq.description);
    add(`${prefix}/about`, series[code].about.description);
    if (code === "es") {
      add(`${prefix}/chart`, toolCopy[code].chart.description);
      add(`${prefix}/tools/slant`, toolCopy[code].slant.description);
      add(`${prefix}/tools/signature`, toolCopy[code].signature.description);
      add(`${prefix}/tools/signature/size`, series[code].size.description);
      add(`${prefix}/tools/signature/body`, series[code].body.description);
    }
  }
  for (const locale of localeList) {
    if (locale.code === "es") continue;
    const code = locale.code;
    const pack = packs[code];
    add(`/${code}`, pack.copy.description);
    add(`/${code}/science`, pack.copy.science.description);
    add(`/${code}/guides`, traits[code].description);
    for (const guide of pack.guides) add(`/${code}/guides/${guide.slug}`, guide.description);
    add(`/${code}/chart`, toolCopy[code].chart.description);
    add(`/${code}/tools/slant`, toolCopy[code].slant.description);
    add(`/${code}/tools/signature`, toolCopy[code].signature.description);
    for (const key of ["faq", "about", "size", "body"]) {
      add(`/${code}/${key === "size" ? "tools/signature/size" : key === "body" ? "tools/signature/body" : key}`, series[code][key].description);
    }
  }
  return list;
}

test("meta descriptions land inside the length window for their language", () => {
  const list = pages();
  assert.equal(list.length, 233);
  for (const page of list) {
    const lang = langOf(page.path);
    const [minimum, maximum] = lang === "zh" ? [62, 130] : lang === "en" ? [140, 155] : [110, 190];
    const text = fitDescription(page.description, page.path);
    assert.ok(text.length >= minimum, `${page.path} ${text.length}`);
    assert.ok(text.length <= maximum, `${page.path} ${text.length} ${text}`);
    if (page.description.length >= minimum) assert.equal(text, page.description);
  }
});

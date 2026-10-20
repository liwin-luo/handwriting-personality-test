import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { guides as esGuides } from "../content/es.mjs";
import { packs } from "../content/latin-registry.mjs";
import { localeList } from "../content/locale-list.mjs";
import { series } from "../content/series.mjs";
import { traits } from "../content/traits.mjs";
import { toolCopy } from "../content/tools.mjs";
import { guides as zhGuides } from "../content/zh-guides.mjs";
import { fitDescription } from "./description.mjs";

const guideSrc = fs.readFileSync(new URL("../content/guides.ts", import.meta.url), "utf8");
const enGuides = [...guideSrc.matchAll(/slug: "([^"]+)",\n\s*title: "[^"]+",\n\s*description: "([^"]+)"/g)].map((match) => ({
  slug: match[1],
  description: match[2],
}));

function pages() {
  const list = [];
  const add = (path, description) => list.push({ path, description });
  add("/", "A free handwriting personality test. Pick the shapes you actually write. Eight answers show a fictional label. Nothing is uploaded.");
  add("/zh", "五道中文硬笔题：大小、字距、行距、连笔、横画。不是拉丁字母测验的翻译。至少四题。不上传。");
  add("/es", "Un test gratis de la letra. Eliges las formas que escribes de verdad. Ocho respuestas dan un nombre ficticio. No se sube nada.");
  add("/science", "What a handwriting personality test can see, and what it cannot say about personality, health, honesty, intelligence, or hiring.");
  add("/zh/science", "笔迹看得见什么，以及它不能说明性格、健康、诚实、智力或雇佣。");
  add("/es/science", "Qué puede ver un test de la letra, y qué no puede decir sobre la personalidad, la salud, la honestidad, la inteligencia o una contratación.");
  add("/privacy", "What the handwriting personality test stores, what a result link contains, and what analytics can see.");
  add("/terms", "The handwriting personality test is a fictional labeling of shapes, not advice.");
  add("/contact", "Email the handwriting personality test.");
  add("/results", "Six fictional names for the shapes in the handwriting personality test, plus the case where no shape wins.");
  const profiles = [
    ["Quiet Architect", "You close the shapes that can be closed."],
    ["Everyday Minimalist", "You stop the stroke once the letter is readable."],
    ["Margin Storyteller", "Gaps and lean set the pace of the line."],
    ["Beautiful Rebel", "You keep a mark the basic copybook leaves out."],
    ["Daydream Doodler", "Flourish and rhythm show up in the same line."],
    ["Instinctive Mixer", "No single habit runs the page."],
  ];
  for (const [name, sentence] of profiles) {
    add(`/results/${name}`, `${name}: ${sentence} A fictional label in the handwriting personality test.`);
  }
  for (const guide of enGuides) add(`/guides/${guide.slug}`, guide.description);
  for (const guide of zhGuides) add(`/zh/guides/${guide.slug}`, guide.description);
  for (const guide of esGuides) add(`/es/guides/${guide.slug}`, guide.description);
  const rest = { faq: "/faq", about: "/about", size: "/tools/signature/size", body: "/tools/signature/body" };
  for (const code of ["en", "zh", "es"]) {
    const prefix = code === "en" ? "" : `/${code}`;
    add(`${prefix}/guides`, traits[code].description);
    add(`${prefix}/chart`, toolCopy[code].chart.description);
    add(`${prefix}/tools/slant`, toolCopy[code].slant.description);
    add(`${prefix}/tools/signature`, toolCopy[code].signature.description);
    for (const key of Object.keys(rest)) add(`${prefix}${rest[key]}`, series[code][key].description);
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
    for (const key of Object.keys(rest)) add(`/${code}${rest[key]}`, series[code][key].description);
  }
  return list;
}

test("meta descriptions land between 110 and 190 characters", () => {
  const list = pages();
  assert.equal(list.length, 223);
  for (const page of list) {
    const text = fitDescription(page.description, page.path);
    assert.ok(text.length >= 110, `${page.path} ${text.length}`);
    assert.ok(text.length <= 190, `${page.path} ${text.length} ${text}`);
    if (page.description.length >= 110) assert.equal(text, page.description);
  }
});

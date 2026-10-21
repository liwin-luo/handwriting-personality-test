import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

// Every English title carries the site name as a suffix, so the part a page
// contributes has to leave room for it.
const SUFFIX = " · Handwriting Personality Test";
const LIMIT = 60;

const seoDir = new URL("../content/seo/", import.meta.url);
const guideDir = new URL("../content/guide-pages/", import.meta.url);
const appDir = new URL("../app/(en)/", import.meta.url);

function appFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) out.push(...appFiles(new URL(`${entry.name}/`, dir)));
    else if (entry.name === "page.tsx") out.push(new URL(entry.name, dir));
  }
  return out;
}

function titlesIn(source) {
  const found = [];
  const matches = [...source.matchAll(/^\s*(seo)?[Tt]itle: "([^"]+)",/gm)];
  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const next = matches[index + 1];
    // A seoTitle replaces the title in the metadata, so the title is only the
    // visible headline and is not length checked.
    if (!match[1] && next && next[1] && next.index - match.index < 200) continue;
    found.push(match[2]);
  }
  return found;
}

test("English page titles leave room for the site name suffix", () => {
  const files = [
    ...fs
      .readdirSync(seoDir)
      .filter((name) => name.startsWith("en-") && name !== "en-home.ts")
      .map((name) => new URL(name, seoDir)),
    ...fs
      .readdirSync(guideDir)
      .filter((name) => name.endsWith(".ts") && !["types.ts", "index.ts"].includes(name))
      .map((name) => new URL(name, guideDir)),
    ...appFiles(appDir),
  ];
  assert.ok(files.length > 15);
  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    for (const title of titlesIn(source)) {
      const rendered = title.length + SUFFIX.length;
      assert.ok(rendered <= LIMIT, `${file.pathname} "${title}" renders at ${rendered} chars`);
    }
  }
});

test("the home page title stands on its own", () => {
  const source = fs.readFileSync(new URL("en-home.ts", seoDir), "utf8");
  const title = (source.match(/^\s*title: "([^"]+)",/m) || [])[1];
  assert.ok(title && title.length <= LIMIT, title);
});

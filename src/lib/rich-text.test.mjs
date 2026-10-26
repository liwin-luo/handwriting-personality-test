import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { splitRichText } from "./rich-text.mjs";

const GENERATOR = "https://fancyfont.tools/cute-font-generator/";

test("plain prose stays plain", () => {
  assert.deepEqual(splitRichText("No link here."), ["No link here."]);
});

test("one https link splits out of the sentence", () => {
  const parts = splitRichText(`Use a [cute font generator](${GENERATOR}) for a short name.`);
  assert.deepEqual(parts, ["Use a ", { label: "cute font generator", href: GENERATOR }, " for a short name."]);
});

test("the cute-text article links to the generator once", () => {
  const src = fs.readFileSync(new URL("../content/seo/en-blog.ts", import.meta.url), "utf8");
  const urls = src.match(/https:\/\/fancyfont\.tools\/cute-font-generator\/?/g) || [];
  assert.equal(urls.length, 1);
  assert.match(src, /\[cute font generator\]\(https:\/\/fancyfont\.tools\/cute-font-generator\/\)/);
});

test("body links stay followable and source links stay nofollow", () => {
  const view = fs.readFileSync(new URL("../components/seo/PageParts.tsx", import.meta.url), "utf8");
  const rich = view.slice(view.indexOf("function RichText"), view.indexOf("export function Prose"));
  assert.match(rich, /rel="noopener"/);
  assert.doesNotMatch(rich, /nofollow/);
  const sources = view.slice(view.indexOf("content.sources.map"));
  assert.match(sources, /rel="nofollow noopener"/);
});

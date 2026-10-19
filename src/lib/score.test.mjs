import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { guides as esGuides, profiles as esProfiles, spanishQuestions } from "../content/es.mjs";
import { localeList } from "../content/locale-list.mjs";
import { traits, traitsCodes } from "../content/traits.mjs";
import { toolCopy } from "../content/tools.mjs";
import { packs } from "../content/latin-registry.mjs";
import { guides as zhGuides } from "../content/zh-guides.mjs";
import { questions as zhQuestions } from "../content/zh.mjs";
import { questions } from "../content/quiz.mjs";
import { languageHref, preferredLanguage } from "./lang-switch.mjs";
import {
  codeFromInput,
  decodeAnswers,
  encodeAnswers,
  pickSamples,
  scoreAnswers,
} from "./score.mjs";

const w = (structure = 0, finish = 0, rhythm = 0, character = 0) => ({
  structure,
  finish,
  rhythm,
  character,
});

function fixture(weights) {
  return weights.map((weights) => ({ options: [{ weights }] }));
}

test("twelve questions, files exist, option ids unique", () => {
  assert.equal(questions.length, 12);
  const ids = new Set();
  for (const question of questions) {
    assert.ok(question.options.length >= 2);
    for (const option of question.options) {
      assert.equal(ids.has(option.id), false);
      ids.add(option.id);
      for (const key of ["structure", "finish", "rhythm", "character"]) {
        assert.equal(Number.isInteger(option.weights[key]), true);
      }
      assert.ok(fs.existsSync(new URL(`../../public/samples/${option.file}`, import.meta.url)));
    }
  }
});

test("guide figures point at real samples", () => {
  const text = fs.readFileSync(new URL("../content/guides.ts", import.meta.url), "utf8");
  const files = [...text.matchAll(/([a-z0-9-]+\.svg)/g)].map((match) => match[1]);
  assert.ok(files.length >= 16);
  for (const file of files) {
    assert.ok(fs.existsSync(new URL(`../../public/samples/${file}`, import.meta.url)), file);
  }
});

test("all first options lock to Everyday Minimalist", () => {
  const picks = questions.map(() => 0);
  const scored = scoreAnswers(questions, picks);
  assert.equal(scored.ok, true);
  assert.equal(scored.profile, "everyday-minimalist");
  assert.deepEqual(scored.totals, { structure: 3, finish: 15, rhythm: 8, character: 7 });
});

test("closed and upright choices lock to Quiet Architect", () => {
  const picks = [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1];
  const scored = scoreAnswers(questions, picks);
  assert.equal(scored.profile, "quiet-architect");
  assert.deepEqual(scored.totals, { structure: 18, finish: 10, rhythm: 1, character: 3 });
});

test("fewer than 8 answers has no profile", () => {
  const picks = questions.map((_, i) => (i < 7 ? 0 : null));
  const scored = scoreAnswers(questions, picks);
  assert.equal(scored.ok, false);
  assert.equal(scored.profile, null);
  assert.equal(scored.answered, 7);
});

test("eight minimalist answers still resolve", () => {
  const picks = questions.map((_, i) => (i < 8 ? 0 : null));
  const scored = scoreAnswers(questions, picks);
  assert.equal(scored.ok, true);
  assert.equal(scored.profile, "everyday-minimalist");
});

test("a tie that is not flourish-plus-rhythm is Instinctive Mixer", () => {
  const questions = fixture([
    w(1, 0, 0, 0),
    w(0, 1, 0, 0),
    w(1, 0, 0, 0),
    w(0, 1, 0, 0),
    w(1, 0, 0, 0),
    w(0, 1, 0, 0),
    w(1, 0, 0, 0),
    w(0, 1, 0, 0),
  ]);
  const scored = scoreAnswers(questions, questions.map(() => 0));
  assert.equal(scored.profile, "instinctive-mixer");
});

test("flourish and rhythm as the top pair is Daydream Doodler", () => {
  const questions = fixture([
    w(0, 0, 1, 0),
    w(0, 0, 0, 1),
    w(0, 0, 1, 0),
    w(0, 0, 0, 1),
    w(0, 0, 1, 0),
    w(0, 0, 0, 1),
    w(0, 0, 1, 0),
    w(0, 0, 0, 1),
  ]);
  const scored = scoreAnswers(questions, questions.map(() => 0));
  assert.equal(scored.profile, "daydream-doodler");
});

test("a two-point lead beats the daydream pair", () => {
  const questions = fixture([
    w(0, 0, 0, 2),
    w(0, 0, 0, 2),
    w(0, 0, 1, 0),
    w(0, 0, 1, 0),
    w(0, 0, 0, 0),
    w(0, 0, 0, 0),
    w(0, 0, 0, 0),
    w(0, 0, 0, 0),
  ]);
  assert.equal(scoreAnswers(questions, questions.map(() => 0)).profile, "beautiful-rebel");
});

test("codes round-trip and reject a bad option", () => {
  const picks = [1, 0, null, 1, 1, 0, 2, 0, 1, 2, null, 0];
  const code = encodeAnswers(picks);
  assert.equal(code, "110-1102012-0");
  assert.deepEqual(decodeAnswers(code, questions), picks);
  assert.equal(decodeAnswers("12" + "0".repeat(11), questions), null);
  assert.equal(decodeAnswers("nope", questions), null);
  assert.equal(codeFromInput(`https://handwritingpersonalitytest.online/r/${code}`, questions), code);
  assert.equal(codeFromInput(code, questions), code);
  assert.equal(codeFromInput("https://handwritingpersonalitytest.online/r/1nope", questions), null);
});

test("a shorter quiz can lower the minimum", () => {
  const short = fixture([w(4, 0, 0, 0), w(4, 0, 0, 0), w(0, 1, 0, 0), w(0, 1, 0, 0)]);
  assert.equal(scoreAnswers(short, [0, 0, null, null], 3).ok, false);
  assert.equal(scoreAnswers(short, [0, 0, 0, null], 3).profile, "quiet-architect");
});

test("chinese samples exist", () => {
  assert.equal(zhQuestions.length, 5);
  for (const question of zhQuestions) {
    for (const option of question.options) {
      assert.ok(fs.existsSync(new URL(`../../public/samples/${option.file}`, import.meta.url)), option.file);
    }
  }
  assert.deepEqual(
    zhGuides.map((guide) => guide.slug),
    zhQuestions.map((question) => question.id),
  );
  for (const guide of zhGuides) {
    assert.equal(guide.questionId, guide.slug);
    for (const figure of guide.figures) {
      assert.ok(fs.existsSync(new URL(`../../public/samples/${figure.file}`, import.meta.url)), figure.file);
    }
  }
});

test("spanish copy covers every latin shape", () => {
  const es = spanishQuestions();
  assert.equal(es.length, questions.length);
  for (let i = 0; i < es.length; i++) {
    assert.equal(es[i].id, questions[i].id);
    assert.equal(es[i].options.length, questions[i].options.length);
    for (let j = 0; j < es[i].options.length; j++) {
      assert.equal(es[i].options[j].id, questions[i].options[j].id);
      assert.deepEqual(es[i].options[j].weights, questions[i].options[j].weights);
      assert.notEqual(es[i].options[j].label, questions[i].options[j].label);
    }
  }
  assert.deepEqual(
    esGuides.map((guide) => guide.slug).sort(),
    ["a", "ampersand", "four", "g", "seven", "slant", "spacing", "zero"],
  );
  for (const slug of [
    "quiet-architect",
    "everyday-minimalist",
    "margin-storyteller",
    "beautiful-rebel",
    "daydream-doodler",
    "instinctive-mixer",
  ]) {
    assert.ok(esProfiles[slug].name);
    assert.ok(esProfiles[slug].sentence);
    assert.ok(esProfiles[slug].practice);
  }
});

const PROFILE_SLUGS = [
  "quiet-architect",
  "everyday-minimalist",
  "margin-storyteller",
  "beautiful-rebel",
  "daydream-doodler",
  "instinctive-mixer",
];

test("each latin pack reuses the same shapes", () => {
  const codes = Object.keys(packs);
  assert.ok(codes.length >= 1);
  for (const code of codes) {
    assert.ok(localeList.some((locale) => locale.code === code), code);
    const pack = packs[code];
    const localized = pack.localizedQuestions();
    assert.equal(localized.length, questions.length);
    for (let i = 0; i < localized.length; i++) {
      assert.equal(localized[i].id, questions[i].id);
      for (let j = 0; j < localized[i].options.length; j++) {
        assert.equal(localized[i].options[j].id, questions[i].options[j].id);
        assert.deepEqual(localized[i].options[j].weights, questions[i].options[j].weights);
        assert.notEqual(localized[i].options[j].label, questions[i].options[j].label);
      }
    }
    assert.deepEqual(
      pack.guides.map((guide) => guide.slug).sort(),
      ["a", "ampersand", "four", "g", "seven", "slant", "spacing", "zero"],
    );
    for (const slug of PROFILE_SLUGS) {
      assert.ok(pack.profiles[slug].name);
      assert.ok(pack.profiles[slug].practice);
    }
    assert.match(JSON.stringify(pack.scienceFaqs) + pack.copy.science.study, /Neter/);
    assert.match(pack.copy.science.study, /737/);
  }
});

test("language switch stays on the translated page", () => {
  assert.equal(languageHref("fr", "/guides/seven"), "/fr/guides/seven");
  assert.equal(languageHref("en", "/fr/guides/seven"), "/guides/seven");
  assert.equal(languageHref("de", "/fr/science"), "/de/science");
  assert.equal(languageHref("zh", "/guides/seven"), "/zh");
  assert.equal(languageHref("fr", "/zh/guides/size"), "/fr");
  assert.equal(languageHref("zh", "/zh/guides/size"), "/zh/guides/size");
  assert.equal(languageHref("es", "/r/1000000000000"), "/es/r/1000000000000");
  assert.equal(languageHref("zh", "/fr/r/1000000000000"), "/zh");
  assert.equal(languageHref("fr", "/tools/slant"), "/fr/tools/slant");
  assert.equal(languageHref("en", "/tools/slant"), "/tools/slant");
  assert.equal(languageHref("zh", "/chart"), "/zh/chart");
  assert.equal(languageHref("en", "/zh/tools/signature"), "/tools/signature");
  assert.equal(languageHref("pt", "/zh/chart"), "/pt/chart");
  assert.equal(languageHref("zh", "/es/tools/slant"), "/zh/tools/slant");
  assert.equal(languageHref("zh", "/guides"), "/zh/guides");
  assert.equal(languageHref("fr", "/guides"), "/fr/guides");
  assert.equal(languageHref("en", "/zh/guides"), "/guides");
  assert.equal(languageHref("es", "/pt/guides"), "/es/guides");
});

test("browser language suggests a page we have, and stays quiet when it already matches", () => {
  assert.equal(preferredLanguage(["zh-CN", "en-US"], "en"), "zh");
  assert.equal(preferredLanguage(["zh-CN", "en-US"], "zh"), null);
  assert.equal(preferredLanguage(["pt-BR"], "en"), "pt");
  assert.equal(preferredLanguage(["ja", "fr-FR"], "en"), "fr");
  assert.equal(preferredLanguage(["ja"], "en"), null);
  assert.equal(preferredLanguage(["en-US", "zh-CN"], "zh"), "en");
});

test("chart, slant, and signature exist in every language", () => {
  const codes = ["en", "zh", ...localeList.map((locale) => locale.code)];
  const latinFilters = ["all", "digit", "letter", "symbol", "spacing", "slant"];
  for (const code of codes) {
    const copy = toolCopy[code];
    assert.ok(copy.nav.chart && copy.nav.slant && copy.nav.signature);
    assert.equal(copy.slant.steps.length, 4);
    assert.equal(copy.slant.faqs.length, 4);
    assert.equal(copy.signature.steps.length, 3);
    assert.equal(copy.signature.faqs.length, 4);
    assert.match(copy.slant.align, /\{angle\}/);
    assert.match(copy.slant.align, /\{reading\}/);
    assert.match(copy.slant.note, /8/);
    for (const token of ["{width}", "{height}", "{length}", "{turns}", "{slant}", "{degrees}"]) {
      assert.ok(copy.signature.stats.includes(token), `${code} stats missing ${token}`);
    }
    assert.equal(copy.chart.filters[0][0], "all");
    if (code === "zh") {
      assert.deepEqual(
        copy.chart.filters.slice(1).map((filter) => filter[0]),
        zhQuestions.map((question) => question.id),
      );
    } else {
      assert.deepEqual(
        copy.chart.filters.map((filter) => filter[0]),
        latinFilters,
      );
    }
  }
});

test("the marks hub has the same six sections in every language", () => {
  const ids = ["size", "slant", "spacing", "pressure", "baseline", "margins", "marks"];
  assert.deepEqual(traitsCodes(), ["en", "zh", "es", "pt", "fr", "de", "id", "vi", "it", "tr"]);
  for (const code of traitsCodes()) {
    const copy = traits[code];
    assert.deepEqual(
      copy.sections.map((section) => section.id),
      ids,
    );
    assert.ok(copy.faqs.length >= 3, code);
    assert.ok(copy.sections.every((section) => section.paragraphs.length >= 1), code);
    const hrefs = copy.sections.flatMap((section) => section.links.map((item) => item.href));
    assert.ok(hrefs.every((href) => href.startsWith("/")), code);
    const pressure = copy.sections.find((section) => section.id === "pressure");
    assert.ok(pressure.links.every((item) => !item.href.includes("#q-")), code);
    assert.ok(pressure.paragraphs.join(" ").length > 40, code);
    if (code === "zh") {
      assert.ok(hrefs.every((href) => href.startsWith("/zh")));
      assert.ok(!hrefs.some((href) => href.includes("#q-t") || href.includes("#q-i")));
      for (const href of ["/zh#q-size", "/zh#q-gap", "/zh#q-lines", "/zh#q-bar", "/zh#q-link"]) {
        assert.ok(hrefs.includes(href), href);
      }
    } else {
      assert.ok(hrefs.includes(code === "en" ? "/guides/slant" : `/${code}/guides/slant`));
      assert.ok(hrefs.includes(code === "en" ? "/#q-t" : `/${code}#q-t`));
    }
  }
});

test("sample picks prefer the winning direction and skip blanks", () => {
  const picks = [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1];
  const samples = pickSamples(questions, picks, "structure", 3);
  assert.equal(samples.length, 3);
  assert.ok(samples.every((sample) => sample.weight >= 1));
  assert.equal(samples[0].weight >= samples[1].weight, true);
});

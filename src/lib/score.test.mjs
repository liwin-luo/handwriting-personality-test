import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { guides as esGuides, profiles as esProfiles, spanishQuestions } from "../content/es.mjs";
import { localeList } from "../content/locale-list.mjs";
import { series, seriesCodes } from "../content/series.mjs";
import { traits, traitsCodes } from "../content/traits.mjs";
import { toolCopy } from "../content/tools.mjs";
import { packs } from "../content/latin-registry.mjs";
import { guides as zhGuides } from "../content/zh-guides.mjs";
import { questions as zhQuestions } from "../content/zh.mjs";
import { questions } from "../content/quiz.mjs";
import { bannerFor, languageHref, preferredLanguage } from "./lang-switch.mjs";
import { choiceNote } from "../content/choice-notes.mjs";
import { baselineShift, cardFrame, chosenLine, shareResult, wrap } from "./share-card.mjs";
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

function picksBy(pairs) {
  const picks = questions.map(() => null);
  for (const [questionId, optionId] of pairs) {
    const questionIndex = questions.findIndex((question) => question.id === questionId);
    picks[questionIndex] = questions[questionIndex].options.findIndex((option) => option.id === optionId);
  }
  return picks;
}

test("nineteen questions, files exist, option ids unique", () => {
  assert.equal(questions.length, 19);
  const ids = new Set();
  for (const question of questions) {
    assert.ok(question.options.length >= 2);
    for (const option of question.options) {
      assert.equal(ids.has(option.id), false);
      ids.add(option.id);
      for (const key of ["structure", "finish", "rhythm", "character"]) {
        assert.equal(Number.isInteger(option.weights[key]), true);
        assert.ok(option.weights[key] <= 2, option.id);
      }
      assert.ok(fs.existsSync(new URL(`../../public/samples/${option.file}`, import.meta.url)));
    }
  }
});

test("guide figures point at real samples", () => {
  const dir = new URL("../content/guide-pages/", import.meta.url);
  const files = fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".ts") && name !== "types.ts" && name !== "index.ts")
    .flatMap((name) => [...fs.readFileSync(new URL(name, dir), "utf8").matchAll(/([a-z0-9-]+\.svg)/g)].map((match) => match[1]));
  assert.ok(files.length >= 16);
  for (const file of files) {
    assert.ok(fs.existsSync(new URL(`../../public/samples/${file}`, import.meta.url)), file);
  }
});

test("every english guide is a full article", () => {
  const dir = new URL("../content/guide-pages/", import.meta.url);
  const names = fs.readdirSync(dir).filter((name) => name.endsWith(".ts") && name !== "types.ts" && name !== "index.ts");
  assert.equal(names.length, 12);
  const block = (src, field) => {
    const start = src.indexOf(`${field}: [`);
    assert.ok(start >= 0, `missing ${field}`);
    let depth = 0;
    for (let index = start; index < src.length; index += 1) {
      if (src[index] === "[") depth += 1;
      if (src[index] === "]") {
        depth -= 1;
        if (depth === 0) return src.slice(start, index + 1);
      }
    }
    return "";
  };
  for (const name of names) {
    const src = fs.readFileSync(new URL(name, dir), "utf8");
    const items = (field, marker) => (block(src, field).match(marker) || []).length;
    assert.equal(items("origin", /^\s{4}"/gm), 6, `${name} origin`);
    assert.equal(items("limits", /^\s{4}"/gm), 5, `${name} limits`);
    assert.equal(items("checkSteps", /^\s{4}"/gm), 4, `${name} checkSteps`);
    assert.equal(items("useCases", /h3: "/g), 3, `${name} useCases`);
    assert.equal(items("related", /href: "/g), 5, `${name} related`);
    assert.equal(items("faqs", /^\s{6}q: "/gm), 8, `${name} faqs`);
  }
});

test("all first options lock to Everyday Minimalist", () => {
  const picks = questions.map(() => 0);
  const scored = scoreAnswers(questions, picks);
  assert.equal(scored.ok, true);
  assert.equal(scored.profile, "everyday-minimalist");
  assert.deepEqual(scored.totals, { structure: 3, finish: 29, rhythm: 8, character: 7 });
  assert.ok(scored.lead > scored.ceiling);
});

test("closed and upright choices lock to Quiet Architect", () => {
  const picks = picksBy([
    ["four", "closed-four"],
    ["seven", "crossed-seven"],
    ["a", "double-storey-a"],
    ["g", "open-g"],
    ["zero", "slashed-zero"],
    ["one", "serif-one"],
    ["t", "mid-t"],
    ["i", "dotted-i-close"],
    ["y", "straight-y"],
    ["ampersand", "traditional-ampersand"],
    ["spacing", "spacing-even"],
    ["slant", "slant-upright"],
  ]);
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

test("a lead no bigger than one answer stays mixed", () => {
  const bank = fixture([
    w(0, 0, 0, 2),
    w(0, 0, 0, 2),
    w(0, 0, 1, 0),
    w(0, 0, 1, 0),
    w(0, 0, 0, 0),
    w(0, 0, 0, 0),
    w(0, 0, 0, 0),
    w(0, 0, 0, 0),
  ]);
  assert.equal(scoreAnswers(bank, bank.map(() => 0)).profile, "daydream-doodler");
});

test("a lead past one answer names the direction", () => {
  const bank = fixture([
    w(0, 0, 0, 3),
    w(0, 0, 0, 3),
    w(0, 0, 1, 0),
    w(0, 0, 1, 0),
    w(0, 0, 0, 0),
    w(0, 0, 0, 0),
    w(0, 0, 0, 0),
    w(0, 0, 0, 0),
  ]);
  const scored = scoreAnswers(bank, bank.map(() => 0));
  assert.equal(scored.profile, "beautiful-rebel");
  assert.ok(scored.lead > scored.ceiling);
});

test("codes round-trip and old english links still open", () => {
  const picks = questions.map(() => 0);
  picks[2] = null;
  const code = encodeAnswers(picks);
  assert.equal(code[0], "2");
  assert.equal(code.length, questions.length + 1);
  assert.deepEqual(decodeAnswers(code, questions), picks);
  assert.equal(decodeAnswers("19" + "0".repeat(11), questions), null);
  assert.equal(decodeAnswers("nope", questions), null);
  const v1 = "110-1102012-0";
  const old = decodeAnswers(v1, questions);
  assert.equal(old[questions.findIndex((question) => question.id === "four")], 1);
  assert.equal(old[questions.findIndex((question) => question.id === "two")], null);
  assert.equal(old.filter((pick) => pick != null).length, 10);
  assert.equal(codeFromInput(`https://handwritingpersonalitytest.online/r/${code}`, questions), code);
  assert.equal(codeFromInput(`https://handwritingpersonalitytest.online/r/${v1}`, questions), v1);
  assert.equal(codeFromInput(code, questions), code);
  assert.equal(codeFromInput("https://handwritingpersonalitytest.online/r/1nope", questions), null);
});

test("a shorter quiz can lower the minimum", () => {
  const short = fixture([w(4, 0, 0, 0), w(4, 0, 0, 0), w(0, 1, 0, 0), w(0, 1, 0, 0)]);
  assert.equal(scoreAnswers(short, [0, 0, null, null], 3).ok, false);
  assert.equal(scoreAnswers(short, [0, 0, 0, null], 3).profile, "quiet-architect");
});

test("chinese samples exist", () => {
  assert.equal(zhQuestions.length, 5);  for (const question of zhQuestions) {
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
    ["a", "ampersand", "four", "g", "i", "one", "seven", "slant", "spacing", "t", "y", "zero"],
  );
  for (const guide of esGuides) {
    assert.equal(guide.faqs.length, 4, guide.slug);
    assert.equal(guide.origin.length, 2, guide.slug);
    for (const figure of guide.figures) {
      assert.ok(fs.existsSync(new URL(`../../public/samples/${figure.file}`, import.meta.url)), figure.file);
    }
  }
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
      ["a", "ampersand", "four", "g", "i", "one", "seven", "slant", "spacing", "t", "y", "zero"],
    );
    for (const guide of pack.guides) {
      assert.equal(guide.faqs.length, 4, `${code} ${guide.slug}`);
      assert.equal(guide.origin.length, 2, `${code} ${guide.slug}`);
      for (const figure of guide.figures) {
        assert.ok(fs.existsSync(new URL(`../../public/samples/${figure.file}`, import.meta.url)), `${code} ${figure.file}`);
      }
    }
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
  assert.equal(languageHref("es", "/guides/t"), "/es/guides/t");
  assert.equal(languageHref("en", "/pt/guides/y"), "/guides/y");
  assert.equal(languageHref("zh", "/guides/one"), "/zh");
  assert.equal(languageHref("de", "/guides/i"), "/de/guides/i");
  assert.equal(languageHref("en", "/fr/guides/seven"), "/guides/seven");
  assert.equal(languageHref("de", "/fr/science"), "/de/science");
  assert.equal(languageHref("zh", "/guides/seven"), "/zh");
  assert.equal(languageHref("fr", "/zh/guides/size"), "/fr");
  assert.equal(languageHref("zh", "/zh/guides/size"), "/zh/guides/size");
  assert.equal(languageHref("es", "/r/1000000000000"), "/es/r/1000000000000");
  assert.equal(languageHref("zh", "/fr/r/1000000000000"), "/zh");
  assert.equal(languageHref("fr", "/tools/slant"), "/fr/tools/slant");
  assert.equal(languageHref("en", "/tools/slant"), "/tools/slant");
  assert.equal(languageHref("zh", "/chart"), "/zh/tools/sample-chart");
  assert.equal(languageHref("en", "/zh/tools/signature"), "/tools/signature");
  assert.equal(languageHref("pt", "/zh/chart"), "/pt/chart");
  assert.equal(languageHref("zh", "/es/tools/slant"), "/zh/tools/slant");
  assert.equal(languageHref("zh", "/guides"), "/zh/guides");
  assert.equal(languageHref("fr", "/guides"), "/fr/guides");
  assert.equal(languageHref("en", "/zh/guides"), "/guides");
  assert.equal(languageHref("es", "/pt/guides"), "/es/guides");
  assert.equal(languageHref("es", "/faq"), "/es/faq");
  assert.equal(languageHref("zh", "/about"), "/zh/about");
  assert.equal(languageHref("en", "/de/tools/signature/size"), "/guides/signature-size");
  assert.equal(languageHref("zh", "/tools/signature/size"), "/zh/guides/signature-size");
  assert.equal(languageHref("zh", "/tools/signature/body"), "/zh/guides/signature-writing");
  assert.equal(languageHref("zh", "/tools/sample-chart"), "/zh/tools/sample-chart");
  assert.equal(languageHref("fr", "/tools/sample-chart"), "/fr/chart");
  assert.equal(languageHref("pt", "/tools/signature/body"), "/pt/tools/signature/body");
  assert.equal(languageHref("zh", "/fr/faq"), "/zh/faq");
});

test("language banner speaks the page language and names the one on offer", () => {
  const zh = bannerFor("zh", "en");
  assert.match(zh.note, /本页是中文/);
  assert.match(zh.note, /English/);
  assert.equal(zh.yes, "切换到 English");
  assert.equal(zh.no, "留在此页");
  const en = bannerFor("en", "zh");
  assert.match(en.note, /This page is in English/);
  assert.match(en.yes, /中文/);
});

test("browser language suggests a page we have, and stays quiet when it already matches", () => {
  assert.equal(preferredLanguage(["zh-CN", "en-US"], "en"), "zh");
  assert.equal(preferredLanguage(["zh-CN", "en-US"], "zh"), null);
  assert.equal(preferredLanguage(["pt-BR"], "en"), "pt");
  assert.equal(preferredLanguage(["pt-BR"], "pt"), null);
  assert.equal(preferredLanguage(["ja", "fr-FR"], "en"), "fr");
  assert.equal(preferredLanguage(["ja"], "en"), null);
  assert.equal(preferredLanguage(["en-US", "zh-CN"], "zh"), "en");
  assert.equal(preferredLanguage(["fr-FR", "zh-CN"], "en"), "fr");
  assert.equal(preferredLanguage(["in-ID"], "en"), "id");
  assert.equal(preferredLanguage(["tr-TR"], "de"), "tr");
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
    assert.ok(copy.sections.every((section) => section.links.every((item) => item.label && item.href)), code);
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
      assert.ok(hrefs.includes(code === "en" ? "/guides/t" : `/${code}/guides/t`));
      assert.ok(hrefs.includes(code === "en" ? "/guides/i" : `/${code}/guides/i`));
      assert.ok(hrefs.includes(code === "en" ? "/#q-t" : `/${code}#q-t`));
    }
  }
});

const EIGHT = {
  en: "Eight",
  es: "Ocho",
  pt: "Oito",
  fr: "Huit",
  de: "Acht",
  id: "Delapan",
  vi: "Tám",
  it: "Otto",
  tr: "Sekiz",
};

test("faq, scoring, and the two signature notes exist in every language", () => {
  assert.deepEqual(seriesCodes(), ["en", "zh", "es", "pt", "fr", "de", "id", "vi", "it", "tr"]);
  const englishQuestion = series.en.faq.faqs[0].q;
  for (const code of seriesCodes()) {
    const copy = series[code];
    assert.ok(copy.faq.faqs.length >= 6, code);
    assert.ok(copy.about.faqs.length >= 4, code);
    assert.equal(copy.size.faqs.length, 4, code);
    assert.equal(copy.body.faqs.length, 4, code);
    assert.equal(copy.notes.length, 2, code);
    if (code !== "en") assert.notEqual(copy.faq.faqs[0].q, englishQuestion, code);
    for (const key of ["faq", "about", "size", "body"]) {
      const page = copy[key];
      assert.ok(page.h1 && page.title, `${code} ${key}`);
      assert.ok(page.more.every((item) => item.label && item.href.startsWith("/")), `${code} ${key}`);
    }
  }
  const zhAbout = JSON.stringify(series.zh.about);
  assert.match(zhAbout, /四题/);
  assert.match(zhAbout, /五题/);
  assert.doesNotMatch(zhAbout, /twelve|\b12\b/);
  for (const [code, word] of Object.entries(EIGHT)) {
    assert.match(JSON.stringify(series[code].about), new RegExp(word));
  }
  assert.equal(series.en.faq.faqs.length, 10);
  assert.equal(series.zh.faq.faqs.length, 9);
  assert.equal(series.en.faq.sections.length, 4);
  assert.equal(series.zh.faq.sections.length, 4);
  assert.equal(series.en.about.sections.length, 5);
  assert.equal(series.zh.about.sections.length, 5);
  for (const item of series.en.faq.more) {
    assert.ok(!item.href.startsWith("/zh"), item.href);
  }
  for (const item of series.zh.faq.more) {
    assert.ok(item.href.startsWith("/zh/"), item.href);
  }
  for (const item of series.zh.about.more) {
    assert.ok(item.href.startsWith("/zh/"), item.href);
  }
});

test("share card wraps words, and characters when there are no spaces", () => {
  const width = (text) => text.length * 10;
  assert.deepEqual(wrap(width, "aa bb cc", 50), ["aa bb", "cc"]);
  assert.deepEqual(wrap(width, "笔迹测验", 20), ["笔迹", "测验"]);
  assert.equal(cardFrame(2, 4).fits, true);
  assert.equal(cardFrame(4, 6).fits, false);
});

test("every chosen shape has a sentence that names the limit", () => {
  const ids = questions.flatMap((question) => question.options.map((option) => option.id));
  for (const lang of ["en", "es", "pt", "fr", "de", "id", "vi", "it", "tr"]) {
    for (const id of ids) {
      const note = choiceNote(lang, id);
      assert.ok(note.length > 20, `${lang} ${id}`);
      if (lang !== "en") assert.notEqual(note, choiceNote("en", id));
    }
  }
  const zhBlob = [];
  for (const question of zhQuestions) {
    for (const option of question.options) {
      const note = choiceNote("zh", option.id);
      assert.ok(note.length > 8, option.id);
      assert.equal(choiceNote("en", option.id), "");
      zhBlob.push(note);
    }
  }
  assert.doesNotMatch(zhBlob.join(""), /twelve|\b12\b|dot sits|crossbar/);
});

test("share copies the link only when the browser allows it", async () => {
  const status = await shareResult({ title: "n", text: "s", url: "https://example.com/r/1" });
  assert.equal(status, "failed");
});

test("glyphs that are drawn higher move down onto the shared line", () => {
  assert.equal(baselineShift("open-four.svg"), 0);
  assert.ok(baselineShift("zh-size-small.svg") > 20);
  assert.ok(baselineShift("spacing-even.svg") > 0);
});

test("the card line keeps question order and stops at six", () => {
  const quiz = Array.from({ length: 8 }, (_, index) => ({ options: [{ file: `f${index}`, id: String(index) }] }));
  const line = chosenLine(quiz, [0, null, 0, 0, 0, 0, 0, 0]);
  assert.deepEqual(
    line.map((option) => option.file),
    ["f0", "f2", "f3", "f4", "f5", "f6"],
  );
});

test("sample picks prefer the winning direction and skip blanks", () => {
  const picks = picksBy([
    ["four", "closed-four"],
    ["seven", "crossed-seven"],
    ["zero", "slashed-zero"],
  ]);
  const samples = pickSamples(questions, picks, "structure", 3);
  assert.equal(samples.length, 3);
  assert.ok(samples.every((sample) => sample.weight >= 1));
  assert.equal(samples[0].weight >= samples[1].weight, true);
});

test("every sample result link in the page copy opens a named result", () => {
  const seoDir = new URL("../content/seo/", import.meta.url);
  const files = ["en-home.ts", "en-tools.ts", "zh.ts"];
  const found = [];
  for (const name of files) {
    const src = fs.readFileSync(new URL(name, seoDir), "utf8");
    for (const match of src.matchAll(/sampleResultHref: "([^"]+)"/g)) found.push(match[1]);
  }
  assert.ok(found.length >= 7, `found ${found.length}`);
  for (const href of found) {
    const parts = href.split("/").filter(Boolean);
    const code = parts[parts.length - 1];
    const chinese = parts[0] === "zh";
    const picks = decodeAnswers(code, chinese ? zhQuestions : questions);
    assert.ok(picks, href);
    const scored = scoreAnswers(chinese ? zhQuestions : questions, picks, chinese ? 4 : 8);
    assert.ok(scored.profile, href);
  }
});

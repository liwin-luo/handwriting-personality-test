const base = process.env.BASE || "http://127.0.0.1:4399";
const problems = [];

const INDEXABLE = [
  "/", "/tools", "/tools/slant", "/tools/signature", "/tools/sample-chart",
  "/guides", "/guides/four", "/guides/seven", "/guides/a", "/guides/g",
  "/guides/zero", "/guides/one", "/guides/t", "/guides/i", "/guides/y",
  "/guides/ampersand", "/guides/slant", "/guides/spacing",
  "/guides/signature-size", "/guides/signature-writing",
  "/blog", "/blog/graphology", "/blog/how-to-analyze-handwriting",
  "/blog/what-is-handwriting-personality-test", "/blog/best-free-handwriting-analysis-tools",
  "/blog/how-to-measure-handwriting-slant",
  "/methodology", "/science", "/about", "/faq", "/results",
  "/results/quiet-architect", "/results/everyday-minimalist", "/results/margin-storyteller",
  "/results/beautiful-rebel", "/results/daydream-doodler", "/results/instinctive-mixer",
  "/privacy", "/terms", "/contact",
  "/zh", "/zh/tools", "/zh/tools/slant", "/zh/tools/signature", "/zh/tools/sample-chart",
  "/zh/guides", "/zh/guides/size", "/zh/guides/gap", "/zh/guides/lines", "/zh/guides/link",
  "/zh/guides/bar", "/zh/guides/signature-size", "/zh/guides/signature-writing",
  "/zh/science", "/zh/faq", "/zh/about",
];

const RETIRED = ["/es", "/es/guides", "/es/chart", "/fr", "/fr/guides", "/fr/chart", "/de", "/de/guides",
  "/de/chart", "/pt", "/pt/guides", "/pt/chart", "/id", "/id/guides", "/id/chart",
  "/vi", "/vi/guides", "/vi/chart", "/it", "/it/guides", "/it/chart", "/tr", "/tr/guides", "/tr/chart"];

const attr = (html, name) => {
  const out = [];
  const re = new RegExp(`<link[^>]*rel="${name}"[^>]*href="([^"]+)"`, "g");
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
};

const titleOf = (html) => (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";

// A crawler reads the decoded text, so measure that rather than the entities.
const decodeEntities = (text) =>
  text
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const alternates = (html) => {
  const out = [];
  const re = /<link[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/gi;
  let m;
  while ((m = re.exec(html))) out.push({ lang: m[1], href: m[2] });
  return out;
};

const metas = (html, name) => {
  const out = [];
  const re = new RegExp(`<meta[^>]*name="${name}"[^>]*content="([^"]+)"`, "g");
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
};

const jsonLd = (html) => {
  const out = [];
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    try {
      out.push(JSON.parse(m[1]));
    } catch (error) {
      problems.push(`bad JSON-LD: ${String(error).slice(0, 90)}`);
    }
  }
  return out;
};

async function check(path) {
  const res = await fetch(base + path, { redirect: "manual" });
  if (res.status !== 200) {
    problems.push(`${path} -> ${res.status}`);
    return;
  }
  const html = await res.text();
  const canonicals = attr(html, "canonical");
  const links = alternates(html);
  const robots = metas(html, "robots").join(",");
  const blocks = jsonLd(html);

  if (canonicals.length !== 1) problems.push(`${path} canonical count ${canonicals.length}`);
  else {
    const expected = `https://handwritingpersonalitytest.online${path === "/" ? "" : path}`;
    if (canonicals[0] !== expected) problems.push(`${path} canonical ${canonicals[0]}`);
  }

  for (const link of links) {
    if (!["en", "zh", "x-default"].includes(link.lang)) problems.push(`${path} hreflang ${link.lang}`);
    if (/\/(es|pt|fr|de|id|vi|it|tr)(\/|\.|$)/.test(link.href)) {
      problems.push(`${path} hreflang points at a retired locale ${link.href}`);
    }
  }
  if (path === "/" || path === "/zh") {
    if (!links.some((l) => l.lang === "x-default")) problems.push(`${path} missing x-default`);
  }
  if (path.startsWith("/r/") && !robots.includes("noindex")) {
    problems.push(`${path} result page is indexable`);
  }
  if (blocks.length === 0) problems.push(`${path} has no JSON-LD`);
  for (const block of blocks) {
    if (!block["@type"]) problems.push(`${path} JSON-LD without @type`);
  }

  const title = decodeEntities(titleOf(html));
  const description = decodeEntities(metas(html, "description")[0] || "");
  const chinese = path.startsWith("/zh");
  if (title.length > 60) problems.push(`${path} title ${title.length} chars`);
  if (chinese) {
    if (description.length < 62 || description.length > 130) {
      problems.push(`${path} description ${description.length} chars`);
    }
  } else if (description.length < 140 || description.length > 155) {
    problems.push(`${path} description ${description.length} chars`);
  }

  return { path, canonicals, links, robots, blocks };
}

async function main() {
  for (const path of INDEXABLE) await check(path);

  for (const path of RETIRED) {
    const res = await fetch(base + path, { redirect: "manual" });
    if (res.status !== 200) {
      problems.push(`retired ${path} -> ${res.status}`);
      continue;
    }
    const html = await res.text();
    const robots = metas(html, "robots").join(",");
    if (!robots.includes("noindex")) problems.push(`retired ${path} is not noindex (robots=${robots})`);
    const links = alternates(html);
    if (links.length) problems.push(`retired ${path} has hreflang ${links.map((l) => l.lang).join(",")}`);
  }

  for (const file of ["/sitemap.xml", "/sitemaps/en.xml", "/sitemaps/zh.xml"]) {
    const res = await fetch(base + file);
    if (res.status !== 200) {
      problems.push(`${file} -> ${res.status}`);
      continue;
    }
    const xml = await res.text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (file === "/sitemap.xml") {
      for (const loc of locs) {
        if (!/sitemaps\/(en|zh)\.xml/.test(loc)) problems.push(`sitemap index lists ${loc}`);
      }
    } else {
      for (const loc of locs) {
        if (/\/(es|pt|fr|de|id|vi|it|tr)(\/|$)/.test(loc)) problems.push(`${file} lists retired ${loc}`);
        if (/\/r\//.test(loc)) problems.push(`${file} lists a result link ${loc}`);
      }
      const locale = file.includes("zh") ? "zh" : "en";
      console.log(`${file}: ${locs.length} urls`);
    }
  }

  console.log(`checked ${INDEXABLE.length} indexable and ${RETIRED.length} retired paths`);
  for (const problem of problems) console.log("PROBLEM", problem);
  console.log(problems.length ? `${problems.length} problems` : "no metadata problems");
}

main();

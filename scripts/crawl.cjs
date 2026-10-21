const base = process.env.BASE || "http://127.0.0.1:4399";
const seen = new Map();
const problems = [];

async function get(path) {
  if (seen.has(path)) return seen.get(path);
  const promise = (async () => {
    try {
      const res = await fetch(base + path, { redirect: "manual" });
      const text = res.status === 200 ? await res.text() : "";
      return { status: res.status, location: res.headers.get("location"), text };
    } catch (error) {
      return { status: 0, location: null, text: "", error: String(error) };
    }
  })();
  seen.set(path, promise);
  return promise;
}

const seeds = [
  "/", "/tools", "/tools/slant", "/tools/signature", "/tools/sample-chart",
  "/guides", "/guides/four", "/guides/seven", "/guides/a", "/guides/g",
  "/guides/zero", "/guides/one", "/guides/t", "/guides/i", "/guides/y",
  "/guides/ampersand", "/guides/slant", "/guides/spacing",
  "/guides/signature-size", "/guides/signature-writing",
  "/blog", "/blog/graphology", "/blog/how-to-analyze-handwriting",
  "/blog/what-is-handwriting-personality-test", "/blog/best-free-handwriting-analysis-tools",
  "/blog/how-to-measure-handwriting-slant",
  "/methodology", "/science", "/about", "/faq", "/results", "/results/quiet-architect",
  "/results/everyday-minimalist", "/results/margin-storyteller", "/results/beautiful-rebel",
  "/results/daydream-doodler", "/results/instinctive-mixer",
  "/privacy", "/terms", "/contact",
  "/zh", "/zh/tools", "/zh/tools/slant", "/zh/tools/signature", "/zh/tools/sample-chart",
  "/zh/guides", "/zh/guides/size", "/zh/guides/gap", "/zh/guides/lines", "/zh/guides/link",
  "/zh/guides/bar", "/zh/guides/signature-size", "/zh/guides/signature-writing",
  "/zh/science", "/zh/faq", "/zh/about",
  "/es", "/es/guides", "/es/chart", "/fr", "/fr/chart", "/de", "/pt", "/id", "/vi", "/it", "/tr",
];

const links = new Set();
for (const seed of seeds) links.add(seed);

async function main() {
  for (const seed of seeds) {
    const page = await get(seed);
    if (page.status !== 200) {
      problems.push(`seed ${seed} -> ${page.status}`);
      continue;
    }
    const hrefs = [...page.text.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    for (const href of hrefs) {
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      if (href.startsWith("/_next") || href.startsWith("/samples") || href.startsWith("/icons")) continue;
      links.add(href.split("#")[0]);
    }
  }

  const all = [...links].filter(Boolean).sort();
  for (const path of all) {
    const page = await get(path);
    if (page.status !== 200) problems.push(`link ${path} -> ${page.status}${page.location ? " -> " + page.location : ""}`);
  }

  console.log(`checked ${all.length} internal paths`);
  for (const problem of problems) console.log("PROBLEM", problem);
  console.log(problems.length ? `${problems.length} problems` : "no broken internal links");
}

main();

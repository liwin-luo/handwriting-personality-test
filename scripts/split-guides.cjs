const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(root, "src/content/guides.ts"), "utf8");
const start = src.indexOf("export const guides: Guide[] = [");
const body = src.slice(start);

const re =
  /  \{\n    slug: "([^"]+)",\n    title: "([^"]+)",\n    description: "([^"]+)",\n    questionId: "([^"]+)",\n    figures: \[\n([\s\S]*?)\n    \],\n    origin: \[\n([\s\S]*?)\n    \],\n    limits: \[\n([\s\S]*?)\n    \],\n    faqs: \[\n([\s\S]*?)\n    \],\n  \},/g;

const indent = (block) =>
  block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => "    " + line)
    .join("\n");

let count = 0;
for (const m of body.matchAll(re)) {
  const [, slug, title, description, questionId, figures, origin, limits, faqs] = m;
  const out = `import type { Guide } from "./types";

export const ${slug}: Guide = {
  slug: "${slug}",
  title: "${title}",
  description: "${description}",
  questionId: "${questionId}",
  figures: [
${indent(figures)}
  ],
  origin: [
${indent(origin)}
  ],
  limits: [
${indent(limits)}
  ],
  checkSteps: [],
  useCases: [],
  related: [],
  faqs: [
${indent(faqs)}
  ],
};
`;
  fs.writeFileSync(path.join(root, `src/content/guide-pages/${slug}.ts`), out);
  count += 1;
}
console.log("wrote", count);

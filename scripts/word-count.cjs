const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const base = path.join(root, ".next/server/app");

function textOf(file) {
  const html = fs.readFileSync(file, "utf8");
  const body = html.split("</body>")[0].replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ");
  return body
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;|&#\d+;/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function cjkOf(file) {
  const html = fs.readFileSync(file, "utf8");
  const body = html.split("</body>")[0].replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ");
  const text = body.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;|&#\d+;/g, " ");
  return (text.match(/[一-鿿]/g) || []).length;
}

const targets = process.argv.slice(2);
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
}
walk(base);

const rows = [];
for (const file of files) {
  const rel = path.relative(base, file).replace(/\.html$/, "");
  if (targets.length && !targets.some((t) => rel.includes(t))) continue;
  rows.push([rel, textOf(file)]);
}
rows.sort((a, b) => b[1] - a[1]);
for (const [rel, words] of rows) {
  const file = path.join(base, `${rel}.html`);
  const cjk = cjkOf(file);
  console.log(String(words).padStart(6), cjk ? `cjk:${String(cjk).padStart(5)}` : "          ", rel);
}

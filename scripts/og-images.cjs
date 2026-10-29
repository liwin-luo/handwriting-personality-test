// Renders the social preview and Pinterest images from the same palette and
// glyph files the site uses. Run: node scripts/og-images.cjs
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const ROOT = path.resolve(__dirname, "..");
const SAMPLES = path.join(ROOT, "public/samples");
const OUT = path.join(ROOT, "public/og");
const BUILD = "/tmp/og-build";
const FONT = "/tmp/nunito-latin.woff2";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

if (!fs.existsSync(FONT)) {
  throw new Error(`Missing ${FONT}. Download the Nunito latin woff2 from fonts.gstatic.com first.`);
}

function glyph(name, stroke = 11) {
  const file = path.join(SAMPLES, `${name}.svg`);
  const svg = fs.readFileSync(file, "utf8");
  const body = svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  return `<svg viewBox="0 0 280 200" width="100%" height="100%" aria-hidden="true" style="overflow:visible">${body.replace(
    /stroke-width="8"/g,
    `stroke-width="${stroke}"`,
  )}</svg>`;
}

const css = (w, h) => `
@font-face { font-family: Nunito; src: url("file://${FONT}") format("woff2"); font-weight: 200 1000; }
* { box-sizing: border-box; }
html, body { margin: 0; width: ${w}px; height: ${h}px; overflow: hidden; }
body {
  background: #fff7e6;
  background-image: radial-gradient(#141414 1px, transparent 1px);
  background-size: 26px 26px;
  background-position: -13px -13px;
  color: #141414;
  font-family: Nunito, "Avenir Next", Helvetica, sans-serif;
  font-weight: 600;
}
.frame {
  position: absolute; inset: 18px;
  border: 5px solid #141414; border-radius: 26px;
  background: #fff7e6;
  background-image: radial-gradient(#141414 1px, transparent 1px);
  background-size: 26px 26px;
  padding: 40px 46px 34px;
  display: flex; flex-direction: column; justify-content: space-between;
}
.kicker {
  display: inline-block; align-self: flex-start;
  background: #ff6b9d; color: #fff; border: 3px solid #141414; border-radius: 999px;
  padding: 7px 16px 8px; font-size: 17px; font-weight: 900; letter-spacing: .1em; text-transform: uppercase;
  box-shadow: 4px 4px 0 #141414;
}
.title { font-weight: 900; letter-spacing: -.025em; margin: 0; }
.sub { font-weight: 600; color: #3d3d3d; margin: 0; }
.url { font-weight: 900; font-size: 20px; margin: 0; }
.url span { background: linear-gradient(transparent 62%, #ffd23f 62%); padding: 0 2px; }
.chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; }
.chip { background: #fff; border: 3px solid #141414; border-radius: 10px; padding: 8px 14px 9px; font-size: 17px; font-weight: 800; box-shadow: 3px 3px 0 #141414; }
.card {
  background: #fff; border: 4px solid #141414; border-radius: 16px;
  display: flex; align-items: center; justify-content: center; padding: 10px;
  box-shadow: 5px 5px 0 #141414; overflow: hidden; min-height: 0;
}
.card svg { display: block; width: 100%; height: 100%; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.wide .frame { flex-direction: row; align-items: stretch; gap: 40px; }
.wide .left { display: flex; flex-direction: column; justify-content: space-between; width: 560px; }
.wide .title { font-size: 62px; line-height: .98; }
.wide .sub { font-size: 21px; line-height: 1.35; margin-top: 16px; }
.wide .panel { width: 430px; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(3, 1fr); gap: 14px; }
.tall .frame { padding: 54px 52px 44px; }
.tall .title { font-size: 76px; line-height: .96; }
.tall .sub { font-size: 28px; line-height: 1.35; margin-top: 20px; }
.tall .panel { display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(3, 190px); gap: 16px; margin: 26px 0 0; }
.tall .kicker { font-size: 20px; padding: 9px 20px 10px; }
.label .panel { width: 360px; grid-template-columns: 1fr; grid-template-rows: repeat(3, 1fr); }
.label .title { font-size: 64px; line-height: .96; }
.label .sub { font-size: 20px; }
`;

const square = (spec) => {
  const panels = spec.glyphs.map((g) => `<div class="card">${glyph(g)}</div>`).join("");
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css(1200, 630)}</style></head>
<body class="wide"><div class="frame">
  <div class="left">
    <div>
      <span class="kicker">${spec.kicker}</span>
      <h1 class="title" style="margin-top:22px">${spec.title}</h1>
      <p class="sub">${spec.sub}</p>
      ${spec.chips ? `<div class="chips">${spec.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>` : ""}
    </div>
    <p class="url"><span>handwritingpersonalitytest.online${spec.path ?? ""}</span></p>
  </div>
  <div class="panel">${panels}</div>
</div></body></html>`;
};

const tall = (spec) => {
  const panels = spec.glyphs.map((g) => `<div class="card">${glyph(g)}</div>`).join("");
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css(1000, 1500)}</style></head>
<body class="tall"><div class="frame">
  <div>
    <span class="kicker">${spec.kicker}</span>
    <h1 class="title" style="margin-top:26px">${spec.title}</h1>
    <p class="sub">${spec.sub}</p>
  </div>
  <div class="panel">${panels}</div>
  <div>
    <p class="url" style="font-size:26px"><span>handwritingpersonalitytest.online${spec.path ?? ""}</span></p>
  </div>
</div></body></html>`;
};

const specs = [
  {
    name: "quiz",
    kicker: "Free test · no upload",
    title: "Which letterforms are actually yours?",
    sub: "19 shapes. 8 answers. Six fictional labels, and the four totals that produced yours.",
    chips: ["19 questions", "8 to finish", "4 tallies", "6 labels"],
    path: "/#test",
    glyphs: ["curved-four", "double-storey-a", "looped-g", "crossed-seven", "slashed-zero", "looped-y"],
  },
  {
    name: "chart",
    kicker: "Free tool · printable PDF",
    title: "Every shape, and what the trait claim rests on",
    sub: "A handwriting analysis chart you can filter, print, and check against the evidence.",
    chips: ["All test shapes", "5 filters", "Print view", "PDF"],
    path: "/tools/sample-chart",
    glyphs: ["closed-four", "open-four", "plain-seven", "hatted-five", "print-g", "flourished-ampersand"],
  },
  {
    name: "results",
    kicker: "Six labels",
    title: "Six names for the shapes you pick",
    sub: "Structure, finish, rhythm, character. The label is a filing category, not a diagnosis.",
    chips: ["4 tallies", "6 labels", "1 scoring rule"],
    path: "/results",
    glyphs: ["single-storey-a", "curved-two", "looped-eight", "dotted-zero", "serif-one", "slant-left"],
  },
  {
    name: "guides",
    kicker: "12 guides",
    title: "What one letterform can and cannot say",
    sub: "One shape per page: the claim, the copybook explanation, and the study behind it.",
    chips: ["12 guides", "1 shape each", "Sources cited"],
    path: "/guides",
    glyphs: ["looped-g", "open-g", "print-g", "slashed-zero", "dotted-zero", "looped-y"],
  },
  {
    name: "tools",
    kicker: "Four tools",
    title: "Measure the page, not the person",
    sub: "Slant, signature, chart, and the shape test. Every measurement stays in your browser.",
    chips: ["4 tools", "No upload", "Local canvas"],
    path: "/tools",
    glyphs: ["slant-left", "slant-upright", "slant-right", "size-small", "size-large", "spacing-wide"],
  },
  {
    name: "blog",
    kicker: "Evidence",
    title: "Read what handwriting can and cannot prove",
    sub: "Explainers on graphology, AI analysis, tool selection, and measurement.",
    chips: ["7 explainers", "Sources cited", "No upload"],
    path: "/blog",
    glyphs: ["plus-ampersand", "traditional-ampersand", "flourished-ampersand", "high-t", "mid-t", "uncrossed-t"],
  },
];

const pins = [
  {
    name: "pin-quiz",
    kicker: "Free test",
    title: "19 shapes. 8 answers. One fictional label.",
    sub: "A handwriting personality test that shows its own arithmetic. No upload, no account.",
    path: "/#test",
    glyphs: ["curved-four", "double-storey-a", "looped-g", "crossed-seven", "slashed-zero", "looped-y"],
  },
  {
    name: "pin-chart",
    kicker: "Printable PDF",
    title: "The handwriting chart, claim by claim",
    sub: "Every shape in the test, the trait usually attached to it, and what explains it instead.",
    path: "/tools/sample-chart",
    glyphs: ["closed-four", "open-four", "plain-seven", "hatted-five", "print-g", "flourished-ampersand"],
  },
  {
    name: "pin-guides",
    kicker: "12 guides",
    title: "What your letterforms do and do not say",
    sub: "One shape per page, each claim checked against the research on graphology.",
    path: "/guides",
    glyphs: ["looped-g", "open-g", "print-g", "slashed-zero", "dotted-zero", "looped-y"],
  },
  {
    name: "pin-results",
    kicker: "Six labels",
    title: "Six labels, four tallies, no diagnosis",
    sub: "See how each result is scored, and why the label is fictional by design.",
    path: "/results",
    glyphs: ["single-storey-a", "curved-two", "looped-eight", "dotted-zero", "serif-one", "slant-left"],
  },
];

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(OUT, "labels"), { recursive: true });
fs.mkdirSync(BUILD, { recursive: true });

function render(spec, html, width, height, outName) {
  const page = path.join(BUILD, `${spec.name}.html`);
  fs.writeFileSync(page, html);
  const target = path.join(OUT, outName);
  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      `--window-size=${width},${height}`,
      "--virtual-time-budget=3000",
      `--screenshot=${target}`,
      `file://${page}`,
    ],
    { stdio: "ignore" },
  );
  console.log(`wrote public/og/${outName}`);
}

for (const spec of specs) render(spec, square(spec), 1200, 630, `${spec.name}.png`);
for (const spec of pins) render(spec, tall(spec), 1000, 1500, `${spec.name}.png`);

const labelCard = (spec) => {
  const panels = spec.glyphs.map((g) => `<div class="card">${glyph(g)}</div>`).join("");
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css(1200, 630)}</style></head>
<body class="wide label"><div class="frame">
  <div class="left">
    <div>
      <span class="kicker">${spec.kicker}</span>
      <h1 class="title" style="margin-top:22px">${spec.title}</h1>
      <p class="sub">${spec.sub}</p>
      ${spec.chips ? `<div class="chips">${spec.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>` : ""}
    </div>
    <p class="url"><span>handwritingpersonalitytest.online</span></p>
  </div>
  <div class="panel">${panels}</div>
</div></body></html>`;
};

(async () => {
  const en = await import(pathToFileURL(path.join(ROOT, "src/content/quiz.mjs")).href);
  const zh = await import(pathToFileURL(path.join(ROOT, "src/content/zh.mjs")).href);

  for (const profile of en.profiles) {
    const spec = {
      name: `label-${profile.slug}`,
      kicker: "Your shapes",
      title: profile.name,
      sub: profile.sentence,
      chips: ["Fictional label", "19 shapes", "No upload"],
      glyphs: profile.examples.map((file) => file.replace(/\.svg$/, "")),
    };
    render(spec, labelCard(spec), 1200, 630, `labels/${spec.name}.png`);
  }

  for (const profile of zh.profiles) {
    const spec = {
      name: `label-zh-${profile.slug}`,
      kicker: "这组写法",
      title: profile.name,
      sub: profile.sentence,
      chips: ["写法的名称", "19 个写法", "不上传"],
      glyphs: profile.examples.map((file) => file.replace(/\.svg$/, "")),
    };
    render(spec, labelCard(spec), 1200, 630, `labels/${spec.name}.png`);
  }
})();

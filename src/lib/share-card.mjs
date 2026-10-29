/** 4:5 share card. Words stay on the page; the PNG is only the picture. */

const W = 1080;
const H = 1350;
const INK = "#141414";
const PAPER = "#fff7e6";
const MUTED = "#3d3d3d";
const PINK = "#ff6b9d";
const POP = "#ffd23f";
const CARD = "#ffffff";

const LEFT = 96;
const CONTENT_W = 888;
const NAME_BASELINE = { one: 430, two: 300 };
const SENTENCE_GAP = 102;
const TALLY_TOP = 790;
const TALLY_H = 150;
const GLYPH_TOP = 980;
const GLYPH_H = 150;
const FOOTER_Y = 1212;

const FRAME_ROWS = 3;
const FRAME_COLS = 6;

/** Whether a grid of stickers still fits the card without shrinking below legibility. */
export function cardFrame(rows, cols) {
  return {
    rows,
    cols,
    fits: rows >= 1 && rows <= FRAME_ROWS && cols >= 1 && cols <= FRAME_COLS,
  };
}

export function wrap(measure, text, max) {
  const lines = [];
  let line = "";
  const spaced = text.includes(" ");
  const tokens = spaced ? text.split(" ") : [...text];
  const gap = spaced ? " " : "";
  for (const token of tokens) {
    const next = line ? `${line}${gap}${token}` : token;
    if (line && measure(next) > max) {
      lines.push(line);
      line = token;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Where the shared writing line cuts each sample. Most Latin letters sit at 168/200. */
export const CARD_LINE = 0.84;

const SIT = {
  "spacing-tight.svg": 0.65,
  "spacing-even.svg": 0.65,
  "spacing-wide.svg": 0.65,
  "slant-left.svg": 0.82,
  "slant-upright.svg": 0.82,
  "slant-right.svg": 0.82,
  "zh-size-small.svg": 116.5 / 200,
  "zh-size-mid.svg": 121 / 200,
  "zh-size-large.svg": 130.5 / 200,
  "zh-gap-tight.svg": 0.625,
  "zh-gap-even.svg": 0.625,
  "zh-gap-wide.svg": 0.625,
  "zh-line-tight.svg": 0.76,
  "zh-line-even.svg": 0.79,
  "zh-line-wide.svg": 0.87,
  "zh-link-none.svg": 0.76,
  "zh-link-some.svg": 0.75,
  "zh-link-many.svg": 0.7,
  "zh-bar-level.svg": 0.8,
  "zh-bar-rising.svg": 0.8,
  "zh-bar-wavy.svg": 0.8,
};

export function sitRatio(file) {
  return SIT[file] ?? CARD_LINE;
}

/** Percent of the image height. Positive moves the ink down onto the shared line. */
export function baselineShift(file) {
  return (CARD_LINE - sitRatio(file)) * 100;
}

/** The first answered shapes, in question order, up to six. */
export function chosenLine(questions, picks, limit = 6) {
  const line = [];
  for (let index = 0; index < questions.length && line.length < limit; index++) {
    const pick = picks[index];
    if (pick == null) continue;
    const option = questions[index].options[pick];
    if (option) line.push(option);
  }
  return line;
}

/** Share sheet when the browser has one. Otherwise copy the result link. */
export async function shareResult({ title, text, url }) {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return "shared";
    } catch (error) {
      if (error && error.name === "AbortError") return "cancel";
    }
  }
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    return "failed";
  }
  return "copied";
}

function loadImage(file) {
  const image = new Image();
  image.src = `/samples/${file}`;
  return image.decode().then(() => image);
}

function family(variable) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  const fallback = '"PingFang SC", "Helvetica Neue", Arial, sans-serif';
  return value ? `${value}, ${fallback}` : fallback;
}

function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function tracked(ctx, text, x, y, gap) {
  if (/[\u3400-\u9fff]/.test(text)) {
    ctx.fillText(text, x, y);
    return;
  }
  let cursor = x;
  for (const char of text) {
    ctx.fillText(char, cursor, y);
    cursor += ctx.measureText(char).width + gap;
  }
}

function sticker(ctx, x, y, w, h, r) {
  ctx.fillStyle = INK;
  roundRect(ctx, x + 9, y + 9, w, h, r);
  ctx.fill();
  ctx.fillStyle = CARD;
  roundRect(ctx, x, y, w, h, r);
  ctx.fill();
  ctx.strokeStyle = INK;
  ctx.lineWidth = 7;
  ctx.stroke();
}

function fitLines(ctx, text, maxWidth, sizes, lineCount) {
  for (const size of sizes) {
    ctx.font = `900 ${size}px ${ctx.__display}`;
    const lines = wrap((value) => ctx.measureText(value).width, text, maxWidth);
    if (lines.length <= lineCount) return { lines, size };
  }
  ctx.font = `900 ${sizes[sizes.length - 1]}px ${ctx.__display}`;
  const lines = wrap((value) => ctx.measureText(value).width, text, maxWidth);
  return { lines: lines.slice(0, lineCount), size: sizes[sizes.length - 1] };
}

export async function downloadShareCard({
  kicker,
  name,
  sentence,
  files,
  filename,
  labels,
  ranked,
  tallyLabel = "Four directions",
  lang = "en",
}) {
  await document.fonts.ready;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no canvas");
  const display = family("--font-nunito");
  const body = family("--font-nunito");
  ctx.__display = display;

  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "rgba(20, 20, 20, 0.16)";
  for (let x = 27; x < W; x += 54) {
    for (let y = 27; y < H; y += 54) {
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.strokeStyle = INK;
  ctx.lineWidth = 10;
  roundRect(ctx, 40, 40, W - 80, H - 80, 44);
  ctx.stroke();

  ctx.font = `900 27px ${display}`;
  const kickerWidth = [...kicker].reduce((sum, char) => sum + ctx.measureText(char).width + 2.6, 0);
  const pillW = Math.max(260, kickerWidth + 56);
  ctx.fillStyle = INK;
  roundRect(ctx, LEFT + 7, 100 + 7, pillW, 62, 31);
  ctx.fill();
  ctx.fillStyle = PINK;
  roundRect(ctx, LEFT, 100, pillW, 62, 31);
  ctx.fill();
  ctx.strokeStyle = INK;
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  tracked(ctx, kicker, LEFT + 28, 142, 2.6);

  const nameFit = fitLines(ctx, name, CONTENT_W, [150, 128, 108, 92], 2);
  const nameTop = nameFit.lines.length === 1 ? NAME_BASELINE.one : NAME_BASELINE.two;
  ctx.fillStyle = INK;
  ctx.textAlign = "left";
  ctx.font = `900 ${nameFit.size}px ${display}`;
  nameFit.lines.forEach((line, index) => {
    ctx.fillText(line, LEFT, nameTop + index * (nameFit.size * 1.02));
  });
  const nameBottom = nameTop + (nameFit.lines.length - 1) * (nameFit.size * 1.02);

  ctx.fillStyle = PINK;
  roundRect(ctx, LEFT, nameBottom + 30, 96, 12, 6);
  ctx.fill();

  ctx.font = `600 44px ${body}`;
  let sentenceLines = wrap((value) => ctx.measureText(value).width, sentence, CONTENT_W);
  if (sentenceLines.length > 3) {
    ctx.font = `600 38px ${body}`;
    sentenceLines = wrap((value) => ctx.measureText(value).width, sentence, CONTENT_W);
  }
  if (sentenceLines.length > 3) {
    sentenceLines = sentenceLines.slice(0, 3);
    sentenceLines[2] = `${sentenceLines[2].replace(/[\s,.;:]+$/, "")}…`;
  }
  const sentenceTop = nameBottom + SENTENCE_GAP;
  ctx.fillStyle = MUTED;
  sentenceLines.forEach((line, index) => ctx.fillText(line, LEFT, sentenceTop + index * 60));

  const tallies = labels && ranked ? ranked.slice(0, 4).map((item) => ({ label: labels[item.id] ?? item.id, score: item.score })) : [];
  if (tallies.length >= 2) {
    ctx.font = `800 22px ${body}`;
    ctx.fillStyle = MUTED;
    ctx.textAlign = "left";
    tracked(ctx, tallyLabel.toUpperCase(), LEFT + 2, TALLY_TOP - 36, 2.4);
    const gap = 16;
    const cardW = (CONTENT_W - gap * (tallies.length - 1)) / tallies.length;
    for (let index = 0; index < tallies.length; index++) {
      const x = LEFT + index * (cardW + gap);
      sticker(ctx, x, TALLY_TOP, cardW, TALLY_H, 20);
      const label = tallies[index].label.toUpperCase();
      ctx.font = `800 22px ${body}`;
      const labelWidth = [...label].reduce((sum, char) => sum + ctx.measureText(char).width + 1.2, 0);
      ctx.fillStyle = MUTED;
      ctx.textAlign = "left";
      tracked(ctx, label, x + (cardW - labelWidth) / 2, TALLY_TOP + 48, 1.2);
      ctx.fillStyle = INK;
      ctx.font = `900 60px ${display}`;
      ctx.textAlign = "center";
      ctx.fillText(String(tallies[index].score), x + cardW / 2, TALLY_TOP + 118);
      ctx.textAlign = "left";
    }
  }

  const shown = (files || []).slice(0, FRAME_COLS);
  if (shown.length && cardFrame(1, shown.length).fits) {
    const images = await Promise.all(shown.map(loadImage));
    const gap = 12;
    const cardW = (CONTENT_W - gap * (images.length - 1)) / images.length;
    const startX = LEFT + (CONTENT_W - (cardW * images.length + gap * (images.length - 1))) / 2;
    images.forEach((image, index) => {
      const x = startX + index * (cardW + gap);
      sticker(ctx, x, GLYPH_TOP, cardW, GLYPH_H, 18);
      const pad = 18;
      const scale = Math.min((cardW - pad * 2) / image.width, (GLYPH_H - pad * 2) / image.height);
      const dw = image.width * scale;
      const dh = image.height * scale;
      ctx.drawImage(image, x + (cardW - dw) / 2, GLYPH_TOP + (GLYPH_H - dh) / 2, dw, dh);
    });
  }

  ctx.font = `900 30px ${display}`;
  const url = "handwritingpersonalitytest.online";
  const urlWidth = ctx.measureText(url).width;
  ctx.fillStyle = POP;
  ctx.fillRect(LEFT - 2, FOOTER_Y - 11, urlWidth + 8, 14);
  ctx.fillStyle = INK;
  ctx.fillText(url, LEFT, FOOTER_Y);

  const tag = lang === "zh" ? "免费 · 不上传" : "Free · no upload · 19 shapes";
  ctx.font = `800 22px ${body}`;
  ctx.fillStyle = MUTED;
  ctx.textAlign = "right";
  ctx.fillText(tag, LEFT + CONTENT_W, FOOTER_Y);
  ctx.textAlign = "left";

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("no png");
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(objectUrl);
}

/** 4:5 share card. Words stay on the page; the PNG is only the picture. */

const W = 800;
const H = 1000;
const TEXT_X = 96;
const TEXT_W = 632;
const NAME_TOP = 188;
const NAME_STEP = 78;
const SENTENCE_STEP = 36;
const BAND_H = 300;
const BAND_BOTTOM = 868;

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

/** Title and sentence stay together. The drawing band sits above the footer. */
export function cardFrame(nameLines, sentenceLines) {
  const nameLast = NAME_TOP + (nameLines - 1) * NAME_STEP;
  const sentenceFirst = nameLast + 84;
  const textBottom = sentenceFirst + (sentenceLines - 1) * SENTENCE_STEP;
  const bandTop = BAND_BOTTOM - BAND_H;
  return { nameLast, sentenceFirst, plateTop: bandTop, fits: textBottom + 36 < bandTop };
}

function loadImage(file) {
  const image = new Image();
  image.src = `/samples/${file}`;
  return image.decode().then(() => image);
}

function family(variable) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  const cjk = '"Songti SC", "Noto Serif SC", "Source Han Serif SC", "Songti TC", Palatino, serif';
  return value ? `${value}, ${cjk}` : cjk;
}

function tracked(ctx, text, x, y) {
  if (/[\u3400-\u9fff]/.test(text)) {
    ctx.fillText(text, x, y);
    return;
  }
  let cursor = x;
  for (const char of text) {
    ctx.fillText(char, cursor, y);
    cursor += ctx.measureText(char).width + 1.4;
  }
}

function sitOnLine(ctx, image, x, baseline, w, h, sit) {
  const scale = Math.min(w / image.width, h / image.height);
  const dw = image.width * scale;
  const dh = image.height * scale;
  ctx.drawImage(image, x + (w - dw) / 2, baseline - sit * dh, dw, dh);
}

export async function downloadShareCard({ kicker, name, sentence, files, filename }) {
  await document.fonts.ready;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no canvas");
  const display = family("--font-fraunces");
  const body = family("--font-literata");

  ctx.fillStyle = "#f3ecdf";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#b43324";
  ctx.fillRect(56, 48, 3, 904);

  ctx.fillStyle = "#5e564c";
  ctx.font = `15px ${body}`;
  tracked(ctx, kicker, TEXT_X, 112);

  ctx.fillStyle = "#1c1915";
  let nameSize = 72;
  let nameLines = [];
  for (; nameSize >= 48; nameSize -= 2) {
    ctx.font = `${nameSize}px ${display}`;
    nameLines = wrap((value) => ctx.measureText(value).width, name, TEXT_W);
    if (nameLines.length <= 2) break;
  }
  nameLines.forEach((line, index) => ctx.fillText(line, TEXT_X, NAME_TOP + index * NAME_STEP));

  const frame = cardFrame(nameLines.length, 1);
  ctx.fillStyle = "#b43324";
  ctx.fillRect(TEXT_X, frame.nameLast + 28, 48, 3);

  ctx.font = `26px ${body}`;
  let sentenceLines = wrap((value) => ctx.measureText(value).width, sentence, TEXT_W);
  let step = SENTENCE_STEP;
  if (sentenceLines.length > 4) {
    ctx.font = `22px ${body}`;
    sentenceLines = wrap((value) => ctx.measureText(value).width, sentence, TEXT_W);
    step = 32;
  }
  const placed = cardFrame(nameLines.length, sentenceLines.length);
  ctx.fillStyle = "#1c1915";
  sentenceLines.forEach((line, index) => ctx.fillText(line, TEXT_X, placed.sentenceFirst + index * step));

  const shown = (files || []).slice(0, 6);
  const images = await Promise.all(shown.map(loadImage));
  const lineY = BAND_BOTTOM;
  if (images.length) {
    const textBottom = placed.sentenceFirst + sentenceLines.length * step;
    ctx.strokeStyle = "#e3d5c0";
    ctx.lineWidth = 1;
    for (const offset of [72, 144]) {
      const y = lineY - offset;
      if (y < textBottom + 12) continue;
      ctx.beginPath();
      ctx.moveTo(TEXT_X, y);
      ctx.lineTo(TEXT_X + TEXT_W, y);
      ctx.stroke();
    }
    ctx.strokeStyle = "#1c1915";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(TEXT_X, lineY);
    ctx.lineTo(TEXT_X + TEXT_W, lineY);
    ctx.stroke();
    const slot = TEXT_W / images.length;
    const glyphH = Math.min(180, lineY - (placed.sentenceFirst + sentenceLines.length * step) - 24);
    images.forEach((image, index) => {
      sitOnLine(ctx, image, TEXT_X + index * slot, lineY, slot - 8, Math.max(72, glyphH), sitRatio(shown[index]));
    });
  }

  ctx.strokeStyle = "#e3d5c0";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(TEXT_X, 908);
  ctx.lineTo(TEXT_X + TEXT_W, 908);
  ctx.stroke();
  ctx.fillStyle = "#5e564c";
  ctx.font = `14px ${body}`;
  ctx.fillText("handwritingpersonalitytest.online", TEXT_X, 940);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("no png");
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

const SUPPORTED = ["en", "zh"];

const LANGUAGE_LABEL = {
  en: "English",
  zh: "中文",
};

// The banner speaks the language of the page you are on, and names the language on offer.
const bannerCopy = {
  en: { note: "This page is in English. Your browser prefers {target}.", yes: "Switch to {target}", no: "Stay on this page" },
  zh: { note: "本页是中文。你的浏览器偏好 {target}。", yes: "切换到 {target}", no: "留在此页" },
};

export function bannerFor(current, target) {
  const copy = bannerCopy[current] ?? bannerCopy.en;
  const label = LANGUAGE_LABEL[target] ?? target;
  const fill = (text) => text.replace(/\{target\}/g, label);
  return { note: fill(copy.note), yes: fill(copy.yes), no: copy.no };
}

export function matchLanguage(tag) {
  if (typeof tag !== "string") return null;
  const lower = tag.toLowerCase();
  if (lower === "zh" || lower.startsWith("zh-")) return "zh";
  const base = lower.split("-")[0];
  return SUPPORTED.includes(base) ? base : null;
}

/** First browser language we have an indexed page for. Quiet when it is already showing. */
export function preferredLanguage(tags, current) {
  for (const tag of tags) {
    const code = matchLanguage(tag);
    if (!code) continue;
    return code === current ? null : code;
  }
  return null;
}

const EN_GUIDES = ["four", "seven", "a", "g", "zero", "ampersand", "slant", "spacing", "one", "t", "i", "y"];
const ZH_GUIDES = ["size", "gap", "lines", "link", "bar"];
const ZH_GUIDE_OF_EN = { spacing: "gap" };
const EN_GUIDE_OF_ZH = { gap: "spacing" };
const PAIRED_GUIDES = ["signature-size", "signature-writing"];

/** Drop the Chinese prefix. English paths stay as they are. */
export function pageRest(path) {
  const match = path.match(/^\/zh(?=\/|$)/);
  if (!match) return path || "/";
  return path.slice(match[0].length) || "/";
}

function guideHref(target, slug) {
  if (target === "zh") {
    if (ZH_GUIDES.includes(slug)) return `/zh/guides/${slug}`;
    if (ZH_GUIDE_OF_EN[slug]) return `/zh/guides/${ZH_GUIDE_OF_EN[slug]}`;
    if (PAIRED_GUIDES.includes(slug)) return `/zh/guides/${slug}`;
    return "/zh";
  }
  if (EN_GUIDES.includes(slug)) return `/guides/${slug}`;
  if (EN_GUIDE_OF_ZH[slug]) return `/guides/${EN_GUIDE_OF_ZH[slug]}`;
  if (PAIRED_GUIDES.includes(slug)) return `/guides/${slug}`;
  return "/";
}

/** Same page in the other language, or that language's home when the page has no twin. */
export function languageHref(target, path) {
  const rest = pageRest(path);
  const prefix = target === "en" ? "" : "/zh";
  const home = prefix || "/";
  if (rest === "/") return home;

  if (rest === "/science" || rest === "/faq" || rest === "/about") return `${prefix}${rest}`;
  if (rest === "/tools") return `${prefix}/tools`;
  if (rest === "/tools/slant" || rest === "/tools/signature") return `${prefix}${rest}`;
  if (rest === "/tools/sample-chart" || rest === "/chart") return `${prefix}/tools/sample-chart`;
  if (rest === "/tools/signature/size") return `${prefix}/guides/signature-size`;
  if (rest === "/tools/signature/body") return `${prefix}/guides/signature-writing`;
  if (rest === "/guides" || rest === "/guides/") return `${prefix}/guides`;
  if (rest.startsWith("/guides/")) {
    const slug = rest.slice("/guides/".length).split("/")[0];
    return guideHref(target, slug);
  }
  if (rest === "/blog" || rest.startsWith("/blog/") || rest === "/methodology") {
    return target === "en" ? rest : home;
  }
  if (rest.startsWith("/r/")) {
    const code = rest.slice("/r/".length).split("/")[0];
    if (code.length === 13 && target !== "zh") return `/r/${code}`;
    if (code.length === 6 && target === "zh") return `/zh/r/${code}`;
    return home;
  }
  if (target === "en") return rest;
  return home;
}

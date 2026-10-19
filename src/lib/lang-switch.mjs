const SUPPORTED = ["en", "zh", "es", "pt", "fr", "de", "id", "vi", "it", "tr"];

export const suggestCopy = {
  en: { note: "Your browser language is English.", yes: "Switch to English", no: "Stay" },
  zh: { note: "你的浏览器语言是中文。", yes: "切换到中文", no: "留在此页" },
  es: { note: "El idioma de tu navegador es español.", yes: "Cambiar a español", no: "Quedarme" },
  pt: { note: "O idioma do seu navegador é português.", yes: "Mudar para português", no: "Ficar" },
  fr: { note: "La langue de votre navigateur est le français.", yes: "Passer en français", no: "Rester" },
  de: { note: "Die Sprache Ihres Browsers ist Deutsch.", yes: "Zu Deutsch wechseln", no: "Bleiben" },
  id: { note: "Bahasa browser Anda adalah Indonesia.", yes: "Ganti ke Indonesia", no: "Tetap di sini" },
  vi: { note: "Ngôn ngữ trình duyệt của bạn là tiếng Việt.", yes: "Chuyển sang tiếng Việt", no: "Ở lại" },
  it: { note: "La lingua del browser è l'italiano.", yes: "Passa all'italiano", no: "Resta" },
  tr: { note: "Tarayıcı diliniz Türkçe.", yes: "Türkçeye geç", no: "Kal" },
};

export function matchLanguage(tag) {
  if (typeof tag !== "string") return null;
  const lower = tag.toLowerCase();
  if (lower === "zh" || lower.startsWith("zh-")) return "zh";
  const base = lower.split("-")[0];
  return SUPPORTED.includes(base) ? base : null;
}

/** First browser language we have a page for. Quiet when that language is already showing. */
export function preferredLanguage(tags, current) {
  for (const tag of tags) {
    const code = matchLanguage(tag);
    if (!code) continue;
    return code === current ? null : code;
  }
  return null;
}

const LATIN_GUIDES = ["four", "seven", "a", "g", "zero", "ampersand", "slant", "spacing"];
const HAN_GUIDES = ["size", "gap", "lines", "link", "bar"];

/** Drop /zh or a Latin locale prefix. English paths stay as they are. */
export function pageRest(path) {
  const match = path.match(/^\/(zh|es|pt|fr|de|id|vi|it|tr)(?=\/|$)/);
  if (!match) return path || "/";
  return path.slice(match[0].length) || "/";
}

/** Same page in another language, or that language's home when the page has no twin. */
export function languageHref(target, path) {
  const rest = pageRest(path);
  const prefix = target === "en" ? "" : `/${target}`;
  const home = prefix || "/";
  if (rest === "/") return home;
  if (rest === "/science") return `${prefix}/science`;
  if (rest.startsWith("/guides/")) {
    const slug = rest.slice("/guides/".length).split("/")[0];
    if (target === "zh") return HAN_GUIDES.includes(slug) ? `/zh/guides/${slug}` : "/zh";
    if (LATIN_GUIDES.includes(slug)) return `${prefix}/guides/${slug}`;
    return home;
  }
  if (rest.startsWith("/r/")) {
    const code = rest.slice("/r/".length).split("/")[0];
    if (code.length === 13 && target !== "zh") return `${prefix}/r/${code}`;
    if (code.length === 6 && target === "zh") return `/zh/r/${code}`;
    return home;
  }
  if (target === "en") return rest;
  return home;
}

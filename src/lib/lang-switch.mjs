const SUPPORTED = ["en", "zh"];
const RETIRED = ["es", "pt", "fr", "de", "id", "vi", "it", "tr"];

const LANGUAGE_LABEL = { en: "English", zh: "中文" };

// The banner speaks the language of the page you are on, and names the language on offer.
const bannerCopy = {
  en: { note: "This page is in English. Your browser prefers {target}.", yes: "Switch to {target}", no: "Stay on this page" },
  zh: { note: "本页是中文。你的浏览器偏好 {target}。", yes: "切换到 {target}", no: "留在此页" },
  es: { note: "Esta página está en español. Tu navegador prefiere {target}.", yes: "Cambiar a {target}", no: "Seguir en esta página" },
  pt: { note: "Esta página está em português. O seu navegador prefere {target}.", yes: "Mudar para {target}", no: "Ficar nesta página" },
  fr: { note: "Cette page est en français. Votre navigateur préfère {target}.", yes: "Passer en {target}", no: "Rester sur cette page" },
  de: { note: "Diese Seite ist auf Deutsch. Ihr Browser bevorzugt {target}.", yes: "Zu {target} wechseln", no: "Auf dieser Seite bleiben" },
  id: { note: "Halaman ini dalam bahasa Indonesia. Browser Anda lebih memilih {target}.", yes: "Ganti ke {target}", no: "Tetap di halaman ini" },
  vi: { note: "Trang này bằng tiếng Việt. Trình duyệt của bạn thích {target} hơn.", yes: "Chuyển sang {target}", no: "Ở lại trang này" },
  it: { note: "Questa pagina è in italiano. Il tuo browser preferisce {target}.", yes: "Passa a {target}", no: "Resta su questa pagina" },
  tr: { note: "Bu sayfa Türkçe. Tarayıcınız {target} dilini tercih ediyor.", yes: "{target} diline geç", no: "Bu sayfada kal" },
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

/** Drop any language prefix. English paths stay as they are. */
export function pageRest(path) {
  const match = path.match(new RegExp(`^/(${["zh", ...RETIRED].join("|")})(?=/|$)`));
  if (!match) return path || "/";
  return path.slice(match[0].length) || "/";
}

function guideHref(target, slug) {
  const prefix = target === "en" ? "" : `/${target}`;
  if (target === "zh") {
    if (ZH_GUIDES.includes(slug)) return `/zh/guides/${slug}`;
    if (ZH_GUIDE_OF_EN[slug]) return `/zh/guides/${ZH_GUIDE_OF_EN[slug]}`;
    if (PAIRED_GUIDES.includes(slug)) return `/zh/guides/${slug}`;
    return "/zh";
  }
  if (target === "en") {
    if (EN_GUIDES.includes(slug)) return `/guides/${slug}`;
    if (EN_GUIDE_OF_ZH[slug]) return `/guides/${EN_GUIDE_OF_ZH[slug]}`;
    if (PAIRED_GUIDES.includes(slug)) return `/guides/${slug}`;
    return "/";
  }
  if (EN_GUIDES.includes(slug)) return `${prefix}/guides/${slug}`;
  return prefix || "/";
}

/** Same page in another language, or that language's home when the page has no twin. */
export function languageHref(target, path) {
  const rest = pageRest(path);
  const prefix = target === "en" ? "" : `/${target}`;
  const home = prefix || "/";
  if (rest === "/") return home;

  if (rest === "/science" || rest === "/faq" || rest === "/about") return `${prefix}${rest}`;
  if (rest === "/tools") return target === "en" ? "/tools" : target === "zh" ? "/zh/tools" : home;
  if (rest === "/tools/slant" || rest === "/tools/signature") return `${prefix}${rest}`;
  if (rest === "/tools/sample-chart") {
    if (target === "en" || target === "zh") return `${prefix}${rest}`;
    return `${prefix}/chart`;
  }
  if (rest === "/chart") {
    if (target === "en") return "/tools/sample-chart";
    if (target === "zh") return "/zh/tools/sample-chart";
    return `${prefix}/chart`;
  }
  if (rest === "/tools/signature/size") {
    if (target === "en") return "/guides/signature-size";
    if (target === "zh") return "/zh/guides/signature-size";
    return `${prefix}${rest}`;
  }
  if (rest === "/tools/signature/body") {
    if (target === "en") return "/guides/signature-writing";
    if (target === "zh") return "/zh/guides/signature-writing";
    return `${prefix}${rest}`;
  }
  if (rest === "/guides" || rest === "/guides/") {
    return target === "en" || target === "zh" ? `${prefix}/guides` : `${prefix}/guides`;
  }
  if (rest.startsWith("/guides/")) {
    const slug = rest.slice("/guides/".length).split("/")[0];
    return guideHref(target, slug);
  }
  if (rest === "/blog" || rest.startsWith("/blog/") || rest === "/methodology") {
    return target === "en" ? rest : home;
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

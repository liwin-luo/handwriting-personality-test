import { localeList } from "@/content/locale-list.mjs";
import { SITE } from "@/lib/site";

const url = (path: string) => `${SITE.url}${path}`;

const LATIN = localeList.map((locale: { code: string }) => locale.code);

/** The twelve quiz guides that exist in every Latin locale. */
const LATIN_GUIDES = new Set([
  "four",
  "seven",
  "a",
  "g",
  "zero",
  "one",
  "t",
  "i",
  "y",
  "ampersand",
  "spacing",
  "slant",
]);

// Chinese names one of the guides differently.
const EN_SLUG: Record<string, string> = { gap: "spacing" };
const ZH_SLUG: Record<string, string> = { spacing: "gap" };

type Langs = Record<string, string>;

function latin(pathFor: (code: string) => string): Langs {
  return Object.fromEntries(LATIN.map((code: string) => [code, url(pathFor(code))]));
}

export function homeLangs(): Langs {
  return { en: url("/"), zh: url("/zh"), ...latin((code) => `/${code}`) };
}

export function toolLangs(path: string): Langs {
  if (path === "/tools") return { en: url("/tools"), zh: url("/zh/tools") };
  if (path === "/chart" || path === "/tools/sample-chart") {
    return {
      en: url("/tools/sample-chart"),
      zh: url("/zh/tools/sample-chart"),
      ...latin((code) => `/${code}/chart`),
    };
  }
  return { en: url(path), zh: url(`/zh${path}`), ...latin((code) => `/${code}${path}`) };
}

export function seriesLangs(path: string): Langs {
  if (path === "/faq") return { en: url("/faq"), zh: url("/zh/faq"), ...latin((code) => `/${code}/faq`) };
  if (path === "/about") return { en: url("/about"), zh: url("/zh/about"), ...latin((code) => `/${code}/about`) };
  return guideLangs(path === "/tools/signature/size" ? "signature-size" : "signature-writing");
}

export function scienceLangs(): Langs {
  return { en: url("/science"), zh: url("/zh/science"), ...latin((code) => `/${code}/science`) };
}

export function traitsLangs(): Langs {
  return { en: url("/guides"), zh: url("/zh/guides"), ...latin((code) => `/${code}/guides`) };
}

export function guideLangs(slug: string): Langs {
  if (slug === "signature-size" || slug === "signature-writing") {
    const tail = slug === "signature-size" ? "size" : "body";
    return {
      en: url(`/guides/${slug}`),
      zh: url(`/zh/guides/${slug}`),
      ...latin((code) => `/${code}/tools/signature/${tail}`),
    };
  }
  const enSlug = EN_SLUG[slug] ?? slug;
  if (!LATIN_GUIDES.has(enSlug)) return { zh: url(`/zh/guides/${slug}`) };
  const zhSlug = ZH_SLUG[enSlug];
  return {
    en: url(`/guides/${enSlug}`),
    ...(zhSlug ? { zh: url(`/zh/guides/${zhSlug}`) } : {}),
    ...latin((code) => `/${code}/guides/${enSlug}`),
  };
}

export function blogLangs(slug: string): Langs {
  return { en: `${SITE.url}/blog/${slug}` };
}

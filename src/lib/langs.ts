import { SITE } from "@/lib/site";

const url = (path: string) => `${SITE.url}${path}`;

/** The twelve quiz guides that exist in English. */
const EN_GUIDES = new Set([
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

export function homeLangs(): Langs {
  return { en: url("/"), zh: url("/zh") };
}

export function toolLangs(path: string): Langs {
  return { en: url(path), zh: url(`/zh${path}`) };
}

export function seriesLangs(path: string): Langs {
  if (path === "/faq") return { en: url("/faq"), zh: url("/zh/faq") };
  if (path === "/about") return { en: url("/about"), zh: url("/zh/about") };
  return guideLangs(path === "/tools/signature/size" ? "signature-size" : "signature-writing");
}

export function scienceLangs(): Langs {
  return { en: url("/science"), zh: url("/zh/science") };
}

export function traitsLangs(): Langs {
  return { en: url("/guides"), zh: url("/zh/guides") };
}

export function guideLangs(slug: string): Langs {
  if (slug === "signature-size" || slug === "signature-writing") {
    return { en: url(`/guides/${slug}`), zh: url(`/zh/guides/${slug}`) };
  }
  const enSlug = EN_SLUG[slug] ?? slug;
  if (!EN_GUIDES.has(enSlug)) return { zh: url(`/zh/guides/${slug}`) };
  const zhSlug = ZH_SLUG[enSlug];
  return {
    en: url(`/guides/${enSlug}`),
    ...(zhSlug ? { zh: url(`/zh/guides/${zhSlug}`) } : {}),
  };
}

export function blogLangs(slug: string): Langs {
  return { en: `${SITE.url}/blog/${slug}` };
}

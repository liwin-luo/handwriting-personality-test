import { SITE } from "@/lib/site";

const ZH_GUIDE_OF_EN: Record<string, string> = {
  spacing: "gap",
};

const EN_GUIDE_OF_ZH: Record<string, string> = {
  gap: "spacing",
};

const PAIRED_GUIDES = new Set(["signature-size", "signature-writing"]);

export function homeLangs(): Record<string, string> {
  return {
    en: `${SITE.url}/`,
    zh: `${SITE.url}/zh`,
  };
}

export function toolLangs(path: string): Record<string, string> {
  return {
    en: `${SITE.url}${path}`,
    zh: `${SITE.url}/zh${path}`,
  };
}

export function seriesLangs(path: string): Record<string, string> {
  return toolLangs(path);
}

export function scienceLangs(): Record<string, string> {
  return {
    en: `${SITE.url}/science`,
    zh: `${SITE.url}/zh/science`,
  };
}

export function traitsLangs(): Record<string, string> {
  return {
    en: `${SITE.url}/guides`,
    zh: `${SITE.url}/zh/guides`,
  };
}

export function guideLangs(slug: string): Record<string, string> {
  const en = `${SITE.url}/guides/${slug}`;
  if (ZH_GUIDE_OF_EN[slug]) {
    return { en, zh: `${SITE.url}/zh/guides/${ZH_GUIDE_OF_EN[slug]}` };
  }
  if (EN_GUIDE_OF_ZH[slug]) {
    return { en: `${SITE.url}/guides/${EN_GUIDE_OF_ZH[slug]}`, zh: `${SITE.url}/zh/guides/${slug}` };
  }
  if (PAIRED_GUIDES.has(slug)) {
    return { en, zh: `${SITE.url}/zh/guides/${slug}` };
  }
  return { en };
}

export function blogLangs(slug: string): Record<string, string> {
  return { en: `${SITE.url}/blog/${slug}` };
}

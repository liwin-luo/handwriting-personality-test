import { localeList } from "@/content/locale-list.mjs";
import { SITE } from "@/lib/site";

export function homeLangs(): Record<string, string> {
  return {
    en: `${SITE.url}/`,
    zh: `${SITE.url}/zh`,
    ...Object.fromEntries(localeList.map((locale) => [locale.code, `${SITE.url}/${locale.code}`])),
  };
}

export function scienceLangs(): Record<string, string> {
  return {
    en: `${SITE.url}/science`,
    zh: `${SITE.url}/zh/science`,
    ...Object.fromEntries(localeList.map((locale) => [locale.code, `${SITE.url}/${locale.code}/science`])),
  };
}

export function guideLangs(slug: string): Record<string, string> {
  return {
    en: `${SITE.url}/guides/${slug}`,
    ...Object.fromEntries(localeList.map((locale) => [locale.code, `${SITE.url}/${locale.code}/guides/${slug}`])),
  };
}

import { localeList } from "@/content/locale-list.mjs";
import { SITE } from "@/lib/site";

export function homeLangs(): Record<string, string> {
  return {
    en: `${SITE.url}/`,
    zh: `${SITE.url}/zh`,
    ...Object.fromEntries(localeList.map((locale) => [locale.code, `${SITE.url}/${locale.code}`])),
  };
}

export function toolLangs(path: "/chart" | "/tools/slant" | "/tools/signature"): Record<string, string> {
  return {
    en: `${SITE.url}${path}`,
    zh: `${SITE.url}/zh${path}`,
    ...Object.fromEntries(localeList.map((locale) => [locale.code, `${SITE.url}/${locale.code}${path}`])),
  };
}

export function scienceLangs(): Record<string, string> {
  return {
    en: `${SITE.url}/science`,
    zh: `${SITE.url}/zh/science`,
    ...Object.fromEntries(localeList.map((locale) => [locale.code, `${SITE.url}/${locale.code}/science`])),
  };
}

export function traitsLangs(): Record<string, string> {
  return {
    en: `${SITE.url}/guides`,
    zh: `${SITE.url}/zh/guides`,
    ...Object.fromEntries(localeList.map((locale) => [locale.code, `${SITE.url}/${locale.code}/guides`])),
  };
}

export function guideLangs(slug: string): Record<string, string> {
  return {
    en: `${SITE.url}/guides/${slug}`,
    ...Object.fromEntries(localeList.map((locale) => [locale.code, `${SITE.url}/${locale.code}/guides/${slug}`])),
  };
}

import type { Metadata } from "next";
import { fitDescription } from "@/lib/description.mjs";
import { CONTENT_UPDATED, EDITORIAL, RETIRED_LOCALES } from "@/content/editorial";

export const SITE = {
  name: "Handwriting Personality Test",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://handwritingpersonalitytest.online").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@handwritingpersonalitytest.online",
};

const retired = new Set<string>(RETIRED_LOCALES);

export function localeOfPath(path: string): "en" | "zh" | string {
  const first = path.split("/").filter(Boolean)[0];
  if (!first) return "en";
  if (first === "zh") return "zh";
  if (retired.has(first)) return first;
  return "en";
}

export function isRetiredPath(path: string): boolean {
  const first = path.split("/").filter(Boolean)[0];
  return Boolean(first && retired.has(first));
}

function languageOf(path: string): "en" | "zh" {
  return localeOfPath(path) === "zh" ? "zh" : "en";
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}: Free 12-Shape Test`, template: `%s · ${SITE.name}` },
  description:
    "A free handwriting personality test. Pick the shapes you actually write. Eight answers show a fictional label. Nothing is uploaded.",
  applicationName: SITE.name,
  authors: [{ name: EDITORIAL.en.name, url: `${SITE.url}${EDITORIAL.en.href}` }],
  creator: EDITORIAL.en.name,
  publisher: SITE.name,
  referrer: "origin",
  formatDetection: { telephone: false, email: false, address: false },
};

export function pageMeta({
  title,
  description,
  path,
  index = true,
  absolute = false,
  pair,
  langs,
  selfLang,
  openGraphType = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  absolute?: boolean;
  pair?: { en: string; zh: string };
  langs?: Record<string, string>;
  selfLang?: string;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = `${SITE.url}${path === "/" ? "/" : path}`;
  const text = fitDescription(description, path);
  const language = languageOf(path);
  const editorial = EDITORIAL[language];
  const indexable = index && !isRetiredPath(path);

  const rawLanguages = langs ?? (pair ? { en: pair.en, zh: pair.zh } : selfLang ? { [selfLang]: url } : {});
  const languages = Object.fromEntries(
    Object.entries(rawLanguages).filter(([code]) => code === "en" || code === "zh"),
  );
  const alternates = indexable
    ? {
        canonical: url,
        ...(Object.keys(languages).length
          ? { languages: { ...languages, "x-default": languages.en ?? url } }
          : {}),
      }
    : { canonical: url };

  const openGraph: Metadata["openGraph"] = {
    title,
    description: text,
    url,
    type: openGraphType,
    siteName: SITE.name,
    locale: language === "zh" ? "zh_CN" : "en_US",
    ...(Object.keys(languages).length > 1
      ? { alternateLocale: language === "zh" ? ["en_US"] : ["zh_CN"] }
      : {}),
    images: [{ url: "/og.jpg", width: 1280, height: 720, alt: SITE.name }],
    ...(openGraphType === "article"
      ? {
          publishedTime,
          modifiedTime: modifiedTime ?? CONTENT_UPDATED,
          authors: [editorial.name],
        }
      : {}),
  };

  return {
    title: absolute ? { absolute: title } : title,
    description: text,
    applicationName: SITE.name,
    authors: [{ name: editorial.name, url: `${SITE.url}${editorial.href}` }],
    creator: editorial.name,
    publisher: SITE.name,
    alternates,
    robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description: text,
      images: ["/og.jpg"],
    },
  };
}

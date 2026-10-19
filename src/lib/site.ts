import type { Metadata } from "next";

export const SITE = {
  name: "Handwriting Personality Test",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://handwritingpersonalitytest.online").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@handwritingpersonalitytest.online",
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
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  absolute?: boolean;
  pair?: { en: string; zh: string };
  langs?: Record<string, string>;
  selfLang?: string;
}): Metadata {
  const url = `${SITE.url}${path === "/" ? "/" : path}`;
  const languages = langs
    ? { ...langs, "x-default": langs.en ?? url }
    : pair
      ? { en: pair.en, zh: pair.zh, "x-default": pair.en }
      : { [selfLang ?? "en"]: url, "x-default": url };
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { title, description, url, type: "website", siteName: SITE.name },
  };
}

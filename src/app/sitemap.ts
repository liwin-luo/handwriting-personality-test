import type { MetadataRoute } from "next";
import { profiles } from "@/content";
import { guides } from "@/content/guides";
import { localeList } from "@/content/locale-list.mjs";
import { guides as zhGuides } from "@/content/zh-guides.mjs";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/results",
    ...profiles.map((profile) => `/results/${profile.slug}`),
    "/chart",
    ...guides.map((guide) => `/guides/${guide.slug}`),
    "/science",
    "/tools/slant",
    "/tools/signature",
    "/zh",
    "/zh/science",
    ...zhGuides.map((guide: { slug: string }) => `/zh/guides/${guide.slug}`),
    ...localeList.flatMap((locale) => [
      `/${locale.code}`,
      `/${locale.code}/science`,
      ...guides.map((guide) => `/${locale.code}/guides/${guide.slug}`),
    ]),
    "/about",
    "/privacy",
    "/terms",
    "/contact",
  ];
  return paths.map((path) => ({ url: `${SITE.url}${path}` }));
}

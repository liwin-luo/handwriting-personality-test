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
    "/guides",
    ...guides.map((guide) => `/guides/${guide.slug}`),
    "/science",
    "/zh",
    "/zh/science",
    "/zh/guides",
    ...zhGuides.map((guide: { slug: string }) => `/zh/guides/${guide.slug}`),
    ...["/chart", "/tools/slant", "/tools/signature"].flatMap((path) => [
      path,
      `/zh${path}`,
      ...localeList.map((locale) => `/${locale.code}${path}`),
    ]),
    ...localeList.flatMap((locale) => [
      `/${locale.code}`,
      `/${locale.code}/science`,
      `/${locale.code}/guides`,
      ...guides.map((guide) => `/${locale.code}/guides/${guide.slug}`),
    ]),
    "/about",
    "/privacy",
    "/terms",
    "/contact",
  ];
  return paths.map((path) => ({ url: `${SITE.url}${path}` }));
}

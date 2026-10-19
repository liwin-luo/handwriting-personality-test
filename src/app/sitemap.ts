import type { MetadataRoute } from "next";
import { profiles } from "@/content";
import { guides } from "@/content/guides";
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
    "/about",
    "/privacy",
    "/terms",
    "/contact",
  ];
  return paths.map((path) => ({ url: `${SITE.url}${path}` }));
}

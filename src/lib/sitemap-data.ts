import { profiles } from "@/content";
import { guides } from "@/content/guides";
import { guides as zhGuides } from "@/content/zh-guides.mjs";
import { BLOG_SLUGS } from "@/content/seo/paths";
import { CONTENT_UPDATED, RETIRED_LOCALES } from "@/content/editorial";
import { SITE } from "@/lib/site";

export type SitemapEntry = {
  path: string;
  lastmod: string;
  alternates?: Record<string, string>;
};

const updated = CONTENT_UPDATED;

function alternate(path: string, zhPath: string): Record<string, string> {
  return {
    en: `${SITE.url}${path}`,
    zh: `${SITE.url}${zhPath}`,
    "x-default": `${SITE.url}${path}`,
  };
}

export function englishEntries(): SitemapEntry[] {
  const paired: Record<string, string> = {
    "/": "/zh",
    "/tools": "/zh/tools",
    "/tools/slant": "/zh/tools/slant",
    "/tools/signature": "/zh/tools/signature",
    "/tools/sample-chart": "/zh/tools/sample-chart",
    "/guides": "/zh/guides",
    "/guides/spacing": "/zh/guides/gap",
    "/guides/signature-size": "/zh/guides/signature-size",
    "/guides/signature-writing": "/zh/guides/signature-writing",
    "/science": "/zh/science",
    "/faq": "/zh/faq",
    "/about": "/zh/about",
  };

  const paths = [
    "/",
    "/tools",
    "/tools/slant",
    "/tools/signature",
    "/tools/sample-chart",
    "/guides",
    ...guides.map((guide) => `/guides/${guide.slug}`),
    "/guides/signature-size",
    "/guides/signature-writing",
    "/blog",
    ...BLOG_SLUGS.map((slug) => `/blog/${slug}`),
    "/methodology",
    "/science",
    "/about",
    "/faq",
    "/results",
    ...profiles.map((profile) => `/results/${profile.slug}`),
    "/privacy",
    "/terms",
    "/contact",
  ];

  return paths.map((path) => ({
    path,
    lastmod: updated,
    ...(paired[path] ? { alternates: alternate(path, paired[path]) } : {}),
  }));
}

export function chineseEntries(): SitemapEntry[] {
  const paired: Record<string, string> = {
    "/zh": "/",
    "/zh/tools": "/tools",
    "/zh/tools/slant": "/tools/slant",
    "/zh/tools/signature": "/tools/signature",
    "/zh/tools/sample-chart": "/tools/sample-chart",
    "/zh/guides": "/guides",
    "/zh/guides/gap": "/guides/spacing",
    "/zh/guides/signature-size": "/guides/signature-size",
    "/zh/guides/signature-writing": "/guides/signature-writing",
    "/zh/science": "/science",
    "/zh/faq": "/faq",
    "/zh/about": "/about",
  };

  const paths = [
    "/zh",
    "/zh/tools",
    "/zh/tools/slant",
    "/zh/tools/signature",
    "/zh/tools/sample-chart",
    "/zh/guides",
    ...zhGuides.map((guide: { slug: string }) => `/zh/guides/${guide.slug}`),
    "/zh/guides/signature-size",
    "/zh/guides/signature-writing",
    "/zh/science",
    "/zh/faq",
    "/zh/about",
  ];

  return paths.map((path) => {
    const en = paired[path];
    return {
      path,
      lastmod: updated,
      ...(en
        ? {
            alternates: {
              en: `${SITE.url}${en}`,
              zh: `${SITE.url}${path}`,
              "x-default": `${SITE.url}${en}`,
            },
          }
        : {}),
    };
  });
}

export const SITEMAP_LOCALES = ["en", "zh"] as const;
export type SitemapLocale = (typeof SITEMAP_LOCALES)[number];

export function entriesFor(locale: SitemapLocale): SitemapEntry[] {
  return locale === "zh" ? chineseEntries() : englishEntries();
}

export function isSitemapLocale(value: string): value is SitemapLocale {
  return (SITEMAP_LOCALES as readonly string[]).includes(value);
}

export function isRetiredLocale(value: string): boolean {
  return (RETIRED_LOCALES as readonly string[]).includes(value);
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function sitemapXml(locale: SitemapLocale): string {
  const entries = entriesFor(locale);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map((entry) => {
    const loc = `${SITE.url}${entry.path}`;
    const alternates = entry.alternates
      ? Object.entries(entry.alternates)
          .map(
            ([hreflang, href]) =>
              `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(href)}" />`,
          )
          .join("\n")
      : "";
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>${alternates ? `\n${alternates}` : ""}
  </url>`;
  })
  .join("\n")}
</urlset>`;
}

export const XML_HEADERS = {
  "Content-Type": "application/xml",
  "Cache-Control": "public, max-age=0, s-maxage=3600",
} as const;

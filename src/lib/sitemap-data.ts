import { profiles } from "@/content";
import { guides } from "@/content/guides";
import { guides as zhGuides } from "@/content/zh-guides.mjs";
import { BLOG_SLUGS } from "@/content/seo/paths";
import { CONTENT_UPDATED, LOCALE_CODES } from "@/content/editorial";
import { guideLangs, homeLangs, scienceLangs, seriesLangs, toolLangs, traitsLangs } from "@/lib/langs";
import { SITE } from "@/lib/site";

export type SitemapEntry = {
  path: string;
  lastmod: string;
  alternates?: Record<string, string>;
};

const updated = CONTENT_UPDATED;

function entry(path: string, langs?: Record<string, string>): SitemapEntry {
  if (!langs) return { path, lastmod: updated };
  return {
    path,
    lastmod: updated,
    alternates: { ...langs, "x-default": langs.en ?? `${SITE.url}${path}` },
  };
}

export function englishEntries(): SitemapEntry[] {
  return [
    entry("/", homeLangs()),
    entry("/tools", toolLangs("/tools")),
    entry("/tools/slant", toolLangs("/tools/slant")),
    entry("/tools/signature", toolLangs("/tools/signature")),
    entry("/tools/sample-chart", toolLangs("/tools/sample-chart")),
    entry("/guides", traitsLangs()),
    ...guides.map((guide) => entry(`/guides/${guide.slug}`, guideLangs(guide.slug))),
    entry("/guides/signature-size", guideLangs("signature-size")),
    entry("/guides/signature-writing", guideLangs("signature-writing")),
    entry("/blog"),
    ...BLOG_SLUGS.map((slug) => entry(`/blog/${slug}`)),
    entry("/methodology"),
    entry("/science", scienceLangs()),
    entry("/about", seriesLangs("/about")),
    entry("/faq", seriesLangs("/faq")),
    entry("/results"),
    ...profiles.map((profile) => entry(`/results/${profile.slug}`)),
    entry("/privacy"),
    entry("/terms"),
    entry("/contact"),
  ];
}

export function chineseEntries(): SitemapEntry[] {
  return [
    entry("/zh", homeLangs()),
    entry("/zh/tools", toolLangs("/tools")),
    entry("/zh/tools/slant", toolLangs("/tools/slant")),
    entry("/zh/tools/signature", toolLangs("/tools/signature")),
    entry("/zh/tools/sample-chart", toolLangs("/tools/sample-chart")),
    entry("/zh/guides", traitsLangs()),
    ...zhGuides.map((guide: { slug: string }) => entry(`/zh/guides/${guide.slug}`, guideLangs(guide.slug))),
    entry("/zh/guides/signature-size", guideLangs("signature-size")),
    entry("/zh/guides/signature-writing", guideLangs("signature-writing")),
    entry("/zh/science", scienceLangs()),
    entry("/zh/faq", seriesLangs("/faq")),
    entry("/zh/about", seriesLangs("/about")),
  ];
}

export function latinEntries(code: string): SitemapEntry[] {
  return [
    entry(`/${code}`, homeLangs()),
    entry(`/${code}/tools/slant`, toolLangs("/tools/slant")),
    entry(`/${code}/tools/signature`, toolLangs("/tools/signature")),
    entry(`/${code}/chart`, toolLangs("/chart")),
    entry(`/${code}/guides`, traitsLangs()),
    ...guides.map((guide) => entry(`/${code}/guides/${guide.slug}`, guideLangs(guide.slug))),
    entry(`/${code}/science`, scienceLangs()),
    entry(`/${code}/faq`, seriesLangs("/faq")),
    entry(`/${code}/about`, seriesLangs("/about")),
    entry(`/${code}/tools/signature/size`, guideLangs("signature-size")),
    entry(`/${code}/tools/signature/body`, guideLangs("signature-writing")),
  ];
}

export const SITEMAP_LOCALES = LOCALE_CODES;
export type SitemapLocale = (typeof SITEMAP_LOCALES)[number];

export function entriesFor(locale: SitemapLocale): SitemapEntry[] {
  if (locale === "en") return englishEntries();
  if (locale === "zh") return chineseEntries();
  return latinEntries(locale);
}

export function isSitemapLocale(value: string): value is SitemapLocale {
  return (SITEMAP_LOCALES as readonly string[]).includes(value);
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
  .map((item) => {
    const loc = `${SITE.url}${item.path}`;
    const alternates = item.alternates
      ? Object.entries(item.alternates)
          .map(
            ([hreflang, href]) =>
              `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(href)}" />`,
          )
          .join("\n")
      : "";
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${item.lastmod}</lastmod>${alternates ? `\n${alternates}` : ""}
  </url>`;
  })
  .join("\n")}
</urlset>`;
}

export const XML_HEADERS = {
  "Content-Type": "application/xml",
  "Cache-Control": "public, max-age=0, s-maxage=3600",
} as const;

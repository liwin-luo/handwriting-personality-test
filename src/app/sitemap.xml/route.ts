import { CONTENT_UPDATED } from "@/content/editorial";
import { SITE } from "@/lib/site";
import { SITEMAP_LOCALES } from "@/lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_LOCALES.map(
  (locale) => `  <sitemap>
    <loc>${SITE.url}/sitemaps/${locale}.xml</loc>
    <lastmod>${CONTENT_UPDATED}</lastmod>
  </sitemap>`,
).join("\n")}
</sitemapindex>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}

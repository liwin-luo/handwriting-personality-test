import { XML_HEADERS, sitemapXml } from "@/lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  return new Response(sitemapXml("en"), { headers: XML_HEADERS });
}

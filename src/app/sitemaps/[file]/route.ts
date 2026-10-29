import { SITEMAP_LOCALES, XML_HEADERS, isSitemapLocale, sitemapXml } from "@/lib/sitemap-data";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SITEMAP_LOCALES.map((code) => ({ file: `${code}.xml` }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const code = file.replace(/\.xml$/, "");
  if (!isSitemapLocale(code)) return new Response("Not found", { status: 404 });
  return new Response(sitemapXml(code), { headers: XML_HEADERS });
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LatinGuide } from "@/components/LatinScreens";
import { packs } from "@/content/packs";
import { guideLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.entries(packs).flatMap(([locale, pack]) =>
    pack.guides.map((guide) => ({ locale, glyph: guide.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; glyph: string }>;
}): Promise<Metadata> {
  const { locale, glyph } = await params;
  const pack = packs[locale];
  const guide = pack?.guideBySlug[glyph];
  if (!guide) return {};
  return pageMeta({
    title: guide.title,
    description: guide.description,
    path: `/${locale}/guides/${guide.slug}`,
    langs: guideLangs(guide.slug),
  });
}

export default async function LocaleGuide({ params }: { params: Promise<{ locale: string; glyph: string }> }) {
  const { locale, glyph } = await params;
  const pack = packs[locale];
  const guide = pack?.guideBySlug[glyph];
  if (!pack || !guide) notFound();
  return <LatinGuide pack={pack} guide={guide} />;
}

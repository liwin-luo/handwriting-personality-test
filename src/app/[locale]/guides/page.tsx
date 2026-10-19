import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TraitsScreen } from "@/components/TraitsScreen";
import { packs } from "@/content/packs";
import { traitsCopyFor } from "@/content/traits";
import { traitsLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  // Spanish is a separate tree under app/es, and it is not in the latin packs.
  return Object.keys(packs)
    .filter((locale) => locale !== "es")
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = traitsCopyFor(locale);
  if (!copy || !packs[locale]) return {};
  return pageMeta({
    title: copy.title,
    description: copy.description,
    path: `/${locale}/guides`,
    langs: traitsLangs(),
  });
}

export default async function LocaleGuides({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const pack = packs[locale];
  const copy = traitsCopyFor(locale);
  if (!pack || !copy) notFound();
  return (
    <TraitsScreen
      copy={copy}
      more={pack.guides.map((guide) => ({ href: `/${locale}/guides/${guide.slug}`, label: guide.title }))}
    />
  );
}

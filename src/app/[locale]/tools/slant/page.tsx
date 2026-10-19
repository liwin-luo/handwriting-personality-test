import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SlantScreen } from "@/components/ToolScreens";
import { packs } from "@/content/packs";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
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
  const copy = toolCopyFor(locale);
  if (!copy || !packs[locale]) return {};
  return pageMeta({
    title: copy.slant.title,
    description: copy.slant.description,
    path: `/${locale}/tools/slant`,
    langs: toolLangs("/tools/slant"),
  });
}

export default async function LocaleSlant({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = toolCopyFor(locale);
  if (!packs[locale] || !copy) notFound();
  return <SlantScreen lang={locale} path={`/${locale}/tools/slant`} copy={copy.slant} />;
}

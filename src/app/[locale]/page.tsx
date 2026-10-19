import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LatinHome } from "@/components/LatinScreens";
import { packs } from "@/content/packs";
import { homeLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(packs).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const pack = packs[locale];
  if (!pack) return {};
  return pageMeta({
    title: pack.copy.title,
    description: pack.copy.description,
    path: `/${locale}`,
    absolute: true,
    langs: homeLangs(),
  });
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const pack = packs[locale];
  if (!pack) notFound();
  return <LatinHome pack={pack} />;
}

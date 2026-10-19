import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LatinScience } from "@/components/LatinScreens";
import { packs } from "@/content/packs";
import { scienceLangs } from "@/lib/langs";
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
    title: pack.copy.science.title,
    description: pack.copy.science.description,
    path: `/${locale}/science`,
    langs: scienceLangs(),
  });
}

export default async function LocaleScience({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const pack = packs[locale];
  if (!pack) notFound();
  return <LatinScience pack={pack} />;
}

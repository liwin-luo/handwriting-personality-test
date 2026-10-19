import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChartScreen } from "@/components/ToolScreens";
import { packs } from "@/content/packs";
import { toolCopyFor } from "@/content/tools";
import { chartItems } from "@/lib/chart-items";
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
    title: copy.chart.title,
    description: copy.chart.description,
    path: `/${locale}/chart`,
    langs: toolLangs("/chart"),
  });
}

export default async function LocaleChart({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const pack = packs[locale];
  const copy = toolCopyFor(locale);
  if (!pack || !copy) notFound();
  return (
    <ChartScreen
      lang={locale}
      copy={copy.chart}
      items={chartItems({
        questions: pack.localizedQuestions(),
        guides: pack.guides,
        testBase: `/${locale}`,
        guideBase: `/${locale}/guides`,
      })}
    />
  );
}

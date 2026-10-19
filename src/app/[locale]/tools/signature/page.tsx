import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SignatureScreen } from "@/components/ToolScreens";
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
    title: copy.signature.title,
    description: copy.signature.description,
    path: `/${locale}/tools/signature`,
    langs: toolLangs("/tools/signature"),
  });
}

export default async function LocaleSignature({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = toolCopyFor(locale);
  if (!packs[locale] || !copy) notFound();
  return <SignatureScreen lang={locale} path={`/${locale}/tools/signature`} copy={copy.signature} />;
}

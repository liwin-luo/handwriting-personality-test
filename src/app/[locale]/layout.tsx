import type { Metadata } from "next";
import { packs } from "@/content/packs";
import { RootDocument } from "@/components/RootDocument";
import { rootMetadata } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = rootMetadata;
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(packs).map((locale) => ({ locale }));
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <RootDocument lang={locale}>{children}</RootDocument>;
}

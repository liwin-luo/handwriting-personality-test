import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeriesScreen } from "@/components/SeriesScreen";
import { packs } from "@/content/packs";
import { seriesFor, seriesPath } from "@/content/series.mjs";
import { seriesLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

type SeriesKey = "faq" | "about" | "size" | "body";

const paths = {
  faq: "/faq",
  about: "/about",
  size: "/tools/signature/size",
  body: "/tools/signature/body",
} as const;

export function seriesMetadata(code: string, page: SeriesKey): Metadata {
  const copy = seriesFor(code)[page];
  return pageMeta({
    title: copy.title,
    description: copy.description,
    path: seriesPath(code, page),
    langs: seriesLangs(paths[page]),
  });
}

export function SeriesView({ code, page }: { code: string; page: SeriesKey }) {
  return <SeriesScreen copy={seriesFor(code)[page]} path={seriesPath(code, page)} lang={code} />;
}

export function staticSeries(code: string, page: SeriesKey) {
  return {
    metadata: seriesMetadata(code, page),
    Page() {
      return <SeriesView code={code} page={page} />;
    },
  };
}

export function localeSeries(page: SeriesKey) {
  return {
    generateStaticParams() {
      return Object.keys(packs).map((locale) => ({ locale }));
    },
    async generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
      const { locale } = await params;
      if (!packs[locale]) return {};
      return seriesMetadata(locale, page);
    },
    async Page({ params }: { params: Promise<{ locale: string }> }) {
      const { locale } = await params;
      if (!packs[locale]) notFound();
      return <SeriesView code={locale} page={page} />;
    },
  };
}

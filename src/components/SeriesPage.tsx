import type { Metadata } from "next";
import { SeriesScreen } from "@/components/SeriesScreen";
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

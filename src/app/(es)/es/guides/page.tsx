import { TraitsScreen } from "@/components/TraitsScreen";
import { guides } from "@/content/es.mjs";
import { traitsCopyFor } from "@/content/traits";
import { traitsLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = traitsCopyFor("es")!;

export const metadata = pageMeta({
  title: copy.title,
  description: copy.description,
  path: "/es/guides",
  langs: traitsLangs(),
});

export default function EsGuidesIndex() {
  return (
    <TraitsScreen
      copy={copy}
      more={guides.map((guide: { slug: string; title: string }) => ({ href: `/es/guides/${guide.slug}`, label: guide.title }))}
    />
  );
}

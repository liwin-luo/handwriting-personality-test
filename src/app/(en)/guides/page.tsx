import { TraitsScreen } from "@/components/TraitsScreen";
import { guides } from "@/content/guides";
import { traitsCopyFor } from "@/content/traits";
import { traitsLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = traitsCopyFor("en")!;

export const metadata = pageMeta({
  title: copy.title,
  description: copy.description,
  path: "/guides",
  langs: traitsLangs(),
});

export default function GuidesIndex() {
  return <TraitsScreen copy={copy} more={guides.map((guide) => ({ href: `/guides/${guide.slug}`, label: guide.title }))} />;
}

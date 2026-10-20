import { TraitsScreen } from "@/components/TraitsScreen";
import { traitsCopyFor } from "@/content/traits";
import { guides as zhGuides } from "@/content/zh-guides.mjs";
import { traitsLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = traitsCopyFor("zh")!;

export const metadata = pageMeta({
  title: copy.title,
  description: copy.description,
  path: "/zh/guides",
  langs: traitsLangs(),
});

export default function ZhGuidesIndex() {
  return (
    <TraitsScreen copy={copy} more={zhGuides.map((guide: { slug: string; title: string }) => ({ href: `/zh/guides/${guide.slug}`, label: guide.title }))} />
  );
}

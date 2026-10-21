import { ArticlePageView } from "@/components/seo/PageParts";
import { methodology } from "@/content/seo/en-methodology";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: methodology.title,
  description: methodology.meta,
  path: "/methodology",
  langs: { en: "https://handwritingpersonalitytest.online/methodology" },
  openGraphType: "article",
  publishedTime: methodology.published,
  modifiedTime: methodology.updated,
});

export default function MethodologyPage() {
  return (
    <ArticlePageView
      content={methodology}
      schemaType="Article"
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Methodology" }]}
    />
  );
}

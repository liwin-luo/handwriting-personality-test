import { ArticlePageView } from "@/components/seo/PageParts";
import { signatureSizeGuide } from "@/content/seo/en-signature-guides";
import { guideLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: signatureSizeGuide.title,
  description: signatureSizeGuide.meta,
  path: "/guides/signature-size",
  langs: guideLangs("signature-size"),
  openGraphType: "article",
  publishedTime: signatureSizeGuide.published,
  modifiedTime: signatureSizeGuide.updated,
});

export default function SignatureSizePage() {
  return (
    <ArticlePageView
      content={signatureSizeGuide}
      schemaType="Article"
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/guides", label: "Guides" },
        { label: "Signature size" },
      ]}
    />
  );
}

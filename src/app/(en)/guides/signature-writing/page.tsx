import { ArticlePageView } from "@/components/seo/PageParts";
import { signatureWritingGuide } from "@/content/seo/en-signature-guides";
import { guideLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: signatureWritingGuide.title,
  description: signatureWritingGuide.meta,
  path: "/guides/signature-writing",
  image: "/og/guides.png",
  langs: guideLangs("signature-writing"),
  openGraphType: "article",
  publishedTime: signatureWritingGuide.published,
  modifiedTime: signatureWritingGuide.updated,
});

export default function SignatureWritingPage() {
  return (
    <ArticlePageView
      content={signatureWritingGuide}
      schemaType="Article"
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/guides", label: "Guides" },
        { label: "Signature and writing" },
      ]}
    />
  );
}

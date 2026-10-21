import { ArticlePageView } from "@/components/seo/PageParts";
import { zhSignatureWriting } from "@/content/seo/zh-signature-guides";
import { guideLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: zhSignatureWriting.title,
  description: zhSignatureWriting.meta,
  path: "/zh/guides/signature-writing",
  langs: guideLangs("signature-writing"),
  openGraphType: "article",
  publishedTime: zhSignatureWriting.published,
  modifiedTime: zhSignatureWriting.updated,
});

export default function ZhSignatureWritingPage() {
  return (
    <ArticlePageView
      content={zhSignatureWriting}
      lang="zh"
      schemaType="Article"
      breadcrumbs={[
        { href: "/zh", label: "首页" },
        { href: "/zh/guides", label: "写法指南" },
        { label: "签名和正文差在哪" },
      ]}
    />
  );
}

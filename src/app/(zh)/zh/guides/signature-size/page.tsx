import { ArticlePageView } from "@/components/seo/PageParts";
import { zhSignatureSize } from "@/content/seo/zh-signature-guides";
import { guideLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: zhSignatureSize.title,
  description: zhSignatureSize.meta,
  path: "/zh/guides/signature-size",
  langs: guideLangs("signature-size"),
  openGraphType: "article",
  publishedTime: zhSignatureSize.published,
  modifiedTime: zhSignatureSize.updated,
});

export default function ZhSignatureSizePage() {
  return (
    <ArticlePageView
      content={zhSignatureSize}
      lang="zh"
      schemaType="Article"
      breadcrumbs={[
        { href: "/zh", label: "首页" },
        { href: "/zh/guides", label: "写法指南" },
        { label: "签名有多大" },
      ]}
    />
  );
}

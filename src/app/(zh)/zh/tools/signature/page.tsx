import { SignatureTool } from "@/components/SignatureTool";
import { ToolPageView } from "@/components/seo/PageParts";
import { zhSignature } from "@/content/seo/zh";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("zh")!.signature;

export const metadata = pageMeta({
  title: zhSignature.title,
  description: zhSignature.meta,
  path: "/zh/tools/signature",
  langs: toolLangs("/tools/signature"),
});

export default function ZhSignaturePage() {
  return (
    <ToolPageView
      content={zhSignature}
      lang="zh"
      breadcrumbs={[
        { href: "/zh", label: "首页" },
        { href: "/zh/tools", label: "工具" },
        { label: "签名" },
      ]}
    >
      <SignatureTool copy={copy} />
    </ToolPageView>
  );
}

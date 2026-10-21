import { SlantTool } from "@/components/SlantTool";
import { ToolPageView } from "@/components/seo/PageParts";
import { zhSlant } from "@/content/seo/zh";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("zh")!.slant;

export const metadata = pageMeta({
  title: zhSlant.title,
  description: zhSlant.meta,
  path: "/zh/tools/slant",
  langs: toolLangs("/tools/slant"),
});

export default function ZhSlantPage() {
  return (
    <ToolPageView
      content={zhSlant}
      lang="zh"
      breadcrumbs={[
        { href: "/zh", label: "首页" },
        { href: "/zh/tools", label: "工具" },
        { label: "倾斜" },
      ]}
    >
      <SlantTool copy={copy} />
    </ToolPageView>
  );
}

import { SlantTool } from "@/components/SlantTool";
import { ToolPageView } from "@/components/seo/PageParts";
import { slantTool } from "@/content/seo/en-tools";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("en")!.slant;

export const metadata = pageMeta({
  title: slantTool.title,
  description: slantTool.meta,
  path: "/tools/slant",
  langs: toolLangs("/tools/slant"),
});

export default function SlantPage() {
  return (
    <ToolPageView
      content={slantTool}
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/tools", label: "Tools" },
        { label: "Slant" },
      ]}
    >
      <SlantTool copy={copy} />
    </ToolPageView>
  );
}

import { SlantScreen } from "@/components/ToolScreens";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("zh")!;

export const metadata = pageMeta({
  title: copy.slant.title,
  description: copy.slant.description,
  path: "/zh/tools/slant",
  langs: toolLangs("/tools/slant"),
});

export default function ZhSlantPage() {
  return <SlantScreen lang="zh" path="/zh/tools/slant" copy={copy.slant} />;
}

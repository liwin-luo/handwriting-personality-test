import { SlantScreen } from "@/components/ToolScreens";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("en")!;

export const metadata = pageMeta({
  title: copy.slant.title,
  description: copy.slant.description,
  path: "/tools/slant",
  langs: toolLangs("/tools/slant"),
});

export default function SlantPage() {
  return <SlantScreen lang="en" path="/tools/slant" copy={copy.slant} />;
}

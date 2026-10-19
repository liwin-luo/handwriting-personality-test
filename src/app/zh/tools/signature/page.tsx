import { SignatureScreen } from "@/components/ToolScreens";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("zh")!;

export const metadata = pageMeta({
  title: copy.signature.title,
  description: copy.signature.description,
  path: "/zh/tools/signature",
  langs: toolLangs("/tools/signature"),
});

export default function ZhSignaturePage() {
  return <SignatureScreen lang="zh" path="/zh/tools/signature" copy={copy.signature} />;
}

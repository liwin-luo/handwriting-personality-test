import { SignatureScreen } from "@/components/ToolScreens";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("en")!;

export const metadata = pageMeta({
  title: copy.signature.title,
  description: copy.signature.description,
  path: "/tools/signature",
  langs: toolLangs("/tools/signature"),
});

export default function SignaturePage() {
  return <SignatureScreen lang="en" path="/tools/signature" copy={copy.signature} />;
}

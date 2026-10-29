import { SignatureTool } from "@/components/SignatureTool";
import { ToolPageView } from "@/components/seo/PageParts";
import { signatureTool } from "@/content/seo/en-tools";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("en")!.signature;

export const metadata = pageMeta({
  title: signatureTool.title,
  description: signatureTool.meta,
  path: "/tools/signature",
  image: "/og/tools.png",
  langs: toolLangs("/tools/signature"),
});

export default function SignaturePage() {
  return (
    <ToolPageView
      content={signatureTool}
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/tools", label: "Tools" },
        { label: "Signature" },
      ]}
    >
      <SignatureTool copy={copy} />
    </ToolPageView>
  );
}

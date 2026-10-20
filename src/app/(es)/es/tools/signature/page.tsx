import { SignatureScreen } from "@/components/ToolScreens";
import { toolCopyFor } from "@/content/tools";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("es")!;

export const metadata = pageMeta({
  title: copy.signature.title,
  description: copy.signature.description,
  path: "/es/tools/signature",
  langs: toolLangs("/tools/signature"),
});

export default function EsSignaturePage() {
  return <SignatureScreen lang="es" path="/es/tools/signature" copy={copy.signature} />;
}

import { HubPageView } from "@/components/seo/PageParts";
import { toolsHub } from "@/content/seo/en-hub";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: toolsHub.title,
  description: toolsHub.meta,
  path: "/tools",
  langs: toolLangs("/tools"),
});

export default function ToolsPage() {
  return (
    <HubPageView
      content={toolsHub}
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Tools" }]}
    />
  );
}

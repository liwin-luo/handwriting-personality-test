import { HubPageView } from "@/components/seo/PageParts";
import { zhToolsHub } from "@/content/seo/zh";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: zhToolsHub.title,
  description: zhToolsHub.meta,
  path: "/zh/tools",
  langs: toolLangs("/tools"),
});

export default function ZhToolsPage() {
  return (
    <HubPageView
      content={zhToolsHub}
      lang="zh"
      breadcrumbs={[{ href: "/zh", label: "首页" }, { label: "工具" }]}
    />
  );
}

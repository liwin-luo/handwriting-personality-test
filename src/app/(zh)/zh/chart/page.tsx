import { ChartScreen } from "@/components/ToolScreens";
import { toolCopyFor } from "@/content/tools";
import { guides } from "@/content/zh-guides.mjs";
import { questions } from "@/content/zh.mjs";
import { chartItems } from "@/lib/chart-items";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("zh")!;

export const metadata = pageMeta({
  title: copy.chart.title,
  description: copy.chart.description,
  path: "/zh/chart",
  langs: toolLangs("/chart"),
});

export default function ZhChartPage() {
  return (
    <ChartScreen
      lang="zh"
      copy={copy.chart}
      items={chartItems({
        questions,
        guides,
        testBase: "/zh",
        guideBase: "/zh/guides",
        groupFrom: "id",
      })}
    />
  );
}

import { Chart } from "@/components/Chart";
import { ToolPageView } from "@/components/seo/PageParts";
import { zhSampleChart } from "@/content/seo/zh";
import { guides } from "@/content/zh-guides.mjs";
import { questions } from "@/content/zh.mjs";
import { toolCopyFor } from "@/content/tools";
import { chartItems } from "@/lib/chart-items";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("zh")!.chart;

export const metadata = pageMeta({
  title: zhSampleChart.title,
  description: zhSampleChart.meta,
  path: "/zh/tools/sample-chart",
  langs: toolLangs("/tools/sample-chart"),
});

export default function ZhSampleChartPage() {
  return (
    <ToolPageView
      content={zhSampleChart}
      lang="zh"
      breadcrumbs={[
        { href: "/zh", label: "首页" },
        { href: "/zh/tools", label: "工具" },
        { label: "字例图表" },
      ]}
    >
      <Chart
        items={chartItems({
          questions,
          guides,
          testBase: "/zh",
          guideBase: "/zh/guides",
          groupFrom: "id",
        })}
        copy={copy}
      />
    </ToolPageView>
  );
}

import { Chart } from "@/components/Chart";
import { ToolPageView } from "@/components/seo/PageParts";
import { questions } from "@/content";
import { guides } from "@/content/guides";
import { sampleChartTool } from "@/content/seo/en-tools";
import { toolCopyFor } from "@/content/tools";
import { chartItems } from "@/lib/chart-items";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("en")!.chart;

export const metadata = pageMeta({
  title: sampleChartTool.title,
  description: sampleChartTool.meta,
  path: "/tools/sample-chart",
  langs: toolLangs("/tools/sample-chart"),
});

export default function SampleChartPage() {
  return (
    <ToolPageView
      content={sampleChartTool}
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/tools", label: "Tools" },
        { label: "Sample chart" },
      ]}
    >
      <Chart
        items={chartItems({ questions, guides, testBase: "/", guideBase: "/guides" })}
        copy={copy}
      />
    </ToolPageView>
  );
}

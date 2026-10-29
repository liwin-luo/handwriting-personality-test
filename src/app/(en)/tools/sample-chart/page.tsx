import { Chart } from "@/components/Chart";
import { ChartClaims } from "@/components/ChartClaims";
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
  image: "/og/chart.png",
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
      extra={<ChartClaims />}
    >
      <p className="no-print flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a className="text-link" href="/handwriting-analysis-chart.pdf" download>
          Download the PDF
        </a>
        <span className="text-muted">Print-ready. Every shape, and the trait claims checked against them.</span>
      </p>
      <Chart
        items={chartItems({ questions, guides, testBase: "/", guideBase: "/guides" })}
        copy={copy}
      />
    </ToolPageView>
  );
}

import { ChartScreen } from "@/components/ToolScreens";
import { guides, spanishQuestions } from "@/content/es.mjs";
import { toolCopyFor } from "@/content/tools";
import { chartItems } from "@/lib/chart-items";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("es")!;

export const metadata = pageMeta({
  title: copy.chart.title,
  description: copy.chart.description,
  path: "/es/chart",
  langs: toolLangs("/chart"),
});

export default function EsChartPage() {
  return (
    <ChartScreen
      lang="es"
      copy={copy.chart}
      items={chartItems({
        questions: spanishQuestions(),
        guides,
        testBase: "/es",
        guideBase: "/es/guides",
      })}
    />
  );
}

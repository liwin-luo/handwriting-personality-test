import { ChartScreen } from "@/components/ToolScreens";
import { questions } from "@/content";
import { guides } from "@/content/guides";
import { toolCopyFor } from "@/content/tools";
import { chartItems } from "@/lib/chart-items";
import { toolLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

const copy = toolCopyFor("en")!;

export const metadata = pageMeta({
  title: copy.chart.title,
  description: copy.chart.description,
  path: "/chart",
  langs: toolLangs("/chart"),
});

export default function ChartPage() {
  return (
    <ChartScreen
      lang="en"
      copy={copy.chart}
      items={chartItems({ questions, guides, testBase: "/", guideBase: "/guides" })}
    />
  );
}

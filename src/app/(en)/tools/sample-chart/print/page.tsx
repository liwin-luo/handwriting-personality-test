import { Glyph } from "@/components/Glyph";
import { questions } from "@/content";
import { guides } from "@/content/guides";
import { chartItems } from "@/lib/chart-items";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Handwriting Chart PDF",
  description: "The printable version of the handwriting analysis chart: every shape in the test, with the trait each shape is claimed to show.",
  path: "/tools/sample-chart/print",
  index: false,
});

const claims = [
  ["Open 4", "Sociable", "Taught in many US school hands"],
  ["Closed 4", "Guarded", "Taught in many continental school hands"],
  ["Crossed 7", "Decisive", "Separates 7 from a serifed 1"],
  ["Slashed 0", "Technical", "Prevents 0 and O confusion"],
  ["Single-storey a", "Spontaneous", "Taught in some national hands"],
  ["Double-storey a", "Conventional", "The printed form taught first in English schools"],
  ["Looped g or y", "Imaginative", "A feature of cursive models"],
  ["Open g", "Impatient", "Common in print-style and quick hands"],
  ["High t-bar", "Ambitious", "Moves with speed and with the model"],
  ["Circled i-dot", "Playful", "Copied from a friend or a lettering book"],
  ["Wide word gaps", "Independent", "Follows paper width and hurry"],
  ["Right slant", "Outgoing", "Standard in italic models"],
  ["Upright slant", "Reserved", "Standard in several European school scripts"],
  ["Large letters", "Confident", "Follows paper, pen, and purpose"],
  ["Continuous joins", "Logical", "A property of the script taught"],
  ["Flourished &", "Stylish", "A printed form centuries old"],
];

const groupNames: Record<string, string> = {
  digit: "Numbers",
  letter: "Letters",
  symbol: "Symbols",
  spacing: "Spacing",
  slant: "Slant",
};

export default function ChartPrintPage() {
  const items = chartItems({ questions, guides, testBase: "/", guideBase: "/guides" });
  const groups = [...new Set(items.map((item) => item.group))];

  return (
    <div className="chart-print">
      <h1 className="font-display text-3xl leading-tight">Handwriting analysis chart</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed">
        Every shape the 19-question handwriting personality test asks about. Line drawings, not photographs. The test
        asks which form is closest to your own writing; it does not score how well you draw it.
      </p>
      <p className="mt-1 text-sm text-muted">handwritingpersonalitytest.online/tools/sample-chart</p>

      {groups.map((group) => (
        <section key={group} className="mt-5">
          <h2 className="font-display text-lg">{groupNames[group] ?? group}</h2>
          <ul className="mt-2 grid grid-cols-4 gap-2">
            {items
              .filter((item) => item.group === group)
              .map((item) => (
                <li key={item.key} className="border border-rule p-1.5">
                  <Glyph file={item.file} alt={item.alt} loading="eager" />
                  <p className="mt-1 text-[11px] leading-tight font-medium">{item.label}</p>
                  <p className="text-[10px] leading-tight text-muted">{item.alt}</p>
                </li>
              ))}
          </ul>
        </section>
      ))}

      <section className="mt-6">
        <h2 className="font-display text-lg">Claimed traits, and what explains them instead</h2>
        <table className="mt-2 w-full border-collapse text-left text-[11px]">
          <thead>
            <tr className="border-b border-ink">
              <th className="py-1 pr-2">Shape</th>
              <th className="py-1 pr-2">Claimed trait</th>
              <th className="py-1">What explains it instead</th>
            </tr>
          </thead>
          <tbody>
            {claims.map(([shape, trait, reason]) => (
              <tr key={shape} className="border-b border-rule">
                <td className="py-1 pr-2">{shape}</td>
                <td className="py-1 pr-2 text-muted">{trait}</td>
                <td className="py-1">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-[10px] leading-relaxed text-muted">
          When the text of a sample is held constant, handwriting experts predict personality close to chance (Neter
          and Ben-Shakhar, 1989). This chart names shapes. It does not name the person.
        </p>
      </section>
    </div>
  );
}

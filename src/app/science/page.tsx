import { Crumbs, JsonLd } from "@/components/Meta";
import { scienceLangs } from "@/lib/langs";
import { SITE, pageMeta } from "@/lib/site";

const faqs = [
  {
    q: "Is handwriting analysis accurate?",
    a: "Measuring a visible mark is accurate enough: you can see a slant, a gap, or a closed 4. Inferring personality, health, honesty, intelligence, or job fitness from those marks is not. Studies that ask experts to judge personality from handwriting do not show a stable advantage over chance or over a non-expert.",
  },
  {
    q: "Is graphology real?",
    a: "Graphology is the claim that handwriting systematically reveals personality. The claim has been tested for decades and has not held up as a method you can rely on. This site does not practice it. The labels here are names for groups of shapes.",
  },
  {
    q: "Can a photo of handwriting show pen pressure or speed?",
    a: "No. A photograph shows the ink that stayed on the page, including how dark a stroke looks. Darkness is not pressure, and the picture has no clock. Speed and real pen pressure are gone once the hand lifts.",
  },
  {
    q: "Can this test tell if someone is honest or a good hire?",
    a: "No. Do not use a result link, a slant, or a loop to judge honesty, health, intelligence, or whether to hire someone. The terms page says the same thing because it matters more than the label.",
  },
  {
    q: "What does this test actually do?",
    a: "You pick the closest shape for up to twelve glyphs. Eight answers produce one of six fictional names from four tallies: structure, endings, page rhythm, and flourish. A two-point lead names the result. Flourish and rhythm as the top pair name Daydream Doodler. Anything else close is Instinctive Mixer.",
  },
];

export const metadata = pageMeta({
  title: "Is handwriting analysis accurate",
  description:
    "What a handwriting personality test can see, and what it cannot say about personality, health, honesty, intelligence, or hiring.",
  path: "/science",
  langs: scienceLangs(),
});

export default function SciencePage() {
  return (
    <>
      <Crumbs items={[{ href: "/", label: "Test" }, { label: "Science" }]} />
      <h1 className="font-display text-5xl leading-[0.95]">Is handwriting analysis accurate?</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        You can see a stroke. You cannot see a person in it. This page is the boundary for every label on the site.
      </p>
      <h2 className="mt-10 font-display text-2xl">What is visible</h2>
      <p className="mt-4 leading-relaxed">
        Size, slant, spacing, how a letter ends, and whether a counter is closed are visible on paper. Two people can point at the same stroke and agree. The chart and the guides stay inside that agreement.
      </p>
      <h2 className="mt-10 font-display text-2xl">What is not visible</h2>
      <p className="mt-4 leading-relaxed">
        Personality, mood, health, honesty, intelligence, and fitness for a job are not in the stroke. A photograph also drops pen pressure and speed. Dark ink is not a hard pen. A tidy line is not a slow one.
      </p>
      <p className="mt-4 leading-relaxed">
        A 1989 meta-analysis of graphology in hiring looked at 17 studies. Where the text itself was neutral, graphologists’ scores sat near zero. Psychologists with no graphology training did better than the graphologists, which points at the words on the page rather than the strokes. See Neter and Ben-Shakhar, Personality and Individual Differences, 1989, volume 10, pages 737–745. Do not stake a decision on a handwriting label.
      </p>
      <h2 className="mt-10 font-display text-2xl">What the test is for</h2>
      <p className="mt-4 leading-relaxed">
        The test files the shapes you selected under a fictional name so you can share the filing, not a verdict.{" "}
        <a className="underline decoration-rule underline-offset-4" href="/about">
          About
        </a>{" "}
        explains the arithmetic. The guides explain individual shapes, including the part you should not interpret.
      </p>
      <h2 className="mt-10 font-display text-2xl">Questions</h2>
      <dl className="mt-4 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q}>
            <dt className="font-display text-xl">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${SITE.url}/science`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </>
  );
}

import { JsonLd } from "@/components/Meta";
import { SlantTool } from "@/components/SlantTool";
import { SITE, pageMeta } from "@/lib/site";

const steps = [
  "Use a few lines of ordinary writing. Leave the signature out.",
  "Put the page flat and the camera above it. A tilted photo leans every stem.",
  "Drag the red stem until it matches one downstroke.",
  "Within 8 degrees of vertical is upright. Left and right are the other two readings.",
];

const faqs = [
  {
    q: "What does handwriting slant mean?",
    a: "Here it means which side of vertical a downstroke leans. It does not mean a mood, a job, or a relationship.",
  },
  {
    q: "Is the photo uploaded?",
    a: "No. The file stays in this browser. Closing the page drops it.",
  },
  {
    q: "Why might the angle be wrong?",
    a: "A camera that is not square to the page, a curled sheet, or aligning the ruler with a diagonal stroke instead of a stem will move the number.",
  },
  {
    q: "Where does this sit in the test?",
    a: "The quiz asks you to pick a left, upright, or right sample. This page is for measuring one stem on a real page.",
  },
];

export const metadata = pageMeta({
  title: "Measure handwriting slant",
  description: "Align a stem on your own page and read left, upright, or right. The photo stays in the browser. Slant is not a personality score.",
  path: "/tools/slant",
});

export default function SlantPage() {
  return (
    <>
      <p className="text-sm uppercase tracking-[0.16em] text-seal">Tool</p>
      <h1 className="mt-2 font-display text-5xl leading-[0.95]">Measure handwriting slant</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        Match one downstroke. The number is an angle, not a trait. The{" "}
        <a className="underline decoration-rule underline-offset-4" href="/science">
          science page
        </a>{" "}
        says what a lean cannot prove.
      </p>
      <SlantTool />
      <h2 className="mt-12 font-display text-2xl">How to read it</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="mt-8">
        <a className="bg-ink px-4 py-2 text-sm text-paper" href="/#q-slant">
          Pick a slant in the test
        </a>
      </p>
      <h2 className="mt-12 font-display text-2xl">Questions</h2>
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
          "@type": "HowTo",
          name: "Measure handwriting slant",
          url: `${SITE.url}/tools/slant`,
          step: steps.map((text, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            text,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
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

import { JsonLd } from "@/components/Meta";
import { SignatureTool } from "@/components/SignatureTool";
import { SITE, pageMeta } from "@/lib/site";

const steps = [
  "Draw the mark in the box. A finger or a mouse is enough. Do not sign your legal name if you would rather not.",
  "The box reports width, height, ink length, how many strokes you lifted, and the lean of the longer downstrokes.",
  "Clear the box when you are done. The drawing is not stored.",
];

const faqs = [
  {
    q: "What does my signature say?",
    a: "On this page it says how wide the mark is, how long the ink ran, and which way the downstrokes lean. It does not say who you are or whether the signature is genuine.",
  },
  {
    q: "Is this identity verification?",
    a: "No. A drawing in a browser is not a specimen, and this site does not compare it with any other signature.",
  },
  {
    q: "Why measure strokes separately?",
    a: "A signature is often one habit piled on another. Width and lean can be looked at without turning them into a story.",
  },
  {
    q: "Is the drawing uploaded?",
    a: "No. It stays in the canvas until you clear it or leave the page.",
  },
];

export const metadata = pageMeta({
  title: "Measure a signature",
  description: "Draw a mark and read its width, ink length, and slant. Local only. Not identification and not a personality reading.",
  path: "/tools/signature",
});

export default function SignaturePage() {
  return (
    <>
      <p className="text-sm uppercase tracking-[0.16em] text-seal">Tool</p>
      <h1 className="mt-2 font-display text-5xl leading-[0.95]">Measure a signature</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        Width, ink, and lean. The mark is not saved, and it is not evidence of identity. Read the{" "}
        <a className="underline decoration-rule underline-offset-4" href="/science">
          limit
        </a>{" "}
        before you treat a number as a person.
      </p>
      <SignatureTool />
      <h2 className="mt-12 font-display text-2xl">How to read it</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
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
          name: "Measure a signature",
          url: `${SITE.url}/tools/signature`,
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

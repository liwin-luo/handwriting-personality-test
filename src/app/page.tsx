import { Quiz } from "@/components/Quiz";
import { JsonLd } from "@/components/Meta";
import { profiles } from "@/content";
import { guides } from "@/content/guides";
import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Handwriting Personality Test",
  description:
    "A free handwriting personality test. Pick the shapes you actually write. Eight answers show a fictional label. Nothing is uploaded.",
  path: "/",
  absolute: true,
  pair: { en: `${SITE.url}/`, zh: `${SITE.url}/zh` },
});

export default function HomePage() {
  return (
    <>
      <p className="text-sm uppercase tracking-[0.16em] text-seal">Free · no upload</p>
      <h1 className="mt-2 max-w-xl font-display text-5xl leading-[0.95] tracking-tight">Handwriting Personality Test</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        Pick the shapes you write. Eight answers are enough. The name you get is a filing label for those shapes, not a diagnosis. Keys 1, 2, and 3 choose a shape.
      </p>
      <p className="mt-3 text-sm">
        <a className="underline decoration-rule underline-offset-4" href="/zh">
          中文硬笔是另一套题
        </a>
        <span className="text-muted"> · </span>
        <a className="underline decoration-rule underline-offset-4" href="/tools/slant">
          Measure a slant
        </a>
        <span className="text-muted"> · </span>
        <a className="underline decoration-rule underline-offset-4" href="/tools/signature">
          Measure a signature
        </a>
      </p>
      <div className="mt-8">
        <Quiz />
      </div>
      <section className="mt-16">
        <h2 className="font-display text-3xl">Six fictional labels</h2>
        <p className="mt-3 max-w-xl leading-relaxed">
          Each name collects one way of drawing. Read the label before you share it. The{" "}
          <a className="underline decoration-rule underline-offset-4" href="/science">
            science page
          </a>{" "}
          says what a stroke cannot prove.
        </p>
        <ul className="mt-6 divide-y divide-rule border-y border-rule">
          {profiles.map((profile) => (
            <li key={profile.slug}>
              <a href={`/results/${profile.slug}`} className="flex items-baseline justify-between gap-4 py-3">
                <span className="font-display text-xl">{profile.name}</span>
                <span className="text-right text-sm text-muted">{profile.sentence}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="font-display text-3xl">One shape, one page</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <a href={`/guides/${guide.slug}`} className="block border border-rule bg-card px-4 py-3">
                {guide.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: SITE.name,
          url: SITE.url,
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Web",
          inLanguage: "en",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Pick handwritten shapes and get a fictional label. Answers stay in the result link.",
        }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import { Crumbs, JsonLd } from "@/components/Meta";
import { AuthorLine } from "@/components/seo/PageParts";
import { CONTENT_UPDATED } from "@/content/editorial";
import { guideBySlug, guides } from "@/content/guides";
import { guideLangs } from "@/lib/langs";
import { SITE, pageMeta } from "@/lib/site";
import { withUtm } from "@/lib/utm.mjs";

export function generateStaticParams() {
  return guides.map((guide) => ({ glyph: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ glyph: string }>;
}): Promise<Metadata> {
  const { glyph } = await params;
  const guide = guideBySlug[glyph];
  if (!guide) return {};
  return pageMeta({
    title: guide.seoTitle ?? guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    image: "/og/guides.png",
    langs: guideLangs(guide.slug),
  });
}

export default async function GuidePage({ params }: { params: Promise<{ glyph: string }> }) {
  const { glyph } = await params;
  const guide = guideBySlug[glyph];
  if (!guide) notFound();
  return (
    <>
      <Crumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/guides", label: "Guides" },
          { label: guide.title },
        ]}
      />
      <h1 className="font-display text-5xl leading-[0.95]">{guide.title}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{guide.description}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {guide.figures.map((figure) => (
          <li key={figure.file} className="border border-rule bg-card p-3">
            <a href={withUtm(`/tools/sample-chart#${guide.questionId}-${figure.file.replace(".svg", "")}`, "figure")}>
              <Glyph file={figure.file} alt={figure.caption} />
              <span className="mt-2 block text-sm leading-snug">{figure.caption}</span>
            </a>
          </li>
        ))}
      </ul>
      <h2 className="mt-12 font-display text-2xl">Where this comes from</h2>
      {guide.origin.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <h2 className="mt-10 font-display text-2xl">What this does not show</h2>
      {guide.limits.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <section className="mt-10">
        <h2 className="font-display text-2xl">How to check your own writing</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed">
          {guide.checkSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl">Where people use this</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {guide.useCases.map((useCase) => (
            <div key={useCase.h3} className="border-t border-rule pt-3">
              <h3 className="font-display text-lg">{useCase.h3}</h3>
              <p className="mt-2 text-sm leading-relaxed">{useCase.body}</p>
            </div>
          ))}
        </div>
      </section>
      <p className="mt-8">
        <a className="btn" href={withUtm(`/#q-${guide.questionId}`, "cta")}>
          Try this shape in the test
        </a>
      </p>
      <section className="mt-12">
        <h2 className="font-display text-2xl">Put this shape to work</h2>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {guide.related.map((item) => (
            <li key={item.href}>
              <a className="block py-3" href={withUtm(item.href, "related-guide")}>
                <span className="font-display text-lg">{item.label}</span>
                {item.note ? <span className="mt-1 block text-sm text-muted">{item.note}</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <h2 className="mt-12 font-display text-2xl">Questions</h2>
      <dl className="mt-4 space-y-6">
        {guide.faqs.map((faq) => (
          <div key={faq.q}>
            <dt className="font-display text-xl">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
      <AuthorLine lang="en" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          url: `${SITE.url}/guides/${guide.slug}`,
          inLanguage: "en",
          dateModified: CONTENT_UPDATED,
          author: { "@type": "Organization", name: "Handwriting Personality Test editorial team", url: `${SITE.url}/methodology` },
          publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
          url: `${SITE.url}/guides/${guide.slug}`,
        }}
      />
    </>
  );
}

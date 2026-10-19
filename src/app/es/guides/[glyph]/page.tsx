import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import { Crumbs, JsonLd } from "@/components/Meta";
import { guideBySlug, guides } from "@/content/es.mjs";
import { SITE, pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((guide) => ({ glyph: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ glyph: string }> }): Promise<Metadata> {
  const { glyph } = await params;
  const guide = guideBySlug[glyph];
  if (!guide) return {};
  return pageMeta({
    title: guide.title,
    description: guide.description,
    path: `/es/guides/${guide.slug}`,
    langs: {
      en: `${SITE.url}/guides/${guide.slug}`,
      es: `${SITE.url}/es/guides/${guide.slug}`,
    },
  });
}

export default async function EsGuidePage({ params }: { params: Promise<{ glyph: string }> }) {
  const { glyph } = await params;
  const guide = guideBySlug[glyph];
  if (!guide) notFound();
  return (
    <div lang="es">
      <Crumbs items={[{ href: "/es", label: "Test" }, { label: guide.title }]} />
      <h1 className="font-display text-5xl leading-[0.95]">{guide.title}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{guide.description}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {guide.figures.map((figure) => (
          <li key={figure.file} className="border border-rule bg-card p-3">
            <Glyph file={figure.file} alt={figure.caption} />
            <span className="mt-2 block text-sm leading-snug">{figure.caption}</span>
          </li>
        ))}
      </ul>
      <h2 className="mt-12 font-display text-2xl">De dónde sale</h2>
      {guide.origin.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <h2 className="mt-10 font-display text-2xl">Qué no muestra</h2>
      {guide.limits.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <p className="mt-8">
        <a className="bg-ink px-4 py-2 text-sm text-paper" href={`/es#q-${guide.questionId}`}>
          Probar esta forma en el test
        </a>
      </p>
      <h2 className="mt-12 font-display text-2xl">Preguntas</h2>
      <dl className="mt-4 space-y-6">
        {guide.faqs.map((faq) => (
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
          mainEntity: guide.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
          url: `${SITE.url}/es/guides/${guide.slug}`,
        }}
      />
    </div>
  );
}

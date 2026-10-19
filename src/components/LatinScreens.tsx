import { Glyph } from "@/components/Glyph";
import { LatinQuiz } from "@/components/LatinQuiz";
import { Crumbs, JsonLd } from "@/components/Meta";
import type { LatinPack } from "@/content/packs";
import { SITE } from "@/lib/site";
import type { QuizQuestion } from "@/content";

type Guide = LatinPack["guides"][number];

export function LatinHome({ pack }: { pack: LatinPack }) {
  const { copy } = pack;
  const questions = pack.localizedQuestions() as QuizQuestion[];
  return (
    <div lang={copy.code}>
      <p className="text-sm uppercase tracking-[0.16em] text-seal">{copy.kicker}</p>
      <h1 className="mt-2 max-w-xl font-display text-5xl leading-[0.95] tracking-tight">{copy.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{copy.lede}</p>
      <div className="mt-8">
        <LatinQuiz code={copy.code} bank={questions} copy={copy.quiz} />
      </div>
      <section className="mt-16">
        <h2 className="font-display text-3xl">{copy.namesTitle}</h2>
        <p className="mt-3 max-w-xl leading-relaxed">
          {copy.namesBefore}{" "}
          <a className="underline decoration-rule underline-offset-4" href={`/${copy.code}/science`}>
            {copy.scienceLink}
          </a>{" "}
          {copy.namesAfter}
        </p>
        <ul className="mt-6 divide-y divide-rule border-y border-rule">
          {Object.entries(pack.profiles).map(([slug, profile]) => (
            <li key={slug} className="flex items-baseline justify-between gap-4 py-3">
              <span className="font-display text-xl">{profile.name}</span>
              <span className="text-right text-sm text-muted">{profile.sentence}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="font-display text-3xl">{copy.shapesTitle}</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {pack.guides.map((guide: Guide) => (
            <li key={guide.slug}>
              <a href={`/${copy.code}/guides/${guide.slug}`} className="block border border-rule bg-card px-4 py-3">
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
          name: copy.h1,
          url: `${SITE.url}/${copy.code}`,
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Web",
          inLanguage: copy.code,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: copy.appDescription,
        }}
      />
    </div>
  );
}

export function LatinScience({ pack }: { pack: LatinPack }) {
  const { copy } = pack;
  return (
    <div lang={copy.code}>
      <Crumbs items={[{ href: `/${copy.code}`, label: copy.science.crumb }, { label: copy.science.h1 }]} />
      <h1 className="font-display text-5xl leading-[0.95]">{copy.science.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{copy.science.lede}</p>
      <h2 className="mt-10 font-display text-2xl">{copy.science.visibleTitle}</h2>
      <p className="mt-4 leading-relaxed">{copy.science.visible}</p>
      <h2 className="mt-10 font-display text-2xl">{copy.science.invisibleTitle}</h2>
      <p className="mt-4 leading-relaxed">{copy.science.invisible}</p>
      <p className="mt-4 leading-relaxed">{copy.science.study}</p>
      <h2 className="mt-10 font-display text-2xl">{copy.science.questions}</h2>
      <dl className="mt-4 space-y-6">
        {pack.scienceFaqs.map((faq) => (
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
          url: `${SITE.url}/${copy.code}/science`,
          mainEntity: pack.scienceFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </div>
  );
}

export function LatinGuide({ pack, guide }: { pack: LatinPack; guide: Guide }) {
  const { copy } = pack;
  return (
    <div lang={copy.code}>
      <Crumbs items={[{ href: `/${copy.code}`, label: copy.science.crumb }, { label: guide.title }]} />
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
      <h2 className="mt-12 font-display text-2xl">{copy.guide.from}</h2>
      {guide.origin.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <h2 className="mt-10 font-display text-2xl">{copy.guide.limits}</h2>
      {guide.limits.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <p className="mt-8">
        <a className="bg-ink px-4 py-2 text-sm text-paper" href={`/${copy.code}#q-${guide.questionId}`}>
          {copy.guide.cta}
        </a>
      </p>
      <h2 className="mt-12 font-display text-2xl">{copy.guide.questions}</h2>
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
          url: `${SITE.url}/${copy.code}/guides/${guide.slug}`,
        }}
      />
    </div>
  );
}

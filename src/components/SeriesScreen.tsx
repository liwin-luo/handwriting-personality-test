import { Crumbs, JsonLd } from "@/components/Meta";
import { SITE } from "@/lib/site";

const linkClass = "underline decoration-rule underline-offset-4";

type Block = {
  title: string;
  description: string;
  homeHref: string;
  crumb: string;
  crumbHere: string;
  h1: string;
  lede: string;
  sections: { h2: string; paragraphs: string[] }[];
  faqsTitle: string;
  faqs: { q: string; a: string }[];
  more: { href: string; label: string }[];
};

export function SeriesScreen({ copy, path, lang }: { copy: Block; path: string; lang: string }) {
  return (
    <div lang={lang}>
      <Crumbs items={[{ href: copy.homeHref, label: copy.crumb }, { label: copy.crumbHere }]} />
      <h1 className="font-display text-5xl leading-[0.95]">{copy.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{copy.lede}</p>
      {copy.sections.map((section) => (
        <section key={section.h2}>
          <h2 className="mt-10 font-display text-2xl">{section.h2}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      {copy.more.length ? (
        <ul className="mt-8 space-y-2">
          {copy.more.map((item) => (
            <li key={item.href}>
              <a className={linkClass} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <h2 className="mt-12 font-display text-2xl">{copy.faqsTitle}</h2>
      <dl className="mt-4 space-y-6">
        {copy.faqs.map((faq) => (
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
          url: `${SITE.url}${path}`,
          mainEntity: copy.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </div>
  );
}

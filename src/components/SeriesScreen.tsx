import { Crumbs, JsonLd } from "@/components/Meta";
import { AuthorLine } from "@/components/seo/PageParts";
import { SITE } from "@/lib/site";
import { withUtm } from "@/lib/utm.mjs";

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
  const editorialLang = lang === "zh" ? "zh" : "en";
  return (
    <div lang={lang}>
      <Crumbs items={[{ href: copy.homeHref, label: copy.crumb }, { label: copy.crumbHere }]} />
      <h1 className="page-h1">{copy.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{copy.lede}</p>
      {copy.sections.map((section) => (
        <section key={section.h2}>
          <h2 className="mt-10 page-h2">{section.h2}</h2>
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
              <a className="text-link" href={withUtm(item.href, "more")}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <h2 className="mt-12 page-h2">{copy.faqsTitle}</h2>
      <dl className="mt-4 space-y-6">
        {copy.faqs.map((faq) => (
          <div key={faq.q}>
            <dt className="font-display text-xl">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
      <AuthorLine lang={editorialLang} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: lang === "zh" ? "zh" : "en",
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

import { Crumbs, JsonLd } from "@/components/Meta";
import { traitsCopyFor, type TraitCopy, type TraitLink } from "@/content/traits";
import { SITE } from "@/lib/site";
import { withUtm } from "@/lib/utm.mjs";

function guidesHref(copy: TraitCopy) {
  return copy.homeHref === "/" ? "/guides" : `${copy.homeHref}/guides`;
}

export function TraitsBlurb({ code }: { code: string }) {
  const copy = traitsCopyFor(code);
  if (!copy) return null;
  return (
    <p className="mt-3 max-w-xl leading-relaxed">
      <a className="text-link" href={guidesHref(copy)}>
        {copy.homeLink}
      </a>
      {copy.homeAfter}
    </p>
  );
}

export function TraitsScienceLine({ code }: { code: string }) {
  const copy = traitsCopyFor(code);
  if (!copy) return null;
  return (
    <p className="mt-4 leading-relaxed">
      <a className="text-link" href={guidesHref(copy)}>
        {copy.homeLink}
      </a>
      {copy.scienceTail}
    </p>
  );
}

export function TraitsScreen({
  copy,
  more,
  faqSchema = true,
}: {
  copy: TraitCopy;
  more: TraitLink[];
  faqSchema?: boolean;
}) {
  const path = guidesHref(copy);
  const lang = copy.homeHref === "/" ? "en" : copy.homeHref.slice(1);
  return (
    <div lang={lang}>
      <Crumbs items={[{ href: copy.homeHref, label: copy.crumb }, { label: copy.crumbHere }]} />
      <h1 className="page-h1">{copy.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{copy.lede}</p>
      {copy.sections.map((section) => (
        <section key={section.id} className="mt-10">
          <h2 id={section.id} className="page-h2">
            {section.h2}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
          {section.links.length > 0 ? (
            <ul role="list" className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              {section.links.map((item, i) => (
                <li key={item.href} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true" className="text-muted">•</span> : null}
                  <a className="text-link" href={withUtm(item.href, "section")}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
      <section className="mt-10">
        <h2 className="page-h2">{copy.moreTitle}</h2>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {more.map((item) => (
            <li key={item.href}>
              <a className="block py-3" href={withUtm(item.href, "more")}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="page-h2">{copy.faqsTitle}</h2>
        <dl className="mt-4 space-y-6">
          {copy.faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="font-display text-xl">{faq.q}</dt>
              <dd className="mt-2 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
      {faqSchema ? (
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
      ) : null}
    </div>
  );
}

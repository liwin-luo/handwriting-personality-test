import { Crumbs, JsonLd } from "@/components/Meta";
import { EDITORIAL } from "@/content/editorial";
import type { ArticleContent, BlogPost, HubContent, LinkItem, Section, ToolSeoContent } from "@/content/seo/types";
import { SITE } from "@/lib/site";
import { withUtm } from "@/lib/utm.mjs";

const UI = {
  en: {
    tools: "Tools",
    guides: "Guides",
    published: "Published",
    updated: "Updated",
    keepReading: "Keep reading",
    lastUpdated: "Last updated",
    openSample: "Open this sample result",
  },
  zh: {
    tools: "工具",
    guides: "写法",
    published: "发布于",
    updated: "更新于",
    keepReading: "接着读",
    lastUpdated: "最后更新",
    openSample: "打开这个示例结果",
  },
} as const;

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function AuthorLine({ lang, updated }: { lang: "en" | "zh"; updated?: string }) {
  const editorial = EDITORIAL[lang];
  return (
    <p className="mt-12 border-t border-rule pt-4 text-sm text-muted">
      <span>{editorial.name}</span>
      <span aria-hidden="true"> · </span>
      <a className="text-link" href={editorial.href}>
        {editorial.role}
      </a>
      <span aria-hidden="true"> · </span>
      <span>{updated ?? editorial.updatedLabel}</span>
    </p>
  );
}

export function Prose({ section }: { section: Section }) {
  const id = section.id ?? slugify(section.h2);
  return (
    <section className="mt-14 border-t border-rule pt-8">
      <h2 id={id} className="page-h2">
        {section.h2}
      </h2>
      {section.paragraphs?.map((paragraph, index) => (
        <p key={paragraph} className={index === 0 ? "mt-4 text-lg leading-relaxed" : "mt-4 leading-relaxed"}>
          {paragraph}
        </p>
      ))}
      {section.steps?.length ? (
        <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed">
          {section.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
      {section.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.sub?.map((sub) => (
        <div key={sub.h3} className="mt-6">
          <h3 className="font-display text-xl">{sub.h3}</h3>
          {sub.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-relaxed">
              {paragraph}
            </p>
          ))}
          {sub.bullets?.length ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              {sub.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </section>
  );
}

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <dl className="mt-4 space-y-6">
      {items.map((faq) => (
        <div key={faq.q}>
          <dt className="font-display text-xl">{faq.q}</dt>
          <dd className="mt-2 leading-relaxed">{faq.a}</dd>
        </div>
      ))}
    </dl>
  );
}

function LinkList({ items, showNotes = false, position = "related" }: { items: LinkItem[]; showNotes?: boolean; position?: string }) {
  return (
    <ul className="mt-4 divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <li key={item.href}>
          <a className="block py-3" href={withUtm(item.href, position)}>
            <span className="font-display text-lg">{item.label}</span>
            {showNotes && item.note ? <span className="mt-1 block text-sm leading-snug text-muted">{item.note}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Cta({ label, href, note }: { label: string; href: string; note: string }) {
  return (
    <section className="mt-12 border-t border-ink pt-6">
      <a className="inline-block bg-ink px-5 py-2.5 text-sm text-paper" href={withUtm(href, "cta")}>
        {label}
      </a>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{note}</p>
    </section>
  );
}

function faqSchema(items: { q: string; a: string }[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function ToolPageView({
  content,
  children,
  extra,
  lang = "en",
  breadcrumbs,
}: {
  content: ToolSeoContent;
  children: React.ReactNode;
  extra?: React.ReactNode;
  lang?: "en" | "zh";
  breadcrumbs?: { href?: string; label: string }[];
}) {
  const url = `${SITE.url}${content.path}`;
  const ui = UI[lang];
  return (
    <div lang={lang}>
      {breadcrumbs?.length ? <Crumbs items={breadcrumbs} /> : null}
      <p className={`text-sm text-seal ${lang === "zh" ? "" : "uppercase tracking-[0.16em]"}`}>{content.kicker}</p>
      <h1 className="mt-2 max-w-2xl page-h1">{content.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{content.lede}</p>
      <div className="mt-8">{children}</div>

      <section className="mt-12 border-y border-rule py-6">
        <h2 className="page-h2">{content.outputsTitle}</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {content.outputs.map((output) => (
            <li key={output} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-seal" />
              <span>{output}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="page-h2">{content.howToTitle}</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed">
          {content.howToSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      {content.sections.map((section) => (
        <Prose key={section.h2} section={section} />
      ))}

      {extra}

      <section className="mt-12 border border-rule bg-card p-5">
        <h2 className="page-h2">{content.sampleTitle}</h2>
        <p className="mt-3 leading-relaxed">{content.sampleIntro}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
          {content.sampleBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {content.sampleResultHref ? (
          <p className="mt-4">
            <a className="text-link" href={withUtm(content.sampleResultHref, "sample")}>
              {content.sampleResultLabel ?? ui.openSample}
            </a>
          </p>
        ) : null}
      </section>

      <section className="mt-12">
        <h2 className="page-h2">{content.useCasesTitle}</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {content.useCases.map((useCase) => (
            <div key={useCase.h3} className="border-t border-rule pt-3">
              <h3 className="font-display text-lg">{useCase.h3}</h3>
              <p className="mt-2 text-sm leading-relaxed">{useCase.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="page-h2">{content.faqsTitle}</h2>
        <FaqList items={content.faqs} />
      </section>

      <section className="mt-12">
        <h2 className="page-h2">{content.relatedTitle}</h2>
        <div className="mt-4 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm uppercase tracking-[0.14em] text-muted">{ui.tools}</h3>
            <LinkList items={content.relatedTools} showNotes position="related-tool" />
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.14em] text-muted">{ui.guides}</h3>
            <LinkList items={content.relatedGuides} position="related-guide" />
          </div>
        </div>
      </section>

      <Cta label={content.ctaLabel} href={content.ctaHref} note={content.ctaNote} />
      <AuthorLine lang={lang} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: content.schemaName,
          url,
          inLanguage: lang === "zh" ? "zh" : "en",
          applicationCategory: content.applicationCategory,
          operatingSystem: "Web",
          browserRequirements: "Requires JavaScript.",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: content.schemaDescription,
          featureList: content.featureList,
          author: { "@type": "Organization", name: EDITORIAL[lang].name, url: `${SITE.url}${EDITORIAL[lang].href}` },
          dateModified: "2026-10-21",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: content.howToName ?? content.howToTitle,
          url,
          inLanguage: lang === "zh" ? "zh" : "en",
          step: content.howToSteps.map((text, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            text,
          })),
        }}
      />
      <JsonLd data={faqSchema(content.faqs, url)} />
    </div>
  );
}

export function HubPageView({
  content,
  lang = "en",
  breadcrumbs,
  extra,
}: {
  content: HubContent;
  lang?: "en" | "zh";
  breadcrumbs: { href?: string; label: string }[];
  extra?: React.ReactNode;
}) {
  const url = `${SITE.url}${content.path}`;
  const tools = content.categories.flatMap((category) => category.tools);
  return (
    <div lang={lang}>
      <Crumbs items={breadcrumbs} />
      <p className={`text-sm text-seal ${lang === "zh" ? "" : "uppercase tracking-[0.16em]"}`}>{content.kicker}</p>
      <h1 className="mt-2 max-w-2xl page-h1">{content.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{content.lede}</p>
      <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
        {content.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {extra}

      <section className="mt-12">
        <h2 className="page-h2">{content.categoriesTitle}</h2>
        {content.categories.map((category) => (
          <div key={category.h2} className="mt-8">
            <h3 className="font-display text-xl">{category.h2}</h3>
            <p className="mt-2 max-w-xl leading-relaxed">{category.intro}</p>
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {category.tools.map((tool) => (
                <li key={tool.href}>
                  <a className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4" href={withUtm(tool.href, "hub-tool")}>
                    <span>
                      <span className="font-display text-xl">{tool.label}</span>
                      <span className="mt-1 block text-sm leading-snug text-muted">{tool.note}</span>
                    </span>
                    <span className="text-sm text-seal">{tool.action}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="page-h2">{content.chooseTitle}</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed">
          {content.chooseSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12 border-y border-rule py-6">
        <h2 className="page-h2">{content.trustTitle}</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {content.trust.map((item) => (
            <div key={item.label}>
              <dt className="text-sm uppercase tracking-[0.12em] text-muted">{item.label}</dt>
              <dd className="mt-1 leading-relaxed">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="page-h2">{content.faqsTitle}</h2>
        <FaqList items={content.faqs} />
      </section>

      <Cta label={content.ctaLabel} href={content.ctaHref} note={content.ctaNote} />
      <AuthorLine lang={lang} updated={content.updatedLabel} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: content.h1,
          url,
          inLanguage: lang === "zh" ? "zh" : "en",
          description: content.meta,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: tools.map((tool, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tool.label,
              url: `${SITE.url}${tool.href}`,
            })),
          },
        }}
      />
      <JsonLd data={faqSchema(content.faqs, url)} />
    </div>
  );
}

export function ArticlePageView({
  content,
  lang = "en",
  schemaType = "BlogPosting",
  breadcrumbs,
}: {
  content: BlogPost | ArticleContent;
  lang?: "en" | "zh";
  schemaType?: "BlogPosting" | "Article";
  breadcrumbs: { href?: string; label: string }[];
}) {
  const path = "path" in content ? content.path : `/blog/${content.slug}`;
  const url = `${SITE.url}${path}`;
  const kicker = content.kicker;
  const author = EDITORIAL[lang];
  const ui = UI[lang];
  return (
    <div lang={lang}>
      <Crumbs items={breadcrumbs} />
      <p className={`text-sm text-seal ${lang === "zh" ? "" : "uppercase tracking-[0.16em]"}`}>{kicker}</p>
      <h1 className="mt-2 max-w-2xl page-h1">{content.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{content.meta}</p>
      <p className="mt-4 text-sm text-muted">
        <span>{author.name}</span>
        <span aria-hidden="true"> · </span>
        <span>
          {ui.published} {content.published}
        </span>
        <span aria-hidden="true"> · </span>
        <span>
          {ui.updated} {content.updated}
        </span>
        {"readingTime" in content ? (
          <>
            <span aria-hidden="true"> · </span>
            <span>{content.readingTime}</span>
          </>
        ) : null}
      </p>
      <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed">
        {content.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {content.sections.map((section) => (
        <Prose key={section.h2} section={section} />
      ))}

      <section className="mt-12">
        <h2 className="page-h2">{content.sourcesTitle}</h2>
        <ul className="mt-4 space-y-2">
          {content.sources.map((source) => (
            <li key={source.href}>
              <a className="text-link" href={source.href} rel="nofollow noopener" target="_blank">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="page-h2">{content.faqsTitle}</h2>
        <FaqList items={content.faqs} />
      </section>

      <section className="mt-12">
        <h2 className="page-h2">{ui.keepReading}</h2>
        <div className="mt-4 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm uppercase tracking-[0.14em] text-muted">{ui.tools}</h3>
            <LinkList items={content.relatedTools} showNotes position="related-tool" />
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.14em] text-muted">{ui.guides}</h3>
            <LinkList items={"relatedPosts" in content ? content.relatedPosts : content.relatedGuides} position="related-guide" />
          </div>
        </div>
      </section>

      <Cta label={content.ctaLabel} href={content.ctaHref} note={content.ctaNote} />
      <AuthorLine lang={lang} updated={`${ui.lastUpdated} ${content.updated}`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": schemaType,
          headline: content.h1,
          description: content.meta,
          url,
          mainEntityOfPage: url,
          inLanguage: lang === "zh" ? "zh" : "en",
          datePublished: content.published,
          dateModified: content.updated,
          author: { "@type": "Organization", name: author.name, url: `${SITE.url}${author.href}` },
          publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        }}
      />
      <JsonLd data={faqSchema(content.faqs, url)} />
    </div>
  );
}

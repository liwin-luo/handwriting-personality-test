import { Chart } from "@/components/Chart";
import { JsonLd } from "@/components/Meta";
import { SignatureTool } from "@/components/SignatureTool";
import { SlantTool } from "@/components/SlantTool";
import type { ToolLocale } from "@/content/tools";
import type { ChartItem } from "@/lib/chart-items";
import { SITE } from "@/lib/site";

export function ChartScreen({ copy, items, lang }: { copy: ToolLocale["chart"]; items: ChartItem[]; lang: string }) {
  return (
    <div lang={lang}>
      <h1 className="font-display text-5xl leading-none">{copy.h1}</h1>
      <p className="mt-4 max-w-xl leading-relaxed">{copy.lede}</p>
      <div className="mt-8">
        <Chart items={items} copy={copy} />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.alt,
            url: `${SITE.url}${item.testHref}`,
          })),
        }}
      />
    </div>
  );
}

export function SlantScreen({ copy, lang, path }: { copy: ToolLocale["slant"]; lang: string; path: string }) {
  return (
    <div lang={lang}>
      <p className="text-sm uppercase tracking-[0.16em] text-seal">{copy.kicker}</p>
      <h1 className="mt-2 font-display text-5xl leading-[0.95]">{copy.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        {copy.introBefore}
        <a className="underline decoration-rule underline-offset-4" href={copy.scienceHref}>
          {copy.scienceLabel}
        </a>
        {copy.introAfter}
      </p>
      <SlantTool copy={copy} />
      <h2 className="mt-12 font-display text-2xl">{copy.stepsTitle}</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        {copy.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="mt-8">
        <a className="bg-ink px-4 py-2 text-sm text-paper" href={copy.ctaHref}>
          {copy.cta}
        </a>
      </p>
      <h2 className="mt-12 font-display text-2xl">{copy.questionsTitle}</h2>
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
          "@type": "HowTo",
          name: copy.howtoName,
          url: `${SITE.url}${path}`,
          step: copy.steps.map((text, index) => ({
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

export function SignatureScreen({ copy, lang, path }: { copy: ToolLocale["signature"]; lang: string; path: string }) {
  return (
    <div lang={lang}>
      <p className="text-sm uppercase tracking-[0.16em] text-seal">{copy.kicker}</p>
      <h1 className="mt-2 font-display text-5xl leading-[0.95]">{copy.h1}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        {copy.introBefore}
        <a className="underline decoration-rule underline-offset-4" href={copy.scienceHref}>
          {copy.scienceLabel}
        </a>
        {copy.introAfter}
      </p>
      <SignatureTool copy={copy} />
      <h2 className="mt-12 font-display text-2xl">{copy.stepsTitle}</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        {copy.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <h2 className="mt-12 font-display text-2xl">{copy.questionsTitle}</h2>
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
          "@type": "HowTo",
          name: copy.howtoName,
          url: `${SITE.url}${path}`,
          step: copy.steps.map((text, index) => ({
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

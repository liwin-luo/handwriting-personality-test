import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import { Crumbs, JsonLd } from "@/components/Meta";
import { AuthorLine } from "@/components/seo/PageParts";
import { guides } from "@/content/zh-guides.mjs";
import { guideLangs } from "@/lib/langs";
import { SITE, pageMeta } from "@/lib/site";
import { withUtm } from "@/lib/utm.mjs";

type ZhGuide = {
  slug: string;
  title: string;
  description: string;
  questionId: string;
  figures: { file: string; caption: string }[];
  origin: string[];
  limits: string[];
  checkSteps: string[];
  useCases: { h3: string; body: string }[];
  related: { href: string; label: string; note: string }[];
  faqs: { q: string; a: string }[];
};

const list = guides as ZhGuide[];

export const dynamicParams = false;

export function generateStaticParams() {
  return list.map((guide) => ({ glyph: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ glyph: string }>;
}): Promise<Metadata> {
  const { glyph } = await params;
  const guide = list.find((item) => item.slug === glyph);
  if (!guide) return {};
  return pageMeta({
    title: guide.title,
    description: guide.description,
    path: `/zh/guides/${guide.slug}`,
    ...(guide.slug === "gap" ? { langs: guideLangs("gap") } : { selfLang: "zh" }),
  });
}

export default async function ZhGuidePage({ params }: { params: Promise<{ glyph: string }> }) {
  const { glyph } = await params;
  const guide = list.find((item) => item.slug === glyph);
  if (!guide) notFound();
  return (
    <div lang="zh">
      <Crumbs
        items={[
          { href: "/zh", label: "首页" },
          { href: "/zh/guides", label: "写法指南" },
          { label: guide.title },
        ]}
      />
      <h1 className="font-display text-5xl leading-[0.95]">{guide.title}</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">{guide.description}</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {guide.figures.map((figure) => (
          <li key={figure.file} className="border border-rule bg-card p-3">
            <a href={withUtm(`/zh/tools/sample-chart#${guide.questionId}-${figure.file.replace(".svg", "")}`, "figure")}>
              <Glyph file={figure.file} alt={figure.caption} />
              <span className="mt-2 block text-sm leading-snug">{figure.caption}</span>
            </a>
          </li>
        ))}
      </ul>
      <h2 className="mt-12 font-display text-2xl">这一笔从哪来</h2>
      {guide.origin.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <h2 className="mt-10 font-display text-2xl">这一笔看不出什么</h2>
      {guide.limits.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <section className="mt-10">
        <h2 className="font-display text-2xl">怎么检查自己的字</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed">
          {guide.checkSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl">什么时候这件事有用</h2>
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
        <a className="btn" href={withUtm(`/zh#q-${guide.questionId}`, "cta")}>
          去测验里对一下这一笔
        </a>
      </p>
      <section className="mt-12">
        <h2 className="font-display text-2xl">接着看</h2>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {guide.related.map((item) => (
            <li key={item.href}>
              <a className="block py-3" href={withUtm(item.href, "related-guide")}>
                <span className="font-display text-lg">{item.label}</span>
                {item.note ? <span className="mt-1 block text-sm leading-snug text-muted">{item.note}</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <h2 className="mt-12 font-display text-2xl">问题</h2>
      <dl className="mt-4 space-y-6">
        {guide.faqs.map((item) => (
          <div key={item.q}>
            <dt className="font-display text-xl">{item.q}</dt>
            <dd className="mt-2 leading-relaxed">{item.a}</dd>
          </div>
        ))}
      </dl>
      <AuthorLine lang="zh" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          url: `${SITE.url}/zh/guides/${guide.slug}`,
          inLanguage: "zh",
          dateModified: "2026-10-21",
          author: { "@type": "Organization", name: "笔迹测验编辑组", url: `${SITE.url}/zh/science` },
          publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "zh",
          mainEntity: guide.faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
          url: `${SITE.url}/zh/guides/${guide.slug}`,
        }}
      />
    </div>
  );
}

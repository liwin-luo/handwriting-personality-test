import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import { Crumbs, JsonLd } from "@/components/Meta";
import { guides } from "@/content/zh-guides.mjs";
import { SITE, pageMeta } from "@/lib/site";

type ZhGuide = {
  slug: string;
  title: string;
  description: string;
  questionId: string;
  figures: { file: string; caption: string }[];
  origin: string[];
  limits: string[];
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
    selfLang: "zh",
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
          { href: "/zh", label: "笔迹测验" },
          { label: guide.title },
        ]}
      />
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
      <p className="mt-8">
        <a className="bg-ink px-4 py-2 text-sm text-paper" href={`/zh#q-${guide.questionId}`}>
          到测验里对一下这一笔
        </a>
      </p>
      <h2 className="mt-12 font-display text-2xl">问题</h2>
      <dl className="mt-4 space-y-6">
        {guide.faqs.map((item) => (
          <div key={item.q}>
            <dt className="font-display text-xl">{item.q}</dt>
            <dd className="mt-2 leading-relaxed">{item.a}</dd>
          </div>
        ))}
      </dl>
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

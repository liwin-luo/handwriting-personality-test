import { JsonLd } from "@/components/Meta";
import { AuthorLine } from "@/components/seo/PageParts";
import { TraitsScreen } from "@/components/TraitsScreen";
import { traitsCopyFor } from "@/content/traits";
import { guides as zhGuides } from "@/content/zh-guides.mjs";
import { SITE, pageMeta } from "@/lib/site";
import { traitsLangs } from "@/lib/langs";

const copy = traitsCopyFor("zh")!;

export const metadata = pageMeta({
  title: copy.title,
  description: copy.description,
  path: "/zh/guides",
  langs: traitsLangs(),
});

export default function ZhGuidesIndex() {
  return (
    <>
      <TraitsScreen
        copy={copy}
        more={zhGuides.map((guide: { slug: string; title: string }) => ({
          href: `/zh/guides/${guide.slug}`,
          label: guide.title,
        }))}
      />
      <section className="mt-12">
        <h2 className="font-display text-2xl">把写法放进工具里</h2>
        <p className="mt-3 max-w-xl leading-relaxed">
          指南解释写法从哪里来。测验把这组写法归成一个名称，测量工具则只给几何读数。三种用途不同，不要互相替代。
        </p>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          <li>
            <a className="block py-3" href="/zh">
              <span className="font-display text-lg">中文五题测验</span>
              <span className="mt-1 block text-sm text-muted">按大小、字距、行距、连笔和横画归类。</span>
            </a>
          </li>
          <li>
            <a className="block py-3" href="/zh/tools/slant">
              <span className="font-display text-lg">倾斜测量</span>
              <span className="mt-1 block text-sm text-muted">用本地照片量一个竖画的角度。</span>
            </a>
          </li>
          <li>
            <a className="block py-3" href="/zh/tools/signature">
              <span className="font-display text-lg">签名测量</span>
              <span className="mt-1 block text-sm text-muted">在画布上量宽度、高度、长度和转角。</span>
            </a>
          </li>
          <li>
            <a className="block py-3" href="/zh/science">
              <span className="font-display text-lg">笔迹分析准不准</span>
              <span className="mt-1 block text-sm text-muted">笔迹学的证据边界。</span>
            </a>
          </li>
        </ul>
      </section>
      <AuthorLine lang="zh" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: copy.h1,
          url: `${SITE.url}/zh/guides`,
          inLanguage: "zh",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: zhGuides.map((guide: { slug: string; title: string }, index: number) => ({
              "@type": "ListItem",
              position: index + 1,
              name: guide.title,
              url: `${SITE.url}/zh/guides/${guide.slug}`,
            })),
          },
        }}
      />
    </>
  );
}

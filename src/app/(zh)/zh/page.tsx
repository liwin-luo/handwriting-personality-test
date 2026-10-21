import { GuideLink } from "@/components/Glyph";
import { ZhQuiz } from "@/components/ZhQuiz";
import { ToolPageView } from "@/components/seo/PageParts";
import { profiles } from "@/content/zh.mjs";
import { guides as zhGuides } from "@/content/zh-guides.mjs";
import { zhHome } from "@/content/seo/zh";
import { homeLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: zhHome.title,
  description: zhHome.meta,
  path: "/zh",
  absolute: true,
  langs: homeLangs(),
});

export default function ZhHome() {
  return (
    <ToolPageView content={zhHome} lang="zh">
      <ZhQuiz />
      <section className="mt-12">
        <h2 className="font-display text-2xl">六个名称，一套归档</h2>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {profiles.map((profile: { slug: string; name: string; sentence: string }) => (
            <li key={profile.slug} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <span className="font-display text-xl">{profile.name}</span>
              <span className="text-sm text-muted sm:text-right">{profile.sentence}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl">一种写法，一页说明</h2>
        <p className="mt-3 max-w-xl leading-relaxed">
          每页说明这种写法从哪里来、常见于什么场景，以及它说明不了什么。先看你在结果里注意到的那一种。
        </p>
        <ul className="mt-4 border-t border-rule">
          {zhGuides.map((guide: { slug: string; title: string; figures: { file: string; caption: string }[] }) => (
            <li key={guide.slug}>
              <GuideLink
                href={`/zh/guides/${guide.slug}`}
                title={guide.title}
                file={guide.figures[0].file}
                alt={guide.figures[0].caption}
              />
            </li>
          ))}
        </ul>
      </section>
    </ToolPageView>
  );
}

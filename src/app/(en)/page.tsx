import { GuideLink } from "@/components/Glyph";
import { Quiz } from "@/components/Quiz";
import { ToolPageView } from "@/components/seo/PageParts";
import { profiles } from "@/content";
import { guides } from "@/content/guides";
import { homeTool } from "@/content/seo/en-home";
import { homeLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";
import { withUtm } from "@/lib/utm.mjs";

export const metadata = pageMeta({
  title: homeTool.title,
  description: homeTool.meta,
  path: "/",
  image: "/og/quiz.png",
  absolute: true,
  langs: homeLangs(),
});

export default function HomePage() {
  return (
    <ToolPageView content={homeTool} lang="en">
      <Quiz />
      <section className="mt-12">
        <h2 className="font-display text-2xl">Six labels, one filing system</h2>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {profiles.map((profile) => (
            <li key={profile.slug}>
              <a href={withUtm(`/results/${profile.slug}`, "results")} className="flex items-baseline justify-between gap-4 py-3">
                <span className="font-display text-xl">{profile.name}</span>
                <span className="text-right text-sm text-muted">{profile.sentence}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl">One shape, one page</h2>
        <p className="mt-3 max-w-xl leading-relaxed">
          Each guide explains where a form is taught, what it looks like, and what it cannot say about the writer.
          Start with the shape you noticed in your own result.
        </p>
        <ul className="mt-4 border-t border-rule">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <GuideLink
                href={`/guides/${guide.slug}`}
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

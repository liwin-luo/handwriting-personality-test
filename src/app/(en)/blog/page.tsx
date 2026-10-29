import { Crumbs, JsonLd } from "@/components/Meta";
import { AuthorLine } from "@/components/seo/PageParts";
import { blogPosts } from "@/content/seo/en-blog";
import { SITE, pageMeta } from "@/lib/site";
import { withUtm } from "@/lib/utm.mjs";

const faqs = [
  {
    q: "What do these articles cover?",
    a: "Seven articles, each written for a different question. What a handwriting personality test actually does, how to describe a page without personality claims, what the research on graphology shows, how to choose among free tools, how to measure slant without fooling yourself, why bubble letters are not handwriting, and what an AI handwriting tool can and cannot tell you.",
  },
  {
    q: "Do the articles list their sources?",
    a: "Yes. Every article ends with a list of sources and links to them, including the study discussed in the evidence review. Where a claim cannot be sourced, the article says so on the page instead of asserting it.",
  },
  {
    q: "Is the graphology article an argument against graphology?",
    a: "It is a review of the evidence. It sets out what has been tested, what the results were, and where the boundary sits between a visible mark and a claim about a person. The rest of the set stays inside that boundary.",
  },
  {
    q: "Do the articles recommend a paid product?",
    a: "No. The tools article compares free tools by what they measure and what they decline to claim. One article links to a free text converter and says what the characters are. Nothing on this site is affiliate-linked.",
  },
  {
    q: "How long are the articles?",
    a: "Most run between seven and nine minutes at a steady reading pace. The measurement articles are the shortest, because the geometry is short. The evidence review is the longest, because it has to cover the studies.",
  },
  {
    q: "Can I use these articles to judge somebody?",
    a: "No. They are about describing marks. A method for reading a page is not a method for reading a person, and the evidence review explains why the second step is the one that fails under checking.",
  },
];

const toolLinks = [
  {
    href: "/tools",
    label: "Handwriting tools hub",
    note: "All four tools in one place, with what each one does and does not claim.",
  },
  {
    href: "/tools/slant",
    label: "Slant measurement",
    note: "Align a stem against a vertical reference and read the angle in degrees.",
  },
  {
    href: "/tools/signature",
    label: "Signature measurement",
    note: "Draw a signature and read its width, height, path length, and turns.",
  },
  {
    href: "/tools/sample-chart",
    label: "Handwriting sample chart",
    note: "Every form used across the articles, side by side and printable.",
  },
];

export const metadata = pageMeta({
  title: "Handwriting Guides & Evidence",
  description:
    "Plain-language articles on handwriting personality tests, graphology, measurement, and how to describe a page without making unsupported claims.",
  path: "/blog",
  image: "/og/blog.png",
  langs: { en: `${SITE.url}/blog` },
});

export default function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => b.published.localeCompare(a.published));
  return (
    <div lang="en">
      <Crumbs items={[{ href: "/", label: "Home" }, { label: "Blog" }]} />
      <p className="text-sm uppercase tracking-[0.16em] text-seal">Articles</p>
      <h1 className="mt-2 max-w-2xl font-display text-5xl leading-[0.95] tracking-tight">
        Handwriting, without the personality verdict
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        What the tests do, what the research supports, and how to measure a page without turning an angle into a
        character reference.
      </p>

      <aside className="mt-8 max-w-xl rounded-2xl border-4 border-ink bg-card p-5 shadow-[6px_6px_0_var(--ink)]">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-seal">The test itself</p>
        <p className="mt-2 font-display text-2xl leading-tight">Eight answers name the shapes you picked.</p>
        <p className="mt-2 leading-relaxed">
          19 questions about digits, letters, spacing, and slant. No sample, no account, and the result shows its own
          arithmetic.
        </p>
        <a className="btn mt-4 inline-block" href={withUtm("/#test", "blog-hero")}>
          Take the 19-shape test
        </a>
      </aside>

      <p className="mt-8 max-w-xl leading-relaxed">
        These articles are written for people who want to understand handwriting rather than be flattered by it. Each
        one cites its sources and states the limits of the claim.
      </p>
      <p className="mt-4 max-w-xl leading-relaxed">
        The set covers seven different questions. One explains what a handwriting personality test actually does and
        where the idea came from. One gives a method for describing a page without turning an angle into a character
        reference. One reviews the evidence on graphology. One compares free tools and says what to check before you
        trust one. One shows how to measure slant without fooling yourself. One explains why cute bubble letters are
        characters you paste, not a sample of handwriting. One works through what an AI handwriting tool computes and
        where the inference breaks.
      </p>
      <p className="mt-4 max-w-xl leading-relaxed">
        Every article names its evidence. The measurement articles list the geometry they use, the tolerance they
        work to, and the way to check a result by hand. The evidence review cites the studies it discusses, including
        the 1989 meta-analysis on graphology in hiring, and links to the source rather than paraphrasing it.
      </p>
      <p className="mt-4 max-w-xl leading-relaxed">
        Every article also states its own limits. The explainer says what the test on this site does not do. The
        method article stops at description and says why it stops there. The review says what the research supports
        and what it does not. When an article has a boundary, it is written on the page rather than left for you to
        infer from the tone.
      </p>

      <ul className="mt-10 divide-y divide-rule border-y border-rule">
        {posts.map((post) => (
          <li key={post.slug}>
            <a className="block py-5" href={withUtm(`/blog/${post.slug}`, "post")}>
              <span className="text-sm text-muted">
                {post.kicker} · {post.readingTime}
              </span>
              <span className="mt-1 block font-display text-2xl leading-tight">{post.title}</span>
              <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted">{post.meta}</span>
            </a>
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h2 className="font-display text-2xl">How to read these articles</h2>
        <p className="mt-4 max-w-xl leading-relaxed">
          Start with the article that matches the question you arrived with. If you have seen a quiz that handed you a
          verdict, read what the tests do. If you want to describe your own writing, read the method article. If you
          want to know whether graphology works, read the evidence review.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          The measurement articles are geometry. The slant article works in degrees against a vertical reference, and
          the tools article works in width, height, path length, and turns. An angle in degrees is a fact about a
          page. It becomes a character reference the moment somebody attaches a story to it, and that is the step this
          site refuses to take.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          The graphology article is the boundary page of the set. It reviews the research and says where the line sits:
          visible marks on one side, claims about a person on the other. If an article elsewhere in the set seems to
          cross that line, that is worth reporting.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">The tools these articles refer to</h2>
        <p className="mt-3 max-w-xl leading-relaxed">
          The articles describe methods, and the tools on this site are where you can try them. All four run in the
          browser and keep your writing on your own device.
        </p>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {toolLinks.map((item) => (
            <li key={item.href}>
              <a className="block py-3" href={item.href}>
                <span className="font-display text-lg">{item.label}</span>
                <span className="mt-1 block text-sm text-muted">{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Questions</h2>
        <dl className="mt-4 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="font-display text-xl">{faq.q}</dt>
              <dd className="mt-2 max-w-xl leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-8">
        <a className="btn" href="/tools">
          Open the handwriting tools
        </a>
      </p>
      <AuthorLine lang="en" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Handwriting guides and evidence",
          url: `${SITE.url}/blog`,
          inLanguage: "en",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: post.title,
              url: `${SITE.url}/blog/${post.slug}`,
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${SITE.url}/blog`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </div>
  );
}

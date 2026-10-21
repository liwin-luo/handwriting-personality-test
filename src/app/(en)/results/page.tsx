import { Crumbs, JsonLd } from "@/components/Meta";
import { AuthorLine } from "@/components/seo/PageParts";
import { profiles } from "@/content";
import { SITE, pageMeta } from "@/lib/site";

const faqs = [
  {
    q: "What do the six labels mean?",
    a: "They are names for sets of shapes. The test adds your answers into four tallies and names the one that leads. Nothing about a person is read from the page.",
  },
  {
    q: "Is one label better than another?",
    a: "No. They are filing names, not ranks. None of the six is more artistic, more careful, or more desirable than the others, and the site does not order them.",
  },
  {
    q: "Can my label change from one day to the next?",
    a: "Yes. The result comes from the forms you write, and forms move with speed, pen, and whether you are copying. If the label changes, the shapes changed.",
  },
  {
    q: "Does a label say anything about my health, honesty, or intelligence?",
    a: "No. Nothing in the strokes supports that. The science page sets out what the research finds, including the study on graphology in hiring.",
  },
  {
    q: "Can I use a result link for hiring or screening?",
    a: "No. Handwriting analysis is not a validated selection method, and this test is not built for personnel decisions. Use job-relevant work samples and structured interviews instead.",
  },
  {
    q: "How do I get a result link?",
    a: "Answer eight of the twelve questions and the site gives you a link. It shows the label, the four totals, and the shapes you picked. Change an answer and the link changes.",
  },
];

const nextLinks = [
  { href: "/tools", label: "Handwriting tools", note: "Test, slant, signature, and chart." },
  { href: "/methodology", label: "How the test is built", note: "The questions, the weights, the rule." },
  { href: "/faq", label: "Questions about this test", note: "Short answers on accuracy and limits." },
  { href: "/about", label: "How this test is scored", note: "Twelve shapes, eight answers, four tallies." },
  { href: "/blog/graphology", label: "Graphology: what the evidence says", note: "The research review behind the boundary." },
  { href: "/science", label: "Is handwriting analysis accurate?", note: "What a stroke cannot prove." },
  { href: "/guides", label: "The twelve shape guides", note: "One page per shape, with limits." },
  { href: "/tools/sample-chart", label: "Handwriting sample chart", note: "Every form side by side, printable." },
];

export const metadata = pageMeta({
  title: "The six labels",
  description: "Six fictional names for the shapes in the handwriting personality test, plus the case where no shape wins.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <div lang="en">
      <Crumbs items={[{ href: "/", label: "Home" }, { label: "The six labels" }]} />
      <h1 className="font-display text-5xl leading-none">The six labels</h1>
      <p className="mt-4 max-w-xl leading-relaxed">
        These names file the shapes you picked. They are not personality types, and they do not describe how two people
        will get along.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-2xl">How a label is derived</h2>
        <p className="mt-4 max-w-xl leading-relaxed">
          The test asks twelve questions, one for each shape it files: the digits 4, 7, 0, and 1, the letters a, g, t,
          i, and y, the ampersand, word spacing, and the slant of a downstroke. Each question offers two or three
          forms, and you pick the one closest to your own writing.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          Every option carries points in four directions. Structure counts closed counters and clear midlines. Endings
          count strokes that stop as soon as the letter can be read. Page rhythm counts word gaps, the lean of a
          downstroke, and where a dot or a bar sits. Flourish counts the extra mark the plain version leaves out. The
          four totals are printed on your result page, so you can check the arithmetic.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          A direction has to lead the next one by two points to name a result. That is a small margin, and one or two
          answers can decide a label. The method is written out in full on the methodology page.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          Two cases have no single leader. When the two highest totals are flourish and page rhythm, the result is
          Daydream Doodler, the case where a loop and a wide gap share one page. When the top two are anything else,
          or nothing is ahead, the result is Instinctive Mixer. Both are ordinary outcomes, not failures.
        </p>
      </section>

      <ul className="mt-12 space-y-6">
        {profiles.map((profile) => (
          <li key={profile.slug} className="border-t border-rule pt-6">
            <h2 className="font-display text-3xl">
              <a href={`/results/${profile.slug}`}>{profile.name}</a>
            </h2>
            <p className="mt-2">{profile.sentence}</p>
            <p className="mt-2 text-muted">{profile.paragraphs[0]}</p>
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h2 className="font-display text-2xl">What a label is not</h2>
        <p className="mt-4 max-w-xl leading-relaxed">
          A label here is a name for a filing, not a personality type. Quiet Architect, Everyday Minimalist, Margin
          Storyteller, and Beautiful Rebel are the four single-direction results, and each points at a family of
          letterforms. They are not four kinds of person.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          A label is not a compatibility score. Nothing here predicts how two people will get along, and nothing scores
          a match between a writer and a job, a teacher, or a partner.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          A label is also not a hiring filter and not a diagnosis. Handwriting analysis has been tested for job
          decisions and has not held up. If you are weighing a job, a health question, or somebody's honesty, use
          evidence built for that question. The science page sets out the research.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">How to use a result link</h2>
        <p className="mt-4 max-w-xl leading-relaxed">
          A result link shows which shapes you picked, not a person. The link carries your twelve answers in the
          address, so anybody who opens it sees the same result you saw. It is a convenient thing to send when
          somebody asks which form of the 4 you write.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          Change one answer and the link changes with it, because the answers are part of the address. That makes a
          result easy to check: open it, read the four totals, and see whether the label matches the numbers. It also
          means a link can be edited by hand, so treat one you did not create as a set of claims.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          Nothing is uploaded. The test is multiple choice, so there is no sample, no account, and no email address. A
          result link is a URL, and reading a URL tells the site nothing about you beyond the address.
        </p>
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

      <section className="mt-12">
        <h2 className="font-display text-2xl">Where to go next</h2>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {nextLinks.map((item) => (
            <li key={item.href}>
              <a className="block py-3" href={item.href}>
                <span className="font-display text-lg">{item.label}</span>
                <span className="mt-1 block text-sm text-muted">{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <AuthorLine lang="en" updated="Last updated 21 October 2026" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${SITE.url}/results`,
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

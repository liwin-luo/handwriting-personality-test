import { JsonLd } from "@/components/Meta";
import { AuthorLine } from "@/components/seo/PageParts";
import { TraitsScreen } from "@/components/TraitsScreen";
import { guides } from "@/content/guides";
import { traitsCopyFor } from "@/content/traits";
import { traitsLangs } from "@/lib/langs";
import { SITE, pageMeta } from "@/lib/site";

const copy = traitsCopyFor("en")!;

const faqs = [
  {
    q: "What is a shape guide?",
    a: "A page for one shape. It shows the two or three forms of that shape, says where each form is taught, says what the shape cannot show you about a person, and ends with a short drill you can do on paper.",
  },
  {
    q: "How many guides are there?",
    a: "Twelve, one for each question in the test: the digits 4, 7, 0, and 1, the letters a, g, t, i, and y, the ampersand, word spacing, and the slant of a downstroke. Together they cover the vocabulary the quiz uses.",
  },
  {
    q: "Does a guide say what a shape means?",
    a: "It says what the shape is and where it came from. It does not say what the shape means about a person. Where graphology reads a meaning into a form, the guide points out that the reading is not supported well enough to use.",
  },
  {
    q: "Do I have to take the test to use a guide?",
    a: "No. Each guide stands on its own. Read the 4 guide, write a row of 4s, and you have learned something useful about your own writing without taking the test or reading a result.",
  },
  {
    q: "Which guide should I read first?",
    a: "Start with a shape you are unsure about. Most people are certain about the letters they write every day and unsure about the ampersand, the 7, or the 1. The 1 and the 7 are the two where the argument tends to start.",
  },
  {
    q: "Can the same person write two forms of one shape?",
    a: "Yes. A careful copy of a printed 4 is often closed, and a fast note is often open. The guides explain why speed and copying change the form, and why one page can hold both without a decision being made.",
  },
  {
    q: "How do the guides relate to the sample chart?",
    a: "The chart is a printable index of the forms, and the guides explain them. Use the chart when you want to compare shapes side by side, and use the guide when you want to understand where a form comes from and what it cannot tell you.",
  },
];

export const metadata = pageMeta({
  title: copy.title,
  description: copy.description,
  path: "/guides",
  langs: traitsLangs(),
});

export default function GuidesIndex() {
  return (
    <div lang="en">
      <TraitsScreen
        copy={copy}
        more={guides.map((guide) => ({ href: `/guides/${guide.slug}`, label: guide.title }))}
        faqSchema={false}
      />
      <section className="mt-12">
        <h2 className="font-display text-2xl">How the twelve guides work as a set</h2>
        <p className="mt-4 max-w-xl leading-relaxed">
          There is one guide for each shape the test asks about: the digits 4, 7, 0, and 1, the letters a, g, t, i, and
          y, the ampersand, word spacing, and the slant of a downstroke. Each one covers the same ground in the same
          order, so you can move between them and always know where to look.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          A guide opens with the two or three forms of its shape, with a figure of each so the difference is visible
          before it is described. It then says where each form is taught: which school script, which regional habit,
          and which classroom practice put it into most hands.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          Then comes the part that matters most. Every guide has a limits section that says what the shape cannot show
          you about a person, with the research behind that claim where there is research. The shape is a fact about
          the page, and the step from a fact about the page to a fact about a person is the step that does not survive
          checking.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          After the limits come four short steps for checking your own writing, a set of use cases such as filling a
          printed form or teaching a child, and the guide's own questions with links to the neighbouring shapes. Read
          together, the twelve cover the whole vocabulary of the test.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl">Using a guide for a practical purpose</h2>
        <p className="mt-4 max-w-xl leading-relaxed">
          To identify a form on a page, start with the figures, then the origin section, and only then the limits. The
          figures settle the question faster than a description does. The origin section tells you whether the form was
          taught to you or arrived from somewhere else, and the limits section tells you what you may not conclude
          from it.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          To check a form against a printed model, write the shape ten times at your normal pace with no model in
          front of you, then write it once while copying a printed example. The gap between the two rows shows a habit
          that shifts with speed rather than a fixed preference.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed">
          To teach, or to read an old letter, the use cases section carries the same advice in short form. Teaching is
          a case of naming the model out loud, because a child copies whatever is put in front of them. Reading an old
          letter is a case of remembering that digit shapes moved with printing conventions.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl">Put the guides to work</h2>
        <p className="mt-3 max-w-xl leading-relaxed">
          The guides explain where a form comes from. The test files a set of forms under a fictional label. The
          measurement tools report geometry. They are different jobs; do not use one as a substitute for another.
        </p>
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          <li>
            <a className="block py-3" href="/tools/sample-chart">
              <span className="font-display text-lg">Handwriting sample chart</span>
              <span className="mt-1 block text-sm text-muted">All 12 forms in one printable reference.</span>
            </a>
          </li>
          <li>
            <a className="block py-3" href="/">
              <span className="font-display text-lg">12-shape handwriting test</span>
              <span className="mt-1 block text-sm text-muted">Eight answers, four totals, one fictional label.</span>
            </a>
          </li>
          <li>
            <a className="block py-3" href="/tools/slant">
              <span className="font-display text-lg">Slant measurement</span>
              <span className="mt-1 block text-sm text-muted">Measure one downstroke from a local photo.</span>
            </a>
          </li>
          <li>
            <a className="block py-3" href="/blog">
              <span className="font-display text-lg">Handwriting evidence articles</span>
              <span className="mt-1 block text-sm text-muted">What graphology claims and what the research supports.</span>
            </a>
          </li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="font-display text-2xl">Questions about the guides</h2>
        <dl className="mt-4 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="font-display text-xl">{faq.q}</dt>
              <dd className="mt-2 max-w-xl leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
      <AuthorLine lang="en" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: copy.h1,
          url: `${SITE.url}/guides`,
          inLanguage: "en",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: guides.map((guide, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: guide.title,
              url: `${SITE.url}/guides/${guide.slug}`,
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${SITE.url}/guides`,
          mainEntity: [...copy.faqs, ...faqs].map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </div>
  );
}

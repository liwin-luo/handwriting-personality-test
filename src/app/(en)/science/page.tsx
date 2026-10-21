import { Crumbs, JsonLd } from "@/components/Meta";
import { AuthorLine } from "@/components/seo/PageParts";
import { TraitsScienceLine } from "@/components/TraitsScreen";
import { scienceLangs } from "@/lib/langs";
import { SITE, pageMeta } from "@/lib/site";

const faqs = [
  {
    q: "Is handwriting analysis accurate?",
    a: "Measuring a visible mark is accurate enough: you can see a slant, a gap, or a closed 4. Inferring personality, health, honesty, intelligence, or job fitness from those marks is not. Studies that ask experts to judge personality from handwriting do not show a stable advantage over chance or over a non-expert.",
  },
  {
    q: "Is graphology real?",
    a: "Graphology is the claim that handwriting systematically reveals personality. The claim has been tested for decades and has not held up as a method you can rely on. This site does not practice it. The labels here are names for groups of shapes.",
  },
  {
    q: "Can a photo of handwriting show pen pressure or speed?",
    a: "No. A photograph shows the ink that stayed on the page, including how dark a stroke looks. Darkness is not pressure, and the picture has no clock. Speed and real pen pressure are gone once the hand lifts.",
  },
  {
    q: "Can this test tell if someone is honest or a good hire?",
    a: "No. Do not use a result link, a slant, or a loop to judge honesty, health, intelligence, or whether to hire someone. The terms page says the same thing because it matters more than the label.",
  },
  {
    q: "What does this test actually do?",
    a: "You pick the closest shape for up to twelve glyphs. Eight answers produce one of six fictional names from four tallies: structure, endings, page rhythm, and flourish. A two-point lead names the result. Flourish and rhythm as the top pair name Daydream Doodler. Anything else close is Instinctive Mixer.",
  },
  {
    q: "Can handwriting change over time?",
    a: "Yes. Practice, injury, age, medication, and even a new pen can change size, slant, and letterforms. A stable trait should not depend on a feature that moves with the pen.",
  },
  {
    q: "Do employers use graphology?",
    a: "Some have, especially in parts of Europe, but the evidence does not support it as a valid selection method. A handwriting report is not a job-relevant work sample. Ask for a work sample instead.",
  },
  {
    q: "Is forensic document examination the same thing?",
    a: "No. Forensic examiners compare a questioned writing sample with known writing to judge whether the same hand produced it. They do not infer personality. Their work has its own error rates and limits.",
  },
  {
    q: "Does handwriting show intelligence?",
    a: "No. The 1989 meta-analysis of hiring studies found graphologists close to zero when the writing was neutral. A tidy row of 4s shows practice and schooling, not reasoning ability. Use a measure built for that question.",
  },
  {
    q: "Can you detect a forged signature from a photo?",
    a: "Sometimes you can spot a warning sign, such as a tremor or pen lifts that do not match the rest of the page. You cannot settle the question from a picture. An examiner works from the original and states the limits.",
  },
  {
    q: "Is left-handed writing different from right-handed writing?",
    a: "In ways you can measure. Left-handed writers often reverse or flatten certain letterforms and rest the wrist elsewhere. Those are habits of a hand working against the stroke, not signs of character. Both groups show the same range of sizes.",
  },
  {
    q: "Is graphology used in court or as legal evidence?",
    a: "It is not. Courts want evidence about authorship, authenticity, or content, and a graphological character reading supplies none of those. Forensic document examination is a separate discipline with a different method and its own error rates.",
  },
];

export const metadata = pageMeta({
  title: "Is Handwriting Analysis Valid",
  description:
    "What a handwriting personality test can actually see, and what it cannot say about personality, health, honesty, intelligence, or a hiring decision.",
  path: "/science",
  langs: scienceLangs(),
});

export default function SciencePage() {
  return (
    <>
      <Crumbs items={[{ href: "/", label: "Home" }, { label: "Science" }]} />
      <h1 className="font-display text-5xl leading-[0.95]">Is handwriting analysis accurate?</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        You can see a stroke. You cannot see a person in it. This page is the boundary for every label on the site.
      </p>

      <h2 className="mt-10 font-display text-2xl">What is visible</h2>
      <p className="mt-4 leading-relaxed">
        Size, slant, spacing, how a letter ends, and whether a counter is closed are visible on paper. Two people can point at the same stroke and agree. The chart and the guides stay inside that agreement.
      </p>
      <p className="mt-4 leading-relaxed">
        Agreement is the test for a description. Ask two people to find the closed 4, the crossed 7, or the slant. If they point at the same mark, you are describing the page. If they point at different marks, you are reading a habit or a mood.
      </p>
      <p className="mt-4 leading-relaxed">
        The guides here follow that rule. A crossed 7 keeps the 7 distinct from the 1, and a slashed 0 keeps the 0 distinct from the letter O. Both were taught somewhere, and you can see that reason in the shape.
      </p>
      <TraitsScienceLine code="en" />

      <h2 className="mt-10 font-display text-2xl">What is not visible</h2>
      <p className="mt-4 leading-relaxed">
        Personality, mood, health, honesty, intelligence, and fitness for a job are not in the stroke. A photograph also drops pen pressure and speed. Dark ink is not a hard pen. A tidy line is not a slow one.
      </p>
      <p className="mt-4 leading-relaxed">
        A photograph keeps the ink and loses most of what made the ink. Pressure, speed, the grip, and the angle of the page are gone. What looks like a heavy hand may be a ballpoint on soft paper in flat light.
      </p>
      <p className="mt-4 leading-relaxed">
        A 1989 meta-analysis of graphology in hiring looked at 17 studies. Where the text itself was neutral, graphologists' scores sat near zero. Psychologists with no graphology training did better than the graphologists, which points at the words on the page rather than the strokes. See Neter and Ben-Shakhar, Personality and Individual Differences, 1989, volume 10, pages 737-745. Do not stake a decision on a handwriting label.
      </p>

      <h2 className="mt-10 font-display text-2xl">What graphology is and how it was tested</h2>
      <p className="mt-4 leading-relaxed">
        Graphology is the claim that handwriting carries a readable signal about character. Its sign lists are long: a right slant for expressiveness, a large signature for confidence, a heavy stroke for strong drives. The practice has been around for well over a century.
      </p>
      <p className="mt-4 leading-relaxed">
        The claim is easy to test. Give graphologists writing with neutral content, ask them to predict something that can be checked later, then compare their scores with a non-expert reading the same pages. The 1989 meta-analysis above pooled 17 such studies, and the stroke-based scores did not clear the bar.
      </p>
      <p className="mt-4 leading-relaxed">
        The wider literature has not turned the picture around: reviews of the personality claims keep finding that handwriting features do not predict stable traits well enough to act on. The{" "}
        <a className="text-link" href="/blog/graphology">
          graphology review
        </a>{" "}
        covers the history and the later work.
      </p>

      <h2 className="mt-10 font-display text-2xl">Document examination is a different job</h2>
      <p className="mt-4 leading-relaxed">
        Forensic document examination is a real field with a real method. An examiner compares a questioned sample with known samples from the same person and studies the habits a person does not control: line quality, pen lifts, letter construction, and the way a signature is put together.
      </p>
      <p className="mt-4 leading-relaxed">
        The question it answers is narrow and answerable: did these two marks come from the same hand? It is a comparison against a reference set, not a reading of character. The two fields get confused because both involve ink.
      </p>
      <p className="mt-4 leading-relaxed">
        That method has limits too. A conclusion comes with stated error rates, and a comparison weakens when there are too few known samples or when the reference is old. The tools here are not document examination either: the{" "}
        <a className="text-link" href="/tools/slant">
          slant tool
        </a>{" "}
        reports an angle from a photo you pick, and the{" "}
        <a className="text-link" href="/tools/signature">
          signature tool
        </a>{" "}
        reports the path you drew. Neither one says who wrote anything.
      </p>

      <h2 className="mt-10 font-display text-2xl">How handwriting changes</h2>
      <p className="mt-4 leading-relaxed">
        The same hand writes differently on different days. A new pen changes the width of a stroke. Rougher paper catches the tip. A felt tip, a fountain pen, a ballpoint, and a pencil produce marks that look like different styles, because they are different instruments.
      </p>
      <p className="mt-4 leading-relaxed">
        The writer changes too. Speed moves with mood, deadline, and how much the note matters. Tired hands drift, and a cold stiffens a grip. Age narrows the range of motion, and later in life the letters often grow smaller. Schooling taught most of us a model, and copying other documents bends it.
      </p>
      <p className="mt-4 leading-relaxed">
        Other factors are easy to miss. The angle the page is held at changes the apparent slant of every line on it. Being left-handed changes which letterforms get reversed and where the hand rests. A signature, a list, and a form filled in a hurry all change the speed, and speed changes the shape. A trait that moves this easily cannot be a fixed property of a person.
      </p>

      <h2 className="mt-10 font-display text-2xl">What the test is for</h2>
      <p className="mt-4 leading-relaxed">
        The test files the shapes you selected under a fictional name so you can share the filing, not a verdict.{" "}
        <a className="text-link" href="/about">
          Scoring
        </a>{" "}
        explains the arithmetic. The guides explain individual shapes, including the part you should not interpret.
      </p>
      <p className="mt-4 leading-relaxed">
        The six names, from Quiet Architect to Instinctive Mixer, are labels for clusters of shapes. They are not personality types and they are not a ranking. A filing name gives you a way to talk about a page: here is my letterform set, and here is the label the quiz put on it.
      </p>
      <p className="mt-4 leading-relaxed">
        What the test cannot do is listable. It cannot rank your intelligence, detect a lie, screen you for a job, flag a health condition, or identify who wrote a page. The{" "}
        <a className="text-link" href="/methodology">
          methodology
        </a>{" "}
        sets out the scoring rule, and the tools measure the geometry of a photo or a drawing and stop there.
      </p>

      <h2 className="mt-10 font-display text-2xl">When a handwriting judgement is legitimate</h2>
      <p className="mt-4 leading-relaxed">
        There are real tasks where handwriting is the right evidence, and none of them involve character. The clearest is forgery: an examiner compares a questioned signature with known signatures from the same person and reports whether the habits of construction are consistent, with the limits of the comparison stated.
      </p>
      <p className="mt-4 leading-relaxed">
        The second is document handling: checking a form for a missing required field, a crossed-out entry, or a signature where one belongs. The third is description, telling a person who cannot see the page what is on it. All three are readings of a page.
      </p>
      <p className="mt-4 leading-relaxed">
        The line is simple. A judgement that describes the page is fine. A judgement that describes the person needs a different kind of evidence.
      </p>

      <h2 className="mt-10 font-display text-2xl">How to talk about handwriting without overclaiming</h2>
      <p className="mt-4 leading-relaxed">
        Use nouns for what you can see and verbs for what you did. Say the 4 is closed, the 7 is crossed, the letters lean right. Say I measured the slant and the tool reported 8 degrees.
      </p>
      <p className="mt-4 leading-relaxed">
        Keep the writer in the sentence as a fact about the page, not the person. You can say this page was written fast, on soft paper, with a ballpoint, by a left-handed writer. You cannot say it is anxious, a liar, or a good employee. The first set can be checked. The second is a verdict.
      </p>
      <p className="mt-4 leading-relaxed">
        Three habits keep a conversation honest. Ask what the writer is known to have changed. Ask what a non-expert would also say, because a feature both readers see is a description. Ask what the decision would change, because a judgement about to cost someone a job needs evidence.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
        <li>Instead of 'a heavy hand means a strong will', say the strokes are darker than the body text.</li>
        <li>Instead of 'slanting right means extraversion', say the letters lean 8 degrees right.</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl">Questions</h2>
      <dl className="mt-4 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q}>
            <dt className="font-display text-xl">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 leading-relaxed">
        Read the <a className="text-link" href="/methodology">methodology</a> for the
        scoring rule, the <a className="text-link" href="/blog/graphology">graphology
        review</a> for the research, and the <a className="text-link" href="/tools">tools
        hub</a> for the measurements this site does support.
      </p>
      <p className="mt-4 leading-relaxed">
        For the visible side, try the{" "}
        <a className="text-link" href="/tools/slant">slant tool</a>, the{" "}
        <a className="text-link" href="/tools/signature">signature tool</a>, the{" "}
        <a className="text-link" href="/tools/sample-chart">sample chart</a>, and the{" "}
        <a className="text-link" href="/guides">letterform guides</a>. The{" "}
        <a className="text-link" href="/results">six names</a>, the{" "}
        <a className="text-link" href="/faq">frequently asked questions</a>, and the{" "}
        <a className="text-link" href="/blog/how-to-analyze-handwriting">
          guide to analysing handwriting
        </a>{" "}
        cover the rest. This <a className="text-link" href="/science">science page</a> is
        the one you are reading.
      </p>

      <AuthorLine lang="en" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${SITE.url}/science`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </>
  );
}

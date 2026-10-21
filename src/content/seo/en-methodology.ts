import type { ArticleContent } from "@/content/seo/types";

export const methodology: ArticleContent = {
  path: "/methodology",
  title: "Test Methodology",
  h1: "How this test is built",
  meta: "The scoring rule, the 12 shapes, the two-point threshold, the privacy model, and the limits of a fictional handwriting label. A methods page you can check.",
  kicker: "Methodology",
  lede: "This page explains what the test does, how the result is calculated, why the labels are fictional, and what would have to change before the quiz could be called a validated assessment.",
  published: "2026-10-21",
  updated: "2026-10-21",
  intro: [
    "A result is only as useful as the method behind it. This site uses a small, deterministic quiz: 12 questions, four visual directions, six labels, and a two-point threshold for naming a single direction. There is no trained model, no handwriting upload, and no hidden adjustment of the result.",
    "The method is transparent because the claim is modest. The quiz describes a set of shape choices. It does not claim to measure personality. If you want to know why the shapes were chosen, how the totals work, or where the design stops, this page is the reference.",
  ],
  sections: [
    {
      id: "input",
      h2: "The input: 12 shape questions",
      paragraphs: [
        "The English test asks about four digits (4, 7, 0, 1), five lowercase letters (a, g, t, i, y), the ampersand, word spacing, and slant. Each question shows two or three forms. You choose the one closest to what you write on an ordinary day, or skip the question if you use both forms equally.",
        "The forms were selected for three reasons. They vary visibly between school models; people can recognize their own version without special equipment; and each form has a plausible functional explanation that is more interesting than a trait claim. A crossed 7 keeps 7 distinct from 1. A slashed 0 keeps 0 distinct from O. A double-storey a follows a printed model. The quiz asks you to notice those choices.",
        "The shape set is not a standardized handwriting inventory. It is a curated list for a short quiz. Other features, such as pressure, speed, letter height, and baseline, are not included because they are difficult to judge from a multiple-choice question. The slant tool exists for one of those features, but its measurement is not fed back into the quiz.",
      ],
    },
    {
      id: "directions",
      h2: "The four directions",
      paragraphs: [
        "Each option carries a small weight on four directions: structure, finish, rhythm, and character. Structure rewards closed, conventional forms. Finish rewards forms that stop once the letter is readable, or that omit a non-essential mark. Rhythm rewards spacing and vertical movement. Character rewards flourishes and unconventional marks.",
        "The names are descriptive, not psychometric. They are not factors derived from a factor analysis, and they are not the Big Five. They are four buckets that make the shape choices legible. A closed 4, a crossed 7, and a slashed 0 all add to structure for the simple reason that they close or mark the form.",
        "The weights are fixed integers. One answer can add two points to a direction, which is why the threshold for a single-direction result is also two points. The arithmetic is visible on the result page: the four totals are shown beside the label.",
      ],
    },
    {
      id: "scoring",
      h2: "The scoring rule",
      paragraphs: [
        "The test requires eight answered questions. A skip is recorded as a skip and adds no points. The totals are summed, then ranked. If the leading direction is at least two points ahead of the second, the result is the label for that direction: Quiet Architect for structure, Everyday Minimalist for finish, Margin Storyteller for rhythm, or Beautiful Rebel for character.",
        "If the lead is less than two points, the top two directions are checked. If they are character and rhythm, the result is Daydream Doodler. Otherwise the result is Instinctive Mixer. The two mixed labels are not a fifth and sixth dimension; they are the two ways the test handles a close vote.",
        "The result is deterministic. The same answers always produce the same label. There is no random element, no date-based variation, and no post-hoc adjustment. If you change one answer, the totals and possibly the label change, and the new result link reflects the new picks.",
      ],
    },
    {
      id: "why-threshold",
      h2: "Why a two-point threshold",
      paragraphs: [
        "A one-point lead is small enough to be noise in a 12-question quiz. The threshold prevents a trivial difference from being presented as a clear winner. It also creates a visible mixed category, which is more honest than forcing every set of answers into a single label.",
        "The threshold is a design choice, not a statistically calibrated cutoff. With more questions or different weights, it would need to be revisited. The code comment in the scoring module says as much: the fixed threshold would become biased if the question count or weights increased, and the upgrade path would be to normalize by the number of answered questions.",
        "The consequence is that some results are close calls. The result page shows the totals so you can see whether the lead was one point or six. A close call is not a failure of the quiz; it is information about how mixed the shape choices were.",
      ],
    },
    {
      id: "labels",
      h2: "Why the labels are fictional",
      paragraphs: [
        "The six labels are invented names for clusters of shape choices. They are not diagnoses, types, or validated categories. Calling them fictional is not a disclaimer added to the footer; it is the design premise. The quiz is a filing exercise, and the labels are the files.",
        "Fictional labels have an advantage: they are harder to mistake for a clinical instrument. A label such as Quiet Architect sounds like a personality type, so the result page immediately explains that it names a set of shapes. The tension between the playful name and the modest claim is deliberate. It gives the visitor a memorable result without pretending the result is science.",
        "The labels are also not stable descriptions of a person over time. Handwriting changes with practice, and the quiz answers are self-reported. A visitor who learns a new letterform may answer differently next year. That is expected; the label follows the answers, not an underlying trait.",
      ],
    },
    {
      id: "privacy",
      h2: "Privacy and data flow",
      paragraphs: [
        "The quiz stores picks in the browser's local storage under a site-specific key. When you open a result, the picks are encoded into the URL as a 13-character code. The result page decodes the code and computes the label locally. There is no account, email, or server-side profile.",
        "The code is not encrypted. Anyone with the link can decode the picks. The link does not contain a name, an email address, or a handwriting image. Treat a shared result link as public information about the answers, not as an anonymous token.",
        "The slant tool reads a local image file with a browser object URL and revokes it when the component unmounts. The signature tool draws on a canvas and does not send the drawing anywhere. Neither tool writes the image to local storage. Analytics events, if enabled, record page and tool interactions, not the content of an image or a signature.",
      ],
    },
    {
      id: "not-validated",
      h2: "What would make this a validated test",
      paragraphs: [
        "A validated personality test needs a defined construct, a reliable scoring procedure, evidence of convergent and discriminant validity, and evidence that the result predicts something outside the test. It also needs fairness evidence across groups and a clear statement of intended use. This quiz has none of those in the psychometric sense.",
        "The quiz is reliable in the narrow sense that the same answers produce the same label. That is not the same as test-retest reliability across people and occasions, because the input is a self-report of shape use, and the shape use can change. The labels have not been compared with established personality measures, and no outcome study has been run.",
        "Could the quiz be validated? A researcher could define the four directions, collect a large sample, measure inter-rater reliability of the shape classifications, and compare the totals with validated personality scales. Even then, the result would be a modest instrument at best. The current site does not claim that work has been done, because it has not.",
      ],
    },
    {
      id: "editorial",
      h2: "Editorial process and corrections",
      paragraphs: [
        "The site is maintained by an editorial team, not by a named clinician or graphologist. The content is reviewed for internal consistency: the scoring explanation matches the code, the FAQ matches the result page, and the science claims match the cited literature. The pages show a last-updated date and an author line.",
        "If a claim is wrong, the correction should be specific. A vague disclaimer does not fix a factual error. The site's contact page is the place to send a correction with a source. Changes that affect the scoring or the shape set should be reflected on this page and in the methodology note on the home page.",
        "The site does not use AI-generated personality reports. The result text is fixed for each label, and the scoring is arithmetic. The tools measure geometry. There is no model that invents a narrative about the visitor.",
      ],
    },
    {
      id: "limits",
      h2: "The limits, in one place",
      paragraphs: [
        "The quiz does not measure personality, intelligence, mental health, honesty, or job performance. It does not identify a writer. It does not diagnose a condition. It does not replace a handwriting sample, a forensic examination, or a conversation with a person.",
        "The measurement tools describe geometry. The slant tool reports the angle you set on an image; it does not recover the pen angle in the hand. The signature tool reports the path you drew; it does not measure pressure or speed. The sample chart is a reference, not an assessment.",
        "The site's purpose is to make handwriting vocabulary concrete and to keep the claims honest. If a result or a measurement helps you notice something about a page, it has done its job. If it is used to judge a person, it has been used beyond its design.",
      ],
    },
  ],
  faqsTitle: "Questions",
  faqs: [
    {
      q: "How is the handwriting test scored?",
      a: "Each answer adds weights to four directions. The leading direction must be at least two points ahead to name a single-direction label. Close votes produce one of two mixed labels.",
    },
    {
      q: "Why eight answers?",
      a: "Eight of 12 is enough to produce a result while allowing skips for forms a person genuinely uses equally. Fewer than eight produces no label.",
    },
    {
      q: "Is the test random?",
      a: "No. The scoring is deterministic. The same answers always produce the same label.",
    },
    {
      q: "Is the test validated?",
      a: "No. It is a shape-filing exercise, not a psychometric assessment. The labels are fictional and have not been validated against personality measures.",
    },
    {
      q: "Who writes the content?",
      a: "The Handwriting Personality Test editorial team. The content is reviewed for consistency with the code and the cited research.",
    },
    {
      q: "When was the content last updated?",
      a: "21 October 2026. The date appears in the footer of each page and in the article metadata.",
    },
    {
      q: "Does the test use AI?",
      a: "No. The result is calculated by fixed arithmetic, and the label text is fixed. The measurement tools use simple geometry.",
    },
    {
      q: "Where do I report a correction?",
      a: "Use the contact page. Include the page, the claim, and a source if you have one.",
    },
  ],
  sourcesTitle: "Sources and further reading",
  sources: [
    {
      label: "Neter, E., & Ben-Shakhar, G. (1989). The predictive validity of graphological inferences. Personality and Individual Differences, 10(7), 737-745.",
      href: "https://scholar.google.com/scholar?q=Neter+Ben-Shakhar+1989+predictive+validity+graphological+inferences",
    },
    {
      label: "Beyerstein, B. L., & Beyerstein, D. F. (Eds.). (1992). The Write Stuff: Evaluations of Graphology. Prometheus Books.",
      href: "https://scholar.google.com/scholar?q=Beyerstein+The+Write+Stuff+Evaluations+of+Graphology",
    },
    {
      label: "Klimoski, R. J., & Rafaeli, A. (1983). Inferring personal qualities through handwriting analysis. Journal of Occupational Psychology, 56(3), 191-202.",
      href: "https://scholar.google.com/scholar?q=Klimoski+Rafaeli+1983+inferring+personal+qualities+handwriting",
    },
  ],
  relatedTools: [
    { href: "/", label: "Take the 12-shape test", note: "The quiz this page describes." },
    { href: "/tools/slant", label: "Slant measurement", note: "One photo, one angle, no upload." },
    { href: "/tools/signature", label: "Signature measurement", note: "A local canvas with geometry output." },
  ],
  relatedGuides: [
    { href: "/science", label: "What handwriting analysis can prove" },
    { href: "/blog/what-is-handwriting-personality-test", label: "What is a handwriting personality test?" },
    { href: "/blog/graphology", label: "Graphology: what the evidence says" },
    { href: "/tools", label: "All handwriting tools" },
  ],
  ctaLabel: "Try the test with the method in view",
  ctaHref: "/#test",
  ctaNote: "Eight answers, four totals, one fictional label. The method page explains exactly how the result is reached.",
};

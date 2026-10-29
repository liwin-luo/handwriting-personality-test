import type { ToolSeoContent } from "@/content/seo/types";

export const homeTool: ToolSeoContent = {
  slug: "home",
  path: "/",
  title: "Handwriting Personality Test: Free 19-Shape Quiz",
  h1: "Handwriting Personality Test",
  meta: "A free handwriting personality test built from 19 shapes. Pick what you actually write, answer eight questions, and get a fictional label. No upload.",
  kicker: "Free · no upload · 8 answers",
  lede: "Pick the shapes closest to your own handwriting. Eight answers are enough. The name you get is a filing label for those shapes, not a diagnosis, a score, or a prediction about your life.",
  outputsTitle: "What you get",
  outputs: [
    "A result from six clearly named labels, calculated from the shapes you pick.",
    "Four direction totals, so you can see which habits pushed the result.",
    "A shareable result link that carries your answers and nothing else.",
    "A short explanation of what the label means and what it does not.",
    "Links to the shape guides behind your result.",
    "No account, no email, and no upload of a handwriting sample.",
  ],
  howToTitle: "How to take the test",
  howToSteps: [
    "Look at the first shape pair and choose the form closest to what you write on an ordinary day, not the one you think looks better.",
    "Use the number keys, arrow keys, or click an option. The test moves to the next question automatically.",
    "Skip a question if you genuinely use both forms equally. Eight answered questions are required for a result.",
    "Press See result when you have answered enough. Your answers are encoded into the result link; nothing is sent to a server.",
    "Read the four direction totals before the label. The totals show which visual habits were counted and how large the lead was.",
    "Open the shape guides if you want to know where a form comes from or why it is not a character trait.",
  ],
  sections: [
    {
      id: "what-this-test-is",
      h2: "What this test is",
      paragraphs: [
        "This is a shape-picking quiz, not a clinical assessment. It shows you pairs such as an open 4 and a closed 4, a plain 7 and a crossed 7, a single-storey a and a double-storey a. You choose the form closest to your own. The site counts the choices across four visual directions and gives the result a name.",
        "The idea is to make the vocabulary of handwriting analysis concrete without pretending the vocabulary is a personality system. Most people have never noticed whether their 7 is crossed or where their t is crossed until someone asks. The quiz turns those small differences into a set of choices you can see and compare.",
        "The result is a fictional label. It is not a Big Five profile, a Myers-Briggs type, a diagnosis, or a prediction of job performance. It is a way to summarize the shapes you selected. If the label fits, it may be because the shapes are familiar; if it does not, that is a useful reminder that a handful of letterforms cannot capture a person.",
      ],
    },
    {
      id: "the-12-questions",
      h2: "The 19 questions",
      paragraphs: [
        "The test covers digits, letters, the ampersand, letter size, word spacing, joins, and slant. The digits are 4, 7, 2, 5, 8, 9, 0, and 1. The letters are a, g, capital G, t, i, and y. The scene is an ordinary note, not a signature.",
        "The forms were chosen because they vary visibly between school systems and because people can usually recognize their own version without special equipment. A closed 4 and an open 4 are easy to tell apart. A looped g and an open g are easy to tell apart. The point is recognition, not hidden meaning.",
        "Each option carries weights for four directions. A closed, compact form tends to add to structure. A form that stops early or omits a mark tends to add to finish. A wide gap or a high, airy mark tends to add to rhythm. A flourish or an unconventional mark tends to add to character. Those weights are a design choice, not a measured psychological scale.",
      ],
    },
    {
      id: "how-scoring-works",
      h2: "How scoring works",
      paragraphs: [
        "The test adds the weights of the options you chose. It then ranks the four direction totals and shows second place. A direction must lead by more than one answer to name a single-direction result. If no direction has that lead, the test checks whether character and rhythm are the top pair. If they are, the result is Daydream Doodler; otherwise it is Instinctive Mixer.",
        "The threshold is the most one option can add to one direction, not a statistically calibrated cutoff. It exists so one tap cannot name the result. The result page shows the ranked points, the margin, and the three strokes that built the lead.",
        "The four directions are descriptive buckets: structure, finish, rhythm, and character. They are not validated factors of personality. Two people with the same label may share a few shape choices and differ in almost everything else. That is expected, because the input is a set of letterforms, not a life.",
      ],
    },
    {
      id: "six-labels",
      h2: "The six labels",
      paragraphs: [
        "Quiet Architect is the structure-led label: you close the shapes that can be closed. Everyday Minimalist is finish-led: you stop the stroke once the letter is readable. Margin Storyteller is rhythm-led: gaps and lean set the pace of the line. Beautiful Rebel is character-led: you keep a mark the basic copybook leaves out.",
        "Daydream Doodler is the pair result when flourish and rhythm are the top two directions. Instinctive Mixer is the result when no single direction leads by more than one answer and the top pair is something else. The names are deliberately playful. They are labels for a set of shapes, not categories of people.",
        "Each label has a result page with a short description, a set of example shapes, and links to the relevant guides. You can open a label page without taking the test. The page does not claim that the label describes you; it explains the filing category.",
      ],
    },
    {
      id: "shapes-not-personality",
      h2: "Why a shape is not a personality",
      paragraphs: [
        "Handwriting is learned. Children copy a model, adjust it to their hand, and settle into habits that vary by country, school, pen, and decade. A closed 4 may mean the writer learned a European model, not that they are rigid. A crossed 7 may mean the writer wants to keep 7 distinct from 1, not that they are meticulous.",
        "Graphology, the practice of reading personality from handwriting, has been tested many times. A meta-analysis by Neter and Ben-Shakhar (1989) found near-zero predictive validity for graphologists' judgments in personnel settings when the content of the writing was neutral. The result does not mean every feature is meaningless; it means the broad claim that handwriting reveals character is not supported well enough for decisions about people.",
        "This site takes the honest position: the shapes are interesting, the history is interesting, and the labels are fun, but the jump from a loop to a personality is not justified. The test is designed to make that distinction visible rather than to hide it behind a score.",
      ],
    },
    {
      id: "privacy",
      h2: "Privacy: where your answers go",
      paragraphs: [
        "The quiz stores your picks in your browser's local storage so you can return to the page. When you open the result, the picks are encoded into the URL as a short code. The result page reads the code and calculates the label in the browser. There is no account, no email field, and no upload.",
        "A result link contains the answers, not your name. Anyone with the link can decode the picks, so treat it like any other shared link. The site does not attach the result to an identity, and it does not use a handwriting photo because it never asks for one.",
        "The measuring tools follow the same rule: a photo or a signature drawing stays in the browser. The slant tool reads a local file, and the signature tool uses a canvas. Neither sends the image to a server.",
      ],
    },
    {
      id: "handwriting-research",
      h2: "Handwriting analysis, graphology, and forensics",
      paragraphs: [
        "Three different activities are often mixed together. Graphology infers personality from handwriting. Forensic document examination compares a questioned writing sample with known writing to decide whether the same hand produced it. Handwriting research studies how people learn and produce letterforms, sometimes with an eye to education or motor control.",
        "The evidence for graphology is weak. The evidence for forensic comparison is stronger but still has error rates and depends on trained examiners and suitable samples. Neither activity is the same as this quiz. The quiz does not compare a sample with a known writer, and it does not claim to identify a personality.",
        "If you are hiring, dating, or making a decision that affects someone else, use information that is relevant to the decision. A shape preference is not a job qualification. A handwriting angle is not a measure of honesty. The science page goes deeper into the research and the limits.",
      ],
    },
  ],
  sampleTitle: "A real sample result",
  sampleIntro:
    "This is a real result link generated by the same code as the quiz, not a mock-up. The sample answers the original twelve shapes. Structure is first and Endings is second, two apart, so the name stays Instinctive Mixer.",
  sampleBullets: [
    "12 of 19 questions answered.",
    "Structure is first and Endings is second, 2 apart.",
    "The result names a set of shapes, not a person.",
    "The link contains the answers and can be opened without an account.",
  ],
  sampleResultHref: "/r/1000010111111",
  sampleResultLabel: "Open the Instinctive Mixer sample result",
  useCasesTitle: "What the test is good for",
  useCases: [
    {
      h3: "Noticing your own habits",
      body: "Most people have never compared their 4 or their ampersand with a second form. The quiz gives you a reason to look at the page you already wrote.",
    },
    {
      h3: "A conversation starter",
      body: "Compare results with a friend and open the shape guides. The interesting part is the disagreement about which form counts as 'normal'.",
    },
    {
      h3: "A classroom example",
      body: "Use the test to show how a quiz turns choices into a label. Then ask which step is the evidence and which step is the design choice.",
    },
    {
      h3: "A check on handwriting claims",
      body: "When a headline says a loop reveals a trait, take the test and read the methodology. The label is a filing system, not a finding.",
    },
  ],
  faqsTitle: "Questions",
  faqs: [
    {
      q: "What is the handwriting personality test?",
      a: "It is a free 19-question quiz that asks you to choose the handwritten forms closest to your own. It counts four visual directions and returns one of six fictional labels.",
    },
    {
      q: "How many questions do I need to answer?",
      a: "Eight of 12. You can skip questions where you genuinely use both forms equally. The result is available once eight answers are recorded.",
    },
    {
      q: "Is this a real personality test?",
      a: "No. It is a shape-filing exercise. The labels are fictional, and the result is not a validated measure of personality, intelligence, mental health, or job performance.",
    },
    {
      q: "Does the test upload my handwriting?",
      a: "It never asks for a handwriting sample. The quiz is multiple choice. Your picks are stored in your browser and encoded into the result link; there is no upload.",
    },
    {
      q: "How is the result calculated?",
      a: "Each answer adds points to four directions: structure, finish, rhythm, and character. A direction must lead by more than one answer to name a single-direction label. If no direction leads, the top pair determines one of two mixed labels.",
    },
    {
      q: "Can I retake the test?",
      a: "Yes. Change any answer and press See result again. The new picks are encoded into a new link, and the old link still works if you kept it.",
    },
    {
      q: "Why did I get a different label the second time?",
      a: "A single answer can add two points, and the name needs a bigger lead than that. Small changes can change the label. The totals show how close the call was.",
    },
    {
      q: "Does the test work on a phone?",
      a: "Yes. The quiz uses large buttons and number keys where a keyboard is available. It works with touch and with a mouse.",
    },
    {
      q: "Is there a Chinese version?",
      a: "Yes. The Chinese test at /zh uses five questions about hard-pen writing: size, character spacing, line spacing, connections, and the horizontal stroke. It is not a translation of the 19 Latin-shape questions.",
    },
    {
      q: "Can I use the result in a research paper?",
      a: "The result is not a validated instrument. If you want to study handwriting, use established measures and ethics review. The six labels are not suitable as a psychological scale.",
    },
    {
      q: "Who made the test?",
      a: "It is maintained by the site's editorial team. The methodology page explains the scoring rule, the shape selection, and the limits. The content was last updated on 29 October 2026.",
    },
  ],
  relatedTitle: "Related tools and guides",
  relatedTools: [
    { href: "/tools/slant", label: "Slant measurement tool", note: "Measure one downstroke from a local photo." },
    { href: "/tools/signature", label: "Signature measurement tool", note: "Measure the geometry of a drawn signature." },
    { href: "/tools/sample-chart", label: "Handwriting sample chart", note: "See and print all 19 shapes in one place." },
  ],
  relatedGuides: [
    { href: "/guides", label: "All handwriting guides" },
    { href: "/guides/four", label: "Open 4 or closed 4" },
    { href: "/guides/spacing", label: "Word spacing in handwriting" },
    { href: "/blog/what-is-handwriting-personality-test", label: "What is a handwriting personality test?" },
    { href: "/methodology", label: "How this test is built" },
  ],
  ctaLabel: "Start at question 1",
  ctaHref: "/#test",
  ctaNote: "Eight answers produce a result. The test is free, needs no account, and does not ask for a handwriting sample.",
  schemaName: "Handwriting Personality Test",
  schemaDescription:
    "A free 19-question handwriting shape quiz that returns one of six fictional labels, with no upload and no account.",
  applicationCategory: "LifestyleApplication",
  featureList: [
    "19 handwriting shape questions",
    "Result after 8 answers",
    "Four direction totals",
    "Six fictional labels",
    "Shareable result link",
    "No upload and no account",
  ],
  howToName: "How to take the handwriting personality test",
};

import type { ArticleContent } from "@/content/seo/types";

export const signatureSizeGuide: ArticleContent = {
  path: "/guides/signature-size",
  title: "Signature Size and Limits",
  h1: "How big is a signature?",
  meta: "What signature size measures, why a large signature is not confidence, how forms and tools distort size, and how to compare signatures fairly.",
  kicker: "Signature guide",
  lede: "A signature can be measured, but its size is not a personality score. The useful questions are what was measured, on what surface, and under what constraint.",
  published: "2026-10-21",
  updated: "2026-10-21",
  intro: [
    "Signature size is one of the most repeated claims in popular handwriting analysis. A large signature is said to show confidence; a small one, modesty; an expanding one, ambition. The claims are memorable, and they are rarely tested against the conditions that produce the size in the first place.",
    "This guide separates three things: the physical size of ink on paper, the size of a drawing in a browser box, and the social meaning people attach to a signature. The first can be measured. The second can be measured relative to the box. The third is an interpretation, and it needs evidence beyond a single mark.",
  ],
  sections: [
    {
      id: "what-size-means",
      h2: "What signature size actually measures",
      paragraphs: [
        "On paper, size has two dimensions: width and height. Width is the horizontal span of the signature. Height is the vertical span from the highest point to the lowest. A signature can be wide and short, tall and narrow, or compact in both directions. The pair is more informative than a single label.",
        "In a browser canvas, width and height are measured in canvas units, not millimetres. The tool reports the span of the drawn path relative to the drawing area. A signature drawn on a phone and the same signature drawn on a desktop monitor will not share a physical scale. The numbers are useful for comparing drawings made in the same box, not for comparing a screen drawing with ink on a check.",
        "Total stroke length is a third measure. Two signatures can have the same width and height but different path lengths because one has more loops or retracing. Length captures some of that difference. None of the three measures captures pressure, speed, or the size of the hand that made the mark.",
      ],
    },
    {
      id: "form-constraint",
      h2: "The form decides more than the person",
      paragraphs: [
        "A passport form, a bank card, and a delivery receipt often provide a small box. The signature shrinks to fit. A painting may have a tiny signature because the artist does not want to compete with the image. A legal document may have a large signature because there is space and because the signature is meant to be seen.",
        "This is the first thing to check before interpreting size. If the available space varies, the size varies with the space. A small signature on a crowded form is not evidence of a small personality; it is evidence of a small box. A large signature on a blank page is not evidence of confidence; it may be evidence of a large page.",
        "The same logic applies to the instrument. A thick marker produces a wider mark than a fine pen. A signature written on a tablet with a stylus has no ink spread. If you are comparing signatures, keep the instrument and the surface as similar as possible, or describe the difference before interpreting it.",
      ],
    },
    {
      id: "status-research",
      h2: "What research says about size and status",
      paragraphs: [
        "Some studies have examined signature size as a social signal. In certain settings, larger signatures are associated with status, dominance, or a desire to be seen. The findings are context-dependent and often modest. They do not support a general rule that a large signature means confidence or that a small one means shyness.",
        "A statistical association in a group is not a diagnosis for an individual. Even a reliable average difference would leave a large overlap between people. A single signature is one behaviour in one setting, and the setting may be doing most of the work.",
        "The popular claims also confuse size with several other features. A large signature may be expansive, but it may also be hurried, poorly controlled, or constrained by a pen that skips. A small signature may be precise, cramped, or simply written in a small space. Size alone cannot separate those explanations.",
      ],
    },
    {
      id: "measure",
      h2: "How to measure a signature fairly",
      paragraphs: [
        "For ink on paper, place a ruler beside the signature and record the width and height in millimetres. Note the dimensions of the space the signature had to fit. If the signature crosses a printed line, note that too. A measurement without the constraint is incomplete.",
        "For a screen drawing, use the signature tool and record the canvas size. Draw the signature three times without looking at the previous attempt. Compare the range, not a single reading. A wide range suggests the drawing is unstable or the hand is still warming up; a narrow range suggests a consistent gesture.",
        "If you are comparing two people, use the same box, the same device, and the same instruction. Even then, you are comparing drawings made for a tool, not signatures made in the course of a life. Say that in your notes. The qualifier is part of the measurement.",
      ],
      bullets: [
        "Record the surface and the available space.",
        "Record the pen or stylus.",
        "Measure width, height, and path length together.",
        "Take three attempts and report the range.",
        "Do not compare screen units with paper millimetres.",
      ],
    },
    {
      id: "what-not",
      h2: "What signature size does not show",
      paragraphs: [
        "It does not show confidence, honesty, intelligence, ambition, or mental health. Those are complex constructs, and a signature is a narrow, practiced behaviour. The research on graphology does not support using handwriting features to make individual predictions of that kind.",
        "It does not authenticate a signature. A forger can copy a size. A document examiner studies line quality, pen lifts, and construction, not just the dimensions. The signature tool on this site is not a verification system.",
        "It does not predict job performance. If you are hiring, a signature measurement is not a job-relevant test. A work sample, a structured interview, and a reference check are more defensible.",
      ],
    },
    {
      id: "use-it",
      h2: "A modest way to use the measurement",
      paragraphs: [
        "Use size as a description. 'This signature is 42 mm wide and 18 mm high on a form with a 50 mm box' is a factual statement. Add the context and the measurement becomes useful for comparison or archival notes.",
        "Use it to notice change. If a person's signature becomes smaller over a series of documents, that is a fact about the documents. The reason could be the form, the pen, fatigue, or a deliberate change. The measurement does not supply the reason.",
        "Use it to test a claim. When someone says a large signature proves confidence, measure a few signatures from the same person on different forms. If the size tracks the available space rather than the person, the claim has a simpler explanation.",
      ],
    },
  ],
  faqsTitle: "Questions",
  faqs: [
    {
      q: "Does a large signature mean confidence?",
      a: "No. Size can be influenced by the form, the pen, the surface, and the context. The claim that size reveals confidence is not supported as an individual assessment.",
    },
    {
      q: "What is the average signature size?",
      a: "There is no useful universal average. Signatures vary with the form, the country, the pen, and the purpose. Compare signatures made under similar conditions.",
    },
    {
      q: "Why is my signature bigger in the browser than on paper?",
      a: "The canvas uses screen units, not millimetres. The drawing area and the device determine the scale. The tool reports relative size, not physical size.",
    },
    {
      q: "Can a small form make a signature smaller?",
      a: "Yes. People adapt the signature to the available space. A small signature in a small box is not evidence of a personality trait.",
    },
    {
      q: "Is a wide signature more confident than a tall one?",
      a: "No. Width and height describe different dimensions. Neither is a confidence score.",
    },
    {
      q: "Can I compare my signature with a celebrity's?",
      a: "You can compare measurements, but the comparison has little meaning without the same conditions. Different forms, pens, and purposes make the numbers hard to interpret.",
    },
    {
      q: "Does signature size change with age?",
      a: "Handwriting can change with age, health, vision, and motor control. A change in size is a reason to look at the conditions, not a diagnosis.",
    },
    {
      q: "Should I use signature size in a hiring decision?",
      a: "No. It is not a validated job-relevant measure. Use work samples and structured interviews.",
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
    { href: "/tools/signature", label: "Measure a signature", note: "Width, height, length, turns, and approximate slant." },
    { href: "/tools/slant", label: "Measure slant from a photo", note: "A separate angle tool for ink on paper." },
    { href: "/tools/sample-chart", label: "See the shape chart", note: "The forms used in the 12-shape test." },
  ],
  relatedGuides: [
    { href: "/guides/signature-writing", label: "Signature and the writing around it" },
    { href: "/guides/y", label: "The looped and straight y" },
    { href: "/blog/graphology", label: "Graphology: what the evidence says" },
    { href: "/science", label: "The science page" },
  ],
  ctaLabel: "Measure a signature",
  ctaHref: "/tools/signature",
  ctaNote: "Draw in the browser and compare width, height, and path length. Nothing is uploaded.",
};

export const signatureWritingGuide: ArticleContent = {
  path: "/guides/signature-writing",
  title: "Signature vs Handwriting",
  h1: "Signature and the writing around it",
  meta: "Why a signature is a poor sample of everyday handwriting, what changes when a mark is practiced, and how to compare the two without reading personalities.",
  kicker: "Signature guide",
  lede: "A signature is a practiced mark. The lines above it are the writing. They are allowed to disagree, and the disagreement is usually about practice, not personality.",
  published: "2026-10-21",
  updated: "2026-10-21",
  intro: [
    "People often assume that a signature is the purest sample of handwriting. It is the opposite. A signature is the most practiced mark most people make. It is repeated hundreds of times, compressed into a gesture, and often designed to be recognizable rather than legible. The notes above it are closer to everyday writing.",
    "That difference matters for any test that asks you to pick letterforms. If you use a signature as your sample, you are sampling a performance. This guide explains why signatures differ from ordinary writing, what the difference does and does not mean, and how to choose a better sample.",
  ],
  sections: [
    {
      id: "practice",
      h2: "Practice changes the mark",
      paragraphs: [
        "A signature is learned by repetition. The first version may be letter-by-letter; the mature version is often a single continuous gesture with a characteristic opening and a sweeping exit. The hand no longer needs to form each letter separately. That is why a signature can be fast, fluent, and illegible at the same time.",
        "The repetition does not reveal a hidden trait. It reveals a motor habit. The same process explains why a person's initials may look different from their full signature: the initials have their own short history of repetition.",
        "A signature may also be deliberately styled. A public figure may add a flourish, a line under the name, or a distinctive loop. Those choices are real, but they are choices about a mark, not a window into the unconscious.",
      ],
    },
    {
      id: "differences",
      h2: "Typical differences",
      paragraphs: [
        "Signatures tend to be larger, faster, and more slanted than ordinary writing. They often include a baseline flourish or an underline. Letters may be simplified or connected in ways that do not appear in the rest of the page. The signature may sit at an angle even when the body text is upright.",
        "Ordinary writing tends to preserve more of the school model. The letterforms are closer to what the writer learned, and the spacing is governed by the line. That makes ordinary writing a better sample for a shape-based quiz, even though it is less dramatic than a signature.",
        "Neither form is more authentic. They are different tasks. A signature is optimized for identity and speed; a note is optimized for communication. Comparing them is useful when you want to describe a practice, not when you want to rank the writer.",
      ],
    },
    {
      id: "legibility",
      h2: "Why signatures become illegible",
      paragraphs: [
        "An illegible signature is usually a sign of fluency, not secrecy. When a gesture is repeated often enough, the individual letters lose their separateness. The mark becomes a token: a shape that stands for the name without spelling it.",
        "This is why an illegible signature can still be recognizable to a bank clerk or a colleague. Recognition does not require reading. The shape carries the identity, and the context carries the rest.",
        "The same is true of a very simple signature, such as initials or a single stroke. Simplicity is not evidence of a guarded personality. It is evidence of a mark that has been reduced to its most efficient form.",
      ],
    },
    {
      id: "sample",
      h2: "Choosing a sample for the test",
      paragraphs: [
        "Use three or four lines of ordinary writing on unlined paper. Write about something neutral, with the pen you normally use. Do not copy a printed model, and do not use the signature. The test asks about the forms that appear when you are not performing a signature.",
        "If you use both a printed and a cursive hand, choose the one you use for notes. If you genuinely use both equally, skip the question. A skip is more informative than a forced choice.",
        "The quiz does not need a photo. You compare your writing with the shapes on screen and pick the closest form. The point is recognition, not forensic comparison.",
      ],
    },
    {
      id: "compare",
      h2: "How to compare a signature with the page",
      paragraphs: [
        "Measure the signature separately from the body text. Note the width, height, and slant of each. If the signature is larger or more slanted, that is a description of the difference. It is not a claim that the writer has two personalities.",
        "Look for shared forms. Does the signature use the same y or g as the notes? Does it keep the same t cross? If the forms differ, the difference may be due to speed, size, or the signature's practiced path. If they match, that is a point of continuity.",
        "Keep the comparison local. A signature and a note from the same day are a reasonable pair. A signature from a passport and a note from a diary twenty years later are not a controlled comparison, and any difference may be due to time, pen, or health.",
      ],
    },
    {
      id: "not-proof",
      h2: "What the difference does not prove",
      paragraphs: [
        "A difference between a signature and the surrounding writing is not evidence of forgery. People sign differently from how they write, and the signature on a document may be the only part written with a different pen. A forensic examiner looks at line quality, pen lifts, and construction, not just whether the forms match.",
        "A difference is also not evidence of a divided personality. The signature is a different task with a different history. The ordinary writing is a better sample of the letterforms the quiz asks about.",
        "If you are comparing documents for a legal or historical purpose, use a trained examiner and a proper chain of custody. A browser canvas and a shape quiz are not substitutes for that work.",
      ],
    },
  ],
  faqsTitle: "Questions",
  faqs: [
    {
      q: "Why does my signature look different from my handwriting?",
      a: "You have practiced the signature far more than any sentence. Repetition turns it into a fluent gesture. The difference is about practice, not a hidden personality.",
    },
    {
      q: "Can I take the test using my signature?",
      a: "No. The test asks about ordinary letterforms. A signature is a practiced display form and a poor sample for those questions.",
    },
    {
      q: "Does an illegible signature mean secrecy?",
      a: "No. Practiced signatures often lose their separate letters. Illegibility is a common result of fluency, not evidence of a secretive motive.",
    },
    {
      q: "Is a signature more authentic than a note?",
      a: "No. They are different tasks. A signature is optimized for identity and speed; a note is optimized for communication. Neither is a window into the unconscious.",
    },
    {
      q: "Can a signature be used to verify identity?",
      a: "Signature verification is a forensic comparison task. A shape quiz or a canvas measurement cannot verify identity.",
    },
    {
      q: "What should I use for the test?",
      a: "Three or four lines of ordinary writing on unlined paper, using your normal pen. Leave out the signature.",
    },
    {
      q: "Why do some signatures include an underline?",
      a: "An underline is a stylistic addition that makes the mark more distinctive. It is a design choice, not a personality diagnosis.",
    },
    {
      q: "Can I compare my signature with a historical figure's?",
      a: "You can compare measurements, but the conditions and the person differ. Use the comparison as a description, not as a personality analysis.",
    },
  ],
  sourcesTitle: "Sources and further reading",
  sources: [
    {
      label: "Beyerstein, B. L., & Beyerstein, D. F. (Eds.). (1992). The Write Stuff: Evaluations of Graphology. Prometheus Books.",
      href: "https://scholar.google.com/scholar?q=Beyerstein+The+Write+Stuff+Evaluations+of+Graphology",
    },
    {
      label: "Neter, E., & Ben-Shakhar, G. (1989). The predictive validity of graphological inferences. Personality and Individual Differences, 10(7), 737-745.",
      href: "https://scholar.google.com/scholar?q=Neter+Ben-Shakhar+1989+predictive+validity+graphological+inferences",
    },
    {
      label: "Klimoski, R. J., & Rafaeli, A. (1983). Inferring personal qualities through handwriting analysis. Journal of Occupational Psychology, 56(3), 191-202.",
      href: "https://scholar.google.com/scholar?q=Klimoski+Rafaeli+1983+inferring+personal+qualities+handwriting",
    },
  ],
  relatedTools: [
    { href: "/tools/signature", label: "Measure a signature", note: "Width, height, length, turns, and approximate slant." },
    { href: "/tools/slant", label: "Measure slant from a photo", note: "A separate tool for ink on paper." },
    { href: "/", label: "Take the 12-shape test", note: "Use ordinary writing, not a signature." },
  ],
  relatedGuides: [
    { href: "/guides/signature-size", label: "How big a signature is" },
    { href: "/guides/g", label: "The looped and open g" },
    { href: "/blog/graphology", label: "Graphology: what the evidence says" },
    { href: "/science", label: "The science page" },
  ],
  ctaLabel: "Measure a signature",
  ctaHref: "/tools/signature",
  ctaNote: "The canvas reports geometry only. For the quiz, use ordinary writing rather than a signature.",
};

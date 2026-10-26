import type { HubContent } from "@/content/seo/types";

export const toolsHub: HubContent = {
  path: "/tools",
  title: "Handwriting Tools",
  h1: "Handwriting tools",
  meta: "Four free handwriting tools: a 12-shape personality test, a photo slant measure, a signature measurement canvas, and a printable sample chart. No upload.",
  kicker: "Free · browser-based · no upload",
  lede: "A small set of tools for looking closely at handwriting. One turns shapes into a fictional label. The others measure a line, a signature, or a chart without making a claim about character.",
  intro: [
    "Most handwriting sites start with a personality verdict and work backwards. This set starts with what can actually be seen on a page: which form of a letter is used, how far a downstroke leans, how wide a signature is, and which shapes are being compared. The tools make those observations repeatable. They do not turn them into a diagnosis.",
    "The main test is a 12-question shape quiz with six fictional labels. The slant and signature tools measure geometry. The sample chart is a printable reference for the shapes used in the test. They share a design rule: the output should be something you can check, and the page should say what the output does not mean.",
    "Each tool is built so that you can check it. A result page prints the four totals behind the label. The slant tool shows the reference line you aligned to and the angle it read. The signature canvas draws the path it measured and lists the numbers it counted.",
    "The reference material sits next to the tools on purpose. Twelve guides explain one shape each, and the articles set out what the research supports and what it does not. A measurement is more useful when you know where the form came from, and every guide says plainly what the shape cannot tell you.",
    "If you are new, take the test first. If you came for a specific measurement, use the slant or signature tool directly. If you want to see every shape before choosing, open the chart.",
  ],
  categoriesTitle: "The tools",
  categories: [
    {
      h2: "The shape test",
      intro: "A multiple-choice quiz about the forms you actually write. Eight answers produce a result; the result page shows the four direction totals behind the label.",
      tools: [
        {
          href: "/",
          label: "Handwriting personality test",
          note: "12 questions on digits, letters, the ampersand, spacing, and slant. Six fictional labels. No handwriting sample needed.",
          action: "Take the test",
        },
      ],
    },
    {
      h2: "Measurement tools",
      intro: "Two tools for describing what is on the page. Both run in the browser and keep the image or drawing local.",
      tools: [
        {
          href: "/tools/slant",
          label: "Slant measurement",
          note: "Load a photo, align a stem, and read the angle in degrees. The tool reports left, upright, or right of vertical.",
          action: "Measure slant",
        },
        {
          href: "/tools/signature",
          label: "Signature measurement",
          note: "Draw a signature on a canvas and read its width, height, path length, turns, and approximate slant.",
          action: "Measure a signature",
        },
      ],
    },
    {
      h2: "The chart",
      intro: "A visual index of the shapes used in the test, with filters, search, and a print layout.",
      tools: [
        {
          href: "/tools/sample-chart",
          label: "Handwriting sample chart",
          note: "Compare open and closed forms, print a clean chart, and jump to the guide for a shape.",
          action: "Open the chart",
        },
      ],
    },
    {
      h2: "Reference",
      intro: "Twelve shape guides and the evidence pages, grouped so you can read the form first and the limits after.",
      tools: [
        {
          href: "/guides",
          label: "The twelve shape guides",
          note: "One page per shape, with limits and a check.",
          action: "Open the guides",
        },
        {
          href: "/guides/four",
          label: "Open 4 or closed 4",
          note: "Two forms of the digit, and why speed changes it.",
          action: "Read the guide",
        },
        {
          href: "/guides/seven",
          label: "Crossed 7 handwriting",
          note: "The plain 7 and the crossed 7, and why the bar.",
          action: "Read the guide",
        },
        {
          href: "/guides/a",
          label: "Single-storey a or double-storey a",
          note: "Two habits that split writers, and the models behind them.",
          action: "Read the guide",
        },
        {
          href: "/guides/g",
          label: "How do you write a lowercase g",
          note: "Open hook or closed loop, and what speed changes.",
          action: "Read the guide",
        },
        {
          href: "/guides/zero",
          label: "Slashed zero handwriting",
          note: "Plain oval or slashed, and the habit behind the slash.",
          action: "Read the guide",
        },
        {
          href: "/guides/ampersand",
          label: "How do you write an ampersand",
          note: "Three forms, from a plus sign to the et ligature.",
          action: "Read the guide",
        },
        {
          href: "/guides/slant",
          label: "Handwriting slant",
          note: "Left, upright, or right of vertical, and how to measure it.",
          action: "Read the guide",
        },
        {
          href: "/guides/spacing",
          label: "Handwriting spacing",
          note: "Tight, even, or wide, and why one letter wide is a lesson.",
          action: "Read the guide",
        },
        {
          href: "/guides/one",
          label: "How do you write the number 1",
          note: "The plain stroke against the flagged 1, and why the foot.",
          action: "Read the guide",
        },
        {
          href: "/guides/t",
          label: "The bar on a handwritten t",
          note: "No bar, mid-height, or high, and what the placement shows.",
          action: "Read the guide",
        },
        {
          href: "/guides/i",
          label: "The dot on a handwritten i",
          note: "A close dot, a high dot, or a circle, and hurried notes.",
          action: "Read the guide",
        },
        {
          href: "/guides/y",
          label: "How do you write a lowercase y",
          note: "Straight or looped descender, and the habits behind each.",
          action: "Read the guide",
        },
        {
          href: "/methodology",
          label: "How this test is built",
          note: "The scoring rule, the twelve questions, and the weights.",
          action: "Read the method",
        },
        {
          href: "/blog",
          label: "Handwriting articles and evidence",
          note: "Six articles on the tests, the evidence, measurement, and decorative letters.",
          action: "Read the articles",
        },
      ],
    },
  ],
  chooseTitle: "Which tool should I use?",
  chooseSteps: [
    "Start from what you want to end up with. A label you can share comes from the 12-shape test. A number you can check comes from the slant or signature tool.",
    "If you want a result from the shapes you write, take the 12-shape test. Eight answers produce a result, and the four totals behind the label are printed on the page.",
    "If you want to know how far a real downstroke leans, use the slant tool with a photo of ordinary writing. Align a stem against the reference line and read the angle in degrees.",
    "If you want to describe the shape of a signature, use the signature canvas. It reports width, height, path length, turns, and an approximate slant for a drawing you make on it.",
    "If you want the vocabulary before you answer anything, open the sample chart. It shows every form the quiz uses, with filters, search, and a print layout.",
    "If you want the evidence behind the limits before you rely on it, read the methodology and science pages and the graphology article first.",
  ],
  trustTitle: "How the tools are built",
  trust: [
    { label: "Upload", value: "None. The test is multiple choice, the slant photo stays in the browser, and the signature canvas is local." },
    { label: "Accounts", value: "No account, email, or sign-in is required for any tool." },
    { label: "Personality claims", value: "The test returns a fictional label. The measurement tools return geometry, not traits." },
    { label: "Method", value: "The scoring rule, the 8-degree upright band, and the signature readout are explained on the page and on the methodology page." },
    { label: "Checkable output", value: "A result prints the four totals behind it, the slant tool shows the reference line, and the canvas lists every number it counted." },
    { label: "Open source of the rules", value: "The questions, the weights, and the scoring rule are written out in plain language, so a result can be checked by hand." },
    { label: "Last updated", value: "21 October 2026" },
    { label: "Author", value: "Handwriting Personality Test editorial team" },
  ],
  faqsTitle: "Questions",
  faqs: [
    {
      q: "Are the tools free?",
      a: "Yes. All four tools are free and run in the browser. There is no paid tier, no account, and no email gate. Nothing on this site asks for payment details or a card number.",
    },
    {
      q: "Do I need to upload my handwriting?",
      a: "No. The personality test is multiple choice, so there is no sample to upload. The slant tool reads a photo locally, and the signature tool draws on a canvas. Nothing leaves your device.",
    },
    {
      q: "Which tool is the handwriting personality test?",
      a: "The 12-shape test on the home page. It asks about digits, letters, the ampersand, spacing, and slant, then returns one of six fictional labels after eight answers, along with the four totals behind it.",
    },
    {
      q: "Do the tools diagnose personality?",
      a: "No. The test labels a set of shape choices. The slant and signature tools measure geometry. None of them is a validated personality assessment, and the science page sets out the evidence.",
    },
    {
      q: "Can I use these tools for hiring?",
      a: "No. Handwriting analysis is not a validated hiring method, and these tools are not built for personnel decisions. Use job-relevant work samples and structured interviews instead. The science page explains the evidence.",
    },
    {
      q: "How do I read a result?",
      a: "Start with the four direction totals, then read the label description. The totals show how the result was reached, so you can check whether the label fits the numbers. The label itself is a filing name.",
    },
    {
      q: "What is the difference between the slant tool and the signature tool?",
      a: "The slant tool works from a photo of real writing and reports the angle of a downstroke against a vertical reference. The signature tool works from a drawing you make and reports width, height, path length, and turns.",
    },
    {
      q: "Do I need the sample chart if I take the test?",
      a: "No. The chart is for comparing forms side by side, printing a clean reference, or reading up a shape before you answer. If you know your form of the 4, the test works without it.",
    },
    {
      q: "Is there a Chinese version?",
      a: "The Chinese test uses five hard-pen questions at /zh, with its own tools hub at /zh/tools. It is a separate question set rather than a translation, and its pages are in Chinese.",
    },
    {
      q: "Where can I learn more?",
      a: "Read the methodology page for the scoring and the shape choices, the science page for the evidence on graphology, the guides for individual letterforms, and the articles for the longer argument.",
    },
  ],
  ctaLabel: "Take the 12-shape test",
  ctaHref: "/#test",
  ctaNote: "Eight answers are enough for a result. The test is free, needs no account, and never asks for a handwriting sample.",
  updatedLabel: "Last updated 21 October 2026",
};

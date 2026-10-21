import type { Guide } from "./types";

export const spacing: Guide = {
  slug: "spacing",
  title: "Handwriting spacing",
  description: "Tight, even, and wide gaps between words, how spacing is taught, and what a gap cannot reveal.",
  questionId: "spacing",
  figures: [
    { file: "spacing-tight.svg", caption: "Tight: the next word starts almost where the last stroke ended." },
    { file: "spacing-even.svg", caption: "Even: the gap is about the width of one letter, the usual classroom target." },
    { file: "spacing-wide.svg", caption: "Wide: a clear band of paper sits between the words." },
  ],
  origin: [
    "Most school models set one target for the gap between words: about the width of a single lowercase letter. Copybooks draw it with a guide line, and teachers mark a crowded line or a stretched one. Even spacing is a legibility rule, not a personality type, and it is taught the same way in every classroom that has a handwriting book.",
    "Tight spacing comes from somewhere small. A narrow form box, a list written in the margin, a note taken while standing, and a line written fast all squeeze the gap. The writer is not choosing to be close. The words are simply running out of room and the hand keeps going, so the next word starts before the last one has properly finished.",
    "Wide spacing comes from care or from room. When a writer places each word deliberately, the gap opens. A large hand, a generous page, and a letter written on good paper all make it easier to set words down with space between them. The same effect appears when someone copies a printed line and keeps the words apart to stay in the model.",
    "Copying is the most common teacher. A filled-in form, a shopping list written from a screen, a name off an envelope, and a birthday card all train the hand without a lesson in the room. People who copy from print often keep the gaps of print, and people who copy from a joined example keep its rhythm, whether they noticed the spacing at all or not.",
    "What looks like spacing is sometimes a change in letter size. When the letters grow, the gap between the words can look wide even when the distance is the same. When the letters shrink, the gap looks tight. Measure the gap next to the letter width and not against the page, and the two effects separate cleanly.",
    "In real notes the gap moves with the page, not with the writer. A lined sheet, a blank card, a shopping list, and a long letter each get their own spacing from the same hand. A hurried line runs tight. A carefully addressed envelope opens up. The habit is stable; the layout is not, and one page tells you about that page.",
  ],
  limits: [
    "Wide spacing is not loneliness and tight spacing is not a crowded mind. Those readings treat a gap as a metaphor for an inner state, which is a leap the page cannot support. What you can measure is a distance on paper, in millimetres, between two words, and nothing underneath it.",
    "The tool changes what a gap looks like. A broad felt tip fills the space and makes a tight gap look tight. A fine pen leaves the same movement looking wide. Compare gaps inside one sample, with one pen, before you compare two people or two pages, and note the paper you used.",
    "Speed and fatigue narrow the gap before the page shows it. Written slowly, a word ends and a new one begins. Written fast, the pen carries straight on and the space closes. The same writer leaves a gap of one kind in a diary and another in a list of tasks, and neither one is a mood.",
    "Paper, ruling, and the box on a form also set the gap. A ruled line gives a fixed measure, and a printed box with a narrow column leaves no room to open up. When the writing has to fit, the spacing is a property of the container, and the writer works with what is in front of them.",
    "So the gap is a habit, not a trait. It is a distance that a hand keeps, taught by a model and altered by the room, the pen, and the hurry. Read it as layout and it is useful for describing a page. Read it as personality and it says nothing at all about the person who wrote the line.",
  ],
  checkSteps: [
    "Write four or five words on a lined sheet in your normal hand, then write the same words on a blank page. Compare the gaps side by side.",
    "Measure one gap against the width of a lowercase n beside it. Even sits near the letter width, tight closer, wider clearly beyond it.",
    "Check the whole line, not one gap. Spacing that changes from gap to gap is a speed and habit pattern, not a fixed setting.",
    "Rewrite the line quickly and look again. If the gap narrows under speed, the spacing is a moving habit rather than a settled one.",
  ],
  useCases: [
    {
      h3: "Filling a narrow form",
      body: "Boxes on a form set their own spacing, and a tight gap can push a line past the edge. Knowing your natural gap tells you whether to shrink the letters, tighten the line, or ask for a wider field before the writing runs out of room. A form does not reward a roomy hand.",
    },
    {
      h3: "Matching a house style",
      body: "A shared set of forms, a lab notebook, or a classroom workbook wants one consistent hand. If everyone writes with a different gap, the page reads as a patchwork. Agreeing a target gap, usually one letter width, is a decision about the document, not about the writer who fills it in.",
    },
    {
      h3: "Reading an old letter",
      body: "Letters from earlier in life, or from a relative you never met, are often wider or tighter than you expect. Knowing the habits of the period, and what a form of the time asked for, keeps the gap as evidence about the writing rather than about the writer. Read it as a date and a habit.",
    },
  ],
  related: [
    { href: "/guides/slant", label: "Handwriting slant", note: "The lean of the stems, and why the angle belongs to the page." },
    { href: "/tools/sample-chart", label: "Handwriting sample chart", note: "See all twelve forms, including the three spacing examples." },
    { href: "/guides/one", label: "How to write the number 1", note: "A digit with a flag and a foot, and what the extra marks do." },
    { href: "/guides/signature-size", label: "Signature size guide", note: "How large a signature usually is, and what size can show." },
    { href: "/methodology", label: "How this site is built", note: "The rules behind the questions, the scoring, and the labels." },
  ],
  faqs: [
    {
      q: "What is normal handwriting spacing?",
      a: "School models aim for a gap about as wide as a single lowercase letter such as n or o. Adult notes wander around that target and often narrow under speed, so a hurried page has a smaller gap than a careful one.",
    },
    {
      q: "What does wide handwriting spacing mean?",
      a: "It means the words are far apart on that page. It can be the model, the hurry, the pen, or the size of the paper. A wide gap is a layout made by the conditions, and it is not a social trait.",
    },
    {
      q: "What does tight spacing mean?",
      a: "The next word starts close to where the previous one ended. Fast writing, small boxes, and a rushed line all produce it. Read the gap on the page, compare it with the letter width beside it, and treat it as a layout fact.",
    },
    {
      q: "Can I measure spacing from a photo?",
      a: "You can compare gaps inside that photo if the page is flat and the camera is square to it. You still cannot see pen pressure or speed, and a wide lens makes the gaps near the edges of the frame look longer.",
    },
    {
      q: "Why is my handwriting spacing tight?",
      a: "Small boxes, a fast line, and a fine pen all narrow the gap. A form field and a shopping list produce different spacing from the same hand on the same afternoon, so the tight version is usually about the situation rather than the writer.",
    },
    {
      q: "How much space should be between words in school?",
      a: "About the width of one lowercase letter, such as n or o. The target is legibility: clear word breaks without stretching the line past the margin, and enough room for a reader to find the next word without hunting for it.",
    },
    {
      q: "Does wide spacing look neater?",
      a: "On ruled paper, even gaps often read as neater because the words sit in a steady rhythm. A wide gap can also look deliberate. Both are layouts, and a reader reacts to the shape of the page, not to a claim about you.",
    },
    {
      q: "Does handwriting spacing change from one page to another?",
      a: "It does, and the reasons are ordinary. A hurried note runs tight, a carefully written list opens up, and a narrow box squeezes the words together. The gap tracks the conditions of the writing, not a state of mind, and the habit stays put.",
    },
  ],
};

import type { Guide } from "./types";

export const zero: Guide = {
  slug: "zero",
  title: "Slashed zero handwriting",
  description: "How a slash through 0 keeps it distinct from the letter O, and why the habit is technical rather than personal.",
  questionId: "zero",
  figures: [
    { file: "plain-zero.svg", caption: "Plain 0: a closed oval, the ordinary numeral." },
    { file: "slashed-zero.svg", caption: "Slashed 0: a diagonal through the oval so it cannot be read as the letter O." },
  ],
  origin: [
    "A plain zero is a closed oval, and it is the easiest numeral to teach. Copybooks start with the round shapes and narrow them afterwards. The stroke goes up one side and comes down the other in a single movement, which is why the plain oval is the form most people use in ordinary sentences.",
    "The slashed zero is a disambiguation mark: a diagonal stroke through the oval so the numeral cannot be read as a capital O. It shows up wherever a zero has to live beside a letter O, in serial numbers, part codes, account numbers, licence plates, and typed forms where both shapes are possible at once.",
    "The habit spread out of technical work. Engineers, programmers, machinists and lab technicians pick it up early and keep it in ordinary writing, so a slashed zero can turn up in a shopping list years later. It is a job-related habit that migrated into general use, not a decision about numbers in general. Most people who carry the slash had a workplace that put it in front of them.",
    "Typewriters had the same problem and solved it differently. Some typed a lowercase o for the numeral, some put a slash on the zero key itself, and later fonts used a diagonal stroke. Printed pages taught the eye all of these, so people who read a lot of codes learned to expect a mark inside the zero.",
    "Where people copy from now, the keyboard leads. A monospaced font on a terminal or in a code editor shows a slashed or dotted zero, and a printed form for a serial number may show the model zero in its instructions. Copying that model reproduces the slash, whether it was your own habit or not.",
    "In real notes the mark is situational. In a running sentence the context does the work and the zero stays plain. In a phone number, a date, a postcode, or a code, the writer is being careful and the slash appears. The same person writes both, which is why one sample is not enough, and why the mark turns up hardest where a mistake would cost something.",
  ],
  limits: [
    "A slashed zero does not show a precise mind or a suspicious one. It shows that the writer has needed a zero to stay distinct from a letter O at some point. If you have never had that problem, your plain oval is not a lack of care.",
    "The mark is bound to context. A writer may slash every zero in a serial number and leave the zeros in a grocery list plain. One digit on one line describes that line, and it does not describe the person holding the pen. A plain oval in a list of figures is easy to read, and it is only worth marking when a letter could be mistaken for it.",
    "The instrument changes what you see. A skipping pen can turn a slash into two separate dots, and a thin diagonal can disappear in a photocopy. A plain zero in a scanned document may have carried a slash on the paper, and a bright photograph can thin the diagonal to nothing.",
    "Speed and tiredness change it too. A hurried zero can shrink to a small circle, and a slash can be left half finished at the end of a long evening. A habit held loosely is still a habit, and a habit is not a trait.",
    "Graphology has had meanings for the slash for a long time, usually about precision or about suspicion. The evidence does not support reading a digit that way. In Neter and Ben-Shakhar, 1989, Personality and Individual Differences, volume 10, pages 737–745, a meta-analysis of 17 studies on graphology in hiring, graphologists scored near zero on neutral writing.",
  ],
  checkSteps: [
    "Write a string of digits the way you normally write them: a postcode, a date, a phone number. Use your own pen and your usual speed.",
    "Look at the zeros. A closed oval with nothing inside is the plain zero. A diagonal line through the middle is the slashed zero.",
    "Check where the slash appears. If it turns up in codes and dates but not in a quick note, the mark follows the stakes of the line.",
    "Now write ten zeros fast, then ten slowly. If the slash appears only when you slow down, or vanishes when you hurry, note which one is your default.",
  ],
  useCases: [
    {
      h3: "Reading part numbers",
      body: "A warehouse label, a serial plate, or a replacement part can hinge on one digit. A slashed zero tells a reader at a glance that the character is a number, and a dot or a plain oval in the same field is still perfectly legible. The mark is a convenience, not a code.",
    },
    {
      h3: "Filling in a form",
      body: "Forms that print a model zero, especially postcode and licence boxes, are asking you to copy it. Following the printed example keeps the clerk's job easy and keeps the form consistent. Read the instruction line, because some forms specify a slashed zero and some specify a plain one.",
    },
    {
      h3: "Teaching numerals",
      body: "If a child adds a slash to the zero, there is no reason to correct it. It is a sensible way to keep zero and the letter O apart, and many adults write it that way. What matters is that the numeral stays readable and that the child knows why the mark is there.",
    },
  ],
  related: [
    { href: "/#q-zero", label: "Try the zero in the test", note: "Pick the plain or the slashed version and watch the tally." },
    { href: "/guides/seven", label: "The number seven", note: "Another numeral where people add a bar to keep it distinct." },
    { href: "/guides/one", label: "The number one", note: "The other digit that gets a mark added to stop a mix-up." },
    { href: "/tools/sample-chart", label: "Handwriting sample chart", note: "The test shapes on one page, including the zero forms." },
    { href: "/blog/graphology", label: "Graphology and the evidence", note: "What the research supports, and what it does not." },
  ],
  faqs: [
    {
      q: "Why do people slash their zeros?",
      a: "So the numeral 0 is not misread as the letter O, especially in codes, dates, and handwritten identifiers. The slash is the same idea as the bar on a 7.",
    },
    {
      q: "Is a slashed zero the same as the slashed zero in fonts?",
      a: "Same job. Monospaced fonts slash or dot the zero for the same reason a person does it with a pen, so the two are easy to confuse.",
    },
    {
      q: "Does a slashed zero mean the writer works in technology?",
      a: "Often they learned it there, but not always. The mark itself only says they wanted 0 to stay distinct from O. It is not a biography.",
    },
    {
      q: "Can handwriting analysis use a slashed zero as a personality sign?",
      a: "It should not. The slash has a practical origin, and treating it as a trait ignores that origin. A digit is not a personality sign.",
    },
    {
      q: "Is a slashed zero considered wrong?",
      a: "No. It is a long standing practical habit, common in technical work and accepted everywhere else. Nobody has ever agreed on a single right way to write a zero.",
    },
    {
      q: "What is a dotted zero?",
      a: "A zero with a small dot in the middle, used in some fonts and by some typists so the numeral is not confused with a letter O. It does the same job as the slash.",
    },
    {
      q: "Why do some fonts have a slashed zero?",
      a: "Because the character has to be unambiguous in a column of code or a table of figures. The font is doing the job the pen does, and readers of the font learn the mark quickly.",
    },
    {
      q: "Should I teach my child to slash zeros?",
      a: "Only if it helps them. A child who keeps zero apart from the letter O is doing something sensible, and there is no style argument to win here. Let the mark be a tool.",
    },
  ],
};

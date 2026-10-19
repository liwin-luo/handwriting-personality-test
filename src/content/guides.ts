export type GuideFigure = { file: string; caption: string };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  questionId: string;
  figures: GuideFigure[];
  origin: string[];
  limits: string[];
  faqs: { q: string; a: string }[];
};

export const guides: Guide[] = [
  {
    slug: "four",
    title: "Open 4 or closed 4",
    description: "How to tell an open 4 from a closed 4, where each form is taught, and what the shape cannot say about a person.",
    questionId: "four",
    figures: [
      { file: "open-four.svg", caption: "Open 4: the crossbar and stem leave the left side of the counter open." },
      { file: "closed-four.svg", caption: "Closed 4: the diagonal meets the crossbar and makes a triangle." },
    ],
    origin: [
      "The open 4 is the usual handwritten form in much of the United States. The pen makes a stem, a bar, and a diagonal that does not have to meet.",
      "The closed 4 is common in many European school scripts, and some American teachers still demonstrate it. The triangle is a small closed counter, closer to the printed numeral.",
    ],
    limits: [
      "An open or closed 4 does not show whether someone is creative, rigid, or honest. It shows which model they practiced, and sometimes which one they saw on a keyboard or a chalkboard.",
      "One numeral is not a personality. People switch forms in the same paragraph when they slow down or copy a printed digit.",
    ],
    faqs: [
      {
        q: "What is an open 4 in handwriting?",
        a: "An open 4 leaves the counter unclosed. You can see a stem, a crossbar, and a diagonal, and the left side of the shape does not form a triangle.",
      },
      {
        q: "What is a closed 4?",
        a: "A closed 4 joins the diagonal to the crossbar so the top is a triangle, then continues the stem downward.",
      },
      {
        q: "Does an open 4 mean a different personality from a closed 4?",
        a: "No. The two forms are taught in different places. The test on this site files the shape you picked. It does not read a trait from it.",
      },
      {
        q: "Can the same person write both?",
        a: "Yes. A careful copy of a printed 4 is often closed. A fast note is often open. Both can appear on one page.",
      },
    ],
  },
  {
    slug: "seven",
    title: "Crossed 7 handwriting",
    description: "Why some people put a bar through 7, how to see it, and why the bar is not a personality mark.",
    questionId: "seven",
    figures: [
      { file: "plain-seven.svg", caption: "Plain 7: two strokes, a top bar and a diagonal, with nothing through the stem." },
      { file: "crossed-seven.svg", caption: "Crossed 7: a short horizontal cuts the diagonal so 7 stays distinct from 1." },
    ],
    origin: [
      "A crossed 7 is a practical distinction. In handwriting where 1 has a flag or a base, an uncrossed 7 can be misread as 1. The bar is common in much of Europe, Latin America, and in technical notes elsewhere.",
      "A plain 7 is the form many American copybooks stop at. Nothing is missing from it. The reader is expected to tell 7 from 1 by context.",
    ],
    limits: [
      "The crossbar does not measure carefulness as a trait. It is a convention, like crossing a t. People drop it when they are in a hurry and add it when a number has to be unambiguous.",
      "Do not treat a crossed 7 on a form as evidence about the writer. It is evidence about the digit.",
    ],
    faqs: [
      {
        q: "Why do people cross their 7s?",
        a: "To keep 7 from looking like 1, especially where the handwritten 1 has a serif or a base.",
      },
      {
        q: "Is a crossed 7 more correct?",
        a: "It is correct where that model was taught. A plain 7 is correct where it was not. Both are readable.",
      },
      {
        q: "Does a crossed 7 show a precise personality?",
        a: "No. It shows a writing habit used to protect a number. Precision in one digit is not precision as a character.",
      },
      {
        q: "Should I cross a 7 in the test if I only sometimes do?",
        a: "Pick the form you use in ordinary notes. If you truly do both, either choice is fair, and you can change it from the result.",
      },
    ],
  },
  {
    slug: "a",
    title: "Single-storey a or double-storey a",
    description: "The handwritten a with one counter, the printed a with two, and why the choice is a model rather than a trait.",
    questionId: "a",
    figures: [
      { file: "single-storey-a.svg", caption: "Single-storey a: one counter and a side stroke, the usual handwritten form." },
      { file: "double-storey-a.svg", caption: "Double-storey a: two counters, the form used in most printed type." },
    ],
    origin: [
      "Almost every Latin school script teaches the single-storey a for handwriting. It is one circle and a short side stroke. Children can write it without lifting into a second counter.",
      "The double-storey a is the printed letter. Some people keep it in their handwriting because they copied type, because a lettering style asked for it, or because they print more than they join.",
    ],
    limits: [
      "A double-storey a does not mean someone is formal, and a single-storey a does not mean they are casual. The first is a print form. The second is a script form.",
      "This page is about the Latin letter a. It has no equivalent stroke in Chinese handwriting. A Chinese sample needs its own questions.",
    ],
    faqs: [
      {
        q: "What is a single-storey a?",
        a: "A handwritten a with one enclosed counter, like a small circle with a stem on the right. It is sometimes called the script a.",
      },
      {
        q: "What is a double-storey a?",
        a: "The printed a, with a small closed counter on top and a larger one below. Typed text uses this form.",
      },
      {
        q: "Which a do most adults write?",
        a: "Most handwritten Latin a's are single-storey. The double-storey form is less common in running notes and more common when someone is printing.",
      },
      {
        q: "Can you judge personality from the letter a?",
        a: "No. You can see which model the stroke follows. You cannot see temperament, honesty, or ability.",
      },
    ],
  },
  {
    slug: "g",
    title: "How do you write a lowercase g",
    description: "Open hooks and closed loops on g, where the descender comes from, and what it cannot predict.",
    questionId: "g",
    figures: [
      { file: "open-g.svg", caption: "Open g: the bowl sits on the line and the tail hooks without closing." },
      { file: "looped-g.svg", caption: "Looped g: the descender returns and closes a loop below the line." },
    ],
    origin: [
      "Copybooks disagree on purpose. Some print models use an open tail, close to the printed g. Joined scripts such as cursive and italic often close a loop so the pen can leave toward the next letter.",
      "The loop is a path for the pen, not a decoration the writer invented. A person who was taught cursive g will loop it even in a note that is otherwise printed.",
    ],
    limits: [
      "A looped g does not show imagination, and an open g does not show bluntness. Both are finishes taught to children.",
      "The loop also changes with speed. A closed loop at a desk can open into a hook on a postcard. That is the pen moving faster, not a change of personality.",
    ],
    faqs: [
      {
        q: "Is a looped g the cursive g?",
        a: "It is the usual cursive and italic finish. The pen drops below the baseline and comes back up so it can join the next letter.",
      },
      {
        q: "Is an open g wrong?",
        a: "No. Print models and many adult hands leave the tail open. The letter is still a g if the bowl and the descender are there.",
      },
      {
        q: "Does the g loop mean the writer is expressive?",
        a: "No. The loop is a taught motor path. Expressiveness is not visible in one descender.",
      },
      {
        q: "What about the two-storey printed g?",
        a: "The printed g has an ear and a closed lower bowl. This test uses the two handwritten finishes people actually produce: an open hook and a loop.",
      },
    ],
  },
  {
    slug: "zero",
    title: "Slashed zero handwriting",
    description: "How a slash through 0 keeps it distinct from the letter O, and why the habit is technical rather than personal.",
    questionId: "zero",
    figures: [
      { file: "plain-zero.svg", caption: "Plain 0: a closed oval, the ordinary numeral." },
      { file: "slashed-zero.svg", caption: "Slashed 0: a diagonal through the oval so it cannot be read as the letter O." },
    ],
    origin: [
      "Programmers, engineers, and anyone who copies codes slash a zero because O and 0 share a skeleton. The slash is a disambiguation mark, like the bar on a 7. It spread from technical handwriting and from fonts that already included it.",
      "A plain zero is still the form most people write in prose. The oval is enough when the surrounding characters are words rather than serial numbers.",
    ],
    limits: [
      "A slashed zero does not show a precise or suspicious personality. It shows that the writer has needed 0 to survive next to O.",
      "A photograph of the slash cannot tell you the pressure of the pen. You can see the line. You cannot see how hard it was pressed.",
    ],
    faqs: [
      {
        q: "Why do people slash their zeros?",
        a: "So the numeral 0 is not misread as the letter O, especially in codes, dates, and handwritten identifiers.",
      },
      {
        q: "Is a slashed zero the same as the slashed zero in fonts?",
        a: "Same job. Monospaced fonts slash or dot the zero for the same reason a person does it with a pen.",
      },
      {
        q: "Does a slashed zero mean the writer works in technology?",
        a: "Often they learned it there, but not always. The mark itself only says they wanted 0 to stay distinct. It is not a biography.",
      },
      {
        q: "Can handwriting analysis use a slashed zero as a personality sign?",
        a: "It should not. The slash has a practical origin. Treating it as a trait ignores that origin.",
      },
    ],
  },
  {
    slug: "ampersand",
    title: "How do you write an ampersand",
    description: "The plus sign, the et ligature, and the flourished &, with the history of the mark and the limits of reading it.",
    questionId: "ampersand",
    figures: [
      { file: "plus-ampersand.svg", caption: "A plus sign standing in for and. Fast notes often stop here." },
      { file: "traditional-ampersand.svg", caption: "The traditional &: a reduced ligature of the Latin word et." },
      { file: "flourished-ampersand.svg", caption: "A flourished &: the same ligature with an extra sweeping stroke." },
    ],
    origin: [
      "The ampersand is not a letter invented for handwriting tests. It is the Latin word et, meaning and, collapsed into one mark. The traditional form still has a back and a cross if you look for them.",
      "A plus sign is a substitute, not a failed ampersand. People use it because + already means and in notes. A flourish is lettering: the writer has seen decorative ampersands and kept a piece of one.",
    ],
    limits: [
      "The flourish does not show an artistic personality, and the plus sign does not show impatience as a trait. One is decoration learned from print. The other is a shortcut.",
      "An ampersand is a Latin mark. It does not belong in a description of Chinese handwriting. This guide stays with the symbol it shows.",
    ],
    faqs: [
      {
        q: "What does an ampersand come from?",
        a: "From et, the Latin word for and. The two letters were tied together until they became one symbol.",
      },
      {
        q: "Is writing a plus sign instead of & incorrect?",
        a: "In a formal word it is informal. In a note it is ordinary. The test treats it as a shape people really use.",
      },
      {
        q: "Does a fancy ampersand mean a creative person?",
        a: "It means a fancy ampersand. Creativity is not measured by one symbol, and this site does not try.",
      },
      {
        q: "How many ampersand forms are in the test?",
        a: "Three: a plus sign, a traditional et form, and a flourished form. Pick the closest, not a perfect match.",
      },
    ],
  },
  {
    slug: "slant",
    title: "Handwriting slant",
    description: "How to see left, upright, and right slant against a baseline, and why the angle is not a reading of mood.",
    questionId: "slant",
    figures: [
      { file: "slant-left.svg", caption: "Left of vertical. The top of the stroke sits to the left of the base." },
      { file: "slant-upright.svg", caption: "Near vertical. Downstrokes stay close to upright." },
      { file: "slant-right.svg", caption: "Right of vertical, the lean taught in italic and many cursive models." },
    ],
    origin: [
      "Right slant is built into italic and into a lot of cursive instruction. The model slants, so the student slants. Upright writing follows print and manuscript models that keep the stem vertical.",
      "Left slant is less often the model on the page. It can come from a left-handed writer pulling the pen, from a personal drift away from the model, or from the paper sitting at an angle. The cause is not visible in the finished stroke.",
    ],
    limits: [
      "Slant does not show whether someone is open, guarded, or future-oriented. Those are graphology claims. Controlled studies do not find that strangers can read personality from slant better than chance in any stable way.",
      "A photo also cannot show the speed of the stroke. You can see the lean. You cannot see how fast the hand moved, and you cannot recover the pressure from a picture of the ink.",
    ],
    faqs: [
      {
        q: "What does handwriting slant mean?",
        a: "On this site it means the visible lean of the downstrokes: left, upright, or right. It does not mean a mood or a social style.",
      },
      {
        q: "How do I judge slant from a page?",
        a: "Look at the downstrokes of m, n, t, or l against the baseline or the edge of the paper. One letter is a weak sample. A row of them is enough to see the lean.",
      },
      {
        q: "Is right slant the correct slant?",
        a: "It is the slant of italic and of many cursive books. Upright is the slant of most print models. Left is a real outcome. None of the three is a diagnosis.",
      },
      {
        q: "Can slant change in one day?",
        a: "Yes. Paper angle, pen, fatigue, and the model you are copying all move it. A change in slant is not a change in personality.",
      },
      {
        q: "Is graphology real?",
        a: "Graphology claims that slant and similar marks predict personality. That claim is not supported well enough to use. The science page says what the evidence allows.",
      },
    ],
  },
  {
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
      "Teachers usually ask for a gap about one letter wide, wide enough to see the words and narrow enough to keep the line. Even spacing is a classroom target, not a personality type.",
      "Tight spacing shows up in fast notes and in small spaces, such as a form box. Wide spacing shows up when the writer is placing words carefully, when the hand is large, or when the line has room to spare.",
    ],
    limits: [
      "Wide spacing does not mean loneliness, and tight spacing does not mean a crowded mind. Those readings treat a gap as a metaphor. The gap is a distance on paper.",
      "Spacing moves with the tool. A broad pen fills a tight gap. A fine pen makes the same motion look wide. Compare spacing inside one sample before you compare two people.",
    ],
    faqs: [
      {
        q: "What is normal handwriting spacing?",
        a: "School models aim for a gap about as wide as a single letter such as n or o. Adult notes wander around that target.",
      },
      {
        q: "What does wide handwriting spacing mean?",
        a: "It means the words are far apart on that page. It can be the model, the hurry, the pen, or the size of the paper. It does not mean a social trait.",
      },
      {
        q: "What does tight spacing mean?",
        a: "The next word starts close to the previous one. Fast writing and small boxes both produce it. It is a layout fact.",
      },
      {
        q: "Can I measure spacing from a photo?",
        a: "You can compare gaps inside that photo if the page is flat and the camera is square to it. You still cannot see pen pressure or speed.",
      },
    ],
  },
];

export const guideBySlug: Record<string, Guide> = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));

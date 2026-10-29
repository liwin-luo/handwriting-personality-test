const w = (structure = 0, finish = 0, rhythm = 0, character = 0) => ({
  structure,
  finish,
  rhythm,
  character,
});

const opt = (id, label, alt, weights) => ({ id, file: `${id}.svg`, label, alt, weights });

/** 选项 0 的全选向量在 score.test.mjs 里锁定为 Everyday Minimalist。新题的第一项只加收笔，单项上限保持 2。 */
export const questions = [
  {
    id: "four",
    group: "digit",
    title: "The number 4",
    prompt: "Which 4 is closest to yours?",
    options: [
      opt("open-four", "Open 4", "Open 4 with a crossbar and no closed triangle", w(0, 0, 1, 2)),
      opt("closed-four", "Closed 4", "Closed 4 with a triangular top", w(2, 1, 0, 0)),
      opt("curved-four", "Curved 4", "An open 4 whose stem bends instead of meeting", w(0, 0, 0, 2)),
    ],
  },
  {
    id: "seven",
    group: "digit",
    title: "The number 7",
    prompt: "Which 7 is closest to yours?",
    options: [
      opt("plain-seven", "Plain 7", "A 7 with no crossbar", w(1, 2, 0, 0)),
      opt("crossed-seven", "Crossed 7", "A 7 with a horizontal crossbar", w(2, 0, 0, 1)),
    ],
  },
  {
    id: "two",
    group: "digit",
    title: "The number 2",
    prompt: "Which 2 is closest to yours?",
    options: [
      opt("curved-two", "Curved 2", "A 2 with the usual curve", w(0, 2, 0, 0)),
      opt("zed-two", "Angular 2", "A 2 made of straight corners, like a Z", w(2, 0, 0, 0)),
      opt("looped-two", "Looped 2", "A 2 that closes a loop at the bottom", w(0, 0, 0, 2)),
    ],
  },
  {
    id: "five",
    group: "digit",
    title: "The number 5",
    prompt: "Which 5 is closest to yours?",
    options: [
      opt("plain-five", "Plain 5", "A 5 with a short top and a closed bowl", w(0, 2, 0, 0)),
      opt("hatted-five", "Hatted 5", "A 5 with a flat bar across the top", w(2, 0, 0, 0)),
      opt("open-five", "Open 5", "A 5 whose bowl does not close", w(0, 0, 0, 2)),
    ],
  },
  {
    id: "eight",
    group: "digit",
    title: "The number 8",
    prompt: "Which 8 is closest to yours?",
    options: [
      opt("plain-eight", "One stroke", "An 8 drawn as one continuous stroke", w(0, 2, 0, 0)),
      opt("stacked-eight", "Two circles", "An 8 made of two stacked circles", w(2, 0, 0, 0)),
      opt("looped-eight", "With a tail", "An 8 with an extra stroke below", w(0, 0, 0, 2)),
    ],
  },
  {
    id: "nine",
    group: "digit",
    title: "The number 9",
    prompt: "Which 9 is closest to yours?",
    options: [
      opt("hook-nine", "Open hook", "A 9 whose stem stays an open hook", w(0, 2, 0, 0)),
      opt("closed-nine", "Closed loop", "A 9 with a closed upper loop", w(2, 0, 0, 0)),
      opt("tailed-nine", "Long tail", "A 9 whose stem keeps going", w(0, 0, 0, 2)),
    ],
  },
  {
    id: "zero",
    group: "digit",
    title: "The number 0",
    prompt: "Which 0 is closest to yours?",
    options: [
      opt("plain-zero", "Plain 0", "An oval zero with no slash", w(0, 2, 1, 0)),
      opt("slashed-zero", "Slashed 0", "A zero with a diagonal slash", w(2, 0, 0, 0)),
      opt("dotted-zero", "Dotted 0", "A zero with a dot in the middle", w(2, 0, 0, 0)),
    ],
  },
  {
    id: "one",
    group: "digit",
    title: "The number 1",
    prompt: "Which 1 is closest to yours?",
    options: [
      opt("plain-one", "Plain stroke", "A 1 drawn as one straight stroke", w(0, 2, 0, 0)),
      opt("serif-one", "With a foot", "A 1 with a top flag and a base", w(1, 0, 0, 1)),
    ],
  },
  {
    id: "a",
    group: "letter",
    title: "The letter a",
    prompt: "Which a is closest to yours?",
    options: [
      opt("single-storey-a", "Single storey", "Single-storey handwritten a, one counter", w(0, 0, 2, 1)),
      opt("double-storey-a", "Double storey", "Double-storey a like the printed letter", w(2, 1, 0, 0)),
    ],
  },
  {
    id: "g",
    group: "letter",
    title: "The letter g",
    prompt: "Which g is closest to yours?",
    options: [
      opt("open-g", "Open tail", "Lowercase g with an open hook", w(0, 2, 0, 0)),
      opt("looped-g", "Looped tail", "Lowercase g with a closed loop", w(0, 0, 1, 2)),
      opt("print-g", "Printed g", "Double-storey g with an ear and a closed lower bowl", w(2, 0, 0, 0)),
    ],
  },
  {
    id: "gee",
    group: "letter",
    title: "Capital G",
    prompt: "Which capital G is closest to yours?",
    options: [
      opt("spur-gee", "With a spur", "A capital G with a short inward spur", w(0, 2, 0, 0)),
      opt("print-gee", "Printed G", "A capital G like the printed letter", w(2, 0, 0, 0)),
      opt("loop-gee", "With a flourish", "A capital G with an extra sweeping stroke", w(0, 0, 0, 2)),
    ],
  },
  {
    id: "t",
    group: "letter",
    title: "The letter t",
    prompt: "Where is the bar on your t?",
    options: [
      opt("uncrossed-t", "No bar", "A t stem with no crossbar", w(0, 0, 1, 2)),
      opt("mid-t", "Through the middle", "A t crossed at mid-height", w(2, 1, 0, 0)),
      opt("high-t", "Near the top", "A t crossed high on the stem", w(0, 0, 2, 1)),
    ],
  },
  {
    id: "i",
    group: "letter",
    title: "The letter i",
    prompt: "Where does the dot sit?",
    options: [
      opt("dotted-i-close", "Close dot", "An i with the dot close to the stem", w(1, 2, 0, 0)),
      opt("dotted-i-high", "High dot", "An i with the dot high above the stem", w(0, 0, 2, 1)),
      opt("dotted-i-circle", "Circle", "An i with an open circle instead of a dot", w(0, 0, 0, 2)),
    ],
  },
  {
    id: "y",
    group: "letter",
    title: "The letter y",
    prompt: "Which y is closest to yours?",
    options: [
      opt("straight-y", "Straight tail", "A y with a straight descender", w(1, 2, 0, 0)),
      opt("looped-y", "Looped tail", "A y with a looped descender", w(0, 0, 1, 2)),
    ],
  },
  {
    id: "ampersand",
    group: "symbol",
    title: "The ampersand",
    prompt: "Which & is closest to yours?",
    options: [
      opt("plus-ampersand", "A plus sign", "A plus sign used in place of an ampersand", w(0, 2, 0, 0)),
      opt("traditional-ampersand", "The et form", "A traditional ampersand from the Latin et ligature", w(1, 0, 0, 1)),
      opt("flourished-ampersand", "With a flourish", "An ampersand with an extra sweeping stroke", w(0, 0, 2, 2)),
    ],
  },
  {
    id: "size",
    group: "size",
    title: "Letter size",
    prompt: "How tall are the letters in an ordinary note?",
    options: [
      opt("size-mid", "Ordinary", "Letters about the height of a normal note", w(0, 2, 0, 0)),
      opt("size-small", "Small", "Small letters sitting on the line", w(2, 0, 0, 0)),
      opt("size-large", "Large", "Letters that fill the line", w(0, 0, 2, 0)),
    ],
  },
  {
    id: "spacing",
    group: "spacing",
    title: "Word spacing",
    prompt: "How wide are the gaps between your words?",
    options: [
      opt("spacing-tight", "Tight", "Two words with a tight gap", w(0, 1, 2, 0)),
      opt("spacing-even", "Even", "Two words with an even gap about one letter wide", w(2, 0, 1, 0)),
      opt("spacing-wide", "Wide", "Two words with a wide gap", w(0, 0, 2, 1)),
    ],
  },
  {
    id: "link",
    group: "link",
    title: "Letter joins",
    prompt: "Do the letters in a word touch?",
    options: [
      opt("link-none", "Separate", "Letters that do not touch", w(0, 2, 0, 0)),
      opt("link-some", "Some joins", "A few letters joined, the rest apart", w(0, 0, 2, 0)),
      opt("link-all", "Continuous", "Letters joined all the way through the word", w(0, 0, 0, 2)),
    ],
  },
  {
    id: "slant",
    group: "slant",
    title: "Slant",
    prompt: "Which way do your downstrokes lean?",
    options: [
      opt("slant-left", "Left", "Downstrokes leaning left of vertical", w(0, 0, 1, 2)),
      opt("slant-upright", "Upright", "Downstrokes near vertical", w(2, 1, 0, 0)),
      opt("slant-right", "Right", "Downstrokes leaning right, as in italic", w(0, 0, 2, 1)),
    ],
  },
];

export const profiles = [
  {
    slug: "quiet-architect",
    name: "Quiet Architect",
    sentence: "You close the shapes that can be closed.",
    direction: "structure",
    guides: ["four", "zero"],
    aside: "The copybook would nod. That nod is about the counters, not about your character.",
    practice: "Write one line of open 4s and one line of closed 4s at the same speed. Keep the line you can still read.",
    examples: ["closed-four.svg", "double-storey-a.svg", "slashed-zero.svg"],
    paragraphs: [
      "Closed 4s, double-storey a's, slashed zeros, and upright stems pile up on this result. Quiet Architect is the name for that pile. It means the page prefers shapes with a finished counter and a clear midline.",
      "It does not mean you are quiet, organized, or suited to a particular job. School models, a technical habit such as slashing a zero, and the pen you used are enough to explain the same marks.",
    ],
    sections: [
      {
        id: "structure-tally",
        h2: "Where the structure tally comes from",
        paragraphs: [
          "Structure is the tally that counts closed counters and fixed midlines. A closed 4 adds two points to it; so does a double-storey a, a slashed zero, a dotted zero, an angular 2, a hatted 5, a two-circle 8, a closed-loop 9, a printed g, a printed capital G, a t crossed through the middle, even word gaps, small letters, and upright downstrokes. Quiet Architect is the name given when that pile leads every other tally by three points or more.",
          "The three-point threshold is the whole reason the result is readable. Below it, a single answer worth two points can change which name you get, so the scorer reports a tie instead of inventing a leader. A clear structure lead therefore says one narrow, checkable thing: the shapes you picked close what can be closed more often than they add an extra mark.",
          "What that lead does not measure: neatness, accuracy, spelling, or the effort that went into the page. A slow, careful writer and a fast one can both close every counter. Two people with identical pages can differ in every trait a reader might guess from them, which is why the label stops at the shapes.",
        ],
      },
      {
        id: "other-explanations",
        h2: "What else produces the same page",
        paragraphs: [
          "A closed 4 is the form taught in many continental European school scripts, and a double-storey a is the printed form most English-speaking children learn first. A slashed zero is usually a habit carried over from technical writing, where 0 and O sit next to each other in a column. None of those is a decision about the self, and the test cannot see which one produced the mark.",
          "Upright stems behave the same way. A page written slowly on a flat table tends to come out closer to vertical, while the same hand at speed leans right. The scorer recorded the lean in the sample you described. It did not record the table, the pen, or the hurry.",
        ],
      },
      {
        id: "other-label",
        h2: "If you expected a different label",
        paragraphs: [
          "The other five names are not better or worse versions of this one. They label the other tallies, or a close finish. If you wanted Margin Storyteller, the gap between you and it may be one wide word gap and one high t-bar. Before assuming the first result was the accurate one, take the test again with a sample written on a different day, and compare the two.",
        ],
      },
    ],
  },
  {
    slug: "everyday-minimalist",
    name: "Everyday Minimalist",
    sentence: "You stop the stroke once the letter is readable.",
    direction: "finish",
    guides: ["seven", "g"],
    aside: "The pen clocked out the moment the letter became a letter.",
    practice: "Add one crossbar to five plain 7s. If the bar makes them clearer, keep it. If it only decorates, leave it off.",
    examples: ["plain-seven.svg", "open-g.svg", "plain-zero.svg"],
    paragraphs: [
      "Plain 7s, open g tails, and unadorned zeros land here. Everyday Minimalist means the extra mark is missing: no crossbar, no loop, no slash. The letter ends when it can be read.",
      "It does not mean you are easygoing or that your life is spare. Many copybooks teach exactly this ending, and a fast note does the same thing without a personality attached.",
    ],
    sections: [
      {
        id: "finish-tally",
        h2: "Where the endings tally comes from",
        paragraphs: [
          "Endings is the tally for a letter that stops once it can be read. A plain 7 adds two points to it; so does a plain 5, a one-stroke 8, an open-hook 9, a plain 0, a 1 drawn as a single stroke, a curved 2, a g with an open tail, a close i dot, a straight y tail, an ampersand written as a plus sign, ordinary letter size, separate letters, and a capital G with only a spur. Everyday Minimalist appears when that tally leads by three points or more.",
          "The same threshold applies here as everywhere else in the scorer. A two-point lead can be overturned by one different answer, so it is reported as Instinctive Mixer rather than as a name. What survives the threshold is a simple statement about the sample: more of your answers left the extra stroke out than added it.",
          "Do not read the label as speed of mind, or as a habit of cutting corners outside the page. A plain 7 can come from a careful hand that learned the plain form, and a crossed 7 from a hurried one that learned to cross it. The tally counts strokes, and it cannot see why a stroke was left out.",
        ],
      },
      {
        id: "missing-mark",
        h2: "The missing mark is a decision about speed",
        paragraphs: [
          "A crossbar on a 7, a slash through a 0, a loop on a g: each costs a stroke the plain form does not need. Writers drop those strokes when the note is quick, when the only reader is themselves, or when the form was never taught in the first place. The page shows the outcome of that trade, not a temperament.",
          "Copybooks disagree about which marks are compulsory, which is why this tally varies by country. A US school hand often crosses the 7 and leaves the zero plain. Technical handwriting does the opposite. Two people with the same Everyday Minimalist label can have learned completely opposite sets of rules and still match every shape the test asks about.",
        ],
      },
      {
        id: "other-label",
        h2: "If you expected a different label",
        paragraphs: [
          "This result is one of four tallies winning, and the margin may be small. If you expected Beautiful Rebel, the difference could be a single looped g or a circled i. The six labels are not a scale running from plain to decorative. They mark which habit appeared most often in the answers you gave, and a different sample can move the mark.",
        ],
      },
    ],
  },
  {
    slug: "margin-storyteller",
    name: "Margin Storyteller",
    sentence: "Gaps and lean set the pace of the line.",
    direction: "rhythm",
    guides: ["spacing", "slant"],
    aside: "The gaps are doing as much talking as the letters. The letters did not agree to that.",
    practice: "On a lined page, leave a gap about one letter wide between words for ten words. Then look at the slant of the stems only.",
    examples: ["spacing-wide.svg", "slant-right.svg", "dotted-i-high.svg"],
    paragraphs: [
      "Word gaps, the lean of the downstroke, a high dot, or a high t-bar carry this result. Margin Storyteller names that pace. The line has a rhythm you can see without reading the words.",
      "It does not mean your margins tell a story about your feelings. Spacing moves when the line, the hurry, or the hand changes. Slant is often the model you were taught.",
    ],
    sections: [
      {
        id: "rhythm-tally",
        h2: "Where the rhythm tally comes from",
        paragraphs: [
          "Rhythm counts the pace of the line rather than the shape of a single letter: word gaps, the lean of the downstrokes, the height of a t-bar, the position of an i dot, letter size, and whether the letters join. Wide gaps, some joins, a high bar, a high dot, a right slant, large letters, and a flourished ampersand all add to it, and so does tight spacing in one question.",
          "Margin Storyteller appears when rhythm leads by three points or more. The threshold matters because a gap between words can change inside a single sentence, while a closed counter cannot unclose itself. A tally built on spacing is easier to move than one built on letter forms, and the scorer treats both the same way rather than pretending otherwise.",
          "The label says nothing about mood, generosity, or how a person handles a crowded page. It records that, in the sample you described, the spaces and the lean carried more answers than any single letter form did. That is a statement about which question you answered consistently, not about what the answers mean.",
        ],
      },
      {
        id: "taught-slant",
        h2: "Lined paper, hurry, and the model you learned",
        paragraphs: [
          "Slant is the most-taught feature on the page. Right-leaning writing is standard in italic models, upright writing is standard in many German and Scandinavian school scripts, and a left lean shows up in a few national hands. Measured slant also moves with speed and with the angle of the paper on the desk.",
          "Word gaps are less stable still. A cramped margin, a wide desk, or a sentence written in a hurry changes them. The test records the gap you described, not a fixed property of your hand. Treat the label as a description of that page, and write another page before you trust it as a habit.",
        ],
      },
      {
        id: "other-label",
        h2: "If you expected a different label",
        paragraphs: [
          "Rhythm and character often travel together, because flourish questions carry points for both and so does a looped descender. When those two lead and neither pulls ahead by three, the scorer returns Daydream Doodler instead of this name. If character was your second tally, you were in that neighbourhood and one answer decided it.",
          "One practical check: write the same paragraph twice, once on lined paper and once on blank. If this result changes between the two samples, the label was describing the page rather than the hand, and the honest answer is to keep both readings.",
        ],
      },
    ],
  },
  {
    slug: "beautiful-rebel",
    name: "Beautiful Rebel",
    sentence: "You keep a mark the basic copybook leaves out.",
    direction: "character",
    guides: ["ampersand", "four"],
    aside: "Something on the page refused the plain version. It can still be read, which is the whole trick.",
    practice: "Copy one word twice: once with the extra mark, once without. Keep the one a stranger can read at arm's length.",
    examples: ["open-four.svg", "dotted-i-circle.svg", "flourished-ampersand.svg"],
    paragraphs: [
      "An open 4, a circle over the i, or a flourished ampersand is doing the work here. Beautiful Rebel is the name for that extra mark. The page is still readable. It just refuses the plain version.",
      "It does not mean you break rules anywhere else. A circle-dot is a style people pick up from a friend or a lettering book. The test only saw the shape.",
    ],
    sections: [
      {
        id: "character-tally",
        h2: "Where the character tally comes from",
        paragraphs: [
          "Character counts the added stroke: an open or curved 4, a looped 2, an open 5, an 8 with a tail, a 9 with a long tail, a looped g, a looped y, a capital G with a flourish, a t with no bar at all, a circled i, a flourished ampersand, and continuous joins. Beautiful Rebel appears when that tally leads by three points or more.",
          "The name is pointing at something specific. Every other shape in the test can be explained by making a letter readable or by following a model. These are the marks that were not required for either. The test counted how often you kept one anyway, and stopped there.",
          "It is not a measure of originality. A flourish copied from a birthday card is still a flourish, and the scorer cannot tell a borrowed loop from an invented one. What it can say is that the extra mark survived into your everyday hand, which is a fact about practice rather than about temperament.",
        ],
      },
      {
        id: "flourish-style",
        h2: "Flourish is a style, and styles are learned",
        paragraphs: [
          "A circled i-dot and a looped descender are frequently copied from a friend, a teacher, or a lettering book. What looks like a private signature is often a shared local convention. The curly ampersand has been a printed form since the Renaissance and appears in typefaces as well as in hands.",
          "That is why this site attaches no trait to the mark. The shape is real and easy to see; the step from shape to temperament is the part the research does not support. The Neter and Ben-Shakhar meta-analysis of 1989 found predictions from handwriting close to chance once the content of the text was held neutral, and later reviews of graphology have not overturned it.",
        ],
      },
      {
        id: "other-label",
        h2: "If you expected a different label",
        paragraphs: [
          "Character shares several questions with rhythm, so a near miss here often lands on Daydream Doodler. If the lead was two points or less, that is exactly what the scorer is designed to do: report the tie instead of choosing a winner. One answer, honestly given, can move this result to a neighbouring name.",
          "A slower check is to copy one paragraph with the flourish and one without, then leave both on a desk for a week. If the extra stroke returns without a decision, it is a settled habit. If it stays away, it was a feature of the sample rather than of the hand.",
        ],
      },
    ],
  },
  {
    slug: "daydream-doodler",
    name: "Daydream Doodler",
    sentence: "Flourish and rhythm show up in the same line.",
    direction: null,
    guides: ["a", "g"],
    aside: "Two habits showed up and neither would leave the room.",
    practice: "Write the same sentence on two lines. On the second line, keep the loops but make every word gap the width of one letter.",
    examples: ["looped-g.svg", "looped-y.svg", "high-t.svg"],
    paragraphs: [
      "This result appears when flourish and page rhythm are the two leaders, and neither leads by more than one answer. Loops, wide gaps, and a high bar can share the page without one of them winning.",
      "Daydream Doodler is that tie. It is not a measure of attention or imagination. People write this way when more than one habit is active in the same sample.",
    ],
    sections: [
      {
        id: "why-this-label",
        h2: "Why this label exists",
        paragraphs: [
          "Daydream Doodler is not a fourth leading tally. It is the name the scorer gives when character and rhythm are the two highest tallies and neither leads by three points. It marks a page where loops, wide gaps, and a high bar appear together without one of them taking the lead.",
          "The label exists because that close finish is common rather than rare. Several questions carry points for both tallies at once: a looped g and a looped y feed rhythm and character together, a t with no bar does the same, and a flourished ampersand adds to each. Naming the pair is more honest than declaring whichever tally happened to sort first.",
          "The word doodler was chosen for the sound of it, not as a diagnosis. Nothing in the scorer detects drawing, daydreaming, or attention. If the label were called Pair Two, the arithmetic would be identical, which is a fair summary of how much weight the name deserves.",
        ],
      },
      {
        id: "mixed-page",
        h2: "What a mixed page looks like in practice",
        paragraphs: [
          "A looped g beside a wide word gap, or a high t-bar over a flourished ampersand, is enough. People who kept a cursive model but write quickly land here often, because the loops survive the hurry while the spacing loosens around them.",
          "Nothing in that combination points to imagination, distraction, or a creative temperament. It points to two habits being active in the same sample. Write the same sentence slowly and the spacing may tighten enough to move the result to Beautiful Rebel or Margin Storyteller. If you want to see which half of the tie is doing the work, copy one line at speed and one slowly, then compare only the gaps; the loops will barely change, the spacing usually will.",
        ],
      },
      {
        id: "other-label",
        h2: "If you expected a different label",
        paragraphs: [
          "A single answer carrying two points in one of those directions turns this result into a named lead. That is the instrument stating its own margin, not a hidden rule. If you took the test in a hurry, an answer chosen from memory rather than from a page of your own writing is the most likely reason for the tie.",
          "Before treating the tie as a description, write one page slowly and one quickly. If the wide gaps and the high bar close up when you slow down, rhythm was following speed. If they stay, the spacing is a settled part of the hand and the tie will probably repeat.",
        ],
      },
    ],
  },
  {
    slug: "instinctive-mixer",
    name: "Instinctive Mixer",
    sentence: "No single habit runs the page.",
    direction: null,
    guides: ["slant", "spacing"],
    aside: "The page voted for several models at once. That is a history of hands, not a mood.",
    practice: "Pick the two shapes that disagreed and write each one, slowly, on its own line. The mix is allowed to stay.",
    examples: ["slant-upright.svg", "plain-seven.svg", "single-storey-a.svg"],
    paragraphs: [
      "No direction leads by more than one answer, and the top pair is not flourish plus rhythm. Instinctive Mixer means these shapes did not vote as a bloc. A closed 4 can sit next to a wide gap and an open g.",
      "That mix is what happens when someone learned from more than one model. It is not indecision as a trait, and it is not a weaker result than the other five names.",
    ],
    sections: [
      {
        id: "why-this-label",
        h2: "Why this label exists",
        paragraphs: [
          "Instinctive Mixer covers every close finish that is not character against rhythm: structure against endings, structure against rhythm, endings against character, and any three-way tie. The scorer returns it when the top two tallies sit within two points of each other and the pair is not the one that earns Daydream Doodler.",
          "The name is deliberately flat. A close result is the normal outcome for a 19-question questionnaire built from mostly two-point options, and pretending one tally won would add precision the answers do not contain. Saying so is more useful than hiding it behind a seventh name.",
          "It is also not evidence of indecision, adaptability, or a mixed personality, despite the word mixer. The tally gap is a property of nineteen answers, not of a life. Someone with a strong single model can still answer in a way that splits the count, simply by writing different letters in different styles.",
        ],
      },
      {
        id: "mixed-page",
        h2: "What a mixed page looks like in practice",
        paragraphs: [
          "A closed 4, a wide word gap, and an open g can all sit on the same page: structure, rhythm, and endings each pick up points and none pulls away. People who learned one hand at school and another at work produce this combination often, and so do people who print some letters and join others.",
          "That is a history of hands rather than a mood. The mixture is stable across samples more often than a named lead is, because it does not depend on one unusual shape tipping the count. It also means a small change on any single question can produce a named result next time, which is worth knowing before you treat any label as fixed.",
        ],
      },
      {
        id: "other-label",
        h2: "If you expected a different label",
        paragraphs: [
          "With a margin this small, the neighbouring name is usually one answer away. If character and rhythm were your top two, the result would have been Daydream Doodler; if one tally had reached a three-point lead, it would have carried its own name. Nothing about the difference should be read as a difference between people. Keep both pages for a week before reading anything into either result; a second sample is the cheapest check this test offers, and it costs one sheet of paper.",
          "A useful check is to write the alphabet once in print and once in joined letters, then answer the same 19 questions from each page. If the two runs disagree, the mix belongs to two different scripts rather than to one hand, and the more useful answer is the one you gave for everyday writing.",
        ],
      },
    ],
  },
];

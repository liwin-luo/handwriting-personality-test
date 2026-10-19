const w = (structure = 0, finish = 0, rhythm = 0, character = 0) => ({
  structure,
  finish,
  rhythm,
  character,
});

const opt = (id, label, alt, weights) => ({ id, file: `${id}.svg`, label, alt, weights });

/** 选项 0 的全选向量在 score.test.mjs 里锁定为 Everyday Minimalist。改权重时一起改测试。 */
export const questions = [
  {
    id: "four",
    group: "digit",
    title: "The number 4",
    prompt: "Which 4 is closest to yours?",
    options: [
      opt("open-four", "Open 4", "Open 4 with a crossbar and no closed triangle", w(0, 0, 1, 2)),
      opt("closed-four", "Closed 4", "Closed 4 with a triangular top", w(2, 1, 0, 0)),
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
    examples: ["closed-four.svg", "double-storey-a.svg", "slashed-zero.svg"],
    paragraphs: [
      "Closed 4s, double-storey a's, slashed zeros, and upright stems pile up on this result. Quiet Architect is the name for that pile. It means the page prefers shapes with a finished counter and a clear midline.",
      "It does not mean you are quiet, organized, or suited to a particular job. School models, a technical habit such as slashing a zero, and the pen you used are enough to explain the same marks.",
    ],
  },
  {
    slug: "everyday-minimalist",
    name: "Everyday Minimalist",
    sentence: "You stop the stroke once the letter is readable.",
    direction: "finish",
    guides: ["seven", "g"],
    examples: ["plain-seven.svg", "open-g.svg", "plain-zero.svg"],
    paragraphs: [
      "Plain 7s, open g tails, and unadorned zeros land here. Everyday Minimalist means the extra mark is missing: no crossbar, no loop, no slash. The letter ends when it can be read.",
      "It does not mean you are easygoing or that your life is spare. Many copybooks teach exactly this ending, and a fast note does the same thing without a personality attached.",
    ],
  },
  {
    slug: "margin-storyteller",
    name: "Margin Storyteller",
    sentence: "Gaps and lean set the pace of the line.",
    direction: "rhythm",
    guides: ["spacing", "slant"],
    examples: ["spacing-wide.svg", "slant-right.svg", "dotted-i-high.svg"],
    paragraphs: [
      "Word gaps, the lean of the downstroke, a high dot, or a high t-bar carry this result. Margin Storyteller names that pace. The line has a rhythm you can see without reading the words.",
      "It does not mean your margins tell a story about your feelings. Spacing moves when the line, the hurry, or the hand changes. Slant is often the model you were taught.",
    ],
  },
  {
    slug: "beautiful-rebel",
    name: "Beautiful Rebel",
    sentence: "You keep a mark the basic copybook leaves out.",
    direction: "character",
    guides: ["ampersand", "four"],
    examples: ["open-four.svg", "dotted-i-circle.svg", "flourished-ampersand.svg"],
    paragraphs: [
      "An open 4, a circle over the i, or a flourished ampersand is doing the work here. Beautiful Rebel is the name for that extra mark. The page is still readable. It just refuses the plain version.",
      "It does not mean you break rules anywhere else. A circle-dot is a style people pick up from a friend or a lettering book. The test only saw the shape.",
    ],
  },
  {
    slug: "daydream-doodler",
    name: "Daydream Doodler",
    sentence: "Flourish and rhythm show up in the same line.",
    direction: null,
    guides: ["a", "g"],
    examples: ["looped-g.svg", "looped-y.svg", "high-t.svg"],
    paragraphs: [
      "This result appears when flourish and page rhythm are the two leaders, and neither is ahead by two points. Loops, wide gaps, and a high bar can share the page without one of them winning.",
      "Daydream Doodler is that tie. It is not a measure of attention or imagination. People write this way when more than one habit is active in the same sample.",
    ],
  },
  {
    slug: "instinctive-mixer",
    name: "Instinctive Mixer",
    sentence: "No single habit runs the page.",
    direction: null,
    guides: ["slant", "spacing"],
    examples: ["slant-upright.svg", "plain-seven.svg", "single-storey-a.svg"],
    paragraphs: [
      "No direction leads by two points, and the top pair is not flourish plus rhythm. Instinctive Mixer means the twelve shapes did not vote as a bloc. A closed 4 can sit next to a wide gap and an open g.",
      "That mix is what happens when someone learned from more than one model. It is not indecision as a trait, and it is not a weaker result than the other five names.",
    ],
  },
];

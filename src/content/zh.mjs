const w = (structure = 0, finish = 0, rhythm = 0, character = 0) => ({
  structure,
  finish,
  rhythm,
  character,
});

const opt = (id, label, alt, weights) => ({ id, file: `${id}.svg`, label, alt, weights });

/** 汉字硬笔，五题。和拉丁字母测验不是同一套题。至少答 4 题。 */
export const MIN_ZH = 4;

export const questions = [
  {
    id: "size",
    group: "han",
    title: "字的大小",
    prompt: "你写的字更接近哪一种大小？",
    options: [
      opt("zh-size-small", "偏小", "较小的单字", w(2, 0, 0, 0)),
      opt("zh-size-mid", "适中", "格子里放得下的单字", w(1, 2, 0, 0)),
      opt("zh-size-large", "偏大", "几乎占满一行高度的单字", w(0, 0, 1, 2)),
    ],
  },
  {
    id: "gap",
    group: "han",
    title: "字距",
    prompt: "两个字之间的空隙更接近哪一种？",
    options: [
      opt("zh-gap-tight", "挨着", "两个字几乎贴在一起", w(2, 0, 0, 0)),
      opt("zh-gap-even", "大约一字宽", "中间留出大约一个字的空", w(0, 2, 1, 0)),
      opt("zh-gap-wide", "很开", "两个字离得远", w(0, 0, 2, 1)),
    ],
  },
  {
    id: "lines",
    group: "han",
    title: "行距",
    prompt: "行和行之间更接近哪一种？",
    options: [
      opt("zh-line-tight", "行距紧", "三行挨得很近", w(2, 1, 0, 0)),
      opt("zh-line-even", "行距均匀", "三行之间留出相近的空", w(0, 2, 1, 0)),
      opt("zh-line-wide", "行距宽", "三行之间空得很大", w(0, 0, 2, 1)),
    ],
  },
  {
    id: "link",
    group: "han",
    title: "连笔",
    prompt: "笔画之间连得多吗？",
    options: [
      opt("zh-link-none", "基本分开", "横和竖各写各的", w(1, 2, 0, 0)),
      opt("zh-link-some", "拐角连上", "横收到底再写下竖", w(2, 0, 1, 0)),
      opt("zh-link-many", "一路连下去", "几笔连成一条线", w(0, 0, 1, 2)),
    ],
  },
  {
    id: "bar",
    group: "han",
    title: "横画",
    prompt: "你的横更接近哪一种？",
    options: [
      opt("zh-bar-level", "平", "横画接近水平", w(2, 1, 0, 0)),
      opt("zh-bar-rising", "向右上", "横画往右上方走", w(0, 0, 2, 1)),
      opt("zh-bar-wavy", "有起伏", "横画中间有弯", w(0, 0, 1, 2)),
    ],
  },
];

export const profiles = [
  {
    slug: "quiet-architect",
    name: "格子里的字",
    sentence: "字偏小，空隙和横画都收着。",
    direction: "structure",
    guides: ["four", "zero"],
    examples: ["zh-size-small.svg", "zh-gap-tight.svg", "zh-bar-level.svg"],
    aside: "这是格子的习惯，不是你的性格鉴定。",
    practice: "用同一支笔写两行。第一行保持现在的大小，第二行把每个字写到格子的八成高。留下更好认的那一行。",
    paragraphs: [],
  },
  {
    slug: "everyday-minimalist",
    name: "写完就停",
    sentence: "字能认出来，笔就停了。",
    direction: "finish",
    guides: ["seven", "g"],
    examples: ["zh-size-mid.svg", "zh-link-none.svg", "zh-line-even.svg"],
    aside: "多写的那一笔没有出现。这只说明字已经够认。",
    practice: "挑五个常写的字，每个写两遍：一遍现在这样，一遍把该连的拐角连上。留下陌生人能更快认出的那一遍。",
    paragraphs: [],
  },
  {
    slug: "margin-storyteller",
    name: "行距说了算",
    sentence: "空隙和横画的走向把节奏定下来了。",
    direction: "rhythm",
    guides: ["spacing", "slant"],
    examples: ["zh-gap-wide.svg", "zh-line-wide.svg", "zh-bar-rising.svg"],
    aside: "页面的节奏看得见。它不讲述心情。",
    practice: "在横线纸上写十个字，字距保持大约一个字宽，横画尽量走平。写完只看行距，不看字好不好看。",
    paragraphs: [],
  },
  {
    slug: "beautiful-rebel",
    name: "多写了一笔",
    sentence: "连笔或横画上多出来的形状还在。",
    direction: "character",
    guides: ["ampersand", "four"],
    examples: ["zh-link-many.svg", "zh-bar-wavy.svg", "zh-size-large.svg"],
    aside: "多出来的那笔还在页面上。它仍然应该能被认出来。",
    practice: "把同一个字写两行：一行保留连笔，一行笔画分开。把两行拿到一臂远，留下先被认出来的那行。",
    paragraphs: [],
  },
  {
    slug: "daydream-doodler",
    name: "连笔和行距一起出现",
    sentence: "连笔和页面节奏都靠前，谁也没超过一题的领先。",
    direction: null,
    guides: ["a", "g"],
    examples: ["zh-link-many.svg", "zh-line-wide.svg", "zh-bar-wavy.svg"],
    aside: "两种写法同时在场。这不是走神的分数。",
    practice: "同一句话写两行。第二行保留连笔，但把行距拉开到不碰到上一行的字。",
    paragraphs: [],
  },
  {
    slug: "instinctive-mixer",
    name: "没有固定一种写法",
    sentence: "大小、间距、连笔没有投给同一个方向。",
    direction: null,
    guides: ["slant", "spacing"],
    examples: ["zh-size-mid.svg", "zh-gap-even.svg", "zh-link-some.svg"],
    aside: "几种课本或几支笔留下的习惯叠在一起。这不是犹豫。",
    practice: "把差得最远的两种形状各写一行，慢慢写。可以继续混用。",
    paragraphs: [],
  },
];

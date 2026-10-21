// Metadata descriptions are written to the 140–155 character target. The tails
// only rescue older short copy; CJK pages use a character minimum, not a word one.

const MIN = 140;
const MAX = 155;

// The first path segment names the language only when it is a locale prefix.
// Every other path is English, so the tails fall back to English too.
const LOCALES = ["zh", "es", "pt", "fr", "de", "id", "vi", "it", "tr"];

// English tails run longest first so the first one that fits the remaining
// space lands the description inside the window.
const tails = {
  en: [
    "A visible mark on paper. Not personality, health, honesty, intelligence, or hiring.",
    "A visible mark on paper. It is not personality or health advice.",
    "A visible mark on paper, not a personality reading.",
    "A mark on paper, not a reading of personality.",
    "A mark on paper, not a person.",
    "A visible mark on paper.",
  ],
  zh: ["这一页只说明纸上看见的形状。它不说明性格、情绪、健康、诚实或智力，也不能用来决定雇佣。"],
  es: ["Describe una marca en el papel, no una personalidad ni una contratación."],
  pt: ["Descreve uma marca no papel, não uma personalidade nem uma contratação."],
  fr: ["Décrit une marque sur le papier, pas une personnalité ni une embauche."],
  de: ["Beschreibt eine Spur auf dem Papier, keine Persönlichkeit und keine Einstellung."],
  id: ["Menjelaskan tanda di kertas, bukan kepribadian atau keputusan mempekerjakan."],
  vi: ["Chỉ nói về nét trên giấy, không phải tính cách hay quyết định tuyển dụng."],
  it: ["Descrive un segno sulla carta, non una personalità e non un'assunzione."],
  tr: ["Kâğıttaki izi anlatır. Kişilik veya bir işe alım kararı değildir."],
};

function localeOf(path) {
  const code = String(path || "/").split("/").filter(Boolean)[0] || "en";
  return LOCALES.includes(code) ? code : "en";
}

function shorten(text, max) {
  const cut = text.slice(0, max - 1);
  const at = cut.lastIndexOf(" ");
  const body = (at > (max - 1) * 0.6 ? cut.slice(0, at) : cut).replace(/[.,;:—-]+$/, "");
  return `${body}.`;
}

export function fitDescription(description, path) {
  const code = localeOf(path);
  const text = String(description).replace(/\s+/g, " ").trim();

  if (code === "zh") {
    return text.length >= 62 ? text : `${text} ${tails.zh[0]}`;
  }

  if (code !== "en") {
    // The retired locales are noindexed, so they keep the loose window.
    return text.length >= 110 ? text : `${text} ${tails[code][0]}`;
  }

  if (text.length > MAX) return shorten(text, MAX);
  if (text.length >= MIN) return text;

  const budget = MAX - text.length - 1;
  const tail = tails.en.find((option) => option.length <= budget);
  if (!tail) return shorten(text, MAX);
  return `${text} ${tail}`;
}

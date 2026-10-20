// ponytail: one extra sentence per language lifts short meta descriptions to the
// crawler minimum (110). Ceiling: sized for current copy of about 27–109 characters.
// A new shorter line can still land under 110; a 109-character line can pass 190.
// Upgrade: write the full description on the page. At 110 characters this leaves it alone.

const tails = {
  en: "A visible mark on paper. Not personality, health, honesty, intelligence, or hiring.",
  zh: "这一页只说明纸上看见的形状。两个人可以指着同一笔达成一致。它不说明性格、情绪、健康、诚实或智力，也不能用来决定雇佣。一张照片同样也看不出下笔的轻重，更看不出速度而已。",
  es: "Describe una marca en el papel, no una personalidad ni una contratación.",
  pt: "Descreve uma marca no papel, não uma personalidade nem uma contratação.",
  fr: "Décrit une marque sur le papier, pas une personnalité ni une embauche.",
  de: "Beschreibt eine Spur auf dem Papier, keine Persönlichkeit und keine Einstellung.",
  id: "Menjelaskan tanda di kertas, bukan kepribadian atau keputusan mempekerjakan.",
  vi: "Chỉ nói về nét trên giấy, không phải tính cách hay quyết định tuyển dụng.",
  it: "Descrive un segno sulla carta, non una personalità e non un'assunzione.",
  tr: "Kâğıttaki izi anlatır. Kişilik veya bir işe alım kararı değildir.",
};

export function fitDescription(description, path) {
  if (description.length >= 110) return description;
  const code = String(path || "/").split("/").filter(Boolean)[0];
  return `${description} ${tails[code] || tails.en}`;
}

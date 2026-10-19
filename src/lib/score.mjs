/** 四个视觉方向。顺序用于平分时的稳定排序。 */
export const DIRECTIONS = ["structure", "finish", "rhythm", "character"];

export const MIN_ANSWERS = 8;

const PROFILE_OF = {
  structure: "quiet-architect",
  finish: "everyday-minimalist",
  rhythm: "margin-storyteller",
  character: "beautiful-rebel",
};

const EMPTY = { structure: 0, finish: 0, rhythm: 0, character: 0 };

function totalsOf(questions, picks) {
  const totals = { ...EMPTY };
  picks.forEach((pick, i) => {
    if (pick == null) return;
    const weights = questions[i].options[pick].weights;
    for (const id of DIRECTIONS) totals[id] += weights[id];
  });
  return totals;
}

/**
 * 领先不足 2 分算没有单一方向。
 * ponytail: 2 分是固定阈值，题量或权重加大后会偏。升级路径是按已答题数归一化再比较。
 */
export function scoreAnswers(questions, picks, min = MIN_ANSWERS) {
  const answered = Array.isArray(picks) ? picks.filter((pick) => pick != null).length : 0;
  if (!Array.isArray(picks) || picks.length !== questions.length || answered < min) {
    return { ok: false, answered, totals: { ...EMPTY }, profile: null };
  }
  const totals = totalsOf(questions, picks);
  const ranked = DIRECTIONS.map((id) => ({ id, score: totals[id] })).sort(
    (a, b) => b.score - a.score || DIRECTIONS.indexOf(a.id) - DIRECTIONS.indexOf(b.id),
  );
  const lead = ranked[0].score - ranked[1].score;
  const top = new Set([ranked[0].id, ranked[1].id]);
  let profile;
  if (lead >= 2) profile = PROFILE_OF[ranked[0].id];
  else if (top.has("character") && top.has("rhythm")) profile = "daydream-doodler";
  else profile = "instinctive-mixer";
  return { ok: true, answered, totals, profile };
}

export function encodeAnswers(picks) {
  if (picks.some((pick) => pick != null && (!Number.isInteger(pick) || pick < 0 || pick > 9))) {
    throw new Error("bad pick");
  }
  return `1${picks.map((pick) => (pick == null ? "-" : String(pick))).join("")}`;
}

export function decodeAnswers(code, questions) {
  if (typeof code !== "string" || code.length !== questions.length + 1 || code[0] !== "1") return null;
  const picks = [];
  for (let i = 0; i < questions.length; i++) {
    const ch = code[i + 1];
    if (ch === "-") {
      picks.push(null);
      continue;
    }
    if (!/^[0-9]$/.test(ch)) return null;
    const n = Number(ch);
    if (n >= questions[i].options.length) return null;
    picks.push(n);
  }
  return picks;
}

export function codeFromInput(raw, questions) {
  if (typeof raw !== "string") return null;
  const text = raw.trim();
  const found = text.match(/\/r\/(1[0-9-]*)/);
  const code = found ? found[1] : text;
  return decodeAnswers(code, questions) ? code : null;
}

/** direction 为空时按题目顺序取，混合型和空想型用这个。 */
export function pickSamples(questions, picks, direction, n = 3) {
  const rows = [];
  picks.forEach((pick, i) => {
    if (pick == null) return;
    const option = questions[i].options[pick];
    rows.push({
      questionId: questions[i].id,
      file: option.file,
      alt: option.alt,
      label: option.label,
      weight: direction ? option.weights[direction] : 0,
      order: i,
    });
  });
  if (direction) rows.sort((a, b) => b.weight - a.weight || a.order - b.order);
  return rows.slice(0, n);
}

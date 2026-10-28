/** 四个视觉方向。顺序用于平分时的稳定排序。 */
export const DIRECTIONS = ["structure", "finish", "rhythm", "character"];

export const MIN_ANSWERS = 8;

/** 旧英文测验的题目顺序。新题库按 id 回填，没答过的题留空。 */
const V1_IDS = ["four", "seven", "a", "g", "zero", "one", "t", "i", "y", "ampersand", "spacing", "slant"];

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

function rankDirections(totals) {
  return DIRECTIONS.map((id) => ({ id, score: totals[id] })).sort(
    (a, b) => b.score - a.score || DIRECTIONS.indexOf(a.id) - DIRECTIONS.indexOf(b.id),
  );
}

/** 一个选项能给一个方向加的最高分。领先不超过它，一题就能改名。 */
export function itemCeiling(questions) {
  let ceiling = 0;
  for (const question of questions) {
    for (const option of question.options) {
      for (const id of DIRECTIONS) ceiling = Math.max(ceiling, option.weights[id] || 0);
    }
  }
  return ceiling;
}

function scored(questions, answered, totals) {
  const ranked = rankDirections(totals);
  const lead = ranked[0].score - ranked[1].score;
  const ceiling = itemCeiling(questions);
  const top = new Set([ranked[0].id, ranked[1].id]);
  let profile;
  if (lead > ceiling) profile = PROFILE_OF[ranked[0].id];
  else if (top.has("character") && top.has("rhythm")) profile = "daydream-doodler";
  else profile = "instinctive-mixer";
  return { ok: true, answered, totals, profile, ranked, lead, ceiling };
}

function missed(questions, answered) {
  return {
    ok: false,
    answered,
    totals: { ...EMPTY },
    profile: null,
    ranked: rankDirections(EMPTY),
    lead: 0,
    ceiling: itemCeiling(questions),
  };
}

export function scoreAnswers(questions, picks, min = MIN_ANSWERS) {
  const answered = Array.isArray(picks) ? picks.filter((pick) => pick != null).length : 0;
  if (!Array.isArray(picks) || picks.length !== questions.length || answered < min) {
    return missed(questions, answered);
  }
  return scored(questions, answered, totalsOf(questions, picks));
}

export function encodeAnswers(picks) {
  if (picks.some((pick) => pick != null && (!Number.isInteger(pick) || pick < 0 || pick > 9))) {
    throw new Error("bad pick");
  }
  return `2${picks.map((pick) => (pick == null ? "-" : String(pick))).join("")}`;
}

function readPick(question, ch) {
  if (ch === "-") return null;
  if (!/^[0-9]$/.test(ch)) return undefined;
  const n = Number(ch);
  if (n >= question.options.length) return undefined;
  return n;
}

function positional(questions, body) {
  const picks = [];
  for (let i = 0; i < questions.length; i++) {
    const pick = readPick(questions[i], body[i]);
    if (pick === undefined) return null;
    picks.push(pick);
  }
  return picks;
}

export function decodeAnswers(code, questions) {
  if (typeof code !== "string" || code.length < 2) return null;
  const version = code[0];
  const body = code.slice(1);
  if (version === "2") {
    if (body.length !== questions.length) return null;
    return positional(questions, body);
  }
  if (version !== "1") return null;
  if (body.length === questions.length) return positional(questions, body);
  if (body.length === V1_IDS.length && V1_IDS.every((id) => questions.some((question) => question.id === id))) {
    const picks = questions.map(() => null);
    for (let i = 0; i < V1_IDS.length; i++) {
      const index = questions.findIndex((question) => question.id === V1_IDS[i]);
      const pick = readPick(questions[index], body[i]);
      if (pick === undefined) return null;
      picks[index] = pick;
    }
    return picks;
  }
  return null;
}

export function codeFromInput(raw, questions) {
  if (typeof raw !== "string") return null;
  const text = raw.trim();
  const found = text.match(/\/r\/([12][0-9-]*)/);
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
      optionId: option.id,
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

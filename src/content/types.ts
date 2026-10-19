export type Direction = "structure" | "finish" | "rhythm" | "character";

export type Weights = Record<Direction, number>;

export type GlyphOption = {
  id: string;
  file: string;
  alt: string;
  label: string;
  weights: Weights;
};

export type QuizQuestion = {
  id: string;
  group: "digit" | "letter" | "symbol" | "spacing" | "slant" | "han";
  title: string;
  prompt: string;
  options: GlyphOption[];
};

export type Profile = {
  slug: string;
  name: string;
  sentence: string;
  direction: Direction | null;
  guides: [string, string];
  examples: string[];
  paragraphs: string[];
  aside: string;
  practice: string;
};

export type ScoreResult = {
  ok: boolean;
  answered: number;
  totals: Weights;
  profile: string | null;
};

export type SamplePick = {
  questionId: string;
  file: string;
  alt: string;
  label: string;
  weight: number;
  order: number;
};

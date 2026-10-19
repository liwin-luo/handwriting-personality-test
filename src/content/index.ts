import { profiles as rawProfiles, questions as rawQuestions } from "./quiz.mjs";
import {
  DIRECTIONS as rawDirections,
  MIN_ANSWERS as rawMin,
  codeFromInput as codeFromInputRaw,
  decodeAnswers as decodeRaw,
  encodeAnswers as encodeRaw,
  pickSamples as pickRaw,
  scoreAnswers as scoreRaw,
} from "../lib/score.mjs";
import type { Direction, Profile, QuizQuestion, SamplePick, ScoreResult } from "./types";

export const questions = rawQuestions as QuizQuestion[];
export const profiles = rawProfiles as Profile[];
export const DIRECTIONS = rawDirections as readonly Direction[];
export const MIN_ANSWERS = rawMin as number;

export const profileBySlug: Record<string, Profile> = Object.fromEntries(
  profiles.map((profile) => [profile.slug, profile]),
);

const directionOf: Record<string, Direction | null> = {
  "quiet-architect": "structure",
  "everyday-minimalist": "finish",
  "margin-storyteller": "rhythm",
  "beautiful-rebel": "character",
  "daydream-doodler": null,
  "instinctive-mixer": null,
};

export function directionFor(slug: string | null): Direction | null {
  if (!slug) return null;
  return directionOf[slug] ?? null;
}

export function encodeAnswers(picks: (number | null)[]): string {
  return encodeRaw(picks) as string;
}

export function decodeAnswers(code: string): (number | null)[] | null {
  return decodeRaw(code, questions) as (number | null)[] | null;
}

export function codeFromInput(raw: string): string | null {
  return codeFromInputRaw(raw, questions) as string | null;
}

export function scoreAnswers(picks: (number | null)[]): ScoreResult {
  return scoreRaw(questions, picks) as ScoreResult;
}

export function pickSamples(picks: (number | null)[], direction: Direction | null): SamplePick[] {
  return pickRaw(questions, picks, direction, 3) as SamplePick[];
}

export type { Direction, Profile, QuizQuestion, SamplePick, ScoreResult, Weights } from "./types";

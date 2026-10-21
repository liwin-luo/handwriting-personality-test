"use client";

import { Quiz } from "@/components/Quiz";
import { MIN_ANSWERS, type QuizQuestion } from "@/content";
import { decodeAnswers } from "@/lib/score.mjs";

function fill(template: string, vars: Record<string, number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ""));
}

export function LatinQuiz({
  code,
  bank,
  copy,
}: {
  code: string;
  bank: QuizQuestion[];
  copy: {
    progressMore: string;
    progressDone: string;
    back: string;
    skip: string;
    see: string;
    keys: string;
  };
}) {
  return (
    <Quiz
      bank={bank}
      minAnswers={MIN_ANSWERS}
      storageKey={`hpt.${code}`}
      resultPath={`/${code}/r`}
      lang={code}
      decode={(value) => decodeAnswers(value, bank)}
      copy={{
        progress: (answered, total, more) =>
          fill(more > 0 ? copy.progressMore : copy.progressDone, { answered, total, more }),
        back: copy.back,
        skip: copy.skip,
        see: copy.see,
        keys: (count) => fill(copy.keys, { count, answered: 0, total: 0, more: 0 }),
      }}
    />
  );
}

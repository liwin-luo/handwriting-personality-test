"use client";

import { Quiz } from "@/components/Quiz";
import { MIN_ZH, questions } from "@/content/zh.mjs";
import { decodeAnswers } from "@/lib/score.mjs";
import type { QuizQuestion } from "@/content";

export function ZhQuiz() {
  return (
    <Quiz
      bank={questions as QuizQuestion[]}
      minAnswers={MIN_ZH}
      storageKey="hpt.zh"
      resultPath="/zh/r"
      decode={(code) => decodeAnswers(code, questions)}
      copy={{
        progress: (answered, total, more) =>
          more > 0 ? `已答 ${answered} / ${total} · 还差 ${more} 题` : `已答 ${answered} / ${total}`,
        back: "上一题",
        skip: "跳过",
        see: "看结果",
        keys: (count) => `按键 1–${count}，或方向键`,
      }}
    />
  );
}

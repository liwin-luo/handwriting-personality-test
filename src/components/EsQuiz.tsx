"use client";

import { Quiz } from "@/components/Quiz";
import { MIN_ANSWERS } from "@/content";
import { spanishQuestions } from "@/content/es.mjs";
import { decodeAnswers } from "@/lib/score.mjs";
import type { QuizQuestion } from "@/content";

const bank = spanishQuestions() as QuizQuestion[];

export function EsQuiz() {
  return (
    <Quiz
      bank={bank}
      minAnswers={MIN_ANSWERS}
      storageKey="hpt.es"
      resultPath="/es/r"
      decode={(code) => decodeAnswers(code, bank)}
      copy={{
        progress: (answered, total, more) =>
          more > 0 ? `${answered} de ${total} · faltan ${more} para un resultado` : `${answered} de ${total}`,
        back: "Atrás",
        skip: "Saltar",
        see: "Ver resultado",
        keys: (count) => `Teclas 1–${count}, o las flechas`,
      }}
    />
  );
}

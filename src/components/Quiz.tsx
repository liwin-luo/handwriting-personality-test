"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import { MIN_ANSWERS, decodeAnswers, encodeAnswers, questions } from "@/content";

const STORAGE_KEY = "hpt.answers";

export function Quiz() {
  const router = useRouter();
  const [picks, setPicks] = useState<(number | null)[]>(() => questions.map(() => null));
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const question = questions[index];
  const answered = picks.filter((pick) => pick != null).length;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("c") || localStorage.getItem(STORAGE_KEY);
    if (code) {
      const decoded = decodeAnswers(code);
      if (decoded) setPicks(decoded);
    }
    const hash = window.location.hash.replace("#q-", "");
    const hashed = questions.findIndex((item) => item.id === hash);
    if (hashed >= 0) setIndex(hashed);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, encodeAnswers(picks));
  }, [picks, ready]);

  function choose(optionIndex: number) {
    setPicks((current) => current.map((pick, i) => (i === index ? optionIndex : pick)));
    if (index < questions.length - 1) setIndex(index + 1);
  }

  function skip() {
    setPicks((current) => current.map((pick, i) => (i === index ? null : pick)));
    if (index < questions.length - 1) setIndex(index + 1);
  }

  function finish() {
    router.push(`/r/${encodeAnswers(picks)}`);
  }

  return (
    <section id="test" className="notebook rise rounded-md px-4 py-5 pl-10 shadow-[0_1px_0_rgba(28,25,21,0.04)] sm:px-6 sm:pl-12">
      <div className="flex items-baseline justify-between gap-3 text-sm text-muted">
        <p aria-live="polite">
          {answered} of {questions.length} answered
          {answered < MIN_ANSWERS ? ` · ${MIN_ANSWERS - answered} more for a result` : ""}
        </p>
        <p className="font-display text-seal">
          {String(index + 1).padStart(2, "0")}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Questions">
        {questions.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.title}
            aria-current={i === index ? "step" : undefined}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-6 rounded-sm ${i === index ? "bg-seal" : picks[i] == null ? "bg-rule" : "bg-ink"}`}
          />
        ))}
      </div>
      <h2 className="mt-6 font-display text-3xl leading-none">{question.prompt}</h2>
      <div id={`q-${question.id}`} className={`mt-5 grid gap-3 ${question.options.length > 2 ? "grid-cols-3" : "grid-cols-2"}`}>
        {question.options.map((option, optionIndex) => {
          const selected = picks[index] === optionIndex;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => choose(optionIndex)}
              className={`rounded-md border bg-paper/70 p-2 text-left ${selected ? "border-seal ring-1 ring-seal" : "border-rule"}`}
            >
              <Glyph file={option.file} alt={option.alt} />
              <span className="mt-2 block text-sm leading-snug">{option.label}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setIndex(Math.max(0, index - 1))}
          disabled={index === 0}
          className="text-sm text-muted disabled:opacity-40"
        >
          Back
        </button>
        <button type="button" onClick={skip} className="text-sm underline decoration-rule underline-offset-4">
          Skip
        </button>
        <button
          type="button"
          onClick={finish}
          disabled={answered < MIN_ANSWERS}
          className="ml-auto bg-ink px-4 py-2 text-sm text-paper disabled:opacity-40"
        >
          See result
        </button>
      </div>
    </section>
  );
}

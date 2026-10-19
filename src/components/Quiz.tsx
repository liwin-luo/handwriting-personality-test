"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import { MIN_ANSWERS, decodeAnswers, encodeAnswers, questions as englishQuestions } from "@/content";
import type { QuizQuestion } from "@/content";

const STORAGE_KEY = "hpt.answers";

export function Quiz({
  bank = englishQuestions,
  minAnswers = MIN_ANSWERS,
  storageKey = STORAGE_KEY,
  resultPath = "/r",
  copy,
  decode = decodeAnswers,
}: {
  bank?: QuizQuestion[];
  minAnswers?: number;
  storageKey?: string;
  resultPath?: string;
  copy?: {
    progress: (answered: number, total: number, more: number) => string;
    back: string;
    skip: string;
    see: string;
    keys: (count: number) => string;
  };
  decode?: (code: string) => (number | null)[] | null;
} = {}) {
  const text = copy ?? {
    progress: (answered, total, more) =>
      more > 0 ? `${answered} of ${total} answered · ${more} more for a result` : `${answered} of ${total} answered`,
    back: "Back",
    skip: "Skip",
    see: "See result",
    keys: (count) => `Keys 1–${count}, or arrows`,
  };
  const router = useRouter();
  const advance = useRef<number | null>(null);
  const [picks, setPicks] = useState<(number | null)[]>(() => bank.map(() => null));
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const question = bank[index];
  const answered = picks.filter((pick) => pick != null).length;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("c") || localStorage.getItem(storageKey);
    if (code) {
      const decoded = decode(code);
      if (decoded && decoded.length === bank.length) setPicks(decoded);
    }
    const hash = window.location.hash.replace("#q-", "");
    const hashed = bank.findIndex((item) => item.id === hash);
    if (hashed >= 0) setIndex(hashed);
    setReady(true);
  }, [bank, decode, storageKey]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(storageKey, encodeAnswers(picks));
  }, [picks, ready, storageKey]);

  function go(next: number) {
    if (advance.current != null) window.clearTimeout(advance.current);
    advance.current = null;
    setIndex(next);
  }

  function choose(optionIndex: number) {
    setPicks((current) => current.map((pick, i) => (i === index ? optionIndex : pick)));
    if (advance.current != null) window.clearTimeout(advance.current);
    if (index < bank.length - 1) {
      const next = index + 1;
      advance.current = window.setTimeout(() => {
        advance.current = null;
        setIndex(next);
      }, 160);
    }
  }

  useEffect(() => {
    return () => {
      if (advance.current != null) window.clearTimeout(advance.current);
    };
  }, []);

  function skip() {
    setPicks((current) => current.map((pick, i) => (i === index ? null : pick)));
    if (index < bank.length - 1) go(index + 1);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(Math.min(bank.length - 1, index + 1));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(Math.max(0, index - 1));
      } else if (/^[1-9]$/.test(event.key)) {
        const optionIndex = Number(event.key) - 1;
        if (optionIndex < question.options.length) choose(optionIndex);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section id="test" className="notebook rise rounded-md px-4 py-5 pl-10 shadow-[0_1px_0_rgba(28,25,21,0.04)] sm:px-6 sm:pl-12">
      <div className="flex flex-col gap-1 text-sm text-muted sm:flex-row sm:items-baseline sm:justify-between">
        <p aria-live="polite">{text.progress(answered, bank.length, Math.max(0, minAnswers - answered))}</p>
        <p className="font-display text-seal">
          {String(index + 1).padStart(2, "0")}
          <span className="ml-2 font-body text-sm text-ink">{question.title}</span>
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1" aria-label="Questions">
        {bank.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.title}
            aria-current={i === index ? "step" : undefined}
            onClick={() => go(i)}
            className={`grid h-9 min-w-9 place-items-center rounded-sm px-1 font-display text-sm ${
              i === index ? "bg-seal text-paper" : picks[i] == null ? "bg-rule text-ink" : "bg-ink text-paper"
            }`}
          >
            {i + 1}
          </button>
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
              className={`choice rounded-md border bg-card p-2 text-left ${selected ? "choice-on" : "border-rule"}`}
            >
              <Glyph file={option.file} alt={option.alt} />
              <span className="mt-2 block text-sm leading-snug">
                <span className="mr-2 font-display text-seal">{optionIndex + 1}</span>
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => go(Math.max(0, index - 1))}
          disabled={index === 0}
          className="text-sm text-muted disabled:opacity-40"
        >
          {text.back}
        </button>
        <button type="button" onClick={skip} className="text-sm underline decoration-rule underline-offset-4">
          {text.skip}
        </button>
        <p className="text-xs text-muted">{text.keys(question.options.length)}</p>
        <button
          type="button"
          onClick={() => router.push(`${resultPath}/${encodeAnswers(picks)}`)}
          disabled={answered < minAnswers}
          className="ml-auto bg-ink px-4 py-2 text-sm text-paper disabled:opacity-40"
        >
          {text.see}
        </button>
      </div>
    </section>
  );
}

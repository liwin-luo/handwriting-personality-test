"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import { DIRECTIONS, type Direction } from "@/content";
import { MIN_ZH, profiles, questions } from "@/content/zh.mjs";
import { decodeAnswers, encodeAnswers, pickSamples, scoreAnswers } from "@/lib/score.mjs";

const LABELS: Record<string, string> = {
  structure: "结构",
  finish: "收笔",
  rhythm: "行距节奏",
  character: "多出来的一笔",
};

export function ZhResult({ code }: { code: string }) {
  const router = useRouter();
  const initial = decodeAnswers(code, questions);
  const [picks, setPicks] = useState<(number | null)[] | null>(initial);
  const [copied, setCopied] = useState(false);
  if (!picks) return null;

  const scored = scoreAnswers(questions, picks, MIN_ZH);
  const profile = profiles.find((item) => item.slug === scored.profile) ?? null;
  const samples = profile ? pickSamples(questions, picks, profile.direction as Direction | null, 3) : [];
  const max = Math.max(1, ...DIRECTIONS.map((id) => scored.totals[id]));

  function commit(next: (number | null)[]) {
    const nextCode = encodeAnswers(next);
    setPicks(next);
    router.replace(`/zh/r/${nextCode}`);
  }

  return (
    <article>
      {profile ? (
        <>
          <p className="text-sm tracking-[0.16em] text-seal">这组写法</p>
          <h1 className="mt-2 font-display text-5xl leading-none">{profile.name}</h1>
          <p className="mt-4 text-xl leading-snug">{profile.sentence}</p>
          <p className="mt-3 max-w-xl text-sm text-muted">这是写法的名称，不是性格、健康、诚实或能力。</p>
          <p className="mt-6 max-w-xl text-lg leading-snug">{profile.aside}</p>
          <div className="notebook mt-8 aspect-[4/5] max-w-sm rounded-md p-6 pl-12">
            <p className="text-xs tracking-[0.14em] text-muted">笔迹测验</p>
            <p className="mt-6 font-display text-4xl leading-none">{profile.name}</p>
            <p className="mt-4 text-lg leading-snug">{profile.sentence}</p>
            <div className="mt-8 grid grid-cols-3 gap-2">
              {samples.map((sample) => (
                <Glyph key={sample.file} file={sample.file} alt={sample.alt} />
              ))}
            </div>
          </div>
          <button
            type="button"
            className="mt-4 bg-ink px-4 py-2 text-sm text-paper"
            onClick={async () => {
              await navigator.clipboard.writeText(`${window.location.origin}/zh/r/${encodeAnswers(picks)}`);
              setCopied(true);
            }}
          >
            {copied ? "已复制" : "复制链接"}
          </button>
          <h2 className="mt-10 font-display text-2xl">练一行</h2>
          <p className="mt-3 max-w-xl leading-relaxed">{profile.practice}</p>
          <h2 className="mt-12 font-display text-2xl">四个方向</h2>
          <ul className="mt-4 space-y-3">
            {DIRECTIONS.map((id) => (
              <li key={id}>
                <div className="flex justify-between text-sm">
                  <span>{LABELS[id]}</span>
                  <span className="text-muted">{scored.totals[id]}</span>
                </div>
                <div className="mt-1 h-1.5 bg-rule">
                  <div className="h-full bg-ink" style={{ width: `${(scored.totals[id] / max) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h1 className="font-display text-4xl">还不够四题</h1>
          <p className="mt-4">这条链接里有 {scored.answered} 题。四题就可以出名称。</p>
          <a href={`/zh?c=${code}`} className="mt-4 inline-block bg-ink px-4 py-2 text-sm text-paper">
            继续
          </a>
        </>
      )}
      <h2 className="mt-12 font-display text-2xl">这条链接里的形状</h2>
      <ol className="mt-6 space-y-8">
        {questions.map((question, questionIndex) => (
          <li key={question.id}>
            <p className="text-sm text-muted">{question.title}</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {question.options.map((option, optionIndex) => {
                const selected = picks[questionIndex] === optionIndex;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => commit(picks.map((pick, i) => (i === questionIndex ? optionIndex : pick)))}
                    className={`choice border bg-card p-2 text-left ${selected ? "choice-on" : "border-rule"}`}
                  >
                    <Glyph file={option.file} alt={option.alt} />
                    <span className="mt-1 block text-sm">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

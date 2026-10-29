"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DirectionSpread } from "@/components/DirectionSpread";
import { Glyph } from "@/components/Glyph";
import { choiceNote, countNote, retakeLabel, shareHint, shareLabel } from "@/content/choice-notes.mjs";
import { MIN_ZH, profiles, questions } from "@/content/zh.mjs";
import { decodeAnswers, encodeAnswers, pickSamples, scoreAnswers } from "@/lib/score.mjs";
import { chosenLine, downloadShareCard, shareResult } from "@/lib/share-card.mjs";
import { trackTool } from "@/lib/analytics.mjs";

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
  const [cardError, setCardError] = useState("");
  useEffect(() => {
    trackTool("result_view", { tool: "quiz", lang: "zh" });
  }, []);
  if (!picks) return null;

  const scored = scoreAnswers(questions, picks, MIN_ZH);
  const profile = profiles.find((item) => item.slug === scored.profile) ?? null;
  const samples = profile ? chosenLine(questions, picks) : [];

  function commit(next: (number | null)[]) {
    const nextCode = encodeAnswers(next);
    setPicks(next);
    router.replace(`/zh/r/${nextCode}`);
  }

  return (
    <article>
      {profile ? (
        <>
          <p className="text-sm text-seal">这组写法</p>
          <h1 className="page-h1 mt-2">{profile.name}</h1>
          <p className="mt-4 text-xl leading-snug">{profile.sentence}</p>
          <p className="mt-6 max-w-xl text-lg leading-snug">{profile.aside}</p>
          <p className="mt-3 max-w-xl text-sm text-muted">这是写法的名称，不是性格、健康、诚实或能力。</p>
          <div className="notebook mt-8 max-w-sm p-5">
            <span className="inline-block rounded-full border-[3px] border-ink bg-seal px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-[3px_3px_0_var(--ink)]">
              笔迹测验
            </span>
            <p className="mt-4 font-display text-4xl leading-[0.95]">{profile.name}</p>
            <div className="mt-3 h-2 w-16 rounded-full bg-seal" />
            <p className="mt-3 text-base leading-snug">{profile.sentence}</p>
            <p className="mt-4 text-[9px] font-extrabold uppercase tracking-[0.16em] text-muted">四个方向</p>
            <div className="mt-1.5 grid grid-cols-4 gap-2">
              {scored.ranked.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-xl border-2 border-ink bg-white px-1 py-1.5 text-center"
                >
                  <span className="block min-h-[2.1em] text-[8px] font-extrabold leading-[1.05] text-muted">
                    {LABELS[item.id]}
                  </span>
                  <span className="mt-1 block font-display text-lg leading-none">{item.score}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-6 gap-1.5">
              {samples.map((sample) => (
                <div key={sample.id} className="rounded-lg border-2 border-ink bg-white p-1">
                  <Glyph file={sample.file} alt={sample.alt} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10px] font-extrabold text-muted">handwritingpersonalitytest.online</p>
          </div>
          <div className="no-print mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn"
              onClick={async () => {
                const status = await shareResult({
                  title: profile.name,
                  text: profile.sentence,
                  url: `${window.location.origin}/zh/r/${encodeAnswers(picks)}`,
                });
                setCopied(status === "copied");
              }}
            >
              {copied ? "已复制" : shareLabel.zh}
            </button>
            <button
              type="button"
              className="border border-ink px-4 py-2 text-sm"
              onClick={async () => {
                setCardError("");
                try {
                  await downloadShareCard({
                    kicker: "笔迹测验",
                    name: profile.name,
                    sentence: profile.sentence,
                    files: samples.map((sample) => sample.file),
                    labels: LABELS,
                    ranked: scored.ranked,
                    tallyLabel: "四个方向",
                    filename: `${profile.slug}.png`,
                    lang: "zh",
                  });
                } catch {
                  setCardError("卡片没存下来。改用复制链接。");
                }
              }}
            >
              下载卡片
            </button>
          </div>
          {cardError ? <p className="mt-2 text-sm text-seal">{cardError}</p> : null}
          <p className="mt-2 text-sm text-muted">{shareHint.zh}</p>
          <p className="mt-1 text-sm text-muted">卡片上的字，这页上也有。图只用来转发。</p>
          <h2 className="mt-10 page-h2">练一行</h2>
          <p className="mt-3 max-w-xl leading-relaxed">{profile.practice}</p>
          <h2 className="mt-12 page-h2">四个方向</h2>
          <DirectionSpread
            lang="zh"
            ranked={scored.ranked}
            lead={scored.lead}
            ceiling={scored.ceiling}
            labels={LABELS}
            samples={pickSamples(questions, picks, scored.ranked[0].id, 3)}
            note={countNote.zh}
          />
        </>
      ) : (
        <>
          <h1 className="page-h1">还不够四题</h1>
          <p className="mt-4">这条链接里有 {scored.answered} 题。四题就可以出名称。</p>
          <a href={`/zh?c=${code}`} className="mt-4 inline-block btn">
            继续
          </a>
        </>
      )}
      <h2 className="mt-12 page-h2">这条链接里的形状</h2>
      <p className="mt-2 text-sm text-muted">改一处，链接就变。首页存着的那一份答案不动。</p>
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
            {picks[questionIndex] == null ? null : (
              <p className="mt-2 max-w-xl text-sm leading-relaxed">
                {choiceNote("zh", question.options[picks[questionIndex]!].id)}
              </p>
            )}
          </li>
        ))}
      </ol>
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem("hpt.zh");
          router.push("/zh");
        }}
        className="no-print mt-10 text-sm text-link"
      >
        {retakeLabel.zh}
      </button>
    </article>
  );
}

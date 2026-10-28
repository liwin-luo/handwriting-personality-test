"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DirectionSpread } from "@/components/DirectionSpread";
import { Glyph, GlyphLine } from "@/components/Glyph";
import { MIN_ANSWERS, type QuizQuestion } from "@/content";
import { choiceNote, countNote, retakeLabel, shareHint, shareLabel } from "@/content/choice-notes.mjs";
import { decodeAnswers, encodeAnswers, pickSamples, scoreAnswers } from "@/lib/score.mjs";
import { chosenLine, downloadShareCard, shareResult } from "@/lib/share-card.mjs";
import { trackTool } from "@/lib/analytics.mjs";

function fill(template: string, vars: Record<string, number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ""));
}

type ProfileCopy = { name: string; sentence: string; aside: string; practice: string };

export function LatinResult({
  code,
  locale,
  questions,
  profiles,
  copy,
}: {
  code: string;
  locale: string;
  questions: QuizQuestion[];
  profiles: Record<string, ProfileCopy>;
  copy: {
    eyebrow: string;
    disclaimer: string;
    card: string;
    copy: string;
    copied: string;
    download: string;
    cardError: string;
    cardNote: string;
    drill: string;
    directions: string;
    incompleteTitle: string;
    incompleteBody: string;
    continue: string;
    shapes: string;
    shapesNote: string;
    labels: Record<string, string>;
  };
}) {
  const router = useRouter();
  const initial = decodeAnswers(code, questions);
  const [picks, setPicks] = useState<(number | null)[] | null>(initial);
  const [copied, setCopied] = useState(false);
  const [cardError, setCardError] = useState("");
  useEffect(() => {
    trackTool("result_view", { tool: "quiz", lang: locale });
  }, [locale]);
  if (!picks) return null;

  const scored = scoreAnswers(questions, picks, MIN_ANSWERS);
  const profile = scored.profile ? profiles[scored.profile] : null;
  const samples = profile ? chosenLine(questions, picks) : [];

  function commit(next: (number | null)[]) {
    const nextCode = encodeAnswers(next);
    setPicks(next);
    router.replace(`/${locale}/r/${nextCode}`);
  }

  return (
    <article>
      {profile ? (
        <>
          <p className="text-sm tracking-[0.16em] text-seal">{copy.eyebrow}</p>
          <h1 className="page-h1 mt-2">{profile.name}</h1>
          <p className="mt-4 text-xl leading-snug">{profile.sentence}</p>
          <p className="mt-6 max-w-xl text-lg leading-snug">{profile.aside}</p>
          <p className="mt-3 max-w-xl text-sm text-muted">{copy.disclaimer}</p>
          <div className="notebook mt-8 max-w-sm p-6">
            <p className="text-[11px] tracking-[0.16em] text-muted">{copy.card}</p>
            <p className="mt-4 font-display text-4xl leading-[0.95]">{profile.name}</p>
            <div className="mt-4 h-0.5 w-8 bg-seal" />
            <p className="mt-4 text-lg leading-snug">{profile.sentence}</p>
            <GlyphLine samples={samples} />
            <p className="mt-4 text-[11px] text-muted">handwritingpersonalitytest.online</p>
          </div>
          <div className="no-print mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn"
              onClick={async () => {
                const status = await shareResult({
                  title: profile.name,
                  text: profile.sentence,
                  url: `${window.location.origin}/${locale}/r/${encodeAnswers(picks)}`,
                });
                setCopied(status === "copied");
              }}
            >
              {copied ? copy.copied : shareLabel[locale as keyof typeof shareLabel] || shareLabel.en}
            </button>
            <button
              type="button"
              className="border border-ink px-4 py-2 text-sm"
              onClick={async () => {
                setCardError("");
                try {
                  await downloadShareCard({
                    kicker: copy.card,
                    name: profile.name,
                    sentence: profile.sentence,
                    files: samples.map((sample) => sample.file),
                    filename: `${scored.profile}.png`,
                  });
                } catch {
                  setCardError(copy.cardError);
                }
              }}
            >
              {copy.download}
            </button>
          </div>
          {cardError ? <p className="mt-2 text-sm text-seal">{cardError}</p> : null}
          <p className="mt-2 text-sm text-muted">{shareHint[locale as keyof typeof shareHint] || shareHint.en}</p>
          <p className="mt-1 text-sm text-muted">{copy.cardNote}</p>
          <h2 className="mt-10 page-h2">{copy.drill}</h2>
          <p className="mt-3 max-w-xl leading-relaxed">{profile.practice}</p>
          <h2 className="mt-12 page-h2">{copy.directions}</h2>
          <DirectionSpread
            lang={locale}
            ranked={scored.ranked}
            lead={scored.lead}
            ceiling={scored.ceiling}
            labels={copy.labels}
            samples={pickSamples(questions, picks, scored.ranked[0].id, 3)}
            note={countNote[locale as keyof typeof countNote] || countNote.en}
          />
        </>
      ) : (
        <>
          <h1 className="page-h1">{copy.incompleteTitle}</h1>
          <p className="mt-4">{fill(copy.incompleteBody, { answered: scored.answered })}</p>
          <a href={`/${locale}?c=${code}`} className="mt-4 inline-block btn">
            {copy.continue}
          </a>
        </>
      )}
      <h2 className="mt-12 page-h2">{copy.shapes}</h2>
      <p className="mt-2 text-sm text-muted">{copy.shapesNote}</p>
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
                {choiceNote(locale, question.options[picks[questionIndex]!].id)}
              </p>
            )}
          </li>
        ))}
      </ol>
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem(`hpt.${locale}`);
          router.push(`/${locale}`);
        }}
        className="no-print mt-10 text-sm text-link"
      >
        {retakeLabel[locale as keyof typeof retakeLabel] || retakeLabel.en}
      </button>
    </article>
  );
}

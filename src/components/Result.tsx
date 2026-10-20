"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Glyph, GlyphLine } from "@/components/Glyph";
import { choiceNote, countNote, retakeLabel, shareHint, shareLabel } from "@/content/choice-notes.mjs";
import {
  DIRECTIONS,
  MIN_ANSWERS,
  decodeAnswers,
  encodeAnswers,
  profileBySlug,
  questions,
  scoreAnswers,
} from "@/content";
import { chosenLine, downloadShareCard, shareResult } from "@/lib/share-card.mjs";

const LABELS: Record<(typeof DIRECTIONS)[number], string> = {
  structure: "Structure",
  finish: "Endings",
  rhythm: "Page rhythm",
  character: "Flourish",
};

export function ResultView({ code }: { code: string }) {
  const router = useRouter();
  const initial = decodeAnswers(code);
  const [picks, setPicks] = useState<(number | null)[] | null>(initial);
  const [copied, setCopied] = useState(false);
  const [cardError, setCardError] = useState("");

  useEffect(() => {
    setPicks(decodeAnswers(code));
  }, [code]);

  if (!picks) return null;

  const scored = scoreAnswers(picks);
  const profile = scored.profile ? profileBySlug[scored.profile] : null;
  const samples = profile ? chosenLine(questions, picks) : [];

  function commit(next: (number | null)[]) {
    const nextCode = encodeAnswers(next);
    setPicks(next);
    router.replace(`/r/${nextCode}`);
  }

  async function share() {
    if (!profile) return;
    const status = await shareResult({
      title: profile.name,
      text: profile.sentence,
      url: `${window.location.origin}/r/${encodeAnswers(picks!)}`,
    });
    setCopied(status === "copied");
  }

  async function downloadCard() {
    if (!profile) return;
    setCardError("");
    try {
      await downloadShareCard({
        kicker: "HANDWRITING PERSONALITY TEST",
        name: profile.name,
        sentence: profile.sentence,
        files: samples.map((sample) => sample.file),
        filename: `${profile.slug}.png`,
      });
    } catch {
      setCardError("Could not save the card. Copy the link instead.");
    }
  }

  function retake() {
    localStorage.removeItem("hpt.answers");
    router.push("/");
  }

  return (
    <article>
      {profile ? (
        <>
          <p className="text-sm uppercase tracking-[0.16em] text-seal">Your shapes</p>
          <h1 className="mt-2 font-display text-5xl leading-none">{profile.name}</h1>
          <p className="mt-4 text-xl leading-snug">{profile.sentence}</p>
          <p className="mt-6 max-w-xl text-lg leading-snug">{profile.aside}</p>
          <p className="mt-3 max-w-xl text-sm text-muted">
            A label for the shapes in this link. Not a reading of personality, health, honesty, or ability.
          </p>
          <div className="notebook mt-8 flex aspect-[4/5] max-w-sm flex-col rounded-md p-6 pl-12">
            <p className="text-[11px] tracking-[0.16em] text-muted">HANDWRITING PERSONALITY TEST</p>
            <p className="mt-4 font-display text-4xl leading-[0.95]">{profile.name}</p>
            <div className="mt-4 h-0.5 w-8 bg-seal" />
            <p className="mt-4 text-lg leading-snug">{profile.sentence}</p>
            <GlyphLine samples={samples} />
            <p className="mt-4 text-[11px] text-muted">handwritingpersonalitytest.online</p>
          </div>
          <div className="no-print mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={share} className="bg-ink px-4 py-2 text-sm text-paper">
              {copied ? "Copied" : shareLabel.en}
            </button>
            <button type="button" onClick={downloadCard} className="border border-ink px-4 py-2 text-sm">
              Download card
            </button>
          </div>
          {cardError ? <p className="mt-2 text-sm text-seal">{cardError}</p> : null}
          <p className="mt-2 text-sm text-muted">{shareHint.en}</p>
          <p className="mt-1 text-sm text-muted">The words on the card are also on this page. The picture is only for sharing.</p>
          <h2 className="mt-10 font-display text-2xl">One drill</h2>
          <p className="mt-3 max-w-xl leading-relaxed">{profile.practice}</p>
          <h2 className="mt-12 font-display text-2xl">Four directions</h2>
          <p className="mt-4 max-w-xl leading-relaxed">
            {DIRECTIONS.map((id) => `${LABELS[id]} ${scored.totals[id]}`).join(". ")}.
          </p>
          <p className="mt-2 text-sm text-muted">{countNote.en}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            One direction names the result when it leads by two points. Flourish and page rhythm as the two leaders
            name Daydream Doodler. Any other close finish is Instinctive Mixer.{" "}
            <a className="underline decoration-rule underline-offset-4" href={`/results/${profile.slug}`}>
              About {profile.name}
            </a>
            .
          </p>
        </>
      ) : (
        <>
          <h1 className="font-display text-4xl leading-none">Not enough shapes yet</h1>
          <p className="mt-4">
            This link has {scored.answered} answers. {MIN_ANSWERS} are enough for a name.
          </p>
          <a href={`/?c=${code}`} className="mt-4 inline-block bg-ink px-4 py-2 text-sm text-paper">
            Continue the test
          </a>
        </>
      )}

      <h2 className="mt-12 font-display text-2xl">Shapes in this link</h2>
      <p className="mt-2 text-sm text-muted">Changing a shape updates this link. The test saved on the home page stays as it was.</p>
      <ol className="mt-6 space-y-8">
        {questions.map((question, questionIndex) => (
          <li key={question.id}>
            <p className="text-sm text-muted">{question.title}</p>
            <div className={`mt-2 grid gap-2 ${question.options.length > 2 ? "grid-cols-3" : "grid-cols-2"}`}>
              {question.options.map((option, optionIndex) => {
                const selected = picks[questionIndex] === optionIndex;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => commit(picks.map((pick, i) => (i === questionIndex ? optionIndex : pick)))}
                    className={`rounded-md border bg-card p-2 text-left ${selected ? "border-seal ring-1 ring-seal" : "border-rule"}`}
                  >
                    <Glyph file={option.file} alt={option.alt} loading="lazy" />
                    <span className="mt-1 block text-sm">{option.label}</span>
                  </button>
                );
              })}
            </div>
            {picks[questionIndex] == null ? (
              <p className="mt-1 text-sm text-muted">Skipped</p>
            ) : (
              <p className="mt-2 max-w-xl text-sm leading-relaxed">
                {choiceNote("en", question.options[picks[questionIndex]!].id)}
              </p>
            )}
          </li>
        ))}
      </ol>
      <button type="button" onClick={retake} className="no-print mt-10 text-sm underline decoration-rule underline-offset-4">
        {retakeLabel.en}
      </button>
      {profile ? (
        <p className="no-print mt-6">
          <a href={`/compare?a=${encodeAnswers(picks)}`} className="text-sm underline decoration-rule underline-offset-4">
            Compare with another link
          </a>
        </p>
      ) : null}
      <p className="sr-only">{`/r/${encodeAnswers(picks)}`}</p>
    </article>
  );
}

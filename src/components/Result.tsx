"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import {
  DIRECTIONS,
  MIN_ANSWERS,
  decodeAnswers,
  directionFor,
  encodeAnswers,
  pickSamples,
  profileBySlug,
  questions,
  scoreAnswers,
} from "@/content";

const LABELS: Record<(typeof DIRECTIONS)[number], string> = {
  structure: "Structure",
  finish: "Endings",
  rhythm: "Page rhythm",
  character: "Flourish",
};

async function loadImage(src: string) {
  const image = new Image();
  image.src = src;
  await image.decode();
  return image;
}

function wrap(ctx: CanvasRenderingContext2D, text: string, max: number) {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    const next = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(next).width > max) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

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
  const samples = profile ? pickSamples(picks, directionFor(profile.slug)) : [];
  const max = Math.max(1, ...DIRECTIONS.map((id) => scored.totals[id]));

  function commit(next: (number | null)[]) {
    const nextCode = encodeAnswers(next);
    setPicks(next);
    router.replace(`/r/${nextCode}`);
  }

  async function copyLink() {
    await navigator.clipboard.writeText(`${window.location.origin}/r/${encodeAnswers(picks!)}`);
    setCopied(true);
  }

  async function downloadCard() {
    if (!profile) return;
    setCardError("");
    try {
      await document.fonts.ready;
      const canvas = document.createElement("canvas");
      canvas.width = 800;
      canvas.height = 1000;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("no canvas");
      const font = getComputedStyle(document.body).fontFamily;
      ctx.fillStyle = "#f3ecdf";
      ctx.fillRect(0, 0, 800, 1000);
      ctx.fillStyle = "#b43324";
      ctx.fillRect(56, 72, 2, 860);
      ctx.fillStyle = "#5e564c";
      ctx.font = `16px ${font}`;
      ctx.fillText("HANDWRITING PERSONALITY TEST", 84, 110);
      ctx.fillStyle = "#1c1915";
      ctx.font = `64px ${font}`;
      const nameLines = wrap(ctx, profile.name, 620);
      nameLines.forEach((line, i) => ctx.fillText(line, 84, 210 + i * 72));
      ctx.font = `28px ${font}`;
      const sentence = wrap(ctx, profile.sentence, 620);
      sentence.forEach((line, i) => ctx.fillText(line, 84, 230 + nameLines.length * 72 + i * 40));
      const images = await Promise.all(samples.map((sample) => loadImage(`/samples/${sample.file}`)));
      images.forEach((image, i) => {
        ctx.drawImage(image, 84 + i * 220, 620, 200, 143);
      });
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
      if (!blob) throw new Error("no png");
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${profile.slug}.png`;
      anchor.click();
      URL.revokeObjectURL(url);
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
          <p className="mt-3 max-w-xl text-sm text-muted">
            A label for the shapes in this link. Not a reading of personality, health, honesty, or ability.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-snug">{profile.aside}</p>
          <h2 className="mt-10 font-display text-2xl">One drill</h2>
          <p className="mt-3 max-w-xl leading-relaxed">{profile.practice}</p>
          <div className="notebook mt-8 aspect-[4/5] max-w-sm rounded-md p-6 pl-12">
            <p className="text-xs tracking-[0.14em] text-muted">HANDWRITING PERSONALITY TEST</p>
            <p className="mt-6 font-display text-4xl leading-none">{profile.name}</p>
            <p className="mt-4 text-lg leading-snug">{profile.sentence}</p>
            <div className="mt-8 grid grid-cols-3 gap-2">
              {samples.map((sample) => (
                <Glyph key={sample.file} file={sample.file} alt={sample.alt} />
              ))}
            </div>
          </div>
          <div className="no-print mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={copyLink} className="bg-ink px-4 py-2 text-sm text-paper">
              {copied ? "Copied" : "Copy link"}
            </button>
            <button type="button" onClick={downloadCard} className="border border-ink px-4 py-2 text-sm">
              Download card
            </button>
            <a href={`/compare?a=${encodeAnswers(picks)}`} className="px-2 py-2 text-sm underline decoration-rule underline-offset-4">
              Compare with another
            </a>
          </div>
          {cardError ? <p className="mt-2 text-sm text-seal">{cardError}</p> : null}
          <p className="mt-2 text-sm text-muted">The words on the card are also on this page. The picture is only for sharing.</p>
          <h2 className="mt-12 font-display text-2xl">Four directions</h2>
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
            {picks[questionIndex] == null ? <p className="mt-1 text-sm text-muted">Skipped</p> : null}
          </li>
        ))}
      </ol>
      <button type="button" onClick={retake} className="no-print mt-10 text-sm underline decoration-rule underline-offset-4">
        Retake from a blank page
      </button>
      <p className="sr-only">{`/r/${encodeAnswers(picks)}`}</p>
    </article>
  );
}

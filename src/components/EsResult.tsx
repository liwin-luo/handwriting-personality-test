"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Glyph, GlyphLine } from "@/components/Glyph";
import { DIRECTIONS, MIN_ANSWERS } from "@/content";
import { choiceNote, countNote, retakeLabel, shareHint, shareLabel } from "@/content/choice-notes.mjs";
import { profiles as esProfiles, spanishQuestions } from "@/content/es.mjs";
import { decodeAnswers, encodeAnswers, scoreAnswers } from "@/lib/score.mjs";
import { chosenLine, downloadShareCard, shareResult } from "@/lib/share-card.mjs";

const questions = spanishQuestions();

const LABELS: Record<string, string> = {
  structure: "Estructura",
  finish: "Terminaciones",
  rhythm: "Ritmo de la página",
  character: "Adorno",
};

export function EsResult({ code }: { code: string }) {
  const router = useRouter();
  const initial = decodeAnswers(code, questions);
  const [picks, setPicks] = useState<(number | null)[] | null>(initial);
  const [copied, setCopied] = useState(false);
  const [cardError, setCardError] = useState("");
  if (!picks) return null;

  const scored = scoreAnswers(questions, picks, MIN_ANSWERS);
  const profile = scored.profile ? esProfiles[scored.profile as keyof typeof esProfiles] : null;
  const samples = profile ? chosenLine(questions, picks) : [];

  function commit(next: (number | null)[]) {
    const nextCode = encodeAnswers(next);
    setPicks(next);
    router.replace(`/es/r/${nextCode}`);
  }

  return (
    <article>
      {profile ? (
        <>
          <p className="text-sm tracking-[0.16em] text-seal">Estas formas</p>
          <h1 className="page-h1 mt-2">{profile.name}</h1>
          <p className="mt-4 text-xl leading-snug">{profile.sentence}</p>
          <p className="mt-6 max-w-xl text-lg leading-snug">{profile.aside}</p>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Un nombre para las formas de este enlace. No es una lectura de personalidad, salud, honestidad o capacidad.
          </p>
          <div className="notebook mt-8 max-w-sm rounded-md p-6 pl-12">
            <p className="text-[11px] tracking-[0.16em] text-muted">Test de la letra</p>
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
                  url: `${window.location.origin}/es/r/${encodeAnswers(picks)}`,
                });
                setCopied(status === "copied");
              }}
            >
              {copied ? "Copiado" : shareLabel.es}
            </button>
            <button
              type="button"
              className="border border-ink px-4 py-2 text-sm"
              onClick={async () => {
                setCardError("");
                try {
                  await downloadShareCard({
                    kicker: "Test de la letra",
                    name: profile.name,
                    sentence: profile.sentence,
                    files: samples.map((sample) => sample.file),
                    filename: `${scored.profile}.png`,
                  });
                } catch {
                  setCardError("No se pudo guardar la tarjeta. Copia el enlace.");
                }
              }}
            >
              Descargar la tarjeta
            </button>
          </div>
          {cardError ? <p className="mt-2 text-sm text-seal">{cardError}</p> : null}
          <p className="mt-2 text-sm text-muted">{shareHint.es}</p>
          <p className="mt-1 text-sm text-muted">Las palabras de la tarjeta también están en esta página. La imagen es solo para compartir.</p>
          <h2 className="mt-10 page-h2">Un ejercicio</h2>
          <p className="mt-3 max-w-xl leading-relaxed">{profile.practice}</p>
          <h2 className="mt-12 page-h2">Cuatro direcciones</h2>
          <p className="mt-4 max-w-xl leading-relaxed">
            {DIRECTIONS.map((id) => `${LABELS[id]} ${scored.totals[id]}`).join(". ")}.
          </p>
          <p className="mt-2 text-sm text-muted">{countNote.es}</p>
        </>
      ) : (
        <>
          <h1 className="page-h1">Aún no hay ocho respuestas</h1>
          <p className="mt-4">
            Este enlace tiene {scored.answered} respuestas. Con ocho basta para un nombre.
          </p>
          <a href={`/es?c=${code}`} className="mt-4 inline-block btn">
            Seguir
          </a>
        </>
      )}
      <h2 className="mt-12 page-h2">Formas de este enlace</h2>
      <p className="mt-2 text-sm text-muted">Cambiar una forma actualiza este enlace. El test guardado en la página de inicio se queda como estaba.</p>
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
                {choiceNote("es", question.options[picks[questionIndex]!].id)}
              </p>
            )}
          </li>
        ))}
      </ol>
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem("hpt.es");
          router.push("/es");
        }}
        className="no-print mt-10 text-sm text-link"
      >
        {retakeLabel.es}
      </button>
    </article>
  );
}

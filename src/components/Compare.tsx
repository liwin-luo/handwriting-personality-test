"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import { codeFromInput, decodeAnswers, questions } from "@/content";

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm text-muted">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
        className="mt-1 w-full border border-rule bg-card p-3 text-sm"
        placeholder="Paste a result link"
      />
    </label>
  );
}

export function Compare() {
  const params = useSearchParams();
  const [left, setLeft] = useState(params.get("a") ?? "");
  const [right, setRight] = useState(params.get("b") ?? "");
  const [shown, setShown] = useState(Boolean(params.get("a") && params.get("b")));

  const leftCode = codeFromInput(left);
  const rightCode = codeFromInput(right);
  const leftPicks = leftCode ? decodeAnswers(leftCode) : null;
  const rightPicks = rightCode ? decodeAnswers(rightCode) : null;
  const ready = shown && leftPicks && rightPicks;

  let same = 0;
  let differ = 0;
  let skipped = 0;
  if (leftPicks && rightPicks) {
    questions.forEach((_, i) => {
      if (leftPicks[i] == null || rightPicks[i] == null) skipped += 1;
      else if (leftPicks[i] === rightPicks[i]) same += 1;
      else differ += 1;
    });
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First result" value={left} onChange={setLeft} />
        <Field label="Second result" value={right} onChange={setRight} />
      </div>
      <button type="button" onClick={() => setShown(true)} className="mt-4 bg-ink px-4 py-2 text-sm text-paper">
        Compare shapes
      </button>
      {shown && (!leftPicks || !rightPicks) ? (
        <p className="mt-4 text-sm text-seal">One of those links does not contain a result.</p>
      ) : null}
      {ready ? (
        <>
          <p className="mt-8 text-lg">
            {same} shapes match. {differ} differ. {skipped} were skipped on at least one side.
          </p>
          <ol className="mt-6 space-y-6">
            {questions.map((question, i) => {
              const a = leftPicks[i];
              const b = rightPicks[i];
              const state = a == null || b == null ? "Skipped on one side" : a === b ? "Same shape" : "Different shapes";
              return (
                <li key={question.id} className="border-t border-rule pt-4">
                  <div className="flex justify-between gap-3">
                    <h2 className="font-display text-xl">{question.title}</h2>
                    <p className="text-sm text-muted">{state}</p>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {[a, b].map((pick, side) =>
                      pick == null ? (
                        <p key={side} className="text-sm text-muted">
                          Skipped
                        </p>
                      ) : (
                        <div key={side} className="border border-rule bg-card p-2">
                          <Glyph file={question.options[pick].file} alt={question.options[pick].alt} loading="lazy" />
                          <p className="mt-1 text-sm">{question.options[pick].label}</p>
                        </div>
                      ),
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </>
      ) : null}
    </div>
  );
}

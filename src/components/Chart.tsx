"use client";

import { useState } from "react";
import { Glyph } from "@/components/Glyph";
import { questions } from "@/content";
import { guideBySlug, guides } from "@/content/guides";

const FILTERS = [
  ["all", "All"],
  ["digit", "Numbers"],
  ["letter", "Letters"],
  ["symbol", "Symbols"],
  ["spacing", "Spacing"],
  ["slant", "Slant"],
] as const;

export function Chart() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number][0]>("all");
  const [query, setQuery] = useState("");
  const guideOf = new Map(guides.map((guide) => [guide.questionId, guide.slug]));
  const needle = query.trim().toLowerCase();

  return (
    <div>
      <div className="no-print flex flex-wrap items-center gap-2">
        {FILTERS.map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
            className={`border px-3 py-1 text-sm ${filter === id ? "border-ink bg-ink text-paper" : "border-rule"}`}
          >
            {label}
          </button>
        ))}
        <button type="button" onClick={() => window.print()} className="ml-auto text-sm underline decoration-rule underline-offset-4">
          Print
        </button>
        <label className="mt-2 block w-full text-sm">
          <span className="text-muted">Search shapes</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="open 4, ampersand, slant"
            className="mt-1 w-full border border-rule bg-paper px-3 py-2"
          />
        </label>
      </div>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {questions.flatMap((question) =>
          question.options.map((option) => {
            const guide = guideOf.get(question.id);
            const haystack = `${option.label} ${option.alt} ${question.title}`.toLowerCase();
            const hidden = (filter !== "all" && filter !== question.group) || (needle !== "" && !haystack.includes(needle));
            return (
              <li
                key={option.id}
                id={`${question.id}-${option.id}`}
                data-group={question.group}
                className={`sample-card border border-rule bg-card p-3 ${hidden ? "hidden" : ""}`}
              >
                <Glyph file={option.file} alt={option.alt} loading="lazy" />
                <p className="mt-2 font-display text-xl leading-tight">{option.label}</p>
                <p className="mt-1 text-sm text-muted">{option.alt}</p>
                <p className="mt-3 flex gap-4 text-sm">
                  <a href={`/#q-${question.id}`} className="underline decoration-rule underline-offset-4">
                    Use in the test
                  </a>
                  {guide && guideBySlug[guide] ? (
                    <a href={`/guides/${guide}`} className="underline decoration-rule underline-offset-4">
                      Read the guide
                    </a>
                  ) : null}
                </p>
              </li>
            );
          }),
        )}
      </ul>
    </div>
  );
}

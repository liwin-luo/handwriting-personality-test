"use client";

import { useState } from "react";
import { Glyph } from "@/components/Glyph";
import type { ChartItem } from "@/lib/chart-items";

type ChartCopy = {
  filters: string[][];
  print: string;
  searchLabel: string;
  searchPlaceholder: string;
  useInTest: string;
  readGuide: string;
};

export function Chart({ items, copy }: { items: ChartItem[]; copy: ChartCopy }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();

  return (
    <div>
      <div className="no-print flex flex-wrap items-center gap-2">
        {copy.filters.map(([id, label]) => (
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
          {copy.print}
        </button>
        <label className="mt-2 block w-full text-sm">
          <span className="text-muted">{copy.searchLabel}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.searchPlaceholder}
            className="mt-1 w-full border border-rule bg-paper px-3 py-2"
          />
        </label>
      </div>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((item) => {
          const haystack = `${item.label} ${item.alt} ${item.title}`.toLowerCase();
          const hidden = (filter !== "all" && filter !== item.group) || (needle !== "" && !haystack.includes(needle));
          return (
            <li
              key={item.key}
              id={item.anchor}
              data-group={item.group}
              className={`sample-card border border-rule bg-card p-3 ${hidden ? "hidden" : ""}`}
            >
              <Glyph file={item.file} alt={item.alt} loading="lazy" />
              <p className="mt-2 font-display text-xl leading-tight">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.alt}</p>
              <p className="mt-3 flex gap-4 text-sm">
                <a href={item.testHref} className="underline decoration-rule underline-offset-4">
                  {copy.useInTest}
                </a>
                {item.guideHref ? (
                  <a href={item.guideHref} className="underline decoration-rule underline-offset-4">
                    {copy.readGuide}
                  </a>
                ) : null}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

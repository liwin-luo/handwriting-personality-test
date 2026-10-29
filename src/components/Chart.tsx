"use client";

import { useRef, useState } from "react";
import { Glyph } from "@/components/Glyph";
import { trackTool } from "@/lib/analytics.mjs";
import { withUtm } from "@/lib/utm.mjs";
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
  const started = useRef(false);
  const needle = query.trim().toLowerCase();

  function use(filterId: string) {
    setFilter(filterId);
    if (!started.current) {
      started.current = true;
      trackTool("tool_start", { tool: "sample-chart" });
    }
  }

  function print() {
    trackTool("tool_complete", { tool: "sample-chart", filter });
    window.print();
  }

  return (
    <div>
      <div className="no-print">
        <div className="flex flex-wrap items-center gap-2">
          {copy.filters.map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => use(id)}
              className={`border px-3 py-1.5 text-sm transition-colors ${
                filter === id ? "border-ink bg-ink text-paper" : "border-rule hover:border-ink hover:bg-card"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={print}
            className="border border-ink px-3 py-1.5 text-sm transition-colors hover:bg-card"
          >
            {copy.print}
          </button>
        </div>
        <label className="mt-3 block text-sm">
          <span className="text-muted">{copy.searchLabel}</span>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              if (!started.current) {
                started.current = true;
                trackTool("tool_start", { tool: "sample-chart" });
              }
            }}
            placeholder={copy.searchPlaceholder}
            className="mt-1 w-full border border-rule bg-paper px-3 py-2"
          />
        </label>
      </div>
      <ul className="chart-grid mt-8 grid gap-6 sm:grid-cols-2">
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
                <a href={withUtm(item.testHref, "chart-test")} className="inline-block py-1.5 text-link">
                  {copy.useInTest}
                </a>
                {item.guideHref ? (
                  <a href={withUtm(item.guideHref, "chart-guide")} className="inline-block py-1.5 text-link">
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

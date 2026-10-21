"use client";

import { useEffect, useRef, useState } from "react";
import { trackTool } from "@/lib/analytics.mjs";

function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}

export function SlantTool({
  copy,
}: {
  copy: {
    upload: string;
    choose: string;
    alt: string;
    empty: string;
    align: string;
    left: string;
    right: string;
    upright: string;
    note: string;
  };
}) {
  const [url, setUrl] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [angle, setAngle] = useState(0);
  const started = useRef(false);
  const tracked = useRef(0);

  useEffect(() => {
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [url]);

  const reading = angle <= -8 ? copy.left : angle >= 8 ? copy.right : copy.upright;

  function commit() {
    if (!url || angle === tracked.current) return;
    tracked.current = angle;
    trackTool("tool_complete", { tool: "slant", angle: String(angle) });
  }

  return (
    <div className="mt-8">
      <div>
        <input
          id="slant-file"
          type="file"
          accept="image/*"
          className="peer sr-only"
          aria-describedby="slant-privacy"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            if (url) URL.revokeObjectURL(url);
            setUrl(URL.createObjectURL(file));
            setName(file.name);
            if (!started.current) {
              started.current = true;
              trackTool("tool_start", { tool: "slant" });
            }
          }}
        />
        <label
          htmlFor="slant-file"
          className="flex cursor-pointer flex-col items-center gap-1 border border-dashed border-rule bg-card px-5 py-5 text-center text-sm transition-colors hover:border-seal/50 hover:bg-[#f8ebe6] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-seal"
        >
          <span className="font-medium">{copy.choose}</span>
          <span id="slant-privacy" className="text-xs text-muted">
            {copy.upload}
          </span>
          {name ? <span className="mt-1 max-w-full truncate text-xs text-ink/80">{name}</span> : null}
        </label>
      </div>
      <div className="relative mt-4 aspect-[4/3] overflow-hidden border border-rule bg-card">
        {url ? (
          // Local blob preview. next/image cannot take a user file.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={url} alt={copy.alt} className="h-full w-full object-contain" />
        ) : (
          <p className="absolute inset-x-4 top-4 text-sm text-muted">{copy.empty}</p>
        )}
        <div
          className={`pointer-events-none absolute ${url ? "top-6" : "top-20"} bottom-6 left-1/2 w-1 bg-seal shadow-[0_0_0_1px_rgba(250,246,238,0.6)]`}
          style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
        />
      </div>
      <label htmlFor="slant-angle" className="mt-4 block text-sm">
        {fill(copy.align, { angle, reading })}
        <input
          id="slant-angle"
          type="range"
          min={-40}
          max={40}
          value={angle}
          aria-valuetext={`${angle}° ${reading}`}
          onChange={(event) => setAngle(Number(event.target.value))}
          onPointerUp={commit}
          onKeyUp={commit}
          onBlur={commit}
          className="mt-2 w-full accent-seal"
        />
      </label>
      <p className="mt-3 text-sm text-muted">{copy.note}</p>
    </div>
  );
}

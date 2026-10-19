"use client";

import { useEffect, useState } from "react";

export function SlantTool() {
  const [url, setUrl] = useState<string | null>(null);
  const [angle, setAngle] = useState(8);

  useEffect(() => {
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [url]);

  const reading = angle <= -8 ? "Left of vertical" : angle >= 8 ? "Right of vertical" : "Near vertical";

  return (
    <div className="mt-8">
      <label className="block text-sm">
        A photo stays in this browser. It is not uploaded.
        <input
          type="file"
          accept="image/*"
          className="mt-2 block w-full text-sm"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            if (url) URL.revokeObjectURL(url);
            setUrl(URL.createObjectURL(file));
          }}
        />
      </label>
      <div className="relative mt-4 aspect-[4/3] overflow-hidden border border-rule bg-card">
        {url ? (
          // Local blob preview. next/image cannot take a user file.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={url} alt="Your handwriting sample, kept in this browser" className="h-full w-full object-contain" />
        ) : (
          <p className="flex h-full items-center justify-center px-6 text-center text-sm text-muted">
            Add a photo of a few lines, or use the ruler on the empty page.
          </p>
        )}
        <div
          className="pointer-events-none absolute top-6 bottom-6 left-1/2 w-1 -translate-x-1/2 bg-seal"
          style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
        />
      </div>
      <label className="mt-4 block text-sm">
        Align the red stem with a downstroke. {angle}° from vertical · {reading}
        <input
          type="range"
          min={-40}
          max={40}
          value={angle}
          onChange={(event) => setAngle(Number(event.target.value))}
          className="mt-2 w-full"
        />
      </label>
      <p className="mt-3 text-sm text-muted">
        Within 8° of vertical counts as upright. This is the angle you set, not a reading of the person who wrote.
      </p>
    </div>
  );
}

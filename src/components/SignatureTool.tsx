"use client";

import { useRef, useState, type PointerEvent } from "react";

type Point = { x: number; y: number };
type Stroke = Point[];

function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}

function measure(strokes: Stroke[], labels: { left: string; right: string; upright: string }) {
  const points = strokes.flat();
  if (points.length < 2) return null;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let length = 0;
  const downs: number[] = [];
  for (const stroke of strokes) {
    for (let i = 1; i < stroke.length; i++) {
      const a = stroke[i - 1];
      const b = stroke[i];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy);
      length += dist;
      if (dist > 6 && Math.abs(dy) > Math.abs(dx)) downs.push((Math.atan2(dx, dy) * 180) / Math.PI);
    }
  }
  for (const point of points) {
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  }
  const width = Math.max(1, maxX - minX);
  const height = Math.max(1, maxY - minY);
  const lean = downs.length ? downs.reduce((sum, n) => sum + n, 0) / downs.length : 0;
  const slant = lean <= -8 ? labels.left : lean >= 8 ? labels.right : labels.upright;
  return {
    width: Math.round(width),
    height: Math.round(height),
    length: Math.round(length),
    turns: strokes.length,
    slant,
    degrees: Math.round(lean),
  };
}

export function SignatureTool({
  copy,
}: {
  copy: {
    aria: string;
    clear: string;
    empty: string;
    stats: string;
    left: string;
    right: string;
    upright: string;
  };
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokes = useRef<Stroke[]>([]);
  const drawing = useRef<Stroke | null>(null);
  const [stats, setStats] = useState<ReturnType<typeof measure>>(null);

  function point(event: PointerEvent<HTMLCanvasElement>): Point {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  function paint() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#1c1915";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const stroke of strokes.current) {
      ctx.beginPath();
      stroke.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
      ctx.stroke();
    }
  }

  function down(event: PointerEvent<HTMLCanvasElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    drawing.current = [point(event)];
    strokes.current = [...strokes.current, drawing.current];
  }

  function move(event: PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    drawing.current.push(point(event));
    paint();
  }

  function up() {
    drawing.current = null;
    setStats(measure(strokes.current, copy));
  }

  function clear() {
    strokes.current = [];
    drawing.current = null;
    setStats(null);
    paint();
  }

  return (
    <div className="mt-8">
      <canvas
        ref={canvasRef}
        width={840}
        height={360}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        className="h-auto w-full touch-none border border-rule bg-card"
        aria-label={copy.aria}
      />
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
        <button type="button" onClick={clear} className="underline decoration-rule underline-offset-4">
          {copy.clear}
        </button>
        {stats ? (
          <p>{fill(copy.stats, stats)}</p>
        ) : (
          <p className="text-muted">{copy.empty}</p>
        )}
      </div>
    </div>
  );
}

import { Glyph } from "@/components/Glyph";

const COLOR: Record<string, string> = {
  structure: "#5c6b73",
  finish: "#8a6a45",
  rhythm: "#4f6b5a",
  character: "#7a4e57",
};

const COPY: Record<string, { ahead: (a: string, b: string, n: number) => string; close: (a: string, b: string, n: number) => string; decided: string }> = {
  en: {
    ahead: (a, b, n) => `${a} leads ${b} by ${n}.`,
    close: (a, b, n) => `${a} is first and ${b} is second, ${n} apart. The name stays mixed.`,
    decided: "What decided it",
  },
  zh: {
    ahead: (a, b, n) => `${a}领先${b} ${n} 分。`,
    close: (a, b, n) => `${a}第一，${b}第二，相差 ${n} 分。名称仍是混合。`,
    decided: "哪三笔拉开的",
  },
  es: {
    ahead: (a, b, n) => `${a} le lleva ${n} a ${b}.`,
    close: (a, b, n) => `${a} va primero y ${b} segundo, a ${n}. El nombre sigue mezclado.`,
    decided: "Qué lo decidió",
  },
  pt: {
    ahead: (a, b, n) => `${a} lidera ${b} por ${n}.`,
    close: (a, b, n) => `${a} fica em primeiro e ${b} em segundo, a ${n}. O nome continua misto.`,
    decided: "O que decidiu",
  },
  fr: {
    ahead: (a, b, n) => `${a} devance ${b} de ${n}.`,
    close: (a, b, n) => `${a} est premier et ${b} second, à ${n}. Le nom reste mêlé.`,
    decided: "Ce qui a tranché",
  },
  de: {
    ahead: (a, b, n) => `${a} führt ${b} um ${n}.`,
    close: (a, b, n) => `${a} ist vorn und ${b} dahinter, Abstand ${n}. Der Name bleibt gemischt.`,
    decided: "Was den Vorsprung gemacht hat",
  },
  id: {
    ahead: (a, b, n) => `${a} unggul ${n} dari ${b}.`,
    close: (a, b, n) => `${a} pertama dan ${b} kedua, selisih ${n}. Namanya tetap campuran.`,
    decided: "Yang menentukannya",
  },
  vi: {
    ahead: (a, b, n) => `${a} hơn ${b} ${n} điểm.`,
    close: (a, b, n) => `${a} đứng đầu, ${b} đứng nhì, cách ${n}. Tên vẫn là hỗn hợp.`,
    decided: "Ba nét tạo khoảng cách",
  },
  it: {
    ahead: (a, b, n) => `${a} precede ${b} di ${n}.`,
    close: (a, b, n) => `${a} è primo e ${b} secondo, distanti ${n}. Il nome resta misto.`,
    decided: "Che cosa ha deciso",
  },
  tr: {
    ahead: (a, b, n) => `${a}, ${b} karşısında ${n} önde.`,
    close: (a, b, n) => `${a} birinci, ${b} ikinci, araları ${n}. Ad karışık kalır.`,
    decided: "Bunu belirleyen",
  },
};

export function DirectionSpread({
  lang,
  ranked,
  lead,
  ceiling,
  labels,
  samples,
  note,
}: {
  lang: string;
  ranked: { id: string; score: number }[];
  lead: number;
  ceiling: number;
  labels: Record<string, string>;
  samples: { file: string; alt: string; label: string; weight: number }[];
  note: string;
}) {
  const text = COPY[lang] || COPY.en;
  const max = Math.max(1, ...ranked.map((row) => row.score));
  const first = labels[ranked[0].id];
  const second = labels[ranked[1].id];
  const strokes = samples.filter((sample) => sample.weight > 0).slice(0, 3);
  return (
    <div className="mt-4 max-w-xl">
      <div className="space-y-2">
        {ranked.map((row) => (
          <div key={row.id} className="grid grid-cols-[7.5rem_1fr_2rem] items-center gap-2 text-sm">
            <span>{labels[row.id]}</span>
            <span className="block h-2 bg-rule" aria-hidden="true">
              <span className="block h-2" style={{ width: `${(row.score / max) * 100}%`, background: COLOR[row.id] }} />
            </span>
            <span className="text-right tabular-nums">{row.score}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 leading-relaxed">{lead > ceiling ? text.ahead(first, second, lead) : text.close(first, second, lead)}</p>
      <p className="mt-2 text-sm text-muted">{note}</p>
      {strokes.length > 0 ? (
        <>
          <h3 className="mt-8 font-display text-2xl">{text.decided}</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {strokes.map((sample) => (
              <li key={sample.file} className="rounded-md border border-rule bg-card p-2">
                <Glyph file={sample.file} alt={sample.alt} loading="lazy" />
                <p className="mt-1 text-sm">
                  {sample.label} <span className="text-muted">+{sample.weight}</span>
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

import { CARD_LINE, baselineShift } from "@/lib/share-card.mjs";

export function GlyphLine({
  samples,
}: {
  samples: { id: string; file: string; alt: string }[];
}) {
  return (
    <div className="relative mt-auto">
      <div className="pointer-events-none absolute inset-x-0 border-b border-rule" style={{ top: "28%" }} />
      <div className="pointer-events-none absolute inset-x-0 border-b border-rule" style={{ top: "56%" }} />
      <div className="flex">
        {samples.map((sample) => (
          <div
            key={sample.id}
            className="min-w-0 flex-1"
            style={{ transform: `translateY(${baselineShift(sample.file)}%)` }}
          >
            <Glyph file={sample.file} alt={sample.alt} />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 border-b border-ink" style={{ top: `${CARD_LINE * 100}%` }} />
    </div>
  );
}

export function Glyph({
  file,
  alt,
  loading = "eager",
}: {
  file: string;
  alt: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <img
      src={`/samples/${file}`}
      alt={alt}
      width={280}
      height={200}
      loading={loading}
      className="h-auto w-full"
    />
  );
}

export function GuideLink({
  href,
  title,
  file,
  alt,
}: {
  href: string;
  title: string;
  file: string;
  alt: string;
}) {
  return (
    <a href={href} className="grid grid-cols-[7rem_1fr] items-center gap-4 border-b border-rule py-3">
      <Glyph file={file} alt={alt} loading="lazy" />
      <span className="font-display text-xl leading-tight">{title}</span>
    </a>
  );
}

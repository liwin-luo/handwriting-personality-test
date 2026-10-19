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

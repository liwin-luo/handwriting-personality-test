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

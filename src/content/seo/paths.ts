export const BLOG_SLUGS = [
  "what-is-handwriting-personality-test",
  "how-to-analyze-handwriting",
  "graphology",
  "best-free-handwriting-analysis-tools",
  "how-to-measure-handwriting-slant",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export const TOOL_PATHS = ["/tools/slant", "/tools/signature", "/tools/sample-chart"] as const;

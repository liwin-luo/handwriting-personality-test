export type GuideFigure = { file: string; caption: string };

export type GuideLink = { href: string; label: string; note?: string };

export type Guide = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  questionId: string;
  figures: GuideFigure[];
  origin: string[];
  limits: string[];
  checkSteps: string[];
  useCases: { h3: string; body: string }[];
  related: GuideLink[];
  faqs: { q: string; a: string }[];
};

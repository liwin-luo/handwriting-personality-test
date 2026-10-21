export type Faq = { q: string; a: string };

export type LinkItem = { href: string; label: string; note?: string };

export type Section = {
  id?: string;
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  sub?: { h3: string; paragraphs?: string[]; bullets?: string[] }[];
};

export type ToolSeoContent = {
  slug: string;
  path: string;
  title: string;
  h1: string;
  meta: string;
  kicker: string;
  lede: string;
  outputsTitle: string;
  outputs: string[];
  howToTitle: string;
  howToSteps: string[];
  sections: Section[];
  sampleTitle: string;
  sampleIntro: string;
  sampleBullets: string[];
  sampleResultHref?: string;
  sampleResultLabel?: string;
  useCasesTitle: string;
  useCases: { h3: string; body: string }[];
  faqsTitle: string;
  faqs: Faq[];
  relatedTitle: string;
  relatedTools: LinkItem[];
  relatedGuides: LinkItem[];
  ctaLabel: string;
  ctaHref: string;
  ctaNote: string;
  schemaName: string;
  schemaDescription: string;
  applicationCategory: string;
  featureList: string[];
  howToName?: string;
};

export type HubContent = {
  path: string;
  title: string;
  h1: string;
  meta: string;
  kicker: string;
  lede: string;
  intro: string[];
  categoriesTitle: string;
  categories: {
    h2: string;
    intro: string;
    tools: { href: string; label: string; note: string; action: string }[];
  }[];
  chooseTitle: string;
  chooseSteps: string[];
  trustTitle: string;
  trust: { label: string; value: string }[];
  faqsTitle: string;
  faqs: Faq[];
  ctaLabel: string;
  ctaHref: string;
  ctaNote: string;
  updatedLabel: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  h1: string;
  meta: string;
  kicker: string;
  published: string;
  updated: string;
  readingTime: string;
  intro: string[];
  sections: Section[];
  faqsTitle: string;
  faqs: Faq[];
  sourcesTitle: string;
  sources: { label: string; href: string }[];
  relatedTools: LinkItem[];
  relatedPosts: LinkItem[];
  ctaLabel: string;
  ctaHref: string;
  ctaNote: string;
};

export type ArticleContent = {
  path: string;
  title: string;
  h1: string;
  meta: string;
  kicker: string;
  lede: string;
  published: string;
  updated: string;
  intro: string[];
  sections: Section[];
  faqsTitle: string;
  faqs: Faq[];
  sourcesTitle: string;
  sources: { label: string; href: string }[];
  relatedTools: LinkItem[];
  relatedGuides: LinkItem[];
  ctaLabel: string;
  ctaHref: string;
  ctaNote: string;
};

import { traitsCopyFor as lookup } from "./traits.mjs";

export type TraitLink = { href: string; label: string };

export type TraitSection = {
  id: string;
  h2: string;
  paragraphs: string[];
  links: TraitLink[];
};

export type TraitCopy = {
  title: string;
  description: string;
  h1: string;
  lede: string;
  crumb: string;
  crumbHere: string;
  homeHref: string;
  nav: string;
  homeLink: string;
  homeAfter: string;
  scienceTail: string;
  moreTitle: string;
  faqsTitle: string;
  sections: TraitSection[];
  faqs: { q: string; a: string }[];
};

export function traitsCopyFor(code: string): TraitCopy | undefined {
  return lookup(code) as TraitCopy | undefined;
}

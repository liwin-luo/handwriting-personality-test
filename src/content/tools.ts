import { toolCopy as raw, toolCopyFor as lookup } from "./tools.mjs";

export type ToolFaq = { q: string; a: string };

export type ToolLocale = {
  nav: { chart: string; slant: string; signature: string };
  chart: {
    title: string;
    description: string;
    h1: string;
    lede: string;
    filters: string[][];
    print: string;
    searchLabel: string;
    searchPlaceholder: string;
    useInTest: string;
    readGuide: string;
  };
  slant: {
    title: string;
    description: string;
    kicker: string;
    h1: string;
    introBefore: string;
    scienceLabel: string;
    introAfter: string;
    scienceHref: string;
    upload: string;
    alt: string;
    empty: string;
    align: string;
    left: string;
    right: string;
    upright: string;
    note: string;
    stepsTitle: string;
    steps: string[];
    cta: string;
    ctaHref: string;
    questionsTitle: string;
    faqs: ToolFaq[];
    howtoName: string;
  };
  signature: {
    title: string;
    description: string;
    kicker: string;
    h1: string;
    introBefore: string;
    scienceLabel: string;
    introAfter: string;
    scienceHref: string;
    aria: string;
    clear: string;
    empty: string;
    stats: string;
    left: string;
    right: string;
    upright: string;
    stepsTitle: string;
    steps: string[];
    questionsTitle: string;
    faqs: ToolFaq[];
    howtoName: string;
  };
};

const copy = raw as Record<string, ToolLocale>;

export function toolCopyFor(code: string): ToolLocale | null {
  return (lookup(code) as ToolLocale | null) ?? copy[code] ?? null;
}

export const toolCopy = copy;

import { packs as raw } from "./latin-registry.mjs";

export type LatinPack = {
  localizedQuestions: () => {
    id: string;
    group: string;
    title: string;
    prompt: string;
    options: { id: string; file: string; label: string; alt: string }[];
  }[];
  profiles: Record<string, { name: string; sentence: string; aside: string; practice: string }>;
  guides: {
    slug: string;
    title: string;
    description: string;
    questionId: string;
    figures: { file: string; caption: string }[];
    origin: string[];
    limits: string[];
    faqs: { q: string; a: string }[];
  }[];
  guideBySlug: Record<string, LatinPack["guides"][number]>;
  scienceFaqs: { q: string; a: string }[];
  copy: {
    code: string;
    title: string;
    description: string;
    kicker: string;
    h1: string;
    lede: string;
    namesTitle: string;
    namesBefore: string;
    scienceLink: string;
    namesAfter: string;
    shapesTitle: string;
    appDescription: string;
    resultTitle: string;
    resultDescription: string;
    quiz: {
      progressMore: string;
      progressDone: string;
      back: string;
      skip: string;
      see: string;
      keys: string;
    };
    result: {
      eyebrow: string;
      disclaimer: string;
      card: string;
      copy: string;
      copied: string;
      download: string;
      cardError: string;
      cardNote: string;
      drill: string;
      directions: string;
      incompleteTitle: string;
      incompleteBody: string;
      continue: string;
      shapes: string;
      shapesNote: string;
      labels: Record<string, string>;
    };
    science: {
      title: string;
      description: string;
      crumb: string;
      h1: string;
      lede: string;
      visibleTitle: string;
      visible: string;
      invisibleTitle: string;
      invisible: string;
      study: string;
      questions: string;
    };
    guide: { from: string; limits: string; cta: string; questions: string };
  };
};

export const packs = raw as Record<string, LatinPack>;

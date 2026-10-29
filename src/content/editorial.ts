export const CONTENT_UPDATED = "2026-10-29";

/** Every locale with a full translation. All of them are indexable. */
export const LOCALE_CODES = ["en", "zh", "es", "pt", "fr", "de", "id", "vi", "it", "tr"] as const;

export type LocaleCode = (typeof LOCALE_CODES)[number];

export type Editorial = {
  name: string;
  role: string;
  href: string;
  updatedLabel: string;
};

export const EDITORIAL: Record<"en" | "zh", Editorial> = {
  en: {
    name: "Handwriting Personality Test editorial team",
    role: "Research and editorial",
    href: "/methodology",
    updatedLabel: "Last updated 29 October 2026",
  },
  zh: {
    name: "笔迹测验编辑组",
    role: "研究与编辑",
    href: "/zh/science",
    updatedLabel: "最后更新：2026 年 10 月 29 日",
  },
};

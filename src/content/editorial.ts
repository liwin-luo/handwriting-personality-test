export const CONTENT_UPDATED = "2026-10-28";

export const RETIRED_LOCALES = ["es", "pt", "fr", "de", "id", "vi", "it", "tr"] as const;

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
    updatedLabel: "Last updated 28 October 2026",
  },
  zh: {
    name: "笔迹测验编辑组",
    role: "研究与编辑",
    href: "/zh/science",
    updatedLabel: "最后更新：2026 年 10 月 28 日",
  },
};

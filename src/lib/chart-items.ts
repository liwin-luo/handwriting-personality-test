type Question = {
  id: string;
  group: string;
  title: string;
  options: { id: string; file: string; label: string; alt: string }[];
};

type Guide = { slug: string; questionId: string };

export type ChartItem = {
  key: string;
  anchor: string;
  group: string;
  file: string;
  label: string;
  alt: string;
  title: string;
  testHref: string;
  guideHref: string;
};

export function chartItems({
  questions,
  guides,
  testBase,
  guideBase,
  groupFrom = "group",
}: {
  questions: Question[];
  guides: Guide[];
  testBase: string;
  guideBase: string;
  groupFrom?: "group" | "id";
}): ChartItem[] {
  const guideOf = new Map(guides.map((guide) => [guide.questionId, guide.slug]));
  return questions.flatMap((question) =>
    question.options.map((option) => {
      const slug = guideOf.get(question.id);
      return {
        key: option.id,
        anchor: `${question.id}-${option.id}`,
        group: groupFrom === "id" ? question.id : question.group,
        file: option.file,
        label: option.label,
        alt: option.alt,
        title: question.title,
        testHref: `${testBase}#q-${question.id}`,
        guideHref: slug ? `${guideBase}/${slug}` : "",
      };
    }),
  );
}

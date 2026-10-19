import { questions as englishQuestions } from "./quiz.mjs";

export function makePack({ questionCopy, profiles, guides, scienceFaqs, copy }) {
  function localizedQuestions() {
    return englishQuestions.map((question) => {
      const translated = questionCopy[question.id];
      return {
        ...question,
        title: translated.title,
        prompt: translated.prompt,
        options: question.options.map((option) => {
          const [label, alt] = translated.options[option.id];
          return { ...option, label, alt };
        }),
      };
    });
  }
  return {
    localizedQuestions,
    profiles,
    guides,
    guideBySlug: Object.fromEntries(guides.map((guide) => [guide.slug, guide])),
    scienceFaqs,
    copy,
  };
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LatinResult } from "@/components/LatinResult";
import { packs } from "@/content/packs";
import { decodeAnswers } from "@/lib/score.mjs";
import { pageMeta } from "@/lib/site";
import type { QuizQuestion } from "@/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; code: string }>;
}): Promise<Metadata> {
  const { locale, code } = await params;
  const pack = packs[locale];
  if (!pack) return {};
  return pageMeta({
    title: pack.copy.resultTitle,
    description: pack.copy.resultDescription,
    path: `/${locale}/r/${code}`,
    index: false,
    selfLang: locale,
  });
}

export default async function LocaleResult({ params }: { params: Promise<{ locale: string; code: string }> }) {
  const { locale, code } = await params;
  const pack = packs[locale];
  if (!pack) notFound();
  const questions = pack.localizedQuestions() as QuizQuestion[];
  if (!decodeAnswers(code, questions)) notFound();
  return (
    <div lang={locale}>
      <LatinResult code={code} locale={locale} questions={questions} profiles={pack.profiles} copy={pack.copy.result} />
    </div>
  );
}

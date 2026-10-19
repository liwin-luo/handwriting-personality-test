import { notFound } from "next/navigation";
import { ResultView } from "@/components/Result";
import { decodeAnswers, profileBySlug, scoreAnswers } from "@/content";
import { pageMeta } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const picks = decodeAnswers(code);
  const scored = picks ? scoreAnswers(picks) : null;
  const profile = scored?.profile ? profileBySlug[scored.profile] : null;
  return pageMeta({
    title: profile ? profile.name : "Result",
    description: profile
      ? `${profile.sentence} A share link for shapes picked in the handwriting personality test.`
      : "A handwriting personality test result link.",
    path: `/r/${code}`,
    index: false,
  });
}

export default async function ResultPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  if (!decodeAnswers(code)) notFound();
  return <ResultView code={code} />;
}

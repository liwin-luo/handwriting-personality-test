import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EsResult } from "@/components/EsResult";
import { spanishQuestions } from "@/content/es.mjs";
import { decodeAnswers } from "@/lib/score.mjs";
import { pageMeta } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  return pageMeta({
    title: "Resultado de la letra",
    description: "Un enlace para compartir el test de la letra en español.",
    path: `/es/r/${code}`,
    index: false,
    selfLang: "es",
  });
}

export default async function EsResultPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const picks = decodeAnswers(code, spanishQuestions());
  if (!picks) notFound();
  return (
    <div lang="es">
      <EsResult code={code} />
    </div>
  );
}

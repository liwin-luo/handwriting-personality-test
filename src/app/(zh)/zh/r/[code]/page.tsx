import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ZhResult } from "@/components/ZhResult";
import { MIN_ZH, profiles, questions } from "@/content/zh.mjs";
import { decodeAnswers, scoreAnswers } from "@/lib/score.mjs";
import { pageMeta } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  const picks = decodeAnswers(code, questions);
  const scored = picks ? scoreAnswers(questions, picks, MIN_ZH) : null;
  const profile = scored?.profile ? profiles.find((item: { slug: string }) => item.slug === scored.profile) : null;
  return pageMeta({
    title: profile ? profile.name : "写法结果",
    description: profile ? `${profile.sentence}中文硬笔测验的分享链接。` : "一条中文硬笔测验的分享链接。",
    path: `/zh/r/${code}`,
    index: false,
    selfLang: "zh",
    image: profile ? `/og/labels/label-zh-${profile.slug}.png` : undefined,
  });
}

export default async function ZhResultPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const picks = decodeAnswers(code, questions);
  if (!picks) notFound();
  return (
    <div lang="zh">
      <ZhResult code={code} />
    </div>
  );
}

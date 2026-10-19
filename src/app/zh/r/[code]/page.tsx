import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ZhResult } from "@/components/ZhResult";
import { questions } from "@/content/zh.mjs";
import { decodeAnswers } from "@/lib/score.mjs";
import { pageMeta } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  return pageMeta({
    title: "写法结果",
    description: "一条中文硬笔测验的分享链接。",
    path: `/zh/r/${code}`,
    index: false,
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

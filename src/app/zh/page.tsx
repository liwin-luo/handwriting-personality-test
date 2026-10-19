import { JsonLd } from "@/components/Meta";
import { ZhQuiz } from "@/components/ZhQuiz";
import { homeLangs } from "@/lib/langs";
import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "笔迹测验",
  description: "五道中文硬笔题：大小、字距、行距、连笔、横画。不是拉丁字母测验的翻译。至少四题。不上传。",
  path: "/zh",
  absolute: true,
  langs: homeLangs(),
});

export default function ZhHome() {
  return (
    <div lang="zh">
      <p className="text-sm uppercase tracking-[0.16em] text-seal">免费 · 不上传</p>
      <h1 className="mt-2 max-w-xl font-display text-5xl leading-[0.95] tracking-tight">笔迹测验</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        这五题只看硬笔：大小、字距、行距、连笔、横画。没有 i 上的点和 t 的横。答满四题给出一个写法名称，不是性格诊断。
      </p>
      <div className="mt-8">
        <ZhQuiz />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "笔迹测验",
          url: `${SITE.url}/zh`,
          inLanguage: "zh",
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "五道中文硬笔题。答案留在浏览器里。",
        }}
      />
    </div>
  );
}

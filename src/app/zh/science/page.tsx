import { JsonLd } from "@/components/Meta";
import { SITE, pageMeta } from "@/lib/site";

const faqs = [
  {
    q: "笔迹能看性格吗？",
    a: "能看见的是大小、倾斜、间距、收笔和字是不是封口。从这些笔画推出性格、健康、诚实、智力或该不该雇一个人，已有的研究站不住。",
  },
  {
    q: "笔迹学是真的吗？",
    a: "笔迹学主张字迹能稳定地显示人格。这个主张被检验了几十年，不能当作可靠方法。这个网站不做笔迹学。名称只是一组写法的归档。",
  },
  {
    q: "照片能看出笔压和速度吗？",
    a: "不能。照片只有留下来的墨。颜色深不代表按得重，画面里也没有时间。",
  },
  {
    q: "这个测验实际在做什么？",
    a: "英文版是十二个拉丁字母形状，中文版是五道硬笔题。两边都用四个方向计分，领先两分才给一个名称。名称不是诊断。",
  },
];

export const metadata = pageMeta({
  title: "笔迹分析准不准",
  description: "笔迹看得见什么，以及它不能说明性格、健康、诚实、智力或雇佣。",
  path: "/zh/science",
  pair: { en: `${SITE.url}/science`, zh: `${SITE.url}/zh/science` },
});

export default function ZhScience() {
  return (
    <div lang="zh">
      <h1 className="font-display text-5xl leading-[0.95]">笔迹分析准不准？</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">看得到一笔。看不到一个人。</p>
      <p className="mt-4 leading-relaxed">
        1989 年一份关于招聘中笔迹学的元分析看了 17 项研究。字的内容中性时，笔迹学家的判断接近零。没受过笔迹学训练的心理学家反而更好，这说明他们看的是页面上的词，不是笔画。见
        Neter 与 Ben-Shakhar，Personality and Individual Differences，1989，第 10 卷，第 737–745 页。不要拿一个写法名称做决定。
      </p>
      <h2 className="mt-10 font-display text-2xl">问题</h2>
      <dl className="mt-4 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q}>
            <dt className="font-display text-xl">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${SITE.url}/zh/science`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </div>
  );
}

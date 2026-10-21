import { TraitsScienceLine } from "@/components/TraitsScreen";
import { Crumbs, JsonLd } from "@/components/Meta";
import { AuthorLine } from "@/components/seo/PageParts";
import { scienceLangs } from "@/lib/langs";
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
    q: "字迹会随时间变吗？",
    a: "会。工具、笔、纸、心情、年龄、疲劳都在改一笔。同一只手下周的同一行字，和上个月的不是同一行。测试是一次快照，不是长期结论。",
  },
  {
    q: "公司可以用笔迹分析来招人吗？",
    a: "一些地方的做法和 Neter 与 Ben-Shakhar 1989 年那篇元分析的结论相反，也不一致。无论在哪个国家，用一个写法名称去筛简历或决定录用，都不是一个站得住的方法。",
  },
  {
    q: "法医会看笔迹吗？",
    a: "会，但那是另一件事。法医文件检验比较签名与已知样本之间是否出自同一个人，用的是笔迹鉴定这一套证据方法，不是从字形读性格。两者不要混。",
  },
  {
    q: "这个测验实际在做什么？",
    a: "英文版是十二个拉丁字母形状，中文版是五道硬笔题。两边都用四个方向计分，领先两分才给一个名称。名称不是诊断。",
  },
  {
    q: "左手写会改变结果吗？",
    a: "左手常常把笔往左拉，竖画会往左偏。这是手和纸的角度，不是性格。中文测验不计倾斜，只看大小、字距、行距、连笔和横画。",
  },
];

export const metadata = pageMeta({
  title: "笔迹分析准不准",
  description: "笔迹看得见什么，以及它不能说明性格、健康、诚实、智力或雇佣。",
  path: "/zh/science",
  langs: scienceLangs(),
});

export default function ZhScience() {
  return (
    <div lang="zh">
      <Crumbs items={[{ href: "/zh", label: "首页" }, { label: "科学" }]} />
      <h1 className="font-display text-5xl leading-[0.95]">笔迹分析准不准？</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        看得到一笔。看不到一个人。这一页是网站上每个名称的边界。
      </p>

      <h2 className="mt-10 font-display text-2xl">看得见的</h2>
      <p className="mt-4 leading-relaxed">
        纸面上看得见大小、倾斜、间距、收笔方式，以及字有没有封口。两个人可以指着同一笔说同样的话。这个站的做法都在这个范围里。
      </p>
      <TraitsScienceLine code="zh" />

      <h2 className="mt-10 font-display text-2xl">看不见的</h2>
      <p className="mt-4 leading-relaxed">
        性格、情绪、健康、诚实、智力，以及适不适合一份工作，都不在笔画里。照片也丢掉了笔压和速度。墨色深不是笔重。行距整齐不是写得慢。
      </p>
      <p className="mt-4 leading-relaxed">
        1989 年一份关于招聘中笔迹学的元分析看了 17 项研究。字的内容中性时，笔迹学家的判断接近零。没受过笔迹学训练的心理学家反而更好，这说明他们看的是页面上的词，不是笔画。见
        Neter 与 Ben-Shakhar，Personality and Individual Differences，1989，第 10 卷，第 737–745 页。不要拿一个写法名称做决定。
      </p>

      <h2 className="mt-10 font-display text-2xl">这个测验是用来做什么的</h2>
      <p className="mt-4 leading-relaxed">
        测验把你选中的写法归档到一个虚构名称下面，方便你分享这份归档，而不是一个判决。
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
        <li>想看每一笔的样子，去<a className="text-link" href="/zh/tools/sample-chart">字例图表</a>。</li>
        <li>想量一个笔画的宽窄和倾斜，去<a className="text-link" href="/zh/tools/signature">签名测量</a>。</li>
        <li>计分规则写在<a className="text-link" href="/zh/about">计分页</a>。</li>
        <li>更常见的疑问在<a className="text-link" href="/zh/faq">问答页</a>。</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl">问题</h2>
      <dl className="mt-4 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q}>
            <dt className="font-display text-xl">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
      <AuthorLine lang="zh" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "zh",
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

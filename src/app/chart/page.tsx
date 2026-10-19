import { Chart } from "@/components/Chart";
import { JsonLd } from "@/components/Meta";
import { questions } from "@/content";
import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Handwriting sample chart",
  description: "Every shape in the handwriting personality test: numbers, letters, the ampersand, spacing, and slant. Printable.",
  path: "/chart",
});

export default function ChartPage() {
  const items = questions.flatMap((question) =>
    question.options.map((option) => ({ name: option.alt, url: `${SITE.url}/#q-${question.id}` })),
  );
  return (
    <>
      <h1 className="font-display text-5xl leading-none">Handwriting sample chart</h1>
      <p className="mt-4 max-w-xl leading-relaxed">
        These are the shapes in the test. Filter them, or print the page. A guide exists where one shape has its own question people search for.
      </p>
      <div className="mt-8">
        <Chart />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: item.url,
          })),
        }}
      />
    </>
  );
}

import { TraitsScienceLine } from "@/components/TraitsScreen";
import { Crumbs, JsonLd } from "@/components/Meta";
import { scienceFaqs } from "@/content/es.mjs";
import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "¿Sirve analizar la letra?",
  description:
    "Qué puede ver un test de la letra, y qué no puede decir sobre la personalidad, la salud, la honestidad, la inteligencia o una contratación.",
  path: "/es/science",
  langs: { en: `${SITE.url}/science`, zh: `${SITE.url}/zh/science`, es: `${SITE.url}/es/science` },
});

export default function EsScience() {
  return (
    <div lang="es">
      <Crumbs items={[{ href: "/es", label: "Test" }, { label: "Ciencia" }]} />
      <h1 className="font-display text-5xl leading-[0.95]">¿Sirve analizar la letra?</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        Se puede ver un trazo. No se puede ver a una persona dentro de él. Esta página es el límite de cada nombre del sitio.
      </p>
      <h2 className="mt-10 font-display text-2xl">Lo que se ve</h2>
      <p className="mt-4 leading-relaxed">
        El tamaño, la inclinación, el espacio, cómo termina una letra y si un ojo está cerrado se ven en el papel. Dos personas pueden señalar el mismo trazo y estar de acuerdo.
      </p>
      <TraitsScienceLine code="es" />
      <h2 className="mt-10 font-display text-2xl">Lo que no se ve</h2>
      <p className="mt-4 leading-relaxed">
        La personalidad, el ánimo, la salud, la honestidad, la inteligencia y la aptitud para un trabajo no están en el trazo. Una foto también pierde la presión y la velocidad. La tinta oscura no es una pluma dura. Una línea ordenada no es una línea lenta.
      </p>
      <p className="mt-4 leading-relaxed">
        Un metaanálisis de 1989 sobre la grafología en la contratación revisó 17 estudios. Cuando el texto era neutro, las puntuaciones de los grafólogos quedaron cerca de cero. Los psicólogos sin formación en grafología lo hicieron mejor que los grafólogos, lo que apunta a las palabras de la página y no a los trazos. Véase Neter y Ben-Shakhar, Personality and Individual Differences, 1989, volumen 10, páginas 737–745. No apoyes una decisión en un nombre de la letra.
      </p>
      <h2 className="mt-10 font-display text-2xl">Preguntas</h2>
      <dl className="mt-4 space-y-6">
        {scienceFaqs.map((faq) => (
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
          url: `${SITE.url}/es/science`,
          mainEntity: scienceFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />
    </div>
  );
}

import { TraitsBlurb } from "@/components/TraitsScreen";
import { EsQuiz } from "@/components/EsQuiz";
import { GuideLink } from "@/components/Glyph";
import { JsonLd } from "@/components/Meta";
import { guides, profiles } from "@/content/es.mjs";
import { homeLangs } from "@/lib/langs";
import { SITE, pageMeta } from "@/lib/site";

const names = Object.entries(profiles);

export const metadata = pageMeta({
  title: "Test de personalidad según la letra",
  description:
    "Un test gratis de la letra. Eliges las formas que escribes de verdad. Ocho respuestas dan un nombre ficticio. No se sube nada.",
  path: "/es",
  absolute: true,
  langs: homeLangs(),
});

export default function EsHome() {
  return (
    <div lang="es">
      <p className="text-sm uppercase tracking-[0.16em] text-seal">Gratis · sin subir nada</p>
      <h1 className="mt-2 max-w-xl font-display text-5xl leading-[0.95] tracking-tight">Test de personalidad según la letra</h1>
      <p className="mt-4 max-w-xl text-lg leading-snug">
        Elige las formas que escribes. Con ocho respuestas basta. El nombre es una etiqueta para esas formas, no un diagnóstico. Las teclas 1, 2 y 3 eligen una forma.
      </p>
      <div className="mt-8">
        <EsQuiz />
      </div>
      <section className="mt-16">
        <h2 className="font-display text-3xl">Seis nombres ficticios</h2>
        <p className="mt-3 max-w-xl leading-relaxed">
          Cada nombre junta una manera de dibujar. Léelo antes de compartirlo. La{" "}
          <a className="text-link" href="/es/science">
            página de ciencia
          </a>{" "}
          dice qué no puede demostrar un trazo.
        </p>
        <ul className="mt-6 divide-y divide-rule border-y border-rule">
          {names.map(([slug, profile]) => (
            <li key={slug} className="flex items-baseline justify-between gap-4 py-3">
              <span className="font-display text-xl">{profile.name}</span>
              <span className="text-right text-sm text-muted">{profile.sentence}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-16">
        <h2 className="font-display text-3xl">Una forma, una página</h2>
        <TraitsBlurb code="es" />
        <ul className="mt-4 border-t border-rule">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <GuideLink
                href={`/es/guides/${guide.slug}`}
                title={guide.title}
                file={guide.figures[0].file}
                alt={guide.figures[0].caption}
              />
            </li>
          ))}
        </ul>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Test de personalidad según la letra",
          url: `${SITE.url}/es`,
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Web",
          inLanguage: "es",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Elige formas escritas a mano y recibe un nombre ficticio. Las respuestas se quedan en el enlace.",
        }}
      />
    </div>
  );
}

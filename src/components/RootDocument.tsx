import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Literata } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/Meta";
import { Shell } from "@/components/Shell";
import { SITE } from "@/lib/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}: Free 19-Shape Test`, template: `%s · ${SITE.name}` },
  description:
    "A free handwriting personality test. Pick the shapes you actually write. Eight answers show a fictional label. Nothing is uploaded.",
  applicationName: SITE.name,
  referrer: "origin",
  formatDetection: { telephone: false, email: false, address: false },
};

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const body = Literata({ subsets: ["latin"], variable: "--font-literata" });

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/og.jpg`,
    width: 1280,
    height: 720,
  },
  email: SITE.email,
  description:
    "An independent, free handwriting personality test. The site publishes visible-shape references, measuring tools, and the limits of handwriting analysis.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "editorial",
    email: SITE.email,
    availableLanguage: ["English", "Chinese"],
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: ["en", "zh"],
  publisher: { "@id": `${SITE.url}/#organization` },
};

export function RootDocument({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <Shell>{children}</Shell>
        <Analytics />
      </body>
    </html>
  );
}

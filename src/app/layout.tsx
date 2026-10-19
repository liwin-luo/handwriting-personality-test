import type { Metadata } from "next";
import { Fraunces, Literata } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Shell } from "@/components/Shell";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const body = Literata({ subsets: ["latin"], variable: "--font-literata" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: "A free handwriting personality test. Pick the shapes you write. Nothing is uploaded.",
  referrer: "origin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <Shell>{children}</Shell>
        <Analytics />
      </body>
    </html>
  );
}

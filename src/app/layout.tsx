import type { Metadata } from "next";
import { Fraunces, Literata } from "next/font/google";
import { Analytics } from "@/components/Analytics";
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
        <header className="border-b border-rule">
          <div className="mx-auto flex max-w-3xl items-start justify-between gap-4 px-5 py-4">
            <a href="/" className="font-display text-lg leading-tight tracking-tight sm:text-xl">
              Handwriting
              <br className="sm:hidden" /> Personality Test
            </a>
            <nav className="flex shrink-0 gap-4 pt-1 text-sm">
              <a href="/chart">Chart</a>
              <a href="/science">Science</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-5 py-10">{children}</main>
        <footer className="border-t border-rule">
          <nav className="mx-auto flex max-w-3xl flex-wrap gap-x-5 gap-y-2 px-5 py-8 text-sm text-muted">
            <a href="/results">Profiles</a>
            <a href="/chart">Chart</a>
            <a href="/science">Science</a>
            <a href="/about">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </nav>
          <p className="mx-auto max-w-3xl px-5 pb-8 text-xs text-muted">handwritingpersonalitytest.online</p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}

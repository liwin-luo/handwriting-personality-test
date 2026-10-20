import type { ReactNode } from "react";
import { Fraunces, Literata } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Shell } from "@/components/Shell";

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const body = Literata({ subsets: ["latin"], variable: "--font-literata" });

export function RootDocument({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <Shell>{children}</Shell>
        <Analytics />
      </body>
    </html>
  );
}

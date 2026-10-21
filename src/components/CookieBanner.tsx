"use client";

import { useEffect, useState } from "react";
import { consentCopy, readConsent, writeConsent } from "@/lib/consent.mjs";

export function CookieBanner({ lang }: { lang: string }) {
  const [choice, setChoice] = useState<string | null | undefined>(undefined);
  const text = consentCopy(lang);

  useEffect(() => {
    setChoice(readConsent());
  }, []);

  if (choice !== null) return null;

  function choose(next: "all" | "essential") {
    writeConsent(next);
    setChoice(next);
  }

  return (
    <>
      <div className="h-36 sm:h-28" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-card" lang={lang}>
        <div className="mx-auto flex max-w-3xl flex-col gap-1.5 px-5 py-2.5 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
          <div className="mr-auto text-sm leading-tight">
            <p>
              {text.before}<strong className="font-medium">{text.emphasis}</strong>{text.after}
            </p>
            <a className="mt-1 inline-block underline decoration-ink/40 underline-offset-4" href="/privacy">
              {text.privacy}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:w-44 sm:grid-cols-none sm:flex-col">
            <button type="button" className="bg-ink px-3 py-2 text-sm text-paper" onClick={() => choose("all")}>
              {text.accept}
            </button>
            <button type="button" className="bg-rule px-3 py-2 text-sm" onClick={() => choose("essential")}>
              {text.reject}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

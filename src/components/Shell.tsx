"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeList } from "@/content/locale-list.mjs";
import { seriesFor } from "@/content/series.mjs";
import { toolCopyFor } from "@/content/tools";
import { languageHref, preferredLanguage, suggestCopy } from "@/lib/lang-switch.mjs";

const SKIP_KEY = "hpt.lang-skip";

const languages = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  ...localeList.map((item) => ({ code: item.code, label: item.label })),
];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname() || "/";
  const zh = path === "/zh" || path.startsWith("/zh/");
  const locale = localeList.find((item) => path === `/${item.code}` || path.startsWith(`/${item.code}/`));
  const lang = zh ? "zh" : locale ? locale.code : "en";
  const prefix = zh ? "/zh" : locale ? `/${locale.code}` : "";
  const tools = toolCopyFor(lang)!;
  const series = seriesFor(lang);
  const scienceHref = `${prefix}/science`;
  const scienceLabel = zh ? "科学" : locale ? locale.science : "Science";
  const marksLabel = zh ? "写法" : locale ? locale.marks : "Marks";
  const [suggest, setSuggest] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
    const code = preferredLanguage(tags, lang);
    const skipped = (localStorage.getItem(SKIP_KEY) || "").split(",");
    setSuggest(code && !skipped.includes(code) ? code : null);
  }, [lang]);

  function dismissSuggest() {
    const skipped = (localStorage.getItem(SKIP_KEY) || "").split(",").filter(Boolean);
    if (suggest && !skipped.includes(suggest)) skipped.push(suggest);
    localStorage.setItem(SKIP_KEY, skipped.join(","));
    setSuggest(null);
  }

  return (
    <>
      <header className="relative z-40 border-b border-rule">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
          <a href={zh ? "/zh" : locale ? `/${locale.code}` : "/"} className="font-display text-lg leading-tight tracking-tight sm:text-xl">
            {zh ? "笔迹测验" : locale ? locale.brand : "Handwriting Personality Test"}
          </a>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:justify-end sm:pt-1">
            <a href={`${prefix}/chart`}>{tools.nav.chart}</a>
            <a href={`${prefix}/tools/slant`}>{tools.nav.slant}</a>
            <a href={`${prefix}/tools/signature`}>{tools.nav.signature}</a>
            <a href={scienceHref}>{scienceLabel}</a>
            <details className="lang-menu relative ml-auto sm:ml-2">
              <summary className="flex cursor-pointer items-center gap-2 border border-ink bg-card px-3 py-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
                  <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.25" />
                  <ellipse cx="8" cy="8" rx="2.5" ry="6.25" fill="none" stroke="currentColor" strokeWidth="1.25" />
                  <path d="M2.2 8h11.6M3.2 5.2h9.6M3.2 10.8h9.6" fill="none" stroke="currentColor" strokeWidth="1.25" />
                </svg>
                <span>{languages.find((item) => item.code === lang)?.label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="lang-chevron shrink-0">
                  <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
                </svg>
              </summary>
              <div className="absolute right-0 z-30 mt-2 min-w-52 border border-ink bg-paper py-1 shadow-[0_12px_28px_-18px_rgba(28,25,21,0.45)]">
                {languages.map((item) => (
                  <a
                    key={item.code}
                    href={languageHref(item.code, path)}
                    hrefLang={item.code}
                    lang={item.code}
                    aria-current={item.code === lang ? "true" : undefined}
                    className={`flex items-baseline gap-3 px-3 py-1.5 ${item.code === lang ? "text-seal" : ""}`}
                  >
                    <span className="w-6 text-xs tracking-wide">{item.code.toUpperCase()}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </details>
          </nav>
        </div>
      </header>
      {suggest ? (
        <div className="border-b border-rule bg-card" lang={suggest}>
          <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3 text-sm">
            <p className="mr-auto">{suggestCopy[suggest as keyof typeof suggestCopy].note}</p>
            <a className="bg-ink px-3 py-1.5 text-paper" href={languageHref(suggest, path)}>
              {suggestCopy[suggest as keyof typeof suggestCopy].yes}
            </a>
            <button type="button" className="text-muted" onClick={dismissSuggest}>
              {suggestCopy[suggest as keyof typeof suggestCopy].no}
            </button>
          </div>
        </div>
      ) : null}
      <main className="mx-auto max-w-3xl px-5 py-10">{children}</main>
      <footer className="border-t border-rule">
        <nav className="mx-auto flex max-w-3xl flex-wrap gap-x-5 gap-y-2 px-5 py-8 text-sm text-muted">
          <a href={`${prefix}/chart`}>{tools.nav.chart}</a>
          <a href={`${prefix}/tools/slant`}>{tools.nav.slant}</a>
          <a href={`${prefix}/tools/signature`}>{tools.nav.signature}</a>
          <a href={scienceHref}>{scienceLabel}</a>
          <a href={`${prefix}/guides`}>{marksLabel}</a>
          <a href={`${prefix}/faq`}>{series.navFaq}</a>
          <a href={`${prefix}/about`}>{series.navAbout}</a>
          {zh || locale ? null : (
            <>
              <a href="/results">Profiles</a>
              <a href="/contact">Contact</a>
            </>
          )}
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
        <p className="mx-auto max-w-3xl px-5 pb-8 text-xs text-muted">handwritingpersonalitytest.online</p>
      </footer>
    </>
  );
}

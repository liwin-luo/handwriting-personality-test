"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeList } from "@/content/locale-list.mjs";
import { seriesFor } from "@/content/series.mjs";
import { toolCopyFor } from "@/content/tools";
import { CookieBanner } from "@/components/CookieBanner";
import { bannerFor, languageHref, preferredLanguage } from "@/lib/lang-switch.mjs";

const SKIP_KEY = "hpt.lang-skip";

const navLink = "inline-block py-1.5 hover:underline hover:decoration-ink/40 hover:underline-offset-4";

const navLinkWide = "hidden py-1.5 hover:underline hover:decoration-ink/40 hover:underline-offset-4 md:inline-block";

const footLink = "inline-block py-1.5 hover:text-ink hover:underline hover:decoration-ink/40 hover:underline-offset-4";

const indexedLanguages = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
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
  const marksLabel = zh ? "写法" : locale ? locale.marks : "Guides";
  const toolsLabel = zh ? "工具" : "Tools";
  const toolsHref = zh ? "/zh/tools" : "/tools";
  const chartHref = zh ? "/zh/tools/sample-chart" : locale ? `${prefix}/chart` : "/tools/sample-chart";
  const menuLanguages = locale
    ? [...indexedLanguages, { code: locale.code, label: locale.label }]
    : indexedLanguages;
  const [suggest, setSuggest] = useState<string | null>(null);
  const banner = suggest ? bannerFor(lang, suggest) : null;

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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {zh ? "跳到正文" : "Skip to content"}
      </a>
      <header className="relative z-40 border-b border-rule">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <a
            href={zh ? "/zh" : locale ? `/${locale.code}` : "/"}
            className="inline-block shrink-0 whitespace-nowrap py-1 font-display text-lg leading-tight tracking-tight"
          >
            {zh ? "笔迹测验" : locale ? locale.brand : "Handwriting Personality Test"}
          </a>
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:justify-end"
          >
            {locale ? null : <a className={navLink} href={toolsHref}>{toolsLabel}</a>}
            <a className={navLink} href={`${prefix}/guides`}>{marksLabel}</a>
            <a className={navLink} href={scienceHref}>{scienceLabel}</a>
            {zh || locale ? null : <a className={navLinkWide} href="/blog">Blog</a>}
            {zh || locale ? null : <a className={navLinkWide} href="/methodology">Method</a>}
            <a className={navLinkWide} href={`${prefix}/about`}>{series.navAbout}</a>
            <details className="lang-menu relative ml-auto sm:ml-3">
              <summary className="flex cursor-pointer items-center gap-2 border border-ink bg-card px-3 py-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
                  <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.25" />
                  <ellipse cx="8" cy="8" rx="2.5" ry="6.25" fill="none" stroke="currentColor" strokeWidth="1.25" />
                  <path d="M2.2 8h11.6M3.2 5.2h9.6M3.2 10.8h9.6" fill="none" stroke="currentColor" strokeWidth="1.25" />
                </svg>
                <span>{menuLanguages.find((item) => item.code === lang)?.label}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="lang-chevron shrink-0">
                  <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
                </svg>
              </summary>
              <div className="absolute right-0 z-30 mt-2 min-w-52 border border-ink bg-paper py-1 shadow-[0_12px_28px_-18px_rgba(28,25,21,0.45)]">
                {menuLanguages.map((item) => (
                  <a
                    key={item.code}
                    href={languageHref(item.code, path)}
                    hrefLang={item.code}
                    lang={item.code}
                    aria-current={item.code === lang ? "page" : undefined}
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
      {suggest && banner ? (
        <div className="border-b border-rule bg-card" lang={lang}>
          <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3 text-sm">
            <p className="mr-auto">{banner.note}</p>
            <a className="bg-ink px-3 py-1.5 text-paper" href={languageHref(suggest, path)}>
              {banner.yes}
            </a>
            <button type="button" className="py-1.5 text-muted" onClick={dismissSuggest}>
              {banner.no}
            </button>
          </div>
        </div>
      ) : null}
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-5 py-10 outline-none">{children}</main>
      <footer className="border-t border-rule">
        <nav aria-label="Footer" className="mx-auto max-w-3xl space-y-1 px-5 py-8 text-sm text-muted">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {locale ? null : <a className={footLink} href={toolsHref}>{toolsLabel}</a>}
            <a className={footLink} href={`${prefix}/guides`}>{marksLabel}</a>
            <a className={footLink} href={`${prefix}/faq`}>{series.navFaq}</a>
            <a className={footLink} href={`${prefix}/about`}>{series.navAbout}</a>
            <a className={footLink} href={scienceHref}>{scienceLabel}</a>
            {zh || locale ? null : <a className={footLink} href="/blog">Blog</a>}
            {zh || locale ? null : <a className={footLink} href="/methodology">Methodology</a>}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a className={footLink} href={chartHref}>{tools.nav.chart}</a>
            <a className={footLink} href={`${prefix}/tools/slant`}>{tools.nav.slant}</a>
            <a className={footLink} href={`${prefix}/tools/signature`}>{tools.nav.signature}</a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {zh || locale ? null : (
              <>
                <a className={footLink} href="/results">Six names</a>
                <a className={footLink} href="/contact">Contact</a>
              </>
            )}
            <a className={footLink} href="/privacy">Privacy</a>
            <a className={footLink} href="/terms">Terms</a>
          </div>
        </nav>
        <p className="mx-auto max-w-3xl px-5 pb-8 text-xs text-muted">handwritingpersonalitytest.online</p>
      </footer>
      <CookieBanner lang={lang} />
    </>
  );
}

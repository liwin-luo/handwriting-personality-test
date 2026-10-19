"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname() || "/";
  const zh = path === "/zh" || path.startsWith("/zh/");

  useEffect(() => {
    document.documentElement.lang = zh ? "zh" : "en";
  }, [zh]);

  return (
    <>
      <header className="border-b border-rule">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
          <a href={zh ? "/zh" : "/"} className="font-display text-lg leading-tight tracking-tight sm:text-xl">
            {zh ? "笔迹测验" : "Handwriting Personality Test"}
          </a>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm sm:justify-end sm:pt-1">
            {zh ? (
              <>
                <a href="/zh/science">科学</a>
                <a href="/">English</a>
              </>
            ) : (
              <>
                <a href="/chart">Chart</a>
                <a href="/tools/slant">Slant</a>
                <a href="/tools/signature">Signature</a>
                <a href="/science">Science</a>
                <a href="/zh">中文</a>
              </>
            )}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-10">{children}</main>
      <footer className="border-t border-rule">
        <nav className="mx-auto flex max-w-3xl flex-wrap gap-x-5 gap-y-2 px-5 py-8 text-sm text-muted">
          {zh ? (
            <>
              <a href="/zh/science">科学</a>
              <a href="/tools/slant">倾斜尺</a>
              <a href="/">English</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </>
          ) : (
            <>
              <a href="/results">Profiles</a>
              <a href="/chart">Chart</a>
              <a href="/tools/slant">Slant</a>
              <a href="/tools/signature">Signature</a>
              <a href="/science">Science</a>
              <a href="/about">About</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </>
          )}
        </nav>
        <p className="mx-auto max-w-3xl px-5 pb-8 text-xs text-muted">handwritingpersonalitytest.online</p>
      </footer>
    </>
  );
}

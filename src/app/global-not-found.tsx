import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { pageMeta, rootMetadata } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  ...rootMetadata,
  ...pageMeta({
    title: "Page not found",
    description: "That page is not on this site.",
    path: "/404",
    index: false,
  }),
};

export default function GlobalNotFound() {
  return (
    <RootDocument lang="en">
      <h1 className="font-display text-5xl leading-none">Page not found</h1>
      <p className="mt-4">
        <a className="underline decoration-rule underline-offset-4" href="/">
          Back to the test
        </a>
      </p>
    </RootDocument>
  );
}

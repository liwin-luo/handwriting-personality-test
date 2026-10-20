import { Suspense } from "react";
import { Compare } from "@/components/Compare";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Compare two results",
  description: "Compare the shapes in two handwriting personality test links. Matching shapes only.",
  path: "/compare",
  index: false,
});

export default function ComparePage() {
  return (
    <>
      <h1 className="font-display text-5xl leading-none">Compare two results</h1>
      <p className="mt-4 max-w-xl leading-relaxed">
        Paste two result links. This page marks which shapes match. It does not say whether two people get along, belong together, or should work together.
      </p>
      <div className="mt-8">
        <Suspense>
          <Compare />
        </Suspense>
      </div>
    </>
  );
}

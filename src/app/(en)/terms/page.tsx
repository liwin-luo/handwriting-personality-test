import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms",
  description: "The handwriting personality test is a fictional labeling of shapes, not advice.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <h1 className="font-display text-5xl leading-none">Terms</h1>
      <p className="mt-4 leading-relaxed">
        The test is for curiosity. The six names are fictional labels for shapes you selected. They are not medical, psychological, forensic, educational, or employment advice.
      </p>
      <p className="mt-4 leading-relaxed">
        Do not use a result to judge another person’s health, honesty, intelligence, or suitability for a job, a relationship, or a loan. The site is provided as it is, without a promise that a label will stay interesting or that a shared link will remain private once you send it.
      </p>
    </>
  );
}

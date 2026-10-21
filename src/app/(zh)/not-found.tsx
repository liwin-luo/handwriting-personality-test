import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Page not found",
  description: "That page is not on this site.",
  path: "/404",
  index: false,
});

export default function NotFound() {
  return (
    <>
      <h1 className="font-display text-5xl leading-none">Page not found</h1>
      <p className="mt-4">
        <a className="text-link" href="/">
          Back to the test
        </a>
      </p>
    </>
  );
}

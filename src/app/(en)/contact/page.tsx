import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Email the handwriting personality test. Ask about the quiz, the measurement tools, a privacy question, or a page that does not match its own claim.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <h1 className="font-display text-5xl leading-none">Contact</h1>
      <p className="mt-4 leading-relaxed">
        Email{" "}
        <a className="text-link" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        . There is no account to recover and no order to look up.
      </p>
    </>
  );
}

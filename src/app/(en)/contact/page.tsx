import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact",
  description: "Email the handwriting personality test.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <h1 className="font-display text-5xl leading-none">Contact</h1>
      <p className="mt-4 leading-relaxed">
        Email{" "}
        <a className="underline decoration-rule underline-offset-4" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        . There is no account to recover and no order to look up.
      </p>
    </>
  );
}

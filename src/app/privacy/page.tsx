import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy",
  description: "What the handwriting personality test stores, what a result link contains, and what analytics can see.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <h1 className="font-display text-5xl leading-none">Privacy</h1>
      <p className="mt-4 leading-relaxed">
        The test runs in your browser. There is no account. Your answers are saved in local storage on this device under the key <code>hpt.answers</code> so you can resume. Retake clears that key.
      </p>
      <p className="mt-4 leading-relaxed">
        A result link puts the choices in the address, like <code>/r/1...</code>. Anyone with the link can see the same shapes. Opening the link sends that address to the host, so the code can appear in ordinary server logs. We do not keep a profile, and the page is marked noindex. Page-view analytics receives the visit with the code removed from the path.
      </p>
      <p className="mt-4 leading-relaxed">
        This version does not ask you to upload a photo. Do not put your name, phone number, or signature in a link you share. Questions can go to{" "}
        <a className="underline decoration-rule underline-offset-4" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        .
      </p>
    </>
  );
}

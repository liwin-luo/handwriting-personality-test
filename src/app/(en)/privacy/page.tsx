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
        A result link puts the choices in the address, like <code>/r/1...</code>. Anyone with the link can see the same shapes. Opening the link sends that address to the host, so the code can appear in ordinary server logs. We do not keep a profile, and the page is marked noindex. Page-view analytics receives the visit with the code removed from the path, and only after you choose Accept. Reject non-essential and these events are not sent. That choice is stored on this device under <code>hpt.consent</code>.
      </p>
      <p className="mt-4 leading-relaxed">
        Three interaction events are sent: <code>tool_start</code> when you begin a test or a tool, <code>tool_complete</code> when you reach an output, and <code>result_view</code> when a result page opens. They name the tool and the language, and they carry a count of answers or a measurement, never the answers themselves. A drawing or a photo never leaves your device, so it cannot be part of any event.
      </p>
      <p className="mt-4 leading-relaxed">
        Links inside the site carry campaign parameters (<code>utm_source</code>, <code>utm_medium</code>, <code>utm_content</code>) so we can tell which page sent you to a tool. They describe the link, not you, and they are not sent back to us as personal data.
      </p>
      <p className="mt-4 leading-relaxed">
        This version does not ask you to upload a photo. Do not put your name, phone number, or signature in a link you share. Questions can go to{" "}
        <a className="text-link" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        .
      </p>
    </>
  );
}

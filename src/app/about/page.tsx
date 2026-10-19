import { MIN_ANSWERS } from "@/content";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "About",
  description: "How the handwriting personality test scores shapes, and what the six labels are for.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <h1 className="font-display text-5xl leading-none">About</h1>
      <p className="mt-4 leading-relaxed">
        Handwriting Personality Test asks you to pick the closest shape for twelve everyday marks: 4, 7, a, g, 0, 1, t, i, y, an ampersand, word spacing, and slant. The pictures are drawings of those marks, made for this site. {MIN_ANSWERS} answers are enough. You can skip and you can change any answer from the result.
      </p>
      <h2 className="mt-10 font-display text-2xl">How a result is chosen</h2>
      <p className="mt-4 leading-relaxed">
        Each shape adds points to one or more of four tallies: structure, endings, page rhythm, and flourish. If one tally leads by two points or more, it names the result: Quiet Architect, Everyday Minimalist, Margin Storyteller, or Beautiful Rebel. If the two leaders are flourish and page rhythm, the name is Daydream Doodler. Any other close finish is Instinctive Mixer.
      </p>
      <p className="mt-4 leading-relaxed">
        The same answers always produce the same name. Nothing is adjusted after the fact, and no one writes a paragraph about who you are. The sentence on the card is fixed for that name.
      </p>
      <h2 className="mt-10 font-display text-2xl">What this version does not do</h2>
      <p className="mt-4 leading-relaxed">
        There is no account, no photo upload, and no payment. Answers live in this browser and in the result link if you share one. The{" "}
        <a className="underline decoration-rule underline-offset-4" href="/science">
          science page
        </a>{" "}
        is the limit on what a label means. The{" "}
        <a className="underline decoration-rule underline-offset-4" href="/privacy">
          privacy page
        </a>{" "}
        says where the link goes.
      </p>
    </>
  );
}

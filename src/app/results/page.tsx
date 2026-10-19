import { profiles } from "@/content";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "The six labels",
  description: "Six fictional names for the shapes in the handwriting personality test, plus the case where no shape wins.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <>
      <h1 className="font-display text-5xl leading-none">The six labels</h1>
      <p className="mt-4 max-w-xl leading-relaxed">
        These names file the shapes you picked. They are not personality types, and they do not describe how two people will get along.
      </p>
      <ul className="mt-8 space-y-6">
        {profiles.map((profile) => (
          <li key={profile.slug} className="border-t border-rule pt-6">
            <h2 className="font-display text-3xl">
              <a href={`/results/${profile.slug}`}>{profile.name}</a>
            </h2>
            <p className="mt-2">{profile.sentence}</p>
            <p className="mt-2 text-muted">{profile.paragraphs[0]}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

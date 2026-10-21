import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Glyph } from "@/components/Glyph";
import { Crumbs } from "@/components/Meta";
import { profiles, profileBySlug } from "@/content";
import { guideBySlug } from "@/content/guides";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return profiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = profileBySlug[slug];
  if (!profile) return {};
  return pageMeta({
    title: profile.name,
    description: `${profile.name}: ${profile.sentence} A fictional label in the handwriting personality test.`,
    path: `/results/${profile.slug}`,
  });
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = profileBySlug[slug];
  if (!profile) notFound();
  return (
    <>
      <Crumbs
        items={[
          { href: "/", label: "Test" },
          { href: "/results", label: "Six names" },
          { label: profile.name },
        ]}
      />
      <h1 className="font-display text-5xl leading-none">{profile.name}</h1>
      <p className="mt-4 text-xl">{profile.sentence}</p>
      {profile.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-4 max-w-xl leading-relaxed">
          {paragraph}
        </p>
      ))}
      <ul className="mt-8 grid grid-cols-3 gap-3">
        {profile.examples.map((file) => (
          <li key={file} className="border border-rule bg-card p-2">
            <Glyph file={file} alt={file.replace(/\.svg$/, "").replaceAll("-", " ")} />
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">Shapes that often show up with this label. Your own result uses the shapes you picked.</p>
      <h2 className="mt-10 font-display text-2xl">Read the shapes</h2>
      <ul className="mt-3 space-y-2">
        {profile.guides.map((slug) => (
          <li key={slug}>
            <a className="text-link" href={`/guides/${slug}`}>
              {guideBySlug[slug].title}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <a className="btn" href="/">
          Take the test
        </a>
      </p>
    </>
  );
}

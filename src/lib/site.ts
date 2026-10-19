import type { Metadata } from "next";

export const SITE = {
  name: "Handwriting Personality Test",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://handwritingpersonalitytest.online").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@handwritingpersonalitytest.online",
};

export function pageMeta({
  title,
  description,
  path,
  index = true,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  absolute?: boolean;
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: { en: url, "x-default": url },
    },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { title, description, url, type: "website", siteName: SITE.name },
  };
}

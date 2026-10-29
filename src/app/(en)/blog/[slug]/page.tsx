import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageView } from "@/components/seo/PageParts";
import { blogBySlug } from "@/content/seo/en-blog";
import { BLOG_SLUGS } from "@/content/seo/paths";
import { blogLangs } from "@/lib/langs";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug[slug];
  if (!post) return {};
  return pageMeta({
    title: post.seoTitle ?? post.title,
    description: post.meta,
    path: `/blog/${post.slug}`,
    image: "/og/blog.png",
    langs: blogLangs(post.slug),
    openGraphType: "article",
    publishedTime: post.published,
    modifiedTime: post.updated,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug[slug];
  if (!post) notFound();
  return (
    <ArticlePageView
      content={post}
      schemaType="BlogPosting"
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { label: post.title },
      ]}
    />
  );
}

export const dynamicParams = false;

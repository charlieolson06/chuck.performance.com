import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function getPost(slug: string) {
  try {
    return getPostBySlug(slug);
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="prose max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-muted not-prose">
        {post.date} · {post.readingTime}
      </p>
      <h1 className="!font-display !text-5xl !tracking-tight">{post.title}</h1>
      <MDXRemote source={post.content} />
    </article>
  );
}

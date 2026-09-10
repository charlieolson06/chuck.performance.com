import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="font-display text-5xl tracking-wide text-foreground">
        Blog
      </h1>
      <div className="mt-10 flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border-b border-line py-6 first:border-t"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {post.date} · {post.readingTime}
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-foreground transition-colors group-hover:text-accent">
              {post.title}
            </h2>
            <p className="mt-1 text-muted">{post.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

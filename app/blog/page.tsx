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
      <h1 className="rise-in font-display text-5xl tracking-tight text-foreground">
        Blog
      </h1>

      <div className="mt-10 border-t border-line" />

      <div className="flex flex-col">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rise-in group border-b border-line py-6"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {post.date} · {post.readingTime}
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-foreground transition-colors group-hover:text-accent">
              {post.title}
            </h2>
            <p className="mt-1 text-muted">{post.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

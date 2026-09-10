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
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <div className="mt-8 flex flex-col gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <h2 className="font-medium group-hover:underline">{post.title}</h2>
            <p className="text-sm text-zinc-500">
              {post.date} · {post.readingTime}
            </p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              {post.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

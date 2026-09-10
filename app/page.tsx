import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const latestPost = getAllPosts()[0];

  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Your Name</h1>
        <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
          Short intro about who you are and what you work on. Replace this
          with a couple of sentences that give visitors context.
        </p>
      </section>

      {latestPost && (
        <section>
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Latest post
          </h2>
          <Link
            href={`/blog/${latestPost.slug}`}
            className="mt-2 block text-lg font-medium hover:underline"
          >
            {latestPost.title}
          </Link>
          <p className="text-zinc-600 dark:text-zinc-400">
            {latestPost.summary}
          </p>
        </section>
      )}
    </div>
  );
}

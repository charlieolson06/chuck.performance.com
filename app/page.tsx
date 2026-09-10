import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const latestPost = getAllPosts()[0];

  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Chuck Olson</h1>
        <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
          We must always reevaluate what we do, lest habits and past wisdom
          blind us to new possibilities.
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

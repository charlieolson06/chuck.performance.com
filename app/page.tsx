import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const latestPost = getAllPosts()[0];

  return (
    <div className="flex flex-col gap-16">
      <section>
        <h1 className="rise-in font-display text-6xl leading-[1.05] tracking-tight text-foreground sm:text-7xl">
          Chuck Olson
        </h1>
        <p
          className="rise-in mt-6 max-w-lg font-display text-xl italic leading-relaxed text-muted"
          style={{ animationDelay: "0.1s" }}
        >
          &ldquo;We must always reevaluate what we do, lest habits and past
          wisdom blind us to new possibilities.&rdquo;
        </p>
      </section>

      {latestPost && (
        <section
          className="rise-in rounded-2xl border border-line bg-surface p-8"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Latest Post
          </h2>
          <Link
            href={`/blog/${latestPost.slug}`}
            className="mt-3 block font-display text-3xl tracking-tight text-foreground transition-colors hover:text-accent"
          >
            {latestPost.title}
          </Link>
          <p className="mt-2 text-muted">{latestPost.summary}</p>
        </section>
      )}
    </div>
  );
}

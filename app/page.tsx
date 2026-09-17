import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { projects as playlists } from "@/lib/projects";

const buttonStyles =
  "pill inline-flex w-fit items-center gap-2 border border-accent px-5 py-2 text-accent transition-colors hover:bg-accent hover:text-background";

export default function Home() {
  const latestPost = getAllPosts()[0];

  return (
    <div className="flex flex-col gap-16">
      <section>
        <p
          className="rise-in max-w-lg font-display text-xl italic leading-relaxed text-muted"
        >
          &ldquo;We must always reevaluate what we do, lest habits and past
          wisdom blind us to new possibilities.&rdquo;
        </p>
      </section>

      <div className="border-t border-line" />

      {latestPost && (
        <section
          className="rise-in flex flex-col gap-4 rounded-2xl bg-block p-8 text-block-foreground"
          style={{ animationDelay: "0.2s" }}
        >
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-block-muted">
              Latest Post
            </h2>
            <Link
              href={`/blog/${latestPost.slug}`}
              className="mt-3 block font-display text-3xl tracking-tight text-block-foreground transition-colors hover:text-accent"
            >
              {latestPost.title}
            </Link>
            <p className="mt-2 text-block-muted">{latestPost.summary}</p>
          </div>
          <Link href="/blog" className={buttonStyles}>
            View All Posts →
          </Link>
        </section>
      )}

      <div className="border-t border-line" />

      <section
        className="rise-in flex flex-col gap-4 rounded-2xl bg-block p-8 text-block-foreground"
        style={{ animationDelay: "0.3s" }}
      >
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-block-muted">
            About
          </h2>
          <p className="mt-3 font-display text-3xl tracking-tight text-block-foreground">
            Performance, curiosity, and the work in between
          </p>
          <p className="mt-2 max-w-md text-block-muted">
            Background, what I work on now, and what I&apos;m interested in.
          </p>
        </div>
        <Link href="/about" className={buttonStyles}>
          Read About →
        </Link>
      </section>

      <div className="border-t border-line" />

      <section
        className="rise-in flex flex-col gap-4 rounded-2xl bg-block p-8 text-block-foreground"
        style={{ animationDelay: "0.4s" }}
      >
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-block-muted">
            Playlists
          </h2>
          <p className="mt-3 font-display text-3xl tracking-tight text-block-foreground">
            {playlists.length}{" "}
            {playlists.length === 1 ? "playlist" : "playlists"} and counting
          </p>
          <p className="mt-2 max-w-md text-block-muted">
            A running list of things I&apos;ve built, from training tools to
            personal experiments.
          </p>
        </div>
        <Link href="/playlists" className={buttonStyles}>
          View Playlists →
        </Link>
      </section>
    </div>
  );
}

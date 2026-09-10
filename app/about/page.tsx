import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="font-display text-5xl tracking-wide text-foreground">
        About
      </h1>
      <p className="mt-6 max-w-xl text-muted">
        Write a couple of paragraphs here: background, what you work on now,
        and what you&apos;re interested in. This is a static page — edit this
        file directly whenever it needs to change.
      </p>
    </article>
  );
}

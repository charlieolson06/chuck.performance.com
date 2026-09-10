import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article className="prose dark:prose-invert">
      <h1>About</h1>
      <p>
        Write a couple of paragraphs here: background, what you work on now,
        and what you're interested in. This is a static page — edit this file
        directly whenever it needs to change.
      </p>
    </article>
  );
}

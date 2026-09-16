import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="rise-in font-display text-5xl tracking-tight text-foreground">
        About
      </h1>

      <div className="mt-10 border-t border-line" />

      <p
        className="rise-in mt-10 max-w-xl font-display text-xl italic leading-relaxed text-muted"
        style={{ animationDelay: "0.1s" }}
      >
        Write a couple of paragraphs here: background, what you work on now,
        and what you&apos;re interested in. This is a static page — edit this
        file directly whenever it needs to change.
      </p>

      <Image
        src="/photos/about-driveline.jpg"
        alt="Athletes training on turf at a Driveline Baseball facility"
        width={800}
        height={1200}
        className="rise-in mt-10 w-full max-w-sm rounded-2xl sm:max-w-md"
        style={{ animationDelay: "0.2s" }}
      />
    </article>
  );
}

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="rise-in font-display text-6xl leading-[1.05] tracking-tight text-foreground sm:text-7xl">
        Chuck Olson
      </h1>

      <div className="mt-10 border-t border-line" />

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-stretch">
        <p
          className="rise-in font-display text-xl italic leading-relaxed text-muted"
        >
          Write a couple of paragraphs here: background, what you work on
          now, and what you&apos;re interested in. This is a static page —
          edit this file directly whenever it needs to change.
        </p>

        <div
          className="rise-in relative min-h-[420px] overflow-hidden rounded-2xl lg:min-h-[640px]"
          style={{ animationDelay: "0.1s" }}
        >
          <Image
            src="/photos/about-driveline.jpg"
            alt="Athletes training on turf at a Driveline Baseball facility"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{
              objectFit: "cover",
              filter: "url(#photo-duotone) contrast(1.08)",
            }}
          />
        </div>
      </div>
    </article>
  );
}

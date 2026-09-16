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

      <svg width="0" height="0" aria-hidden className="absolute">
        <filter id="photo-duotone" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.1294 0.9490" />
            <feFuncG type="table" tableValues="0.1137 0.9294" />
            <feFuncB type="table" tableValues="0.0941 0.8941" />
          </feComponentTransfer>
        </filter>
      </svg>

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

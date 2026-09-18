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
        <div className="flex flex-col gap-6">
          <p className="rise-in font-display text-xl italic leading-relaxed text-muted">
            On a mission to prove that the best program isn’t the most
            ‘optimal’ for each individual athlete, but a program that gets
            them to train their ass off, rising to a new floor, through
            meticulous planned creative designs and engaging training
            environments.
          </p>
          <p
            className="rise-in font-mono text-xs uppercase tracking-widest text-muted"
            style={{ animationDelay: "0.05s" }}
          >
            Currently a high performance trainer at{" "}
            <span className="text-accent">Driveline Baseball</span>
          </p>
        </div>

        <div
          className="rise-in relative min-h-[420px] overflow-hidden rounded-2xl lg:min-h-[640px]"
          style={{ animationDelay: "0.1s" }}
        >
          <Image
            src="/photos/about-driveline.jpg"
            alt="Athletes training on turf at a Driveline Baseball facility"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </article>
  );
}

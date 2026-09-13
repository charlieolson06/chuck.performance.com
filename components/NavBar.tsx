import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/playlists", label: "Playlists" },
];

export function NavBar() {
  return (
    <header className="border-b border-line">
      <nav className="flex flex-wrap items-center justify-between gap-y-3 px-6 py-6 sm:px-12 lg:px-20">
        <Link
          href="/"
          className="font-display text-xl italic tracking-tight text-foreground sm:text-2xl"
        >
          ChuckPerformance
        </Link>
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted sm:gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {link.label}
            </Link>
          ))}
          <SocialLinks variant="plain" />
        </div>
      </nav>
    </header>
  );
}

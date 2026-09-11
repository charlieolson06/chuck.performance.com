import Link from "next/link";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="font-display text-2xl italic tracking-tight text-foreground"
        >
          ChuckPerformance
        </Link>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-muted">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

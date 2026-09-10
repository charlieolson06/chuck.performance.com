import Link from "next/link";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function NavBar() {
  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl tracking-wide text-foreground"
        >
          <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
          ChuckPerformance
        </Link>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-muted">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

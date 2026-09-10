export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 font-mono text-xs uppercase tracking-widest text-muted">
        <span>© {new Date().getFullYear()} ChuckPerformance</span>
        <span className="text-accent">●</span>
      </div>
    </footer>
  );
}

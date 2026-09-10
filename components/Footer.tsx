export function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto max-w-3xl px-6 py-6 text-sm text-zinc-500">
        © {new Date().getFullYear()} ChuckPerformance
      </div>
    </footer>
  );
}

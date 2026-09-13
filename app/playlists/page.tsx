import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Playlists",
};

export default function PlaylistsPage() {
  return (
    <div>
      <h1 className="rise-in font-display text-5xl tracking-tight text-foreground">
        Playlists
      </h1>

      <div className="mt-10 border-t border-line" />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="rise-in group rounded-2xl bg-block p-6 text-block-foreground transition-transform hover:-translate-y-0.5"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <h2 className="font-display text-2xl tracking-tight text-block-foreground">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-block-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-block-muted/30 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide text-block-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-5 font-mono text-xs uppercase tracking-widest">
              {project.link && (
                <a
                  href={project.link}
                  className="text-accent transition-opacity hover:opacity-70"
                >
                  Live ↗
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  className="text-block-muted transition-colors hover:text-accent"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

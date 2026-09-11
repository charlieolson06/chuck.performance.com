import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="font-display text-5xl tracking-tight text-foreground">
        Projects
      </h1>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            <h2 className="font-display text-2xl tracking-tight text-foreground">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide text-muted"
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
                  className="text-muted transition-colors hover:text-accent"
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

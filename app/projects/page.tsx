import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-black/[.08] p-5 dark:border-white/[.145]"
          >
            <h2 className="font-medium">{project.title}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/[.05] px-2 py-0.5 text-xs dark:bg-white/[.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {project.link && (
                <a href={project.link} className="hover:underline">
                  Live
                </a>
              )}
              {project.repo && (
                <a href={project.repo} className="hover:underline">
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

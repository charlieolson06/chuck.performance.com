export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Sample Project",
    description:
      "Replace this with a real project: what it does, why you built it, and the interesting problem it solved.",
    stack: ["Next.js", "TypeScript"],
    link: "https://example.com",
    repo: "https://github.com/your-username/sample-project",
  },
];

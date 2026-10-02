import projectsData from "@/data/projects.json";

export type Project = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  description: string;
  dates: string;
  featured: boolean;
  thumbnail: { src: string; width: number; height: number };
  tools: string[];
  files: { href: string; label: string }[];
};

export const projects: readonly Project[] = projectsData;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectHref(project: Pick<Project, "slug">) {
  return `/projects/${project.slug}/`;
}

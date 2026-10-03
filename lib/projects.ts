import projectsData from "@/data/projects.json";
import type { ImageCrop } from "@/components/project-image";

export type Project = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  description: string;
  dates: string;
  featured: boolean;
  thumbnail: { src: string; width: number; height: number; crop?: ImageCrop };
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

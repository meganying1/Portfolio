import Image from "next/image";
import Link from "next/link";
import { projectHref, type Project } from "@/lib/projects";

export function ProjectList({
  projects,
  more = false,
}: {
  projects: readonly Project[];
  more?: boolean;
}) {
  return (
    <ul className={`project-list${more ? " project-list--more" : ""}`}>
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            className="project-link"
            href={projectHref(project)}
            prefetch={false}
          >
            <Image
              className="project-thumb"
              {...project.thumbnail}
              alt=""
              loading={project.featured ? "eager" : "lazy"}
            />
            <span>
              <span className="project-name">{project.name}</span>
              <span className="project-description">{project.summary}</span>
            </span>
            <span className="date">{project.dates}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

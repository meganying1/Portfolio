import { ProjectImage } from "@/components/project-image";
import { LinkArrow } from "@/components/link-arrow";
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
            <ProjectImage
              className="project-thumb"
              {...project.thumbnail}
              alt=""
              loading={project.featured ? "eager" : "lazy"}
            />
            <span>
              <span className="project-name">
                <span>{project.name}</span>
                {"\u00a0"}
                <LinkArrow direction="external" />
              </span>
              <span className="project-description">{project.summary}</span>
            </span>
            <span className="date">{project.dates}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

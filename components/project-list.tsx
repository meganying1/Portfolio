import { ProjectImage } from "@/components/project-image";
import { LinkArrow } from "@/components/link-arrow";
import Link from "next/link";
import { projectHref, type Project } from "@/lib/projects";

export function ProjectList({
  projects,
  more = false,
  layout = "rows",
}: {
  projects: readonly Project[];
  more?: boolean;
  layout?: "rows" | "grid";
}) {
  return (
    <ul
      className={`project-list${more ? " project-list--more" : ""}${layout === "grid" ? " project-list--grid" : ""}`}
    >
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            className="project-link label-link"
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
                <span className="link-label">{project.name}</span>
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

import Link from "next/link";
import { projectContent } from "@/content/project-content";
import { projects, projectHref, type Project } from "@/lib/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const Content = projectContent[project.slug];
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <main id="main">
      <section className="cs-hero">
        <div className="container container--narrow">
          <Link
            className="label cs-hero__back"
            href="/#projects"
            prefetch={false}
          >
            ← All projects
          </Link>
          <h1 className="cs-hero__title">{project.title}</h1>
          <p className="cs-hero__deck">{project.description}</p>
        </div>
      </section>
      <section className="cs-body">
        <div className="container container--narrow">
          <Content />
          {project.files.length > 0 && (
            <div className="files">
              <h3 className="label">files</h3>
              <div className="files__list">
                {project.files.map((file) => (
                  <a key={file.href} className="chip" href={file.href} download>
                    {file.label}
                  </a>
                ))}
              </div>
            </div>
          )}
          <div className="tools">
            <h3 className="label">tools</h3>
            <div className="tools__list">
              {project.tools.map((tool) => (
                <span className="chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <nav className="pager" aria-label="Project">
            {previous && (
              <Link
                className="pager__link pager__prev"
                href={projectHref(previous)}
                prefetch={false}
              >
                ← {previous.title}
              </Link>
            )}
            {next && (
              <Link
                className="pager__link pager__next"
                href={projectHref(next)}
                prefetch={false}
              >
                {next.title} →
              </Link>
            )}
          </nav>
        </div>
      </section>
    </main>
  );
}

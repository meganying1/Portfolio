import Link from "next/link";
import { LinkArrow } from "@/components/link-arrow";
import { projectContent } from "@/content/project-content";
import { projects, projectHref, type Project } from "@/lib/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const Content = projectContent[project.slug];
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <>
      <nav className="project-nav" aria-label="Project navigation">
        <div className="container">
          <Link
            className="project-nav__back label-link"
            href="/"
            prefetch={false}
          >
            <LinkArrow direction="left" />
            <span className="link-label">Home</span>
          </Link>
          <span className="project-nav__title">{project.title}</span>
        </div>
      </nav>
      <main id="main" className="project-page">
        <section className="cs-hero">
          <div className="container container--narrow">
            <h1 className="cs-hero__title">{project.title}</h1>
            <p className="cs-hero__deck">{project.description}</p>
          </div>
        </section>
        <section className="cs-body">
          <div className="container container--narrow">
            <Content />
            {project.files.length > 0 && (
              <div className="files">
                <h3 className="label">Files</h3>
                <div className="files__list">
                  {project.files.map((file) => (
                    <a
                      key={file.href}
                      className="chip label-link"
                      href={file.href}
                      download
                    >
                      <span>
                        <span className="link-label">{file.label}</span>
                        {"\u00a0"}
                        <LinkArrow direction="external" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
            <div className="tools">
              <h3 className="label">Tools</h3>
              <div className="tools__list">
                {project.tools.map((tool) => (
                  <span className="chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <nav className="pager" aria-label="Adjacent projects">
              {previous && (
                <Link
                  className="pager__link pager__prev label-link"
                  href={projectHref(previous)}
                  prefetch={false}
                >
                  <span className="pager__label">Previous project</span>
                  <LinkArrow direction="left" />
                  <span className="pager__name link-label">
                    {previous.title}
                  </span>
                </Link>
              )}
              {next && (
                <Link
                  className="pager__link pager__next label-link"
                  href={projectHref(next)}
                  prefetch={false}
                >
                  <span className="pager__label">Next project</span>
                  <span className="pager__name link-label">{next.title}</span>
                  <LinkArrow />
                </Link>
              )}
            </nav>
          </div>
        </section>
      </main>
    </>
  );
}

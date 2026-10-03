import profile from "@/data/profile.json";
import { ExperienceList } from "@/components/experience-list";
import { ExternalLink } from "@/components/external-link";
import { ProjectList } from "@/components/project-list";
import { PublicationList } from "@/components/publication-list";
import { projects } from "@/lib/projects";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata(site.name, site.description, "/");

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <main id="main" className="portfolio">
      <section id="about" className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title">{profile.name}</h1>
        <p className="intro__credential">{profile.credential}</p>
        <div className="intro__copy">
          {profile.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="contact-links" aria-label="Find me online">
          {profile.socials.map((social) => (
            <ExternalLink key={social.href} href={social.href}>
              {social.label}
            </ExternalLink>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="portfolio-section"
        aria-labelledby="projects-title"
      >
        <h2 id="projects-title" className="section-title">
          Selected projects
        </h2>
        <ProjectList projects={featured} />
        <details className="disclosure" id="other-projects">
          <summary>
            More projects
            <span className="disclosure__count">{more.length}</span>
          </summary>
          <ProjectList projects={more} more />
        </details>
      </section>

      <section
        id="experiences"
        className="portfolio-section"
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title" className="section-title">
          Experience
        </h2>
        <ExperienceList />
        <details className="disclosure">
          <summary>Technical skills</summary>
          <dl className="skills-list">
            {profile.skills.map((skill) => (
              <div key={skill.name}>
                <dt>{skill.name}</dt>
                <dd>{skill.items}</dd>
              </div>
            ))}
          </dl>
        </details>
      </section>

      <section
        id="publications"
        className="portfolio-section"
        aria-labelledby="publications-title"
      >
        <h2 id="publications-title" className="section-title">
          Publications
        </h2>
        <PublicationList />
      </section>
    </main>
  );
}

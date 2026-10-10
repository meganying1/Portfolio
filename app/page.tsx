import profile from "@/data/profile.json";
import { Disclosure } from "@/components/disclosure";
import { ExperienceList } from "@/components/experience-list";
import { ExternalLink } from "@/components/external-link";
import { ProjectList } from "@/components/project-list";
import { SkillsList } from "@/components/skills-list";
import { projects } from "@/lib/projects";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata(site.name, site.description, "/");

// Homepage relevance order is independent of the case-study pager order.
const otherProjectOrder = [
  "linkage-system",
  "mobile-robot",
  "truss-structure",
  "well-driller",
  "design-research-agents",
  "ai-material-selection",
  "noise-reduction",
  "chinese-checkers",
];

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);
  const otherProjects = otherProjectOrder.flatMap((slug) =>
    more.filter((project) => project.slug === slug),
  );

  return (
    <main id="main" className="portfolio">
      <section id="about" className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title">{profile.name}</h1>
        <p className="intro__credential">{profile.credential}</p>
        <div className="intro__copy">
          {profile.introduction.map((paragraph) => (
            <p key={paragraph}>
              {paragraph
                .split(/\b(Apple|Caterpillar|Bloomberg)\b/g)
                .map((part, index) =>
                  index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
                )}
            </p>
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
        <ProjectList projects={featured} layout="grid" />
      </section>

      <section
        id="experiences"
        className="portfolio-section"
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title" className="section-title">
          Experience
        </h2>
        <ExperienceList experiences={profile.experiences} />
      </section>

      <Disclosure
        title="Other projects"
        count={more.length}
        id="other-projects"
        variant="projects"
      >
        <ProjectList projects={otherProjects} more />
      </Disclosure>
      <SkillsList />
    </main>
  );
}

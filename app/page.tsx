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
const mechanicalProjectOrder = [
  "linkage-system",
  "mobile-robot",
  "truss-structure",
  "well-driller",
];
const mechanicalOrganizations = ["Apple", "Caterpillar"];

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);
  const mechanicalProjects = mechanicalProjectOrder.flatMap((slug) =>
    more.filter((project) => project.slug === slug),
  );
  const computingProjects = more.filter(
    (project) => !mechanicalProjectOrder.includes(project.slug),
  );
  const mechanicalExperience = mechanicalOrganizations.flatMap((organization) =>
    profile.experiences.filter(
      (experience) => experience.organization === organization,
    ),
  );
  const softwareExperience = profile.experiences.filter(
    (experience) => !mechanicalOrganizations.includes(experience.organization),
  );

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
      </section>

      <section
        id="experiences"
        className="portfolio-section"
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title" className="section-title">
          Experience
        </h2>
        <div className="portfolio-subgroup">
          <h3 className="label portfolio-subgroup__title">
            Mechanical Engineering
          </h3>
          <ExperienceList experiences={mechanicalExperience} />
        </div>
        <div className="portfolio-subgroup">
          <h3 className="label portfolio-subgroup__title">
            Software &amp; Research
          </h3>
          <ExperienceList experiences={softwareExperience} />
        </div>
      </section>

      <Disclosure
        title="Other projects"
        count={more.length}
        id="other-projects"
        variant="projects"
      >
        <div className="portfolio-subgroup">
          <h3 className="label portfolio-subgroup__title">
            Mechanical Engineering
          </h3>
          <ProjectList projects={mechanicalProjects} />
        </div>
        <div className="portfolio-subgroup">
          <h3 className="label portfolio-subgroup__title">
            Software &amp; Research
          </h3>
          <ProjectList projects={computingProjects} />
        </div>
      </Disclosure>
      <SkillsList />
    </main>
  );
}

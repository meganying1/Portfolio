import profile from "@/data/profile.json";
import { CompanyEmphasis } from "@/components/company-emphasis";
import { ExperienceList } from "@/components/experience-list";
import { ExternalLink } from "@/components/external-link";
import { HandwrittenName } from "@/components/handwritten-name";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { ResumeIcon } from "@/components/resume-icon";
import { ProjectList } from "@/components/project-list";
import { PublicationList } from "@/components/publication-list";
import { SkillsList } from "@/components/skills-list";
import { projects } from "@/lib/projects";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata(site.name, site.description, "/");

export default function HomePage() {
  const ordered = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ];

  return (
    <main id="main" className="portfolio">
      <section id="about" className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title">
          <HandwrittenName name={profile.name} />
        </h1>
        <p className="intro__credential">{profile.credential}</p>
        <div className="intro__copy">
          {profile.introduction.map((paragraph) => (
            <p key={paragraph}>
              <CompanyEmphasis text={paragraph} />
            </p>
          ))}
        </div>
        <div className="contact-links" aria-label="Find me online">
          {/* Socials marked "hidden" in profile.json (GitHub) are not shown. */}
          {profile.socials
            .filter((social) => !social.hidden)
            .map((social) => (
              <ExternalLink
                key={social.href}
                href={social.href}
                icon={social.label === "LinkedIn" ? <LinkedInIcon /> : null}
                iconOnly
              >
                {social.label}
              </ExternalLink>
            ))}
          <ExternalLink
            href={profile.resume.href}
            icon={<ResumeIcon />}
            iconOnly
          >
            {profile.resume.label}
          </ExternalLink>
        </div>
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
      </section>

      <section
        id="skills"
        className="portfolio-section"
        aria-labelledby="skills-title"
      >
        <h2 id="skills-title" className="section-title">
          Technical Skills
        </h2>
        <SkillsList />
      </section>

      <section
        id="projects"
        className="portfolio-section"
        aria-labelledby="projects-title"
      >
        <h2 id="projects-title" className="section-title">
          Projects
        </h2>
        <ProjectList projects={ordered} />
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

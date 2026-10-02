import Image from "next/image";
import profile from "@/data/profile.json";

export function ExperienceList() {
  return (
    <ol>
      {profile.experiences.map((experience) => (
        <li className="experience-row" key={experience.organization}>
          <span
            className={`experience-logo experience-logo--${experience.logo.variant}`}
            aria-hidden="true"
          >
            <Image
              src={experience.logo.src}
              width={experience.logo.width}
              height={experience.logo.height}
              alt=""
            />
          </span>
          <div>
            <h3>{experience.organization}</h3>
            <p className="experience-role">{experience.role}</p>
          </div>
          <p className="date">{experience.dates}</p>
        </li>
      ))}
    </ol>
  );
}

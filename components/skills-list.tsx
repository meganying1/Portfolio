import profile from "@/data/profile.json";
import { Disclosure } from "@/components/disclosure";

export function SkillsList() {
  return (
    <Disclosure title="Technical skills" variant="skills">
      <dl className="skills-list">
        {profile.skills.map((skill) => (
          <div className="skills-list__row" key={skill.name}>
            <dt>{skill.name}</dt>
            <dd>
              <ul className="skills-list__items">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Disclosure>
  );
}

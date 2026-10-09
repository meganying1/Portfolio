import profile from "@/data/profile.json";

export function SkillsList() {
  return (
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
  );
}

import profile from "@/data/profile.json";
import { ExternalLink } from "./external-link";

export function PublicationList() {
  return (
    <ul className="publication-list">
      {profile.publications.map((publication) => (
        <li className="publication" key={publication.href}>
          <div className="publication__title">
            <ExternalLink href={publication.href}>
              {publication.title}
            </ExternalLink>
          </div>
          <p className="publication__meta">{publication.venue}</p>
          <p className="publication__authors">{publication.authors}</p>
        </li>
      ))}
    </ul>
  );
}

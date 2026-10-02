import profile from "@/data/profile.json";
import { ExternalLink } from "./external-link";

export function PublicationList() {
  return (
    <ul>
      {profile.publications.map((publication) => (
        <li className="publication" key={publication.href}>
          <h3>
            <ExternalLink href={publication.href}>
              {publication.title}
            </ExternalLink>
          </h3>
          <p className="publication__meta">{publication.venue}</p>
          <p className="publication__authors">{publication.authors}</p>
        </li>
      ))}
    </ul>
  );
}

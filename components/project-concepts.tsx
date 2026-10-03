import type { ReactNode } from "react";
import { FigureCaption } from "@/components/project-figure";
import { ProjectImage } from "@/components/project-image";

export function ProjectConcepts({
  number,
  caption,
  concepts,
}: {
  number: number;
  caption: ReactNode;
  concepts: {
    name: string;
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
}) {
  return (
    <figure className="fig fig--wide">
      <div className="concept-grid">
        {concepts.map(({ name, ...image }) => (
          <div key={name}>
            <ProjectImage {...image} />
            <p className="concept-grid__name">{name}</p>
          </div>
        ))}
      </div>
      <FigureCaption number={number} caption={caption} />
    </figure>
  );
}

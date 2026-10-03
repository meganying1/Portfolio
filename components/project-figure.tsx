import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { ProjectImage } from "@/components/project-image";

export type ProjectFigureProps = Omit<
  ComponentProps<typeof ProjectImage>,
  "className"
> & {
  caption: ReactNode;
  number: number;
  compact?: boolean;
  wide?: boolean;
};

function figureSize({ width, height, crop }: ProjectFigureProps) {
  return {
    "--figure-native-width": `${crop?.width ?? width}px`,
    "--figure-aspect": (crop?.width ?? width) / (crop?.height ?? height),
  } as CSSProperties;
}

export function FigureCaption({
  number,
  caption,
}: Pick<ProjectFigureProps, "number" | "caption">) {
  // Keep the final two words together without shortening earlier lines.
  const text =
    typeof caption === "string"
      ? caption.replace(/(\S+)\s+(\S+)$/, "$1\u00a0$2")
      : caption;

  return (
    <figcaption>
      <span className="fig__num">Fig. {number}</span> {text}
    </figcaption>
  );
}

export function ProjectFigure({
  caption,
  number,
  compact = false,
  wide = false,
  ...image
}: ProjectFigureProps) {
  return (
    <figure
      className={`fig${compact ? " fig--compact" : ""}${wide ? " fig--wide" : ""}`}
      style={figureSize({ ...image, caption, number })}
    >
      <ProjectImage {...image} />
      <FigureCaption number={number} caption={caption} />
    </figure>
  );
}

export function ProjectFigurePair({
  figures,
}: {
  figures: [ProjectFigureProps, ProjectFigureProps];
}) {
  const nativeHeight = Math.min(
    ...figures.map(({ height, crop }) => crop?.height ?? height),
  );
  return (
    <div
      className="fig-pair"
      style={{ "--pair-native-height": `${nativeHeight}px` } as CSSProperties}
    >
      {figures.map((figure) => (
        <ProjectFigure key={figure.number} {...figure} />
      ))}
    </div>
  );
}

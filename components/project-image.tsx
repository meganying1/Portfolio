import Image from "next/image";
import type { CSSProperties } from "react";

export type ImageCrop = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type ProjectImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  crop?: ImageCrop;
  className?: string;
  loading?: "eager" | "lazy";
};

// Crop coordinates describe a viewport over the original, unmodified image.
// Keep plotted axes, legends, and engineering geometry inside that viewport.
export function ProjectImage({
  src,
  width,
  height,
  alt,
  crop,
  className = "",
  loading = "lazy",
}: ProjectImageProps) {
  const style = {
    "--image-native-width": `${crop?.width ?? width}px`,
    ...(crop
      ? {
          "--crop-ratio": `${crop.width} / ${crop.height}`,
          "--crop-aspect": crop.width / crop.height,
          "--crop-width": `${(width / crop.width) * 100}%`,
          "--crop-left": `${(-crop.x / crop.width) * 100}%`,
          "--crop-top": `${(-crop.y / crop.height) * 100}%`,
        }
      : {}),
  } as CSSProperties;

  return (
    <div
      className={`project-image${className ? ` ${className}` : ""}`}
      style={style}
    >
      {crop ? (
        <span className="image-crop">
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            loading={loading}
            decoding="async"
          />
        </span>
      ) : (
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          loading={loading}
          decoding="async"
        />
      )}
    </div>
  );
}

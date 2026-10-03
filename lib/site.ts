import type { Metadata } from "next";
import type { Project } from "@/lib/projects";

export const site = {
  name: "Megan Ying",
  url: "https://www.meganying.com",
  description: "Megan Ying — Mechanical Engineer, CMU '25",
  previewImage: {
    url: "/assets/photos/portfolio-preview.png",
    width: 1200,
    height: 630,
    alt: "Megan Ying in charcoal type on a white background",
  },
};

export function pageTitle(title: string) {
  return title === site.name ? site.name : `${title} - ${site.name}`;
}

export function projectPreviewImage(project: Pick<Project, "slug" | "title">) {
  return {
    ...site.previewImage,
    url: `/assets/photos/previews/${project.slug}.png`,
    alt: pageTitle(project.title),
  };
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  previewImage = site.previewImage,
): Metadata {
  const fullTitle = pageTitle(title);
  // Keep Apple link previews from treating the name as a removable site suffix.
  const previewTitle = fullTitle.replace(" - ", " \u2011 ");
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: previewTitle,
      description,
      url: path,
      images: [previewImage],
    },
    twitter: {
      card: "summary_large_image",
      title: previewTitle,
      description,
      images: [{ url: previewImage.url, alt: previewImage.alt }],
    },
  };
}

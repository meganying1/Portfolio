import type { Metadata } from "next";

export const site = {
  name: "Megan Ying",
  url: "https://www.meganying.com",
  description: "Megan Ying — Mechanical Engineer, CMU '25",
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = title === site.name ? site.name : `${title} — ${site.name}`;
  return {
    title: title === site.name ? { absolute: site.name } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [
        {
          url: "/assets/photos/share-card.png",
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/assets/photos/share-card.png"],
    },
  };
}

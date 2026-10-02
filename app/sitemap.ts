import type { MetadataRoute } from "next";
import { projects, projectHref } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    ...projects.map((project) => ({
      url: `${site.url}${projectHref(project)}`,
    })),
  ];
}

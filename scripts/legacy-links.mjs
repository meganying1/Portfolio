import { mkdir, readFile, writeFile } from "node:fs/promises";

const projects = JSON.parse(
  await readFile(new URL("../data/projects.json", import.meta.url), "utf8"),
);
const profile = JSON.parse(
  await readFile(new URL("../data/profile.json", import.meta.url), "utf8"),
);
const directory = new URL("../public/pages/", import.meta.url);
await mkdir(directory, { recursive: true });
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");

for (const project of projects) {
  const path = `/projects/${project.slug}/`;
  const title = `${project.title} - ${profile.name}`;
  const image = `https://www.meganying.com/assets/photos/previews/${project.slug}.png`;
  await writeFile(
    new URL(`${project.slug}.html`, directory),
    `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)}</title>
<link rel="canonical" href="https://www.meganying.com${path}">
<meta property="og:type" content="website">
<meta property="og:title" content="${escape(title)}">
<meta property="og:description" content="${escape(project.description)}">
<meta property="og:url" content="https://www.meganying.com${path}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${escape(title)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escape(title)}">
<meta name="twitter:description" content="${escape(project.description)}">
<meta name="twitter:image" content="${image}">
<meta name="twitter:image:alt" content="${escape(title)}">
<meta http-equiv="refresh" content="0;url=${path}"></head>
<body><p>This project has moved. <a href="${path}">View ${escape(project.title)}</a>.</p></body></html>\n`,
  );
}
console.log(`Prepared ${projects.length} legacy project links.`);

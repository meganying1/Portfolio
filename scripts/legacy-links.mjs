import { mkdir, readFile, writeFile } from "node:fs/promises";

const projects = JSON.parse(
  await readFile(new URL("../data/projects.json", import.meta.url), "utf8"),
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
  await writeFile(
    new URL(`${project.slug}.html`, directory),
    `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(project.title)} — Megan Ying</title>
<link rel="canonical" href="https://www.meganying.com${path}">
<meta http-equiv="refresh" content="0;url=${path}"></head>
<body><p>This project has moved. <a href="${path}">View ${escape(project.title)}</a>.</p></body></html>\n`,
  );
}
console.log(`Prepared ${projects.length} legacy project links.`);

import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const projects = JSON.parse(
  await readFile(new URL("../data/projects.json", import.meta.url), "utf8"),
);
const pages = [
  "index.html",
  ...projects.map((project) => `projects/${project.slug}/index.html`),
];

for (const file of pages) {
  const html = await readFile(path.join(root, file), "utf8");
  assert.equal(
    (html.match(/<h1[ >]/g) ?? []).length,
    1,
    `${file}: expected one main heading`,
  );
  assert.ok(html.includes('id="main"'), `${file}: missing skip-link target`);
  assert.ok(
    !html.includes('class="site-header"'),
    `${file}: repeated navigation returned`,
  );
  for (const match of html.matchAll(/(?:href|src|poster)="([^"#]+)"/g)) {
    const url = new URL(
      match[1].replaceAll("&amp;", "&"),
      "https://verify.local/",
    );
    if (url.hostname !== "verify.local") continue;
    let local = path.join(root, decodeURIComponent(url.pathname));
    if ((await stat(local)).isDirectory())
      local = path.join(local, "index.html");
    await access(local);
  }
}
for (const project of projects) {
  const html = await readFile(
    path.join(root, `projects/${project.slug}/index.html`),
    "utf8",
  );
  assert.ok(
    html.includes(`href="https://www.meganying.com/projects/${project.slug}/"`),
    `${project.slug}: wrong canonical`,
  );
  const legacy = await readFile(
    path.join(root, `pages/${project.slug}.html`),
    "utf8",
  );
  assert.ok(
    legacy.includes(`0;url=/projects/${project.slug}/`),
    `${project.slug}: old link has no destination`,
  );
}
const home = await readFile(path.join(root, "index.html"), "utf8");
for (const project of projects)
  assert.ok(
    home.includes(project.dates),
    `Missing month range: ${project.slug}`,
  );
await Promise.all(
  [
    ".nojekyll",
    "CNAME",
    "googlef54cb53821d2cb40.html",
    "robots.txt",
    "sitemap.xml",
    "404.html",
  ].map((file) => access(path.join(root, file))),
);
console.log(
  `Verified ${pages.length} pages, their local assets, all ${projects.length} legacy links, month ranges, and hosting files.`,
);

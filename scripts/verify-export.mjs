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
    (html.match(/class="publication"/g) ?? []).length,
    file === "projects/ai-material-selection/index.html" ? 2 : 0,
    `${file}: publications belong only on the AI for material selection page`,
  );
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
  for (const heading of html.matchAll(/<h[23]\b[^>]*>([^<]+)<\/h[23]>/g)) {
    assert.match(
      heading[1],
      /^[A-Z]/,
      `${file}: section heading must start with a capital: ${heading[1]}`,
    );
  }
  if (file === "projects/battery-door/index.html") {
    assert.equal(
      (html.match(/<h3 class="section-title">Presentation<\/h3>/g) ?? [])
        .length,
      1,
      `${file}: expected one capitalized presentation heading`,
    );
  }
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
const homeSections = [
  ...home.matchAll(/<section\b[^>]*id="([^"]+)"[^>]*>(.*?)<\/section>/gs),
];
assert.deepEqual(
  homeSections.map((section) => section[1]),
  ["about", "projects", "experiences"],
  "Homepage must show selected work, then experience",
);
const selected = homeSections.find((section) => section[1] === "projects")[2];
assert.deepEqual(
  [
    ...selected.split("<details")[0].matchAll(/href="\/projects\/([^/]+)\/"/g),
  ].map((match) => match[1]),
  ["battery-door", "trash-compactor", "tripod-attachment"],
  "Selected work must contain the three complementary mechanical projects",
);
const experience = homeSections.find(
  (section) => section[1] === "experiences",
)[2];
assert.deepEqual(
  [...experience.matchAll(/<h3>(.*?)<\/h3>/g)].map((match) => match[1]),
  ["Bloomberg", "Design Research Collective", "Apple", "UBS", "Caterpillar"],
  "Experience must appear in reverse chronological order",
);
const additional = home.match(
  /<details\b[^>]*id="other-projects"[^>]*>(.*?)<\/details>/s,
)?.[1];
assert.ok(additional, "Other projects must remain an accordion");
assert.ok(
  home.indexOf('id="experiences"') < home.indexOf('id="other-projects"') &&
    home.indexOf('id="other-projects"') < home.indexOf("Technical skills"),
  "Other projects must follow Experience and precede Technical skills",
);
assert.ok(
  !home.includes("Mechanical Engineering") &&
    !home.includes("Software &amp; Research"),
  "Homepage must not show experience or project subgroup headings",
);
assert.deepEqual(
  [...additional.matchAll(/href="\/projects\/([^/]+)\/"/g)].map(
    (match) => match[1],
  ),
  [
    "linkage-system",
    "mobile-robot",
    "truss-structure",
    "well-driller",
    "design-research-agents",
    "ai-material-selection",
    "noise-reduction",
    "chinese-checkers",
  ],
  "Other projects must retain their existing relevance order",
);
for (const project of projects) {
  assert.equal(
    [...home.matchAll(/href="\/projects\/([^/]+)\/"/g)].filter(
      (match) => match[1] === project.slug,
    ).length,
    1,
    `Project must appear exactly once on the homepage: ${project.slug}`,
  );
}
for (const project of projects)
  assert.ok(
    home.includes(project.dates),
    `Missing project date: ${project.slug}`,
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
  `Verified ${pages.length} pages, their local assets, all ${projects.length} legacy links, project dates, and hosting files.`,
);

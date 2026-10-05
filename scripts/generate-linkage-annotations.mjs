import { readFile, writeFile } from "node:fs/promises";

// Add vector callouts over the unmodified report CAD image. The source viewport
// retains the button at the top of the fixture as well as the complete links.
const source = await readFile(
  new URL(
    "../public/assets/photos/projects/linkage_revised.png",
    import.meta.url,
  ),
);
const figure = `<svg xmlns="http://www.w3.org/2000/svg" width="920" height="1000" viewBox="0 0 920 1000">
  <rect width="920" height="1000" fill="white"/>
  <svg x="150" y="43" width="570" height="914" viewBox="120 0 570 914">
    <image width="820" height="914" href="data:image/png;base64,${source.toString("base64")}"/>
  </svg>
  <g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <g stroke="white" stroke-width="9">
      <path d="M726 103 H625 L437 113"/>
      <path d="M138 527 H181 L238 518"/>
      <path d="M736 432 H562 L338 489"/>
      <path d="M736 748 H576 L427 725"/>
    </g>
    <g stroke="#27629d" stroke-width="3">
      <path d="M726 103 H625 L437 113"/>
      <path d="M138 527 H181 L238 518"/>
      <path d="M736 432 H562 L338 489"/>
      <path d="M736 748 H576 L427 725"/>
    </g>
  </g>
  <g fill="#27629d">
    <circle cx="437" cy="113" r="5"/>
    <circle cx="238" cy="518" r="5"/>
    <circle cx="338" cy="489" r="5"/>
    <circle cx="427" cy="725" r="5"/>
  </g>
  <g fill="#183e64" font-family="Arial, sans-serif" font-size="36">
    <text x="738" y="116">Button</text>
    <text x="14" y="539">Rocker</text>
    <text x="747" y="445">Coupler</text>
    <text x="747" y="761">Crank</text>
  </g>
</svg>`;

await writeFile(
  new URL(
    "../public/assets/photos/projects/linkage_annotated.svg",
    import.meta.url,
  ),
  figure,
);

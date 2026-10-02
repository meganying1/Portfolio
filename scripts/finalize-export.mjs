import { writeFile } from "node:fs/promises";

// Prevent GitHub Pages from treating Next's _next directory as a Jekyll input.
await writeFile(new URL("../out/.nojekyll", import.meta.url), "");

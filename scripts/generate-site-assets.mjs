import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const tokens = await readFile(
  new URL("../styles/tokens.css", import.meta.url),
  "utf8",
);
const profile = JSON.parse(
  await readFile(new URL("../data/profile.json", import.meta.url), "utf8"),
);

const token = (name) => {
  const value = tokens.match(new RegExp(`${name}:\\s*([^;]+);`))?.[1];
  if (!value) throw new Error(`Missing design token: ${name}`);
  return value.replace(/\s+/g, " ").trim();
};
const colors = {
  page: token("--color-page"),
  text: token("--color-text"),
  rule: token("--color-rule"),
};
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
const font = escape(token("--font-body"));
const radius = parseFloat(token("--radius-image")) * 16;

const preview = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${colors.page}"/>
  <text x="600" y="342" font-family="${font}" font-size="88" font-weight="600" letter-spacing="-2.2" text-anchor="middle" fill="${colors.text}">${escape(profile.name)}</text>
</svg>\n`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect x="0.5" y="0.5" width="63" height="63" rx="${radius}" fill="${colors.page}" stroke="${colors.rule}"/>
  <text x="32" y="46" font-family="${font}" font-size="42" font-weight="600" letter-spacing="-2" text-anchor="middle" fill="${colors.text}">MY</text>
</svg>\n`;

await sharp(Buffer.from(preview))
  .png()
  .toFile(
    new URL("../public/assets/photos/portfolio-preview.png", import.meta.url)
      .pathname,
  );
await writeFile(new URL("../app/icon.svg", import.meta.url), icon);
await sharp(Buffer.from(icon), { density: 203 })
  .resize(180, 180)
  .png()
  .toFile(new URL("../app/apple-icon.png", import.meta.url).pathname);

// ICO supports multiple PNG entries, providing crisp browser fallbacks.
const sizes = [16, 32, 48];
const images = await Promise.all(
  sizes.map((size) =>
    sharp(Buffer.from(icon)).resize(size, size).png().toBuffer(),
  ),
);
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(
  new URL("../app/favicon.ico", import.meta.url),
  Buffer.concat([header, ...images]),
);
console.log("Generated the link preview, SVG favicon, ICO, and Apple icon.");

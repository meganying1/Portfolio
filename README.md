# [Megan Ying Portfolio](https://www.meganying.com/)

Megan Ying’s mechanical engineering portfolio, built with Next.js App Router, React, and TypeScript and deployed to GitHub Pages.

The homepage presents three featured projects, six additional projects, experience, technical skills, and publications. Projects are ordered by relevance to mechanical design roles. All nine case studies share the same compact layout, with curated engineering figures, analysis, fabrication details, and adjacent-project navigation.

The design uses a white background, charcoal system sans-serif type, subtle gray rules, and original project and company images. Technical skills and project tools use middle-dot separators. The link preview and “MY” favicon follow the same visual style. See [DESIGN.md](DESIGN.md) for the shared design rules.

## Develop

Use Node.js 22 or newer (`nvm use` selects the version in `.nvmrc`).

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://127.0.0.1:3000/). Project pages use `/projects/battery-door/` and the same route pattern for all nine projects.

Development uses `.next-dev/`; production builds use `.next/` and export to `out/`. The separate directories let validation builds run without overwriting the live development preview’s modules. Restart the development server after changing this configuration.

## Validate and build

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run verify:export
```

`npm run build` creates the static site in `out/`. `npm run verify:export` checks all ten pages, their local assets, canonical URLs, and legacy redirects. Preview the actual export with:

```sh
python3 -m http.server 3001 --bind 127.0.0.1 --directory out
```

Then open [localhost:3001](http://127.0.0.1:3001/).

## Structure

- `app/`: root layout, homepage, generated project routes, favicon and Apple icon files, sitemap, robots, and 404 page.
- `components/`: shared project, experience, publication, and case-study components. The presentation controls and disclosure enhancements are small client components; their section headings are defined by the server-rendered page content.
- `data/projects.json`: project order, featured status, titles, summaries, exact date ranges, thumbnail crops, tools, and downloadable resources. The array order also controls previous/next project navigation.
- `data/profile.json`: introduction, original company logos, experience, skills, and publications.
- `content/projects/`: editable JSX narratives, figures, tables, and videos for all nine case studies. These render as Server Components; no raw HTML injection is used.
- `styles/tokens.css`: the design system’s visual tokens.
- `styles/globals.css`: shared component styles. See [DESIGN.md](DESIGN.md) for the design rules.
- `lib/site.ts`: site identity, canonical URLs, and Open Graph and Twitter preview metadata for the homepage and each project.
- `public/assets/`: project images, videos, slides, PDF, STEP model, and link preview images.
- `scripts/`: legacy-link generation, site-asset generation, export finalization, and export verification.

The presentation viewer retains its buttons, arrow-key navigation, live slide count, and full slide fallback when JavaScript is disabled. Project and skill disclosures use native `<details>`.

## Link preview and icons

All link preview images are 1200 × 630 px with “Megan Ying” in the upper-left corner, using the site’s charcoal sans-serif type on white. The homepage preview at `public/assets/photos/portfolio-preview.png` displays only the name. Each project has its own preview at `public/assets/photos/previews/<slug>.png`, with its title below the name in muted gray. The link caption beneath the image uses the full browser tab title, such as “Battery door - Megan Ying”. Current and legacy project links include the same full title in their Open Graph and Twitter metadata.

Next.js adds the browser and home-screen icon metadata from `app/icon.svg`, `app/favicon.ico`, and `app/apple-icon.png`. The ICO includes 16, 32, and 48 px fallbacks; the Apple icon is 180 × 180 px. SVG and Apple icon URLs receive Next.js-generated fingerprints.

After changing the palette, profile name, or projects, regenerate the assets:

```sh
npm run generate:assets
```

The generator reads the shared design tokens and portfolio data and renders the images with Sharp. Inspect and commit the generated files alongside the source changes. Production builds serve these committed assets.

## Hosting and old links

[Next.js static export](https://nextjs.org/docs/app/guides/static-exports) produces the GitHub Pages site. The custom domain and Google verification file are preserved. Images use `next/image` with `unoptimized: true`, so no image server or external service is required.

The predev and prebuild scripts generate small compatibility pages for all nine `/pages/*.html` URLs. They forward to the clean Next.js project routes and include a canonical link and a fallback link. The exported homepage also remains available at `/index.html` on static hosting. Generated compatibility files in `public/pages/` are ignored by Git and regenerated automatically.

The workflow in `.github/workflows/nextjs-pages.yml` validates and builds pushes to `main` and pull requests targeting `main`. **Only pushes to `main` deploy to the live GitHub Pages site.** The workflow deploys `out/` directly, with `.nojekyll` protecting Next.js assets from Jekyll processing.

The committed npm lockfile provides reproducible installs. ESLint is pinned to 9.39.5 because the React plugins bundled with this Next.js release still use ESLint 9 APIs.

## Credits

Originally forked from [Dopefolio](https://github.com/rammcodes/dopefolio) by [Ram Maheshwari](https://rammaheshwari.com). The original license is retained in `LICENSE`.

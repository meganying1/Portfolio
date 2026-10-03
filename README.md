# [Megan Ying Portfolio](https://www.meganying.com/)

The minimal portfolio, converted to Next.js App Router and TypeScript. It preserves the three featured projects, all nine case studies, original color logos, month/year project ranges, publications, and shared design system.

This conversion lives on the separate `codex/nextjs-migration` branch. The original static portfolio checkout is preserved.

## Develop

Use Node.js 22 or newer (`nvm use` selects the version in `.nvmrc`).

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000/. Project pages use `/projects/battery-door/` and the same route pattern for all nine projects.

Development uses `.next-dev/`; production builds use `.next/` and export to `out/`. The separate directories let validation builds run without overwriting the live development preview’s modules. Restart the development server after changing this configuration.

## Validate and build

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run verify:export
```

`npm run build` creates the static site in `out/`. Preview the actual export with `python3 -m http.server 3001 --bind 127.0.0.1 --directory out` and open http://127.0.0.1:3001/.

## Structure

- `app/`: root layout, homepage, generated project routes, metadata, sitemap, robots, and 404 page.
- `components/`: shared project, experience, publication, and case-study components. The presentation controls and disclosure enhancements are small client components; their section headings are defined by the server-rendered page content.
- `data/projects.json`: project titles, summaries, exact date ranges, thumbnails, tools, and downloadable resources.
- `data/profile.json`: introduction, original company logos, experience, skills, and publications.
- `content/projects/`: editable JSX narratives, figures, tables, and videos for all nine case studies. These render as Server Components; no raw HTML injection is used.
- `styles/tokens.css`: the design system’s visual tokens.
- `styles/globals.css`: shared component styles. See [DESIGN.md](DESIGN.md) for the design rules.
- `public/assets/`: original images, videos, slides, PDF, and STEP model, with their public URLs preserved.

The presentation viewer retains its buttons, arrow-key navigation, live slide count, and full slide fallback when JavaScript is disabled. Project and skill disclosures use native `<details>`.

## Hosting and old links

[Next.js static export](https://nextjs.org/docs/app/guides/static-exports) keeps this version compatible with GitHub Pages. The existing custom domain, Google verification file, and share image are preserved. Images use `next/image` with `unoptimized: true`, so no image server or external service is required.

The predev and prebuild scripts generate small compatibility pages for all nine `/pages/*.html` URLs. They forward to the clean Next.js project routes and include a canonical link and a fallback link. The exported homepage also remains available at `/index.html` on static hosting. Generated compatibility files in `public/pages/` are ignored by Git and regenerated automatically.

The workflow in `.github/workflows/nextjs-pages.yml` validates and builds this migration branch and pull requests. **Only pushes to `main` deploy to the existing GitHub Pages site.** The conversion itself does not publish a new site. When the branch is merged, the workflow deploys `out/` directly; Jekyll is no longer involved.

The committed npm lockfile provides reproducible installs. ESLint is pinned to 9.39.5 because the React plugins bundled with this Next.js release still use ESLint 9 APIs.

## Credits

Originally forked from [Dopefolio](https://github.com/rammcodes/dopefolio) by [Ram Maheshwari](https://rammaheshwari.com). The original license is retained in `LICENSE`.

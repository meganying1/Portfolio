# [Megan Ying Portfolio](https://www.meganying.com/)

Mechanical engineering portfolio built with Next.js, React, and TypeScript, deployed to GitHub Pages. See [DESIGN.md](DESIGN.md) for the visual guidelines.

## Develop

Use Node.js 22 or newer (`nvm use`).

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://127.0.0.1:3000/). Development uses `.next-dev/`; production builds use `.next/` and export to `out/`.

## Validate and preview

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run verify:export
```

Export verification checks pages, assets, canonical URLs, and legacy redirects. To preview the build at [localhost:3001](http://127.0.0.1:3001/):

```sh
python3 -m http.server 3001 --bind 127.0.0.1 --directory out
```

## Edit content

- `data/projects.json`: project order, featured status, titles, summaries, dates, tools, and resources. Array order also controls previous/next navigation.
- `data/profile.json`: introduction, experience, skills, and publications.
- `content/projects/`: case-study narratives, figures, tables, and videos.
- `app/` and `components/`: pages and shared components.
- `styles/`: design tokens and shared styles.
- `lib/site.ts`: site identity and link-preview metadata.
- `public/assets/`: images, videos, slides, and downloads.

## Link previews and icons

Preview images show “Megan Ying” in the upper-left corner, with the project name beneath it. Link captions use the full page title, such as “Battery door - Megan Ying”. Icons live in `app/icon.svg`, `app/favicon.ico`, and `app/apple-icon.png`.

After changing design tokens, the profile name, or projects, regenerate and commit the assets:

```sh
npm run generate:assets
```

## Deployment

The GitHub Actions workflow validates and builds the site. **Pushes to `main` deploy `out/` to GitHub Pages at [meganying.com](https://www.meganying.com/).**

Legacy `/pages/*.html` links redirect to `/projects/<slug>/`. Compatibility pages are generated automatically before development and builds; `public/pages/` is ignored by Git.

## Credits

Originally forked from [Dopefolio](https://github.com/rammcodes/dopefolio) by [Ram Maheshwari](https://rammaheshwari.com). The original license is retained in `LICENSE`.

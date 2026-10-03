# Portfolio design system

The portfolio is a compact professional index: identity, selected work, experience, then publications. A recruiter should understand Megan’s discipline and background immediately and reach three representative projects in the first desktop screen.

## Source of truth

- `styles/tokens.css` owns visual decisions: palette, font, type scale, weights, line heights, tracking, spacing, layout, image dimensions, borders, radii, focus treatment, and motion.
- `styles/globals.css` implements the components. Add or change a token before introducing a new visual value. Avoid inline styling and page-specific theme overrides.
- All ten pages use the same styles and page measure. Next.js Server Components render the homepage and project narratives. Content lives in `data/` and `content/projects/`; only the presentation viewer is a custom client component. The core content and native disclosures remain usable without JavaScript.

## Tokens

| Group            | Decision                                                          | Token                                               |
| ---------------- | ----------------------------------------------------------------- | --------------------------------------------------- |
| Page             | White, with a subtle gray image surface                           | `--color-page`, `--color-surface`                   |
| Text             | Charcoal primary; accessible gray secondary                       | `--color-text`, `--color-secondary`                 |
| Links            | Muted blue for interaction feedback                               | `--color-link`, `--color-focus`                     |
| Rules            | Light gray, decorative separators only                            | `--color-rule`, `--border-width`                    |
| Typeface         | Native system sans for fast, consistent rendering                 | `--font-body`                                       |
| Type             | 13 / 14 / 16 / 24 px; case title 28–36 px                         | `--text-caption` through `--text-case-title`        |
| Weight           | 400 body, 600 headings                                            | `--weight-body`, `--weight-heading`                 |
| Leading          | 1.3 titles, 1.5 lists, 1.65 prose                                 | `--leading-tight`, `--leading-ui`, `--leading-body` |
| Spacing          | 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 px                  | `--space-1` through `--space-10`                    |
| Page measure     | 704 px maximum, with responsive outer gutters                     | `--layout-width`, `--layout-gutter`                 |
| Page padding     | 80 px above, 64 px below; mobile starts at 48 px                  | `--layout-top`, `--layout-bottom`                   |
| Sections         | 40 px between sections; 12 px after headings                      | `--section-gap`, `--section-heading-gap`            |
| Rows             | 12 px vertical padding, 16 px column gap                          | `--row-padding`, `--row-gap`                        |
| Thumbnails       | 88 × 72 px desktop, contain rather than crop                      | `--project-thumb-width`, `--project-thumb-height`   |
| Experience logos | 28 px frames, original brand colors, optically normalized artwork | `--experience-logo-size`, `--logo-scale-*`          |
| Corners          | 4 px for media and slide controls                                 | `--radius-image`                                    |
| Controls         | 44 px for standalone contact and slide controls                   | `--control-height`                                  |
| Focus            | 2 px blue outline with 4 px offset                                | `--focus-width`, `--focus-offset`                   |
| Feedback         | 140 ms color transition, no layout movement                       | `--duration-feedback`, `--ease-feedback`            |

Pixel values above assume the browser’s default 16 px root size. Typography and layout use rem units to respect user text size.

## Responsive rules

CSS custom properties cannot be used in media query conditions. The two breakpoint tokens are therefore documented here and repeated as literal em values in the CSS:

- **Compact: 40em (640 px).** Experience dates stack under the role. Project dates stack under the description and remain visible. Skills use one column. Thumbnails become 72 × 64 px.
- **Narrow: 25em (400 px).** Gutters become 16 px, thumbnails become 56 × 56 px, and paired case-study figures stack.

## Components and content rules

- **Introduction:** one name, one credential line, two short paragraphs. Contact links appear once. Keep the current role factual; do not add availability, metrics, or a résumé link without a source.
- **Section title:** sentence case, 14 px semibold. No numbers, wide tracking, uppercase transforms, or oversized section banners.
- **Project row:** actual project image, sentence-case name, one visible description, and the original month/year date range. Keep the months on desktop and mobile. The whole row is a link. No hover-only information, expanding images, or moving rows.
- **Project disclosure:** three featured projects remain visible; six additional projects are available through native `<details>`. Features represent mechanism design, a working mechatronics prototype, and assistive design. Preserve access to all nine projects.
- **Experience row:** original company or research logo, organization, complete role title, month/year dates. Keep the chronological order and the existing dates. Preserve original brand colors: do not apply grayscale, inversion, or recoloring filters. Use uniform 28 px frames. Optical scale tokens compensate for padding within the original images. Bloomberg’s white mark retains its black brand background for visibility. Logos are decorative because the organization name sits beside them. Preserve all five logos.
- **Skills disclosure:** a compact definition list preserving all five existing skill groups. Skills are also visible in each relevant case study.
- **Publication row:** full paper title, venue and date, full author attribution, and original DOI link. Never shorten a paper title to a marketing headline.
- **Case study:** a single “All projects” return link, title, description, original narrative and figures, resources, and adjacent-project links. No global header, mobile menu, or repeated footer.

## Interaction and accessibility

Use native links, headings, lists, and details. Preserve the skip link and visible keyboard focus. External links announce their new tab. Secondary text has at least 4.5:1 contrast against white; separator rules do not convey information. Reduced-motion preference removes transitions. Content is never hidden pending animation.

The battery-door slide deck is the only custom React client component. It supports buttons and arrow keys, announces slide count, and displays all slides when JavaScript is unavailable. Tables can scroll within their own region on narrow screens.

## Maintaining the system

Reuse the existing components rather than adding another card, button style, or navigation surface. Adjust density through semantic layout tokens, not arbitrary per-section margins. If typography, colors, spacing, or interaction changes, update both the tokens and this document. Import both shared CSS files in `app/layout.tsx`. Next.js fingerprints compiled CSS and JavaScript automatically; do not add manual asset query versions. Use shared data and components when adding or editing project rows, experience, publications, resources, or project navigation.

## References

- [Benji Taylor](https://benji.org/): compact identity and direct prose.
- [Hayden Bleasel](https://haydenbleasel.com/about): restrained type, readable work history, progressive disclosure.
- [Kelvin Zhang](https://www.kelvinzhang.ca/): selected work with concrete descriptions.
- [Shu Ding](https://shud.in/): small scale, clear reading measure, minimal framing.
- [Signs of AI design](https://github.com/febbhav/signs-of-ai-design): avoid unexplained repetition and default decorative treatments. The patterns are design critiques, not proof of authorship.

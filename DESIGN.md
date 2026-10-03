# Portfolio design system

The portfolio is a compact professional index: identity, selected work, experience, then publications. A recruiter should understand Megan’s discipline and background immediately and reach three representative projects in the first desktop screen.

## Source of truth

- `styles/tokens.css` owns visual decisions: palette, font, type scale, weights, line heights, tracking, spacing, layout, image dimensions, borders, radii, focus treatment, and motion.
- `styles/globals.css` implements the components. Add or change a token before introducing a new visual value. Avoid inline styling and page-specific theme overrides.
- All ten pages use the same styles and page measure. Next.js Server Components render the homepage and project narratives. Content lives in `data/` and `content/projects/`. Small client components enhance the presentation viewer and disclosures. The core content and native disclosures remain usable without JavaScript.

## Tokens

| Group              | Decision                                                          | Token                                                          |
| ------------------ | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| Page               | White, with a subtle gray image surface                           | `--color-page`, `--color-surface`                              |
| Text               | Charcoal primary; accessible gray secondary                       | `--color-text`, `--color-secondary`                            |
| Links              | Muted blue for interaction feedback                               | `--color-link`, `--color-focus`                                |
| Rules              | Light gray, decorative separators only                            | `--color-rule`, `--border-width`                               |
| Typeface           | Native system sans for fast, consistent rendering                 | `--font-body`                                                  |
| Type               | 13 / 14 / 16 / 24 px; case title 28–36 px                         | `--text-caption` through `--text-case-title`                   |
| Weight             | 400 body, 600 headings                                            | `--weight-body`, `--weight-heading`                            |
| Leading            | 1.3 titles, 1.5 lists, 1.65 prose                                 | `--leading-tight`, `--leading-ui`, `--leading-body`            |
| Spacing            | 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 px                  | `--space-1` through `--space-10`                               |
| Page measure       | 704 px maximum, with responsive outer gutters                     | `--layout-width`, `--layout-gutter`                            |
| Page padding       | 80 px above, 64 px below; mobile starts at 48 px                  | `--layout-top`, `--layout-bottom`                              |
| Sections           | 40 px between sections; 12 px after headings                      | `--section-gap`, `--section-heading-gap`                       |
| Rows               | 12 px vertical padding, 16 px column gap                          | `--row-padding`, `--row-gap`                                   |
| Skills             | 192 px category column; individual terms wrap together            | `--skills-label-width`, `--row-gap`                            |
| Project navigation | 64 px sticky bar; 40 px before the project title                  | `--project-nav-height`, `--project-title-space`, `--layer-nav` |
| Thumbnails         | 88 × 72 px desktop, contain rather than crop                      | `--project-thumb-width`, `--project-thumb-height`              |
| Experience logos   | 28 px frames, original brand colors, optically normalized artwork | `--experience-logo-size`, `--logo-scale-*`                     |
| Corners            | 4 px for media and slide controls                                 | `--radius-image`                                               |
| Controls           | 44 px for standalone contact and slide controls                   | `--control-height`                                             |
| Focus              | 2 px blue outline with 4 px offset                                | `--focus-width`, `--focus-offset`                              |
| Feedback           | 140 ms hover color and plus/minus opacity feedback                | `--duration-feedback`, `--ease-feedback`                       |
| Disclosure         | 160 ms measured-height transition for pointer activation          | `--duration-disclosure`, `--ease-motion`                       |

Pixel values above assume the browser’s default 16 px root size. Typography and layout use rem units to respect user text size.

## Responsive rules

CSS custom properties cannot be used in media query conditions. The two breakpoint tokens are therefore documented here and repeated as literal em values in the CSS:

- **Compact: 40em (640 px).** Experience dates stack under the role. Project dates stack under the description and remain visible. Skill terms stack below their category. Thumbnails become 72 × 64 px. Project titles start 32 px below the sticky bar.
- **Narrow: 25em (400 px).** Gutters become 16 px, thumbnails become 56 × 56 px, and paired case-study figures stack.

## Components and content rules

- **Introduction:** one name, one credential line, two short paragraphs. Contact links appear once. Keep the current role factual; do not add availability, metrics, or a résumé link without a source.
- **Capitalization:** use sentence case for project titles, case-study subheadings, experience roles, and interface labels. Capitalize the first word, then use lowercase for ordinary words: “Software engineer”, “Analysis & validation”, “Tools”, “Files”, and “Presentation”. Preserve proper names and technical acronyms such as Carnegie Mellon, SolidWorks, Siemens NX, AI, and MATLAB. Publication titles retain their official published capitalization. Edit the source text; do not use CSS text transforms.
- **Section title:** sentence case, 14 px semibold. No numbers, wide tracking, uppercase transforms, or oversized section banners.
- **Project row:** actual project image, sentence-case name, one visible description, and the original month/year date range. Keep the months on desktop and mobile. The whole row is a link. No hover-only information, expanding images, or moving rows.
- **Disclosure:** shared `Disclosure` component built with native `<details>`. The whole summary row is clickable and at least 44 px tall. A plus/minus indicator sits at the right; optional counts use quiet caption text. Keep the label stable between states, hide the decorative indicator from screen readers, and retain native keyboard interaction. Pointer activation enhances the panel with a measured-height transition; keyboard activation stays immediate. Native toggling still works without JavaScript. Both projects and skills use this component and the existing control, row, spacing, type, and rule tokens.
- **Project disclosure:** three featured projects remain visible; six additional projects are available through the shared disclosure. A full-width “More projects” row has a quiet “6 projects” count and plus/minus indicator, with a fine rule separating it from the featured list. Expanded projects retain the same thumbnail, description, and month-range layout. Features represent mechanism design, a working mechatronics prototype, and assistive design. Preserve access to all nine projects.
- **Experience row:** original company or research logo, organization, complete role title, month/year dates. Keep the chronological order and the existing dates. Preserve original brand colors: do not apply grayscale, inversion, or recoloring filters. Use uniform 28 px frames. Optical scale tokens compensate for padding within the original images. Bloomberg’s white mark retains its black brand background for visibility. Logos are decorative because the organization name sits beside them. Preserve all five logos.
- **Skills disclosure:** a full-width native disclosure with a plus/minus indicator. Five compact rows align muted category labels with individual skill terms separated by middle dots. Terms stay together when wrapping. Preserve every existing skill. Skills are also visible in each relevant case study.
- **Publication row:** full paper title, venue and date, full author attribution, and original DOI link. Never shorten a paper title to a marketing headline.
- **Case study:** one sticky navigation bar with an “All projects” return link and a quiet current-project title. Keep the return link visible throughout the narrative and on mobile. It goes directly to the project section of the homepage. Below it: title, description, original narrative and figures, resources, and adjacent-project links. Hide the bar in print. The homepage has no navbar or repeated footer.
- **Presentation:** keep the capitalized section heading in the server-rendered case-study content, alongside “Files” and “Tools”. The client viewer owns slide state and controls only.

## Interaction and accessibility

Use native links, headings, lists, and details. Preserve the skip link and visible keyboard focus. External links announce their new tab. Keep each external-link label and arrow in one inline text span so the underline is continuous. Publication links use that same joined underline on hover and focus. Secondary text has at least 4.5:1 contrast against white; separator rules do not convey information. Content is fully visible and interactive from the first frame.

The battery-door slide deck supports buttons and arrow keys, announces slide count, and displays all slides when JavaScript is unavailable. Tables can scroll within their own region on narrow screens.

## Motion

The portfolio stays still while loading, reading, and navigating. Pages switch without fades, slides, shared-title morphs, entrance staggers, or scroll-triggered reveals. Internal links use normal Next.js navigation with `prefetch={false}`: forced prefetching in this Next.js version requested HTML instead of the static route payload and stalled navigation. Verify links against the actual `out/` export when changing this setting. Do not add React `ViewTransition` boundaries or browser snapshot animations to routine portfolio navigation: motion previously made the page harder to scan and introduced unwanted resizing between the index and longer case studies.

Pointer-driven disclosures use one measured-height transition over 160 ms with a strong ease-out. Their content stays at full opacity and every row appears together. Height is the single layout-animation exception; no `auto` interpolation or fixed maximum height is used. The transition retargets from its current height on rapid toggling. After settling, restore natural height and visible overflow so resizing, wrapping, and keyboard focus remain correct. The plus/minus indicator has only a brief opacity change; controls have gentle color feedback without translation or scaling.

Keyboard activation toggles disclosures immediately. A new keyboard action or reduced-motion preference change settles an active panel immediately. Reduced-motion mode removes animated panel height and retains only the small opacity and color changes. Print output has no motion. Keep the remaining duration and easing values in the shared tokens; do not add animation libraries.

## Maintaining the system

Reuse the existing components rather than adding another card, button style, or navigation surface. Adjust density through semantic layout tokens, not arbitrary per-section margins. If typography, colors, spacing, or interaction changes, update both the tokens and this document. Import both shared CSS files in `app/layout.tsx`. Next.js fingerprints compiled CSS and JavaScript automatically; do not add manual asset query versions. Use shared data and components when adding or editing project rows, experience, publications, resources, or project navigation.

## References

- [Benji Taylor](https://benji.org/): compact identity and direct prose.
- [Hayden Bleasel](https://haydenbleasel.com/about): restrained type, readable work history, progressive disclosure.
- [Kelvin Zhang](https://www.kelvinzhang.ca/): selected work with concrete descriptions.
- [Shu Ding](https://shud.in/): small scale, clear reading measure, minimal framing.
- [Signs of AI design](https://github.com/febbhav/signs-of-ai-design): avoid unexplained repetition and default decorative treatments. The patterns are design critiques, not proof of authorship.

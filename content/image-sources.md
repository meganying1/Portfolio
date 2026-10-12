# Project image curation

The notes below record the original image curation. Subsequent page revisions and source reviews are recorded in [project-reviews.md](project-reviews.md). That review record supersedes older layout descriptions below when a page is pruned or rearranged.

Images are selected for a quick review by a mechanical design engineering recruiter: one clear system or prototype view, then distinct evidence of mechanism design, fabrication, or validation. Captions retain sequential figure numbers. At the user’s request, unchanged figures use the exact captions from current `main`, while new or changed media use captions accepted by the user. Figures are never enlarged beyond the source image or crop width; better source resolution replaces older screenshots where available. Focused free-body diagrams and concept illustrations remain visible as evidence of analytical reasoning and design development. Long arithmetic inside photos and repeated camera angles are omitted. Narrative edits follow the user’s requests: the truss failure load is corrected to 38 lb, the compactor expo is dated December 2024, the well-driller Results section omits the proposed physical prototype, Chinese Checkers briefly explains Minimax, and semicolons are replaced with ordinary sentence punctuation. The battery page omits next-step discussion, keeps a compact, captioned decision matrix, and leaves the detailed BOM in its presentation. Analytical values use regular-weight text. Each figure and its caption share a maximum width and left edge, with pretty wrapping that fills the available line width and keeps a natural ragged right edge. Paired captions are tuned for the same line count. Captions retain Fig. numbers and leave measured values in body text. Adjacent images have equal heights without distorting their aspect ratios.

Original assets and source reports are retained. New report figures below were extracted directly from embedded PDF image objects without altering their pixels. Crops are reversible CSS viewports in `ProjectImage`, measured in source pixels. They remove irrelevant surroundings without changing hardware, plotted values, or analysis geometry.

## CMU source figures

Paths below are relative to `/Users/mying/Documents/CMU/`. Page numbers refer to the PDF page, including front matter.

| Website asset              | Source report                                                           | Page | Figure                                                                                     |
| -------------------------- | ----------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------ |
| `linkage_revised.png`      | `Fall 2022/Design I/Project 1/Group 13 Final Report.pdf`                | 27   | Higher-resolution revised linkage geometry on the test fixture                             |
| `linkage_final_stress.png` | `Fall 2022/Design I/Project 1/Group 13 Final Report.pdf`                | 27   | Revised-design von Mises stress, with loading, supports, and legend                        |
| `tripod_assembly.png`      | `Fall 2022/Design I/Project 2/Project Report.pdf`                       | 6    | Higher-resolution phone-holder assembly and electronics packaging                          |
| `tripod_interface.png`     | `Fall 2022/Design I/Project 2/Project Report.pdf`                       | 16   | Compliant toothed rotating interface                                                       |
| `tripod_wing_stress.png`   | `Fall 2022/Design I/Project 2/Project Report.pdf`                       | 18   | Wing stress plot under 2.97 N loading; the viewport retains the fixed base and N/m² legend |
| `tripod_gdt.png`           | `Fall 2022/Design I/Project 2/Project Report.pdf`                       | 24   | Proposed subassembly GD&T annotations                                                      |
| `truss_assembly.png`       | `Fall 2021/Fundamentals of Mechanical Engineering/Project 1 Report.pdf` | 4    | Truss CAD on the center-load fixture                                                       |
| `truss_prototype.jpg`      | `Fall 2021/Fundamentals of Mechanical Engineering/Project 1 Report.pdf` | 5    | Fabricated acrylic truss on the test fixture                                               |
| `driller_frame.png`        | `Fall 2021/Fundamentals of Mechanical Engineering/Project 3 Report.pdf` | 9    | Structural frame and pedal packaging concept                                               |
| `driller_pedal_stress.png` | `Fall 2021/Fundamentals of Mechanical Engineering/Project 3 Report.pdf` | 17   | Pedal stress plot with the loading, fixed crank end, and N/m² legend                       |

## Additional analysis and fabrication originals

| Website asset           | Source report                                                           | Page | Viewport                                     |
| ----------------------- | ----------------------------------------------------------------------- | ---- | -------------------------------------------- |
| `linkage_fbd.png`       | `Fall 2022/Design I/Project 1/Group 13 Final Report.pdf`                | 21   | Overall linkage and member reaction diagrams |
| `linkage_drawing.png`   | `Fall 2022/Design I/Project 1/Group 13 Final Report.pdf`                | 30   | Assembly drawing, dimensions, and BOM        |
| `truss_fbd.jpg`         | `Fall 2021/Fundamentals of Mechanical Engineering/Project 1 Report.pdf` | 2    | Truss load path and joint FBDs               |
| `driller_frame_fbd.jpg` | `Fall 2021/Fundamentals of Mechanical Engineering/Project 3 Report.pdf` | 13   | Frame loads, reactions, and lever arms       |

## Battery door

The finalist comparison uses a labeled two-column drawing figure followed by one rotating snap-fit CAD figure. The sliding drawing reuses `battery_idea_snapfit.png`. `battery_snapfit_rotating_drawing.png` is the unmodified embedded image `Im24` from page 12 of `public/assets/files/Battery_Door_Design_Challenge.pdf` (924 × 568 pixels). `battery_rotating_latch.png` is the unmodified embedded image `Im21` from page 10 (1286 × 480 pixels), displayed through a CSS viewport that isolates the mechanism. Both figures follow the finalist introduction and precede the weighted-matrix explanation. The earlier paired CAD comparison was removed at the user's request because its sliding view repeated an earlier Design figure.

`battery_latch_closed.png` and `battery_latch_released.png` are the first two embedded CAD cross sections on page 8 of `public/assets/files/Battery_Door_Design_Challenge.pdf`. Their historical filenames are reversed relative to the displayed states. Figure 2 (`battery_latch_closed.png`) shows the depressed button and retracted latch. Figure 3 (`battery_latch_released.png`) shows the closed door and engaged latch. Captions and alt text follow the geometry and release sequence in the presentation. Their viewports isolate the release mechanism from the batteries. Figure 3 is trimmed above and below so the assembly envelopes align. The existing labeled `battery_exploded.png` leads the page. The tolerance figure keeps its dimensional-chain diagrams; nominal and RSS results are readable in the page text. The latch-contact and door-hook-stress clips remain as looping GIFs at their source dimensions and share one equal-height row. The redundant door-deformation animation is omitted from the narrative while its asset remains available. GIFs were converted directly from the existing MP4s at 15 fps with an adaptive palette and no resizing. The complete 15-slide presentation remains visible at the bottom and available as a PDF download. Four clean concept illustrations from page 7 form one comparison figure, with each name centered below its drawing. The button FBDs come from the fourth embedded image on page 14; their CSS viewport removes the surrounding arithmetic.

## Existing assets

### Trash compactor motion update

`compactor_compression.gif` replaces the return-stroke GIF on the project page while the homepage keeps its existing still. Source: the user-provided `7BAD1706-2F67-403E-B3E2-7192A7AB1F07.mov`, SHA-256 `b443d30d13b839debe9d8d9de485efb6357e7a0e74654f71e7d2d753a6432f19`. The source recording remains unmodified in the Messages attachment folder.

The GIF uses 0.0–9.0 seconds of the original recording at its original speed, showing only the upward compression stroke. FFmpeg applies the recording's orientation metadata, then crops the resulting 720 × 1280 frame at x = 90, y = 340 to 460 × 650 pixels. The crop retains the lid, viewing window, linkage, and enclosure base. It is reduced to 320 × 452 pixels at 10 fps with a 96-color palette and loops as a 9-second excerpt. No frames are reversed, generated, or retimed. The earlier return-stroke GIF is retained as an unused source asset.

Also reviewed the user-uploaded `D7DB4CA4-FF3C-406B-969E-D1E7F80C4D46.mov` and `A3BF2BF5-47CC-40D8-84F6-00DEE6714DDD.mov`. The first offers little distinct motion in a shaky view; the second repeats the return motion from a less clear angle. Both remain unmodified in the attachments and are omitted from the page.

### Linkage figures

Figures 1 and 3 restore the labeled CAD asset `linkage_annotated.svg` and free-body diagram `linkage_fbd_clean_v3.png` exactly from `main`. At the user's request, Figures 2 and 4 retain the fixture photograph and final stress plot rather than the briefly substituted GIFs. The supplied presentation's linked recordings remain unmodified outside the repository.

### Caption alignment

The user requested current `main` captions for all unchanged figures. Captions follow the matching source image when figures are reordered or renumbered. The user retained the compactor compression and Chinese Checkers gameplay captions. The battery calculation captions were subsequently revised at the user’s request to describe button travel and required spring constant, and door-hook strain, durability, and closing force, without numerical values. The two added well-driller calculation drawings were subsequently removed at the user’s request. The user subsequently requested calculation-focused captions for tripod Figure 4, compactor Figure 4, linkage Figure 3, well-driller Figure 3, and truss Figure 3.

### Chinese Checkers motion update

`checkers_gameplay.gif` replaces the legal-move still on the project page while the homepage keeps its existing screenshot. Source: `CMU/Fall 2021/Fundamentals of Programming and CS/Term Project/TP Demo.mp4` from the extracted reference archive, SHA-256 `45b08e4b47a7d05244d64f42418e42915889211022e1ea36f26487b796b78f2d`. The original recording remains outside the repository in `/tmp/clean_archive`.

The GIF uses 218.0–220.5 seconds at the original speed, starting when the turn timer reads 20. A 796 × 1050 crop at x = 0, y = 27 in the 1920 × 1080 source retains the whole game canvas and its controls while omitting the editor. The excerpt is reduced to 320 × 422 pixels at 10 fps with a 96-color palette and originally looped for 2.5 seconds. Frame delays were subsequently increased from 100 ms to 130 ms at the user’s request, slowing playback to a 3.25-second loop. It preserves the recorded highlighting, animation, and turn changes. No frames are generated or reversed; only playback delays are changed. The larger `112_video.mp4` was checked with metadata and one preview; it was not processed further because the smaller demonstration was sufficient.

### Original selections

- Trash compactor: retain the enclosure, mechanism photograph, and assembly CAD; crop the mechanism photograph around the linkage, plate, actuator, and custom mounts. Use `compactor_fbd_clean.png`, a white-background digital-pen redraw of the support and crossed-link FBDs, omitting the paper grid, case labels, calculations, and detached notes. The mechanism photo uses a taller viewport so its width is closer to the enclosure photo at the shared height.
- Tripod: retain one phone-mounted prototype and higher-resolution electronics assembly CAD; replace two interface views with one higher-resolution source figure and replace the unlabelled displacement crop with the source stress plot. Retain the hand-drawn phone/wing loading diagram. The proposed GD&T image remains in the assets but is omitted from the page because it does not identify the referenced datum features or clearly explain the functional fit.
- Linkage: `linkage_annotated.svg` places vector labels for the button, crank, coupler, and rocker over the unmodified report CAD image. The viewport retains the top of the fixture and button. Regenerate it with `node scripts/generate-linkage-annotations.mjs`. Retain one test-fixture photograph, cropped around the links and relevant interfaces. Use the final-design source stress plot with its legend and `linkage_fbd_clean_v3.png` for the critical-orientation FBDs. The isolated upper-right rocker is a single member with a fully enclosed slot. The coupling reaction and coupler connection act at the upper-slot joint below the applied tip load. Omit the assembly drawing from the narrative as requested; retain its extracted asset. The slot findings are verified against report pages 32–33: the coupler pin did not slide along the slot during the final test, and the slotted rocker showed the greatest out-of-plane deflection among the links. Pin-slot friction is described as a suspected cause based on the user's clarification, not a measured cause.
- Well driller: pair the lift-and-release sketch with the clearer frame concept beside the design explanation, and replace the unlabelled pedal displacement crop with the source stress plot. Restore the structural frame FBD from the higher-resolution embedded image on page 13, retaining loads and dimensions while removing the arithmetic.
- Truss: use the source CAD and prototype images with focused views of the members and load connection. Use a digital-pen redraw of the truss and five joint FBDs from page 2, keeping the 40 lb design load and force directions while omitting the arithmetic. The CMU Word report contains the same prototype photo; no sharper alternative was found in the inspected reports and loose JPEGs. The final failure load is 38 lb per the user’s correction.
- Mobile robot: place the course photograph near the overview and focus it on the robot, line, and obstacle walls. The homepage uses the same crop. The robot report contains a rotated video screenshot and code screenshots, so it offers no useful additional still image.
- Noise reduction: show one original/processed waveform comparison with all axes retained and a caption noting the different amplitude scales, plus the LMS convergence plot. Restore the four-recording montage as evidence of testing across environments; omit the generic cancellation example.
- Chinese checkers: retain the legal-move screenshot, which demonstrates interaction and game logic in one image; remove the repeated plain board.

Homepage thumbnails use the same source images as the project pages. The linkage thumbnail retains the unannotated CAD with the same full assembly viewport used in Figure 1, including the button and fixture top; Figure 1 adds the labels. Experience logos and the share card are outside the project-photo curation scope.

## Design Research Collective

`material-selection-mae.png` is an unchanged copy of the user-selected
`/Users/mying/Documents/Design Research Collective/Figures/mae_heatmap.png`.
It remains the homepage project thumbnail. It compares Qwen3 ratings with expert
responses using mean absolute error. It is Figure 2 on the material-selection
page, immediately after the “I compared each score” paragraph under Expert comparison.

`material-selection-workflow.png` is an unchanged copy of the user-selected
`/Users/mying/Documents/Design Research Collective/Figures/workflow.png`.
It is Figure 1 on the material-selection page, placed under Overview. It shows the Qwen 2.5
agent’s prompting, Wikipedia search, and scoring workflow.
Code, paper, contribution, and attribution sources
are documented in [drc-sources.md](drc-sources.md).

`design-research-ecosystem.svg` is the unmodified architecture diagram from the
[framework documentation](https://cmudrc.github.io/design-research-agents/#integration-with-the-ecosystem).
It supplies context for the broader team’s framework, not evidence of Megan’s
individual implementation or performance results. Its MIT license is retained
alongside the asset as `design-research-docs-LICENSE.txt`. It is the framework
page’s only figure and is also used for its homepage thumbnail.

## Regenerated diagrams

`compactor_fbd_clean.png`, `truss_fbd_clean.png`, and `linkage_fbd_clean_v3.png` are ImageGen edits derived from the retained source drawings, not new calculation records. Sources, exact edit prompts, and force-arrow checks are documented in [image-edits.md](image-edits.md).

## Project process visuals

The visual revision preserves all existing narrative wording on the tripod-attachment page. At the user’s request, the assembly and rounded-teeth CAD views identify CAD in their captions. Existing figures are numbered in reading order. The trash-compactor page retains its original figures and narrative, adding the full enclosure CAD from the user-provided project poster beside the existing linkage CAD beneath the actuator-mounting paragraph.

- `tripod-development.jpg`: unchanged embedded image object `X112.jpg` from page 11 of `Fall 2022/Design I/Project 2/Project Report.pdf` in the CMU archive. Retained as the source for the background cleanup. It is a design-development sketch, not a photograph of fabricated parts.

- `tripod-development-clean.png`: ImageGen background edit of `tripod-development.jpg`, removing the graph-paper grid while retaining the sketch and handwritten annotations. Figure 7 uses a reversible CSS crop of this version. The original image is preserved. The exact edit prompt is recorded in [image-edits.md](image-edits.md).

- `tripod-gripping.gif`: converted directly from the user-provided `/Users/mying/Downloads/IMG_2305.MOV`. The excerpts at 0.75–4.60 seconds and 8.75–11.20 seconds show phone placement, wing closure, and phone removal at the original speed, omitting the intervening idle pause. FFmpeg crops the 1920 × 1080 recording at x = 360, y = 0 to 1200 × 1080, then reduces it to 420 × 378 at 12 fps with a 96-color palette. The GIF loops; no frames are generated, reversed, or retimed. The original recording remains unmodified in Downloads. Figure 1 retains its existing caption.

- `tripod-rotating-base-parts.jpg`: unchanged copy of the user-selected `/Users/mying/Downloads/IMG_2289.JPG`, showing the printed holder and separate outer rotating base. Following the user’s subsequent figure-position swap, the rounded-teeth CAD detail (Figure 3) appears beside the assembly CAD (Figure 2), with the assembly on the left. This pair stacks in reading order at the compact breakpoint. Figure 4 is the fabricated prototype beneath the rotating-base paragraph, with the caption “Fabricated holder showing the servos and electronic components, with the rotating base removed.” The photograph uses a reversible CSS viewport at x = 650, y = 25, width = 2970, height = 2880 in the 4032 × 3024 original. Existing analysis figures and the development sketch are renumbered in reading order.

- `compactor-poster-source.png`: unchanged copy of the user-provided `/var/folders/nf/83wk02mx6q91pqvpp6gq04q80000gp/T/codex-clipboard-2fc25cd6-ce88-4437-94b7-2a8510513267.png` project poster. The full enclosure CAD at x = 42, y = 915, width = 453, height = 545 in the 1920 × 1536 image supplied Figure 4. At the user’s request, the old red annotations and cursor were removed with built-in ImageGen, then six vector callouts were added in `compactor-enclosure-annotated.svg` using the blue annotation style from the linkage project. The cleaned raster is retained as `compactor-enclosure-clean.png`; the exact prompt and checks are recorded in [image-edits.md](image-edits.md). No poster prose, market claims, or cost figures were added to the page. The existing linkage CAD remains Figure 3 and is paired with Figure 4 beneath the actuator-mounting paragraph. Figure 4 uses the sibling `compactor-enclosure-annotated-trimmed.svg`, whose SVG viewport trims only the lower whitespace to 1520 × 1240. The image and labels retain their original coordinates, and the full raised lid and base remain inside the viewport. Its caption describes integration of the scissor linkage with the enclosure and compression plate. The existing free-body diagram becomes Figure 5.

- `compactor-fea-setup.png`: unchanged copy of the user-supplied `Screenshot 2026-10-10 at 8.42.11 AM.png` in the temporary screencapture folder. Retained as the original 274 × 250 reference. At the user’s request for improved resolution, Figure 6 now uses the larger matching view from the unchanged project poster, with a reversible CSS crop at x = 1468, y = 1090, width = 425, height = 375. This supplies more source pixels without generating analysis details. Figures 5 and 6 appear side by side, with the free-body diagrams on the left and FEA setup on the right, directly above the paragraph beginning “We also used FEA…” at the user’s request. It shows the assembly FEA setup with applied plate loads and lower support constraints, not a stress-result contour or a quantitative result. The new sentence describes only this visible setup and uses team attribution.


### Actuator-mount concept placement

At the user's request, the linkage assembly CAD and full enclosure CAD (Figures 3 and 4) now appear one paragraph earlier, below the mechanism-selection paragraph. The actuator-mounting paragraph is followed by the new Figure 5, `actuator-mount-concept.png`, with the exact caption “Actuator-mount concept shown in side, top, and isometric views”. The analysis diagrams are renumbered to Figures 6 and 7 in reading order. Narrative wording is unchanged.

The new figure is an unchanged copy of the previously approved built-in ImageGen output `generated-figures/assets/actuator-mount-black.png` in the mechanical visual audit. It is derived from page 1 of `CMU/University Drive/Takeout/Takeout/Drive/Notability/Fall 2024/Product Design/Integration Idea.pdf`. The transparent 1859 × 846 PNG retains three views in one row with black Arial labels, leaders, and endpoint dots; the top and isometric views omit screws. It illustrates an early concept rather than a new fabrication record. No image was regenerated for this placement.

At the user's request, Figure 5 uses a reversible CSS crop at x = 0, y = 180, width = 1859, height = 510 to reduce empty space above and below the drawings. All three views, labels, and callouts remain visible; the original image is unchanged.


### Concept development sections

Both pages follow the Battery Door page's order: Overview, Design, Concept development, then Analysis & validation. Each concept section contains one concise paragraph and one previously approved figure. At the user’s request, Design opens directly with the selected mechanism. The tripod opening describes IR-triggered closure on phone placement and reopening on removal, as clarified by the user. Existing figure captions, image treatment, and all content from Analysis & validation onward remain unchanged. Figures are numbered in reading order. No new image was generated for this revision.

- Trash Compactor: `compactor-concept-alternatives.png` is Figure 6, copied unchanged from the approved manual-lever, hand-crank, and foot-operated-scissor comparison. Source drawings appear in `CMU/University Drive/Takeout/Takeout/Drive/Notability/Fall 2024/Product Design/100 Ideas.pdf`, pages 5–7. The concept paragraph draws on market research into manual lever tools (page 3), rail-guided compactors (page 10), and chain-driven compaction (page 13), competitor testing (page 4), the linkage and solid-plate rationale (page 5), the weighted comparison (page 9), and the conclusion favoring motor-powered compaction to reduce user effort (page 15). The foot-pedal drawing is an early layout, not the final bottom-mounted linear-actuator architecture. The Design CAD pair is Figures 3–4, actuator-mount concept Figure 5, and analysis pair Figures 7–8.
- Tripod Attachment: `tripod-spring-wing-concept.png` is Figure 5, copied unchanged from the approved spring-supported wing concept. Its original sketch is on page 10 of `CMU/Fall 2022/Design I/Project 2/Project Report.pdf`. User research appears in Concept development, grounded in the report's survey findings and focus on phone securing and orientation adjustment (page 5), early ideation and slot padding (page 7), varied phone requirements (page 8), and the decision to replace secondary wings and springs with cutout TPU wings and revise the tooth shape (page 9). At the user's request, the concept paragraph also restores the earlier user-research detail about gripping phones, small mounting screws, and precise adjustments, connecting these to automatic gripping and orientation changes without repeatedly loosening a screw. The paragraph does not assert a numerical ranking of survey tasks or claim all phone sizes were successfully accommodated. Material selection is also supported on page 20. The early draft `0th report submission.pdf`, pages 7–9, was reviewed. The drawing is concept evidence, not a failed-part photograph. The Design prototype is Figure 2, the CAD pair Figures 3–4, analysis pair Figures 6–7, and existing exploded development sketch Figure 8.

The user approved a retrospective opening for Trash Compactor's Concept development section and an explicit distinction between the early foot-operated scissor concept and the selected linear-actuator design. The existing comparison criteria and competitor observations remain. At the user's request, Figure 6's caption is shortened to “Early concepts for trash compaction”. Its detailed alternative descriptions remain in the image alt text. Figure 6 appears between the opening concept paragraph and the paragraph beginning “The linkage concept ranked highest”, as requested. The user declined adding the weighted-comparison table.

At the user's request, Tripod Attachment's Concept development text has a separate user-research introduction followed by one paragraph combining the wing-selection and rotating-interface decisions. The restructure uses the existing findings and decisions without adding new alternatives or analysis. Figure 5 retains its placement and caption.

At the user's request, Tripod Attachment's Figure 5 uses a reversible CSS crop at x = 0, y = 170, width = 1964, height = 535 to remove excess space above and below the spring-wing drawings. Both views and all labels remain inside the crop. The original image is unchanged.

The user subsequently requested moving the exploded development sketch out of Fabrication & iteration to immediately after the first Concept development paragraph, between “These findings led us to brainstorm…” and “We also explored spring-supported…”. The exploded sketch is now Figure 5, retaining its existing crop and caption. The spring-wing figure is now Figure 6 with the crop recorded above, followed by the analysis figures numbered 7 and 8 in reading order.

At the user's request, Tripod Attachment's Figure 5 caption is now “Drawings from early concept development”, emphasizing the development stage without listing the depicted parts. The image's detailed alt text remains.


### Well Driller concept comparison

At the user's request, the saved mechanical-page revisions from “Review mechanical design narratives” were imported into the separate `codex/project-process-visuals` preview worktree. The approved Well Driller clarification distinguishes rotational bevel/worm concepts from the selected lift-and-release architecture. Pending proposals from that chat were not implemented.

`driller_bevel_concept.jpg` and `driller_worm_concept.jpg` are unchanged copies of the drawings extracted from pages 7 and 8 of `CMU/Fall 2021/Fundamentals of Mechanical Engineering/Project 3 Report.pdf`. The audit originals are `mechanical-visual-audit/assets/driller-p7-1.jpg` and `driller-p8-0.jpg`. The selected lift-and-release drawing reuses `driller_mechanism.png`.

At the user's request, all three drilling concepts now share one comparison image, Figure 1, in bevel-gear, worm-gear, then lift-and-release order. `driller-concept-alternatives.svg` embeds the unchanged original image bytes in one row. SVG viewports trim only outer whitespace from the first two drawings, retaining their pedal inputs, gears, drill interfaces, and motion arrows. No raster image was generated or redrawn. At the user’s request, Figure 1 uses the existing wide treatment to fill the page’s content width. One existing-style border and caption enclose the three concepts. The selected mechanism is not repeated elsewhere on the page.

The operation paragraph precedes the frame CAD, Figure 2, and gear-transmission CAD, Figure 3, displayed side by side and stacked in that order on mobile. `driller-gear-transmission.png` is an unchanged copy of the user-provided `/var/folders/nf/83wk02mx6q91pqvpp6gq04q80000gp/T/codex-clipboard-42a6cad3-d8fb-4c23-9026-7e6d74875963.png`. A reversible CSS viewport at x = 115, y = 30, width = 345, height = 435 removes outer whitespace while retaining all visible gears. The expanded operation paragraph describes the chain input, gear engagement, and toothless-sector release supported by pages 6–7 of `CMU/Fall 2021/Fundamentals of Mechanical Engineering/Project 3 Report.pdf`. It adds no unverified gear ratios or performance claims. Frame calculations and pedal stress analysis are renumbered to Figures 4 and 5. The remaining page content is unchanged.


At the user's request, the Well Driller operation paragraph now explains the transmission's mechanical advantage. The tooth counts in the supplied calculation image `codex-clipboard-15c88800-2432-40a9-b308-89199e71715b.png`, also found on page 11 of `CMU/Fall 2021/Fundamentals of Mechanical Engineering/Project 3 Report.pdf`, imply ideal torque multiplication of (72/9) × (36/23) × (40/40) × (40/40) × (48/40) = 15.026. This agrees with the recorded approximately 13.2 N·m output torque and 0.88 N·m pedal-shaft torque. The paragraph states approximately 15:1 ideal torque multiplication and the tradeoff between pulley speed and pedal effort. This is an inference from the tooth counts and ideal meshing assumption, not measured performance or a claim of increased power. The report's conclusion about output speed was not used because it conflicts with these reduction ratios. No image or figure arrangement was changed for this revision.

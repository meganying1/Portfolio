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

`battery_latch_closed.png` and `battery_latch_released.png` are the first two embedded CAD cross sections on page 8 of `public/assets/files/Battery_Door_Design_Challenge.pdf`. Their viewports isolate the release mechanism from the batteries. The released view is trimmed above and below so the assembly envelope aligns with the closed view. The existing labeled `battery_exploded.png` leads the page. The tolerance figure keeps its dimensional-chain diagrams; nominal and RSS results are readable in the page text. The latch-contact and door-hook-stress clips remain as looping GIFs at their source dimensions and share one equal-height row. The redundant door-deformation animation is omitted from the narrative while its asset remains available. GIFs were converted directly from the existing MP4s at 15 fps with an adaptive palette and no resizing. The complete 15-slide presentation remains visible at the bottom and available as a PDF download. Four clean concept illustrations from page 7 form one comparison figure, with each name centered below its drawing. The button FBDs come from the fourth embedded image on page 14; their CSS viewport removes the surrounding arithmetic.

## Existing assets

### Trash compactor motion update

`compactor_compression.gif` replaces the return-stroke GIF on the project page while the homepage keeps its existing still. Source: the user-provided `7BAD1706-2F67-403E-B3E2-7192A7AB1F07.mov`, SHA-256 `b443d30d13b839debe9d8d9de485efb6357e7a0e74654f71e7d2d753a6432f19`. The source recording remains unmodified in the Messages attachment folder.

The GIF uses 0.0–9.0 seconds of the original recording at its original speed, showing only the upward compression stroke. FFmpeg applies the recording's orientation metadata, then crops the resulting 720 × 1280 frame at x = 90, y = 340 to 460 × 650 pixels. The crop retains the lid, viewing window, linkage, and enclosure base. It is reduced to 320 × 452 pixels at 10 fps with a 96-color palette and loops as a 9-second excerpt. No frames are reversed, generated, or retimed. The earlier return-stroke GIF is retained as an unused source asset.

Also reviewed the user-uploaded `D7DB4CA4-FF3C-406B-969E-D1E7F80C4D46.mov` and `A3BF2BF5-47CC-40D8-84F6-00DEE6714DDD.mov`. The first offers little distinct motion in a shaky view; the second repeats the return motion from a less clear angle. Both remain unmodified in the attachments and are omitted from the page.

### Linkage figures

Figures 1 and 3 restore the labeled CAD asset `linkage_annotated.svg` and free-body diagram `linkage_fbd_clean_v3.png` exactly from `main`. At the user's request, Figures 2 and 4 retain the fixture photograph and final stress plot rather than the briefly substituted GIFs. The supplied presentation's linked recordings remain unmodified outside the repository.

### Caption alignment

The user requested current `main` captions for all unchanged figures. Captions follow the matching source image when figures are reordered or renumbered. The user retained the compactor compression and Chinese Checkers gameplay captions. The battery calculation captions were subsequently revised at the user’s request to describe button travel and required spring constant, and door-hook strain, durability, and closing force, without numerical values. The two added well-driller calculation drawings were subsequently removed at the user’s request.

### Chinese Checkers motion update

`checkers_gameplay.gif` replaces the legal-move still on the project page while the homepage keeps its existing screenshot. Source: `CMU/Fall 2021/Fundamentals of Programming and CS/Term Project/TP Demo.mp4` from the extracted reference archive, SHA-256 `45b08e4b47a7d05244d64f42418e42915889211022e1ea36f26487b796b78f2d`. The original recording remains outside the repository in `/tmp/clean_archive`.

The GIF uses 218.0–220.5 seconds at the original speed, starting when the turn timer reads 20. A 796 × 1050 crop at x = 0, y = 27 in the 1920 × 1080 source retains the whole game canvas and its controls while omitting the editor. The excerpt is reduced to 320 × 422 pixels at 10 fps with a 96-color palette and loops for 2.5 seconds. It preserves the recorded highlighting, animation, and turn changes. No frames are generated, reversed, or retimed. The larger `112_video.mp4` was checked with metadata and one preview; it was not processed further because the smaller demonstration was sufficient.

### Original selections

- Trash compactor: retain the enclosure, mechanism photograph, and assembly CAD; crop the mechanism photograph around the linkage, plate, actuator, and custom mounts. Use `compactor_fbd_clean.png`, a white-background digital-pen redraw of the support and crossed-link FBDs, omitting the paper grid, case labels, calculations, and detached notes. The mechanism photo uses a taller viewport so its width is closer to the enclosure photo at the shared height.
- Tripod: retain one phone-mounted prototype and higher-resolution electronics assembly CAD; replace two interface views with one higher-resolution source figure and replace the unlabelled displacement crop with the source stress plot. Restore the hand-drawn phone/wing loading diagram and add the proposed drawing annotations.
- Linkage: replace the revised CAD with its higher-resolution report original and retain one test-fixture photograph, cropped around the links and relevant interfaces. Replace the initial-design cropped FEA image with the final-design source plot and its legend. Use `linkage_fbd_clean_v2.png` for the critical-orientation FBDs from page 21, checked against the equilibrium equations on page 22. The coupling reaction and coupler connection act at the upper-slot joint below the applied tip load. Omit the assembly drawing from the narrative as requested; retain its extracted asset.
- Well driller: pair the lift-and-release sketch with the clearer frame concept beside the design explanation, and replace the unlabelled pedal displacement crop with the source stress plot. Restore the structural frame FBD from the higher-resolution embedded image on page 13, retaining loads and dimensions while removing the arithmetic.
- Truss: use the source CAD and prototype images with focused views of the members and load connection. Use a digital-pen redraw of the truss and five joint FBDs from page 2, keeping the 40 lb design load and force directions while omitting the arithmetic. The CMU Word report contains the same prototype photo; no sharper alternative was found in the inspected reports and loose JPEGs. The final failure load is 38 lb per the user’s correction.
- Mobile robot: place the course photograph near the overview and focus it on the robot, line, and obstacle walls. The homepage uses the same crop. The robot report contains a rotated video screenshot and code screenshots, so it offers no useful additional still image.
- Noise reduction: show one original/processed waveform comparison with all axes retained and a caption noting the different amplitude scales, plus the LMS convergence plot. Restore the four-recording montage as evidence of testing across environments; omit the generic cancellation example.
- Chinese checkers: retain the legal-move screenshot, which demonstrates interaction and game logic in one image; remove the repeated plain board.

Homepage thumbnails match each project page’s lead image and crop. Experience logos and the share card are outside the project-photo curation scope.

## Regenerated diagrams

`compactor_fbd_clean.png`, `truss_fbd_clean.png`, and `linkage_fbd_clean_v2.png` are ImageGen edits derived from the retained source drawings, not new calculation records. Sources, exact edit prompts, and force-arrow checks are documented in [image-edits.md](image-edits.md).

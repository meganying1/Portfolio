# Project page reviews

Record the evidence used and the pruning decisions for each individually committed page. Existing narratives are the baseline. Source assets are retained even when omitted from a page.

## Battery door

- Sources: existing page, `public/assets/files/Battery_Door_Design_Challenge.pdf` (all 15 pages), retained CAD cross sections and FEA GIFs. The CMU directory is not yet available in the cloud workspace.
- Analysis coverage: button/latch geometry and travel, button FBDs and spring sizing, peg bending, door-hook deflection/strain/stress and assumed fatigue limit, closing force, RSS overlap, latch/contact FEA, and door-hook FEA. The SUS316 peg fatigue reference does not substantiate the proposed aluminum button. The latch-only simulated force is distinguished from the complete button press force.
- Presentation: six primary visual groups (seven numbered figures because the closed/released pair has individual captions), one weighted decision matrix, and separate latch and door-hook FEA figures. Omitted the extra button-FBD photo and inline slide deck while preserving their source files.
- Supplemental PDF reviewed visually and as text: consistent layout, labeled concepts, release sequences, assembly instructions, and a scoped BOM provide useful depth independently. Retained the download, with the initial material-analysis limitation explained in the page. Retained the STEP assembly.
- Final pruning: consolidated overview/design/concept paragraphs and kept results explicitly analytical. No physical test, drop, temperature, or endurance validation is claimed.
- Visual review caught reversed state names in the pre-existing cross-section filenames. Matched the views to PDF page 8 and corrected the order, crops, and descriptions without renaming source assets.

## Trash compactor

- Sources: existing page and original `compactor_force.jpg` and `compactor_fos.jpg` calculations, assembly CAD, prototype photographs, and previously source-checked FBD redraw. CMU documentation remains pending upload.
- Analysis coverage: minimum-angle geometry (8.2°), support-reaction/FBD force transmission with the 44 lbf actuator, 6.4–12.8 lbf supported-load estimates, and axial-stress checks at 6.4 and 60 lbf against an assumed 40 ksi yield strength. The 60 lbf case is described only as an analyzed load case; the source's ambiguous “ideal measured” note is not presented as a verified test measurement.
- Presentation: four numbered figures in three primary groups, no table. Retained enclosure/linkage evidence, CAD interfaces, and the force diagram. No compaction or stall clip is present in the available assets, so no GIF is fabricated.
- Final pruning: consolidated design/overview paragraphs, distinguished individual CAD/mount ownership from team fabrication, qualified insufficient actuator capacity as suspected, and kept the proposed actuator change separate from the demonstrated cycle and award.

## Tripod attachment

- Sources: existing page, original phone/wing loading sketch, source CAD assembly/interface and fixed-base stress plot, and prototype photographs. CMU documentation remains pending upload.
- Analysis coverage: servo-torque/geometry loading (2.97 N per wing), simplified bending (2.45 MPa, FoS 21.4), and fixed-base stress/deformation FEA (10.2 MPa, FoS 5.1). The original FEA tree visibly identifies natural rubber, so the page qualifies this model rather than presenting it as validation of printed TPU. No deflection magnitude is inferred from the retained unlabelled displacement crop.
- Presentation: five figures in four primary groups, no table. Kept the distinct hardware, rotating interface, hand-analysis, and FEA evidence. Omitted the proposed GD&T sketch: missing datum definitions and inappropriate datum references on form controls make it unsuitable as a finished manufacturing drawing. Original file is preserved.
- Final pruning: removed repeated sensor/wing/interface explanations, retained the documented attachment and seating failures, and labeled wider clearance and mechanical retention as proposed changes. The $58.18 estimate retains its 50-unit quotation context and production-cost limitations. No user-effort or retention measurement is claimed.
- Corrected the shared page description/index summary to describe the prototype and intended functions without asserting a measured reduction in user effort.

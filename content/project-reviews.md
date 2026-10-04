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

## Linkage system

- Sources: existing page, original critical-orientation FBDs, the source-checked redraw, revised CAD/prototype, and original final-design stress plot. CMU documentation remains pending upload.
- Analysis coverage: critical-orientation geometry and joint equilibrium, member-force/stress calculations and acrylic link sizing, stress/yield screening and deflection FEA, and initial/revised CAD motion-study predictions. Did not add the very low single-case FEA stress as a system-wide validation claim.
- Presentation: four figures in three primary groups and one contact-time table. The table directly compares documented initial and final predictions with measured cumulative contact over 120 seconds. No source motion clip is available, so no animation is created.
- Final pruning: consolidated repeated design and iteration paragraphs, preserved the failed slot/dwell behavior and early-descent hypothesis, and avoided asserting an isolated cause of the out-of-plane deflection. The 14× improvement and 78% of prediction are rounded ratios derived from the documented contact times.

## Well driller

- Sources: existing page, retained mechanism sketch and frame CAD, original frame equilibrium diagram/notes, and source pedal stress plot. CMU documentation remains pending upload.
- Analysis coverage: cable tension and pedal force, frame reactions/connection loads with the explicitly assumed 50 kg operator, primary/pedal pin sizing at FoS 4 and 2, pedal speed/gearing/drill motion and power, and static pedal stress/deformation FEA. The approximately 107 MPa peak and 1,034 MPa yield reference are converted directly from the source plot’s N/m² legend; no material is inferred from the yield value.
- Presentation: four sequential figures, no table. Moved overall frame CAD to the overview and the actual lift/release sketch beside the design explanation. No drawings of the other concepts or motion clips are fabricated.
- Final pruning: separated the documented three-concept selection from mechanism operation, retained individual analysis ownership, and made CAD/analytical status and the unvalidated drilling/impact/engagement behavior explicit. No physical-prototype plan is added to Results.

## Truss structure

- Sources: existing page, original full equilibrium/member-force calculations, source-checked FBD redraw, assembly CAD, and test-fixture prototype photo. CMU documentation remains pending upload. Preserved the baseline/user-corrected final result of 38 lb.
- Analysis coverage: concept strength-to-weight estimates and member sizing, global equilibrium/support reactions (20 lb each), joint/member forces (approximately 28.3 lb compression in outer diagonals), assumed-material strength screening, and predicted failure location. No undocumented buckling model or stress result is added.
- Presentation: three figures in two primary groups and one thickness/test-outcome table. The >50 lb result is explicitly a supported load without observed failure, not a failure measurement. No available photo unambiguously shows the final failure, so the prototype photo is not relabeled as failure evidence.
- Final pruning: moved iteration measurements into the single table, distinguished the 42 lb prototype from the 38 lb final specimen, and preserved the laser-cutter change as a possible contributor rather than a proven cause. The 5% shortfall is derived from 38/40.
- Aligned the page description with the baseline's target of failure near 40 lb rather than implying demonstrated survival at 40 lb.

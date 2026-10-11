# Portfolio diagram edits

These project assets were edited with the built-in ImageGen tool from the retained source FBDs. They are digital-pen redraws, not photographs of new calculations. Original source files remain unchanged.

The October 3 fidelity review checked every retained support, member connection, force label, and arrow direction against the source. The truss retains nodes A–E, all seven members, five joint diagrams, a pin at A, a roller at C, and the 40 lb design load. The compactor retains its pin and roller supports, horizontal actuation arrow, Fx/Fy and Rx/Ry directions, and downward W. The linkage lower-member arrows retain the original compressive convention. A misplaced linkage reaction was corrected: RC acts at the upper end of the slot below the tip load F, and the assembled coupler attaches there. Numerical derivations and dimensions are intentionally omitted from these portfolio crops.

| Final asset                                              | Original reference                                                                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `public/assets/photos/projects/compactor_fbd_clean.png`  | `compactor_force.jpg`                                                                                               |
| `public/assets/photos/projects/truss_fbd_clean.png`      | `truss_fbd.jpg`, CMU truss report page 2                                                                            |
| `public/assets/photos/projects/linkage_fbd_clean_v3.png` | `linkage_fbd.png`, CMU linkage report page 21, with equilibrium equations on page 22 used to check force directions |

## Compactor initial cleanup

```text
Edit the attached original engineering calculation photograph into a faithful cleaned crop for a mechanical engineering portfolio. Use case: background-extraction and precise-object-edit. Keep ONLY the existing colored mechanical drawings: the upper crossed green links with their pin, fixed and roller support symbols, and force arrow; the middle-left isolated crossed-link free-body diagram with its joint and force arrows; the middle-right full scissor-linkage line drawing; and the small existing geometry triangle if it is helpful. Preserve the exact topology, number of links, pin locations, support symbols, line geometry, arrow directions, and original colors. Keep the original short force and geometry labels attached to the drawings (Fx, Fy, Rx, Ry, W, L, y, theta) where they are legible. Replace the beige graph-paper background and every grid line with a pure white background. Completely remove the 'worst case', 'best case', 'WORST CASE', 'WORST', 'BEST' phrases, equations, numerical answers, highlighted commentary, explanatory prose, and other detached notes. Do not invent any engineering information, add force arrows, change arrows or topology, or reinterpret the mechanism. Arrange these cleaned original drawings in a compact balanced landscape composition with comfortable white margins. This is a cleanup of existing drawings, not a new illustration; keep their hand-drawn character and improve legibility.
```

## Compactor final composition

```text
Edit this cleaned engineering image. Keep exactly the two drawings on the LEFT: (1) the green crossed links with the fixed support, roller support, central pin, and red horizontal arrow, and (2) the crossed-link free-body diagram with the blue Fx and Fy arrows, red Rx and Ry arrows, red downward W arrow, and dashed vertical centerline. Preserve these two drawings exactly, including their geometry, colored strokes, labels, support symbols, and arrow directions. Remove the entire scissor-stack drawing on the right, all red 1-inch dimension arrows and labels, and the small triangle at the bottom. Place the two retained drawings next to one another in a compact, balanced landscape composition on a completely flat pure white (#ffffff) background, with the green support diagram at left and the labeled free-body diagram at right. Keep useful drawing content large with modest margins. Do not add or change any engineering information, add titles, add captions, add a paper texture, or add new symbols.
```

## Truss redraw

```text
Use case: scientific-educational. Edit the attached original truss hand-calculation page into a clean, faithful iPad-style digital-pen redraw of ONLY the diagrams at the very top of the page, above the dashed divider. Preserve the exact truss topology: nodes A, B, C along the bottom, D and E at the top; members AD, DB, BE, EC, DE, AB, BC; pinned support at A, roller at C, downward 40 lb design load at B. Preserve the existing geometry proportions and labels. Show the overall truss load diagram on the left and the five existing joint free-body diagrams on the right, clearly separated and legible. Joint A has upward RAy, rightward RAx and TAB, and upward-right TAD. Joint B has leftward TAB, rightward TBC, upward-left TBD, upward-right TBE, and downward 40 lb. Joint C has upward RC, leftward TBC and upward-left TCE. Joint D has downward-left TAD, downward-right TBD and rightward TDE. Joint E has leftward TDE, downward-left TBE and downward-right TCE. Use neat dark gray digital pen strokes, clear handwritten-style lettering, subtle blue force arrows and a red applied load. Keep all arrow directions, nodes, member connections and support symbols faithful to the source. Keep the 40 lb label as the DESIGN load, not the measured failure load. Remove the paper texture, decorative bolt-hole circles, red failure slashes, numerical derivations, solved member-force values, equations, dimension arithmetic and every part of the page below the divider. A pure white background with modest margins, compact landscape composition, readable labels at portfolio display size. No extra arrows, invented engineering information, shading, scenery or captions.
```

## Linkage redraw

```text
Use case: scientific-educational. Edit the attached faint original linkage FBD photograph into a faithful, clear iPad-style digital-pen redraw. Include ONLY the four existing engineering drawings: the whole linkage load diagram at upper left, the isolated slotted-member free-body diagram at upper right, the isolated long member at lower left, and the isolated short member at lower right. Preserve their pin centers, slots, member connections, relative geometry, force-arrow positions and force-arrow directions exactly as shown. Make the existing applied downward F and reaction labels Rx, Ry, and RC readable, keeping the correct labels with their original arrows. Preserve the source's force-direction conventions rather than changing them to a different convention. Omit the handwritten paragraph, all numerical dimensions, trigonometry and solved angles at the bottom. Do not invent numbers, extra reaction forces, additional pins, or new geometry. Use neat charcoal digital-pen outlines, readable handwritten-style labels, blue reaction arrows and a red applied F arrow on a pure white background. Arrange the four original drawings in a compact, balanced two-by-two composition with enough spacing to distinguish diagrams, modest margins and large readable symbols. No decorative background, photos, captions or titles.
```

## Linkage force-arrow correction (superseded application point)

```text
Make a targeted engineering correction to Image 1, the cleaned four-panel linkage FBD. Images 2 and 3 are the original pencil FBD and its equilibrium calculations, for reference only. Preserve the existing geometry, slots, pins, four-panel layout, colors, axes and applied F direction. Correct ONLY these force arrows: in the upper-right isolated slotted-link FBD, add the missing blue RC reaction at its upper pin (the pin where F acts), pointing upward-left, with clear RC label. This is the coupling reaction on the slotted member, consistent with the source equilibrium equations Ry - F + RC sin(theta) = 0 and Rx - RC cos(theta) = 0; do not include those equations in the output. In each of the two bottom isolated-member FBDs, change ONLY the upper-left RC arrow so it points DOWNWARD-RIGHT TOWARD the upper-left pin, showing compression. Leave the lower-right RC arrow pointing UPWARD-LEFT toward the lower-right pin. Thus each isolated two-force member has opposite, collinear arrows pointing inward at its two ends. The upper-left whole linkage diagram keeps its ground RC arrow pointing upward-left, exactly as currently drawn. Remove the black dimension arrows and L1, L3 and h2 labels from the upper-left diagram, and L1 from the upper-right diagram; retain axes and force labels. Use the same clear iPad-style digital pen on a pure white background, with no equations, numbers, commentary, or new geometry.
```

## Linkage coupling-joint correction

This pass produced `linkage_fbd_clean_v2.png`, saved from the built-in ImageGen result after comparing the reaction application point with the original drawing. It is retained for provenance and superseded by the enclosed-slot correction below.

```text
Use case: precise-object-edit. Image 1 is the edit target, a clean four-panel linkage free-body diagram. Image 2 is the original source drawing for engineering fidelity. Correct the coupling-force application point without changing the design or force convention. In the UPPER-RIGHT isolated slotted-member diagram, the red downward F acts at the upper tip/end hole, while the blue upward-left RC coupling reaction acts at the UPPER END OF THE SLOT BELOW that tip, exactly as in the original. Move the existing RC arrow and its label from the F end hole down to that slot-end joint; its arrowhead must point upward-left away from this joint, and it must no longer originate where F acts. Preserve a clearly visible short length of slotted member between the applied F and coupling reaction. In the UPPER-LEFT assembled linkage, move the long coupler's existing upper connection from the upper F end hole to the same upper-slot joint below F, matching the original source: the slotted member extends above this connection to receive F. Retain the short crank, its ground joint C, the coupler-to-crank pin, and the ground joint A with Rx right and Ry up. Preserve all four panels, all existing force labels, downward F directions, upward-left ground RC at C, and the two lower members with collinear compressive RC arrows pointing inward at both ends. Do not add loads or extra joints, remove a member, change connectivity anywhere else, add numerical dimensions or equations, or add text beyond the existing labels. Maintain the neat dark digital-pen outlines, blue reactions, red applied loads, pure white background, and compact portrait layout. Original drawing positions take priority over making the geometry appear symmetrical.
```

## Linkage enclosed-slot correction, October 4

The built-in ImageGen tool corrected only the upper-right isolated rocker. The final asset is `public/assets/photos/projects/linkage_fbd_clean_v3.png` (1136 × 1385). The earlier generated intermediate remains outside the project at `/Users/mying/.codex/generated_images/01a0fe00-f3cf-7b42-82f3-d861175b8a92/exec-69923118-d94d-4a88-a379-330481bb8fb5.png`. The final pass was visually checked for a continuous outer member, a fully enclosed internal slot, and unchanged force directions and neighboring diagrams.

Final prompt:

```text
Precise engineering diagram edit. Change ONLY the isolated slotted bar in the UPPER-RIGHT panel. The slot must be a single CLOSED rounded elongated internal hole, completely surrounded by a visibly continuous strip of solid material on BOTH sides and around BOTH ends. The slot must NOT touch or open into the outer edge of the bar. Remove the extra small circular hole/pin/collar currently drawn at the upper end of that slot near the Rc arrow. Remove any contour joining the slot to the outer edge. Draw the bar as ONE continuous member, like the leftmost slotted member in the upper-left assembly. Keep only the existing small round holes at the extreme top tip where red F acts and at the extreme bottom fixed pivot. Between them, put the long rounded slot along the center of the bar below the top round hole, with clearly visible material separating it from the outer perimeter. The blue Rc arrow must still point at the upper end of the internal slot, with NO circular pin or extra member around its tip. Maintain the bar endpoints and orientation and all existing F, Rx, Ry, Rc arrows, their directions and labels. Keep every other panel, force arrow, label, coordinate axis, white background, spacing, and black/red/blue handwritten line style unchanged. Preserve the portrait canvas size and four-panel arrangement.
```

## Tripod development sketch background

`tripod-development-clean.png` was made with the built-in ImageGen tool from the retained original `tripod-development.jpg` (CMU Design I Project 2 report, page 11, embedded image `X112.jpg`). Only the graph-paper background was requested to change. Reviewed the result against the original for the two wings, three-hole horn connections, servo blocks, assembly guides, phone slot, electronics layout, rotating interface, and labels. The website retains all original narrative wording and existing captions.

Exact edit prompt:

```text
Use case: precise-object-edit. Edit target: the attached original engineering development sketch for a mechanical engineering portfolio. Change ONLY the light gray graph-paper grid into a uniform pure white (#ffffff) background. Remove every horizontal and vertical grid line, including those visible through open areas of the drawings. Preserve the original handwritten drawing and every annotation exactly: the two wings, all screw holes, red dashed assembly lines, blue servo blocks, servo horns, base and phone slot, electronics top view with IR / 9V / nano labels, all yellow / gray / cyan highlighting, and the lower rotating interface / magnets / brass insert sketches and notes. Preserve every original word, number, line, stroke shape, color, relative position, scale, and spacing. Do not redesign or clean up the drawing strokes, do not re-typeset the handwriting, do not add or remove annotations, and do not change the engineering geometry. Keep the entire original portrait composition and aspect ratio, with no cropping or rearrangement. This is strictly background grid removal, not a new diagram or a redraw.
```


## Compactor enclosure annotation cleanup

`compactor-enclosure-clean.png` was produced with the built-in ImageGen tool from the bottom-left CAD view in the retained `compactor-poster-source.png`. It removes the small red labels, leaders, and cursor. The cleaned output was compared with the source for the raised lid, enclosure walls, compression plate, scissor links, actuator, moving block, and base. The original poster remains unchanged.

`compactor-enclosure-annotated.svg` embeds that cleaned image and adds vector callouts for the same six components. Black leaders and dots, white leader under-strokes, black Arial text, and elbow paths follow `linkage_annotated.svg`. The labels were checked for component targets, separation, and readability. The subsequent sibling `compactor-enclosure-annotated-trimmed.svg` reduces only the root SVG viewport height from 1375 to 1240 to remove lower whitespace at the user’s request; all image and annotation coordinates are unchanged.

Exact cleanup prompt:

```text
Use case: precise-object-edit.
Asset type: engineering CAD illustration for a mechanical engineering portfolio.
Input image 1 is the edit target: a project poster. Extract ONLY the CAD illustration at the bottom left (the gray open-lid trash compactor), approximately x=42, y=915, width=453, height=545 in the 1920x1536 source. Exclude all poster text, the neighboring wooden prototype photograph, and every other poster region.
Primary request: remove all existing tiny red labels and red leader arrows from this CAD illustration, and remove the mouse cursor at the lower right. Return the same complete CAD view with no text, no arrows, and no labels.
Preserve the CAD geometry and appearance exactly: the hinged raised lid, left and back enclosure walls, right vertical frame, horizontal compression plate, lower scissor links, actuator/motor, sliding block, lower enclosure base and all visible edges, joints and supports. Keep the original isometric perspective, proportions, relative positions, grayscale material colors and shading. Do not redesign, add, remove or simplify any mechanical part. Where a removed red line crosses a face, restore only the original neutral gray face. Place the illustration on clean white with comfortable whitespace, retaining the complete enclosure from lid to base. The output should be the isolated original CAD view in a roughly 453:545 portrait composition, not a redraw or photorealistic rendering. Do not invent engineering details or add any annotations.
```

October 10 typography update: user requested black text and callouts. Linkage Fig. 1 and compactor Fig. 4 now use black Arial text, black leaders and endpoint dots. Text is scaled to 3.6% of the SVG viewport height in each asset so equal-height figure treatments display consistent label sizes.


## Actuator-mount concept

`actuator-mount-concept.png` reuses the user-approved three-view image produced earlier with the built-in ImageGen tool. It is copied without further edits from the mechanical visual audit and added to the trash-compactor page. The source is the actuator-mount concept on page 1 of `Integration Idea.pdf`.

Final source-output path: `/Users/mying/.codex/generated_images/01a125ba-d321-7440-b478-ea773b2ad5d2/exec-ff9aaeab-34d1-45dd-a43a-9a6c6ce35945.png`.

SHA-256: `84030957a51e4af21f855e2999ba54509673e38a4d0883816ecfec198b3d2b51`.

Exact final edit prompt:

```text
Use case: text-localization. Input 1 is the edit target, a cleaned actuator-mount engineering figure with side, top and isometric views in one horizontal row. Change only typography and callout colors. Make ALL text, component callout leaders and endpoint dots pure black #000000. Use regular Arial consistently throughout (weight 400, no bold). All THREE component labels must use the SAME size, approximately 3.6% of canvas height (about 30px on an 848px-high output). All THREE bottom view identifiers must use the SAME slightly larger size, approximately 4.0% of canvas height (about 34px on an 848px-high output). Thus view names are around 12% larger than component labels, with identical font family and weight. Keep all words correctly spelled and fully inside the frame. Preserve existing three-view row layout, every mechanical line, every screw, hole, dashed hidden line, gray/white surface, exact proportions and positions. No new parts or geometric corrections. Texts verbatim: 'Linkage-pin bore', 'Actuator block', 'Mounting clearance holes', 'Side view', 'Top view · screws omitted', 'Isometric view · screws omitted'. Keep each view identifier centered beneath its corresponding drawing. No main title, subtitle, footer or figure number. True transparent background outside actual drawing and text. No shadows, halos or fake checkerboard. No remaining blue anywhere. Preserve the whole isometric and all callouts without clipping. Mechanical geometry is locked.
```


## Concept development: trash-compactor

`compactor-concept-alternatives.png` is an unchanged copy of the previously approved built-in ImageGen output `compactor-concepts-black.png`. No image was regenerated for the Concept Development section.

Original generated output: `/Users/mying/.codex/generated_images/01a125ba-d321-7440-b478-ea773b2ad5d2/exec-0ae8fd99-a9e8-4f86-a3a5-dec8771b90fb.png`.

SHA-256: `a6e162f07aa93020da46d489a218ca07c6f517f2b165f64ba54c8e33d661f291`.

Exact final edit prompt:

```text
Use case: text-localization. Input 1 is the edit target: early compaction concept drawings arranged as lever, hand crank, foot-operated scissor. Change only text and annotation styling. ALL text must be pure black #000000 regular Arial (weight 400), consistent across panels. Panel identifiers 'Manual lever', 'Hand crank', 'Foot-operated scissor' use the same size approximately 4% of canvas height. The explanatory text 'Lever pushes plate down', 'Crank advances plate', 'Foot-pedal input' is slightly smaller, about 3.6% of canvas height. All motion arrows, grouping leaders and endpoint dots must be black. Preserve BOTH lever operating states and BOTH crank states, and the complete foot-operated scissor concept with pedal exactly. Preserve source geometry, housing, linkage count, positions and opaque surfaces. No title or footer. True transparent background outside actual artwork and text, no shadows or halos. Do not redesign mechanics or add performance claims.
```


## Concept development: tripod-attachment

`tripod-spring-wing-concept.png` is an unchanged copy of the previously approved built-in ImageGen output `tripod-wings-black.png`. No image was regenerated for the Concept Development section.

Original generated output: `/Users/mying/.codex/generated_images/01a125ba-d321-7440-b478-ea773b2ad5d2/exec-f31a025d-2de0-4d73-88b0-169a42db3d16.png`.

SHA-256: `da16bf723e05568142e947cb72548fc8afb9c8d8945c2d461e2e7831a4907e03`.

Exact final edit prompt:

```text
Use case: text-localization. Input 1 is the edit target: a cleaned early spring-supported wing concept with two colored diagrams and no title. Change only the typography and annotation styling. All labels use regular Arial weight 400, pure black #000000, one consistent size approximately 3.6% of the total canvas height (about 29px on an 801px-high canvas). All component leaders and endpoint dots must be pure black #000000 too. Preserve exact texts 'Primary wing', 'Secondary contact wing', 'Springs', 'Servo pivot', 'Initial position', and the theta symbol 'θ'. Keep all text readable, outside geometry and fully inside the canvas. Preserve every geometric detail and position of both diagrams: purple primary wings, pink secondary contact wings, three GREEN springs per diagram, blue servo pivot, dashed prior positions and original angle arc. Component color fills must stay original, only callout text/lines/dots become black. Do not change the mechanism, introduce magnets or add parts. Keep theta arc and theta symbol black. No title, heading, subtitle, footer, numbers or new annotations. True transparent alpha outside actual artwork/text, keeping opaque white interiors, no shadows, halos, paper or grid.
```

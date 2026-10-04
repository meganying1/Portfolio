import { ProjectConcepts } from "@/components/project-concepts";
import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";
import { SlideDeck } from "@/components/slide-deck";

export default function BatteryDoorContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I designed a push-button battery door for an Apple mechanical design
        interview challenge. I developed the latch mechanism in Siemens NX and
        used hand calculations, FEA, and tolerance analysis to check force,
        motion, and engagement. The final CAD design combines push-button
        release with automatic re-latching.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/battery_exploded.png"
        alt="Exploded release mechanism and battery door with labeled button, latch, springs, chassis, and hinge components"
        width={1285}
        height={838}
        caption="Exploded view of the battery door and release mechanism"
      />

      <h2>Design</h2>

      <p>
        I designed the top chassis to snap onto the bottom chassis, retaining
        the moving parts without adding fasteners to the release subassembly.
      </p>

      <p>
        The chassis guides the button vertically and the latch horizontally. As
        the button moves down, its pegs press against the angled walls of the
        latch slots. The horizontal component of this contact force pushes the
        latch away from the door until it clears the hook.
      </p>

      <p>
        Return springs reset the button and latch after release. During closing,
        the door hook’s ramp pushes the latch aside until it springs back
        beneath a flat locking surface that resists upward opening force.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 2,
            src: "/assets/photos/projects/battery_latch_closed.png",
            alt: "Cross section with the button depressed and the latch clear of the yellow door hook",
            width: 1480,
            height: 542,
            crop: { x: 130, y: 10, width: 440, height: 510 },
            caption: "Button pressed and latch retracted",
          },
          {
            number: 3,
            src: "/assets/photos/projects/battery_latch_released.png",
            alt: "Cross section with the door closed and the latch engaged beneath the yellow door hook",
            width: 1660,
            height: 626,
            crop: { x: 75, y: 36, width: 540, height: 546 },
            caption: "Door closed and latch engaged",
          },
        ]}
      />

      <h2>Concept development</h2>

      <p>
        I compared four architectures against button force and travel,
        door-closing force, package size, and repeated use. I evaluated each
        through release and reset, checking for jamming, accidental actuation,
        and tolerance-sensitive interfaces.
      </p>

      <ProjectConcepts
        number={4}
        caption="Four concepts compared for release, reset, and packaging"
        concepts={[
          {
            name: "Moving snap fit",
            src: "/assets/photos/projects/battery_idea_snapfit.png",
            width: 924,
            height: 568,
            alt: "Angled-slot snap-fit concept with a spring-return button",
          },
          {
            name: "Push release",
            src: "/assets/photos/projects/battery_idea_pushrelease.png",
            width: 503,
            height: 588,
            alt: "Pivoting triangular release concept actuated through the door",
          },
          {
            name: "Rotating body",
            src: "/assets/photos/projects/battery_idea_rotatingbody.png",
            width: 433,
            height: 638,
            alt: "Spring-return rotating-body concept with a door-hook interface",
          },
          {
            name: "Sliding latch",
            src: "/assets/photos/projects/battery_idea_slidinglatch.png",
            width: 610,
            height: 466,
            alt: "Opposed sliding-latch concept with a central button and return springs",
          },
        ]}
      />

      <p>
        I selected the moving snap fit for its simple components and lower
        tolerance sensitivity compared with the groove-based release concepts. I
        developed sliding and rotating versions. Angled slots drive the sliding
        latch horizontally, while the rotating version pivots the latch clear of
        the door.
      </p>

      <div className="table-scroll case-table">
        <table className="data-table">
          <caption>
            <span className="fig__num">Table 1</span> Weighted decision matrix
            compares the sliding and rotating latch concepts
          </caption>
          <thead>
            <tr>
              <th scope="col">Criterion</th>
              <th scope="col">Weight</th>
              <th scope="col">Sliding score</th>
              <th scope="col">Rotating score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Effectiveness</th>
              <td className="num">5</td>

              <td className="num">20</td>

              <td className="num">15</td>
            </tr>
            <tr>
              <th scope="row">User experience</th>
              <td className="num">4</td>

              <td className="num">16</td>

              <td className="num">12</td>
            </tr>
            <tr>
              <th scope="row">Manufacturability</th>
              <td className="num">4</td>

              <td className="num">12</td>

              <td className="num">12</td>
            </tr>
            <tr>
              <th scope="row">Ease of assembly</th>
              <td className="num">4</td>

              <td className="num">12</td>

              <td className="num">12</td>
            </tr>
            <tr>
              <th scope="row">Compactness</th>
              <td className="num">4</td>

              <td className="num">12</td>

              <td className="num">16</td>
            </tr>
            <tr>
              <th scope="row">Cost</th>
              <td className="num">3</td>

              <td className="num">9</td>

              <td className="num">12</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td></td>
              <td className="num is-chosen">81</td>
              <td className="num">79</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p>
        The sliding version scored 81 versus 79 in the weighted comparison. I
        selected it because effectiveness and ease of use carried more weight
        than the rotating version’s smaller package and lower estimated cost.
      </p>

      <h2>Analysis &amp; validation</h2>

      <p>
        I worked backward from the latch clearance needed to release the door to
        size the slots, button stroke, and return springs. The calculated stroke
        was 1.39 mm, within the 1–3 mm target.
      </p>

      <ProjectFigure
        number={5}
        src="/assets/photos/projects/battery_button_fbd.jpg"
        width={1904}
        height={2500}
        crop={{ x: 60, y: 1125, width: 1065, height: 540 }}
        alt="Button free-body diagrams with press force, slot reactions, weight, and spring forces"
        caption="Button loads used to size the stroke and return springs"
      />

      <p>
        I checked peg bending and door-hook stress, strain, and deflection
        against ABS material limits for an assumed service life below 1,000
        cycles. The calculated hook strain was below the 7% allowable strain,
        and stress was below the 35 MPa fatigue limit used in the analysis. The
        predicted closing force was 6.1 N, below the 8 N target.
      </p>

      <p>
        I traced the dimensional chain between the latch and door hook. The
        root-sum-square (RSS) stack-up gave 0.79 mm nominal overlap and a
        0.51–1.09 mm range. According to the RSS analysis, the latch always
        maintains positive overlap with the door hook within this range.
      </p>

      <ProjectFigure
        number={6}
        src="/assets/photos/projects/battery_tolerance.png"
        alt="Two cross sections tracing the dimensional chain between the latch tip and door hook"
        width={1080}
        height={830}
        crop={{ x: 60, y: 55, width: 960, height: 445 }}
        caption="Dimensional chain used to calculate latch-to-hook overlap"
      />

      <p>
        I used FEA of the button pegs driving the latch to determine the force
        needed to press the button, with a target of 2–5 N. A separate FEA model
        evaluated door-hook stress and deformation during latching. The models
        showed that button press force and door-hook stress and deformation were
        within the design targets.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 7,
            src: "/assets/photos/projects/battery_fea_latch.gif",
            width: 854,
            height: 854,
            alt: "Animated FEA showing latch movement as the button pegs move downward",
            caption: "FEA of latch movement as button pegs move downward",
          },
          {
            number: 8,
            src: "/assets/photos/projects/battery_fea_door_stress.gif",
            width: 386,
            height: 386,
            alt: "Animated door-hook stress distribution during latch engagement",
            caption: "FEA of door-hook stress as the door latches closed",
          },
        ]}
      />

      <h2>Manufacturing &amp; cost</h2>

      <p>
        For a proposed volume above 100,000 units per year, I specified
        injection-molded ABS for the chassis, latch, and structural door. ABS
        supports molded guides and the snap-fit deflection needed for assembly
        and re-latching. I chose aluminum for the exposed button and door cover
        for rigid, durable surfaces and a clean metallic appearance.
      </p>

      <p>
        I used purchased springs, screws, and spring-loaded hinges and defined
        an assembly sequence around the snap-fit chassis. The preliminary BOM
        estimate was $3.30 per assembly. Tooling and assembly costs were not
        validated.
      </p>

      <h2>Results</h2>

      <p>
        I completed the Siemens NX assembly, assembly sequence, and
        manufacturing proposal for a battery door with push-button release and
        automatic re-latching. The snap-fit chassis retains the moving parts
        without additional fasteners in the release mechanism.
      </p>

      <p>
        Hand calculations predicted a 1.39 mm button stroke within the 1–3 mm
        target and a 6.1 N closing force below the 8 N limit. The RSS stack-up
        gave 0.79 mm nominal latch overlap and a positive 0.51–1.09 mm range.
        FEA confirmed button force within the 2–5 N target and door-hook stress
        and deformation within the design limits.
      </p>

      <div className="deck">
        <h3 className="label">Presentation</h3>
        <SlideDeck />
      </div>
    </>
  );
}

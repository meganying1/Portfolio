import { ProjectConcepts } from "@/components/project-concepts";
import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";
import { SlideDeck } from "@/components/slide-deck";

export default function BatteryDoorContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I designed a push-button battery door for an Apple mechanical design
        interview challenge, owning the CAD assembly, mechanism selection,
        analysis, and manufacturing proposal. I used hand calculations,
        tolerance analysis, and FEA to evaluate travel, force, engagement, and
        component loading. The sliding-latch concept predicted button travel and
        closing force within the selected targets, but remains an analytical
        design without physical validation.
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
        The mechanism combines a vertically guided button, a horizontal latch,
        return springs, and two chassis parts that locate and retain the moving
        components. Button pegs engage angled slots in the latch. Pressing the
        button retracts the latch until it clears the door hook, allowing
        spring-loaded hinges to lift the door.
      </p>

      <p>
        When the button is released, the springs return the button and latch.
        During closing, a ramp on the door hook pushes the latch aside, and the
        latch then springs back into engagement. A flat locking surface resists
        release from an upward pull on the door.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 2,
            src: "/assets/photos/projects/battery_latch_released.png",
            alt: "Closed-door cross section with the latch engaged beneath the yellow door hook",
            width: 1660,
            height: 626,
            crop: { x: 75, y: 36, width: 540, height: 546 },
            caption: "Door closed and latch engaged",
          },
          {
            number: 3,
            src: "/assets/photos/projects/battery_latch_closed.png",
            alt: "Pressed-button cross section with the latch retracting from the yellow door hook",
            width: 1480,
            height: 542,
            crop: { x: 130, y: 10, width: 440, height: 510 },
            caption: "Button pressed and latch retracted",
          },
        ]}
      />

      <h2>Concept development</h2>

      <p>
        I explored four release architectures against targets of 2–5 N button
        force, 1–3 mm travel, and closing force below 8 N. The tradeoffs
        included tolerance sensitivity, jamming, accidental actuation, component
        complexity, and button placement.
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
        After evaluating these tradeoffs, I selected the moving snap fit for its
        simple components and lower tolerance sensitivity. I developed sliding
        and rotating implementations as the two finalists. The weighted matrix
        favored the sliding version’s effectiveness and user experience over the
        rotating version’s compactness and estimated cost, with totals of 81 and
        79.
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
              <th scope="col">Sliding weighted score</th>
              <th scope="col">Rotating weighted score</th>
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

      <h2>Analysis &amp; validation</h2>

      <p>
        I worked backward from the latch travel needed to clear the door hook to
        size the angled slots, button stroke, and return springs. The geometry
        predicted 1.39 mm of button travel, within the 1–3 mm target. Button
        free-body diagrams sized return springs at 0.01–0.875 N/mm under the
        initial loading and friction assumptions.
      </p>

      <p>
        I modeled each button peg as a cantilever and calculated its bending
        moment, circular-section moment of inertia, and maximum bending stress
        from the latch reaction force. The calculated maximum bending stress was
        0.0173 MPa.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 5,
            src: "/assets/photos/projects/battery_button_fbd.jpg",
            width: 1904,
            height: 2500,
            crop: { x: 60, y: 1125, width: 1065, height: 540 },
            alt: "Hand-drawn button free-body diagrams showing press force, slot reactions, button weight, and return-spring forces",
            caption:
              "Calculations for determining button travel and required spring constant",
          },
          {
            number: 6,
            src: "/assets/photos/projects/battery_calc_door.jpg",
            width: 1904,
            height: 1120,
            crop: { x: 275, y: 75, width: 860, height: 300 },
            alt: "Hand-drawn door-hook profile and rectangular cross section with length, thickness, width, and ramp-angle dimensions",
            caption:
              "Calculations for assessing door-hook strain, durability, and closing force",
          },
        ]}
      />

      <p>
        I also calculated door-hook deflection, strain, and stress. The hook
        calculation predicted 1.2% strain and 24 MPa stress, below the assumed
        ABS limits of 7% and 35 MPa for 1,000 cycles, and a 6.1 N closing force
        against the 8 N limit.
      </p>

      <p>
        I traced the dimensional chain from the latch tip to the door hook and
        calculated an RSS tolerance stack-up. The predicted overlap was 0.79 mm
        nominal, with an RSS range of 0.51–1.09 mm. The RSS tolerance analysis
        showed that engagement would always occur across this range.
      </p>

      <ProjectFigure
        number={7}
        src="/assets/photos/projects/battery_tolerance.png"
        alt="Two cross sections tracing the dimensional chain between the latch tip and door hook"
        width={1080}
        height={830}
        crop={{ x: 60, y: 55, width: 960, height: 445 }}
        caption="Dimensional chain used to calculate latch-to-hook overlap"
      />

      <p>
        I used latch/contact FEA to estimate the force from friction during
        latch release, which was 0.0033 N. I then calculated the full button
        press force by hand, accounting for slot reactions, button weight, and
        return springs, and confirmed it was within the 2–5 N requirement.
        Door-hook FEA examined stress and deformation during closing for
        comparison with the hand analysis.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 8,
            src: "/assets/photos/projects/battery_fea_latch.gif",
            width: 854,
            height: 854,
            alt: "Animated finite element contact simulation of the button peg moving the latch",
            caption: "FEA of latch movement as button pegs move downward",
          },
          {
            number: 9,
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
        For a proposed volume above 100,000 units per year, I selected
        injection-molded ABS for the chassis, latch, and structural door for its
        snap-fit compliance and suitability for high-volume production. I chose
        aluminum for the button and stamped door cover to provide lightweight,
        durable user-contact surfaces. Springs, screws, and spring-loaded hinges
        are purchased hardware. The estimated BOM cost was $3.30 per assembly.
      </p>

      <h2>Results</h2>

      <p>
        I completed the CAD assembly, release sequence, analysis, and
        manufacturing proposal. Modeled travel of 1.39 mm and closing force of
        6.1 N met the selected targets, with positive latch overlap throughout
        the RSS estimate.
      </p>

      <div className="deck">
        <h3 className="label">Presentation</h3>
        <SlideDeck />
      </div>
    </>
  );
}

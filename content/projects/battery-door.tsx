import { ProjectConcepts } from "@/components/project-concepts";
import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

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
        caption="Two chassis parts locate the button, sliding latch, and return springs"
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
            caption:
              "Closed latch engages the door hook’s flat locking surface",
          },
          {
            number: 3,
            src: "/assets/photos/projects/battery_latch_closed.png",
            alt: "Pressed-button cross section with the latch retracting from the yellow door hook",
            width: 1480,
            height: 542,
            crop: { x: 130, y: 10, width: 440, height: 510 },
            caption:
              "Pressed button drives the angled slot to retract the latch from the hook",
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
        caption="Four release concepts compare snap-fit, push-release, cam, and sliding-latch architectures"
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
        I developed two finalists: sliding and rotating implementations of the
        moving snap fit. The weighted matrix favored the sliding version’s
        effectiveness and user experience over the rotating version’s
        compactness and estimated cost, with totals of 81 and 79.
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
        I calculated peg bending and door-hook deflection, strain, and stress.
        The hook calculation predicted 1.2% strain and 24 MPa stress, below the
        assumed ABS limits of 7% and 35 MPa for 1,000 cycles, and a 6.1 N
        closing force against the 8 N limit. The initial peg fatigue check used
        a SUS316 reference, so it does not validate the proposed aluminum
        button.
      </p>

      <p>
        I traced the dimensional chain from the latch tip to the door hook and
        calculated an RSS tolerance stack-up. The predicted overlap was 0.79 mm
        nominal, with an RSS range of 0.51–1.09 mm. The estimated range
        maintains engagement under the modeled variation, but is not a
        worst-case bound.
      </p>

      <ProjectFigure
        number={5}
        src="/assets/photos/projects/battery_tolerance.png"
        alt="Two cross sections tracing the dimensional chain between the latch tip and door hook"
        width={1080}
        height={830}
        crop={{ x: 60, y: 55, width: 960, height: 445 }}
        caption="Latch-to-hook stack-up traces the dimensions that determine engagement"
      />

      <p>
        Latch/contact FEA estimated 0.0033 N to slide the latch in the initial
        model. This component-level result informed the button calculations, but
        does not establish the full button press force with return springs.
      </p>

      <ProjectFigure
        number={6}
        src="/assets/photos/projects/battery_fea_latch.gif"
        width={854}
        height={854}
        alt="Animated finite element contact simulation of the button peg moving the latch"
        caption="Contact simulation examines how the button peg drives latch release"
      />

      <p>
        Door-hook FEA examined stress and deformation during closing for
        comparison with the hand analysis. These simulations screen the concept
        under modeled conditions rather than demonstrate durability in use.
      </p>

      <ProjectFigure
        number={7}
        src="/assets/photos/projects/battery_fea_door_stress.gif"
        width={386}
        height={386}
        alt="Animated door-hook stress distribution during latch engagement"
        caption="Door-hook FEA shows stress as the hook deflects during closing"
      />

      <h2>Manufacturing &amp; cost</h2>

      <p>
        For a proposed volume above 100,000 units per year, I selected
        injection-molded ABS for the chassis, latch, and structural door, with
        an aluminum button and stamped aluminum door cover. Springs, screws, and
        spring-loaded hinges are purchased hardware. The top chassis snaps onto
        the bottom chassis to capture and guide the release mechanism.
      </p>

      <p>
        The estimated BOM cost was $3.30 per assembly. This is a preliminary
        component-cost estimate rather than a validated manufacturing quotation
        or complete production cost.
      </p>

      <h2>Results</h2>

      <p>
        I completed the CAD assembly, release sequence, analysis, and
        manufacturing proposal. Modeled travel of 1.39 mm and closing force of
        6.1 N met the selected targets, with positive latch overlap throughout
        the RSS estimate. Button-force performance, final-material fatigue,
        drops, and temperature performance remain unvalidated.
      </p>
    </>
  );
}

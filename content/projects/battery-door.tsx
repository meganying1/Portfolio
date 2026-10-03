import { ProjectConcepts } from "@/components/project-concepts";
import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";
import { SlideDeck } from "@/components/slide-deck";

export default function BatteryDoorContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I designed a push-button battery door for an Apple mechanical design
        interview challenge. A spring-loaded sliding latch converts a downward
        button press into horizontal release motion, allowing the door to open
        and automatically re-latch when closed.
      </p>

      <p>
        I developed the assembly in Siemens NX and used hand calculations,
        tolerance analysis, and FEA to evaluate button travel, closing force,
        latch engagement, and component loading. I also planned the assembly
        sequence and selected materials and processes for a proposed production
        volume above 100,000 units per year.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/battery_exploded.png"
        alt="Exploded release mechanism and battery door with labeled button, latch, springs, chassis, and hinge components"
        width={1285}
        height={838}
        caption="Exploded Siemens NX view communicates the battery-door assembly layout"
      />

      <h2>Design</h2>

      <p>
        The mechanism combines a vertically guided button, a horizontal latch,
        return springs, and two chassis parts that locate and retain the moving
        components.
      </p>

      <p>
        Button pegs engage angled slots in the latch. Pressing the button
        retracts the latch until it clears the door hook, allowing spring-loaded
        hinges to lift the door.
      </p>

      <p>
        When the button is released, the springs return the button and latch.
        During closing, a ramp on the door hook pushes the latch aside, and the
        latch then springs back into engagement. A flat locking surface resists
        release from an upward pull on the door.
      </p>

      <p>
        I designed the top chassis to snap onto the bottom chassis, capturing
        the internal parts while guiding button and latch motion.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 2,
            src: "/assets/photos/projects/battery_latch_closed.png",
            alt: "Closed-door cross section with the latch engaged beneath the yellow door hook",
            width: 1480,
            height: 542,
            crop: { x: 130, y: 10, width: 440, height: 510 },
            caption:
              "Closed latch engages the door hook’s flat locking surface",
          },
          {
            number: 3,
            src: "/assets/photos/projects/battery_latch_released.png",
            alt: "Pressed-button cross section with the latch retracted and the yellow door lifted",
            width: 1660,
            height: 626,
            crop: { x: 75, y: 36, width: 540, height: 546 },
            caption:
              "Angled slots convert downward button travel into horizontal latch release",
          },
        ]}
      />

      <h2>Concept development</h2>

      <p>
        I defined requirements for button force and travel, closing force,
        package size, and repeated use. The key interaction targets were a 2–5 N
        button force, 1–3 mm travel, and a closing force below 8 N.
      </p>

      <p>
        I explored four release architectures and compared their complete
        release and reset sequences. The tradeoffs included tolerance
        sensitivity, jamming, accidental actuation, component complexity, and
        whether the button could remain within the door perimeter.
      </p>

      <ProjectConcepts
        number={4}
        caption="Concept sketches explore alternative release mechanisms for concept selection"
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
        I developed sliding and rotating implementations of a moving snap fit.
        The sliding version uses angled slots to convert button travel into
        latch translation. The rotating version pivots the latch out of
        engagement.
      </p>

      <p>
        I selected the sliding version using a weighted decision matrix. It
        scored higher for effectiveness and user experience, which carried more
        weight than the rotating version’s advantages in compactness and
        estimated cost.
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

      <h2>Analysis &amp; validation</h2>

      <p>
        I worked backward from the latch travel needed to clear the door hook to
        size the angled slots, button stroke, and return springs. The
        calculations predicted 1.39 mm of button travel, within the 1–3 mm
        target.
      </p>

      <ProjectFigure
        number={5}
        src="/assets/photos/projects/battery_button_fbd.jpg"
        width={1904}
        height={2500}
        crop={{ x: 60, y: 1125, width: 1065, height: 540 }}
        alt="Button free-body diagrams with press force, slot reactions, weight, and spring forces"
        caption="Button free-body diagrams relate press force, slot reactions, and return-spring loading"
      />

      <p>
        I evaluated peg bending and snap-fit stress, strain, and deflection
        under the modeled loads. The door calculation predicted a 6.1 N closing
        force, below the 8 N target. These calculations screened the geometry
        for the assumed service life.
      </p>

      <p>
        I traced the dimensional chain from the latch tip to the door hook and
        calculated an RSS tolerance stack-up. The predicted overlap was 0.79 mm
        nominal, with an RSS range of 0.51–1.09 mm. This estimate supports
        engagement under the modeled variation, but does not establish a
        worst-case tolerance bound.
      </p>

      <ProjectFigure
        number={6}
        src="/assets/photos/projects/battery_tolerance.png"
        alt="Two cross sections tracing the dimensional chain between the latch tip and door hook"
        width={1080}
        height={830}
        crop={{ x: 60, y: 55, width: 960, height: 445 }}
        caption="Cross sections trace the latch-to-hook dimensional chain for tolerance analysis"
      />

      <p>
        I used FEA to examine peg-to-latch contact during release and door-hook
        deflection during closing. The simulations provided stress and
        deformation estimates for comparison with the hand calculations.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 7,
            src: "/assets/photos/projects/battery_fea_latch.gif",
            width: 854,
            height: 854,
            alt: "Animated finite element contact simulation of the button peg moving the latch",
            caption:
              "Contact FEA animation shows peg-to-latch motion during release",
          },
          {
            number: 8,
            src: "/assets/photos/projects/battery_fea_door_stress.gif",
            width: 386,
            height: 386,
            alt: "Animated door-hook stress distribution during latch engagement",
            caption:
              "Door-hook FEA animation shows the stress distribution during closing",
          },
        ]}
      />

      <h2>Manufacturing &amp; cost</h2>

      <p>
        I selected proposed materials and processes based on component geometry,
        compliance, production volume, and user-contact surfaces.
      </p>

      <p>
        The chassis, latch, and structural door use injection-molded ABS. The
        button and door cover use aluminum. Springs, screws, and spring-loaded
        hinges are purchased hardware. The assembly sequence uses chassis snap
        fits to retain the release mechanism.
      </p>

      <p>
        The estimated BOM cost was $3.30 per assembly. This is a preliminary
        component-cost estimate rather than a validated manufacturing quotation
        or complete production cost.
      </p>

      <h2>Results</h2>

      <p>
        I completed the CAD assembly, release sequence, analysis, and
        manufacturing proposal for the sliding-latch design. Calculations
        predicted button travel and door-closing force within the selected
        targets, while the RSS stack-up predicted positive latch overlap. The
        design remains an analytical concept.
      </p>

      <div className="deck">
        <h3 className="label">Presentation</h3>
        <SlideDeck />
      </div>
    </>
  );
}

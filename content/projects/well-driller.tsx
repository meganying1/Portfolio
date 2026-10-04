import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function WellDrillerContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        Our team developed a pedal-powered concept for the{" "}
        <a href="https://villagedrill.com" target="_blank" rel="noreferrer">
          Village Drill
        </a>{" "}
        for Baalbek-Hermel, Lebanon. I brainstormed gear concepts, sketched
        their integration with the existing frame, and analyzed mechanical
        loads. The final concept uses a geared cable lift to raise and release
        the drill for repeated impacts in rocky ground.
      </p>

      <h2>Design</h2>

      <p>
        I brainstormed gear concepts and drew layouts showing how the pedal
        input, gears, and drill mechanism could integrate with the existing
        frame.
      </p>

      <p>
        We compared worm-gear, bevel-gear, and pile-driver concepts while
        retaining the existing frame and as many original components as possible
        to limit cost and assembly changes. We selected the lift-and-release
        concept because the rocky, calcareous ground in Baalbek-Hermel favored
        an impact-based approach over the rotational concepts.
      </p>

      <p>
        Pedal rotation passes through a chain and gear system to a cable pulley.
        A toothless gear section disengages the drive to release the drill. The
        gears then re-engage to start the next lift.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 1,
            src: "/assets/photos/projects/driller_frame.png",
            width: 910,
            height: 918,
            alt: "CAD frame concept showing the pedal location, supports, and mast",
            caption: "Frame concept",
            crop: { x: 150, y: 50, width: 560, height: 830 },
          },
          {
            number: 2,
            src: "/assets/photos/projects/driller_mechanism.png",
            width: 760,
            height: 453,
            alt: "Pedal chain drive, partial gear, cable pulley, and hanging drill weight",
            caption: "Pedal-driven cable lift and gear-release concept",
          },
        ]}
      />

      <h2>Analysis &amp; validation</h2>

      <p>
        I calculated cable tension from the modeled drill load, then used the
        pulley and gear relationships to estimate the force required at the
        pedals. I also calculated frame reactions and connection loads to
        determine minimum pin sizes, checking both the drill-support connection
        and the pedal connection.
      </p>

      <ProjectFigure
        number={3}
        src="/assets/photos/projects/driller_frame_fbd.jpg"
        width={1566}
        height={2048}
        crop={{ x: 125, y: 550, width: 1270, height: 1200 }}
        alt="Frame free-body diagram with cable tension, support reactions, weight, and lever arms"
        caption="Cable load and support reactions used for connection sizing"
      />

      <p>
        I applied a factor of safety of 4 to the primary structural connection,
        where failure could destabilize the frame, and 2 to the lower-risk pedal
        connection. This gave the frame connection a larger safety margin while
        allowing the two interfaces to be sized for their different loads and
        consequences of failure.
      </p>

      <p>
        I calculated how pedal speed and gearing affected cable lift speed and
        power requirements. The team used FEA to estimate pedal stress and
        deformation under the calculated static load.
      </p>

      <ProjectFigure
        number={4}
        src="/assets/photos/projects/driller_pedal_stress.png"
        width={1456}
        height={916}
        alt="Pedal stress analysis with downward loading, a fixed crank end, and the stress legend"
        caption="Pedal stress under static loading with the crank end fixed"
        wide
      />

      <h2>Results</h2>

      <p>
        We completed a pedal-powered lift-and-release concept with a CAD frame
        layout, a chain-and-gear mechanism, and a cable pulley that raises and
        releases the drill. The design retained the existing frame while
        adapting the power input for repeated impacts in rocky ground.
      </p>

      <p>
        My calculations established cable tension, pedal force, frame reactions,
        minimum connection sizes, and power requirements. The team’s pedal FEA
        complemented those calculations, giving the concept an initial set of
        component sizes and load estimates for further design development.
      </p>
    </>
  );
}

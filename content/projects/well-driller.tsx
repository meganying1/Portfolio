import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function WellDrillerContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of three, we developed a pedal-powered redesign of the{" "}
        <a href="https://villagedrill.com" target="_blank" rel="noreferrer">
          Village Drill
        </a>{" "}
        for Baalbek-Hermel, Lebanon. The concept uses a geared cable drive to
        lift the drill, then releases it to deliver an impact under its own
        weight. I researched gear mechanisms that could integrate with the
        existing drill and performed hand calculations for cable tension, pedal
        force, frame reactions, pin sizing, and power requirements. The project
        produced a CAD concept and analytical evaluation rather than a physical
        drilling prototype.
      </p>

      <h2>Design</h2>

      <p>
        We prioritized retaining the existing frame while addressing drilling
        performance, transport, assembly, safety, and power input. I evaluated
        worm-gear, bevel-gear, and pile-driver concepts. We selected the
        lift-and-release architecture for the rocky conditions identified in the
        regional research.
      </p>

      <p>
        Pedal rotation passes through a chain and gear system to a cable pulley
        that lifts the drill. A toothless section of one gear disengages the
        drive so the drill can fall. Re-engagement begins the next lift.
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
        An idealized steel-cylinder drill model and frictionless pulley gave a
        calculated cable tension of approximately 543 N. I used the drivetrain
        geometry to estimate pedal force, then calculated frame reactions and
        connection loads using an assumed 50 kg operator and the CAD-derived
        frame weight.
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
        I used a factor of safety of 4 for the primary structural connection and
        2 for the lower-risk pedal connection to calculate minimum pin sizes.
        Speed and power were estimated from pedal angular velocity and gearing.
      </p>

      <p>
        The team used a reported 3Al–2.5V titanium-alloy pedal model for FEA of
        stress and deformation. The shown static case predicted a peak stress of
        approximately 107 MPa against the model’s 1,034 MPa yield reference.
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
        We selected a pedal-powered lift-and-release concept by comparing
        mechanisms against the project requirements. Hand calculations for the
        drivetrain, frame reactions, and connection sizing, together with pedal
        FEA, validated the concept under the modeled loading conditions.
      </p>
    </>
  );
}

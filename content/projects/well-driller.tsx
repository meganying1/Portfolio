import { ProjectFigure } from "@/components/project-figure";

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

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/driller_frame.png"
        width={910}
        height={918}
        alt="CAD frame concept showing the pedal location, supports, and mast"
        caption="Frame CAD packages the pedal drive around the retained drill structure"
        crop={{ x: 150, y: 50, width: 560, height: 830 }}
      />

      <h2>Concept development</h2>

      <p>
        We prioritized retaining the existing frame while addressing drilling
        performance, transport, assembly, safety, and power input. I evaluated
        worm-gear, bevel-gear, and pile-driver concepts. We selected the
        lift-and-release architecture for the rocky conditions identified in the
        regional research.
      </p>

      <h2>Design</h2>

      <p>
        Pedal rotation passes through a chain and gear system to a cable pulley
        that lifts the drill. A toothless section of one gear disengages the
        drive so the drill can fall. Re-engagement begins the next lift.
      </p>

      <p>
        We packaged the pedal drive, gearbox, and cable mechanism around the
        retained frame. Controlled release and gear re-engagement are key
        interfaces that remain unvalidated.
      </p>

      <ProjectFigure
        number={2}
        src="/assets/photos/projects/driller_mechanism.png"
        width={760}
        height={453}
        alt="Pedal chain drive, partial gear, cable pulley, and hanging drill weight"
        caption="Partial gear disengagement releases the drill after the cable lift"
        wide
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
        caption="Frame free-body diagram identifies cable loading and support reactions for connection sizing"
      />

      <p>
        I used a factor of safety of 4 for the primary structural connection and
        2 for the lower-risk pedal connection to calculate minimum pin sizes.
        These analytical minima would need to be translated into practical
        hardware sizes with allowances for bearing, wear, and repeated loading.
      </p>

      <p>
        Speed and power were estimated from pedal angular velocity and gearing.
        Inconsistent drum dimensions and gear-ratio calculations make the
        reported pedal-force, speed, and power values provisional and require
        recalculation before hardware sizing.
      </p>

      <p>
        The team used a reported 3Al–2.5V titanium-alloy pedal model for FEA of
        stress and deformation. The shown static case predicted a peak stress of
        approximately 107 MPa against the model’s 1,034 MPa yield reference, but
        did not evaluate repeated impact or gear engagement.
      </p>

      <ProjectFigure
        number={4}
        src="/assets/photos/projects/driller_pedal_stress.png"
        width={1456}
        height={916}
        alt="Pedal stress analysis with downward loading, a fixed crank end, and the stress legend"
        caption="Pedal FEA shows the applied load, fixed crank end, and resulting stress distribution"
        wide
      />

      <h2>Results</h2>

      <p>
        We completed a pedal-powered lift-and-release concept with CAD,
        drivetrain and power calculations, connection sizing, and pedal FEA. The
        static evaluation remains preliminary because drivetrain inputs need
        reconciliation. Drilling performance, repeated impact, and
        release/re-engagement remain physically unvalidated.
      </p>
    </>
  );
}

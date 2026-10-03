import Image from "next/image";

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
        weight.
      </p>

      <p>
        I researched gear mechanisms that could integrate with the existing
        drill and performed hand calculations for cable tension, pedal force,
        frame reactions, pin sizing, and power requirements. The project
        produced a CAD concept and analytical evaluation rather than a physical
        drilling prototype.
      </p>

      <h2>Design</h2>

      <p>
        We prioritized retaining the existing frame while addressing drilling
        performance, transport, assembly, safety, and power input.
      </p>

      <p>
        I evaluated ways to convert pedal rotation into drill motion. We
        compared worm-gear, bevel-gear, and pile-driver concepts and selected
        the lift-and-release architecture for the rocky conditions identified in
        the regional research.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/driller_mechanism.png"
          alt="Sketch of the pile driver mechanism lifting and dropping the driller"
          width={760}
          height={453}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 1</span>Sketch of pile driver
          mechanism
        </figcaption>
      </figure>

      <p>
        Pedal rotation passes through a chain and gear system to a cable pulley
        that lifts the drill. A toothless section of one gear disengages the
        drive so the drill can fall; re-engagement begins the next lift.
      </p>

      <p>
        We packaged the pedal drive, gearbox, and cable mechanism around the
        retained frame. Controlled release and gear re-engagement are key
        interfaces to evaluate in a prototype.
      </p>

      <h2>Analysis &amp; validation</h2>

      <p>
        I worked backward from the modeled drill load and drivetrain geometry to
        estimate cable tension and pedal force, then calculated frame reactions
        and connection loads.
      </p>

      <p>
        I used a factor of safety of 4 for the primary structural connection and
        2 for the lower-risk pedal connection to calculate minimum pin sizes.
        These analytical minima would need to be translated into practical
        hardware sizes with allowances for bearing, wear, and repeated loading.
      </p>

      <p>
        I also calculated the relationship between pedal speed, gearing, and
        drill motion to evaluate the assumed operating point. These estimates
        depend on the selected drill load, geometry, and operating assumptions.
      </p>

      <p>
        The team used FEA to estimate pedal stress and deformation under the
        calculated load. This static loading assessment did not address the
        mechanism’s repeated impact or engagement behavior.
      </p>

      <div className="fig-pair">
        <figure className="fig">
          <Image
            src="/assets/photos/projects/driller_cad.png"
            alt="CAD model of the pedal-powered well driller system"
            width={252}
            height={388}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 2</span>CAD model of system
          </figcaption>
        </figure>

        <figure className="fig">
          <Image
            src="/assets/photos/projects/driller_fea.png"
            alt="Finite element analysis results on the pedal"
            width={214}
            height={388}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 3</span>FEA of pedal
          </figcaption>
        </figure>
      </div>
      <figure className="fig">
        <Image
          src="/assets/photos/projects/driller_calc.jpg"
          alt="Hand calculations for reaction forces in the driller structure"
          width={656}
          height={620}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 4</span>Calculating reaction forces
        </figcaption>
      </figure>

      <h2>Results</h2>

      <p>
        We completed a pedal-powered lift-and-release concept with CAD,
        drivetrain calculations, connection sizing, and pedal FEA. The analysis
        supported further development under the modeled conditions.
      </p>

      <p>
        A physical prototype would be needed to evaluate drivetrain losses,
        release and re-engagement, impact durability, and drilling performance
        before establishing practical feasibility.
      </p>
    </>
  );
}

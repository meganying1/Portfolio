import Image from "next/image";

export default function TrussStructureContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of three, we designed and laser-cut an acrylic truss targeting
        failure near a 40-pound center load. I developed candidate geometries
        and calculated member forces and predicted strength-to-weight
        performance for my concepts.
      </p>

      <p>
        We used destructive testing to adjust member thickness. The final truss
        failed at the predicted member location but below the target load,
        exposing a gap between the analytical model and fabricated structure.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/truss_structure.jpg"
          alt="Assembled truss structure viewed from the front on the testing rig"
          width={531}
          height={299}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 1</span>Laser-cut acrylic truss
          assembled on the load fixture
        </figcaption>
      </figure>

      <h2>Design</h2>

      <p>
        Each team member developed three concepts. We compared the strongest
        candidates using predicted strength-to-weight performance and selected a
        geometry for fabrication.
      </p>

      <p>
        We modeled the assembly in SolidWorks and used the member-force
        calculations to select dimensions and estimate weight.
      </p>

      <h2>Analysis &amp; validation</h2>

      <p>
        We used static equilibrium to calculate member forces under the 40-pound
        center load. The outer diagonal members carried approximately 28.3 lb in
        compression. We compared these loads with the assumed acrylic properties
        to size the members and predict the failure location.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/truss_cad.png"
          alt="CAD model of the truss structure mounted on the testing rig"
          width={460}
          height={298}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 2</span>CAD model of truss structure
          on testing rig
        </figcaption>
      </figure>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/truss_calc.jpg"
          alt="Hand calculations for the force in each truss member"
          width={740}
          height={242}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 3</span>Calculating forces in each
          member
        </figcaption>
      </figure>

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We generated DXF files from CAD, prepared them in CorelDRAW, laser-cut
        the acrylic members, and assembled them with screws and bolts.
      </p>

      <p>
        The 1/16-inch prototype failed near 20 lb. Increasing thickness to 5/32
        inch supported more than 50 lb without failure; reducing it to 3/32 inch
        produced a prototype failure near 42 lb. The final test specimen used
        3/32-inch members but failed at 32 lb.
      </p>

      <h2>Results</h2>

      <p>
        The final truss failed at the predicted member location at 32 lb, below
        the 40-pound target. The report identified a change in laser cutter as a
        possible contributor to the difference from the 42-pound prototype
        result. Measuring cut dimensions and testing additional specimens would
        help separate fabrication variation from modeling error.
      </p>
    </>
  );
}

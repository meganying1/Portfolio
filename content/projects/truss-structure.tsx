import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

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

      <ProjectFigurePair
        figures={[
          {
            number: 1,
            src: "/assets/photos/projects/truss_prototype.jpg",
            width: 2048,
            height: 946,
            alt: "Laser-cut acrylic truss members and bolted joints on the center-load fixture",
            caption:
              "Laser-cut acrylic members and bolted joints form the truss on its load fixture",
            crop: { x: 570, y: 540, width: 900, height: 400 },
          },
          {
            number: 2,
            src: "/assets/photos/projects/truss_assembly.png",
            width: 1346,
            height: 745,
            alt: "Truss CAD showing member geometry, mounting points, and the central load connection",
            caption: "SolidWorks model defines members and mounting points",
            crop: { x: 360, y: 325, width: 635, height: 355 },
          },
        ]}
      />

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

      <ProjectFigure
        number={3}
        src="/assets/photos/projects/truss_fbd_clean.png"
        width={1919}
        height={820}
        alt="Truss and joint free-body diagrams showing the center design load and member-force directions"
        caption="Truss and joint free-body diagrams establish forces under the center load"
        wide
      />

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We generated DXF files from CAD, prepared them in CorelDRAW, laser-cut
        the acrylic members, and assembled them with screws and bolts.
      </p>

      <p>
        The 1/16-inch prototype failed near 20 lb. Increasing thickness to 5/32
        inch supported more than 50 lb without failure. Reducing it to 3/32 inch
        produced a prototype failure near 42 lb. The final test specimen used
        3/32-inch members but failed at 38 lb.
      </p>

      <h2>Results</h2>

      <p>
        The final truss failed at the predicted member location at 38 lb, below
        the 40-pound target. The report identified a change in laser cutter as a
        possible contributor to the difference from the 42-pound prototype
        result. Measuring cut dimensions and testing additional specimens would
        help separate fabrication variation from modeling error.
      </p>
    </>
  );
}

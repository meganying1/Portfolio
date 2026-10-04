import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function TrussStructureContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        Our team designed and laser-cut an acrylic truss to fail near a
        specified center load. I developed candidate geometries and compared
        member forces and strength-to-weight estimates. Load tests guided the
        final member thickness, and the truss failed close to the target in the
        predicted member.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 1,
            src: "/assets/photos/projects/truss_prototype.jpg",
            width: 2048,
            height: 946,
            alt: "Laser-cut acrylic truss members and bolted joints on the center-load fixture",
            caption: "Assembled acrylic truss on the load fixture",
            crop: { x: 570, y: 540, width: 900, height: 400 },
          },
          {
            number: 2,
            src: "/assets/photos/projects/truss_assembly.png",
            width: 1346,
            height: 745,
            alt: "Truss CAD showing member geometry, mounting points, and the central load connection",
            caption: "Truss CAD model on the load fixture",
            crop: { x: 360, y: 325, width: 635, height: 355 },
          },
        ]}
      />

      <h2>Design</h2>

      <p>
        Each team member developed three concepts. We compared the candidates by
        predicted strength-to-weight performance, selected the geometry, and
        modeled the assembly in SolidWorks, using CAD volume to estimate
        structural weight.
      </p>

      <h2>Analysis &amp; validation</h2>

      <p>
        We used static equilibrium to calculate member forces under the 40-pound
        design load. The outer diagonal members carried approximately 28.3 lb in
        compression. We used the member loads to size the acrylic parts and
        predict where the truss would fail.
      </p>

      <ProjectFigure
        number={3}
        src="/assets/photos/projects/truss_fbd_clean.png"
        width={1919}
        height={820}
        alt="Truss and joint free-body diagrams showing the center design load and member-force directions"
        caption="Truss and joint loads under the 40-pound design load"
        wide
      />

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We exported DXF files from CAD, prepared them in CorelDRAW, laser-cut
        the acrylic members, and assembled the truss with screws and bolts. We
        used destructive testing to adjust member thickness toward the 40-pound
        failure target.
      </p>

      <p>
        The 1/16-inch prototype failed near 20 lb, so we increased thickness to
        5/32 inch. That version supported more than 50 lb without failure,
        exceeding the target. We then reduced thickness to 3/32 inch, which
        produced a failure near 42 lb and became the thickness selected for the
        final specimen.
      </p>

      <p>
        The final specimen was made on a different laser cutter and failed at 38
        lb in the predicted member location. The difference from the 42-pound
        prototype showed why fabrication consistency mattered alongside nominal
        member sizing when targeting a specific failure load.
      </p>

      <h2>Results</h2>

      <p>
        We fabricated an acrylic truss that failed at 38 lb, 5% below the
        40-pound target. Failure occurred in the member location predicted by
        the structural analysis.
      </p>

      <p>
        Calculated member loads guided the initial geometry, and successive load
        tests narrowed the thickness choice to 3/32 inch. Variation between the
        prototype and final specimen also highlighted the need to control
        fabrication when targeting a specific failure load.
      </p>
    </>
  );
}

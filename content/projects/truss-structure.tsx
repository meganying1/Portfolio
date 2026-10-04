import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function TrussStructureContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of three, we designed and laser-cut an acrylic truss targeting
        failure near a 40-pound center load. I developed candidate geometries
        and calculated member forces and predicted strength-to-weight
        performance for my concepts. Destructive testing guided thickness
        revisions, and the final truss failed at the predicted member location
        at 38 lb, 5% below the target.
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
        center load, with calculated support reactions of 20 lb each. Joint
        equilibrium gave approximately 28.3 lb compression in the outer
        diagonals. Axial stress checks against an assumed 70 MPa strength guided
        initial dimensions and the predicted failure location.
      </p>

      <ProjectFigure
        number={3}
        src="/assets/photos/projects/truss_fbd_clean.png"
        width={1919}
        height={820}
        alt="Truss and joint free-body diagrams showing the center design load and member-force directions"
        caption="Joint equilibrium identifies tension and compression under the center design load"
        wide
      />

      <p>
        The CAD-based weight estimate was 0.0976 lb, below the report’s
        fabricated weight of 0.1165 lb. We revisited stress and
        strength-to-weight calculations using the final thickness and recorded
        weight.
      </p>

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We generated DXF files from CAD, prepared them in CorelDRAW, laser-cut
        the acrylic members, and assembled them with screws and bolts.
      </p>

      <p>
        We increased thickness after the first specimen failed early, then
        reduced it when the thicker truss exceeded the target without failure.
        The 3/32-inch prototype approached the target, but the final specimen
        failed at a lower load despite the same nominal thickness.
      </p>

      <div className="table-scroll case-table">
        <table className="data-table">
          <caption>
            <span className="fig__num">Table 1</span> Thickness iterations
            against the 40 lb target failure load
          </caption>
          <thead>
            <tr>
              <th scope="col">Specimen</th>
              <th scope="col">Member thickness</th>
              <th scope="col">Observed test outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Initial</th>
              <td className="num">1/16 in</td>
              <td>Failed near 20 lb</td>
            </tr>
            <tr>
              <th scope="row">Thicker</th>
              <td className="num">5/32 in</td>
              <td>Supported &gt;50 lb without failure</td>
            </tr>
            <tr>
              <th scope="row">Reduced</th>
              <td className="num">3/32 in</td>
              <td>Failed near 42 lb</td>
            </tr>
            <tr>
              <th scope="row">Final</th>
              <td className="num">3/32 in</td>
              <td>Failed at 38 lb</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Results</h2>

      <p>
        The final truss failed at the predicted member location at 38 lb, below
        the 40-pound target. A change in laser cutter was identified as a
        possible contributor to the difference from the 42-pound prototype.
        Fabrication variation and modeling error were not isolated by these
        tests.
      </p>
    </>
  );
}

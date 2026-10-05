import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function LinkageSystemContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of three, we built a motor-driven linkage to maximize
        cumulative button contact during a two-minute test. I calculated forces
        and stresses at critical orientations to size the acrylic links within
        the fixture and motor constraints. Revising the link lengths and
        mounting geometry increased measured contact from 2.96 to 41.17 seconds,
        with no motor stall or structural failure in the final test.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 1,
            src: "/assets/photos/projects/linkage_annotated.svg",
            width: 920,
            height: 1000,
            alt: "Final linkage CAD with labels for the button, motor-driven crank, connecting coupler, and slotted rocker",
            caption: "Labeled CAD model of the final linkage",
          },
          {
            number: 2,
            src: "/assets/photos/projects/linkage_system.png",
            width: 464,
            height: 415,
            alt: "Laser-cut acrylic links assembled on the motor and button fixture",
            caption: "Final linkage assembled on the test fixture",
            crop: { x: 70, y: 65, width: 325, height: 335 },
          },
        ]}
      />

      <h2>Design</h2>

      <p>
        We compared linkage concepts with different crank, coupler, and rocker
        lengths and slotted-joint locations. The aim was to keep the output near
        its maximum height for more of each revolution. We selected a slotted
        concept because pin motion within the slot was expected to delay rocker
        descent.
      </p>

      <p>
        The motor drives a crank connected through a coupler to the rocker and
        button-pressing assembly. Link lengths and mounting locations determine
        the output height and duration of button contact. The final design
        retained the slot, but physical testing did not show the intended
        sliding dwell.
      </p>

      <h2>Analysis &amp; validation</h2>

      <p>
        I used geometry and joint equilibrium at critical orientations to
        estimate member forces, then checked axial, bending, and shear stresses,
        including stress concentrations at holes. Yield-based safety factors
        guided link widths for the 1/4-inch acrylic parts, with a governing
        hand-calculated factor of safety of approximately 3.1.
      </p>

      <ProjectFigure
        number={3}
        src="/assets/photos/projects/linkage_fbd_clean_v3.png"
        width={1136}
        height={1385}
        crop={{ x: 25, y: 95, width: 1025, height: 1200 }}
        alt="Linkage and member free-body diagrams showing the button load and joint reactions"
        caption="Member loads and joint reactions at a critical orientation"
        wide
      />

      <p>
        We used FEA to examine stress relative to the modeled yield strength and
        assess deflection. CAD motion studies predicted cumulative contact time,
        providing a baseline for the initial and revised tests below.
      </p>

      <ProjectFigure
        number={4}
        src="/assets/photos/projects/linkage_final_stress.png"
        width={1390}
        height={916}
        alt="Final linkage stress plot with the applied load, fixtures, and stress legend in psi"
        caption="Simulated linkage stress under the applied button load"
        wide
      />

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We generated DXF files from the CAD model, fabricated the acrylic links,
        and assembled the mechanism on the test fixture.
      </p>

      <p>
        The initial prototype’s rocker descended early, with contact time well
        below the motion-study prediction. We suspected coupler geometry and
        downward loading as contributors. We revised the rocker and coupler
        lengths and mounting position, then repeated the motion and structural
        analysis before testing.
      </p>

      <div className="table-scroll case-table">
        <table className="data-table">
          <caption>
            <span className="fig__num">Table 1</span> Cumulative button contact
            during each 120-second test
          </caption>
          <thead>
            <tr>
              <th scope="col">Geometry</th>
              <th scope="col">Motion-study prediction</th>
              <th scope="col">Measured contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Initial</th>
              <td className="num">30.66 s</td>
              <td className="num">2.96 s</td>
            </tr>
            <tr>
              <th scope="row">Revised</th>
              <td className="num">52.84 s</td>
              <td className="num">41.17 s</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Results</h2>

      <p>
        The revised mechanism achieved 41.17 seconds of cumulative contact
        during the 120-second test, approximately 14 times the initial result
        and 78% of the final motion-study prediction. It completed the test
        without motor stall or structural failure. The slot did not provide the
        intended sliding action.
      </p>
    </>
  );
}

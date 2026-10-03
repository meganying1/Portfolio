import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function LinkageSystemContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of three, we built a motor-driven linkage to maximize
        cumulative button contact during a two-minute test. I calculated forces
        and stresses at critical orientations to size the acrylic links within
        the fixture and motor constraints.
      </p>

      <p>
        After the first prototype achieved only 2.96 seconds of contact, we
        revised the link lengths and mounting geometry. The final mechanism
        achieved 41.17 seconds without motor stall or structural failure.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 1,
            src: "/assets/photos/projects/linkage_revised.png",
            width: 820,
            height: 914,
            alt: "Revised linkage with crank, slotted coupler, rocker, and button fixture",
            caption: "CAD model defines revised link geometry",
            crop: { x: 130, y: 130, width: 550, height: 735 },
          },
          {
            number: 2,
            src: "/assets/photos/projects/linkage_system.png",
            width: 464,
            height: 415,
            alt: "Laser-cut acrylic links assembled on the motor and button fixture",
            caption:
              "Laser-cut links form the motor-driven button test mechanism",
            crop: { x: 70, y: 65, width: 325, height: 335 },
          },
        ]}
      />

      <h2>Design</h2>

      <p>
        We compared linkage concepts with different crank, coupler, and rocker
        lengths and slotted-joint locations. The aim was to keep the output near
        its maximum height for a larger portion of each revolution.
      </p>

      <p>
        We selected a slotted concept because pin motion within the slot was
        expected to delay rocker descent. Physical testing later showed that the
        final mechanism did not use this sliding action as intended.
      </p>

      <p>
        The motor drives a crank connected through a coupler to the rocker and
        button-pressing assembly. Link lengths and mounting locations determine
        the output height and duration of button contact.
      </p>

      <p>
        We adjusted this geometry to increase contact time while keeping the
        mechanism within the fixture and avoiding motor stall. The final design
        retained the slot, although the observed improvement came with revised
        geometry rather than the intended sliding dwell.
      </p>

      <h2>Analysis &amp; validation</h2>

      <p>
        I used hand calculations at critical orientations to estimate member
        forces and stresses and select link widths for the 1/4-inch acrylic
        parts.
      </p>

      <ProjectFigure
        number={3}
        src="/assets/photos/projects/linkage_fbd_clean_v2.png"
        width={1136}
        height={1385}
        crop={{ x: 25, y: 95, width: 1025, height: 1200 }}
        alt="Linkage and member free-body diagrams showing the button load and joint reactions"
        caption="Linkage free-body diagrams identify joint reactions at a critical orientation"
        wide
      />

      <p>
        We used FEA to examine stress and deflection and CAD motion studies to
        predict button contact time. These estimates informed the geometry
        before fabrication and provided a baseline for comparison with physical
        tests.
      </p>

      <ProjectFigure
        number={4}
        src="/assets/photos/projects/linkage_final_stress.png"
        width={1390}
        height={916}
        alt="Final linkage stress plot with the applied load, fixtures, and stress legend in psi"
        caption="Linkage FEA shows the stress distribution under the applied button load"
        wide
      />

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We generated DXF files from the CAD model, fabricated the acrylic links,
        and assembled the mechanism on the test fixture.
      </p>

      <p>
        The initial prototype achieved 2.96 seconds of cumulative contact
        against a 30.66-second prediction. The rocker descended early, although
        the mechanism completed the test without motor stall or structural
        failure.
      </p>

      <p>
        We identified coupler geometry and downward loading as possible
        contributors to the early descent. We revised the rocker and coupler
        lengths and mounting position, then repeated the motion and structural
        analysis before testing.
      </p>

      <h2>Results</h2>

      <p>
        The revised mechanism achieved 41.17 seconds of cumulative contact
        during the 120-second test, approximately 14 times the initial result,
        against a final prediction of 52.84 seconds. It completed the test
        without motor stall or structural failure. The slot did not provide the
        intended sliding action and contributed to out-of-plane deflection,
        making a solid-link redesign a candidate for further evaluation.
      </p>
    </>
  );
}

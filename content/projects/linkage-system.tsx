import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function LinkageSystemContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        Our team built a motor-driven linkage to maximize contact with a
        spring-loaded button. I calculated joint reactions and member stresses
        to size the acrylic links. Changes to link lengths and mounting geometry
        increased contact time, and the final mechanism completed the test
        without motor stall or structural failure.
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
        The motor rotates the crank. The coupler connects the crank to the
        rocker, which pivots about a fixed mounting point and lifts the
        button-pressing assembly. We varied link lengths and mounting positions
        to keep the output near its maximum height while fitting the fixture.
      </p>

      <p>
        We selected a slot in the rocker to let the coupler pin move downward
        while still supporting the rocker near its highest position. This
        relative motion was intended to delay descent and extend button contact.
        In simulation, the alternative with a second slot increased stress
        without providing the intended delay.
      </p>

      <h2>Analysis &amp; validation</h2>

      <p>
        I calculated joint reactions and member stresses at critical
        orientations to select link widths for the 1/4-inch acrylic parts.
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
        We used CAD motion studies to predict contact time and FEA to examine
        stress and deflection at maximum extension, where the button-spring
        force was highest.
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
        We generated DXF files from CAD, laser-cut the 1/4-inch acrylic links,
        and assembled them on the motor and button fixture. The first prototype
        achieved 2.96 seconds of cumulative button contact against a
        30.66-second prediction. The rocker dropped before the coupler pin could
        slide down the slot and provide the intended support.
      </p>

      <p>
        We compared changes to link length, mounting position, and slot
        placement in CAD motion studies. We changed the rocker and coupler
        lengths and moved the mounting pin to reduce early descent, then
        repeated the force calculations and FEA before fabricating the final
        design.
      </p>

      <p>
        In the final test, the coupler pin did not travel along the slot, and
        the slotted rocker showed the greatest out-of-plane deflection among the
        links. We suspect that friction between the pin and slot, which our
        motion model did not account for, resisted sliding. These findings led
        us to recommend removing the slot and reassessing the joint position to
        preserve button contact while reducing bending.
      </p>

      <h2>Results</h2>

      <p>
        The final linkage achieved 41.17 seconds of cumulative button contact
        during the 120-second test, compared with a 52.84-second prediction. It
        completed the test without motor stall or structural failure.
      </p>

      <p>
        Contact time increased by approximately 14 times from the initial
        2.96-second result. The improvement followed the changed link lengths
        and mounting position, while testing showed that the slot did not
        provide its intended delay.
      </p>
    </>
  );
}

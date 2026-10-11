import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function TripodAttachmentContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of three, we developed an assistive tripod attachment for
        users with cerebral palsy and wrist tendonitis. I contributed to the
        sensor-triggered gripping concept and analyzed the compliant TPU wings
        under servo loading. The prototype integrated automatic gripping and a
        compliant orientation interface, but testing exposed an unreliable glued
        wing connection and a phone slot that was too narrow.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/tripod-gripping.gif"
        width={420}
        height={378}
        compact
        alt="A phone is placed in the holder, the servo-driven wings close around it, and the phone is removed"
        caption="Prototype holding a phone between the gripping wings"
      />

      <h2>Design</h2>

      <p>
        When a phone is lowered over our device, an IR sensor detects it and
        triggers micro servos to rotate two wings inward. The sensor also
        detects when the phone is removed and signals the servos to reopen the
        wings. The padded base supports the phone, while the wings
        provide lateral retention. TPU wings with cutouts were selected to
        accommodate different phone shapes while retaining the phone.
      </p>

      <ProjectFigure
        number={2}
        src="/assets/photos/projects/tripod-rotating-base-parts.jpg"
        width={4032}
        height={3024}
        crop={{ x: 650, y: 25, width: 2970, height: 2880 }}
        alt="Printed phone holder with exposed servos and electronics beside the separate toothed outer rotating base"
        caption="Fabricated holder showing the servos and electronic components, with the rotating base removed."
      />

      <p>
        The rotating base pairs a flexible TPU inner interface with a rigid
        outer part. Rounded teeth were intended to deform during manual
        adjustment and re-engage at the selected orientation.
      </p>

      <ProjectFigurePair
        stackOnMobile
        figures={[
          {
            number: 3,
            src: "/assets/photos/projects/tripod_assembly.png",
            width: 918,
            height: 1056,
            alt: "Phone holder CAD showing the wing servos, battery, and electronics within the base",
            caption: "CAD view of servos and electronics in the base",
          },
          {
            number: 4,
            src: "/assets/photos/projects/tripod_interface.png",
            width: 971,
            height: 959,
            crop: { x: 85, y: 35, width: 800, height: 880 },
            alt: "Rounded teeth between the concentric inner and outer rotating interface parts",
            caption: "CAD view of rounded teeth in the rotating base",
          },
        ]}
      />

      <h2>Concept development</h2>

      <p>
        Our user study highlighted difficulty gripping phones, operating small
        mounting screws, and making precise adjustments. These findings led us
        to brainstorm automatic phone gripping and a toothed rotating interface
        that could change orientation without repeatedly loosening a screw.
      </p>

      <ProjectFigure
        number={5}
        src="/assets/photos/projects/tripod-development-clean.png"
        width={1053}
        height={1493}
        crop={{ x: 60, y: 170, width: 980, height: 840 }}
        alt="Exploded development sketch showing separate compliant wings, servo horns, servos, and the base with its phone slot and electronics layout"
        caption="Drawings from early concept development"
        wide
      />

      <p>
        We also explored spring-supported contact wings and slot padding to
        accommodate different phone sizes and shapes. We selected cutout TPU
        wings over the extra wings and springs to balance fit with retention.
        We replaced triangular interface teeth with rounded TPU teeth for
        easier rotation while maintaining engagement.
      </p>

      <ProjectFigure
        number={6}
        src="/assets/photos/projects/tripod-spring-wing-concept.png"
        width={1964}
        height={801}
        crop={{ x: 0, y: 170, width: 1964, height: 535 }}
        alt="Earlier spring-supported wing concept showing primary and secondary contact wings, connecting springs, a servo pivot, and the initial position"
        caption="Earlier spring-supported wing concept with a separate contact wing"
        wide
      />

      <h2>Analysis &amp; validation</h2>

      <p>
        I estimated a 2.97 N load on each wing from the servo torque and
        geometry. A simplified bending calculation predicted a maximum stress of
        2.45 MPa and a factor of safety of 21.4 under the report’s assumed TPU
        strength. A shear check predicted approximately 0.025 MPa, so bending
        governed the simplified analysis.
      </p>

      <p>
        FEA examined stress and deformation under the same 2.97 N load,
        predicting 10.2 MPa maximum stress. Applying the report’s assumed TPU
        strength gave a calculated factor of safety of 5.1. We believe the
        difference between the hand calculations and FEA is due to the
        simplified geometry used in the hand analysis.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 7,
            src: "/assets/photos/projects/tripod_calc.png",
            width: 436,
            height: 330,
            alt: "Assumed phone and wing geometry with the lever arm between the servo axis and phone contact",
            caption:
              "Calculations for determining wing load and maximum stress",
          },
          {
            number: 8,
            src: "/assets/photos/projects/tripod_wing_stress.png",
            width: 1324,
            height: 1085,
            alt: "Wing stress plot under servo loading, with the fixed base and stress legend visible",
            caption: "Wing stress distribution under the modeled servo load",
            crop: { x: 580, y: 65, width: 710, height: 970 },
          },
        ]}
      />

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We assembled 3D-printed parts with micro servos, an IR sensor, magnets,
        and an Arduino Nano to evaluate gripping, phone fit, and the rotating
        interface.
      </p>

      <p>
        Through testing, we found that the glued wing-to-servo-horn connection
        was not robust and the foam-lined slot prevented the phone from seating
        fully. We proposed widening the slot and redesigning the wing-to-servo
        fit to replace the glued horn connection.
      </p>

      <h2>Manufacturing &amp; cost</h2>

      <p>
        We proposed molded TPU for the wings and inner rotating interface, with
        rigid plastic for the base and outer interface. Injection molding was
        considered for production rather than the printed prototype.
      </p>

      <p>
        Using component quotations at a sample quantity of 50 units and
        purchased electronics, we estimated a unit cost of $58.18. The estimate
        would need review for tooling, assembly, and the final material and
        process choices.
      </p>

      <h2>Results</h2>

      <p>
        We built a prototype of the sensor-triggered gripping mechanism and
        compliant rotating interface. Testing identified specific changes to
        phone clearance and servo attachment before further functional and user
        evaluation.
      </p>
    </>
  );
}

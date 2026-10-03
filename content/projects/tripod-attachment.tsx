import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function TripodAttachmentContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of three, we developed an assistive tripod attachment for
        users with cerebral palsy and wrist tendonitis. I contributed to the
        sensor-triggered gripping concept and analyzed the compliant TPU wings
        under servo loading.
      </p>

      <p>
        The prototype combined automatic phone gripping with a compliant toothed
        interface for orientation adjustment. Testing exposed two integration
        issues: an unreliable glued wing connection and a phone slot that was
        too narrow.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/tripod_phone1.jpg"
        width={458}
        height={345}
        compact
        alt="Printed phone holder with padded base and two servo-driven gripping wings"
        caption="Printed phone-mount prototype combines servo-driven wings with a padded base"
        crop={{ x: 40, y: 30, width: 380, height: 300 }}
      />

      <h2>Design</h2>

      <p>
        User research identified difficulty gripping phones, operating small
        mounting screws, and making precise adjustments. We translated these
        findings into two functions: securing the phone automatically and
        adjusting orientation without repeatedly loosening a screw.
      </p>

      <p>
        I helped develop the concept of an IR sensor triggering servo-driven
        wings. We paired this with a manually adjustable rotating base.
      </p>

      <p>
        We added foam for phone fit and selected TPU wings with cutouts to
        accommodate different shapes. Rounded teeth in the rotating interface
        were intended to deform during adjustment and engage at the selected
        position.
      </p>

      <p>
        An IR sensor detects the phone and triggers micro servos to rotate two
        wings inward. The padded base supports the phone, while the wings
        provide lateral retention.
      </p>

      <p>
        TPU and cutouts give the wings compliance. Their geometry must balance
        accommodation of the phone with sufficient retention under servo
        loading.
      </p>

      <p>
        The rotating base pairs a flexible TPU inner interface with a rigid
        outer part. Rounded teeth deform as the user turns the holder and
        re-engage to retain its orientation.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 2,
            src: "/assets/photos/projects/tripod_assembly.png",
            width: 918,
            height: 1056,
            alt: "Phone holder CAD showing the wing servos, battery, and electronics within the base",
            caption:
              "CAD assembly packages wing servos and electronics within the base",
          },
          {
            number: 3,
            src: "/assets/photos/projects/tripod_interface.png",
            width: 971,
            height: 959,
            alt: "Rounded teeth between the concentric inner and outer rotating interface parts",
            caption:
              "CAD detail shows mating teeth for compliant orientation adjustment",
            crop: { x: 85, y: 35, width: 800, height: 880 },
          },
        ]}
      />

      <h2>Analysis &amp; validation</h2>

      <p>
        I estimated a 2.97 N load on each wing from the servo torque and
        geometry. A simplified bending calculation predicted a maximum stress of
        2.45 MPa and a factor of safety of 21.4.
      </p>

      <ProjectFigure
        number={4}
        src="/assets/photos/projects/tripod_calc.png"
        width={436}
        height={330}
        alt="Phone and wing load diagram with phone weight and wing bending dimensions"
        caption="Wing free-body diagram relates phone weight and geometry to bending loads"
        compact
      />

      <p>
        FEA under the modeled load predicted a maximum stress of 10.2 MPa and a
        factor of safety of 5.1. Local stress concentrations and simplified
        hand-calculation geometry may explain the difference. The comparison
        highlighted the need to evaluate the wing geometry and material
        assumptions beyond a simple beam model.
      </p>

      <ProjectFigure
        number={5}
        src="/assets/photos/projects/tripod_wing_stress.png"
        width={1324}
        height={1085}
        alt="Wing stress plot under servo loading, with the fixed base and stress legend visible"
        caption="Wing FEA identifies stress concentrations under the modeled servo load"
        crop={{ x: 580, y: 65, width: 710, height: 970 }}
        wide
      />

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We assembled 3D-printed parts with micro servos, an IR sensor, magnets,
        and an Arduino Nano to evaluate gripping, phone fit, and the rotating
        interface.
      </p>

      <p>
        The glued wing-to-servo-horn connection was not robust, and the
        foam-lined slot prevented the phone from seating fully. These issues
        limited the prototype’s ability to demonstrate the intended interaction.
      </p>

      <p>
        The next iteration would widen the phone slot and replace the adhesive
        wing connection with a mechanically retained interface. Measuring
        adjustment force and testing with users would establish whether the
        design reduces effort.
      </p>

      <h2>Manufacturing &amp; cost</h2>

      <ProjectFigure
        number={6}
        src="/assets/photos/projects/tripod_gdt.png"
        width={1010}
        height={828}
        alt="Proposed wing and base assembly drawing with geometric tolerance callouts"
        caption="Proposed GD&T annotations communicate alignment of the wings and base"
        wide
      />

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
        evaluation. Reduced adjustment force and reliable retention remain to be
        measured.
      </p>
    </>
  );
}

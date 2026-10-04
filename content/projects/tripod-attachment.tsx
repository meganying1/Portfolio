import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function TripodAttachmentContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        Our team developed an assistive phone mount to reduce the force and
        dexterity needed for users with cerebral palsy and wrist tendonitis. I
        helped develop sensor-triggered gripping and analyzed loads and bending
        stress in the flexible wings. The prototype combined automatic gripping
        with a compliant toothed base for orientation adjustment.
      </p>

      <ProjectFigure
        number={1}
        src="/assets/photos/projects/tripod_phone1.jpg"
        width={458}
        height={345}
        compact
        alt="Printed phone holder with padded base and two servo-driven gripping wings"
        caption="Prototype holding a phone between the gripping wings"
        crop={{ x: 40, y: 30, width: 380, height: 300 }}
      />

      <h2>Design</h2>

      <p>
        User research identified difficulty with small mounting screws,
        gripping, and precise adjustments. We addressed those interactions with
        automatic gripping and a rotating base that does not require loosening
        and retightening a screw.
      </p>

      <p>
        An IR sensor detects the phone and triggers two micro servos to close
        the wings. Foam lining the base slot compresses to support different
        phone widths and shapes, while TPU wings with cutouts flex around the
        phone.
      </p>

      <p>
        The rotating base pairs a TPU inner interface with a rigid outer part.
        Rounded teeth deform during adjustment and re-engage to hold the
        selected orientation.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 2,
            src: "/assets/photos/projects/tripod_assembly.png",
            width: 918,
            height: 1056,
            alt: "Phone holder CAD showing the wing servos, battery, and electronics within the base",
            caption: "Servos and electronics in the base",
          },
          {
            number: 3,
            src: "/assets/photos/projects/tripod_interface.png",
            width: 971,
            height: 959,
            alt: "Rounded teeth between the concentric inner and outer rotating interface parts",
            caption: "Rounded teeth in the rotating base",
            crop: { x: 85, y: 35, width: 800, height: 880 },
          },
        ]}
      />

      <h2>Analysis &amp; validation</h2>

      <p>
        I used servo torque and wing geometry to estimate a 2.97 N load per
        wing. A simplified bending calculation predicted 2.45 MPa maximum stress
        and a factor of safety of 21.4.
      </p>

      <ProjectFigure
        number={4}
        src="/assets/photos/projects/tripod_calc.png"
        width={436}
        height={330}
        alt="Phone and wing load diagram with phone weight and wing bending dimensions"
        caption="Phone and wing loads used in the bending calculation"
        compact
      />

      <p>
        FEA under the modeled load predicted 10.2 MPa maximum stress and a
        factor of safety of 5.1. The difference may come from local stress
        concentrations and the simplified geometry used in the hand calculation.
      </p>

      <ProjectFigure
        number={5}
        src="/assets/photos/projects/tripod_wing_stress.png"
        width={1324}
        height={1085}
        alt="Wing stress plot under servo loading, with the fixed base and stress legend visible"
        caption="Wing stress distribution under the modeled servo load"
        crop={{ x: 580, y: 65, width: 710, height: 970 }}
        wide
      />

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We assembled 3D-printed parts with micro servos, an IR sensor, magnets,
        foam, and an Arduino Nano to test automatic gripping, phone fit, and
        rotation.
      </p>

      <p>
        Testing showed that the glued wing-to-servo connection was not sturdy
        enough, and the phone could not seat fully between the foam. We
        identified changes for a future prototype: widen the slot and reshape
        the wings to fit the servos directly, replacing the glued servo-horn
        connection.
      </p>

      <p>
        The prototype could hold smaller phones horizontally, but larger phones
        were limited to portrait orientation. For a future prototype, we
        proposed adjustable servo angles for landscape mounting, a handle for
        easier base rotation, and a cover to protect the electronics.
      </p>

      <h2>Manufacturing &amp; cost</h2>

      <p>
        We proposed injection-molded TPU for the wings and inner rotating
        interface because these parts need to flex during gripping and
        adjustment. Rigid plastic in the base and outer interface supports the
        phone and locates the compliant parts.
      </p>

      <p>
        Component quotations at a sample quantity of 50, combined with purchased
        electronics, yielded a preliminary unit estimate of $58.18. Tooling and
        assembly costs remained subject to review.
      </p>

      <h2>Results</h2>

      <p>
        We built an assistive phone-mount prototype that combined
        sensor-triggered servo gripping with a compliant rotating base. The
        mechanism reduced reliance on small mounting screws by gripping the
        phone automatically and allowing orientation adjustment through the
        toothed interface.
      </p>

      <p>
        FEA predicted a wing factor of safety of 5.1 under the modeled servo
        load. Prototype testing identified phone clearance and wing-to-servo
        attachment as the main areas for refinement, and the manufacturing
        proposal produced a preliminary unit estimate of $58.18 at a sample
        quantity of 50.
      </p>
    </>
  );
}

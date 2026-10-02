import Image from "next/image";

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

      <figure className="fig">
        <Image
          src="/assets/photos/projects/tripod_phone1.jpg"
          alt="Tripod attachment holding an iPhone"
          width={458}
          height={345}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 1</span>Prototype with servo-driven
          wings holding a phone
        </figcaption>
      </figure>

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

      <figure className="fig">
        <Image
          src="/assets/photos/projects/tripod_cad.png"
          alt="CAD model of the tripod attachment showing internal electronics"
          width={415}
          height={458}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 2</span>CAD model of attachment with
          electronics
        </figcaption>
      </figure>

      <p>
        The rotating base pairs a flexible TPU inner interface with a rigid
        outer part. Rounded teeth deform as the user turns the holder and
        re-engage to retain its orientation.
      </p>

      <div className="fig-pair">
        <figure className="fig">
          <Image
            src="/assets/photos/projects/interface_cad1.png"
            alt="CAD model of the interface piece"
            width={287}
            height={287}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 3</span>Compliant toothed interface
            for orientation adjustment
          </figcaption>
        </figure>

        <figure className="fig">
          <Image
            src="/assets/photos/projects/interface_cad2.png"
            alt="CAD model of the interface piece, opposite view"
            width={238}
            height={290}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <h2>Analysis &amp; Validation</h2>

      <p>
        I estimated a 2.97 N load on each wing from the servo torque and
        geometry. A simplified bending calculation predicted a maximum stress of
        2.45 MPa and a factor of safety of 21.4.
      </p>

      <p>
        FEA under the modeled load predicted a maximum stress of 10.2 MPa and a
        factor of safety of 5.1. Local stress concentrations and simplified
        hand-calculation geometry may explain the difference. The comparison
        highlighted the need to evaluate the wing geometry and material
        assumptions beyond a simple beam model.
      </p>

      <div className="fig-pair">
        <figure className="fig">
          <Image
            src="/assets/photos/projects/tripod_calc.png"
            alt="Hand calculations for forces on the subassembly"
            width={436}
            height={330}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 4</span>Calculating forces on
            subassembly
          </figcaption>
        </figure>

        <figure className="fig">
          <Image
            src="/assets/photos/projects/tripod_fea.png"
            alt="Finite element analysis of the tripod wing"
            width={241}
            height={372}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 5</span>FEA of wing
          </figcaption>
        </figure>
      </div>

      <h2>Fabrication &amp; Iteration</h2>

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

      <h2>Manufacturing &amp; Cost</h2>

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

      <div className="fig-pair">
        <figure className="fig">
          <Image
            src="/assets/photos/projects/tripod_phone2.jpg"
            alt="Tripod attachment holding an iPhone, alternate angle"
            width={458}
            height={345}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </>
  );
}

import Image from "next/image";
import { SlideDeck } from "@/components/slide-deck";

export default function BatteryDoorContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        I designed a push-button battery door for an Apple mechanical design
        interview challenge. A spring-loaded sliding latch converts a downward
        button press into horizontal release motion, allowing the door to open
        and automatically re-latch when closed.
      </p>

      <p>
        I developed the assembly in Siemens NX and used hand calculations,
        tolerance analysis, and FEA to evaluate button travel, closing force,
        latch engagement, and component loading. I also planned the assembly
        sequence and selected materials and processes for a proposed production
        volume above 100,000 units per year.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_assembly.png"
          alt="Exploded views of the mechanism and the door subassembly, with an eight-step assembly procedure"
          width={1920}
          height={850}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 1</span>Sliding latch components and
          assembly sequence
        </figcaption>
      </figure>

      <h2>Design</h2>

      <p>
        The mechanism combines a vertically guided button, a horizontal latch,
        return springs, and two chassis parts that locate and retain the moving
        components.
      </p>

      <p>
        Button pegs engage angled slots in the latch. Pressing the button
        retracts the latch until it clears the door hook, allowing spring-loaded
        hinges to lift the door.
      </p>

      <p>
        When the button is released, the springs return the button and latch.
        During closing, a ramp on the door hook pushes the latch aside; the
        latch then springs back into engagement. A flat locking surface resists
        release from an upward pull on the door.
      </p>

      <p>
        I designed the top chassis to snap onto the bottom chassis, capturing
        the internal parts while guiding button and latch motion.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_section_pressed.png"
          alt="Cross section through the full device with the button pressed and the springs compressed"
          width={1660}
          height={626}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 2</span>Button travel retracts the
          latch from the door hook
        </figcaption>
      </figure>

      <h2>Concept development</h2>

      <p>
        I defined requirements for button force and travel, closing force,
        package size, and repeated use. The key interaction targets were a 2–5 N
        button force, 1–3 mm travel, and a closing force below 8 N.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_assumptions.png"
          alt="Two panels listing the design assumptions and the requirements, covering device dimensions, lifespan, production volume, button press force and travel, door closing and opening force, durability, cost, weight, and appearance"
          width={1920}
          height={850}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 3</span>Assumptions and requirements
        </figcaption>
      </figure>

      <p>
        I explored four release architectures and compared their complete
        release and reset sequences. The tradeoffs included tolerance
        sensitivity, jamming, accidental actuation, component complexity, and
        whether the button could remain within the door perimeter.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_concept_snapfit.png"
          alt="Moving snap fit concept alongside its inspiration: battery covers and water bottle lids"
          width={1920}
          height={850}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 4</span>Moving snap fit inspiration
          and concept
        </figcaption>
      </figure>
      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_concept_pushrelease.png"
          alt="Push release concept alongside its inspiration: push-to-open cabinets with touch latches"
          width={1920}
          height={850}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 5</span>Push release inspiration and
          concept
        </figcaption>
      </figure>
      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_concept_rotatingbody.png"
          alt="Rotating body concept alongside its inspiration: a retractable pen with a rotating cam body"
          width={1920}
          height={850}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 6</span>Rotating cam body inspiration
          and concept
        </figcaption>
      </figure>
      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_concept_slidinglatch.png"
          alt="Sliding latch concept alongside its inspiration: a door knob with a strike plate and sliding latch"
          width={1920}
          height={850}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 7</span>Sliding latch inspiration and
          concept
        </figcaption>
      </figure>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_comparison.png"
          alt="Four-column comparison of the moving snap fit, push release, rotating body, and sliding latch concepts, with the moving snap fit highlighted"
          width={1920}
          height={850}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 8</span>Comparing the four mechanisms
        </figcaption>
      </figure>

      <p>
        I developed sliding and rotating implementations of a moving snap fit.
        The sliding version uses angled slots to convert button travel into
        latch translation; the rotating version pivots the latch out of
        engagement.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_sliding_sequence.png"
          alt="Four cross-section steps showing the sliding snap fit releasing and re-latching the door"
          width={1920}
          height={875}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 9</span>Mechanism steps of sliding
          snap fit design
        </figcaption>
      </figure>
      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_rotating_sequence.png"
          alt="Four cross-section steps showing the rotating snap fit releasing and re-latching the door"
          width={1920}
          height={875}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 10</span>Mechanism steps of rotating
          snap fit design
        </figcaption>
      </figure>

      <p>
        I selected the sliding version using a weighted decision matrix. It
        scored higher for effectiveness and user experience, which carried more
        weight than the rotating version’s advantages in compactness and
        estimated cost.
      </p>

      <figure className="fig">
        <div className="table-scroll">
          <table className="data-table">
            <caption className="sr-only">
              Weighted decision matrix comparing the sliding snap fit and
              rotating snap fit designs
            </caption>
            <thead>
              <tr>
                <th scope="col">Criterion</th>
                <th scope="col">Weight</th>
                <th scope="col">Sliding rating</th>
                <th scope="col">Sliding score</th>
                <th scope="col">Rotating rating</th>
                <th scope="col">Rotating score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Effectiveness</th>
                <td className="num">5</td>
                <td className="num">4</td>
                <td className="num">20</td>
                <td className="num">3</td>
                <td className="num">15</td>
              </tr>
              <tr>
                <th scope="row">User experience</th>
                <td className="num">4</td>
                <td className="num">4</td>
                <td className="num">16</td>
                <td className="num">3</td>
                <td className="num">12</td>
              </tr>
              <tr>
                <th scope="row">Manufacturability</th>
                <td className="num">4</td>
                <td className="num">3</td>
                <td className="num">12</td>
                <td className="num">3</td>
                <td className="num">12</td>
              </tr>
              <tr>
                <th scope="row">Ease of assembly</th>
                <td className="num">4</td>
                <td className="num">3</td>
                <td className="num">12</td>
                <td className="num">3</td>
                <td className="num">12</td>
              </tr>
              <tr>
                <th scope="row">Compactness</th>
                <td className="num">4</td>
                <td className="num">3</td>
                <td className="num">12</td>
                <td className="num">4</td>
                <td className="num">16</td>
              </tr>
              <tr>
                <th scope="row">Cost</th>
                <td className="num">3</td>
                <td className="num">3</td>
                <td className="num">9</td>
                <td className="num">4</td>
                <td className="num">12</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td></td>
                <td></td>
                <td className="num is-chosen">81</td>
                <td></td>
                <td className="num">79</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <figcaption>
          <span className="fig__num">Fig. 11</span>Decision matrix of the two
          designs
        </figcaption>
      </figure>

      <h2>Analysis &amp; validation</h2>

      <p>
        I worked backward from the latch travel needed to clear the door hook to
        size the angled slots, button stroke, and return springs. The
        calculations predicted 1.39 mm of button travel, within the 1–3 mm
        target.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_calc_button.jpg"
          alt="Handwritten calculations for button travel, free body diagrams, and the spring constant bounds"
          width={1904}
          height={1960}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 12</span>Button and latch calculations
        </figcaption>
      </figure>

      <p>
        I evaluated peg bending and snap-fit stress, strain, and deflection
        under the modeled loads. The door calculation predicted a 6.1 N closing
        force, below the 8 N target. These calculations screened the geometry
        for the assumed service life; physical cycle testing would be needed to
        establish durability.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_calc_door.jpg"
          alt="Handwritten snap-fit calculations for maximum strain, stress, deflection force, and closing force"
          width={1904}
          height={1120}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 13</span>Door and latch calculations
        </figcaption>
      </figure>

      <p>
        I traced the dimensional chain from the latch tip to the door hook and
        calculated an RSS tolerance stack-up. The predicted overlap was 0.79 mm
        nominal, with an RSS range of 0.51–1.09 mm. This estimate supports
        engagement under the modeled variation, but does not establish a
        worst-case tolerance bound.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/battery_tolerance.png"
          alt="Tolerance stack-up diagram and table from latch tip to door tip, with nominal and RSS overlap results"
          width={1080}
          height={830}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 14</span>Dimensional chain and RSS
          estimate of latch overlap
        </figcaption>
      </figure>

      <p>
        I used FEA to examine peg-to-latch contact during release and door-hook
        deflection during closing. The simulations provided stress and
        deformation estimates for comparison with the hand calculations.
        Material assumptions in the peg analysis still need to be reconciled
        with the aluminum button specified in the proposed BOM.
      </p>

      <figure className="fig">
        <video
          src="/assets/video/battery_fea_latch.mp4"
          poster="/assets/photos/projects/battery_fea_latch_poster.png"
          width={854}
          height={854}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Animated finite element simulation of the button peg sliding the latch"
        ></video>
        <figcaption>
          <span className="fig__num">Fig. 15</span>FEA of button sliding latch
        </figcaption>
      </figure>
      <div className="fig-pair">
        <figure className="fig">
          <video
            src="/assets/video/battery_fea_door_stress.mp4"
            poster="/assets/photos/projects/battery_fea_door_poster.png"
            width={386}
            height={386}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Animated finite element stress simulation of the door hook deflecting past the latch"
          ></video>
          <figcaption>
            <span className="fig__num">Fig. 16</span>FEA stress of door snap fit
          </figcaption>
        </figure>
        <figure className="fig">
          <video
            src="/assets/video/battery_fea_door_deformation.mp4"
            poster="/assets/photos/projects/battery_fea_door_poster.png"
            width={386}
            height={386}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Animated finite element deformation simulation of the door hook deflecting past the latch"
          ></video>
          <figcaption>
            <span className="fig__num">Fig. 17</span>FEA deformation of door
            snap fit
          </figcaption>
        </figure>
      </div>

      <h2>Manufacturing &amp; cost</h2>

      <p>
        I selected proposed materials and processes based on component geometry,
        compliance, production volume, and user-contact surfaces.
      </p>

      <p>
        The chassis, latch, and structural door use injection-molded ABS; the
        button and door cover use aluminum. Springs, screws, and spring-loaded
        hinges are purchased hardware. The assembly sequence uses chassis snap
        fits to retain the release mechanism.
      </p>

      <p>
        The estimated BOM cost was $3.30 per assembly. This is a preliminary
        component-cost estimate rather than a validated manufacturing quotation
        or complete production cost. The button alloy and forming process
        require further review before release.
      </p>

      <figure className="fig">
        <div className="table-scroll">
          <table className="data-table">
            <caption className="sr-only">
              Bill of materials for the sliding snap fit mechanism
            </caption>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Qty</th>
                <th scope="col">Material</th>
                <th scope="col">Manufacturing</th>
                <th scope="col">Mass (g)</th>
                <th scope="col">Unit ($)</th>
                <th scope="col">Total ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Top chassis</th>
                <td className="num">1</td>
                <td>ABS</td>
                <td>Injection molding</td>
                <td className="num">6.9</td>
                <td className="num">0.35</td>
                <td className="num">0.35</td>
              </tr>
              <tr>
                <th scope="row">Button</th>
                <td className="num">1</td>
                <td>Aluminum 6061-T6</td>
                <td>Die casting</td>
                <td className="num">3.6</td>
                <td className="num">0.10</td>
                <td className="num">0.10</td>
              </tr>
              <tr>
                <th scope="row">Latch</th>
                <td className="num">1</td>
                <td>ABS</td>
                <td>Injection molding</td>
                <td className="num">4.6</td>
                <td className="num">0.25</td>
                <td className="num">0.25</td>
              </tr>
              <tr>
                <th scope="row">Springs</th>
                <td className="num">2</td>
                <td>Purchased</td>
                <td>Purchased</td>
                <td className="num">—</td>
                <td className="num">0.10</td>
                <td className="num">0.20</td>
              </tr>
              <tr>
                <th scope="row">Screws</th>
                <td className="num">4</td>
                <td>Purchased</td>
                <td>Purchased</td>
                <td className="num">—</td>
                <td className="num">0.10</td>
                <td className="num">0.40</td>
              </tr>
              <tr>
                <th scope="row">Bottom chassis</th>
                <td className="num">1</td>
                <td>ABS</td>
                <td>Injection molding</td>
                <td className="num">8.6</td>
                <td className="num">0.45</td>
                <td className="num">0.45</td>
              </tr>
              <tr>
                <th scope="row">Spring-loaded hinge</th>
                <td className="num">2</td>
                <td>Purchased</td>
                <td>Purchased</td>
                <td className="num">—</td>
                <td className="num">0.10</td>
                <td className="num">0.20</td>
              </tr>
              <tr>
                <th scope="row">Door</th>
                <td className="num">1</td>
                <td>ABS</td>
                <td>Injection molding</td>
                <td className="num">24.4</td>
                <td className="num">1.20</td>
                <td className="num">1.20</td>
              </tr>
              <tr>
                <th scope="row">Door cover</th>
                <td className="num">1</td>
                <td>Aluminum 6061-T6</td>
                <td>Stamping</td>
                <td className="num">4.7</td>
                <td className="num">0.15</td>
                <td className="num">0.15</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="num">3.30</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <figcaption>
          <span className="fig__num">Fig. 18</span>Bill of materials for sliding
          snap fit
        </figcaption>
      </figure>

      <h2>Results</h2>

      <p>
        I completed the CAD assembly, release sequence, analysis, and
        manufacturing proposal for the sliding-latch design. Calculations
        predicted button travel and door-closing force within the selected
        targets, while the RSS stack-up predicted positive latch overlap.
      </p>

      <p>
        The design remains an analytical concept. The next steps are to
        reconcile material assumptions, build a prototype, and measure actuation
        force, latch engagement, wear, and cycle durability.
      </p>

      <div className="deck">
        <h3 className="label">Presentation</h3>
        <SlideDeck />
      </div>
    </>
  );
}

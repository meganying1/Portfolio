import Image from "next/image";

export default function TrashCompactorContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of five, we built a standalone trash compactor with a linear
        actuator and scissor linkage that raise a compression plate against the
        lid. I developed the SolidWorks assembly and designed custom actuator
        mounts to connect the actuator to the linkage within the enclosure.
      </p>

      <p>
        The working prototype completed an automated compaction cycle and
        received the Best Overall Project Award at Carnegie Mellon’s Mechanical
        Engineering Design Expo.
      </p>

      <div className="fig-pair">
        <figure className="fig">
          <Image
            src="/assets/photos/projects/compactor_final.jpg"
            alt="Final trash compactor prototype, a wooden bin with the lid closed"
            width={258}
            height={380}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 1</span>Completed prototype with
            enclosure and lid
          </figcaption>
        </figure>

        <figure className="fig">
          <Image
            src="/assets/photos/projects/compactor-linkage.jpg"
            alt="Linkage system inside the trash compactor prototype"
            width={1448}
            height={1848}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 2</span>Actuator and scissor linkage
            beneath the compression plate
          </figcaption>
        </figure>
      </div>

      <h2>Design</h2>

      <p>
        Benchmarking highlighted a gap between permanently installed compactors
        and alternatives that require manual force. We focused on a standalone
        device with powered compression, a compact footprint, and
        straightforward operation.
      </p>

      <p>
        We compared concepts using weighted criteria and selected an
        actuator-driven scissor linkage that could fit beneath the trash
        compartment. Its geometry allowed the compression plate to move
        vertically within the bin.
      </p>

      <p>
        The plate rises through the bin, compresses waste against the locked
        lid, holds for approximately ten seconds, and retracts automatically.
      </p>

      <p>
        The actuator’s fixed hole pattern and limited mounting locations
        constrained its position. I designed custom mounts around those
        interfaces to connect the actuator to the linkage and transfer load
        within the available space.
      </p>

      <p>
        I used the assembly CAD to integrate the mounts, actuator, linkage, and
        surrounding structure before fabrication.
      </p>

      <figure className="fig">
        <Image
          src="/assets/photos/projects/compactor_cad.png"
          alt="CAD model of the trash compactor linkage system"
          width={439}
          height={512}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <span className="fig__num">Fig. 3</span>Assembly CAD integrating the
          actuator and linkage
        </figcaption>
      </figure>

      <h2>Analysis &amp; Validation</h2>

      <p>
        We used free-body diagrams to evaluate force transmission through the
        scissor linkage and compare the required load with the actuator’s
        capacity.
      </p>

      <p>
        The calculations indicated that the actuator would limit performance
        before the aluminum linkage reached its structural capacity. Because
        force transmission depends on linkage geometry and load distribution,
        the analysis guided how we interpreted the prototype’s behavior.
      </p>

      <p>
        Testing supported this finding: the linkage remained intact while the
        actuator stalled under heavier loading.
      </p>

      <div className="fig-pair">
        <figure className="fig">
          <Image
            src="/assets/photos/projects/compactor_force.jpg"
            alt="Hand calculations for force transmission through the linkage system"
            width={473}
            height={512}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 4</span>Force transmission
            calculations
          </figcaption>
        </figure>

        <figure className="fig">
          <Image
            src="/assets/photos/projects/compactor_fos.jpg"
            alt="Hand calculations for factor of safety"
            width={407}
            height={512}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="fig__num">Fig. 5</span>Factor of safety
            calculations
          </figcaption>
        </figure>
      </div>

      <h2>Fabrication &amp; Iteration</h2>

      <p>
        We shared milling, turning, 3D printing, assembly, and testing. The
        linkage used manually machined aluminum bars and rods, while the custom
        actuator mounts were 3D printed. We integrated the mechanism with the
        enclosure, electronics, compression plate, hinges, and lid-locking
        hardware.
      </p>

      <p>
        The prototype completed the automated cycle, but heavier loads exceeded
        the actuator’s capacity. A higher-capacity actuator is the next design
        change to evaluate, followed by a new assessment of linkage, mount, and
        lid loads.
      </p>

      <h2>Manufacturing &amp; Cost</h2>

      <p>
        The prototype used manual machining, 3D printing, and a wooden enclosure
        for rapid fabrication. I contributed to the production proposal by
        selecting component manufacturing processes and refining geometry for
        the proposed methods and assembly sequence. These proposals would
        require supplier review before production.
      </p>

      <h2>Results</h2>

      <p>
        We demonstrated automated compaction within a standalone trash-bin
        enclosure. Testing identified actuator capacity as the performance limit
        before observed linkage failure, giving the next iteration a specific
        component and load case to address.
      </p>
    </>
  );
}

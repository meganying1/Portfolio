import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

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
        Engineering Design Expo in December 2024.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 1,
            src: "/assets/photos/projects/compactor_final.jpg",
            width: 258,
            height: 380,
            alt: "Completed wooden trash compactor with lid and viewing window",
            caption: "Fabricated enclosure houses the powered compactor",
          },
          {
            number: 2,
            src: "/assets/photos/projects/compactor-linkage.jpg",
            width: 1448,
            height: 1848,
            alt: "Machined scissor links, compression plate, linear actuator, and black actuator mounts",
            caption:
              "Machined links and printed mounts connect the actuator to the compression plate",
            crop: { x: 110, y: 300, width: 1220, height: 1400 },
          },
        ]}
      />

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

      <ProjectFigure
        number={3}
        src="/assets/photos/projects/compactor_cad.png"
        width={439}
        height={512}
        alt="Scissor linkage assembly with the actuator positioned between two custom mounts"
        caption="SolidWorks assembly packages the actuator and custom mounts within the scissor linkage"
        compact
      />

      <h2>Analysis &amp; validation</h2>

      <p>
        We used free-body diagrams to evaluate force transmission through the
        scissor linkage and compare the required load with the actuator’s
        capacity.
      </p>

      <ProjectFigure
        number={4}
        src="/assets/photos/projects/compactor_fbd_clean.png"
        width={1536}
        height={1024}
        crop={{ x: 125, y: 230, width: 1385, height: 540 }}
        alt="Scissor-linkage support and free-body diagrams with actuator forces, support reactions, and plate loading"
        caption="Scissor-linkage free-body diagrams relate geometry to actuator force"
      />

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

      <h2>Fabrication &amp; iteration</h2>

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

      <h2>Manufacturing &amp; cost</h2>

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

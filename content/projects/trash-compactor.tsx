import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function TrashCompactorContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        In a team of five, we built a standalone trash compactor with a linear
        actuator and scissor linkage that raise a compression plate against the
        lid. I developed the SolidWorks assembly and designed custom actuator
        mounts to connect the actuator to the linkage within the enclosure. The
        working prototype completed an automated compaction cycle and received
        the Best Overall Project Award at Carnegie Mellon’s Mechanical
        Engineering Design Expo in December 2024.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 1,
            src: "/assets/photos/projects/compactor_compression.gif",
            width: 320,
            height: 452,
            alt: "Prototype compression stroke with the scissor linkage extending and compression plate rising against paper waste",
            caption:
              "Scissor linkage raises the compression plate against the paper waste",
          },
          {
            number: 2,
            src: "/assets/photos/projects/compactor-linkage.jpg",
            width: 1448,
            height: 1848,
            alt: "Machined scissor links, compression plate, linear actuator, and black actuator mounts",
            caption: "Machined linkage with printed actuator mounts",
            crop: { x: 110, y: 300, width: 1220, height: 1400 },
          },
        ]}
      />

      <h2>Design</h2>

      <p>
        Benchmarking and a weighted concept comparison led us to a standalone,
        actuator-driven scissor linkage beneath the trash compartment. We chose
        this mechanism to convert a short horizontal actuator stroke into the
        larger vertical plate travel needed for compaction while keeping the
        actuator beneath the waste. The plate rises vertically, compresses waste
        against the locked lid, holds for approximately ten seconds, and
        retracts automatically.
      </p>

      <p>
        The actuator’s fixed hole pattern and limited mounting locations
        constrained its position. I designed custom mounts around those
        interfaces to connect the actuator to the linkage and transfer load
        within the available space. I used assembly CAD to integrate these
        interfaces with the surrounding structure before fabrication.
      </p>

      <ProjectFigure
        number={3}
        src="/assets/photos/projects/compactor_cad.png"
        width={439}
        height={512}
        alt="Scissor linkage assembly with the actuator positioned between two custom mounts"
        caption="CAD assembly of the linkage and actuator mounts"
        compact
      />

      <h2>Analysis &amp; validation</h2>

      <p>
        We used free-body diagrams and linkage geometry to evaluate force
        transmission at the minimum link angle of 8.2°. For a 44 lbf actuator,
        we compared two support load cases. In the worst case, the roller
        carried the full vertical load and the pin carried no vertical reaction,
        giving a supported-load estimate of 6.4 lbf. In the best case, the pin
        and roller shared the vertical load equally, increasing the estimate to
        12.8 lbf. These loads include the linkage, plate, and waste weight.
      </p>

      <ProjectFigure
        number={4}
        src="/assets/photos/projects/compactor_fbd_clean.png"
        width={1536}
        height={1024}
        crop={{ x: 125, y: 230, width: 1385, height: 540 }}
        alt="Scissor-linkage support and free-body diagrams with actuator forces, support reactions, and plate loading"
        caption="Calculations for determining scissor-linkage load capacity and support reactions"
      />

      <p>
        An axial-stress calculation checked the aluminum links at 6.4 and 60 lbf
        load cases against an assumed 40 ksi yield strength for 6061 aluminum.
        Predicted stresses of approximately 35 and 323 psi suggested actuator
        capacity would limit the system before bar yielding under those modeled
        loads.
      </p>

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We shared milling, turning, 3D printing, assembly, and testing. The
        linkage used manually machined aluminum bars and rods, while the custom
        actuator mounts were 3D printed. We integrated the mechanism with the
        enclosure, electronics, compression plate, hinges, and lid-locking
        hardware. I contributed my knowledge of manufacturing processes to the
        production proposal, selecting component processes and refining part
        geometry for the proposed methods and assembly sequence.
      </p>

      <p>
        The prototype completed the automated cycle, but the actuator stalled
        under heavier loads while the linkage remained intact. We suspected
        insufficient actuator capacity, consistent with the force model. A
        higher-capacity actuator was proposed, with linkage, mount, and lid
        loads to be reassessed before that change.
      </p>

      <h2>Results</h2>

      <p>
        We demonstrated automated compaction within a standalone trash-bin
        enclosure and received the Best Overall Project Award at CMU’s December
        2024 design expo. Testing and analysis identified actuator capacity as
        the limiting factor in compaction performance, guiding our plan to use a
        higher-capacity actuator in a future prototype.
      </p>
    </>
  );
}

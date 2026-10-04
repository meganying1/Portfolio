import { ProjectFigure, ProjectFigurePair } from "@/components/project-figure";

export default function TrashCompactorContent() {
  return (
    <>
      <h2>Overview</h2>

      <p>
        Our team built a standalone trash compactor to compress household waste
        in a powered cycle. I developed the SolidWorks assembly and custom
        mounts connecting the linear actuator to the scissor linkage. The
        prototype completed an automated compaction cycle and received the Best
        Overall Project Award at Carnegie Mellon’s Mechanical Engineering Design
        Expo.
      </p>

      <ProjectFigurePair
        figures={[
          {
            number: 1,
            src: "/assets/photos/projects/compactor_final.jpg",
            width: 258,
            height: 380,
            alt: "Completed wooden trash compactor with lid and viewing window",
            caption: "Completed compactor prototype",
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
        Benchmarking showed a gap between permanently installed compactors and
        alternatives that require manual force. We compared concepts using
        weighted criteria and focused on a standalone device with powered
        compression, a compact footprint, and straightforward operation.
      </p>

      <p>
        We selected a scissor linkage to convert a short horizontal actuator
        stroke into the larger vertical plate travel needed for compaction while
        keeping the actuator beneath the trash compartment. During a cycle, the
        plate rises against the locked lid, holds for approximately ten seconds,
        and retracts.
      </p>

      <p>
        The actuator’s fixed hole pattern and limited mounting locations
        constrained the interface. I designed mounts around those holes and
        positioned the actuator in the assembly CAD to transfer force into the
        linkage within the available space.
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
        We used free-body diagrams to trace actuator force through the scissor
        linkage and compare the load on the plate with the actuator’s capacity
        and the strength of the aluminum links. We compared two support cases to
        estimate how load sharing affected capacity: a worst case with the
        roller carrying the full load, and a best case with equal load sharing
        between the pin and roller. These assumptions gave a predicted
        supported-load range of 6.4–12.8 lb before actuator stall.
      </p>

      <ProjectFigure
        number={4}
        src="/assets/photos/projects/compactor_fbd_clean.png"
        width={1536}
        height={1024}
        crop={{ x: 125, y: 230, width: 1385, height: 540 }}
        alt="Scissor-linkage support and free-body diagrams with actuator forces, support reactions, and plate loading"
        caption="Actuator force and support reactions in the scissor linkage"
      />

      <h2>Fabrication &amp; iteration</h2>

      <p>
        We machined aluminum bars and rods with a manual mill and lathe, then
        milled L-brackets to connect the links to the compression plate. I
        designed the actuator interfaces in SolidWorks, and we 3D printed them
        in PLA. We cut and assembled the wooden enclosure, securing the panels,
        hinges, and locking hardware with screws. I also used my knowledge of
        manufacturing processes to help refine part geometry for the production
        proposal.
      </p>

      <p>
        We integrated the mechanism with the electronics and tested the full
        compaction cycle. Under heavier loads, the actuator stalled while the
        linkage remained intact, identifying actuator capacity as the limit on
        compression and leading us to recommend a stronger actuator.
      </p>

      <h2>Results</h2>

      <p>
        We built a standalone compactor that completed an automated cycle,
        raising the compression plate against a locked lid, holding, and
        retracting.
      </p>

      <p>
        The project received the Best Overall Project Award at Carnegie Mellon’s
        Mechanical Engineering Design Expo in December 2024.
      </p>
    </>
  );
}

import type { ComponentType } from "react";
import BatteryDoorContent from "./projects/battery-door";
import TrashCompactorContent from "./projects/trash-compactor";
import TripodAttachmentContent from "./projects/tripod-attachment";
import LinkageSystemContent from "./projects/linkage-system";
import WellDrillerContent from "./projects/well-driller";
import MobileRobotContent from "./projects/mobile-robot";
import TrussStructureContent from "./projects/truss-structure";
import NoiseReductionContent from "./projects/noise-reduction";
import ChineseCheckersContent from "./projects/chinese-checkers";

export const projectContent: Record<string, ComponentType> = {
  "battery-door": BatteryDoorContent,
  "trash-compactor": TrashCompactorContent,
  "tripod-attachment": TripodAttachmentContent,
  "linkage-system": LinkageSystemContent,
  "well-driller": WellDrillerContent,
  "mobile-robot": MobileRobotContent,
  "truss-structure": TrussStructureContent,
  "noise-reduction": NoiseReductionContent,
  "chinese-checkers": ChineseCheckersContent,
};

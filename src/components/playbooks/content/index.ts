import type { Character, CustomTextFields, PlaybookBase } from "../types"
import { playbookKeys } from "../types"
import { americanPlaybook } from "./american"
import { blankPlaybook } from "./blank"
import { dodgerPlaybook } from "./dodger"
import { explorerPlaybook } from "./explorer"
import { facsimilePlaybook } from "./facsimile"
import { factotumPlaybook } from "./factotum"
import { informalsPlaybook } from "./informals"
import { legacyPlaybook } from "./legacy"
import { martianPlaybook } from "./martian"
import { motherPlaybook } from "./mother"
import { orphanPlaybook } from "./orphan"
import { undeniablePlaybook } from "./undeniable"
import { unquietPlaybook } from "./unquiet"
import { vesselPlaybook } from "./vessel"

export const playbookBases: Record<(typeof playbookKeys)[keyof typeof playbookKeys], PlaybookBase> = {
  [playbookKeys.custom]: blankPlaybook,
  [playbookKeys.american]: americanPlaybook,
  [playbookKeys.dodger]: dodgerPlaybook,
  [playbookKeys.explorer]: explorerPlaybook,
  [playbookKeys.factotum]: factotumPlaybook,
  [playbookKeys.legacy]: legacyPlaybook,
  [playbookKeys.martian]: martianPlaybook,
  [playbookKeys.mother]: motherPlaybook,
  [playbookKeys.orphan]: orphanPlaybook,
  [playbookKeys.undeniable]: undeniablePlaybook,
  [playbookKeys.vessel]: vesselPlaybook,
  [playbookKeys.informals]: informalsPlaybook,
  [playbookKeys.unquiet]: unquietPlaybook,
  [playbookKeys.facsimile]: facsimilePlaybook,
}

export function customFieldOrFallback(
  character: Character,
  key: keyof CustomTextFields,
): {
  key: keyof CustomTextFields
  value: string[]
} {
  if (character.playbook !== playbookKeys.custom) {
    return { key: key, value: [""] }
  }
  const rawText = character.customTextFields?.[key]

  if (!rawText) {
    return { key: key, value: [""] }
  }

  switch (key) {
    case "masksOfFutureDefinitions":     {
      //string[]
      return { key: "masksOfFutureDefinitions", value: rawText as string[] }
    }
    case "masksOfPastDefinitions":
      //string[]
      return { key: "masksOfPastDefinitions", value: rawText as string[] }
    case "questionDefinitions":
      //string[]
      return { key: "questionDefinitions", value: rawText as string[] }
  }
}

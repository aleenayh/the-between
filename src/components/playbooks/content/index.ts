import type { Character, CustomTextFields, masksFutureKey, PlaybookBase } from "../types"
import { masksFutureKeys, playbookKeys } from "../types"
import { americanPlaybook } from "./american"
import { explorerPlaybook } from "./explorer"
import { factotumPlaybook } from "./factotum"
import { motherPlaybook } from "./mother"
import { orphanPlaybook } from "./orphan"
import { undeniablePlaybook } from "./undeniable"
import { vesselPlaybook } from "./vessel"

const blankPlaybook: PlaybookBase = {
  title: "Community-Created Playbook",
  intro: [],
  names: { firstName: [], surname: [] },
  look: [],
  vices: [],
  questions: [],
  abilities: {
    vitality: 0,
    composure: 0,
    reason: 0,
    presence: 0,
    sensitivity: 0,
  },
  masksOfPast: [],
  masksOfFuture: {
    "The Guilded Door":
      "Take the following Condition: Most-Beloved. Tell the other Hunters they can no longer choose The Gilded Door on their own playbook (this does not count as being marked for them). You can never clear Most-Beloved.",
    "The Moss-Covered Gate": "",
    "The Darkened Threshold": "",
    "The Cosmic Passage": "",
    "The Blood-Soaked Portal": "Narrate a scene in which you are physically destroyed. This character is now retired. ",
  },
  startingMoves: [],
  moves: [],
  advancements: [
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Write a custom move for your character.",
    "Write a custom move for your character.",
    "Write a custom move for your character.",
    "Unmark everything in your Personal Quarters.",
  ],
}

export const playbookBases: Record<(typeof playbookKeys)[keyof typeof playbookKeys], PlaybookBase> = {
  [playbookKeys.custom]: blankPlaybook,
  [playbookKeys.american]: americanPlaybook,
  [playbookKeys.explorer]: explorerPlaybook,
  [playbookKeys.factotum]: factotumPlaybook,
  [playbookKeys.mother]: motherPlaybook,
  [playbookKeys.orphan]: orphanPlaybook,
  [playbookKeys.undeniable]: undeniablePlaybook,
  [playbookKeys.vessel]: vesselPlaybook,
}

export function customFieldOrFallback(
  character: Character,
  key: keyof CustomTextFields,
): {
  key: keyof CustomTextFields
  value: string[] | Record<masksFutureKey, string> | Record<number, string>
} {
  const rawText = character.customTextFields?.[key]

  if (!rawText) {
    return { key: key, value: [""] }
  }

  switch (key) {
    case "masksOfFutureDefinitions": {
      //record <masksFutureKey, string>
      const strippedOfKeys = rawText.map((text) => text.split(":")[1].trim())
      const record = Object.fromEntries(
        strippedOfKeys.map((text, index) => [Object.keys(masksFutureKeys)[index], text]),
      )
      return {
        key: "masksOfFutureDefinitions",
        value: record as Record<masksFutureKey, string>,
      }
    }
    case "masksOfPastDefinitions":
      //string[]
      return { key: "masksOfPastDefinitions", value: rawText as string[] }
    case "questionDefinitions":
      //string[]
      return { key: "questionDefinitions", value: rawText as string[] }
  }
}

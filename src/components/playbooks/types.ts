import { z } from "zod"
import { catchWithWarning } from "../../utils/schemaValidation"

export const abilitiesSchema = z.object({
  vitality: z.number(),
  composure: z.number(),
  reason: z.number(),
  presence: z.number(),
  sensitivity: z.number(),
})

export type Abilities = z.infer<typeof abilitiesSchema>

export const abilitiesKeys = {
  vitality: "vitality",
  composure: "composure",
  reason: "reason",
  presence: "presence",
  sensitivity: "sensitivity",
} as const

export const playbookBaseSchema = z.object({
  title: z.string(),
  intro: z.array(z.string()),
  names: z.record(z.string(), z.array(z.string())), //includes first name, last name, title, nickname, etc.
  look: z.array(z.string()),
  vices: z.array(z.string()),
  questions: z.array(z.string()),
  abilities: abilitiesSchema,
  masksPastDescription: z.string().optional(),
  masksOfPast: z.array(z.string()),
  masksOfFutureDescription: z.string().optional(),
  masksOfFuture: z.array(z.string()),
  startingMoves: z.array(z.string()),
  moves: z.array(
    z.object({
      title: z.string(),
      text: z.array(z.string()),
      checkboxes: z.number().optional(),
      extraLines: z.number().optional(),
    }),
  ),
  advancements: z.array(z.string()),
})

export type PlaybookBase = z.infer<typeof playbookBaseSchema>

export type PlaybookMove = {
  title: string
  text: string[]
  checkboxes?: number
  extraLines?: number
}

export const playbookKeys = {
  american: "american",
  explorer: "explorer",
  factotum: "factotum",
  mother: "mother",
  orphan: "orphan",
  undeniable: "undeniable",
  vessel: "vessel",
  informals: "informals",
  unquiet: "unquiet",
  facsimile: "facsimile",
  custom: "custom",
} as const

export const playbookKeysTuple = [...Object.values(playbookKeys).filter((key) => key !== playbookKeys.informals)] as const

export type playbookKey = (typeof playbookKeys)[keyof typeof playbookKeys]

const defaultAbilities: Abilities = {
  vitality: 0,
  composure: 0,
  reason: 0,
  presence: 0,
  sensitivity: 0,
}

const customTextFieldsSchema = z.object({
  questionDefinitions: z
    .array(z.string())
    .optional()
    .catch(catchWithWarning("customTextFields.questionDefinitions", undefined)),
  masksOfFutureDefinitions: z
    .array(z.string())
    .optional()
    .catch(catchWithWarning("customTextFields.masksOfFutureDefinitions", undefined)),
  masksOfPastDefinitions: z
    .array(z.string())
    .optional()
    .catch(catchWithWarning("customTextFields.masksOfPastDefinitions", undefined)),
})

export type CustomTextFields = z.infer<typeof customTextFieldsSchema>

export const characterSchema = z.object({
  playbook: z.enum(playbookKeysTuple),
  playerId: z.string(),
  name: z.string(),
  look: z.string().catch(catchWithWarning("character.look", "")),
  vice: z.string().catch(catchWithWarning("character.vice", "")),
  masksOfPast: z.array(z.number()).catch(catchWithWarning("character.masksOfPast", [0, 0, 0, 0, 0, 0, 0])),
  masksOfFuture:  z.array(z.number()).catch(catchWithWarning("character.masksOfFuture", [0, 0, 0, 0, 0])),
  conditions: z.array(z.string()).catch(catchWithWarning("character.conditions", ["", "", ""])),
  moves: z
    .array(
      z.object({
        title: z.string(),
        text: z.array(z.string()).optional(), //only necessary for custom moves
        checks: z.array(z.number()).optional().catch([]),
        lines: z.array(z.string()).optional().catch([]),
      }),
    )
    //no warning - empty moves array is valid, but dropped by firebase
    .catch([]),
  advancements: z.array(z.number()).catch(catchWithWarning("character.advancements", [0, 0, 0, 0, 0, 0, 0])),
  abilities: abilitiesSchema.catch(catchWithWarning("character.abilities", defaultAbilities)),
  personalQuarters: z
    .array(
      z.object({
        text: z.string().catch(""),
        marked: z.boolean().catch(false),
      }),
    )
    .catch(catchWithWarning("character.personalQuarters", [])),
  experience: z.number().catch(catchWithWarning("character.experience", 0)),
  questions: z.array(z.number()).catch(catchWithWarning("character.questions", [0, 0, 0, 0, 0])),
  customTextFields: customTextFieldsSchema.optional().catch({}),
  isHerald: z.boolean().catch(catchWithWarning("character.isHerald", false)),
})

export type Character = z.infer<typeof characterSchema>

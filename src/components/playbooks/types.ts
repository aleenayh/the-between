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

export const masksFutureKeys = {
  "The Guilded Door": "The Guilded Door",
  "The Moss-Covered Gate": "The Moss-Covered Gate",
  "The Darkened Threshold": "The Darkened Threshold",
  "The Cosmic Passage": "The Cosmic Passage",
  "The Blood-Soaked Portal": "The Blood-Soaked Portal",
} as const

const masksFutureKeysTuple = [
  "The Guilded Door",
  "The Moss-Covered Gate",
  "The Darkened Threshold",
  "The Cosmic Passage",
  "The Blood-Soaked Portal",
] as const

export type masksFutureKey = (typeof masksFutureKeys)[keyof typeof masksFutureKeys]

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
  masksOfFuture: z.record(z.enum(masksFutureKeysTuple), z.string()),
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

export const candleSchema = z.object({
  checks: z.number(),
  aspect: z.string(),
  complication: z.string().optional(),
})

export type Candle = z.infer<typeof candleSchema>

export const coreMoveStateSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("custom"),
  }),
])

export type CoreMoveState = z.infer<typeof coreMoveStateSchema>

export const playbookKeys = {
  american: "american",
  explorer: "explorer",
  factotum: "factotum",
  mother: "mother",
  orphan: "orphan",
  undeniable: "undeniable",
  vessel: "vessel",
  custom: "custom",
} as const

const playbookKeysTuple = [...Object.values(playbookKeys)] as const

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
  masksOfFuture: z.record(z.enum(masksFutureKeysTuple), z.boolean()).catch(
    catchWithWarning("character.masksOfFuture", {
      "The Guilded Door": false,
      "The Moss-Covered Gate": false,
      "The Darkened Threshold": false,
      "The Cosmic Passage": false,
      "The Blood-Soaked Portal": false,
    }),
  ),
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
  coreMoveState: coreMoveStateSchema,
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
})

export type Character = z.infer<typeof characterSchema>

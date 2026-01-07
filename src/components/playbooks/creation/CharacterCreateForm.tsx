import { useId, useState } from "react"
import { type UseFormRegister, type UseFormSetValue, type UseFormWatch, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { useGame } from "../../../context/GameContext"
import { PlayerRole } from "../../../context/types"
import { Section } from "../../shared/Section"
import { playbookBases } from "../content"
import { heraldPlaybookAdditions } from "../content/herald"
import { type Abilities, type Character, type PlaybookBase, type playbookKey, playbookKeys } from "../types"
import { convertToTitle, parseStaticText } from "../utils"
import { PencilIconButton } from "./PencilIconButton"


function getRandomValue(array: string[]): string {
  if (array.length === 0) {
    return ""
  }
  const item = array[Math.floor(Math.random() * array.length)]
  return item ?? array[0] ?? ""
}

type CharacterCreateFormInputs = {
  isHerald: boolean;
  moves: string[]
  name: string
  look1: string
  look2: string
  look3: string
  vice: string
  vitality: number
  composure: number
  reason: number
  presence: number
  sensitivity: number
}

export function CharacterCreateForm({ playbookKey }: { playbookKey: Exclude<playbookKey, "custom" | "informals"> }) {
  const { updateGameState, user, gameState } = useGame()
  const base: PlaybookBase = playbookBases[playbookKey]
  const [step, setStep] = useState<"basics" | "moves">("basics")

  const maxMoves = playbookKey === playbookKeys.unquiet || playbookKey === playbookKeys.explorer ? base.startingMoves.length : base.startingMoves.length + 1

  const { register, handleSubmit, setValue, watch } = useForm<CharacterCreateFormInputs>({
    defaultValues: {
      moves: [
        ...(base.moves.filter((move) => base.startingMoves.includes(move.title)).map((move) => move.title) ?? ""),
      ],
      name: "",
      isHerald: false,
      look1: getRandomValue(base.look),
      look2: getRandomValue(base.look),
      look3: getRandomValue(base.look),
      vice: getRandomValue(base.vices),
      vitality: base.abilities.vitality,
      composure: base.abilities.composure,
      reason: base.abilities.reason,
      presence: base.abilities.presence,
      sensitivity: base.abilities.sensitivity,
    },
  })

  const checkMove = (moveTitle: string, checked: boolean) => {
    const currentMoves = watch("moves")
    if (checked) {
      setValue("moves", [...currentMoves, moveTitle])
    } else {
      setValue(
        "moves",
        currentMoves.filter((m) => m !== moveTitle),
      )
    }
    if (currentMoves.length > maxMoves) {
      toast(`You can only select ${maxMoves} moves, including your starting move(s). Please remove one.`)
    }
  }

  const saveCharacter = (formInputs: CharacterCreateFormInputs) => {
    if (formInputs.moves.length > maxMoves) {
      toast.error(`You can only select ${maxMoves} moves, including your starting move(s).`)
      return
    }
    const character = constructCharacter(playbookKey, base, formInputs, user.id)

    const existingPlayerIndex = gameState.players.findIndex((p) => p.id === user.id)

    const updatedPlayers =
      existingPlayerIndex >= 0
        ? gameState.players.map((player) => (player.id === user.id ? { ...player, character } : player))
        : [
            ...gameState.players,
            {
              id: user.id,
              name: user.name,
              lastRoll: null,
              role: PlayerRole.PLAYER,
              character,
            },
          ]

    const heraldUnlocked = formInputs.isHerald ? false : gameState.heraldUnlocked

    updateGameState({ players: updatedPlayers, heraldUnlocked })
  }

  return (
    <form onSubmit={handleSubmit(saveCharacter)} className="flex flex-col gap-2 justify-center">
      {step === "basics" && (
        <div>
          <h1 className="text-2xl font-bold text-center">{base.title}</h1>

          {gameState.heraldUnlocked && playbookKey !== playbookKeys.orphan &&							<div><h1 className="font-bold text-center text-theme-text-accent text-lg">        
								( And The Herald …? )
							</h1>
							<p className="text-left text-sm">This game has unlocked <i>The Herald</i>. The Herald is not a complete playbook, but rather a special sheet that, once unlocked by The Informals, can be added to another playbook during character creation. Some playbooks may not be a good fit with this sheet; discuss it with your Keeper if you’re unsure. 
							</p>
							<div className="flex justify-center items-center gap-2"><input type="checkbox" {...register("isHerald")} /><label htmlFor="isHerald" className=        "text-left text-lg text-theme-text-accent font-[RumbleBrave] letter-spacing-widest">Yes, I am the Herald</label></div>

							</div>}
          <Section title="Your Story" collapsible>
            <div className="mt-0 flex flex-col justify-center w-full">
              <div
                className={`text-left text-sm flex flex-col gap-2 italic transition-all duration-300 overflow-hidden h-auto opacity-100`}
              >
                {base.intro.map((intro) => (
                  <p key={intro}>{parseStaticText(intro)}</p>
                ))}{" "}
                {watch("isHerald") && <p>{heraldPlaybookAdditions.intro?.map((intro) => parseStaticText(intro)).join(" ")}</p>}
              </div>
            </div>
          </Section>
          <Section title="Choose A Name">
            <NameSelector names={base.names} setValue={setValue} />
          </Section>

          {/* Looks - 3 */}
          <Section title="Build Your Look">
            <LookSelector options={base.look} register={register} setValue={setValue} watch={watch} />
          </Section>

          <Section title="Choose A Vice">
            <SelectOrEdit name="vice" options={base.vices} register={register} />
          </Section>

          <Section title="Add 1 to Any Ability">
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-5 gap-1">
                {(Object.entries(base.abilities) as [keyof Abilities, number][]).map(([stat, value]) => (
                  <div key={stat} className="flex flex-col-reverse md:flex-col gap-1">
                    <label htmlFor={stat} className="flex flex-col gap-1">
                      <span className="text-xs md:text-sm text-theme-text-muted whitespace-nowrap overflow-hidden text-ellipsis">
                        {stat}
                      </span>
                    </label>
                    <input
                      id={stat}
                      type="number"
                      defaultValue={value}
                      {...register(stat, { valueAsNumber: true })}
                      className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <button
            type="button"
            onClick={() => setStep("moves")}
            className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
          >
            Continue to Choose Moves
          </button>
        </div>
      )}

      {step === "moves" && (
        <div>
          <h1 className="text-2xl font-bold text-center">{base.title}</h1>
          <p>
            You start with {base.startingMoves.map((move) => `"${move}"`).join(" & ")}.{" "}
            {playbookKey === playbookKeys.explorer || playbookKey === playbookKeys.unquiet ? "" : "Select one additional move from below."}
          </p>

          <div className="flex flex-col gap-2 text-left">
            {base.moves.map((move) => (
              <div key={move.title} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked={base.startingMoves.includes(move.title)}
                    disabled={base.startingMoves.includes(move.title)}
                    value={move.title}
                    onChange={(e) => checkMove(e.target.value, e.target.checked)}
                  />
                  <h2 className="text-lg font-bold">{move.title}</h2>
                </div>
                <div className="flex flex-col gap-2">
                                  {move.text.map((p) => (
                    <p className="text-sm" key={p}>{parseStaticText(p)}</p>
                  ))}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 w-full justify-evenly">
            <button
              type="button"
              onClick={() => setStep("basics")}
              className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
            >
              Return to Previous Page
            </button>
            <button
              type="submit"
              className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
            >
              Save Character
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

type SelectOrEditFieldName = keyof Pick<CharacterCreateFormInputs, "look1" | "look2" | "look3" | "vice">

function NameSelector({
  names,
  setValue,
}: {
  names: Record<string, string[]>
  setValue: UseFormSetValue<CharacterCreateFormInputs>
}) {
  const nameFields = Object.fromEntries(Object.keys(names).map((key) => [key, getRandomValue(names[key])]))
  const { register, watch } = useForm<{ [key: string]: string }>({
    defaultValues: nameFields,
  })

  const constructedName = Object.values(nameFields)
    .map((value) => value)
    .join(" ")
  setValue("name", constructedName)

  const onBlur = () => {
    const values = watch()
    const constructedName = Object.values(values)
      .map((value) => value)
      .join(" ")
    setValue("name", constructedName)
  }

  return (
    <form onBlur={onBlur} className="flex flex-col gap-2 md:grid md:grid-cols-2">
      {Object.keys(names).map((key) => (
        <div key={key} className="flex flex-col gap-2">
          <h3 className="text-sm text-theme-text-primary italic">{convertToTitle(key)}</h3>
          <ControlledSelectOrEdit options={names[key]} name={key} onBlur={onBlur} register={register} />
        </div>
      ))}
    </form>
  )
}

function LookSelector({
  options,
  register,
  setValue,
  watch,
}: {
  options: string[]
  register: UseFormRegister<CharacterCreateFormInputs>
  setValue: UseFormSetValue<CharacterCreateFormInputs>
  watch: UseFormWatch<CharacterCreateFormInputs>
}) {
  // Read current look values directly from the form
  const look1 = watch("look1")
  const look2 = watch("look2")
  const look3 = watch("look3")
  const selectedLooks = [look1, look2, look3].filter(Boolean)

  const toggleLook = (option: string) => {
    if (selectedLooks.includes(option)) {
      // Remove - shift remaining looks up
      const remaining = selectedLooks.filter((look) => look !== option)
      setValue("look1", remaining[0] ?? "")
      setValue("look2", remaining[1] ?? "")
      setValue("look3", remaining[2] ?? "")
    } else if (selectedLooks.length < 3) {
      // Add to next empty slot
      if (!look1) setValue("look1", option)
      else if (!look2) setValue("look2", option)
      else if (!look3) setValue("look3", option)
    } else {
      // At limit, replace oldest (shift and add new at end)
      setValue("look1", look2)
      setValue("look2", look3)
      setValue("look3", option)
    }
  }

  return (
    <>
      {/* Desktop: 3 separate selects */}
      <div className="hidden sm:flex flex-col gap-2 justify-stretch items-stretch">
        <SelectOrEdit name="look1" options={options} register={register} />
        <SelectOrEdit name="look2" options={options} register={register} />
        <SelectOrEdit name="look3" options={options} register={register} />
      </div>

      {/* Mobile: checklist with exactly 3 selections */}
      <div className="sm:hidden flex flex-col gap-1 w-full">
        <p className="text-sm text-theme-text-muted mb-1">Select 3 ({selectedLooks.length}/3)</p>

        {options.map((option) => {
          const isSelected = selectedLooks.includes(option)
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleLook(option)}
              className={`flex items-start gap-2 px-2 py-1.5 rounded-lg text-left transition-colors ${
                isSelected
                  ? "bg-theme-bg-accent text-theme-text-accent"
                  : "bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent/50"
              }`}
            >
              <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">{isSelected && "✓"}</span>
              <span className="whitespace-normal">{option}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}

function SelectOrEdit({
  options,
  name,
  register,
}: {
  options: string[]
  name: SelectOrEditFieldName
  register: UseFormRegister<CharacterCreateFormInputs>
}) {
  const id = useId()
  const [isEditing, setIsEditing] = useState(false)
  const { ref, onChange, ...rest } = register(name)

  if (options.length === 0) {
    return <input {...register(name)} type="text" className="border px-2 py-1 flex-grow" />
  }

  return (
    <div className="inline-flex items-center gap-1 flex-grow">
      {isEditing ? (
        <input
          {...rest}
          ref={(input) => {
            ref(input)
            input?.focus()
          }}
          id={id}
          type="text"
          onChange={onChange}
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              setIsEditing(false)
            }
          }}
          className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
        />
      ) : (
        <select
          {...register(name)}
          id={id}
          className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      <PencilIconButton isEditing={isEditing} setIsEditing={setIsEditing} />
    </div>
  )
}

function ControlledSelectOrEdit({
  register,
  name,
  options,
  onBlur,
}: {
  register: UseFormRegister<{ [key: string]: string }>
  name: string
  options: string[]
  onBlur: () => void
}) {
  const id = useId()
  const [isEditing, setIsEditing] = useState(false)

  if (options.length === 0) {
    return <input {...register(name)} onBlur={onBlur} type="text" className="border px-2 py-1 flex-grow" />
  }

  return (
    <div className="inline-flex items-center gap-1 flex-grow">
      {isEditing ? (
        <input
          {...register(name)}
          id={id}
          type="text"
          onBlur={() => {
            setIsEditing(false)
            onBlur()
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              setIsEditing(false)
            }
          }}
          className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
        />
      ) : (
        <select
          {...register(name)}
          onChange={onBlur}
          id={id}
          className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      <PencilIconButton isEditing={isEditing} setIsEditing={setIsEditing} />
    </div>
  )
}

function constructCharacter(
  playbookKey: Exclude<playbookKey, "custom" | "informals">,
  base: PlaybookBase,
  formInputs: CharacterCreateFormInputs,
  playerId: string,
): Character {
  const { name, look1, look2, look3, vitality, composure, reason, presence, sensitivity, isHerald } = formInputs

  const playbookMoves = base.moves.filter((move) => formInputs.moves.includes(move.title))
  const moves = playbookMoves.map((move) => ({
    title: move.title,
    checks: {
      ...(move.checkboxes ? Array.from({ length: move.checkboxes }, () => 0) : []),
    },
    lines: {
      ...(move.extraLines ? Array.from({ length: move.extraLines }, () => "") : []),
    },
  }))

  const conditions: string[] = ["", "", ""]

  const advancements = Array.from({ length: 7 }, () => 0);

  return {
    playbook: playbookKey,
    isHerald,
    playerId,
    name,
    look: `${look1.charAt(0).toUpperCase() + look1.slice(1)}, ${look2}, ${look3}`,
    vice: formInputs.vice,
    abilities: {
      vitality,
      composure,
      reason,
      presence,
      sensitivity,
    },
    masksOfPast: Array.from({ length: base.masksOfPast.length }, () => 0),
    masksOfFuture: Array.from({ length: base.masksOfFuture.length }, () => 0),
    advancements,
    conditions,
    moves: isHerald ? [...moves, ...constructMoves(heraldPlaybookAdditions.moves ?? [])] : moves,
    experience: 0,
    questions: [0, 0, 0, 0, 0],
    personalQuarters: [{text: "", marked: false}],
    customTextFields: {},
  }
}

const constructMoves = (moves:PlaybookBase["moves"]) => {
  return moves.map((move) => ({
    title: move.title,
    text: move.text,
    checks: Array.from({ length: move.checkboxes ?? 0 }, () => 0),
    lines: Array.from({ length: move.extraLines ?? 0 }, () => ""),
  }))
}

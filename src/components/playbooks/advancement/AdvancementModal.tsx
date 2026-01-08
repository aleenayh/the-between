import { AnimatePresence, motion } from "framer-motion"
import { Dialog } from "radix-ui"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useGame } from "../../../context/GameContext"
import { playbookBases } from "../content"
import { orderAbilities } from "../sharedComponents/AbilityBoxes"
import type { Abilities, CharacterNotTroupe, playbookKey } from "../types"
import { parseStaticText } from "../utils"

type AdvancementSteps = "select-advancement" | "adjust-stats" | "select-move" | "write-custom-move" | "unmark-pq-items" | "unlock-rec" | "unmark-rec" | "doll-part" | "unlock-adaptor-key" | "custom-adaptor" | "unmark-hunterslife" | "unmark-reflection" | "unlock-energy"

const stepToComponent = (step: AdvancementSteps, character: CharacterNotTroupe, closeModal: () => void, advancementIndex: number|null) => {
  switch (step) {
    case "select-advancement":
      return null
    case "adjust-stats":
      return <AdjustStats character={character} closeModal={closeModal} advancementIndex={advancementIndex} />
    case "select-move":
      return <MoveSelector character={character} closeModal={closeModal} advancementIndex={advancementIndex} />
    case "write-custom-move":
      return <MoveWriter character={character} closeModal={closeModal} advancementIndex={advancementIndex} />
    case "unmark-pq-items":
      return <UnmarkPQItems character={character} closeModal={closeModal} advancementIndex={advancementIndex} />
    case "unlock-rec":
      return <AddChecksToMove character={character} closeModal={closeModal} advancementIndex={advancementIndex} numberOfChecks={2} titleOfMove="The Royal Explorer's Club" />
    case "unmark-rec":
      return <ClearChecksFromMove character={character} closeModal={closeModal} advancementIndex={advancementIndex} titleOfMove="The Royal Explorer's Club" />
    case "doll-part":
      return <DollPartAdvancement character={character} closeModal={closeModal} advancementIndex={advancementIndex} mode="upgrade"/>
    case "unlock-adaptor-key":
      return <DollPartAdvancement character={character} closeModal={closeModal} advancementIndex={advancementIndex} mode="add-key"/>
    case "custom-adaptor":
      return <DollPartAdvancement character={character} closeModal={closeModal} advancementIndex={advancementIndex} mode="custom"/>
    case "unmark-hunterslife":
      return <ClearChecksFromMove character={character} closeModal={closeModal} advancementIndex={advancementIndex} titleOfMove="A Hunter's life..." />
    case "unmark-reflection":
      return <ClearChecksFromMove character={character} closeModal={closeModal} advancementIndex={advancementIndex} titleOfMove="The Reflection" />
    case "unlock-energy":
      return <AddChecksToMove character={character} closeModal={closeModal} advancementIndex={advancementIndex} numberOfChecks={2} titleOfMove="The Phantom" />
  }
}

export function AdvancementModal({ character }: { character: CharacterNotTroupe }) {
    const [step, setStep] = useState<AdvancementSteps>("select-advancement")
  const [open, onOpenChange] = useState(false)
  const [advancementIndex, setAdvancementIndex] = useState<number | null>(null)

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setStep("select-advancement")
      setAdvancementIndex(null)
    }
    onOpenChange(open)
  }

  const { advancements: advancementProgress } = character
  const base = playbookBases[character.playbook]
  const advancementOptions = Object.keys(base.advancements).map((key) => ({
    id: parseInt(key, 10),
    title: base.advancements[parseInt(key, 10)],
  }))

  const handleChangeStep = (advancementIndex: number) => {
    setAdvancementIndex(advancementIndex)
    const step = mapStepToAdvancement(advancementIndex, character.playbook)
    setStep(step)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild className="DialogTrigger">
        <button type="button">Advancement</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute top-2 right-2 aspect-square w-8 h-8 bg-theme-bg-accent text-theme-text-primary rounded-full flex justify-center items-center"
            >
              X
            </button>
          </Dialog.Close>
          <Dialog.Title className=                        "DialogTitle text-xl">Advancement</Dialog.Title>
          <Dialog.Description className="hidden">Select an advancement for your Hunter.</Dialog.Description>
          <div className="flex flex-col gap-4 min-h-[50vh] overflow-y-auto">
            <AnimatePresence>
              {step !== "select-advancement" && (
                <BackButton setStep={setStep} setAdvancementIndex={setAdvancementIndex} />
              )}
              {step === "select-advancement" && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4 mt-4"
                >
                  {advancementOptions.map((option) => (
                    <div key={`advancement-${option.id}`}>
                      <button
                        type="button"
                        onClick={() => handleChangeStep(option.id)}
                        disabled={advancementProgress[option.id] === 1}
                        className={`flex items-center justify-start text-left gap-2 ${advancementProgress[option.id] ? "text-theme-text-muted" : "text-theme-text-primary"}`}
                      >
                        {advancementProgress[option.id] ? <span>✓</span> : <span>○</span>}
                        {option.title}
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}
              {step !== "select-advancement" && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  key={step}
                >
                  {stepToComponent(step, character, () => handleOpenChange(false), advancementIndex)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function mapStepToAdvancement(advancementIndex: number, playbook: playbookKey): AdvancementSteps {
  const base = playbookBases[playbook]
  const advancement = base.advancements[advancementIndex]
  //common advancements
  if (advancement.includes("Increase an ability modifier by 1 (max 3)")) {
    return "adjust-stats"
  }
  if (advancement.includes("Choose an additional move from your playbook.")) {
    return "select-move"
  }
  if (advancement.includes("Write a custom move for your character.")) {
    return "write-custom-move"
  } 
  if (advancement.includes("Unmark everything in your Personal Quarters.")) {
    return "unmark-pq-items"
  }

  //explorer
  if (advancement.includes("Unlock two checkboxes on The Royal Explorers Club.")) {
    return "unlock-rec"
  }
  if (advancement.includes("Unmark all checkboxes on The Royal Explorers Club.")) {
    return "unmark-rec"
  }

  //facsimile 
  if (advancement.includes("Increase a Doll Part ability modifier by 1 (max 3)")) {
    return "doll-part"
  }
  if (advancement.includes("Unlock an Adaptor Key.")) {
    return "unlock-adaptor-key"
  }
  if (advancement.includes("Write a custom Adaptor for one of your Doll Parts.")) {
    return "custom-adaptor"
  }

    //no custom for factotem
    //herald and informals don't have advancements

  //legacy
  if (advancement.includes("Unmark all the boxes on “A Hunter’s life…”")) {
    return "unmark-hunterslife"
  }

    //no custom for mother
    //no custom for orpha

  //undeniable
    if (advancement.includes("Unmark all the boxes on The Reflection")) {
      return "unmark-reflection"
    }

  //unquiet
  if (advancement.includes("Unlock the next two marks on the Energy track.")) {
    return "unlock-energy"
  }

  //no custom for vessel
  console.error(`Attempted to select advancement ${advancement} for playbook ${playbook} but advancement was not found.`)
  return "select-advancement"
}

function BackButton({
  setStep,
  setAdvancementIndex,
}: {
  setStep: (step: "select-advancement") => void
  setAdvancementIndex: (advancementIndex: number | null) => void
}) {
  return (
    <div className="mx-auto w-full gap-4 flex justify-start items-center">
      <button
        type="button"
        className="text-theme-text-primary rounded-md hover:text-theme-text-accent"
        onClick={() => {
          setStep("select-advancement")
          setAdvancementIndex(null)
        }}
      >
        ← Back to Advancements
      </button>
    </div>
  )
}

function ConfirmChoice({ onClick }: { onClick: () => void }) {
  return (
    <div className="mx-auto w-1/3 gap-4 flex justify-center items-center">
      <button
        type="button"
        onClick={onClick}
        className="bg-theme-bg-accent text-theme-text-primary rounded-md p-2 hover:bg-theme-bg-accent-hover hover:text-theme-text-primary-hover"
      >
        Confirm
      </button>
    </div>
  )
}

function MoveSelector({
  character,
  closeModal,
  advancementIndex,
}: {
  character: CharacterNotTroupe
  closeModal: () => void
  advancementIndex: number | null
}) {
  const { gameState, updateGameState } = useGame()
  const base = playbookBases[character.playbook]
  const existingMoves = character?.moves ?? []
  const moves = base.moves
  const [selectedMove, setSelectedMove] = useState<string | null>(null)

  const onComfirm = () => {
    const newMove = moves.find((m) => m.title === selectedMove)
    if (!newMove) {
      return
    }
    if (advancementIndex === null) {
      return
    }
    const newAdvancements = [...character.advancements]
    newAdvancements[advancementIndex] = 1

    const constructedMove = {
      title: newMove.title,
      text: newMove.text,
      checks: Array.from({ length: newMove.checkboxes ?? 0 }, () => 0),
      lines: Array.from({ length: newMove.extraLines ?? 0 }, () => ""),
    }
    updateGameState({
      players: gameState.players.map((player) =>
        player.id === character.playerId
          ? {
              ...player,
              character: {
                ...character,
                moves: [...existingMoves, constructedMove],
                advancements: newAdvancements,
              },
            }
          : player,
      ),
    })
    closeModal()
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h3>Your Current Moves</h3>
      {existingMoves.length > 0 && (
        <div className="flex flex-col text-theme-text-muted">
          {existingMoves.map((move) => (
            <div key={move.title}>{move.title}</div>
          ))}
        </div>
      )}

      <h3>Select an Additional Move</h3>
      <p className="italic text-xs text-theme-text-muted">Tap any move to expand.</p>
      {moves.map((move) => {
        if (existingMoves.some((m) => m.title === move.title)) {
          return null
        }
        return (
          <div key={move.title} className="flex flex-col w-full justify-center gap-2">
            <button
              onClick={() => setSelectedMove(move.title)}
              type="button"
              disabled={existingMoves.some((m) => m.title === move.title)}
              className={`mx-auto text-center ${selectedMove === move.title ? "bg-theme-bg-accent text-theme-text-primary" : "bg-theme-bg-secondary text-theme-text-secondary"}`}
            >
              {move.title}
            </button>
            {selectedMove === move.title && (
              <div className="flex flex-col gap-2 text-sm">
                {move.text.map((line) => (
                  <div key={line}>{parseStaticText(line)}</div>
                ))}
              </div>
            )}
          </div>
        )
      })}
      <ConfirmChoice onClick={onComfirm} />
    </div>
  )
}

function MoveWriter({
  character,
  closeModal,
  advancementIndex,
}: {
  character: CharacterNotTroupe
  closeModal: () => void
  advancementIndex: number | null
}) {
  const {
    gameState,
    updateGameState,
    user: { id },
  } = useGame()
  const existingMoves = character.moves
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      text: "",
      numberChecks: 0,
      numberLines: 0,
    },
  })

  const parseAspects = (lines: string[]): string[] => {
    return lines.map((line) => line.replace(/<([^>]+)>/g, "<check>$1</check>"))
  }
  const onSubmit = (data: { title: string; text: string; numberChecks: number; numberLines: number }) => {
    const newMove = {
      title: data.title,
      text: parseAspects(data.text.split("\n")),
      checks: Array.from({ length: data.numberChecks }, () => 0),
      lines: Array.from({ length: data.numberLines }, () => ""),
    }
    if (advancementIndex === null) {
      return
    }
    const newAdvancements = [...character.advancements]
    newAdvancements[advancementIndex] = 1
    const priorMoves = existingMoves ? existingMoves : []
    updateGameState({
      players: gameState.players.map((player) =>
        player.character && player.id === id
          ? {
              ...player,
              character: {
                ...character,
                moves: [...priorMoves, newMove],
                advancements: newAdvancements,
              },
            }
          : player,
      ),
    })
    closeModal()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 justify-center text-theme-text-primary">
      <h3 className="text-2xl font-bold text-center text-theme-text-accent">Write a Custom Move</h3>
      <p>Name your move below: </p>
      <input
        type="text"
        {...register("title")}
        className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
      />

      <p>
        Write a description of your move below. To include inline check boxes, surround your text with
        &lt; &gt; symbols. For example:{" "}
        <span className="italic">once a day you may &lt;gain advantage on a combat-related roll&gt;</span>
      </p>
      <textarea
        {...register("text")}
        className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
      />

      <p>
        Optionally, moves can include some number of unlabeled check boxes or editable blank lines. Define the number of
        each below. If you need a labeled check box, instead add it to your description as a &lt;check&gt;.
      </p>
      <div className="grid grid-cols-4 gap-2">
        <p>Checkboxes:</p>
        <input
          type="number"
          {...register("numberChecks")}
          className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
        />
        <p>Lines:</p>
        <input
          type="number"
          {...register("numberLines")}
          className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
        />
      </div>
      <ConfirmChoice onClick={handleSubmit(onSubmit)} />
    </form>
  )
}

function UnmarkPQItems({
  character,
  closeModal,
  advancementIndex,
}: {
  character: CharacterNotTroupe
  closeModal: () => void
  advancementIndex: number | null
}) {
  const { gameState, updateGameState } = useGame()

  const onConfirm = () => {
    if (advancementIndex === null) {
      return
    }
    const newAdvancements = [...character.advancements]
    newAdvancements[advancementIndex] = 1

    updateGameState({
      players: gameState.players.map((player) =>
        player.id === character.playerId
          ? {
              ...player,
              character: {
                ...character,
                personalQuarters: character.personalQuarters.map((pq) => ({
                  ...pq,
                  marked: false,
                })),
                advancements: newAdvancements,
              },
            }
          : player,
      ),
    })
    closeModal()
  }

  return (
    <div>
      <div className="h-12" />
      <h3 className="text-xl font-bold text-center text-theme-text-accent">Unmark Personal Quarters</h3>
      <div className="h-6" />
      <p>This will unmark {character.personalQuarters.filter((pq) => pq.marked).length} Personal Quarters items.</p>
      <div className="h-6" />
      <ConfirmChoice onClick={onConfirm} />
    </div>
  )
}

function AdjustStats({
  character,
  closeModal,
  advancementIndex,
}: {
  character: CharacterNotTroupe
  closeModal: () => void
  advancementIndex: number | null
}) {
  const currentStats = character.abilities
  const { updateGameState, gameState } = useGame()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      vitality: currentStats.vitality,
      composure: currentStats.composure,
      reason: currentStats.reason,
      presence: currentStats.presence,
      sensitivity: currentStats.sensitivity,
    },
  })

  const onSubmit = (data: { [key in keyof Abilities]: number }) => {
    if (advancementIndex === null) {
      return
    }
    const newAdvancements = [...character.advancements]
    newAdvancements[advancementIndex] = 1
    updateGameState({
      players: gameState.players.map((player) =>
        player.id === character.playerId
          ? {
              ...player,
              character: {
                ...character,
                abilities: data,
                advancements: newAdvancements,
              },
            }
          : player,
      ),
    })
    closeModal()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-center">Add 1 to Any Ability</h3>

      <div className="flex justify-center w-full my-4">
        <div className="grid grid-cols-5 gap-1">
          {orderAbilities(currentStats).map(({ ability, value }) => (
            <div key={ability} className="flex flex-col gap-1">
              <label htmlFor={ability} className="flex flex-col gap-1">
                <span className="text-sm text-theme-text-muted text-center">{ability}</span>
              </label>
              <input
                id={ability}
                type="number"
                defaultValue={value}
                {...register(ability, { valueAsNumber: true })}
                className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
              />
            </div>
          ))}
        </div>
      </div>
      <ConfirmChoice onClick={handleSubmit(onSubmit)} />
    </form>
  )
}

function AddChecksToMove({ character, closeModal, advancementIndex, numberOfChecks, titleOfMove }: { character: CharacterNotTroupe, closeModal: () => void, advancementIndex: number | null, numberOfChecks: number, titleOfMove: string }) {
  const { gameState, updateGameState } = useGame()
  const existingMoves = character.moves

  const confirm = () => {

    if (advancementIndex === null) {
      return
    }
    const move = existingMoves.find((m) => m.title === titleOfMove)
    if (!move) {
      return
    }
    const newAdvancements = [...character.advancements]
    newAdvancements[advancementIndex] = 1
    const newChecks = [...(move.checks ?? []), ...Array.from({ length: numberOfChecks }, () => 0)]
    updateGameState({
      players: gameState.players.map((player) =>
        player.id === character.playerId
          ? {
              ...player,
              character: {
                ...character,
                moves: existingMoves.map((m) => m.title === titleOfMove ? { ...m, checks: newChecks } : m),
                advancements: newAdvancements,
              },
            }
          : player,
      ),
    })
    closeModal()
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h3>Add Checkboxes to {titleOfMove}</h3>
      <p>This will add {numberOfChecks} unmarked checkboxes to {titleOfMove}.</p>
      <ConfirmChoice onClick={confirm} />
    </div>
  )
}

function ClearChecksFromMove({ character, closeModal, advancementIndex, titleOfMove }: { character: CharacterNotTroupe, closeModal: () => void, advancementIndex: number|null, titleOfMove: string }) {
  const { gameState, updateGameState } = useGame()
  const existingMoves = character.moves
  const move = existingMoves.find((m) => m.title === titleOfMove)
  if (!move) {
    toast.error("Something went wrong! You can try again, or manually unmark your move.")
    return
  }

  const confirm = () => {
    if (advancementIndex === null) {
      return
    }
  const newAdvancements = [...character.advancements]
  newAdvancements[advancementIndex] = 1
  const newChecks = Array.from({ length: move.checks?.length ?? 0 }, () => 0)


  updateGameState({
    players: gameState.players.map((player) =>
      player.id === character.playerId
        ? {
            ...player,
            character: {
              ...character,
              moves: existingMoves.map((m) => m.title === titleOfMove ? { ...m, checks: newChecks } : m),
              advancements: newAdvancements,
            },
          }
        : player,
    ),
  })
  closeModal()
  }

const existingChecks = move.checks?.filter((c) => c === 1).length

return (
  <div className="flex flex-col gap-2 justify-center items-center">
    <h3>Clear Checks from {titleOfMove}</h3>
    <p>This will clear {existingChecks} checks from {titleOfMove}.</p>
    <ConfirmChoice onClick={confirm} />
  </div>
)
}

function DollPartAdvancement({ character, closeModal, advancementIndex, mode }: { character: CharacterNotTroupe, closeModal: () => void, advancementIndex: number | null, mode: "upgrade" | "add-key" | "custom" }) {
  const { gameState, updateGameState } = useGame()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      partName: "",
      text: "",
    },
  })
  const coreMove = character.coreMoveState
  if (!coreMove || coreMove.type !== "facsimile") {
    toast.error("Something went wrong! You can try again, or manually unmark your part.")
    return
  }


  const confirmAddAdaptor = () => {
    if (advancementIndex === null) {
      return
    }
  const newAdvancements = [...character.advancements]
  newAdvancements[advancementIndex] = 1
  
  updateGameState({
    players: gameState.players.map((player) =>
      player.id === character.playerId
        ? {
            ...player,
            character: {
              ...character,
              coreMoveState: { ...coreMove, adaptorKeys: coreMove.adaptorKeys + 1 },
              advancements: newAdvancements,
            },
          }
        : player,
    ),
  })
  closeModal()
  }

  const confirmCustomAdaptor = (data: { partName: string, text: string }) =>     {
    if (advancementIndex === null) {
      return
    }
    const { partName, text } = data
    const newAdvancements = [...character.advancements]
    newAdvancements[advancementIndex] = 1

    const stringArray = text.split("\n").filter((line) => line.trim() !== "")

    updateGameState({
      players: gameState.players.map((player) =>
        player.id === character.playerId
          ? {
              ...player,
              character: {
                ...character,
                coreMoveState: {
                  ...coreMove,
                  parts: coreMove.parts.map((p) =>
                    p.name === partName ? { ...p, adaptors: [...p.adaptors, { text: stringArray, equipped: false }] } : p,
                  ),
                },
                advancements: newAdvancements,
              },
            }
          : player,
      ),
    })
    closeModal()
  }

  const confirmUpgradePart = (data: { partName: string }) =>   {
    if (advancementIndex === null) {
      return
    }
    const { partName } = data
  const newAdvancements = [...character.advancements]
  newAdvancements[advancementIndex] = 1
  
  updateGameState({
    players: gameState.players.map((player) =>
      player.id === character.playerId
        ? {
            ...player,
            character: {
              ...character,
              coreMoveState: { ...coreMove, parts: coreMove.parts.map((p) => p.name === partName ? { ...p, adjustment: p.adjustment + 1 } : p) },
              advancements: newAdvancements,
            },
          }
        : player,
    ),
  })
  closeModal()

  }


  if (mode === "upgrade") {
    return (
      <form onSubmit={handleSubmit(confirmUpgradePart)} className="flex flex-col gap-2 justify-center items-center">
        <h3>Upgrade a Doll Part</h3>
        <p>Choose a Doll Part to upgrade. The associated ability will be increased by 1 each time you equip it.</p>
        <div className="flex flex-col justify-start items-start gap-2">{coreMove.parts.map((part) =>       {
          const disabled = part.adjustment + 1 > 3
        return (
          <div key={part.name} className="flex justify-start items-baseline gap-2">
            <input type="radio" id={part.name} value={part.name} {...register("partName")} disabled={disabled} />
            <label htmlFor={part.name} className="flex flex-col gap-0">
              <span className={disabled ? "text-theme-text-muted line-through" : "text-theme-text-primary"}>{part.name}</span>
              <span className="text-sm text-theme-text-muted italic ml-4">({part.ability} {disabled ? " capped at 3" : `+${part.adjustment + 1}`})</span>
            </label>
          </div>
        )
      })}</div>
        <ConfirmChoice onClick={handleSubmit(confirmUpgradePart)} />
      </form>
    )
  }
  if (mode === "add-key") {
    return (
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3>Add an Adaptor Key</h3>
        <p>This will add an Adaptor Key, bringing your total available keys to {coreMove.adaptorKeys + 1}.</p>
        <ConfirmChoice onClick={confirmAddAdaptor} />
      </div>
    )
  }
  if (mode === "custom") {
    return (
      <form onSubmit={handleSubmit(confirmUpgradePart)} className="flex flex-col gap-2 justify-center items-center">
        <h3>Write a Custom Adaptor</h3>
        <p>First choose a Doll Part to write the custom adaptor for, then write the adaptor text below.</p>
        <div className="flex flex-col justify-start items-start gap-2">{coreMove.parts.map((part) => (
          <div key={part.name} className="flex justify-start items-baseline gap-2">
          <input type="radio" id={part.name} value={part.name} {...register("partName")} />
          <label htmlFor={part.name} className="flex flex-col gap-0">
            <span className={"text-theme-text-primary"}>{part.name}</span>
            <span className="text-sm text-theme-text-muted italic ml-4">({part.ability})</span>
          </label>
        </div>
        ))}</div>
        <h4 className="text-sm text-theme-text-muted italic text-left w-full">Adaptor Text:</h4>
        <textarea {...register("text")} className="w-full border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow" />
        <ConfirmChoice onClick={handleSubmit(confirmCustomAdaptor)} />
      </form>
    )
  }
}
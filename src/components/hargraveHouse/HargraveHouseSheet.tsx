import { AnimatePresence, motion } from "framer-motion"
import { Dialog, Tooltip,} from "radix-ui"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useGame } from "../../context/GameContext"
import { type GameState, PlayerRole } from "../../context/types"
import { playbookKeys } from "../playbooks/types"
import { parseStaticText, parseWithCheckboxes } from "../playbooks/utils"
import { Divider } from "../shared/Divider"
import { EditableLine } from "../shared/EditableLine"
import { RollableLine } from "../shared/RollableLine"
import { Section } from "../shared/Section"
import { StyledTooltip, } from "../shared/Tooltip"
import { residentContent } from "./content/residents"
import { diverValues, dreamerValues, guideValues } from "./content/residents/greco"
import { roomContent } from "./content/rooms"
import { ReactComponent as HouseIcon } from "./house.svg"
import type { ResidentContent, Resident as ResidentState, RoomContent } from "./types"


export function HargraveHouseSheet({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <div className="flex flex-col justify-start items-start h-full w-full pointer-events-none">
      <Tooltip.Root>
      <Tooltip.Trigger asChild>
      <button
        type="button"
        aria-label="Open settings"
        className="drawerButton"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HouseIcon className="w-full h-full" />
      </button>
      </Tooltip.Trigger>
      <Tooltip.Content className="z-30">
        <StyledTooltip>
          View Hargrave House rooms and residents.
        </StyledTooltip>
      </Tooltip.Content>
      </Tooltip.Root>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: 0 }}
            exit={{ left: "-100%" }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full md:w-1/2 h-screen flex flex-col justify-start items-center bg-theme-bg-primary border-r border-theme-border-accent rounded-lg p-4 z-10 transition-all ease-linear overflow-y-auto pointer-events-auto"
          >
            <button type="button" className="absolute top-0 right-0 w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
              X
            </button>

            <h1 className="text-2xl font-bold text-theme-text-accent mb-10">Hargrave House</h1>
            <Rooms />
            <Divider />
            <Residents />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Rooms() {
  return (
    <div>
      <UnlockedRooms />
      <Divider />
      <AvailableRooms />
    </div>
  )
}

function UnlockedRooms() {
  const { gameState, updateGameState, user: { role } } = useGame()
  const unlockedRooms = gameState.hargraveHouse.rooms.filter((room) => room.status === "unlocked")

  if (unlockedRooms.length === 0) return null

  const removeRoom = (key: string) => {
    updateGameState({
      ...gameState,
      hargraveHouse: { ...gameState.hargraveHouse, rooms: gameState.hargraveHouse.rooms.filter((r) => r.key !== key) }
    })
  }

  return (
    <div className="flex flex-col justify-start items-start text-left w-full">
      <h2 className="text-xl font-bold text-theme-text-accent text-center w-full">Unlocked Rooms</h2>
      <ul>
        {Object.values(unlockedRooms).map((room) => {
          const { title, onUnlock } = roomContent[room.key as keyof typeof roomContent]
          let {checks, extraLines} = room

          let checkIndex = 0
          if (!checks && (onUnlock.checks || onUnlock.inlineChecks)) {
            const numberChecks = Math.max(onUnlock.checks ?? 0, onUnlock.inlineChecks ?? 0)
            checks = Array.from({ length: numberChecks }, () => 0)
          }

          const saveExtraLine = (index: number, value: string) => {
            const updatedExtraLines = [...(extraLines ?? []), value]
            updatedExtraLines[index] = value
            updateGameState({
              ...gameState,
              hargraveHouse: {
                ...gameState.hargraveHouse,
                rooms: gameState.hargraveHouse.rooms.map(r =>
                  r.key === room.key
                    ? { ...r, extraLines: updatedExtraLines }
                    : r
                )
              }
            })
          }

          const setRoomCheck = (index: number) => {
            if (!checks) return
            const updatedChecks = [...checks]
              updatedChecks[index] = updatedChecks[index] === 1 ? 0 : 1
              updateGameState({
                ...gameState,
                hargraveHouse: {
                  ...gameState.hargraveHouse,
                  rooms: gameState.hargraveHouse.rooms.map(r =>
                    r.key === room.key
                      ? { ...r, checks: updatedChecks }
                      : r
                  )
                }
              })
          }

          return (
            <Section title={title} key={title} collapsible leftAlign minify>
              {onUnlock.text.map((text) =>             {
                const { elements, nextAspectIndex } = parseWithCheckboxes(text, checks ?? [], checkIndex, true, setRoomCheck)
                checkIndex = nextAspectIndex
                return (<p key={text} className="text-sm">
                {elements}
              </p>
            )})}
              {onUnlock.checks && (
                <div className="flex gap-3 w-full justify-center items-start">
                  {Array.from({ length: onUnlock.checks }).map((_, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
                    <input type="checkbox" key={index} className="text-sm text-theme-text-accent" />
                  ))}
                </div>
              )}
              {onUnlock.extraLines && (
                <div className="text-sm flex flex-col justify-start items-stretch gap-2">
                  {Array.from({ length: onUnlock.extraLines }).map((_, index) => (
                    <EditableLine
                      key={`extra-line-${
                        // biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
                        index
                      }`}
                      text={extraLines?.[index] ?? ""}
                      onSave={(index, value) => saveExtraLine(index, value)}
                      index={index}
                      editable={true}
                    />
                  ))}
                </div>
              )}
{role === PlayerRole.KEEPER &&
                (<Tooltip.Root>
                  <div className="w-1/3 mx-auto"><Tooltip.Trigger asChild>
                    <button
                      type="button"
                      className="gridButton"
                      onClick={() => removeRoom(room.key)}
                    >
                      Remove Room
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <StyledTooltip>
                      Remove the room from the game. Do this if the room's unlock benefit is exhausted and your players no longer need to see it.
                    </StyledTooltip>
                  </Tooltip.Content>
                  </div>
                </Tooltip.Root>)}

            </Section>
          )
        })}
      </ul>
    </div>
  )
}

function AvailableRooms() {
  const allRooms = Object.entries(roomContent)
  const {
    gameState,
  } = useGame()
  const availableRooms: Record<string, RoomContent> = {}
  for (const [key, value] of allRooms) {
    if (!gameState.hargraveHouse.rooms.some((r) => r.key === key && r.status === "unlocked")) {
      availableRooms[key] = value
    }
  }
  return (
    <div>
      <h2 className="text-xl font-bold text-theme-text-accent">Available Rooms</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-stretch justify-center">
        {Object.entries(availableRooms).map(([key, room]) => 
<AvailableRoom key={key} keyString={key} room={room} />
        )}
      </div>
    </div>
  )
}

function AvailableRoom({ keyString, room }: { keyString: string; room: RoomContent }) {
  const {
    gameState,
    user: { role },
    updateGameState,
  } = useGame()
  const { title } = room
  const roomState = gameState.hargraveHouse.rooms.find((r) => r.key === keyString)

  const unlockRoom = () => {
    const newRooms = [...gameState.hargraveHouse.rooms, { key: keyString, status: "unlocked" as const }]
    updateGameState({ hargraveHouse: { ...gameState.hargraveHouse, rooms: newRooms } })
  }

  const activateRoom = () => {
    const newRooms = gameState.hargraveHouse.rooms.map((r) => r.key === keyString ? { ...r, status: r.status === "active" ? "available" as const : "active" as const } : r)
    updateGameState({ hargraveHouse: { ...gameState.hargraveHouse, rooms: newRooms } })
  }


  const { disabled, tooltipText } = checkSpecialRooms(room, gameState)
  const isDisabled = disabled || (!gameState.hargraveHouse.rooms.some((r) => r.key === keyString && r.status === "active") && role === PlayerRole.PLAYER)

  return (
    <Dialog.Root key={keyString}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild disabled={!isDisabled}>
          <Dialog.Trigger disabled={isDisabled} className=    {`gridButton ${roomState?.status === "active" ? "softPing" : ""}`}>
            {" "}
            {title}
          </Dialog.Trigger>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <StyledTooltip>{tooltipText}</StyledTooltip>
        </Tooltip.Content>

        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Close className="DialogClose">X</Dialog.Close>
            <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
            {room.special && <div className="text-sm">{parseStaticText(room.special)}</div>}
            {role === PlayerRole.KEEPER && 
                            <button type="button" className="gridButton" onClick={activateRoom}>
                            {roomState?.status === "active" ? "Deactivate Room (Hide from Hunters)" : "Activate Room (Display to Hunters)"}
                          </button>}
            <Dialog.Description className="DialogDescription">{parseStaticText(room.intro)}</Dialog.Description>
            <div className="flex flex-col gap-2 text-sm">
              <ol>
                {room.prompts.map((prompt) => (
                  <li key={prompt}>{parseStaticText                          (prompt)}</li>
                ))}
              </ol>
              {role === PlayerRole.KEEPER && (
                <button type="button" className="gridButton" onClick={unlockRoom}>
                  Unlock Room
                </button>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Tooltip.Root>
    </Dialog.Root>
  )
}

function checkSpecialRooms(room: RoomContent, gameState: GameState) {
  if (room.title === "The Menagerie") {
    return {
      disabled: !gameState.players.some(
        (player) =>
          player.character &&
          player.character.playbook === playbookKeys.undeniable &&
          player.character.moves.some((move) => move.title === "The Menagerie"),
      ),
      tooltipText: "This room is unlocked when The Undeniable takes the Menagerie move.",
    }
  } else if (room.title === "The Ritual Chamber") {
    return {
      disabled: !gameState.players.some(
        (player) =>
          player.character &&
          player.character.playbook === playbookKeys.vessel &&
          player.character.moves.some((move) => move.title === "Ritual Chamber"),
      ),
      tooltipText: "This room is unlocked when The Vessel takes the Ritual Chamber move.",
    }
  } else if (room.title === "The Infirmary") {
    return {
      disabled: !gameState.players.some(
        (player) =>
          player.character &&
          player.character.playbook === playbookKeys.mother &&
          player.character.moves.some((move) => move.title === "Infirmary"),
      ),
      tooltipText: "This room is unlocked when The Mother takes the Infirmary move.",
    }
  }

  return { disabled: false, tooltipText: "" }
}

function Residents() {
  const { gameState, user: { role } } = useGame()
  const [modalOpen, setModalOpen] = useState(false)
  const residents = gameState.hargraveHouse.residents
  return (
    <div>
      <h2 className="text-xl font-bold text-theme-text-accent">Residents</h2>
      {residents?.length === 0 ? <p>Hargrave House has no additional residents yet. When it does, they will appear here.</p> : <ul>
        {residents?.map((resident) => {
          const content = residentContent[resident.key]
          if (!content) return null
          return (
            <Resident key={resident.key} content={content} state={resident}/>
          )} 
          )}
      </ul>}
                {role === PlayerRole.KEEPER && (
            <Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
              <Dialog.Trigger asChild>
                <button type="button" className="gridButton">
                  Add Resident
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                  <Dialog.Close className="DialogClose">X</Dialog.Close>
                  <Dialog.Title className="DialogTitle">Add Resident</Dialog.Title>
                  <Dialog.Description className="DialogDescription">
                    Select a resident to add to Hargrave House.
                  </Dialog.Description>
                  <AddResidentForm setIsOpen={setModalOpen} />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          )}
    </div>
  )
}

function AddResidentForm({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
  const { gameState, updateGameState } = useGame()
  const {register, handleSubmit, reset} = useForm<{resident: string}>({
    defaultValues: {
      resident: "",
    },
  })

  const availableResidents = Object.keys(residentContent).filter((key) => !gameState.hargraveHouse.residents?.some((r) => r.key === key))

  const onSubmit = (data: { resident: string }) => {
    const content = residentContent[data.resident]
    if (!content) {
      toast.error("Invalid resident selected.")
      return
    }
    const startingLines = content.title === "Greco, the Dream Sovereign" ? [diverValues[Math.floor(Math.random() * diverValues.length)], dreamerValues[Math.floor(Math.random() * dreamerValues.length)], guideValues[Math.floor(Math.random() * guideValues.length)]] : Array.from({ length: content.onUnlock.extraLines ?? 0 }, () => "")
    const numberChecks = content.prompts.length + (content.onUnlock.checks ?? 0) + (content.onUnlock.inlineChecks ?? 0) + 1 //always +1 for unlock header
    const checks =Array.from({ length: numberChecks ?? 0 }, () => 0)
    const newResident = {
      key: data.resident,
      checks,
      extraLines: startingLines,
      unlockCheck: Array.from({ length: content.onUnlock.checks ?? 0 }, () => 0),
    }
    const newResidents = [...(gameState.hargraveHouse.residents ?? []), newResident]
    updateGameState({ hargraveHouse: { ...gameState.hargraveHouse, residents: newResidents } })
    reset()
    setIsOpen(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {availableResidents.map((resident) => (
          <div key={resident} className="flex gap-2 items-center justify-start">
          <input type="radio" {...register("resident")} value={resident} />
          <label htmlFor={resident}>{residentContent[resident].title}</label>
          </div>
        ))}
      <button type="submit" className="gridButton">Add Resident</button>
    </form>
  )
}

function Resident({ content, state }: { content: ResidentContent; state: ResidentState }) {
  const { gameState, updateGameState, user: { role } } = useGame()

  const removeResident = (key: string) => {
    const newResidents = gameState.hargraveHouse.residents?.filter((r) => r.key !== key)
    if (!newResidents) return
    updateGameState({
      ...gameState,
      hargraveHouse: { ...gameState.hargraveHouse, residents: newResidents ?? [] }
    })
  }

  const { title, intro, onUnlock, prompts } = content
  const {checks, extraLines} = state

  let checkIndex = 0
  let inlineCheckIndex = 1 + prompts.length //1 for the unlock header 

  const saveExtraLine = (index: number, value: string) => {
            const updatedExtraLines = [...(extraLines ?? []), value]
            updatedExtraLines[index] = value
            updateGameState({
              ...gameState,
              hargraveHouse: {
                ...gameState.hargraveHouse,
                residents: gameState.hargraveHouse.residents?.map(r =>
                  r.key === state.key
                    ? { ...r, extraLines: updatedExtraLines }
                    : r
                )
              }
            })
  }

  const setResidentCheck = (index: number) => {
              if (!checks) return
            const updatedChecks = [...checks]
              updatedChecks[index] = updatedChecks[index] === 1 ? 0 : 1
              updateGameState({
                ...gameState,
                hargraveHouse: {
                  ...gameState.hargraveHouse,
                  residents: gameState.hargraveHouse.residents?.map(r =>
                    r.key === state.key
                      ? { ...r, checks: updatedChecks }
                      : r
                  )
                }
              })
}

  return     <div className="flex flex-col justify-start items-start text-left w-full">
    <Section title={title} key={title} collapsible leftAlign minify>
      {intro && <p className="text-sm">{parseStaticText(intro)}</p>}
      {prompts.map((prompt, index) => {
        checkIndex = index
        return (
        <p key={prompt} className="text-sm"><input type="checkbox" checked={checks?.[index] === 1} onChange={() => setResidentCheck(index)} /> {parseStaticText(prompt)}</p>
      )})}
      <h4 className="inline text-sm font-bold text-theme-text-accent font-[var(--header-font]"><input type="checkbox" checked={checks?.[checkIndex+1] === 1} onChange={() => setResidentCheck(checkIndex+1)} /> {onUnlock.title}: </h4>
      {onUnlock.text.map((text, index) => {
        const { elements, nextAspectIndex } = parseWithCheckboxes(text, checks ?? [], inlineCheckIndex, true, setResidentCheck)
        inlineCheckIndex = nextAspectIndex
        return (
          <div key={text} className="text-sm flex flex-col gap-2">
            {index === 1 && title === "Greco, the Dream Sovereign" && <DreamDivingLines/>}
            <span className="inline">{elements}</span>
          </div>
        ) 
      })}
      {onUnlock.checks && (
        <div className="flex gap-3 w-full justify-center items-start">
          {Array.from({ length: onUnlock.checks }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
            <input type="checkbox" key={index} className="text-sm text-theme-text-accent" />
          ))}
        </div>
      )}
      {onUnlock.extraLines && title !== "Greco, the Dream Sovereign" && (
        <div className="text-sm flex flex-col justify-start items-stretch gap-2">
          {Array.from({ length: onUnlock.extraLines }).map((_, index) => (
            <EditableLine
              key={`extra-line-${
                // biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
                index
              }`}
              text={extraLines?.[index] ?? ""}
              onSave={(index, value) => saveExtraLine(index, value)}
              index={index}
              editable={true}
            />
          ))}
        </div>
      )}
      {role === PlayerRole.KEEPER && (
        <Tooltip.Root>
          <div className="w-1/3 mx-auto">
            <Tooltip.Trigger asChild>
              <button type="button" className="gridButton" onClick={() => removeResident(state.key)}>
                Remove Resident
              </button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <StyledTooltip>
                Remove the resident from the game. Do this if all benefits are exhausted and your players no longer need
                to see it.
              </StyledTooltip>
            </Tooltip.Content>
          </div>
        </Tooltip.Root>
      )}
    </Section>
  </div>
}

function DreamDivingLines() {
const {gameState, updateGameState} = useGame()
const [diver, dreamer, guide] = gameState.hargraveHouse.residents?.find((r) => r.key === "greco")?.extraLines ?? ["","",""]
  const saveValue = (index: number, value: string) => {
    const updatedExtraLines = [diver, dreamer, guide].map((line, i) => i === index ? value : line)
    updateGameState({
      ...gameState,
      hargraveHouse: {
        ...gameState.hargraveHouse,
        residents: gameState.hargraveHouse.residents?.map(r =>
          r.key === "greco"
            ? { ...r, extraLines: updatedExtraLines }
            : r
          )
        }
      })
  }

  return (
    <div className="flex flex-col w-full gap-0 justify-center items-center border border-theme-border rounded-lg p-2">
      <h4 className="text-sm text-theme-text-accent">The Diver Must...</h4>
      <RollableLine startingValue=    {diver} values={diverValues} editable=     {true} onSave={(value) => {
        saveValue(0, value)}}/>
        <h4 className="text-sm text-theme-text-accent">... While the Dreamer...</h4>
      <RollableLine startingValue=    {dreamer} values={dreamerValues} editable=    {true} onSave={(value) => {
        saveValue(1, value)}}/>
        <h4 className="text-sm text-theme-text-accent">The Guides Must...</h4>
      <RollableLine startingValue=    {guide} values={guideValues} editable=    {true} onSave={(value) => {
        saveValue(2, value)}}/>
    </div>
  )
}
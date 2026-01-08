import { AnimatePresence, motion } from "framer-motion"
import { Dialog, Tooltip,} from "radix-ui"
import { useGame } from "../../context/GameContext"
import { type GameState, PlayerRole } from "../../context/types"
import { playbookKeys } from "../playbooks/types"
import { parseStaticText, parseWithCheckboxes } from "../playbooks/utils"
import { Divider } from "../shared/Divider"
import { EditableLine } from "../shared/EditableLine"
import { Section } from "../shared/Section"
import { StyledTooltip, } from "../shared/Tooltip"
import { roomContent } from "./content/rooms"
import type { RoomContent } from "./content/rooms/types"
import { ReactComponent as HouseIcon } from "./house.svg"


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
  const { gameState } = useGame()
  const residents = gameState.hargraveHouse.residents
  return (
    <div>
      <h2 className="text-xl font-bold text-theme-text-accent">Residents</h2>
      {residents.length === 0 ? <p>Hargrave House has no additional residents yet. When it does, they will appear here.</p> : <ul>
        {residents.map((resident) => (
          <li key={resident.name}>{resident.name}</li>
        ))}
      </ul>}
    </div>
  )
}

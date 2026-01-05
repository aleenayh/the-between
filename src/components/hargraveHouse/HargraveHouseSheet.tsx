import { AnimatePresence, motion } from "framer-motion"
import { Dialog, Tooltip } from "radix-ui"
import { useGame } from "../../context/GameContext"
import { type GameState, PlayerRole } from "../../context/types"
import { playbookKeys } from "../playbooks/types"
import { parseStaticText } from "../playbooks/utils"
import { Divider } from "../shared/Divider"
import { EditableLine } from "../shared/EditableLine"
import { StyledTooltip } from "../shared/Tooltip"
import { roomContent } from "./content/rooms"
import type { RoomContent } from "./content/rooms/types"
import { ReactComponent as HouseIcon } from "./house.svg"

export function HargraveHouseSheet({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <div className="flex flex-col justify-start items-start h-full w-full pointer-events-none">
      <button
        type="button"
        aria-label="Open settings"
        className="w-10 h-10 text-theme-accent-primary bg-theme-bg-secondary rounded-none rounded-br-lg rounded-tr-lg p-2 hover:bg-theme-bg-accent hover:text-theme-text-accent transition-colors pointer-events-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HouseIcon className="w-full h-full" />
      </button>
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
  const { gameState } = useGame()
  const unlockedRooms = gameState.hargraveHouse.rooms.filter((room) => room.status === "unlocked")

  const saveExtraLine = (index: number, value: string) => {
    console.log("saveExtraLine", index, value)
  }

  if (unlockedRooms.length === 0) return null

  return (
    <div className="flex flex-col justify-start items-start text-left w-full">
      <h2 className="text-xl font-bold text-theme-text-accent text-center w-full">Unlocked Rooms</h2>
      <ul>
        {Object.values(unlockedRooms).map((room) => {
          const { title, onUnlock } = roomContent[room.key as keyof typeof roomContent]
          return (
            <div key={title}>
              <h3 className="text-lg font-bold text-theme-text-accent">{title}</h3>
              {onUnlock.text.map((text) => (
                <p key={text} className="text-sm">
                  {parseStaticText(text)}
                </p>
              ))}
              {onUnlock.checks && (
                <div className="flex flex-col justify-start items-start">
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
                      text={""}
                      onSave={(index, value) => saveExtraLine(index, value)}
                      index={index}
                      editable={true}
                    />
                  ))}
                </div>
              )}
            </div>
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
    user: { role },
    updateGameState,
  } = useGame()
  const availableRooms: Record<string, RoomContent> = {}
  for (const [key, value] of allRooms) {
    if (!gameState.hargraveHouse.rooms.some((r) => r.key === key && r.status === "unlocked")) {
      availableRooms[key] = value
    }
  }

  const unlockRoom = (key: string) => {
    const newRooms = [...gameState.hargraveHouse.rooms, { key, status: "unlocked" as const }]
    updateGameState({ hargraveHouse: { ...gameState.hargraveHouse, rooms: newRooms } })
  }
  return (
    <div>
      <h2 className="text-xl font-bold text-theme-text-accent">Available Rooms</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-stretch justify-center">
        {Object.entries(availableRooms).map(([key, room]) => {
          const { title } = room
          const { disabled, tooltipText } = checkSpecialRooms(room, gameState)
          return (
            <Dialog.Root key={key}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild disabled={!disabled}>
                  <Dialog.Trigger disabled={disabled} className="gridButton">
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
                    <Dialog.Description className="DialogDescription">{room.intro}</Dialog.Description>
                    <div className="flex flex-col gap-2 text-sm">
                      <ol>
                        {room.prompts.map((prompt) => (
                          <li key={prompt}>{prompt}</li>
                        ))}
                      </ol>
                      {role === PlayerRole.KEEPER && (
                        <button type="button" className="gridButton" onClick={() => unlockRoom(key)}>
                          Unlock Room
                        </button>
                      )}
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Tooltip.Root>
            </Dialog.Root>
          )
        })}
      </div>
    </div>
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
  return (
    <div>
      <h2 className="text-xl font-bold text-theme-text-accent">Residents</h2>
      <p>TODO!</p>
    </div>
  )
}

import { useCallback, useState } from "react"
import { useGame } from "../../../context/GameContext"
import { PlayerRole } from "../../../context/types"
import { EditableLine } from "../../shared/EditableLine"
import { type CharacterNotTroupe, playbookKeys, type Troupe } from "../types"

export function Conditions({ character }: { character: CharacterNotTroupe }) {
  const {
    updateGameState,
    gameState,
    user: { id, role },
  } = useGame()
  const editable = id === character.playerId || role === PlayerRole.KEEPER
  const [showEdit, setShowEdit] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
  })

  // Sync conditions to Firebase
  const syncConditions = useCallback(
    (newConditions: string[]) => {
      updateGameState({
        players: gameState.players.map((player) =>
          player.id === character.playerId
            ? {
                ...player,
                character: player.character ? { ...player.character, conditions: newConditions } : null,
              }
            : player,
        ),
      })
    },
    [updateGameState, gameState.players, character.playerId],
  )

  const handleSaveCondition = (index: number, value: string) => {
    const defaultConditions: string[] = ["", "", ""]
    const newConditions = [...(character.conditions ?? defaultConditions)]
    newConditions[index] = value
    syncConditions(newConditions)
    setShowEdit({ ...showEdit, [index]: false })
  }

  const isOrphan = character.playbook === playbookKeys.orphan

  return (
    <div className="flex flex-col gap-2 w-full">
      {isOrphan && (
        <div className="inline-flex justify-between items-center gap-2">
          <span className="text-sm text-theme-text-secondary">◆</span>
          <div className="flex-grow w-[60%] flex gap-2 items-center ">
            <span className="flex-grow w-[60%] text-md text-theme-text-primary flex justify-start text-left">
              A Disappointment and a Horror
            </span>
          </div>
        </div>
      )}
      {Array.from({ length: isOrphan ? 2 : 3 }).map((_, index) => {
        const condition = character.conditions?.[index] ?? ""
        return (
          <EditableLine
            key={`condition-${index}-${condition}}`}
            text={condition}
            onSave={(index, value) => handleSaveCondition(index, value)}
            index={index}
            editable={editable}
          />
        )
      })}
    </div>
  )
}

export function InformalsConditions({ troupe, characterKey, editable }: { troupe: Troupe, characterKey: keyof typeof troupe.members, editable: boolean }) {
  const {
    updateGameState,
    gameState,
  } = useGame()
  const [showEdit, setShowEdit] = useState<Record<number, boolean>>({
    0: false,
    1: false,
  })
  const character = troupe.members[characterKey]


  const handleSaveCondition = (index: number, value: string) => {
    const defaultConditions: string[] = ["", "", ""]
    const newConditions = [...(character.conditions ?? defaultConditions)]
    newConditions[index] = value
    const newTroupe = troupe.members
    newTroupe[characterKey] = { ...character, conditions: newConditions }
    updateGameState({
      players: gameState.players.map((player) =>
        player.character?.playbook === playbookKeys.informals
          ? {
              ...player,
              character: {...player.character, members: newTroupe }
            }
          : player,
      ),
    })
    setShowEdit({ ...showEdit, [index]: false })
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      {Array.from({ length: 2 }).map((_, index) => {
        const condition = character.conditions?.[index] ?? ""
        return (
          <EditableLine
            key={`condition-${index}-${condition}}`}
            text={condition}
            onSave={(index, value) => handleSaveCondition(index, value)}
            index={index}
            editable={editable}
          />
        )
      })}
    </div>
  )
}
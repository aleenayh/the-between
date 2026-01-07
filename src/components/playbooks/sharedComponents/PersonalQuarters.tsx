import { useGame } from "../../../context/GameContext"
import { CheckableEditableLine } from "../../shared/EditableLine"
import type { CharacterNotTroupe, } from "../types"

export function PersonalQuarters({ character }: { character: CharacterNotTroupe }) {
  const {
    updateGameState,
    gameState,
    user: { id },
  } = useGame()
  const editable = id === character.playerId
  const personalQuarters = character.personalQuarters

  const handleSave = (index: number, value: string) => {
    const newPQ = [...(character.personalQuarters ?? [])]
    newPQ[index] = { text: value, marked: false }
    updateGameState({
      players: gameState.players.map((player) =>
        player.id === character.playerId
          ? {
              ...player,
              character: player.character ? { ...player.character, personalQuarters: newPQ } : null,
            }
          : player,
      ),
    })
  }
  const handleCheck = (index: number, checked: boolean) => {
    const newPQ = [...(character.personalQuarters ?? [])]
    newPQ[index] = { text: newPQ[index].text, marked: checked }
    updateGameState({
      players: gameState.players.map((player) =>
        player.character && player.id === character.playerId
          ? { ...player, character: { ...player.character, personalQuarters: newPQ } }
          : player,
      ),
    })
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      {Array.from({ length: personalQuarters.length + 1 }).map((_, index) => {
        const item = personalQuarters[index] ?? { text: "", marked: false }
        return (
          <CheckableEditableLine
            key={`personal-quarters-${index}-${item.text}}`}
            text={item.text}
            checked={item.marked}
            onCheck={(index, checked) => handleCheck(index, checked)}
            onSave={(index, value) => handleSave(index, value)}
            index={index}
            editable={editable}
          />
        )
      })}
    </div>
  )
}

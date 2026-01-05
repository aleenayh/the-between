import { useCallback } from "react"
import { useGame } from "../../../context/GameContext"
import { customFieldOrFallback, playbookBases } from "../content"
import { type Character, type masksFutureKey, type playbookKey, playbookKeys } from "../types"

export function Masks({ character }: { character: Character }) {
  const {
    updateGameState,
    gameState,
    user: { id },
  } = useGame()
  const editable = id === character.playerId

  const guildedDoorDisabled = gameState.players.some(
    (player) => player.id !== character.playerId && player.character?.masksOfFuture["The Guilded Door"] === true,
  )

  const onToggleOldFire = useCallback(
    (checked: boolean, index: number) => {
      const newMasksOfPast = [...character.masksOfPast]
      newMasksOfPast[index] = checked ? 1 : 0
      updateGameState({
        players: gameState.players.map((player) =>
          player.id === character.playerId && player.character
            ? {
                ...player,
                character: {
                  ...player.character,
                  masksOfPast: newMasksOfPast,
                },
              }
            : player,
        ),
      })
    },
    [updateGameState, gameState.players, character],
  )

  const onToggleFireToCome = useCallback(
    (checked: boolean, key: masksFutureKey) => {
      const newMasksOfFuture = { ...character.masksOfFuture }
      newMasksOfFuture[key] = checked
      updateGameState({
        players: gameState.players.map((player) =>
          player.id === character.playerId
            ? {
                ...player,
                character: {
                  ...character,
                  masksOfFuture: newMasksOfFuture,
                },
              }
            : player,
        ),
      })
    },
    [updateGameState, gameState.players, character],
  )

  const { masksOfFuture, masksOfPast, masksPastDescription } =
    character.playbook === playbookKeys.custom
      ? {
          masksOfFuture: customFieldOrFallback(character, "masksOfFutureDefinitions").value as Record<
            masksFutureKey,
            string
          >,
          masksOfPast: customFieldOrFallback(character, "masksOfPastDefinitions").value as string[],
          masksPastDescription: undefined,
        }
      : playbookBases[character.playbook as playbookKey]
  const markedMasksOfPast = character.masksOfPast

  return (
    <div className="flex gap-4">
      <div className="w-1/2 flex flex-col gap-2">
        <h3 className="text-sm font-bold text-theme-text-accent text-center">Masks of the Past</h3>
        {editable && (
          <p className="text-xs italic text-theme-text-muted">
            {masksPastDescription ?? "Mark the first unmarked box."}
          </p>
        )}
        <div className={`${editable ? "flex flex-col" : "flex flex-row gap-x-0 gap-y-2 justify-start flex-wrap"}`}>
          {masksOfPast.map((mask, i) => {
            return (
              <div key={`mask-past-${mask}`} className="flex items-start gap-2 text-left">
                <input
                  type="checkbox"
                  checked={markedMasksOfPast[i] === 1}
                  disabled={!editable}
                  onChange={(e) => onToggleOldFire(e.target.checked, i)}
                />
                <label className="text-xs" htmlFor={mask}>
                  {editable && (
                    <span className={`${markedMasksOfPast[i] === 1 ? "text-theme-text-muted line-through" : ""}`}>
                      {mask}
                    </span>
                  )}
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <h3 className="text-sm font-bold text-theme-text-accent text-center">Masks of the Future</h3>

        {editable && (
          <p className="text-xs italic text-theme-text-muted">
            If no boxes are marked, you may retire this character to obscurity. Otherwise, mark any box you wish.
          </p>
        )}
        {Object.entries(masksOfFuture).map(([key, mask]) => {
          const marked = character.masksOfFuture[key as masksFutureKey]
          const disabled = guildedDoorDisabled && key === "The Guilded Door"
          const skip =
            character.playbook === playbookKeys.orphan &&
            (key === "The Guilded Door" || key === "The Moss-Covered Gate")
          if (skip) return null
          return (
            <div key={mask} className="flex items-start gap-2 text-left">
              <input
                id={`mask-future-${mask}`}
                type="checkbox"
                checked={marked}
                disabled={!editable}
                onChange={(e) => onToggleFireToCome(e.target.checked, key as masksFutureKey)}
              />
              <label className="text-xs" htmlFor={`mask-future-${mask}`}>
                <strong className={`${marked || disabled ? "text-theme-text-muted line-through" : ""}`}>{key}</strong>
                {editable ? ": " : " "}
                {editable && (
                  <span className={`${marked || disabled ? "text-theme-text-muted line-through" : ""}`}>{mask}</span>
                )}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

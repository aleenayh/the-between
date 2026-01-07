import { useCallback } from "react"
import { useGame } from "../../../context/GameContext"
import type { GameState } from "../../../context/types"
import { customFieldOrFallback, playbookBases } from "../content"
import { heraldPlaybookAdditions } from "../content/herald"
import { type CharacterNotTroupe, type playbookKey, playbookKeys } from "../types"
import { parseStaticText } from "../utils"

export function Masks({ character }: { character: CharacterNotTroupe }) {
  const {
    updateGameState,
    gameState,
    user: { id },
  } = useGame()
  const editable = id === character.playerId

  const guildedDoorDisabled = checkGuiledDoorDisabled(gameState)

  const onToggleMaskPast = useCallback(
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

  const onToggleMaskFuture = useCallback(
    (checked: boolean, index: number) => {
      const newMasksOfFuture = [...character.masksOfFuture]
      newMasksOfFuture[index] = checked ? 1 : 0
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

  const { masksOfFuture, masksOfPast, masksPastDescription, masksOfFutureDescription } =
    character.playbook === playbookKeys.custom
      ? {
          masksOfFuture: customFieldOrFallback(character, "masksOfFutureDefinitions").value,
          masksOfPast: customFieldOrFallback(character, "masksOfPastDefinitions").value,
          masksOfFutureDescription: undefined,
          masksPastDescription: undefined,
        }
      : playbookBases[character.playbook as playbookKey]
  const markedMasksOfPast = character.masksOfPast
  const isHerald = character.isHerald
  const heraldMasks = heraldPlaybookAdditions.masksOfPast ??   []

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
                  onChange={(e) => onToggleMaskPast(e.target.checked, i)}
                />
                <label className="text-xs" htmlFor={mask}>
                  {editable && (
                    <span className={`${markedMasksOfPast[i] === 1 ? "text-theme-text-muted line-through" : ""}`}>
                      {parseStaticText(mask)} {isHerald && parseStaticText(heraldMasks[i])}
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
            {masksOfFutureDescription ? parseStaticText(masksOfFutureDescription) : "If no boxes are marked, you may retire this character to obscurity. Otherwise, mark any box you wish."}
          </p>
        )}
        {masksOfFuture.map(        (
          mask,
          index,
        )=> {
          const marked = character.masksOfFuture[index] === 1
          const disabled = guildedDoorDisabled && mask.includes("<strong>The Guilded Door</strong>")
          const override = isHerald && mask.includes("<strong>The Blood-Soaked Portal</strong>")?           heraldPlaybookAdditions.masksOfFuture?.[0]: undefined
          const parsed = mask.split(":")
          const maskWithoutKey = parsed.slice(1).join(":")
          return (
            <div key={mask} className="flex items-start gap-2 text-left">
              <input
                id={`mask-future-${mask}`}
                type="checkbox"
                checked={marked}
                disabled={!editable}
                onChange={(e) => onToggleMaskFuture(e.target.checked, index)}
              />
              <label className="text-xs" htmlFor={`mask-future-${mask}`}>
                <strong className={`${marked || disabled ? "text-theme-text-muted line-through" : ""}`}>{              parseStaticText(parsed[0])}</strong>
                {editable ? ": " : " "}
                {editable && (
                  <span className={`${marked || disabled ? "text-theme-text-muted" : ""}`}>{parseStaticText(override ?? maskWithoutKey)}</span>
                )}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function checkGuiledDoorDisabled(gameState: GameState) {
  for (const player of gameState.players) {
    const character = player.character
    if (!character) continue
    const playbook = playbookBases[character.playbook as playbookKey]
    //some playbooks don't have the guilded door
    if (!playbook.masksOfFuture.includes("<strong>The Guilded Door:</strong>")) continue

    //if they do, find the index of it
    const index = playbook.masksOfFuture.findIndex((mask) => mask.includes("<strong>The Guilded Door:</strong>"))
    const marked = character.masksOfFuture[index] === 1
    if (!marked) continue
    return true
  }
}
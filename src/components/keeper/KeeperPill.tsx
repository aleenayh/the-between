import { useGame } from "../../context/GameContext"
import { PlayerRole } from "../../context/types"

export function KeeperPill() {
  const { user, gameState, updateGameState } = useGame()
  const resetRole = () => {
    updateGameState({
      players: gameState.players.map((player) => {
        if (player.id === user.id) {
          return { ...player, role: PlayerRole.PLAYER }
        }
        return player
      }),
    })
  }

  return (
    <div className="w-full md:w-1/6 align-self-end rounded-lg flex flex-col gap-2 text-sm backdrop-blur-sm border-2 border-theme-border-accent">
      <div className="p-2 text-theme-text-primary text-sm">
        You are the Keeper.
      </div>
      <p className="inline text-xs text-theme-text-muted">
        To join as a character,{" "}
        <button
          type="button"
          className="text-theme-text-accent hover:text-theme-accent-primary transition-colors pointer-events-auto"
          onClick={resetRole}
        >
          reset your role.
        </button>
      </p>
    </div>
  )
}

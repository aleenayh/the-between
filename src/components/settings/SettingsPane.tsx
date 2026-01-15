import { AnimatePresence, motion } from "framer-motion"
import { Tooltip } from "radix-ui";
import { useState } from "react"
import { useGame } from "../../context/GameContext"
import { resetGameToDefaults } from "../../lib/firebase"
import { ReactComponent as Logo } from "../assets/between-logo.svg";
import { CloseButton } from "../shared/CloseButton";
import { Section } from "../shared/Section"
import { StyledTooltip } from "../shared/Tooltip";
import { ReactComponent as CogIcon } from "./cog.svg"
import { GameInfo } from "./GameInfo"

// Toggle this to show/hide debug controls
const DEBUG_MODE = false

export function SettingsPane({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
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
        <CogIcon className="w-full h-full" />
      </button>
        </Tooltip.Trigger>
        <Tooltip.Content className="z-30">
          <StyledTooltip>Page settings.</StyledTooltip>
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
            <CloseButton onClick={() => setIsOpen(!isOpen)} />
            <h1 className="flex justify-center w-full text-theme-text-accent">
              <Logo className="w-1/3 h-auto mx-auto mb-4" />
            </h1>

            <h1 className="text-2xl font-bold text-theme-text-accent mb-10">Settings</h1>
            <div className="flex flex-col gap-10 justify-between h-full">
              <ThemeSelector />
              <GameInfo />
              {DEBUG_MODE && <DebugControls />}
              <Credits />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ThemeSelector() {
  const initialTheme = localStorage.getItem("theme") || "theodora"

  const confirmTheme = (value: string) => {
    localStorage.setItem("theme", value)
    document.documentElement.setAttribute("data-theme", value)
  }

  return (
    <div>
      <h3 className="text-lg font-bold text-theme-text-accent">Change Theme</h3>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2 justify-center items-center text-left">
        <label htmlFor="theodora">
          <input
            type="radio"
            value="theodora"
            name="theme"
            className="mr-2"
            defaultChecked={initialTheme === "theodora"}
            onChange={(e) => confirmTheme(e.target.value)}
          />
          Theodora Blue
        </label>
        <label htmlFor="flagg">
          <input
            type="radio"
            value="flagg"
            name="theme"
            className="mr-2"
            defaultChecked={initialTheme === "flagg"}
            onChange={(e) => confirmTheme(e.target.value)}
          />
          Aboard the <i>Chimera</i>
        </label>
        <label htmlFor="gesod">
          <input
            type="radio"
            value="gesod"
            name="theme"
            className="mr-2"
            defaultChecked={initialTheme === "gesod"}
            onChange={(e) => confirmTheme(e.target.value)}
          />
          All Hail the High Imperator
        </label>
        <label htmlFor="wellington-hughes">
          <input
            type="radio"
            value="wellington-hughes"
            name="theme"
            className="mr-2"
            defaultChecked={initialTheme === "wellington-hughes"}
            onChange={(e) => confirmTheme(e.target.value)}
          />
          Wellington Hues
        </label>
        <label htmlFor="titania">
          <input
            type="radio"
            value="titania"
            name="theme"
            className="mr-2"
            defaultChecked={initialTheme === "titania"}
            onChange={(e) => confirmTheme(e.target.value)}
          />
          The Faerie Queene
        </label>
        <label htmlFor="hearts">
          <input
            type="radio"
            value="hearts"
            name="theme"
            className="mr-2"
            defaultChecked={initialTheme === "hearts"}
            onChange={(e) => confirmTheme(e.target.value)}
          />
          Bleeding Heart
        </label>
        <label htmlFor="dark">
          <input
            type="radio"
            value="dark"
            name="theme"
            className="mr-2"
            defaultChecked={initialTheme === "dark"}
            onChange={(e) => confirmTheme(e.target.value)}
          />
          High Contrast (Dark)
        </label>
        <label htmlFor="light">
          <input
            type="radio"
            value="light"
            name="theme"
            className="mr-2"
            defaultChecked={initialTheme === "light"}
            onChange={(e) => confirmTheme(e.target.value)}
          />
          High Contrast (Light)
        </label>
      </div>
    </div>
  )
}

function Credits() {
  return (
    <div className="flex flex-col gap-2 justify-start items-start text-left w-full text-sm">
      <h3 className="text-lg font-bold text-theme-text-accent text-center w-full">About this Site</h3>
      <p>
        Site designed and maintained by <a href="https://github.com/aleenayh">Aleena Yunuba.</a> If you encounter
        accessibility issues, please <a href="mailto:aleenayunuba@gmail.com">let me know</a>.
      </p>

      <p>
        The Between is a creation of Jason Cordova distributed by{" "}
        <a href="https://www.gauntlet-rpg.com/">The Gauntlet</a>. Please{" "}
        <a href="https://discord.com/invite/ScVrPDgfeg">join the Gauntlet on Discord</a> for the latest game updates.
      </p>
    </div>
  )
}

function DebugControls() {
  const { gameHash, gameState } = useGame()
  const [isResetting, setIsResetting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleReset = async () => {
    setIsResetting(true)
    try {
      await resetGameToDefaults(gameHash)
      // Reload to get fresh state
      window.location.reload()
    } catch (error) {
      console.error("Failed to reset game:", error)
    } finally {
      setIsResetting(false)
      setShowConfirm(false)
    }
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-1/2 shrink-0 flex items-center gap-2 mb-2 p-2 bg-red-900/20 border border-red-700/50 rounded text-xs">
        <span className="text-red-400 font-mono">DEBUG</span>
        <span className="text-red-400">Hash: {gameHash}</span>
        {showConfirm ? (
          <div className="ml-auto flex items-center gap-2">
            <span className="text-red-300">Reset all players & progress?</span>
            <button
              type="button"
              onClick={handleReset}
              disabled={isResetting}
              className="px-2 py-1 bg-red-700 hover:bg-red-600 text-white rounded disabled:opacity-50"
            >
              {isResetting ? "..." : "Yes"}
            </button>
            <button
              type="button"
              onClick={() => setShowConfirm(false)}
              className="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded"
            >
              No
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            className="ml-auto px-2 py-1 bg-red-800 hover:bg-red-700 text-red-100 rounded"
          >
            Reset Game
          </button>
        )}
      </div>
      <Section title="Game State" collapsible={true}>
        {gameState.players.map((player) => (
          <div key={player.id}>
            <h4 className="text-lg font-bold text-theme-text-accent">{player.name}</h4>
            <p className="text-sm text-theme-text-muted">{player.role}</p>
          </div>
        ))}
      </Section>
    </div>
  )
}

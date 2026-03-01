import { Switch, Tooltip } from "radix-ui";
import { useState } from "react"
import { useGame } from "../../context/GameContext"
import { usePreferences } from "../../context/PreferencesContext"
import { resetGameToDefaults } from "../../lib/firebase"
import { ReactComponent as Logo } from "../assets/between-logo.svg";
import { ManagePlayers } from "../keeper/ManagePlayers";
import { PullOutDrawer } from "../shared/PullOutDrawer";
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
        className="hidden md:block drawerButton"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CogIcon className="w-full h-full" />
      </button>
        </Tooltip.Trigger>
        <Tooltip.Content className="z-30" side="right">
          <StyledTooltip>Page settings.</StyledTooltip>
        </Tooltip.Content>
      </Tooltip.Root>

      <PullOutDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <h1 className="flex justify-center w-full text-theme-text-accent">
              <Logo className="w-1/3 h-auto mx-auto mb-4" />
            </h1>

            <h1 className="text-[2rem] font-bold text-theme-text-accent mb-10">Settings</h1>
            <div className="flex flex-col gap-10 justify-between h-full">
              <ThemeSelector />
              <PreferencesControls/>
              <GameInfo />
              <ManagePlayers />
              {DEBUG_MODE && <DebugControls />}
              <Credits />
            </div>
        </PullOutDrawer>
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
            id="theodora"
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
            id="flagg"
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
            id="gesod"
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
            id="wellington-hughes"
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
            id="titania"
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
            id="hearts"
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
            id="dark"
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
            id="light"
            defaultChecked={initialTheme === "light"}
            onChange={(e) => confirmTheme(e.target.value)}
          />
          High Contrast (Light)
        </label>
      </div>
    </div>
  )
}

function PreferencesControls() {
	const {
		prefersImmediateDice,
		saveImmediateDicePreference,
		prefersReducedMotion,
		saveMotionPreference,
	} = usePreferences();

	return (
		<div>
			<h3 className="text-lg font-bold text-theme-text-accent">Preferences</h3>
			<div className="flex gap-2 justify-start items-center">
				<Switch.Root
					checked={!prefersImmediateDice}
					onCheckedChange={(checked) => saveImmediateDicePreference(!checked)}
					className="flex gap-2 items-center data-[state=checked]:bg-theme-bg-primary border border-theme-border-accent  h-4 w-9 rounded-full bg-theme-bg-secondary p-px transition shadow-inner shadow-black/20"
				>
					<Switch.Thumb className="data-[state=checked]:translate-x-4 block h-3 w-4 rounded-full bg-theme-accent-primary shadow-sm transition" />
				</Switch.Root>
				<div>Roll dice instantly: <Tooltip.Root><Tooltip.Trigger asChild><span className="font-bold text-theme-text-accent">    {prefersImmediateDice ? "ON" : "OFF"}</span></Tooltip.Trigger><Tooltip.Content className="z-30" side="right"><StyledTooltip>    {prefersImmediateDice
      ? "Dice results are reported immediately when you click to roll."
      : "App simulates the time it takes to roll physical dice before showing results."}</StyledTooltip></Tooltip.Content></Tooltip.Root></div>
			</div>
			<div className="flex gap-2 justify-start items-center">
				<Switch.Root
					checked={!prefersReducedMotion}
					onCheckedChange={(checked) => saveMotionPreference(!checked)}
					className="flex gap-2 items-center data-[state=checked]:bg-theme-bg-primary border border-theme-border-accent  h-4 w-9 rounded-full bg-theme-bg-secondary p-px transition shadow-inner shadow-black/20"
				>
					<Switch.Thumb className="data-[state=checked]:translate-x-4 block h-3 w-4 rounded-full bg-theme-accent-primary shadow-sm transition" />
				</Switch.Root>
				<div>Reduce motion: <Tooltip.Root><Tooltip.Trigger asChild><span className="font-bold text-theme-text-accent">    {prefersReducedMotion ? "ON" : "OFF"}</span></Tooltip.Trigger><Tooltip.Content className="z-30" side="right"><StyledTooltip>    {prefersReducedMotion
      ? "Disables animations and transitions that use motion. This includes the spin on dice rolls."
      : "Enables all animations and transitions."}</StyledTooltip></Tooltip.Content></Tooltip.Root></div>
			</div>
		</div>
	);
}


function Credits() {
  return (
    <div className="flex flex-col gap-2 justify-start items-start text-left w-full text-sm pb-12 md:pb-4">
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

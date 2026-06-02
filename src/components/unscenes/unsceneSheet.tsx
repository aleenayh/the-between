import { Tooltip } from "radix-ui";
import { useState } from "react"
import { useGame } from "../../context/GameContext";
import type { GameState } from "../../context/types";
import { ReactComponent as MoonIcon } from "../mystery/icons/moon.svg"
import { parseStaticText } from "../playbooks/utils";
import { PullOutDrawer } from "../shared/PullOutDrawer";
import { Section } from "../shared/Section";
import { StyledTooltip } from "../shared/Tooltip";
import { conflagration, royalSociety, unscenes as unscenesContent, venusianUnscenes } from "./content";

export function UnsceneSheet({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
    const {gameState, updateGameState} = useGame();  
    const unscenesUsed = gameState.unscenesUsed;
    const { withVenusian, withConflagration, withRoyalSociety } = specialUnscenes(gameState)
    const allUnscenes = [...(withVenusian ? Object.keys(venusianUnscenes) : []), ...(withConflagration ? Object.keys(conflagration) : []), ...(withRoyalSociety ? Object.keys(royalSociety) : []), ...Object.keys(unscenesContent)]
    
    const content = { ...conflagration,...venusianUnscenes, ...royalSociety, ...unscenesContent }
    const [selectedUnscene, setSelectedUnscene] = useState<string | null>(null);

    const markCompleted = (unsceneKey: string) => {
        const alreadyCompleted = unscenesUsed?.includes(unsceneKey);
        if (alreadyCompleted) {
            updateGameState({
                ...gameState,
                unscenesUsed: unscenesUsed?.filter((key) => key !== unsceneKey)
            })
            return
        } else         {
          updateGameState({
            ...gameState,
            unscenesUsed: [...(unscenesUsed ?? []), unsceneKey],
          })
          setSelectedUnscene(null)
        }
    }

  return (
    <div className="flex flex-col justify-start items-start h-full w-full pointer-events-none">
      <Tooltip.Root>  
        <Tooltip.Trigger asChild>
        <button
        type="button"
        aria-label="Open Unscenes"
        className="hidden md:block drawerButton"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoonIcon className="w-full h-full p-1" />
      </button>
        </Tooltip.Trigger>
        <Tooltip.Content className="z-30" side="right">
          <StyledTooltip>View London Unscenes.</StyledTooltip>
        </Tooltip.Content>
      </Tooltip.Root>

      <PullOutDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <h1 className="text-[2rem] font-bold text-theme-text-accent">Unscenes</h1>

            {/* content for selected unscene */}
            {selectedUnscene ? (
                <div className="flex flex-col gap-2 text-sm text-left py-4">
                    <h4 className="text-lg font-bold text-theme-text-accent text-center">{parseStaticText(content[selectedUnscene].title)}</h4>
                    <div>{parseStaticText(content[selectedUnscene].intro)}</div>
                    <div className="flex flex-col gap-2 text-sm justify-center items-center">
                        <ol>
                            {content[selectedUnscene].prompts.map((prompt) => (
                                <li key={prompt}>{parseStaticText(prompt)}</li>
                            ))}
                        </ol>
                        <div className="w-1/2"><button type="button" className="gridButton" onClick={() => markCompleted(selectedUnscene)}>{unscenesUsed?.includes(selectedUnscene) ? "Mark Uncompleted" : "Mark Completed"}</button></div>
                    </div>
                </div>
            ): (                    <h4 className="text-lg font-bold text-theme-text-accent text-center">Select an Unscene Below</h4>)}

                        {/* row of buttons */}
                        <Section title="All Unscenes" collapsible minify leftAlign>
                        <div className="flex flex-col justify-start items-start text-left gap-2">
            {allUnscenes.map            ((unsceneKey) => {
              const used = unscenesUsed?.includes(unsceneKey)

              return (
                <div key={unsceneKey} className="flex justify-start items-baseline gap-1">
                <input 
                type="radio"
                id={unsceneKey}
                  key={unsceneKey}
                  value={unsceneKey}
                  checked={selectedUnscene === unsceneKey}
                  onChange={() => setSelectedUnscene(unsceneKey)}
                />
                <label htmlFor={unsceneKey} className={`text-md ${selectedUnscene === unsceneKey ? "text-theme-text-accent" : used ? "text-theme-text-muted line-through" : "text-theme-text-primary"}`}>{parseStaticText(content[unsceneKey].title)}</label>
                </div>
              )
            })}
            </div>
            </Section>
        </PullOutDrawer>
    </div>
  )
}

function specialUnscenes(gameState: GameState):{withVenusian: boolean, withConflagration: boolean, withRoyalSociety: boolean} {
  const millieChecks =  gameState.hargraveHouse.residents?.find((r) => r.key === "millicent")?.checks ??   []
  const millie = (millieChecks[millieChecks.length - 1] ?? 0) >= 1
  if (!gameState.mastermind) return { withVenusian: false, withConflagration: false, withRoyalSociety: millie }
  const mastermind = gameState.mastermind
  const withVenusian = mastermind.title === "gesod"
  //HACK. Don't love the hard coded question but not sure it's worth the restructure to tie layers in to state.
  const withConflagration = mastermind.title === "wellingtonHughes" && mastermind.questions.some((q) => q.isActive && q.question === "Where is Loren's charity ball going to be held?")
  return { withVenusian, withConflagration, withRoyalSociety: millie }
}

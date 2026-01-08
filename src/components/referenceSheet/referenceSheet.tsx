import { AnimatePresence, motion } from "framer-motion"
import { Tooltip } from "radix-ui";
import { useState } from "react"
import { ReactComponent as Logo } from "../assets/between-logo.svg";
import { StyledTooltip } from "../shared/Tooltip";
import { ReactComponent as BookIcon } from "./book.svg"

export function ReferenceSheet({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <div className="flex flex-col justify-start items-start h-full w-full pointer-events-none">
      <Tooltip.Root>  
        <Tooltip.Trigger asChild>
        <button
        type="button"
        aria-label="Open reference sheet"
        className="drawerButton"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BookIcon className="w-full h-full" />
      </button>
        </Tooltip.Trigger>
        <Tooltip.Content className="z-30">
          <StyledTooltip>Game rule reference sheet.</StyledTooltip>
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
            <h1 className="flex justify-center w-full text-theme-text-accent">
              <Logo className="w-1/4 h-auto mx-auto mb-4" />
            </h1>
            <h1 className="text-2xl font-bold text-theme-text-accent">Reference Sheet</h1>
            <div className="flex flex-col justify-stretch items-start text-left">
              <MovesSection />
              <PhaseSection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MovesSection() {
  const [view, setView] = useState<"day" | "night" | "information" | "vulnerable" | "answer-question">("day")
  return (
    <div className="m-2 rounded-md border border-theme-border-accent p-4 w-full">
      <h2 className="text-xl font-bold text-theme-text-accent text-center">Moves</h2>
      <div className="w-full flex flex-col md:grid md:grid-cols-5 gap-2 text-xs">
        <button type="button" className="gridButton" onClick={() => setView("day")}>
          <span className="text-xs font-bold">The Day Move</span>
        </button>
        <button type="button" className="gridButton" onClick={() => setView("night")}>
          <span className="text-xs font-bold">The Night Move</span>
        </button>
        <button type="button" className="gridButton" onClick={() => setView("information")}>
          <span className="text-xs font-bold">The Information Move</span>
        </button>
        <button type="button" className="gridButton" onClick={() => setView("vulnerable")}>
          <span className="text-xs font-bold">The Vulnerable Move</span>
        </button>
        <button type="button" className="gridButton" onClick={() => setView("answer-question")}>
          <span className="text-xs font-bold">Answer A Question</span>
        </button>
      </div>

      <div className="text-left pt-4">
        {view === "day" && (
          <div className="flex flex-col gap-2 text-left leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-theme-text-accent text-center">The Day Move</h3>
            <p>
              When you do something risky or face something you fear, name what you’re afraid will happen if you fail or
              lose your nerve, then roll with an appropriate ability.
            </p>
            <ul>
              <li>
                <strong>On a 10+,</strong> you do what you intended or you hold steady; describe what it looks like.
              </li>
              <li>
                <strong>On a 7-9,</strong> the Keeper will tell you how your actions would leave you vulnerable, and you
                can choose to back down or go through with it. If you go through with it, the Keeper describes what it
                looks like.
              </li>
              <li>
                <strong>On a 12+,</strong> you do what you intended or you hold steady, and the Keeper will tell you
                some extra benefit or advantage you receive. Describe what it looks like.
              </li>
            </ul>
          </div>
        )}
        {view === "night" && (
          <div className="flex flex-col gap-2 text-left leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-theme-text-accent text-center">The Night Move</h3>
            <p>
              When you do something risky or face something you fear, name what you’re afraid will happen if you fail or
              lose your nerve. The Keeper will tell you how it is worse than that. You can choose to back down or go
              through with it. If you go through with it, roll with an appropriate ability.{" "}
            </p>
            <ul>
              <li>
                <strong>On a 10+,</strong> you do what you intended or you hold steady; describe what it looks like.
              </li>
              <li>
                {" "}
                <strong> On a 7-9,</strong> you do it or hold steady, but there is a complication or cost; the Keeper
                describes what it looks like.
              </li>
              <li>
                {" "}
                <strong> On a 12+,</strong> you do what you intended or you hold steady, and the Keeper will tell you
                some extra benefit or advantage you receive. Describe what it looks like.
              </li>
            </ul>
          </div>
        )}
        {view === "information" && (
          <div className="flex flex-col gap-2 text-left leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-theme-text-accent text-center">The Information Move</h3>
            <p>
              When you search for a clue, conduct research, or otherwise gather information, describe how you’re doing
              so and roll with an appropriate ability.
            </p>{" "}
            <ul>
              <li>
                <strong>On a hit,</strong> you find a Clue. The Keeper will tell you what it is.
              </li>
              <li>
                <strong>On a 7-9,</strong> there’s a complication—either with the Clue itself, or a complication you
                encounter while searching. The Keeper will tell you what the complication is.
              </li>
              <li>
                <strong>On a 12+,</strong> you also find a Mastermind Clue.
              </li>
            </ul>
          </div>
        )}
        {view === "vulnerable" && (
          <div className="flex flex-col gap-2 text-left leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-theme-text-accent text-center">The Vulnerable Move</h3>
            <p>
              {" "}
              When you have an intimate moment with one or more Hunters while one of you is engaged in your Vice, you
              may each clear an appropriate Condition; the Hunter whose Vice is in play can speak freely about their
              past. Then, as a group, define a Clue that is stumbled upon during the scene; the Clue cannot conclusively
              answer a Question by itself.
            </p>
            <p>
              Alternatively, you can engage in your Vice by yourself or with a Side Character to get the benefits of the
              move, but doing so triggers the Day/Night Move. You can only participate in the Vulnerable Move once per
              phase.
            </p>
          </div>
        )}
        {view === "answer-question" && (
          <div className="flex flex-col gap-2 text-left leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-theme-text-accent text-center">Answer A Question</h3>
            <p>
              {" "}
              When the Hunters have an open, freewheeling discussion about the answer to a Question once they have
              gathered a number of Clues equal to at least half the Question’s Complexity—and reach a consensus—roll
              plus the number of Clues incorporated into the answer or otherwise explained away, minus the question’s
              Complexity.
            </p>
            <ul>
              <li>
                {" "}
                <strong>On a 10+,</strong> the answer is correct and an Opportunity can be pursued.
              </li>
              <li>
                {" "}
                <strong>On a 7-9,</strong> as above, but the Keeper will add an unwelcome complication to the answer
                and/or pursuing the Opportunity will be more dangerous.
              </li>
              <li>
                {" "}
                <strong>On a 6-,</strong> the answer is incorrect and the Keeper reacts.
              </li>
              <li>
                {" "}
                <strong>On a 12+,</strong> the answer is also a Mastermind Clue.
              </li>
            </ul>
            <p>
              <i>Notes:</i> The Answer a Question roll can never be taken with advantage or disadvantage. The success
              tier can be increased by putting on the Mask of the Past, but only if every Hunter does so. Alternatively,
              if the Threat has an unused Mask associated with it, it can be put on to increase the success tier of the
              roll (without additional Masks needing to be used). Generally-speaking, if your answer is incorrect, the
              Clues are not spent and can be used in a future attempt to Answer a Question. However, if the Question is
              one that has an either/or answer, the Clues are spent and the other answer is correct.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function PhaseSection() {
  const [view, setView] = useState<"day" | "night" | "dawn" | "dusk">("dawn")
  return (
    <div className="m-2 rounded-md border border-theme-border-accent p-4 w-full">
      <h2 className="text-xl font-bold text-theme-text-accent text-center">Phases</h2>
      <div className="w-full flex flex-col md:grid md:grid-cols-4 gap-2 text-xs">
        <button type="button" className="gridButton" onClick={() => setView("dawn")}>
          Dawn
        </button>
        <button type="button" className="gridButton" onClick={() => setView("day")}>
          Day
        </button>
        <button type="button" className="gridButton" onClick={() => setView("dusk")}>
          Dusk
        </button>
        <button type="button" className="gridButton" onClick={() => setView("night")}>
          Night
        </button>
      </div>
      <div className="text-left pt-4">
        {view === "day" && (
          <div className="flex flex-col gap-2 text-left leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-theme-text-accent text-center">Day</h3>
            <ol>
              <li>The Keeper presents a new Threat if there are less than three active Threats.</li>
              <li>Regular scenes commence, and continue until the Keeper decides to move to the next Phase.</li>
            </ol>
          </div>
        )}
        {view === "night" && (
          <div className="flex flex-col gap-2 text-left leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-theme-text-accent text-center">Night</h3>
            <div className="grid grid-cols-2 justify-evenly gap-4">
              <ol>
                <strong className="text-theme-text-accent">Hargrave House:</strong>
                <li>The Keeper reads the first prompt from the chosen Room and the assigned player resolves it.</li>
                <li>Repeat Step 1 until all four prompts have been resolved.</li>
                <li>Each player adds something from the answers to the Room prompts to their Personal Quarters.</li>
                <li>
                  The Keeper reveals any special moves or other resources that are unlocked as a result of completing
                  that Room.
                </li>
              </ol>
              <ol>
                <strong className="text-theme-text-accent">London:</strong>
                <li>The Keeper reads the first Unscene prompt and the assigned player resolves it.</li>
                <li>
                  The Keeper frames up a scene for one or more Hunters; the scene is played out until each Hunter who is
                  a focus of the scene has had a chance to do some narration, or to take or resolve an action.
                </li>
                <li>Repeat Step 2 until every Hunter has been the focus of a scene.</li>
                <li>
                  Repeat Steps 1 through 3 until you get to Step 1 and there are no more Unscene prompts, at which point
                  the Night Phase immediately ends.
                </li>
              </ol>
            </div>
          </div>
        )}
        {view === "dawn" && (
          <div className="flex flex-col gap-2 text-left leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-theme-text-accent text-center">Dawn</h3>

            <ol>
              <li>Collect Rewards if a Threat was resolved.</li>
              <li>Answer Dawn questions.</li>
              <li>Mark new elective Dawn questions (or leave either or both the same).</li>
              <li>Resolve any playbook or special moves that are resolved during the Dawn Phase.</li>
            </ol>
          </div>
        )}
        {view === "dusk" && (
          <div className="flex flex-col gap-2 text-left leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-theme-text-accent text-center">Dusk</h3>
            <ol>
              <li>
                The players may attempt to Answer a Question if they have collected enough Clues and wish to do so.
              </li>
              <li>Resolve any playbook moves or special moves that are resolved during the Dusk Phase.</li>
              <li>
                The players decide if they are going to have a London Night Phase or a Hargrave House Night Phase.
                <div className="flex">
                  <ul>
                    <strong className="text-theme-text-accent">Hargrave House:</strong>
                    <li>
                      The Keeper introduces the Hargrave House Room to be explored and assigns prompts to the players.
                    </li>
                  </ul>
                  <ul>
                    <strong className="text-theme-text-accent">London:</strong>
                    <li>Each player says what their Hunter will attempt to do during the upcoming Night Phase.</li>
                    <li>The Keeper introduces the Unscene and assigns prompts to the players.</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}

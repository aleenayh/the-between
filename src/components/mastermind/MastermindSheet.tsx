import { AnimatePresence, motion } from "framer-motion"
import { Dialog, Tooltip } from "radix-ui"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { useGame } from "../../context/GameContext"
import { PlayerRole } from "../../context/types"
import { parseStaticText } from "../playbooks/utils"
import { CloseButton } from "../shared/CloseButton"
import { Section } from "../shared/Section"
import { StyledTooltip } from "../shared/Tooltip"
import { ReactComponent as MastermindIcon } from "./chess.svg"
import { Masterminds } from "./content/index"

export function MastermindSheet({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const {
    gameState,
    user: { role },
  } = useGame()
  const mastermind = gameState.mastermind
  const [modalOpen, setModalOpen] = useState(false)
  if (!mastermind && role !== PlayerRole.KEEPER) return null

  const { title, intro, servants, layers } = mastermind
    ? Masterminds[mastermind.title as keyof typeof Masterminds]
    : { title: "Mastermind", intro: [], servants: [], layers: [] }
  return (
    <div className="flex flex-col justify-start items-start h-full w-full pointer-events-none">
      {(mastermind || role === PlayerRole.KEEPER) && (
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
          <button
          type="button"
          aria-label="Open mystery sheet"
          className="drawerButton"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MastermindIcon className="w-full h-full" />
        </button>
          </Tooltip.Trigger>
          <Tooltip.Content className="z-30">
            <StyledTooltip>View Mastermind Conspiracy.</StyledTooltip>
          </Tooltip.Content>
        </Tooltip.Root>

      )}
      <AnimatePresence>
        {isOpen && (
          <div>
            {mastermind ? (
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
                <h1 className="text-2xl font-bold text-theme-text-accent mb-10">{title}</h1>
                <div className="flex flex-col gap-10">
                  <Section title="Introduction" collapsible={true} minify={true}>
                    {intro.map((i) => (
                      <p key={i} className="text-left leading-relaxed text-sm">
                        {parseStaticText(i)}
                      </p>
                    ))}
                  </Section>
                  <ClueSection role={role} />
                  {role === PlayerRole.KEEPER && (
                    <div className="flex flex-col gap-2 mt-8 border border-theme-border-accent rounded-lg p-4">
                      <h2 className="text-xl font-bold text-theme-text-accent">Keeper Materials</h2>
                      <p className="text-sm text-theme-text-muted italic">Not visible to Hunters.</p>
                      <Section title="Layers" collapsible={true}>
                        {layers.map((l) => (
                          <Section title={l.title} collapsible={true} minify={true} key={l.title}>
                            {l.text.map((t) => (
                              <p key={t} className="text-left leading-relaxed">
                                {parseStaticText(t)}
                              </p>
                            ))}
                          </Section>
                        ))}
                      </Section>
                      <Section title="Servants" collapsible={true}>
                        {servants.map((s) => (
                          <div key={s.title}>
                            <h3 className="text-lg font-bold text-theme-text-accent">{s.title}</h3>
                            {s.description.map((d) => (
                              <p key={d} className="text-left leading-relaxed">
                                {parseStaticText(d)}
                              </p>
                            ))}
                            {s.quotes.length > 0 && (
                              <h3 className="text-lg font-bold text-theme-text-accent">Quotes</h3>
                            )}
                            {s.quotes.map((q) => (
                              <p key={q} className="text-left leading-relaxed italic">
                                &ldquo;{parseStaticText(q)}&rdquo;
                              </p>
                            ))}
                          </div>
                        ))}
                      </Section>
                      <Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
                        <Dialog.Trigger className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100">
                          Change Mastermind
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="DialogOverlay" />
                          <Dialog.Content className="DialogContent">
                            <Dialog.Close asChild>
                              <CloseButton/>
                            </Dialog.Close>
                            <Dialog.Title className="DialogTitle">Change Mastermind</Dialog.Title>
                            <Dialog.Description className="DialogDescription">
                              There can only be one active mastermind at a time. Selecting a new mastermind will replace the
                              current one, including active clues. You can also remove the mastermind without selecting a
                              new one.
                            </Dialog.Description>
                            <MastermindForm setIsOpen={setModalOpen} />
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
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
                <h1 className="text-2xl font-bold text-theme-text-accent mb-10">{title}</h1>
                <div className="text-lg text-theme-text-muted text-center my-10">
                  No active mastermind. You can add one below.
                </div>
                {role === PlayerRole.KEEPER && (
                  <Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
                    <Dialog.Trigger className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100">
                      Change Mastermind
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="DialogOverlay" />
                      <Dialog.Content className="DialogContent">
                        <Dialog.Close asChild>
                          <CloseButton />
                        </Dialog.Close>
                        <Dialog.Title className="DialogTitle">Change Mastermind</Dialog.Title>
                        <Dialog.Description className="DialogDescription">
                          There can only be one active mastermind at a time. Selecting a new mastermind will replace the
                          current one, including active clues. You can also remove the mastermind without selecting a
                          new one.
                        </Dialog.Description>
                        <MastermindForm setIsOpen={setModalOpen} />
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                )}
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MastermindForm({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const { register, handleSubmit } = useForm<{
    title: keyof typeof Masterminds
  }>()
  const { updateGameState } = useGame()

  const onSubmit = (data: { title: keyof typeof Masterminds }) => {
    const dominionContent = Masterminds[data.title]
    if (!dominionContent) {
      toast.error(`Something went wrong; mastermind ${data.title} not found.`)
      return
    }

    updateGameState({
      mastermind: {
        title: data.title,
        clues: undefined,
      },
    })
    toast.success(`Mastermind changed to ${dominionContent.title}`)
    setIsOpen(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2 items-center justify-start my-4">
        <input type="radio" {...register("title")} value="noxilliax" />
        <label htmlFor="title">Noxilliax, The Emerald Nightmare (The Great Forest)</label>
      </div>
      <div className="w-full flex gap-2 items-center justify-center">
        <button
          type="submit"
          className="bg-theme-bg-secondary text-theme-text-primary px-4 py-2 rounded-lg opacity-80 hover:opacity-100 border-2 hover:bg-theme-bg-accent hover:border border-2-theme-border border-2-accent hover:text-theme-text-accent"
        >
          Confirm
        </button>
        <button
          type="button"
          className="bg-theme-bg-secondary text-theme-text-primary px-4 py-2 rounded-lg opacity-80 hover:opacity-100 border-2 hover:bg-theme-bg-accent hover:border border-2-theme-border border-2-accent hover:text-theme-text-accent"
          onClick={() => {
            updateGameState({ mastermind: null })
          }}
        >
          Remove Dominion
        </button>
      </div>
    </form>
  )
}

//Consider DRY up with Mystery ClueSection
function ClueSection({ role }: { role: PlayerRole }) {
  const { updateGameState, gameState } = useGame()
  const { register, handleSubmit, reset } = useForm<{ customClue: string }>()
  const { mastermind: mastermindState } = gameState
  if (!mastermindState) return null
  const earnedClues = mastermindState.clues?.filter((clue) => clue.earned)

  const addCustomClue = (data: { customClue: string }) => {
    const newClues = mastermindState.clues
      ? [
          ...mastermindState.clues,
          {
            text: data.customClue.trim(),
            earned: true,
            explained: false,
            removed: false,
          },
        ]
      : [
          {
            text: data.customClue.trim(),
            earned: true,
            explained: false,
            removed: false,
          },
        ]
    updateGameState({
      mastermind: {
        ...mastermindState,
        clues: newClues,
      },
    })
    reset()
  }

  const earnClue = (clue: string, checked: boolean) => {
    const existingClue = mastermindState.clues?.find((c) => c.text === clue)
    const newClues =
      existingClue && mastermindState.clues
        ? mastermindState.clues.map((c) => (c.text === clue ? { ...c, earned: checked, removed: false } : c))
        : [...(mastermindState.clues ?? []), { text: clue, earned: checked, explained: false, removed: false }]
    updateGameState({
      mastermind: {
        ...mastermindState,
        clues: newClues,
      },
    })
  }

  const explainClue = (clue: string, checked: boolean) => {
    const newClues = mastermindState.clues?.map((c) =>
      c.text === clue ? { ...c, explained: checked, removed: false } : c,
    ) ?? [{ text: clue, earned: true, explained: checked, removed: false }]
    updateGameState({
      mastermind: {
        ...mastermindState,
        clues: newClues,
      },
    })
  }

  const removeClue = (clue: string) => {
    const newClues = mastermindState.clues?.map((c) =>
      c.text === clue ? { ...c, earned: false, removed: true } : c,
    ) ?? [{ text: clue, earned: false, explained: false, removed: true }]
    updateGameState({
      mastermind: {
        ...mastermindState,
        clues: newClues,
      },
    })
  }

  return (
    <Section title="Clues" collapsible={true} minify={true}>
      <h3 className="text-sm text-theme-text-primary text-center">Earned Clues</h3>
      <div className="flex gap-2 text-sm text-theme-text-muted text-left justify-center items-center">
        <div>Earned: {earnedClues?.length}</div> <div>|</div>
        <div> Explained: {earnedClues?.filter((clue) => clue.explained).length}</div>
        <div>|</div> <div> Remaining: {earnedClues?.filter((clue) => !clue.explained).length}</div>
      </div>
      <div className="flex flex-col justify-start items-start text-left gap-2 w-full">
        <div
          key={"header-row"}
          className="grid grid-cols-[20px_20px_20px_1fr] gap-4 text-xs whitespace-nowrap overflow-ellipsis w-full"
        >
          <span className="text-left -rotate-45">Earned</span>
          <span className="text-left -rotate-45">Explained</span>
          <span className="text-left -rotate-45">Remove</span>
          <span></span>
        </div>
        {earnedClues && earnedClues.length > 0 ? (
          earnedClues.map((clue) => (
            <div key={clue.text} className="grid grid-cols-[20px_20px__20px_1fr] gap-2 items-center w-full">
              <input
                type="checkbox"
                checked={clue.earned}
                disabled={role !== PlayerRole.KEEPER}
                onChange={(e) => earnClue(clue.text, e.target.checked)}
              />
              <input
                type="checkbox"
                checked={clue.explained}
                onChange={(e) => explainClue(clue.text, e.target.checked)}
              />
              <button
                type="button"
                className="text-xs text-theme-text-muted bg-theme-bg-primary rounded-full px-0 aspect-square hover:bg-theme-bg-accent hover:text-theme-text-accent hover:border hover:border-theme-border-accent"
                onClick={() => removeClue(clue.text)}
              >
                X
              </button>
              <span className="text-left">{clue.text}</span>
            </div>
          ))
        ) : (
          <div className="text-sm text-theme-text-muted italic w-full text-center">No clues yet</div>
        )}
      </div>
      <form onSubmit={handleSubmit(addCustomClue)} className="flex gap-2 w-full">
        <input type="text" placeholder="Add custom clue..." className="flex-grow" {...register("customClue")} />
        <button
          type="submit"
          className="bg-theme-bg-secondary text-theme-text-primary px-4 py-2 rounded-lg opacity-80 hover:opacity-100 border-2 hover:bg-theme-bg-accent hover:border border-2-theme-border border-2-accent hover:text-theme-text-accent"
        >
          Add
        </button>
      </form>
    </Section>
  )
}

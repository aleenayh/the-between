import { AnimatePresence, motion } from "framer-motion"
import { Dialog, Tooltip } from "radix-ui"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { useGame } from "../../context/GameContext"
import { PlayerRole } from "../../context/types"
import { PencilIcon } from "../playbooks/creation/PencilIconButton"
import { parseStaticText } from "../playbooks/utils"
import { CloseButton } from "../shared/CloseButton"
import { Divider } from "../shared/Divider"
import { EditableLine } from "../shared/EditableLine"
import { GlassyButton } from "../shared/GlassyButton"
import { Section } from "../shared/Section"
import { StyledTooltip } from "../shared/Tooltip"
import { ReactComponent as MastermindIcon } from "./chess.svg"
import { Masterminds } from "./content/index"
import type { Mastermind } from "./types"

export function MastermindSheet({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const {
    gameState,
    user: { role },
  } = useGame()
  const mastermind = gameState.mastermind
  const [modalOpen, setModalOpen] = useState(false)
  if (!mastermind && role !== PlayerRole.KEEPER) return null
  const mastermindContent = Masterminds[mastermind?.title as keyof typeof Masterminds]
  return (
    <div className="flex flex-col justify-start items-start h-full w-full pointer-events-none">
      {(mastermind || role === PlayerRole.KEEPER) && (
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
          <button
          type="button"
          aria-label="Open mastermind sheet"
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
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: 0 }}
                exit={{ left: "-100%" }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full md:w-1/2 h-screen flex flex-col justify-start items-center bg-theme-bg-primary border-r border-theme-border-accent rounded-lg p-4 z-10 transition-all ease-linear overflow-y-auto pointer-events-auto"
              >
                <CloseButton onClick={() => setIsOpen(!isOpen)} />
                <h1 className="text-2xl font-bold text-theme-text-accent mb-10">{mastermindContent?.title ?? mastermind?.title ??"Mastermind Conspiracy"}</h1>
                {mastermind && (<MastermindContent mastermind={mastermind}/>             )}
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
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MastermindContent({ mastermind }: { mastermind: Mastermind }) {
  const { user: { role }, updateGameState } = useGame()
  const [editModalOpen, setEditModalOpen] = useState(false)
  const mastermindContent = mastermind.type === "canon" ? Masterminds[mastermind.title] : undefined
  const activeQuestion = mastermind.questions.find((q) => q.isActive)
  const stateAddedServants = mastermind.servants

  const addServant = (idx:number, servant: string) => {
    const newServants = [...(mastermind.servants ??     [])]
    if (idx < newServants.length) {
      newServants[idx] = servant
    } else {
      newServants.push(servant)
    }
    updateGameState({
      mastermind: { ...mastermind, servants: newServants },
    })
  }
  return ( <div className="flex flex-col gap-2 mb-2">
    {activeQuestion && (
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-theme-text-accent">{activeQuestion.question} 
          {role === PlayerRole.KEEPER && <Dialog.Root open={editModalOpen} onOpenChange={setEditModalOpen}>
            <Dialog.Trigger asChild>
              <button type="button" className="text-xs text-theme-text-accent hover:text-theme-text-primary mx-2"><PencilIcon /></button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                <Dialog.Close asChild>
                  <CloseButton />
                </Dialog.Close>
                <Dialog.Title className="DialogTitle">Edit Question</Dialog.Title>
                <Dialog.Description className="DialogDescription">Edit the question, complexity, or opportunity for the active layer. Adjustments here do not affect earned clues attached to the question.</Dialog.Description>
              <EditMastermindQuestionForm question={activeQuestion.question} closeModal={() => setEditModalOpen(false)} />
              </Dialog.Content>
            </Dialog.Portal>
            </Dialog.Root>}
        </h2>
        <p className="text-xs text-theme-text-muted">(Complexity: {activeQuestion.complexity})</p>
        {activeQuestion.opportunity !== "" && (<p className="text-sm text-theme-text-muted italic text-left">Opportunity: {activeQuestion.opportunity}</p>)}
      </div>
    )}
    
    <ClueSection role={role} />
    {role === PlayerRole.KEEPER && <div> {mastermind.type === "canon" && mastermindContent ? (
      <div className="flex flex-col gap-2 border border-theme-border-accent rounded-lg p-2">
        <Section title="Keeper Materials" collapsible={true}>
        <p className="text-sm text-theme-text-muted italic">Not visible to Hunters.</p>
                <Section title="Layers" collapsible={true}>
          {mastermindContent.layers.map((l) => (
            <LayerSection key={l.title} layer={l.title} />
          ))}
        </Section>
        <Section title="Servants" collapsible={true}>
          {mastermindContent.servants.map((s) => (
            <div key={s.title}>
              <h3 className="text-lg font-bold text-theme-text-accent">{s.title}</h3>
              {s.description.map((d) => (
                <p key={d} className="text-left leading-relaxed">
                  {parseStaticText(d)}
                </p>
              ))}
              {s.quotes.length > 0 && (
                <h3 className="text-md font-bold text-theme-text-accent text-left">Quotes</h3>
              )}
              {s.quotes.map((q) => (
                <p key={q} className="text-left leading-relaxed italic">
                  &ldquo;{parseStaticText(q)}&rdquo;
                </p>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-theme-text-accent">Add a Servant</h2>
            {stateAddedServants?.map((s, idx) => (
              <EditableLine key={`${s}-${// biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
idx}`} editable={true} text={s} onSave={(idx, value) => addServant(idx, value)} index={idx} />
            ))}
            <EditableLine key={`extra-servant`} editable={true} text={""} onSave={(idx, value) => addServant(idx, value)} index={(stateAddedServants?.length ?? 0)+1} />
            </div>
        </Section>
        </Section>
      </div>)
    : (<div><SwitchQuestionsCustomMastermind mastermind={mastermind} /></div>)}</div>}
  </div>)
}

function SwitchQuestionsCustomMastermind({ mastermind }: { mastermind: Mastermind }) {
  const { updateGameState } = useGame()
  const updateQuestion = (newQuestion: string) => {
    updateGameState({
      mastermind: {
        ...mastermind,
        questions: mastermind.questions.map((q) => q.question === newQuestion ? { ...q, isActive: true } : {...q, isActive: false}),
    },
  })
}
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold text-theme-text-accent">Available Questions</h2>
      <div className="flex flex-col gap-2">
        {mastermind.questions.map((q) => (
          <div key={q.question} className="bg-theme-bg-secondary border border-theme-border-accent rounded-lg p-2">
    <p><strong>{q.question}</strong> (Complexity: {q.complexity})</p>
    <p className="italic text-left text-sm">Opportunity: {q.opportunity ?? "None"}</p>
    <p className="text-left text-sm my-2 text-theme-text-muted">Click the button below to display this question to your Hunters. This does not affect earned clues for other mastermind questions.</p>
    <button type="button" className="w-1/3 mx-auto bg-theme-bg-secondary text-theme-text-primary px-4 py-2 rounded-lg opacity-80 hover:opacity-100 border-2 hover:bg-theme-bg-accent hover:border border-2-theme-border border-2-accent hover:text-theme-text-accent" onClick={() => updateQuestion(q.question)}>Display this question</button></div>
        ))}
      </div>
    </div>
  )
}

function MastermindForm({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const [formType, setFormType] = useState<"canon" | "custom">("canon")
  return (
      <div className="flex flex-col gap-2 items-center justify-start my-4 min-h-[20rem]">
        <div className="flex gap-2 items-center justify-center">
        <div className="flex w-full max-w-[30rem] rounded-full border border-theme-border bg-theme-bg-secondary text-sm">
          <motion.div
            className={`relative flex w-full cursor-pointer items-center justify-center text-nowrap rounded-full px-2 text-theme-text-primary transition-colors duration-300 ${formType === "canon" ? "font-semibold text-theme-text-accent" : ""}`}
            onClick={() => {
              setFormType("canon")
            }}
          >
            {formType === "canon" && (
              <motion.div
                className="absolute top-0 left-0 h-full w-full rounded-full bg-theme-bg-accent"
                layoutId="price"
              ></motion.div>
            )}{" "}
            <span className="z-20">Canonical Mastermind</span>{" "}
          </motion.div>
          <motion.div
            className={`relative flex w-full cursor-pointer items-center justify-center rounded-full px-2 text-theme-text-primary transition-colors duration-300 ${formType === "custom" ? "font-semibold text-theme-text-accent" : ""}`}
            onClick={() => {
              setFormType("custom")
            }}
          >
            {formType === "custom" && (
              <motion.div className="absolute top-0 left-0 h-full w-full rounded-full bg-theme-bg-accent"></motion.div>
            )}{" "}
            <span className="z-20">Custom Mastermind</span>{" "}
          </motion.div>
        </div>
        </div>
      <div className="relative w-full ">
        <AnimatePresence>
        <motion.div
        className="w-full absolute top-0 left-0"
        initial={{ left: formType === "canon" ? "0" : "100%" }}
        animate={{ left: 0}}
        exit={{ left: formType === "canon" ? "-100%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        key={formType}
        >
      {formType === "canon" && <CanonMastermindForm setIsOpen={setIsOpen} />}
      {formType === "custom" && <CustomMastermindForm setIsOpen={setIsOpen} />}
      </motion.div>
      </AnimatePresence></div>
    </div>
  )
}

function CanonMastermindForm({setIsOpen}: {setIsOpen: (isOpen: boolean) => void}) {
  const { register, handleSubmit } = useForm<{
    title: keyof typeof Masterminds
  }>()
  const { updateGameState } = useGame()

  const onSubmit = (data: { title: keyof typeof Masterminds }) => {
    const mastermindContent = Masterminds[data.title]
    if (!mastermindContent) {
      toast.error(`Something went wrong; mastermind ${data.title} not found.`)
      return
    }
    const firstLayer = mastermindContent.layers[0]
    const firstQuestion = mastermindContent.questions.find((q) => q.layer === firstLayer.title)
    if (!firstQuestion) {
      toast.error(`Something went wrong; first question for layer ${firstLayer.title} not found.`)
      return
    }
    const questions = [{
      question: firstQuestion.question,
      opportunity: firstQuestion.opportunity ?? "",
      complexity: firstQuestion.complexity,
      clues: [],
      isActive: true,
    },
    ...mastermindContent.questions.filter((q) => q.layer !== firstLayer.title).map(    (q) => {
      return {
        question: q.question,
        opportunity: q.opportunity ?? "",
        complexity: q.complexity,
        clues: [],
        isActive: false,
      }
    }),
  ]
  const layers = mastermindContent.layers.map((l) => ({title: l.title, isActive: false}))
  layers[0].isActive = true

    updateGameState({
      mastermind: {
        title: data.title,
        type: "canon",
        layers,
        questions,
        servants:         [],
      },
    })
    toast.success(`Mastermind changed to ${mastermindContent.title}`)
    setIsOpen(false)
  }

  const masterminds = Object.keys(Masterminds).map((key) => ({
    title: key,
    label: Masterminds[key as keyof typeof Masterminds].title,
  }))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {masterminds.map((mastermind) => (
          <div className="flex gap-2 items-center justify-start my-4" key={`select-${mastermind.title}`}>
          <input type="radio" {...register("title")} value={mastermind.title} />
          <label htmlFor="title">{mastermind.label}</label>
          </div>
        ))}

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
          Remove Mastermind
        </button>
      </div>
    </form>
  )
}


type CustomMastermindFormInputs = {
  title: string
  questions:   {
    question: string
    opportunity: string
    complexity: number
    isActive: boolean
  }[]
}

function CustomMastermindForm({setIsOpen}: {setIsOpen: (isOpen: boolean) => void}) {
  const { register, handleSubmit, watch, setValue } = useForm<CustomMastermindFormInputs>({
    defaultValues: {
      title: "",
      questions: [{ question: "", opportunity: "", complexity: 6, isActive: false }],
    }})
  const { updateGameState } = useGame()

  const onSubmit = (data: CustomMastermindFormInputs) => {
    const questions = data.questions.map    ((q) => ({
      question: q.question,
      opportunity: q.opportunity ?? "",
      complexity: q.complexity,
      clues: [],
      isActive: q.isActive,
    }))
    updateGameState({
      mastermind: {
        title: data.title,
        type: "custom",
        questions,
        servants:         [""],
      },
    })
    toast.success(`Mastermind changed to ${data.title}`)
    setIsOpen(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2 w-full items-baseline"><label htmlFor="title">Title</label>
      <input type="text" {...register("title")} className="w-full" /></div>

      <h2 className="font-bold text-center text-theme-text-accent text-lg">
								Questions
							</h2>
							{Object.values(watch("questions")).map((q, index) => (
                <div key={`question-create-${// biome-ignore lint/suspicious/noArrayIndexKey: form input
index}`} className="flex flex-col gap-2">
								<div
									className="flex items-baseline justify-center gap-2"
									key={`question-create-${
										// biome-ignore lint/suspicious/noArrayIndexKey: ephemeral form
										index
									}`}
								>
                  <label htmlFor={`questions.${index}.question`}>Question</label>
									<input
										type="text"
										className="w-full"
										value={q.question}
										{...register(`questions.${index}.question`)}
									/>
                  </div>
                  <div className="flex gap-2 items-baseline justify-center">
                  <label htmlFor={`questions.${index}.opportunity`}>Opportunity</label>
									<input
										type="text"
										className="w-full"
										value={q.opportunity}
										{...register(`questions.${index}.opportunity`)}
									/></div>
                                    <div className="flex gap-2 items-baseline justify-center">
                                    <label htmlFor={`questions.${index}.complexity`}>Complexity</label>
									<input
										type="number"
										className="w-full"
										value={q.complexity}
										{...register(`questions.${index}.complexity`)}
									/>
                  <input type="checkbox" checked={q.isActive} {...register(`questions.${index}.isActive`)} />
                  <label htmlFor={`questions.${index}.isActive`}>Active</label>

                  </div>
                  <Divider/>
								</div>
							))}
							<div className="flex gap-2 items-center justify-evenly my-4 w-full"><button
								type="button"
								className="mx-auto w-1/3 rounded-md bg-theme-bg-accent text-theme-text-accent p-1 ml-4 flex items-center justify-center hover:bg-theme-bg-accent hover:text-theme-text-accent"
								onClick={() => {
									setValue("questions", [...watch("questions"), { question: "", opportunity: "", complexity: 6, isActive: false }]);
								}}
							>
								+ Add Question
							</button>
              <button
										type="button"
								className="mx-auto w-1/3 rounded-md bg-theme-bg-accent text-theme-text-accent p-1 ml-4 flex items-center justify-center hover:bg-theme-bg-accent hover:text-theme-text-accent"
										onClick={() =>
											setValue(
												"questions",
												watch("questions").filter((_, i) => i !== watch("questions").length - 1),
											)
										}
									>
										- Remove Question
									</button>
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
          Remove Mastermind
        </button>
      </div>
    </form>
  )
}

function EditMastermindQuestionForm({question, closeModal}: {question: string, closeModal: () => void}) {
  const { updateGameState, gameState } = useGame()
  const { mastermind: mastermindState } = gameState
  const originalQuestion = mastermindState?.questions?.find((q) => q.question === question)
  const { register, handleSubmit } = useForm<{ question: string, complexity: number, opportunity: string }>({
    defaultValues: {
      question: question,
      complexity: originalQuestion?.complexity ?? 6,
      opportunity: originalQuestion?.opportunity ?? "",
    },
  })
  if (!mastermindState) return null

  const onSubmit = (data: { question: string, complexity: number, opportunity: string }) => {
    updateGameState({
      mastermind: {
        ...mastermindState,
        questions: mastermindState.questions?.map((q) => q.question === question ? { ...q, question: data.question, complexity: data.complexity, opportunity: data.opportunity } : q),
      },
    })
    closeModal()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <label htmlFor="question">Question</label>
      <input type="text" {...register("question")} />
      <div className="flex gap-2 items-center justify-evenly"><label htmlFor="complexity">Complexity</label>
      <input type="number" {...register("complexity")} /></div>
      <label htmlFor="opportunity">Opportunity</label>
      <input type="text" {...register("opportunity")} />
      <button type="submit" className="w-1/3 mx-auto bg-theme-bg-secondary text-theme-text-primary px-4 py-2 rounded-lg opacity-80 hover:opacity-100 border-2 hover:bg-theme-bg-accent hover:border border-2-theme-border border-2-accent hover:text-theme-text-accent">Save</button>
    </form>
  )
}

//Consider DRY up with Mystery ClueSection
function ClueSection({ role }: { role: PlayerRole }) {
  const { updateGameState, gameState } = useGame()
  const { register, handleSubmit, reset } = useForm<{ customClue: string }>()
  const { mastermind: mastermindState } = gameState
  if (!mastermindState) return null
  const activeQuestions =   mastermindState.questions?.filter((q) => q.isActive)[0]
  const earnedClues = activeQuestions?.clues?.filter((clue) => clue.earned)

  const addCustomClue = (data: { customClue: string }) => {
    const newClues = activeQuestions?.clues
      ? [
          ...(activeQuestions?.clues ?? []),
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
        questions: mastermindState.questions?.map((q) => q.question === activeQuestions?.question ? { ...q, clues: newClues } : q),
      },
    })
    reset()
  }

  const earnClue = (clue: string, checked: boolean) => {
    const existingClue = activeQuestions?.clues?.find((c) => c.text === clue)
    const newClues =
      existingClue && activeQuestions?.clues
        ? activeQuestions?.clues.map((c) => (c.text === clue ? { ...c, earned: checked, removed: false } : c))
        : [...(activeQuestions?.clues ?? []), { text: clue, earned: checked, explained: false, removed: false }]
    updateGameState({
      mastermind: {
        ...mastermindState,
        questions: mastermindState.questions?.map((q) => q.question === activeQuestions?.question ? { ...q, clues: newClues } : q),
      },
    })
  }

  const explainClue = (clue: string, checked: boolean) => {
    const newClues = activeQuestions?.clues?.map((c) =>
      c.text === clue ? { ...c, explained: checked, removed: false } : c,
    ) ?? [{ text: clue, earned: true, explained: checked, removed: false }]
    updateGameState({
      mastermind: {
        ...mastermindState,
        questions: mastermindState.questions?.map((q) => q.question === activeQuestions?.question ? { ...q, clues: newClues } : q),
      },
    })
  }

  const removeClue = (clue: string) => {
    const newClues = activeQuestions?.clues?.map((c) =>
      c.text === clue ? { ...c, earned: false, removed: true } : c,
    ) ?? [{ text: clue, earned: false, explained: false, removed: true }]
    updateGameState({
      mastermind: {
        ...mastermindState,
          questions: mastermindState.questions?.map((q) => q.question === activeQuestions?.question ? { ...q, clues: newClues } : q),
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
        <GlassyButton
        onClick={handleSubmit(addCustomClue)  }
        >
          Add
        </GlassyButton>
      </form>
    </Section>
  )
}

function LayerSection({ layer }: { layer: string }) {
  const { gameState, updateGameState } = useGame()
  const { mastermind: mastermindState } = gameState
  if (!mastermindState || mastermindState.type !== "canon") return null
  const mastermindContent = Masterminds[mastermindState.title as keyof typeof Masterminds]
  const hasQuestion = mastermindContent.questions.find((q) => q.layer === layer)
  const stateLayer = mastermindState.layers?.find((l) => l.title === layer)

  const updateQuestion = (newQuestion: string) => {
      updateGameState({
        mastermind: {
          ...mastermindState,
          questions: mastermindState.questions.map((q) => q.question === newQuestion ? { ...q, isActive: true } : {...q, isActive: false}),
      },
    })
  }
  const l = mastermindContent.layers.find((l) => l.title === layer)
  if (!l) return null

  const checkItem = (index: number, checked: boolean) => {
    //initialize checks if not present
    let checks = stateLayer?.checks
    if (!checks) {
      const contentChecks = mastermindContent.layers.find((l) => l.title === layer)?.checkList
      checks = contentChecks ? Array.from({length: contentChecks.length}).map(() => 0) : []
    }
    const newChecks = checks.map((c, idx) => idx === index ? checked ? 1:0 : c)
    updateGameState({
      mastermind: {
        ...mastermindState,
        layers: mastermindState.layers?.map((l) => l.title === layer ? { ...l, checks: newChecks } : l),
      },
    })
  }
  return (
<Section title={l.title} collapsible minify leftAlign key={l.title}>

  {hasQuestion && hasQuestion.question !== mastermindState.questions.find((q) => q.isActive)?.question && <div className="bg-theme-bg-secondary border border-theme-border-accent rounded-lg p-2">
    <p className="text-left text-sm my-2 text-theme-text-muted">This layer comes with a new question:</p>
    <p><strong>{hasQuestion.question}</strong> (Complexity: {hasQuestion.complexity})</p>
    <p className="italic text-left text-sm">Opportunity: {hasQuestion.opportunity ?? "None"}</p>
    <p className="text-left text-sm my-2 text-theme-text-muted">Click the button below to display this question to your Hunters. This does not affect earned clues for other mastermind questions.</p>
    <button type="button" className="w-1/3 mx-auto bg-theme-bg-secondary text-theme-text-primary px-4 py-2 rounded-lg opacity-80 hover:opacity-100 border-2 hover:bg-theme-bg-accent hover:border border-2-theme-border border-2-accent hover:text-theme-text-accent" onClick={() => updateQuestion(hasQuestion.question)}>Display this question</button></div>}
              
              
              
              {l.text.map((t) => (
                <p key={t} className="text-left leading-relaxed">
                  {parseStaticText(t)}
                </p>
              ))}
              {l.checkList && l.checkList.length > 0 && (
                <div className="flex flex-col gap-2">
                  <ul className="list-disc list-inside">
                    {l.checkList.map((c, idx) => (
                      <li key={c} className="text-left leading-relaxed text-sm">
                        <input type="checkbox" checked={stateLayer?.checks?.[idx] === 1} onChange={(e) => checkItem(idx, e.target.checked)} /> {c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Section>
  )
}
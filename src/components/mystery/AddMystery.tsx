import { Dialog } from "radix-ui"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useGame } from "../../context/GameContext"
import { CloseButton } from "../shared/CloseButton"
import { Divider } from "../shared/Divider"
import { CountdownItem } from "./Countdown"
import { type Mystery, MysteryTheme, type Question } from "./types"
import { GlassyButton } from "../shared/GlassyButton"

type AddMysteryFormInputs = {
  title: string
  intro: string
  questions: Question[]
  theme: MysteryTheme
  countdownTotal: number
}

export function AddMystery() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <GlassyButton
        >
          Add Threat
        </GlassyButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" style={{ zIndex: 20 }} />
        <Dialog.Content className="DialogContent" style={{ zIndex: 30 }}>
          <Dialog.Close asChild>
            <CloseButton/>
          </Dialog.Close>
            <Dialog.Title className="DialogTitle">Add Threat</Dialog.Title>
          <Dialog.Description className="hidden">Add a new threat to the game.</Dialog.Description>

 <CustomMysteryForm setIsOpen={setIsOpen} />

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function CustomMysteryForm({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const [numberOfQuestions, setNumberOfQuestions] = useState(1)
  const { register, handleSubmit, watch, reset, setValue } = useForm<AddMysteryFormInputs>({
    defaultValues: {
      title: "",
      questions: [
        {
          text: "",
          complexity: 1,
          opportunity: "",
        },
      ],
      theme: MysteryTheme.Rose,
      countdownTotal: 3,
    },
  })
  const { gameState, updateGameState } = useGame()

  const addQuestion = () => {
    setNumberOfQuestions(numberOfQuestions + 1)
    setValue(`questions.${numberOfQuestions}.text`, "")
    setValue(`questions.${numberOfQuestions}.complexity`, 1)
    setValue(`questions.${numberOfQuestions}.opportunity`, "")
  }
  const removeQuestion = () => {
    setValue(`questions`, watch("questions").slice(0, -1))
  }

  const onSubmit = (data: AddMysteryFormInputs) => {
    const newMystery: Mystery = {
      title: data.title,
      intro: data.intro.split("\n").filter((line) => line.trim() !== ""),
      questions: data.questions,
      theme: data.theme,
      countdownTotal: data.countdownTotal,
      countdownCurrent: 0,
    }
    updateGameState({
      mysteries: [...gameState.mysteries, newMystery],
    })
    reset()
    setIsOpen(false)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 overflow-y-auto max-h-[75vh]">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-theme-text-accent text-center font-bold">
          Title
        </label>
        <input
          type="text"
          {...register("title")}
          className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
        />
                <Divider />
                <label htmlFor="title" className="text-theme-text-accent text-center font-bold">
          Introduction
        </label>
        <textarea
          {...register("intro")}
          className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
        />
                
        <Divider />
        <div className="flex flex-col gap-2">
          <label htmlFor="questions" className="text-theme-text-accent text-center font-bold">
            Questions
          </label>
          {watch("questions").map((question: Question, index: number) => (
            <div
              className="flex flex-col items-stretch justify-center gap-2"
              // biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
              key={`question-${index}`}
            >
              <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex-grow flex gap-2 items-center w-full md:w-auto">
                <label htmlFor={`questions.${index}.text`}>Text</label>
                <input
                  type="text"
                  defaultValue={question.text}
                  {...register(`questions.${index}.text`)}
                  className="flex-grow border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
                />
              </div>
              <div className="flex gap-2 items-center w-full md:w-auto">
                <label htmlFor={`questions.${index}.complexity`}>Complexity</label>
                <input
                  type="number"
                  defaultValue={question.complexity}
                  {...register(`questions.${index}.complexity`)}
                  min={1}
                  max={10}
                  className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
                />
              </div>
              </div>
              <div className="flex-1 flex gap-2 items-center w-full md:w-auto">
                <label htmlFor={`questions.${index}.opportunity`}>Opportunity</label>
                <input
                  type="text"
                  defaultValue={question.opportunity}
                  {...register(`questions.${index}.opportunity`)}
                  className="flex-grow border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
                />
              </div>
            </div>
          ))}

          <div className="flex gap-2 text-sm md:text-md">
            <button
              type="button"
              onClick={() => addQuestion()}
              className="w-1/2 mx-auto bg-theme-bg-accent text-theme-text-accent p-1 md:px-4 md:py-2 rounded-lg opacity-80 hover:opacity-100"
            >
              Add Question
            </button>

            <button
              type="button"
              onClick={() => removeQuestion()}
              className="w-1/2 mx-auto bg-theme-bg-accent text-theme-text-accent p-1 md:px-4 md:py-2 rounded-lg opacity-80 hover:opacity-100"
            >
              Remove Question
            </button>
          </div>
        </div>

        <Divider />
        <div className="mt-4 flex flex-col md:flex-row gap-2 items-center text-sm md:text-md">
          <div className="flex gap-2 items-center w-full md:w-auto">
            <label htmlFor="theme">Select Countdown Theme</label>
            <select
              {...register("theme")}
              className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
            >
              {Object.values(MysteryTheme).map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 items-center w-full md:w-auto">
            <label htmlFor="countdownTotal">Countdown Total</label>
            <input
              type="number"
              {...register("countdownTotal")}
              min={1}
              max={20}
              className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
            />
          </div>
          <p className="text-xs text-theme-text-muted italic">A threat with a countdown of 0 will have no countdown timer visible to players.</p>
        </div>

        <div className="hidden md:block">
          <Divider />
          <p className="text-center italic">Preview Countdown Timer</p>
          <Preview type={watch("theme")} total={watch("countdownTotal")} />
        </div>
        <Divider />
        <button
          type="submit"
          className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
        >
          Add Mystery
        </button>
      </div>
    </form>
  )
}

function Preview({ type, total }: { type: MysteryTheme; total: number }) {
  return (
    <div className="flex gap-3 min-h-[100px] justify-center items-center mx-auto py-10">
      {" "}
      {Array.from({ length: total }).map((_, index) => (
        <CountdownItem
          key={`preview-${type}-${
            // biome-ignore lint/suspicious/noArrayIndexKey: preview only
            index
          }`}
          theme={type}
          index={index}
          filled={index === 0}
        />
      ))}
    </div>
  )
}

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useGame } from "../../context/GameContext"
import { usePreferences } from "../../context/PreferencesContext"
import { residentContent } from "./content/residents"
import { diverValues, dreamerValues, guideValues } from "./content/residents/greco"
import type { ResidentCustomFields } from "./types"

export function AddResidentForm({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
    const [formType, setFormType] = useState<"custom" | "standard">("standard")
    const { prefersReducedMotion } = usePreferences();
  
    return (
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center justify-center">
        <div className="flex w-full max-w-[30rem] rounded-full border border-theme-border bg-theme-bg-secondary text-sm">
          <motion.div
            className={`relative flex w-full cursor-pointer items-center justify-center text-nowrap rounded-full px-2 text-theme-text-primary transition-colors duration-300 ${formType === "standard" ? "font-semibold text-theme-text-accent" : ""}`}
            onClick={() => {
              setFormType("standard")
            }}
          >
            {formType ===    "standard" && (
              <motion.div
                className="absolute top-0 left-0 h-full w-full rounded-full bg-theme-bg-accent"
                layoutId="price"
              ></motion.div>
            )}{" "}
            <span className="z-20">Residents</span>{" "}
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
            <span className="z-20">Custom Form</span>{" "}
          </motion.div>
        </div>
        </div>
        <div className="relative w-full min-h-[20rem]">
        <AnimatePresence>
        <motion.div
        className="w-full absolute top-0 left-0"
        initial={{ left: prefersReducedMotion ? 0 : formType === "standard" ? "0" : "100%", opacity: 0 }}
        animate={{ left: 0, opacity: 1 }}
        exit={{ left: prefersReducedMotion ? 0 : formType === "standard" ? "-100%" : "100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        key={formType}
        >
          {formType === "standard" && <CoreResidentForm triggerClose={()=> setIsOpen(false)} />}
      {formType === "custom" && <CustomResidentForm triggerClose={()=> setIsOpen(false)} />}
        </motion.div>
        </AnimatePresence>
        </div>
      </div>
    )
  }
  
  function CoreResidentForm({ triggerClose }: { triggerClose: () => void }) {
  const { gameState, updateGameState } = useGame()
  const {register, handleSubmit, reset} = useForm<{resident: string}>({
          defaultValues: {
            resident: "",
          },
        })
      
        const availableResidents = Object.keys(residentContent).filter((key) => !gameState.hargraveHouse.residents?.some((r) => r.key === key))
      
        const onSubmit = (data: { resident: string }) => {
          const content = residentContent[data.resident]
          if (!content) {
            toast.error("Invalid resident selected.")
            return
          }
          const startingLines = content.title === "Greco, the Dream Sovereign" ? [diverValues[Math.floor(Math.random() * diverValues.length)], dreamerValues[Math.floor(Math.random() * dreamerValues.length)], guideValues[Math.floor(Math.random() * guideValues.length)]] : Array.from({ length: content.onUnlock?.[0]?.extraLines ?? 0 }, () => "")
          const numberChecks = content.prompts.length + (content.onUnlock?.[0]?.checks ?? 0) + (content.onUnlock?.[0]?.inlineChecks ?? 0) + 1 //always +1 for unlock header
          const checks =Array.from({ length: numberChecks ?? 0 }, () => 0)
          const newResident = {
            key: data.resident,
            checks,
            extraLines: startingLines,
            unlockCheck: Array.from({ length: content.onUnlock?.[0]?.checks ?? 0 }, () => 0),
          }
          const newResidents = [...(gameState.hargraveHouse.residents ?? []), newResident]
          updateGameState({ hargraveHouse: { ...gameState.hargraveHouse, residents: newResidents } })
          reset()
          triggerClose()
        }
      
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 py-10">
              {availableResidents.map((resident) => (
                <div key={resident} className="flex gap-2 items-center justify-start">
                  <input type="radio" {...register("resident")} value={resident} id={resident} />
                  <label htmlFor={resident}>{residentContent[resident].title}</label>
                </div>
              ))}
              <button type="submit" className="gridButton">
                Add Resident
              </button>
            </form>
    )}
  
  function CustomResidentForm({ triggerClose }: { triggerClose: () => void }) {
    const [numberOfPrompts, setNumberOfPrompts] = useState(4)
    const { register, handleSubmit, reset, setValue, watch } = useForm<ResidentCustomFields>({
      defaultValues: {
        title: "",
        intro: "",
        prompts: Array.from({ length: numberOfPrompts }, () => ""),
      },
    })
    const { gameState, updateGameState } = useGame()

    const onSubmit = (data: ResidentCustomFields) => {
        const numberChecks = data.prompts.length
        const checks = Array.from({ length: numberChecks }, () => 0)
        const newResident = {
            key: data.title,
            checks,
            customFields: data,
            unlockCheck:             [0]
        }
        const newResidents = [...(gameState.hargraveHouse.residents ?? []), newResident]
        updateGameState({ hargraveHouse: { ...gameState.hargraveHouse, residents: newResidents } })
        reset()
        triggerClose()
    }

    const addPrompt = () => {
        setNumberOfPrompts(numberOfPrompts + 1)
        setValue(`prompts.${numberOfPrompts}`, "")
    }

    const removePrompt = () => {
        setValue(`prompts`, watch("prompts").slice(0, -1))
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input type="text" {...register("title")} placeholder="The name of the resident, with honorifics or titles as desired" />
        <label htmlFor="intro">Introduction</label>
        <p className="text-xs italic text-theme-text-muted text-left">Any text that should be displayed separately from the prompts.</p>
        <textarea {...register("intro")} />
        <label htmlFor="prompts">Prompts</label>
        <p className="text-xs italic text-theme-text-muted text-left">Prompts will each have their own checkbox. </p>
        {watch("prompts").map((prompt: string, index: number) => (
						<div
							className="flex flex-col items-center gap-2"
							// biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
							key={`question-${index}`}
						>
							<div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full">
								<div className="flex gap-2 items-center w-full flex-grow">
									<input
										type="text"
										defaultValue={prompt}
										{...register(`prompts.${index}`)}
										required
										className="flex-grow border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
									/>
								</div>
								
							</div>
							
						</div>
					))}
        <div className="flex gap-2 text-sm md:text-md">
            <button type="button" onClick={addPrompt} className="w-1/2 mx-auto bg-theme-bg-accent text-theme-text-accent p-1 md:px-4 md:py-2 rounded-lg opacity-80 hover:opacity-100">Add Prompt</button>
            <button type="button" onClick={removePrompt} className="w-1/2 mx-auto bg-theme-bg-accent text-theme-text-accent p-1 md:px-4 md:py-2 rounded-lg opacity-80 hover:opacity-100">Remove Prompt</button>
        </div>
        <button type="submit" className="gridButton mb-10">
            Add Resident
        </button>
    </form>
    
  }
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ReactComponent as DiceIcon } from "../assets/dice.svg";

export function RollableLine({
    startingValue,
    values,
    editable,
    onSave
  }: {
    startingValue: string
    values:     string[]
    editable: boolean
    onSave: (value:string) => void
  }) {
    const [rolling, setRolling] = useState(false)
    const [value, setValue] = useState<string|null>(null)
    const handleRoll = () => {
        const value = values[Math.floor(Math.random() * values.length)]
        setRolling(true)
        setValue("")
        setTimeout(() => {
            setRolling(false)
            setValue(value)
            onSave(value)
        }, 1200)
    }
  
    return (
      <div className="w-full inline-flex justify-center items-center gap-2">
        <AnimatePresence>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }} className="text-md text-theme-text-primary flex justify-start text-center" key=      {value}>
                {value ?? startingValue}
              </motion.span>
              </AnimatePresence>
        {editable && <div className={`flex justify-center items-center ${rolling ? "diceRolling" : ""}`}><DiceIcon onClick={handleRoll} className="h-10 w-10 text-theme-text-primary hover:text-theme-text-accent" /></div>}
      </div>
    )
  }
import { AnimatePresence, motion } from "framer-motion";
import { usePreferences } from "../../context/PreferencesContext";
import { CloseButton } from "./CloseButton";


export function PullOutDrawer({ isOpen, setIsOpen, children }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void, children: React.ReactNode }) {
    const { prefersReducedMotion } = usePreferences();
  return (
    <AnimatePresence>
				{isOpen && (
    <motion.div
      initial={{ left: prefersReducedMotion ? 0 : "-100%", opacity: prefersReducedMotion ? 0 :1 }}
      animate={{ left: 0, opacity: 1 }}
      exit={{ left: prefersReducedMotion ? 0 : "-100%", opacity: prefersReducedMotion ? 0 : 1 }}
      transition={{ duration: prefersReducedMotion ? 0.1 : 1, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full md:w-1/2 h-screen flex flex-col justify-start items-center bg-theme-bg-primary border-r border-theme-border-accent rounded-lg p-4 z-10 transition-all ease-linear overflow-y-auto pointer-events-auto"
    >
      <CloseButton onClick={() => setIsOpen(false)} />
      {children}
    </motion.div>)}
    </AnimatePresence>  
  )
}
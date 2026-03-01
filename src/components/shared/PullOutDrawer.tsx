import { AnimatePresence, motion } from "framer-motion";
import { usePreferences } from "../../context/PreferencesContext";
import { CloseButton } from "./CloseButton";


export function PullOutDrawer({ isOpen, setIsOpen, children }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void, children: React.ReactNode }) {
    const { prefersReducedMotion } = usePreferences();
    const mobileScreenSize = window.innerWidth < 768;

    const transitionLeft = !prefersReducedMotion && !mobileScreenSize ? "-100%" : 0;
    const transitionTop = mobileScreenSize && !prefersReducedMotion ? "100%" : 0;
    const transitionOpacity = prefersReducedMotion ? 0 : 1;
  return (
    <AnimatePresence>
		{isOpen && (
      <>
    <motion.div
      initial={{ left: transitionLeft, y: transitionTop, opacity: transitionOpacity }}
      animate={{ left: 0, y: 0, opacity: 1 }}
      exit={{ left: transitionLeft, y: transitionTop, opacity: transitionOpacity }}
      transition={{ duration: prefersReducedMotion ? 0 : mobileScreenSize ? 0.5 : 1, ease: "linear", }}
      className="absolute top-0 left-0 w-full md:w-1/2 h-screen flex flex-col justify-start items-center bg-theme-bg-primary border-r border-theme-border-accent rounded-lg p-4 pb-12 z-10 overflow-y-auto pointer-events-auto"
    >
      <div className="hidden md:block"><CloseButton onClick={() => setIsOpen(false)} /></div>
      {children}
    </motion.div>

      <button type="button" className="hidden md:block absolute top-0 left-0 z-[9] w-full h-screen pointer-events-auto" onClick={() => setIsOpen(false)} />
      </>
      )}
    </AnimatePresence>  
  )
}
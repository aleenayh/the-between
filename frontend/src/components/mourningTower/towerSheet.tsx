import { AnimatePresence, motion } from "framer-motion";
import { useGame } from "../../context/GameContext";
import { findSupplicant } from "../mystery/content";
import { ReactComponent as TowerIcon } from "./tower.svg";

export function TowerSheet({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}) {
	return (
		<div className="flex flex-col justify-start items-start h-full w-full pointer-events-none">
			<button
				type="button"
				aria-label="Open settings"
				className="w-10 h-10 text-theme-accent-primary bg-theme-bg-secondary rounded-none rounded-br-lg rounded-tr-lg p-2 hover:bg-theme-bg-accent hover:text-theme-text-accent transition-colors pointer-events-auto"
				onClick={() => setIsOpen(!isOpen)}
			>
				<TowerIcon className="w-full h-full" />
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ left: "-100%" }}
						animate={{ left: 0 }}
						exit={{ left: "-100%" }}
						transition={{ duration: 1 }}
						className="absolute top-0 left-0 w-full md:w-1/2 h-screen flex flex-col justify-start items-center bg-theme-bg-secondary border-r border-theme-border-accent rounded-lg p-4 z-10 transition-all ease-linear overflow-y-auto pointer-events-auto"
					>
						<button
							type="button"
							className="absolute top-0 right-0 w-8 h-8"
							onClick={() => setIsOpen(!isOpen)}
						>
							X
						</button>

						<h1 className="text-2xl font-bold text-theme-text-accent mb-10">
							The Mourning Tower
						</h1>
						<div className="flex flex-col gap-10 justify-between h-full">
							<Supplicants />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

function Supplicants() {
	const { gameState } = useGame();
	const supplicantKeys = gameState.supplicants;
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-lg font-bold text-theme-text-accent">Supplicants</h2>
			{supplicantKeys && supplicantKeys.length > 0 ? (
				supplicantKeys.map((key) => {
					const supplicant = findSupplicant(key);
					return (
						<div key={key} className="flex gap-2">
							<h3 className="text-sm font-bold text-theme-text-accent">
								{key}:{" "}
							</h3>
							<p className="text-sm text-theme-text-secondary text-left">
								{supplicant}
							</p>
						</div>
					);
				})
			) : (
				<div>No supplicants have yet been chosen.</div>
			)}
		</div>
	);
}

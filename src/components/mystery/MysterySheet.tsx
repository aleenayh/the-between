import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "radix-ui";
import { useState } from "react";
import { useGame } from "../../context/GameContext";
import { PlayerRole } from "../../context/types";
import { CloseButton } from "../shared/CloseButton";
import { StyledTooltip } from "../shared/Tooltip";
import { AddMystery } from "./AddMystery";
import { ReactComponent as HourglassIcon } from "./hourglass.svg";
import { MysteryContent } from "./MysteryContent";

export function MysterySheet({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}) {
	const {
		gameState,
		user: { role },
	} = useGame();
	const mysteries = gameState.mysteries;
	const [displayedMystery, setDisplayedMystery] = useState<string | null>(
		mysteries[0]?.title || null,
	);

	return (
		<div className="flex flex-col justify-start items-start h-full w-full pointer-events-none">
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
				<button
				type="button"
				aria-label="Open threat sheet"
				className="drawerButton"
				onClick={() => setIsOpen(!isOpen)}
			>
				<HourglassIcon className="w-full h-full" />
			</button>
				</Tooltip.Trigger>
			<Tooltip.Content className="z-30" side="right">
				<StyledTooltip>View active threats and track clues.</StyledTooltip>
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
						<CloseButton
						onClick={() => setIsOpen(!isOpen)}
						/>
						<h1 className="text-2xl font-bold text-theme-text-accent mb-4">
							Threats
						</h1>
						<div className="w-full flex flex-col h-full overflow-hidden justify-between items-stretch">
							{/* buttons to switch views */}
							<div className="w-full flex flex-wrap gap-1 justify-center items-center mx-auto border-b-2 border-theme-border pb-2">
								{mysteries &&
									mysteries.length > 0 &&
									mysteries.map((mystery) => (
										<button
											type="button"
											key={mystery.title}
											className={`rounded-lg py-0 px-2 border transition-colors ${displayedMystery === mystery.title ? "bg-theme-bg-accent text-theme-text-accent border-theme-border-accent hover:bg-theme-bg-secondary" : "bg-theme-bg-primary text-theme-text-primary border-theme-border hover:bg-theme-bg-accent hover:text-theme-text-accent hover:border-theme-border-accent"}`}
											onClick={() => setDisplayedMystery(mystery.title)}
										>
											<span className="text-sm whitespace-nowrap">
												{mystery.title}
											</span>
										</button>
									))}
							</div>
							{/* mystery content */}
							<AnimatePresence>
								<div className="relative w-full h-full flex-1 overflow-y-auto">
									{mysteries && mysteries.length > 0 ? (
										mysteries.map(
											(mystery) =>
												displayedMystery === mystery.title && (
													<motion.div
														className="absolute transition-all w-full"
														key={mystery.title}
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}
														transition={{
															duration: 0.5,
															ease: "linear",
														}}
													>
														<MysteryContent mystery={mystery} />
													</motion.div>
												),
										)
									) : (
										<div>No active mysteries</div>
									)}
								</div>
							</AnimatePresence>

							{/* add mystery button - footer  */}
							{role === PlayerRole.KEEPER && <AddMystery />}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

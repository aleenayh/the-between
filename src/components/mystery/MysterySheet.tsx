import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "radix-ui";
import { useGame } from "../../context/GameContext";
import { PlayerRole } from "../../context/types";
import { CloseButton } from "../shared/CloseButton";
import { StyledTooltip } from "../shared/Tooltip";
import { AddMystery } from "./AddMystery";
import { Countdown } from "./Countdown";
import { ReactComponent as HourglassIcon } from "./hourglass.svg";

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
			<Tooltip.Content className="z-30">
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
						<h1 className="text-2xl font-bold text-theme-text-accent mb-10">
							Threats
						</h1>
						<div className="flex flex-col gap-10">
							{mysteries && mysteries.length > 0 ? (
								mysteries.map((mystery) => (
									<Countdown mystery={mystery} key={mystery.title} />
								))
							) : (
								<div>No active threats</div>
							)}
						</div>
						{role === PlayerRole.KEEPER && <AddMystery />}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

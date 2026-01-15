import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "radix-ui";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useGame } from "../../context/GameContext";
import { CloseButton } from "../shared/CloseButton";
import { GlassyButton } from "../shared/GlassyButton";
import { StyledTooltip } from "../shared/Tooltip";
import { ReactComponent as NotesIcon } from "./quill.svg";

export function NotesPane({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}) {
	const { gameHash } = useGame();
	const localNotes = localStorage.getItem(`TheBetween_notes_${gameHash}`);
	const [notes, setNotes] = useState(localNotes || "");
	const [buttonText, setButtonText] = useState("Save");

	const saveLocal = () => {
		setButtonText("Saving...");
		localStorage.setItem(`TheBetween_notes_${gameHash}`, notes);
		setTimeout(() => {
			toast.success("Notes saved!");
			setButtonText("Saved!");
		}, 1000);
		setTimeout(() => {
			setButtonText("Save");
		}, 3000);
	};

	return (
		<div className="flex flex-col justify-start items-start h-full w-full pointer-events-none">
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
				<button
				type="button"
				aria-label="Open settings"
				className="drawerButton"
				onClick={() => setIsOpen(!isOpen)}
			>
				<NotesIcon className="w-full h-full" />
			</button>
				</Tooltip.Trigger>
				<Tooltip.Portal>
				<Tooltip.Content className="z-30">
					<StyledTooltip>View your personal notes.</StyledTooltip>
				</Tooltip.Content>
				</Tooltip.Portal>
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
						<CloseButton onClick={() => setIsOpen(!isOpen)} />
						<h1 className="text-2xl font-bold text-theme-text-accent mb-6">
							Notes
						</h1>
						<div className="flex flex-col gap-4 justify-between h-full">
							<p className="text-balance">
								These personal notes are not shared with other players.
							</p>
							<textarea
								className=" bg-theme-bg-primary text-theme-text-primary border-2 border-theme-border-accent rounded-lg p-2 w-full h-full"
								defaultValue={notes}
								onBlur={(e) => setNotes(e.target.value)}
							/>
							<GlassyButton
								onClick={saveLocal}
							>
								{buttonText}
							</GlassyButton>
							<p className="text-sm md:text-md w-full md:w-1/2 mx-auto italic">
								Notes are saved locally. They will not persist if you change
								devices and can be lost if you clear cache.
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

import { Dialog } from "radix-ui";
import { useState } from "react";
import { useGame } from "../../../context/GameContext";
import { CloseButton } from "../../shared/CloseButton";
import { Divider } from "../../shared/Divider";
import { GlassyButton } from "../../shared/GlassyButton";
import { WriteMoveModal } from "../creation/CustomCreateForm";
import  type {CharacterNotTroupe } from "../types";
import { parseStaticText } from "../utils";

export function ModifyMovesModal({ character }: { character: CharacterNotTroupe }) {
	const [isOpen, setIsOpen] = useState(false);
	const {
		gameState,
		updateGameState,
		user: { id },
	} = useGame();
	if (!character) {
		return null;
	}

	const currentMoves = character.moves;
	const removeMove = (title:string) => {
		const moves = currentMoves.filter((move) => move.title !== title);
		updateGameState({
			players: gameState.players.map((player) =>
				player.id === id
					? { ...player, character: { ...character, moves } }
					: player,
			),
		});
	};

	const addMove = (data: { title: string; text: string[]; checks: number[]; lines: string[] }) => {
		const moves = [...currentMoves, data];
		updateGameState({
			players: gameState.players.map((player) =>
				player.id === id ? { ...player, character: { ...character, moves } } : player,
			),
		});
	};


	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild className="DialogTrigger">
				<GlassyButton>Customize Moves</GlassyButton>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="DialogOverlay" />
				<Dialog.Content className="DialogContent">
					<Dialog.Close asChild>
						<CloseButton/>
					</Dialog.Close>
					<Dialog.Title className="DialogTitle">Customize Moves</Dialog.Title>
					<Dialog.Description>
						Remove existing moves or add custom moves gained through rewards or story developments. Custom moves gained through advancement should be handled through the advancement menu.
					</Dialog.Description>
					<div className="flex flex-col gap-2">
					{currentMoves.map((move) => (
						<div key={`removediv-${move.title}`} className="flex gap-2 items-center justify-between group hover:bg-theme-bg-secondary rounded-lg p-2">
							<span className="text-theme-text-primary group-hover:text-theme-text-accent  font-bold">{parseStaticText      (move.title)}</span> <button type="button" className="bg-theme-bg-primary text-theme-text-primary border border-theme-border px-2 py-1 rounded-lg group-hover:bg-theme-bg-accent group-hover:text-theme-text-accent group-hover:border-theme-border-accent" onClick={()=> removeMove(move.title)}>Remove Move</button>
						</div>
					))}
					</div>

					<WriteMoveModal
					onSubmit={(data) =>addMove(data)}
					smallTitle
					/>

					<Divider/>

					<button type="button" 				className="w-full bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100" onClick={()=> setIsOpen(false)}>Close</button>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
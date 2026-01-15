import { Dialog } from "radix-ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGame } from "../../../context/GameContext";
import { CloseButton } from "../../shared/CloseButton";
import { GlassyButton } from "../../shared/GlassyButton";
import type {Abilities, CharacterNotTroupe } from "../types";

export function AdjustmentModal({ character }: { character: CharacterNotTroupe }) {

	const [isOpen, setIsOpen] = useState(false);
	const {
		gameState,
		updateGameState,
		user: { id },
	} = useGame();
	const { register, handleSubmit } = useForm({
		defaultValues: {
			name: character?.name ?? "",
			look: character?.look ?? "",
			vice: character?.vice ?? "",
			abilities: character?.abilities ?? {
				vitality: 0,
				composure: 0,
				reason: 0,
				presence: 0,
				sensitivity: 0,
			},
		},
	});
	if (!character) {
		return null;
	}
	const onSubmit = (data: {
		name: string;
		look: string;
		vice: string;
		abilities: Abilities;
	}) => {
		updateGameState({
			players: gameState.players.map((player) =>
				player.id === id
					? { ...player, character: { ...character, ...data } }
					: player,
			),
		});
		setIsOpen(false);
	};

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild className="DialogTrigger">
				<GlassyButton>Edit Hunter</GlassyButton>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="DialogOverlay" />
				<Dialog.Content className="DialogContent">
					<Dialog.Close asChild>
						<CloseButton/>
					</Dialog.Close>
					<Dialog.Title className="DialogTitle">Edit Hunter</Dialog.Title>
					<Dialog.Description className="hidden">
						Edit Hunter name, look, vice, or abilities.
					</Dialog.Description>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-4"
					>
						<label htmlFor="name">Name</label>
						<input type="text" {...register("name")} />
						<label htmlFor="look">Look</label>
						<input type="text" {...register("look")} />
						<label htmlFor="vice">Ritual</label>
						<input type="text" {...register("vice")} />

						<div className="flex justify-center w-full">
							<div className="grid grid-cols-5 gap-1 justify-center items-center">
								{(
									Object.entries(character.abilities) as [
										keyof Abilities,
										number,
									][]
								).map(([stat, value]) => (
									<div key={stat} className="flex flex-col-reverse md:flex-col">
										<label htmlFor={stat} className="flex flex-col gap-1">
											<span className="text-center text-xs md:text-sm text-theme-text-muted whitespace-nowrap overflow-hidden text-ellipsis">
												{stat}
											</span>
										</label>
										<input
											id={stat}
											type="number"
											defaultValue={value}
											{...register(`abilities.${stat}`, {
												valueAsNumber: true,
											})}
											className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
										/>
									</div>
								))}
							</div>
						</div>

						<button
							type="submit"
							className="bg-theme-bg-accent text-theme-text-primary rounded-md p-2"
						>
							Save Changes
						</button>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

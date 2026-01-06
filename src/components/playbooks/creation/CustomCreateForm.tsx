import { AnimatePresence, motion } from "framer-motion";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGame } from "../../../context/GameContext";
import { PlayerRole } from "../../../context/types";
import { heraldPlaybookAdditions } from "../content/herald";
import { AbilityBoxes } from "../sharedComponents/AbilityBoxes";
import type { Character } from "../types";


type CharacterCreateFormInputs = {
	isHerald: boolean;
	name: string;
	look: string;
	vice: string;
	stats: {
		vitality: number;
		composure: number;
		reason: number;
		presence: number;
		sensitivity: number;
	};
	moves: {
		title: string;
		text: string[];
		checks: number[];
		lines: string[];
	}[];
	questions: string[];
	masksOfPast: string[];
	masksOfFuture: string[];
};

const formSteps = ["base", "moves", "questions", "masks", "review"] as const;

export function CustomCreateForm() {
	const { updateGameState, user, gameState } = useGame();
	const [step, setStep] = useState<(typeof formSteps)[number]>(formSteps[0]);
	const [moveModalOpen, setMoveModalOpen] = useState(false);

	const { register, handleSubmit, watch, setValue } =
		useForm<CharacterCreateFormInputs>({
			defaultValues: {
				isHerald: false,
				name: "",
				look: "",
				vice: "",
				stats: {
					vitality: 0,
					composure: 0,
					reason: 0,
					presence: 0,
					sensitivity: 0,
				},
				moves: [],
				questions: ["", "", "", "", ""],
				masksOfPast: ["", "", "","","","",""],
				masksOfFuture: ["", "", "", "", ""],
			},
		});

	const saveCharacter = (formInputs: CharacterCreateFormInputs) => {
		const character = constructCustomCharacter(formInputs, user.id);

		const existingPlayerIndex = gameState.players.findIndex(
			(p) => p.id === user.id,
		);

		const updatedPlayers =
			existingPlayerIndex >= 0
				? gameState.players.map((player) =>
						player.id === user.id ? { ...player, character } : player,
					)
				: [
						...gameState.players,
						{
							id: user.id,
							name: user.name,
							lastRoll: null,
							role: PlayerRole.PLAYER,
							character,
						},
					];

		updateGameState({ players: updatedPlayers });
	};

	const stepsInOrder = [
		"base",
		"moves",
		"questions",
		"masks",
		"review",
	] as const;
	const prettySteps = [
		"Basics",
		"Moves",
		"Dawn Questions",
		"Janus Masks",
		"Review",
	] as const;

	return (
		<form
			onSubmit={handleSubmit(saveCharacter)}
			className="flex flex-col gap-2 justify-center"
		>
			<h1 className="text-2xl font-bold text-center">
				Community-Created Hunter
			</h1>
			<AnimatePresence>
				<div className="relative overflow-x-hidden overflow-y-auto flex flex-col items-stretch justify-start">
					{step === "base" && (
						<motion.div
							className="flex flex-col gap-2"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.2 }}
							key="base"
						>
							<p>
								This form allows you to add a community-created Hunter to the
								character keeper, albeit with fewer bells and whistles than the
								canonical Hunters.
							</p>
							<div className="h-6" />
							<h2 className="font-bold text-center text-theme-text-accent text-lg">
								Choose A Name
							</h2>
							<label htmlFor="name" className="text-xs italic">
								Full name line (include titles and honorifics if applicable)
							</label>
							<input
								{...register("name")}
								type="text"
								className="border px-2 py-1 flex-grow"
							/>
							<div className="h-6" />

							<h2 className="font-bold text-center text-theme-text-accent text-lg">
								Build Your Look
							</h2>
							<label htmlFor="look" className="text-xs italic">
								Full look (three descriptors)
							</label>
							<input
								{...register("look")}
								type="text"
								className="border px-2 py-1 flex-grow"
							/>
							<div className="h-6" />

							<h2 className="font-bold text-center text-theme-text-accent text-lg">
								Choose A Vice
							</h2>
							<input
								{...register("vice")}
								type="text"
								className="border px-2 py-1 flex-grow"
							/>

							<div className="h-6" />

							<h2 className="font-bold text-center text-theme-text-accent text-lg">
								Abilities
							</h2>
							<div className="flex justify-center w-full">
								<div className="grid grid-cols-5 gap-1">
									{(
										Object.entries({
											vitality: 0,
											composure: 0,
											reason: 0,
											presence: 0,
											sensitivity: 0,
										}) as [
											keyof {
												vitality: 0;
												composure: 0;
												reason: 0;
												presence: 0;
												sensitivity: 0;
											},
											number,
										][]
									).map(([stat, value]) => (
										<div
											key={stat}
											className="flex flex-col-reverse md:flex-col gap-1"
										>
											<label htmlFor={stat} className="flex flex-col gap-1">
												<span className="text-xs md:text-sm text-theme-text-muted whitespace-nowrap overflow-hidden text-ellipsis">
													{stat}
												</span>
											</label>
											<input
												id={stat}
												type="number"
												defaultValue={value}
												{...register(`stats.${stat}`, { valueAsNumber: true })}
												className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
											/>
										</div>
									))}
								</div>
							</div>
							{gameState.heraldUnlocked && 							<div><h2 className="font-bold text-center text-theme-text-accent text-lg">
								The Herald
							</h2>
							<p>This game has unlocked <i>The Herald</i>. The Herald is not a standalone playbook, but rather a special sheet that, once unlocked by The Informals, can be added to another playbook during character creation. Playbooks not published by The Gauntlet may not be a good fit with the Herald; discuss it with your Keeper if you’re unsure. 
							</p>
							<input type="checkbox" {...register("isHerald")} /><label htmlFor="isHerald">I am the Herald</label>

							</div>}
						</motion.div>
					)}

					{step === "moves" && (
						<motion.div
							className="flex flex-col gap-2"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.2 }}
							key="moves"
						>
							<p className="text-left">
								Only add your starting move(s) at this stage. You will be able
								to add additional moves through the <strong>Advancement</strong>{" "}
								menu during play.
							</p>
							<div className="h-6" />
							<h2 className="font-bold text-center text-theme-text-accent text-lg">
								Moves
							</h2>
							{watch("moves").map((move, index) => (
								<div
									key={`create-move-${move.title}`}
									className="flex flex-col gap-2"
								>
									<div className="flex items-center justify-between gap-2">
										<input
											type="text"
											className="w-[60%]"
											value={move.title}
											{...register(`moves.${index}.title`)}
										/>
										<button
											type="button"
											className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
											onClick={() =>
												setValue(
													"moves",
													watch("moves").filter((_, i) => i !== index),
												)
											}
										>
											Remove
										</button>
									</div>
									<textarea
										className="w-full whitespace-normal"
										value={move.text}
										{...register(`moves.${index}.text`)}
									/>
								</div>
							))}
							<Dialog.Root open={moveModalOpen} onOpenChange={setMoveModalOpen}>
								<Dialog.Trigger className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100">
									Add Move
								</Dialog.Trigger>
								<Dialog.Portal>
									<Dialog.Overlay className="DialogOverlay" />
									<Dialog.Content className="DialogContent">
										<Dialog.Close asChild>
											<button
												type="button"
												className="absolute top-2 right-2 aspect-square w-8 h-8 bg-theme-bg-accent text-theme-text-primary rounded-full flex justify-center items-center"
											>
												X
											</button>
										</Dialog.Close>
										<Dialog.Title className="DialogTitle">
											Add Move
										</Dialog.Title>
										<Dialog.Description className="hidden">
											Add a new move to your character.
										</Dialog.Description>
										<WriteMoveModal
											onSubmit={(data) => {
												setValue("moves", [
													...watch("moves"),
													{
														...data,
													},
												]);
												setMoveModalOpen(false);
											}}
										/>
									</Dialog.Content>
								</Dialog.Portal>
							</Dialog.Root>
						</motion.div>
					)}

					{step === "questions" && (
						<motion.div
							className="flex flex-col gap-2 items-center justify-stretch"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.2 }}
							key="questions"
						>
							<h2 className="font-bold text-center text-theme-text-accent text-lg">
								Questions
							</h2>
							{Object.values(watch("questions")).map((value, index) => (
								<div
									className="flex items-center justify-center"
									key={`question-create-${
										// biome-ignore lint/suspicious/noArrayIndexKey: ephemeral form
										index
									}`}
								>
									<input
										type="text"
										className="w-full"
										value={value}
										{...register(`questions.${index}`)}
									/>
									<button
										type="button"
										className="rounded-full bg-theme-bg-accent text-theme-text-accent p-1 ml-4 w-8 h-8 flex items-center justify-center hover:bg-theme-bg-accent hover:text-theme-text-accent"
										onClick={() =>
											setValue(
												"questions",
												watch("questions").filter((_, i) => i !== index),
											)
										}
									>
										{" "}
										-{" "}
									</button>
								</div>
							))}
							<button
								type="button"
								className="rounded-full bg-theme-bg-accent text-theme-text-accent p-1 ml-4 w-8 h-8 flex items-center justify-center hover:bg-theme-bg-accent hover:text-theme-text-accent"
								onClick={() => {
									setValue("questions", [...watch("questions"), ""]);
								}}
							>
								+
							</button>
						</motion.div>
					)}

					{step === "masks" && (
						<motion.div
							className="flex flex-col gap-2"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.2 }}
							key="masks"
						>
							<h2 className="font-bold text-center text-theme-text-accent text-lg">
								Janus Masks
							</h2>
							<p>
								Note that the text of the masks is not shown to other players.
								You need only add what you find helpful, but do ensure you have
								the right number of boxes by adding <strong>something</strong>{" "}
								for each one.
							</p>

							<h3 className="font-bold text-center text-theme-text-accent text-lg">
								Masks of Past
							</h3>
							{Object.values(watch("masksOfPast")).map((value, index) => (
								<div
									className="flex items-center justify-center"
									key={`mask-past-create-${
										// biome-ignore lint/suspicious/noArrayIndexKey: ephemeral form
										index
									}`}
								>
									<textarea
										className="w-full"
										value={value}
										{...register(`masksOfPast.${index}`)}
									/>
									<button
										type="button"
										className="rounded-full bg-theme-bg-accent text-theme-text-accent p-1 ml-4 w-8 h-8 flex items-center justify-center hover:bg-theme-bg-accent hover:text-theme-text-accent"
										onClick={() =>
											setValue(
												"masksOfPast",
												watch("masksOfPast").filter((_, i) => i !== index),
											)
										}
									>
										-
									</button>
								</div>
							))}
							<button
								type="button"
								className="rounded-full bg-theme-bg-accent text-theme-text-accent p-1 ml-4 w-8 h-8 flex items-center justify-center hover:bg-theme-bg-accent hover:text-theme-text-accent"
								onClick={() => {
									setValue("masksOfPast", [...watch("masksOfPast"), ""]);
								}}
							>
								+
							</button>

							<h3 className="font-bold text-center text-theme-text-accent text-lg">
								Masks of Future
							</h3>
							{Object.values(watch("masksOfFuture")).map((value, index) => (
								<div
									key={`mask-future-create-${
										// biome-ignore lint/suspicious/noArrayIndexKey: ephemeral form
										index
									}`}
								>
									<textarea
										className="w-full"
										value={value}
										{...register(`masksOfFuture.${index}`)}
									/>
								</div>
							))}
						</motion.div>
					)}

					{step === "review" && (
						<motion.div
							className="flex flex-col gap-2"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.2 }}
							key="review"
						>
							<h2 className="font-bold text-center text-theme-text-accent text-lg">
								Review
							</h2>
							<p>
								Review your character and make sure everything is correct. Some
								things can be edited during play, but Masks, Questions, and your
								starting Move cannot.
							</p>
							<div className="h-6" />
							<h3 className="font-bold text-center text-theme-text-accent text-lg">
								{watch("name")}
							</h3>
							<p>Look: {watch("look")}</p>
							<p>Vice: {watch("vice")}</p>
							<AbilityBoxes stats={watch("stats")} />
							<h3 className="font-bold text-center text-theme-text-accent text-lg">
								Moves
							</h3>
							<p>
								{watch("moves")
									.map((move) => {
										return `${move.title}: ${move.text.join("\n")} (${move.checks.length} checks, ${move.lines.length} lines)`;
									})
									.join("\n\n")}
							</p>
							<div className="h-px bg-theme-bg-accent w-full" />
							<div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
								<div className="flex flex-col gap-2">
									<h2>Questions:</h2>{" "}
									{watch("questions").map((question) => {
										return <p key={`question-${question}`}>{question}</p>;
									})}
								</div>
							</div>
							<div className="h-px bg-theme-bg-accent w-full" />
							<div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left ">
								<div>
									<h2>Masks of Past:</h2>{" "}
									{watch("masksOfPast").map((mask) => {
										return <p key={`mask-past-${mask}`}>{mask}</p>;
									})}
								</div>
								<div>
									<h2>Masks of Future:</h2>{" "}
									{watch("masksOfFuture").map((mask) => {
										return <p key={`mask-future-${mask}`}>{mask}</p>;
									})}
								</div>
							</div>
						</motion.div>
					)}

					<div className="h-6" />
					<div className="flex flex-col md:flex-row justify-evenly gap-2">
						{step !== "base" && (
							<button
								type="button"
								className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
								onClick={(e) => {
									e.preventDefault();
									setStep(stepsInOrder[stepsInOrder.indexOf(step) - 1]);
								}}
							>
								Return to {prettySteps[stepsInOrder.indexOf(step) - 1]}
							</button>
						)}
						{step !== "review" ? (
							<button
								type="button"
								className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
								onClick={(e) => {
									e.preventDefault();
									setStep(stepsInOrder[stepsInOrder.indexOf(step) + 1]);
								}}
							>
								Continue to {prettySteps[stepsInOrder.indexOf(step) + 1]}
							</button>
						) : (
							<button
								type="submit"
								className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
							>
								Save Character
							</button>
						)}
					</div>
				</div>
			</AnimatePresence>
		</form>
	);
}

function constructCustomCharacter(
	formInputs: CharacterCreateFormInputs,
	userId: string,
): Character {
	const {
		name,
		look,
		vice,
		stats: { vitality, composure, reason, presence, sensitivity },
		moves,
		questions,
		masksOfPast,
		masksOfFuture,
		isHerald,
	} = formInputs;

	const conditions: string[] = ["", "", ""];

	const advancements = Array.from({ length: 7 }, () => 0);

	const customTextFields = {
		questionDefinitions: questions,
		masksOfFutureDefinitions: masksOfFuture,
		masksOfPastDefinitions: masksOfPast,
	};

	return {
		isHerald,
		playbook: "custom",
		playerId: userId,
		name,
		look,
		vice,
		abilities: {
			vitality,
			composure,
			reason,
			presence,
			sensitivity,
		},
		masksOfPast: Array.from({ length: masksOfPast.length }, () => 0),
		masksOfFuture: Array.from({ length: masksOfFuture.length }, () => 0),
		advancements,
		conditions,
		moves: isHerald ? [...moves, ...(heraldPlaybookAdditions.moves ?? [])] : moves,
		experience: 0,
		personalQuarters: [{text: "", marked: false}],
		questions: Array.from({ length: questions.length }, () => 0),
		customTextFields,
	};
}

function WriteMoveModal({
	onSubmit,
}: {
	onSubmit: (data: {
		title: string;
		text: string[];
		checks: number[];
		lines: string[];
	}) => void;
}) {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			title: "",
			text: "",
			numberChecks: 0,
			numberLines: 0,
		},
	});

	const parseAspects = (lines: string[]): string[] => {
		return lines.map((line) =>
			line.replace(/<([^>]+)>/g, "<aspect>$1</aspect>"),
		);
	};

	const submit = (data: {
		title: string;
		text: string;
		numberChecks: number;
		numberLines: number;
	}) => {
		const newMove = {
			title: data.title,
			text: parseAspects(data.text.split("\n")),
			checks: Array.from({ length: data.numberChecks }, () => 0),
			lines: Array.from({ length: data.numberLines }, () => ""),
		};
		onSubmit(newMove);
	};

	return (
		<form
			onSubmit={(e) => {
				e.stopPropagation();
				handleSubmit(submit)(e);
			}}
			className="flex flex-col gap-2 justify-center text-theme-text-primary"
		>
			<h2 className="text-2xl font-bold text-center text-theme-text-accent">
				Write a Custom Move
			</h2>
			<p>Name your move below: </p>
			<input
				type="text"
				{...register("title")}
				className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
			/>

			<p>
				Write a description of your move below. To include inline check boxes
				(like aspects), surround your text with &lt; &gt; symbols. For example:{" "}
				<span className="italic">
					once a day you may &lt;gain advantage on a combat-related roll&gt;
				</span>
			</p>
			<textarea
				{...register("text")}
				className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
			/>

			<p>
				Optionally, moves can include some number of unlabeled check boxes or
				editable blank lines. Define the number of each below. If you need a
				labeled check box, instead add it to your description as an
				&lt;aspect&gt;.
			</p>
			<div className="grid grid-cols-4 gap-2">
				<p>Checkboxes:</p>
				<input
					type="number"
					{...register("numberChecks")}
					className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
				/>
				<p>Lines:</p>
				<input
					type="number"
					{...register("numberLines")}
					className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent flex-grow"
				/>
			</div>
			<button
				type="submit"
				className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
			>
				Add Move
			</button>
		</form>
	);
}

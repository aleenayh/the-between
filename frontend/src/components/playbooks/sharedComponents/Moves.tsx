import { useCallback } from "react";
import { useGame } from "../../../context/GameContext";
import { playbookBases } from "../content";
import { coreMoves } from "../coreMoves";
import type { Character, PlaybookMove } from "../types";
import { parseRelicText } from "./Relics";

export function Moves({ character }: { character: Character }) {
	const coreMove = coreMoves(character)[character.playbook];
	const otherMoves = character.moves ? character.moves : [];
	const moveContent = playbookBases[character.playbook].moves;

	return (
		<div className="text-sm">
			{coreMove}
			<div className="h-6" />
			{otherMoves.length > 0 &&
				otherMoves.map((move) => {
					const contentDef = moveContent.find((m) => m.title === move.title);
					const content = move.text ? move.text : contentDef?.text;
					if (!content) {
						return null;
					}
					return (
						<MoveDisplay
							key={move.title}
							character={character}
							move={move}
							content={content}
							contentDef={contentDef}
						/>
					);
				})}
		</div>
	);
}

function MoveDisplay({
	character,
	move,
	content,
	contentDef,
}: {
	character: Character;
	move: Character["moves"][number];
	content: string[];
	contentDef?: PlaybookMove;
}) {
	const {
		gameState,
		updateGameState,
		user: { id },
	} = useGame();
	const editable = id === character.playerId;

	// Count aspects in the content by joining and parsing
	const fullText = content.join("\n");
	const aspectCount = (fullText.match(/<aspect>/g) || []).length;

	// Checkboxes come after aspects in the checks array
	const checkboxCount = contentDef?.checkboxes?.length ?? 0;

	const toggleCheck = useCallback(
		(index: number) => {
			if (!editable) return;

			const currentChecks = move.checks ?? [];
			const newChecks = [...currentChecks];
			// Ensure array is long enough
			while (newChecks.length <= index) {
				newChecks.push(0);
			}
			newChecks[index] = newChecks[index] === 1 ? 0 : 1;

			updateGameState({
				players: gameState.players.map((player) =>
					player.id === id
						? {
								...player,
								character: player.character
									? {
											...player.character,
											moves: player.character.moves.map((m) =>
												m.title === move.title
													? { ...m, checks: newChecks }
													: m,
											),
										}
									: null,
							}
						: player,
				),
			});
		},
		[editable, move, updateGameState, gameState.players, id],
	);

	// Track aspect index across all lines
	let globalAspectIndex = 0;

	return (
		<div className="flex flex-col justify-center gap-1">
			<h3 className="text-sm font-bold text-theme-text-accent">{move.title}</h3>
			{content.map((line, lineIndex) => {
				const parsed = parseRelicText(
					line,
					move.checks ?? [],
					globalAspectIndex,
					editable,
					toggleCheck,
				);
				globalAspectIndex = parsed.nextAspectIndex;

				return (
					<p
						className="text-left leading-relaxed"
						key={`${move.title}-line-${lineIndex}`}
					>
						{parsed.elements}
					</p>
				);
			})}

			{/* Checkboxes row - rendered after aspects */}
			{checkboxCount > 0 && (
				<div className="flex gap-2 mt-1 ml-4">
					{Array.from({ length: checkboxCount }).map((_, idx) => {
						const checkIndex = aspectCount + idx;
						const isChecked = (move.checks ?? [])[checkIndex] === 1;
						return (
							<button
								key={`${move.title}-checkbox-${checkIndex}`}
								type="button"
								onClick={() => toggleCheck(checkIndex)}
								disabled={!editable}
								className={`w-4 h-4 border rounded text-[10px] leading-[0.75rem] text-center ${
									isChecked
										? "bg-theme-accent-primary border-theme-accent-primary text-white"
										: "border-theme-border-accent bg-transparent"
								} ${editable ? "cursor-pointer hover:border-theme-accent-primary" : "cursor-default opacity-70"}`}
								aria-label={isChecked ? "Uncheck" : "Check"}
							>
								{isChecked && "✓"}
							</button>
						);
					})}
				</div>
			)}

			<div className="h-6" />
		</div>
	);
}

import { coreMoves } from "../coreMoves";
import type { Character, playbookKey } from "../types";

export function Moves({ character }: { character: Character }) {
	const coreMoveKey = character.moves
		? (character.moves.find((move) => typeof move === "string") as playbookKey)
		: null;
	const coreMove = coreMoveKey ? coreMoves[coreMoveKey] : null;
	const otherMoves = character.moves
		? character.moves.filter((move) => typeof move !== "string")
		: [];

	return (
		<div>
			{coreMove}
			{otherMoves.map((move) => {
				if (move && typeof move === "object") {
					return <div key={move.title}>{move.title}</div>;
				}
				return null;
			})}
		</div>
	);
}

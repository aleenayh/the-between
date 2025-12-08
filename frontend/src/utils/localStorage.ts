import type { GameState } from "../context/types";

export function saveLocal(gameState: GameState, gameHash: string) {
	localStorage.setItem(`game_state_${gameHash}`, JSON.stringify(gameState));
}

export function loadLocal(gameHash: string) {
	const gameState = localStorage.getItem(`game_state_${gameHash}`);
	if (!gameState) {
		console.log(`No saved game state found for game: ${gameHash}`);
		return null;
	}
	try {
		const parsed = JSON.parse(gameState);
		if (!parsed) {
			console.log(`Invalid game state found for game hash: ${gameHash}`);
			return null;
		}
		return parsed;
	} catch (error) {
		console.error(`Error parsing game state for game: ${gameHash}`, error);
		return null;
	}
}

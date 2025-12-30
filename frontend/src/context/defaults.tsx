import type { GameState } from "./types";

export const defaultGameState: GameState = {
	gameHash: "",
	mysteries: [],
	dominion: null,
	players: [],
	timestamp: new Date(),
};

import type { GameState, Mystery, Shrine } from "./types";

const defaultMysteries: Mystery[] = [];

const defaultShrines: Shrine[] = [];

export const defaultGameState: GameState = {
	gameHash: "",
	land: "elegy",
	shrines: defaultShrines,
	mysteries: defaultMysteries,
	players: [],
	messages: [],
};

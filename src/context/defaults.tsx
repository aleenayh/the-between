import { roomKeys } from "../components/hargraveHouse/content/rooms";
import { getLocalSchemaVersion } from "../utils/versionCheck";
import type { GameState } from "./types";

export const startingRooms = Object.values(roomKeys).map((key) => ({
	key,
	status: "available" as const,
}));

export const defaultGameState: GameState = {
	gameHash: "",
	mysteries: [],
	mastermind: null,
	players: [],
	timestamp: new Date(),
	safety: {
		lines: [],
		veils: [],
	},
	hargraveHouse: {
		residents: [],
		rooms: startingRooms,
	},
	heraldUnlocked: false,
	schemaVersion: getLocalSchemaVersion(),
};

import { z } from "zod";
import { mastermindSchema } from "../components/mastermind/types";
import { mysterySchema } from "../components/mystery/types";
import { abilitiesKeys, characterSchema, troupeSchema } from "../components/playbooks/types";
import { catchWithWarning } from "../utils/schemaValidation";

export enum PlayerRole {
	KEEPER = "keeper",
	PLAYER = "player",
}

export const userInfoSchema = z.object({
	id: z.string(),
	name: z.string(),
	role: z.enum([PlayerRole.KEEPER, PlayerRole.PLAYER]),
});

const rollSchema = z.object({
	roll: z.number().catch(0),
	type: z.enum(Object.keys(abilitiesKeys)).catch(abilitiesKeys.vitality),
	timestamp: z.coerce.date().catch(new Date()),
});

const playerSchema = z.object({
	id: z.string(),
	name: z.string(),
	lastRoll: rollSchema.nullable().catch(null),
	role: z
		.enum([PlayerRole.KEEPER, PlayerRole.PLAYER])
		.catch(catchWithWarning("player.role", PlayerRole.PLAYER)),
	//no warning - null character is valid but dropped by firebase
	// Discriminated union on "playbook" field:
	// - characterSchema: all playbooks except informals (individual characters)
	// - troupeSchema: informals playbook (troupe with members array)
	character: z.discriminatedUnion("playbook", [
		characterSchema,
		troupeSchema
	]).nullable().catch(null),
});

const safetySchema = z.object({
	lines: z.array(z.string()).optional().catch(undefined),
	veils: z.array(z.string()).optional().catch(undefined),
});

const roomSchema = z.object({
	key: z.string(),
	status: z.enum(["available", "unlocked", "active"]).catch("available"),
	checks: z.array(z.number()).optional().catch(undefined),
	extraLines: z.array(z.string()).optional().catch(undefined),
});

const residentSchema = z.object({
	name: z.string(),
	checks: z.array(z.number()).catch([]),
});

const hargraveHouseSchema = z.object({
	residents: z.array(residentSchema).catch([]),
	rooms: z.array(roomSchema).catch([]),
});

export const gameStateSchema = z.object({
	gameHash: z.string().catch(catchWithWarning("gameHash", "")),
	//no catchWithWarning for mysteries - empty array is valid, but dropped by firebase
	mysteries: z.array(mysterySchema).catch([]),
	mastermind: mastermindSchema.nullable().catch(null),
	players: z.array(playerSchema).catch(catchWithWarning("players", [])),
	timestamp: z.coerce.date().catch(catchWithWarning("timestamp", new Date())),
	safety: safetySchema.optional().catch(undefined),
	hargraveHouse: hargraveHouseSchema.catch(
		catchWithWarning("hargraveHouse", { residents: [], rooms: [] }),
	),
	heraldUnlocked: z.boolean().catch(false),
	heraldOfferings: z.array(z.string()).optional().catch(undefined),
});

export type GameState = z.infer<typeof gameStateSchema>;

export type UserInfo = z.infer<typeof userInfoSchema>;

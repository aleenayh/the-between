export type PlaybookBase = {
	title: string;
	intro: string[];
	names: string[];
	honorifics: string[];
	look: string[];
	rituals: string[];
	questions: string[];
	abilities: Stats;
	cinders: Record<number, string>;
	relics: {
		title: string;
		text: string;
		extraLines: number;
	}[];
	oldFire: string[];
	fireToCome: {
		[key: string]: string;
	};
	ascendTheThrone: string[];
	extraMoves: PlaybookMove[];
	startingMoves: PlaybookMove[];
};

export type Stats = {
	vitality: number;
	composure: number;
	reason: number;
	presence: number;
	cinder: number;
};

//alias type for readability
type CoreMove = playbookKey;

type PlaybookMove =
	| CoreMove
	| {
			title: string;
			text: string[];
			checkboxes?: {
				title: string;
				number: number;
				extraLines?: number;
			}[];
			extraLines?: number;
	  };

export type Character = {
	playbook: playbookKey;
	playerId: string;
	name: string;
	look: string;
	ritual: string;
	oldFire: number;
	fireToCome: number;
	conditions: string[];
	moves: PlaybookMove[];
	advancements: Record<number, boolean>;
	abilities: Stats;
	cinders: Record<number, boolean>;
	relics: {
		title: string;
		text: string;
		extraLines: number;
	}[];
	/** Tracks which relic aspects are checked. Array of 0|1 values in order of appearance. */
	relicAspects: number[];
	experience: number;
	questions: Record<number, boolean>;
};

export const playbookKeys = {
	candleBearer: "candle-bearer",
	nameless: "nameless",
	lockAndKey: "lock-and-key",
} as const;

export type playbookKey = (typeof playbookKeys)[keyof typeof playbookKeys];

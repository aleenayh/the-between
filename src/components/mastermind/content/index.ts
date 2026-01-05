import type { MastermindContent } from "../types";

export const Masterminds: Record<string, MastermindContent> = {
	theodora: {
		title: "Theodora Braithwaite",
		intro: [],
		servants: [],
		layers: [
			{
				title: "Layer 1",
				text: [],
			},
		],
	},
} as const;

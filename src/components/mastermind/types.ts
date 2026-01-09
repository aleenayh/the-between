import { z } from "zod";
import { catchWithWarning } from "../../utils/schemaValidation";

export const clueSchema = z.object({
	text: z.string().catch(catchWithWarning("mystery.clue.text", "")),
	earned: z.boolean().catch(false),
	explained: z.boolean().catch(false),
	removed: z.boolean().catch(false),
});

export const questionSchema = z.object({
	question: z.string(),
	opportunity: z
		.string()
		.catch(catchWithWarning("mastermind.question.opportunity", "")),
	complexity: z.coerce
		.number()
		.catch(catchWithWarning("mastermind.question.complexity", 6)),
	clues: z.array(clueSchema).optional().catch(catchWithWarning("mastermind.question.clues", undefined)),
	isActive: z.boolean().catch(false),
});

const layerSchema = z.object({
	title: z.string(),
	checks: z.array(z.number()).optional().catch([]),
});

export type Question = z.infer<typeof questionSchema>;

export const mastermindSchema = z.object({
	title: z.string(),
	layers: z.array(layerSchema).optional().catch(undefined), //undefined on custom
	questions: z.array(questionSchema).catch(catchWithWarning("mastermind.questions", [])),
	servants: z.array(z.string()).optional().catch(undefined), //undefined on custom
});

export type Mastermind = z.infer<typeof mastermindSchema>;

type Servant = {
	title: string;
	description: string[];
	quotes: string[];
};
type Layer = {
	title: string;
	text: string[];
	checkList?: string[],
	addServant?: boolean,
};

type MastermindQuestion = {
	layer: string;
	question: string;
	complexity: number;
	opportunity?: string;
}

export type MastermindContent = {
	title: string;
	questions: MastermindQuestion[];
	servants: Servant[];
	layers: Layer[];
};

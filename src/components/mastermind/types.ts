import { z } from "zod";
import { catchWithWarning } from "../../utils/schemaValidation";

export const questionSchema = z.object({
	text: z.string(),
	opportunity: z
		.string()
		.catch(catchWithWarning("mystery.question.opportunity", "")),
	complexity: z.coerce
		.number()
		.catch(catchWithWarning("mystery.question.complexity", 2)),
});

export type Question = z.infer<typeof questionSchema>;

export const clueSchema = z.object({
	text: z.string().catch(catchWithWarning("mystery.clue.text", "")),
	earned: z.boolean().catch(false),
	explained: z.boolean().catch(false),
	removed: z.boolean().catch(false),
});

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

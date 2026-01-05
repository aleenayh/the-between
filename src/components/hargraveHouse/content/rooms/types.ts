export type RoomContent = {
	title: string;
	special?: string;
	intro: string;
	prompts: string[];
	onUnlock: { text: string[]; checks?: number; inlineChecks?:number, extraLines?: number };
};

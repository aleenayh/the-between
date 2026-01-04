export type RoomContent = {
	title: string;
	intro: string;
	prompts: string[];
	onUnlock: { text: string[]; checks?: number; extraLines?: number };
};

export type Mystery = {
	title: string;
	theme: MysteryTheme;
	countdownTotal: number;
	countdownCurrent: number;
};

export enum MysteryTheme {
	Dandelion = "dandelion",
	Rose = "rose",
	Sword = "sword",
	Swallow = "swallow",
}

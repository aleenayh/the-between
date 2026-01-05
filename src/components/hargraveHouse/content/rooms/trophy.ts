import type { RoomContent } from "./types";

export const trophyContent: RoomContent = {
	title: "The Trophy Room",
	intro: "Strategically lit objects resting in glass cases, hung on walls, and adorning the mantel tell stories of monstrous triumphs past. ",
	prompts: [
		"1525: Hargrave House resident Thomas Stapleton is sent to rescue Henry VIII from a monstrous abductor. Describe the monstrosity and how Thomas rescued the King. What trophy from the hunt can be found here?",
		"1553: Thomas Stapleton fails to save Edward VI from the spirit possessing the boy king. Describe the ill-fated battle. What trophy stands as a notorious reminder of Hargrave House’s failure? ",
		"1764: Hargrave House resident Ravena Silvertongue does battle with a monstrosity from Irish folklore terrorizing the countryside. Describe the battle. What trophy from the hunt can be found here? ",
		"1782: In a desperate attempt to turn the tide of the American War of Independence, Ravena attempts to summon a fae terror that can be turned loose on the Yanks. Describe how Ravena loses control, and other Hunters have to save her. What trophy from the creature remains here to this day? ",
	],
	onUnlock: { text: ["Each Hunter can visit the trophy room once. When you do, describe a monstrous trophy that can be found here and add it to your Personal Quarters OR cross off a trophy collected from a Threat from your Personal Quarters and mark XP. "] },
};

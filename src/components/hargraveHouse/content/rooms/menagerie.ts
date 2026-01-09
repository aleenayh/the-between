import type { RoomContent } from "../../types";

export const menagerieContent: RoomContent = {
	title: "The Menagerie",
	special: "This is a special Room that can only be put in play according to the instructions on The Undeniable playbook. Thereafter, the Keeper can select it for a Hargrave House Night Phase in the normal manner. When this Room is the focus of such a Night Phase, all Hunters except the Undeniable can take action as if it were a London Night Phase (in which case, the prompts here are used in place of Unscene prompts). The first prompt is answered by all players, as normal; prompts II-IV are answered by the player of the Undeniable. Only the player of the Undeniable gets to add something to Personal Quarters at the end.",
	intro: "A suite of tiny rooms accessible from Hargrave House, but not in Hagrave House. An ebony door carved with images of wild beasts blocks the threshold; it can only be opened with a special key the Undeniable keeps on their person.",
	prompts: [
		"<strong>Paint the Scene:</strong> Many of these small rooms contain people who are beautiful, or at least interesting to look at, and who have been willingly interred so they might serve as objects of amusement for the Undeniable. They will never leave and they will never die. Describe one of these people and the cell they’re being held in. ",
		"Pick a Side Character from earlier in the story. Say who they are, and describe the room in the Menangerie you’ve set up for them. ",
		"Narrate the scene showing you placing the Side Character in their cell. What part of your body do they worship in abject gratitude? ",
		"Who will miss the Side Character the most? What do you do to ease their heartache? ",
	],
	onUnlock: { text: ["So long as you have the key in your Personal Quarters, you and anyone you bring with you can enter and exit the Menagerie freely. Your Presence is increased by 1 while in the Menagerie (no max). When you leave, take the <strong>Tainted</strong> Condition. If you’re already Tainted, put on the Janus Mask. "] },
};

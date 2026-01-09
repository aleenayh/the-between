import type { RoomContent } from "../../types";

export const ritualContent: RoomContent = {
	title: "The Ritual Chamber",
	special: "This is a special Room that can only be put in play according to the instructions on The Vessel playbook. Thereafter, the Keeper can select it for a Hargrave House Night Phase in the normal manner. When this Room is the focus of such a Night Phase, all Hunters except the Vessel can take action as if it were a London Night Phase (in which case, the prompts here are used in place of Unscene prompts). The first prompt is answered by all players, as normal; prompts II-IV are answered by the player of the Vessel. Only the player of the Vessel gets to add something to Personal Quarters at the end.",
	intro: "A heavy stone altar scored with wax drippings and knife marks, surrounded by tarnished brass candlesticks. Chalk and ash geometric patterns across flagstone, overlaid with faded sigils that seem to shift in the lamplight. The smell of incense and damp rock.",
	prompts: [
		"<strong>Paint the Scene:</strong> What here tells us vile, macabre rites have been performed in this chamber? ",
		"How can you tell by merely stepping foot in this chamber, the dark entities who are always with you are somewhat cowed? ",
		"Cunning folk, benandanti, bokor, sangoma, miko, tantrikas, shamans, curanderos—Hargrave House has hosted all manner of magic-users over the centuries, and this chamber was where their most powerful work was done. What evidence of these disparate magic traditions do you see here? ",
		"Inspired by the type of sacrifice you make for Rites of Salt & Smoke, how do you make this ritual chamber your own? ",
	],
	onUnlock: { text: ["During a London Night Phase, Sensitivity is increased by 1 while in this chamber (no max). Afterward, take the <strong>Tainted</strong> Condition. If you are already Tainted, put on the Janus Mask."] },
};

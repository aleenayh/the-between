import type { RoomContent } from "../../types";

export const ballroomContent: RoomContent = {
	title: "The Ballroom",
	intro:
		"Ornate, sharp-edged chandeliers dangle from high ceilings. The lingering scent of floor wax, citrus, and candle smoke fail to mask a fug of musk and decay. Along a wall, a long refreshment table bears a single empty punch bowl.",
	prompts: [
		"<strong>Paint the Scene:</strong> This ballroom has gone unused for years, since a fête held for a delegation of fae ended in turmoil. During their furious exit, the fae marked this ballroom as anathema: tainted ground on which no fae would tread. Which of these marks can the hunters perceive, marring the space?",
		"The night of the fête, some years ago. The fae have their own arcane etiquette, elaborate and alien. How does young Merricat Ovelia, servant of Hargrave House, transgress against fae propriety in the execution of her duties? ",
		"The fae take Merricat with them to serve in the Feathered Abbey, but a part of her remains behind as a promise that one day, all will be restored. Which of Merricat's body parts, still full of life, do the hunters keep here? How is it stored and protected?",
		"Tonight, a contingent of fae return Merricat, transformed by her time among them. As her body part is reattached to her new form, how does Merricat speak of her time away and of the hunter whose memory gave her the strength to endure until her return?",
	],
	onUnlock: {
		text: [
			"Merricat Ovelia can act as an etiquette guide and translator on behalf of the Hunters when dealing with the fae. For any future encounters with the fae, you can, on three occasions, enlist Merricat's aid to roll with advantage. ",
			"The marking of the third and final box marks the expiration of Merricat's hard-won knowledge. Before returning to the Feathered Abbey to renew her studies, Merricat gives a farewell gift to whoever marks the third box: ",
			"<li><strong>The Transgression:</strong> You have been taught an act that, when performed, will cause all fae who witness it to immediately vacate the area and shun you. Never describe it. When performed, take the Condition: Boorish.</li>",
		],
		checks: 3,
	},
};

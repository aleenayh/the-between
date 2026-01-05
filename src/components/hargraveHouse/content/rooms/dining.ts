import type { RoomContent } from "./types";

export const diningContent: RoomContent = {
	title: "The Dining Room",
	intro: "Rosewood dining chairs with yawning, fanged mouths finely carved into their backrests. A fresco looms above, depicting Judas's betrayal in the Garden of Gethsemane, gnarled olive branches twisting around the scene like a hangman's knot. Dripping candelabras light flames in your dining companions’ eyes; they glint in the half-light, hungry and animal.",
	prompts: [
		"<strong>Paint the Scene:</strong> You don't take meals together often, but tonight is an exception. What's on the menu? What elements of the ambiance perfectly reflect your mood? ",
		"A dark evening in 1808. Vespera Lahiri, a seer with a flair for the dramatic, has insisted that her fellow Hunters gather in the dining room for supper. When the room is full and pindrop quiet—and all eyes, finally, are on her—in what elaborate manner does Vespera announce there is a traitor in their midst? ",
		"Continue the scene as the traitor reveals themself, whether by accident or by bold admission. How have they been aiding one of Hargrave House’s bitterest enemies? How do we know, despite their justifications, that they are motivated by naked greed?  ",
		"Narrate how Vespera and the other Hunters deliver the traitor their just desserts. Make it brutal, and deeply ironic. What remains in the room to this day as a warning to those craving more than their share?",
	],
	onUnlock: { text: [
		"<strong>When you spend the Night Phase enjoying an intimate meal in the Dining Room with a Side Character,</strong> describe the lavish spread that has been prepared for the occasion, then roll with Presence. ",
		"On a hit, ask two questions from the list below. The Keeper will answer truthfully, though not necessarily directly; answers may be revealed in the form of Clues for an active Threat.", 
		"If a question does not yield a Clue, instead roll with advantage the first time you act on the answer.",
		
		
		"<li>What is your darkest hunger?</li>",
		"<li>With whom (or what) does your true loyalty lie?</li>",
		"<li>How can I gain your trust?</li>",
		"<li>What destructive secret are you keeping?</li>",
		"On a 7-9, answer a question in return and take an appropriate Condition. ",
		"On a miss, you are dangerously exposed. Answer a question from the list (Keeper’s choice) truthfully and completely, and the Keeper will tell you how your answer makes you vulnerable to immediate threat.",
		"<li>With whom (or what) does your true loyalty lie?</li>",
		"<li>How can I gain your trust?</li>",
		"<li>What destructive secret are you keeping?</li>",

		"<li><strong>On a 7-9,</strong> answer a question in return and take an appropriate Condition. </li>",
		"<li><strong>On a miss,</strong> you are dangerously exposed. Answer a question from the list (Keeper’s choice) truthfully and completely, and the Keeper will tell you how your answer makes you vulnerable to immediate threat. </li>",
		
	] },
};

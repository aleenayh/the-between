import type { RoomContent } from "../../types";

export const conservatoryContent: RoomContent = {
	title: "The Conservatory",
	intro: "Tall bay windows looking out into the garden. Rattan and wrought iron furniture. Potted plants and trees are arranged all around. ",
	prompts: [
		"<strong>Paint the Scene:</strong> A former hunter in residence turned out to be the legendary killer Roger the Reaver. This was his favorite room in Hargrave House. Looking around, how do you know this?",
		"The year is 1845, and Roger has just brought his next victim to Hargrave House. Describe their entrance into the conservatory. How do we know they’ve just returned from a party, ebullient?",
		"Continue the scene showing Roger and his soon-to-be victim enjoying each other’s company, laughing, celebrating, and generally having a good time. What red flags does Roger’s companion fail to notice throughout the night?",
		"Narrate Roger killing his prey. The scene should be extremely violent and bloody. What about the killing makes it seem ritualistic, even religious?",
	],
	onUnlock: { text: [
		"<strong>The first time you murder a Side Character in the Conservatory in the manner of Roger the Reaver,</strong> clear all your Conditions, including Conditions that can’t be cleared in the normal ways, and then mark the first box below. Hereafter, whenever you murder someone in cold blood, mark the next box.",
		"<check> Increase your Sensitivity by 2 (max 3) as your mind opens up to the infinite possibilities of the universe, and then take the Condition: I Am. This Condition can never be cleared. </check>",
		"<check>Increase your Reason by 2 (max 3) as your mind becomes a perfect grid for organizing and tracking your prey, and then take the Condition: Roger. This Condition can never be cleared.</check>",
		"<check>Increase your Vitality by 2 (max 3) as the power of the Reaver courses through you. Describe how your body outwardly manifests this change, and then take the Condition: The Reaver. This Condition can never be cleared. </check>",
		"This move is available to all Hunters until one Hunter uses it, at which point only that Hunter can use it. "
	],
	inlineChecks: 3,
 },
};

import type { RoomContent } from "../../types";

export const musicContent: RoomContent = {
	title: "The Music Room",
	intro: "Thick Persian rugs. A number of instruments arranged around the perimeter, a grand piano anchoring in the center. An enormous mirror has bloody handprints on it; the handprints cannot be washed off. ",
	prompts: [
		"<strong>Paint the Scene:</strong> A former hunter in residence once used this room to wrangle a spirit using the power of music. In addition to the bloody handprints on the mirror, there are other, more subtle signs of the struggle still in this room. What are they? ",
"The year is 1717, and Hargrave House resident Evony Archer is preparing to do battle with a ghost tormenting the mansion’s halls. Which instrument will be her weapon, and what makes it so special? What other preparations does she make?", 
"Continue the scene by narrating the appearance of the ghost. What sobriquet is this nasty spirit known by? What about its appearance tells us this nickname is well-earned? Why is this ghost so dangerous? ",
"Narrate Ms. Archer’s battle with the ghost. How does the ghost react to the music? How does Ms. Archer very nearly lose her life? What is it like when the ghost is finally subdued? "
	],
	onUnlock: { text: ["Hereafter, <strong>when you play an instrument in order to use the power of music to trap or banish a spirit, demon, or other dark entity</strong>, roll with Sensitivity. <strong>On a 10+</strong>, the entity is held in place or banished, your choice. <strong>On a 7-9,</strong> the entity is held in place, but only so long as you keep playing. <strong>On a miss,</strong> the music draws the attention of countless spirits; you must play forever in order to hold them at bay. Describe what this looks like and then retire this character."] },
};

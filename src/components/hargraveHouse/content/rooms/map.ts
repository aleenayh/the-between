import type { RoomContent } from "./types";

export const mapContent: RoomContent = {
	title: "The Map Room",
	intro: "Rich wood-panelled chamber thick with the scent of pipe tobacco, aged parchment, and leather upholstery. Curios from across the globe line a grand fireplace mantel—ivory statuettes, intricate scrimshaw, devilish masks. A complex orrery sits on display, tracking not planets but the metaphysical positions of parallel worlds. Its accompanying placard is engraved with a warning: DO NOT TOUCH.",
	prompts: [
		"<strong>Paint the Scene:</strong> This room is littered with maps—of the city, of England, of the world—and some of them are highly unusual. Name one and describe why it’s so strange. ",
		"The year is 1779. No one has ever accused Godfrey Rathermere of an overabundance of ability or intelligence, but being the son of fearsome monster-hunter and explorer Lionel Rathermere, his place at Hargrave House is secured. Alone in the map room, Godfrey is drawn to the orrery. What compels him to manually adjust its delicate mechanism? What disorienting sensations assail him as, suddenly, the parallel worlds mapped by the orrery start to collapse into his own?",
		"When the strangeness settles, Godfrey is face-to-face with a version of himself from another reality, standing on the other side of the orrery like a mirror image. What key difference in appearance or demeanor hints at the nature of this other Godfrey's original world? Understanding instinctively that only one of them can remain here, how does our Godfrey defeat his counterpart?",
		"In the aftermath, how does Godfrey realize that his other self wasn’t brought to our reality—it was he who was transported instead? Is it horror or the thrill of discovery that now quickens his pulse?",
	],
	onUnlock: { text: [
		"<strong>When you have The Cosmic Passage marked and manipulate the map room’s orrery</strong>, roll with Sensitivity. ",
		"<strong>On a hit,</strong> an alternate version of you is transported into this reality. Choose one from below, and describe the most notable difference in your parallel self’s appearance or bearing. Righting the worlds and sending them home is as simple as returning the orrery to its correct alignment.",
		"<strong>On a 7-9,</strong> the orrery breaks after this use; all Hunters lose access to this move.",
"<li>		They come from a reality very close to yours, the difference in their experience so miniscule as to be trivial. They’ll gladly exchange places with you, just for a lark. Change appropriate details of your Look, switch two of your Ability Scores, and replace your Vice with a new one.</li>",
"<li>		Their version of Hargrave House made quick work of a Threat yours is currently facing. The details aren’t the same, but their insight is nevertheless invaluable; gain advantage on an associated Answer a Question roll.</li>",
"<li>		Their version of Hargrave House failed to defeat the Mastermind yours is currently facing, to dire consequence. They reveal a Mastermind Clue, the significance of which they didn’t grasp in time. </li>",

		"<strong>On a miss,</strong> you are the one transported. The Keeper describes the horrific new reality you’re marooned in, from which you’ll never find your way home. This character is now retired.",
	] },
};

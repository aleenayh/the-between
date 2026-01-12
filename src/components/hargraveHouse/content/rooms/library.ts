import type { RoomContent } from "../../types";

export const libraryContent: RoomContent = {
	title: "The Library",
	intro: "Towering bookcases filled with tomes spanning human understanding and beyond. A sturdy spiral staircase escalates between multiple floors. The deep, indelible scent of ancient trees and bitter inks hang in the atmosphere. ",
	prompts: [
		"<strong>Paint the Scene:</strong> Of all the rooms in Hargrave House, none feel more “unstuck” than this one. As you enter the library, what do you see or experience that feels a little... off? ",
		"<strong>Paint the Scene:</strong> An entire shelf is dedicated to the Hunter’s logs of Mayhew Dandridge, an alienist and former resident of Hargrave House. In his writings, Mayhew postulates that all who set foot in the house are cursed. What outlandish claims does he make to support this theory? ",
		"<strong>Paint the Scene:</strong> While hunting for a fae creature, a group of Hunters liberated a collection of erotica from the Noonlight Court. A cursory glance reveals various figures in various compromising positions. Describe one as modestly or salaciously as comfort allows. ",
		"<strong>Paint the Scene:</strong> Part of the library is closed off behind wrought iron gates, padlocks, and a number of more… esoteric security measures. Within, reams of sensitive documents and personnel files of former residents lie in wait. What evidence remains of Hunters’ unsuccessful attempts to breach the restricted section’s secrets? ",
	],
	onUnlock: { text: [
		"<strong>When you spend an entire phase conducting research in the library</strong>, choose an active Threat and name a book by title and topic that could reasonably be related. Then roll with Reason:",
		"<li><strong>On a hit,</strong> you find the book described; add it as a Clue for the associated Threat.</li>",
		"<li><strong>On a 7-9,</strong> as above, but roaming the uncanny twists and turns of the library takes its toll. Take the Condition: Burdened by Knowledge. If you already have the Condition: Burdened by Knowledge, put on the Janus Mask.</li>",
		"<li><strong>On a miss,</strong> you find the book described above, but get lost in the library for a time, as the uncanny space slowly leeches knowledge from your mind. Forget the events of your most recent Mask of the Past; the memory appears somewhere in the library as a new tome. You may not use the library again until a new Threat is presented.</li>",
		"<li><strong>On a 12+,</strong> a corner of the library reshapes itself to provide a comfortable reading spot for you specifically. Describe how, and clear an appropriate Condition.</li>",
	] },
};

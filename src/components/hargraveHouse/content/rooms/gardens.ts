import type { RoomContent } from "../../types";

export const gardensContent: RoomContent = {
	title: "The Gardens",
	intro: "Fragrant beds of lavender, foxglove, hemlock, and monkshood thrive in harmony. Butterflies flutter, bees buzz, and spiders spin webs for any insect who lingers too long. A thick, ancient oak reaches out its leafy branches, providing cover for any who need it.",
	prompts: [
		"<strong>Paint the Scene:</strong> Being in this space is like being totally disconnected from the stink and grime of London. Is that reassuring to you or does it make you feel uncomfortable? Why? ",
		"The year is 1838. Madeline Mayweather, a young sorceress, has a thorny relationship with the other Hunters of Hargrave House. Preferring to spend time in the gardens than in their company, she imbues the soil with magic so that she can communicate with the flowers. Sometimes, the flowers whisper back: we are hungry. What heated encounter leads to Madeline burying a fellow Hunter in the garden, feeding their bodies to the eager earth? ",
		"<strong>Paint the Scene:</strong> Eventually, the gravity of Madeline’s deed sinks in, regret blooming in the pit of her stomach. As she performs the ritual to right her wrong and raise the Hunter from the dead, in what subtle ways do the gardens express their dissatisfaction with her? ",
		"The ritual succeeds, but Madeline’s relief is nipped short. The gardens have a lesson of their own to teach her. How has the Hunter returned changed by the gardens’ magic, and what do they do to Madeline to remind her to never get in Nature’s way again? ",
	],
	onUnlock: { text: [
		"<strong>The first time a corpse or carcass is buried in the gardens</strong>, it returns to life permanently changed by the magic still lingering in the soil (choose one):",
		"<li>Red blood replaced by green chlorophyll</li>",
		"<li>Breath filled with clouds of fungal spores</li>",
		"<li>Compulsion to keep dirt and worms on their skin as often as possible</li>",
		"<li>Flowers bloom from fresh physical wounds</li>",
		"<li>Overwhelming floral fragrance that constantly attracts pollinators</li>",
		"<li>Something else that shows the earth will not let them go that easily</li>",
		"<li>This effect can only be used once, after which the magic in the soil dissipates.</li>", 
		"A Hunter resurrected in this way may unmark <strong>The Blood-Soaked Portal.</strong> Additionally, when they participate in <strong>The Vulnerable Move</strong> in the Garden, they add 1 to Sensitivity or Presence (max 4) for the remainder of the session.",
	] },
};

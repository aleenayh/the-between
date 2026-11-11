import type { PlaybookBase } from "../types";

export const volatilePlaybook: PlaybookBase = {
	title: "The Volatile",
	intro: [
		"You are evil. Obviously. Man is many great and wondrous things—blessed by his Creator with the spark of intellect—but Man is still a beast, an animal ceaselessly called to briar and bramble, to that great wilder-church of the Devil himself. The difference between you and the other blighted mammals is you know what you are. You understand the stain of evil on your soul. And you will use the gifts the Creator gave you to wipe it clean.", 

		"Chemistry was to be your spiritual solvent. Leaning on the legacies of Robert Boyle and Monsieur Lavoisier—men who put the funny old alchemists in their place—you created and tested mixtures to purge the malevalent state from your body. But alas, nothing worked. Indeed, your experiments seemed to only make the evil worse. Perhaps the alchemists weren’t charlatans after all? Perhaps a spiritual problem required a spiritual solution?", 
		
		"And so you turned to the supernatural, developing a special reagent that helped you break past the boundaries of mere science, creating mixtures—no, elixirs—that allow you to do the impossible. And that’s also how you found yourself at Hargrave House: your work lines up rather smartly with theirs. Obviously." 
		
	],
	names: {
		firstName: [
			"Horace", "Cecil", "Rajendra", "Ernest", "Étienne", "Basil", "Lionel", "Edwin", "Algernon", "Cyril", "Harriet", "Winifred", "Soraya", "Mabel", "Amélie", "Prudence", "Blanche", "Katarina", "Lydia", "Agatha"
		],
		surname: [
			"Pritchard", "Ashcombe", "Merriweather", "Wetherby", "Blackwood", "Radcliffe", "Hollingworth", "Fanshawe", "Weatherall", "Mordaunt", "Penrose", "Whitcombe", "Goddard", "Bexley", "Strangeways", "Delacroix", "Vuković", "Mukherjee", "Farrokhzad", "Tanaka"
		],
	},
	look: [
		"Wild shock of black hair", "neat auburn hair with a streak of white", "glossy curls pinned with tortoiseshell combs", "neatly trimmed whiskers and haunted eyes", "round spectacles with green-tinted lenses", "silver pince-nez on a black ribbon", "high white collar fastened with a blood-red cravat", "cameo brooch containing a lock of hair", "dove-grey gloves stained at the fingertips", "heavy leather satchel crowded with stoppered bottles", "bottle-green frock coat with singed cuffs", "plum waistcoat with mother-of-pearl buttons", "high-necked burgundy dress with black lace trim", "crisp white shirtsleeves rolled above the elbows", "mustard-yellow laboratory apron spotted with mysterious stains", "charcoal trousers with razor-sharp creases", "ankle-length black skirt with a flash of scarlet petticoat", "black-and-grey striped stockings", "oxblood leather boots polished to a mirror shine", "sensible button boots scarred by chemical burns"
	],
	vices: [
		"arson", "blackmail", "elaborate lies", "shoplifting", "pornography"
	],
	questions: [
		"Did you embrace the possibility of a supernatural explanation despite everything you’ve been taught about science?", 
"Did you secretly engage in chaotic or violent behavior at odds with your gentle exterior?",
"Did you treat someone like little more than the means to an end?",
"Did you show gentle affection toward someone when they had no one else to turn to?", 
"Did you deliver a flinty, steel-eyed monologue about the inherent evil of Man?"
	],
	abilities: {
		vitality: 0,
		composure: -1,
		reason: 2,
		presence: 0,
		sensitivity: 1,
	},
	masksOfPast: [
		"Narrate a flashback to your childhood showing how you were the brightest and most-adored of your parents’ children. / Then, narrate a flashback showing your cruelty toward your siblings. ",
"Narrate a flashback to your greatest achievement in the academy. How were you honored? / Then, show how you used or harmed others in order to attain that achievement.",
"Narrate a flashback to when you fell in love. Who was the person who stole your heart? Name them. / Then, narrate a flashback showing the signs of derangement your beloved missed. ",
"Narrate a flashback to when you first began to suspect there was something wrong with you. What happened that frightened you so badly? / Then, narrate a flashback showing how what happened was not an accident.",
"Narrate a flashback to the experiment that established your reputation as a chemist. What discovery did you make? / Then, narrate a flashback showing the terrible thing you did with that discovery before sharing it with the world.",
"Narrate a flashback to when you first attempted to use chemistry to purge the evil from your soul. What convinced you the treatment had worked? / Then, narrate a flashback showing the monstrous behavior that followed.",
"Narrate a flashback to when you finally abandoned the limits of modern chemistry and incorporated the supernatural into your work. What creature or phenomenon provided the breakthrough? / Then, narrate a flashback revealing the horrifying price you paid—or made someone else pay—to create your first reagent."
	],
	masksOfFuture: [
  "<strong>The Gilded Door</strong>: Take the following Condition: Most-Beloved. Tell the other Hunters they can no longer choose The Gilded Door on their own playbook (this does not count as being marked for them). You can never clear Most-Beloved.",
  "<strong>The Moss-Covered Gate</strong>: Lower your Presence by 1. Then, unmark two marked boxes from The Mask of the Past that haven’t been unmarked by The Darkened Threshold. When you mark them again, resolve both parts of the prompt. ",
  "<strong>The Darkened Threshold</strong>: Lower your Vitality by 1. Then, unmark two marked boxes from The Mask of the Past that haven’t yet been unmarked by The Moss-Covered Gate. When you mark them again, resolve both parts of the prompt. ",
  "<strong>The Cosmic Passage</strong>: Increase your Sensitivity and Reason by 1 each (max 3) and reduce your Composure by 2 (no min). ",
  "<strong>The Blood-Soaked Portal</strong>: Narrate a scene in which you are physically destroyed. This character is now retired. ",
],
masksOfFutureDescription: "If no boxes are marked, you may narrate a scene showing how you were able to finally perfect the reagent in order to create your panacea. How did it help you purge the evil from your soul? Tell the other Hunters what the future holds for you, and retire this character. Otherwise, mark any box you wish.",
masksPastDescription: "Mark the first unmarked box. Resolve the portion before the forward slash; only resolve the portion after the forward slash when instructed to do so by The Mask of the Future. ",
	startingMoves: ["Odd Chemistry"],
	moves: [
		{title: "Odd Chemistry",
			text: [
				"You have the tools and inputs needed to create Elixirs. Whenever you take a few hours to do so, mark Reagent and roll with Reason or Sensitivity, your choice. If you have a Condition that would make the delicate process of creating chemicals difficult, the Keeper can force you to roll with Composure (in addition to rolling at disadvantage, as normal). On a 10+, you create an Elixir; pick an Aspect and write it on an empty Elixir space. On a 7-9, as above, but the Keeper will also pick a Complication; write it below the Aspect. On a miss, as 7-9, but the Elixir is poorly made; cross out two of the boxes.",

"Each Elixir can be used by a single character (you or someone else) for an entire phase of play; write the name of the character on the circle next to the Elixir. The affected character gets the feat or benefit implied by the Aspect without having to mark a box. If the character under the influence of the Elixir is a Hunter, they can additionally mark a box to get the mechanical benefits of an Aspect so long as it makes sense in the fiction. You no longer have access to an Elixir once all Aspect boxes are marked.",
"To replenish your Reagent, you must render and distill the essence of a deceased (or trapped) supernatural creature. When you spend a whole phase of play doing so, unmark all Reagent and work with the Keeper to define one new Aspect and one new Complication, inspired by the creature in question; write them on the respective lines above. Once all Aspects are filled in, you must erase one to add a new one. Once all Complications are filled in, if you ever need to add a new one, put on a Mask and then replace an existing Complication with the new one. The creature is destroyed in the Reagent process. "
			]
		},
		{title: "Saturation Point",
		text: ["After rolling Odd Chemistry, you can mark additional Reagent to add to the result, +1 for each additional box marked."]
		},
		{title: "Apparatus Peculiar to My Work",
			text:   ["Add the following to your Personal Quarters: Microscope with Experimental Lenses, Lead-Lined Specimen Case, Rubberized Suit, Silver-Plated Dissection Kit, Hand-Cranked Centrifuge."]
		},
		{title: "Ex Tempore",
			text:   ["When in the presence of the supernatural, mark all remaining Reagent to create a quick, limited-use Elixir right here, right now. Work with the Keeper to define one Aspect and one Complication, inspired by the supernatural source, and fill them in below. This Elixir can only be used for the remainder of the phase it was created in; erase it entirely once the phase is complete. "]
		},
		{title: "Further Observations",
			text:   ["At the end of a Hargrave House Night Phase, in addition to any other actions or benefits you are entitled to, work with the Keeper to define one Aspect and one Complication inspired by the Hargrave House Room story, and add them to Odd Chemistry.  "]
		},
		{title: "The Active Principle",
			text:   ["When in the presence of the supernatural, mark Reagent and work with the Keeper to add a new Aspect to Odd Chemistry."]
		},
	],
	advancements: [
		"Increase an ability modifier by 1 (max 3)",
		"Increase an ability modifier by 1 (max 3)",
		"Increase an ability modifier by 1 (max 3)",
		"Choose an additional move from your playbook.",
		"Choose an additional move from your playbook.",
		"Unmark all the boxes on your Elixirs.",
		"Unmark everything in your Personal Quarters.",
	],
};

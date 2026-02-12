import type { PlaybookBase } from "../types";

export const selkiePlaybook: PlaybookBase = {
	title: "The Selkie",
	intro: [
		"You are not human, though you certainly look the part. You are a selkie, a seal-like shapechanger born to crashing waves and salty air. Clever and curious, you left the ocean for the surface world, delighting in what the land had to offer. Then you met a thief who stole first your trust and then your pelt, the very thing that lets you swim the oceans surrounding Great Britain. For months, even years, you languished under them. You eventually escaped, but that dastardly individual had one last trick up their sleeve. Your pelt—your beautiful second skin—is damaged, and only you can repair it. Hargrave House is sheltering you while you help them with the dark work they do, but it is a tenuous agreement. You refuse to be controlled again—no matter the cost.",
	],
	names: {
		firstName: [
			"David", "Anna", "Eideard", "Orla", "Rian", "Laiose", "Fiona",
			"Marcas", "Islay", "Tam", "Rae", "Neil", "Seonag", "Maeve",
			"Ollie", "Kira", "Kaylee", "Aidan", "Guaire", "Padraig"
		],
		surname: [
			"Lennox", "Blain", "MacIntyre", "Driscoll", "Molloy",
			"Innes", "Gibbs", "Douglas", "McLeod", "O’Neil", "Walsh",
			"Blythe", "Fairbairn", "Doyle", "Campbell", "O’Brien",
			"Sullivan"
		],
	},
	look: [
		"sailor's cap", "soft hair", "patterned head scarf",
		"large and dark eyes", "mounds of freckles", "vitiligo",
		"thick woolen shawl", "silk scarf", "suit jacket", "worn oilskin",
		"patchwork coat", "tartan skirt", "ruffled blouse", "dock hand's trousers",
		"aquamarine ring", "turquoise brooch", "pocket watch", "single gold earring",
		"galoshes"
	],
	vices: [
		"rum", "going dancing", "penny dreadfuls", "fine clothes", "public baths"
	],
	questions: [
		"Did you discover something new and exciting about the surface world? ",
		"Did you delight in uncovering lost, forgotten, or ancient magic? ",
		"Did you trust someone with sensitive information, despite knowing the risks? ",
		"Did you assert your independence or stand up for yourself? ",
		"Did you mourn being unable to return home? ",
		"Did you subtly (or not so subtly) invoke your oceanic heritage or your love for the sea? ",
	],
	abilities: {
		vitality: 0,
		composure: 0,
		reason: 1,
		presence: 0,
		sensitivity: 1,
	},
	masksOfPast: [
		"Narrate a flashback to when you were a young child, playing with your fellow selkies and sea creatures. ",
		"Narrate a flashback to your childhood when you met a human for the first time. ",
		"Narrate a flashback to your young adulthood in which you explored what the surface world had to offer. ",
		"Narrate a flashback to your young adulthood when you entrusted a human with your identity. Name the thief. ",
		"Narrate a flashback to when the thief forced you to humiliate or hurt someone. ",
		"Narrate a flashback showing you consumed by sorrow and rage because of your mistreatment. ",
		"Narrate a flashback to when you dealt with the thief—permanently. ",
	],
	masksOfFuture: [
  "<strong>The Gilded Door</strong>: Take the following Condition: Most-Beloved. Tell the other Hunters they can no longer choose The Gilded Door on their own playbook (this does not count as being marked for them). You can never clear Most-Beloved.",
  "<strong>The Moss-Covered Gate</strong>: Narrate a scene where your curiosity puts someone else in harm’s way.",
  "<strong>The Darkened Threshold</strong>: Narrate a scene where you ruthlessly stop someone who suspects your true nature.",
  "<strong>The Cosmic Passage</strong>:  You can move and control sources of water within eyesight. Near large bodies of water, such as a river or well, you can move enough water to flood a room. When you channel the sea and tides, take your next roll with Advantage. If the next roll results in a miss, you take the condition: <strong>Exposed</strong> in addition to any other consequences.",
  "<strong>The Blood-Soaked Portal</strong>: Narrate a scene in which you flee back to the ocean by any means necessary. If the pelt is not repaired, include a description of the profane and bloody ritual needed to instantly restore it. This character is now retired.",
],
	startingMoves: ["Severed From The Sea", "Moonlight Upon The Waves"],
	moves: [
		{
			title: "Severed From The Sea",
			text: [
				"The person who stole your pelt managed to damage it, curse it, or otherwise heavily restrict its use. What’s wrong with your second skin?", "<li>It is torn and ragged as if cut with a knife.</li>","<li>Wearing the pelt feels alien.</li>","<li>The fur is matted with bristles and thorns.</li>","<li>A large part is missing, making your transformation incomplete.</li>","<li>Sunlight erodes the hair fibers.</li>", "<li>Your transformation is incredibly painful.</li>", 
				
				"When you attempt to repair the pelt using knowledge gained from a move, mark a box and describe how you use this new-found information to repair the damaged coat.", 
				
				"When all the boxes are marked, your pelt is completely repaired and you can safely stay in your seal form indefinitely. However, the strange magic needed to restore your connection to the sea has altered your pelt—and you—greatly. Narrate a scene in which you are swimming with the repaired pelt, noting the mystical changes to your appearance and body.",
				
				"With your pelt fully repaired, if you wish, you may swim off and rejoin your undersea brethren; narrate a scene where you reunite with your friends and family, then retire this character. Otherwise, your curiosity of the land folk compels you to return to the shores of London and Hargrave House. Narrate a scene where you happily return to the streets of London with newfound vigor and interest. You no longer have access to the moves Severed From the Sea and Moonlight Upon the Waves. Unlock Scion of the Ocean. Then tell the Keeper to put The Vengeful into play.",
			],
			checkboxes: 12,
		},
		{
			title: "Moonlight Upon The Waves",
			text: [
				"The darkness is far safer for London’s animal life, and you are no exception. During the Dusk phase, you can invoke Moonlight Upon the Waves. At the start of the Night phase, you put on your pelt and take to London’s waters in the form of a seal. While transformed, you can speak with the watery creatures lurking in the city’s rivers and canals, and you can take actions reasonable of a very intelligent and crafty seal. Choose two boons and one complication from the list below. During the Dawn phase that follows, you are forced to return to your human form.",
				"<strong>Boons</strong>",
				"<li>You find a Clue; the Keeper will describe what it is.</li>",
				"<li>You find a keepsake; ask another hunter what it is and add it to your Personal Quarters.</li>",
				"<li>You clear one physical Condition.</li>",
				"<li>You repair the pelt with the help of a relative (can be chosen more than once).</li>",
				"<strong>Complications</strong>",
				"<li>A Side Character notices you; take the Condition: Marked by [Name of Side Character].</li>",
				"<li>A creature of the deep demands a favor in return for their help.</li>",
				"<li>You attract the attention of a Danger.</li>",
				"<li>You gain the Condition: Sea Longing. This cannot be cleared.</li>",
			],
		},
		{
			title: "Scion of the Ocean",
			text: [
				"At any point, you can sneak off to a private location and transform into a seal. In this state, you can understand and speak with aquatic animals. Supernatural creatures consider you distant kin. You swim faster than any man. You may shed your pelt and return to your human form at any time. When performing an action that leverages your seal form, in addition to any effects of an associated roll, choose one from the list below on a hit.",
				"<li>You find a Clue; the Keeper will describe what it is.</li>",
				"<li>You find a keepsake; ask another hunter what it is and add it to your Personal Quarters.</li>",
				"<li>You don’t draw any unwanted attention.</li>",
				"<li>You gain a favor from one of your kin.</li>",
			],
		},
		{
			title: "Bright Eyed and Flat-Finned",
			text: ["When you express genuine excitement in learning or doing something most would consider mundane, associated rolls are taken with Advantage. On a hit, in addition to any benefits granted by the move in question, you find a piece of knowledge that lets you attempt to repair the pelt; this secondary effect is no longer available once the pelt has been repaired."],
		},
		{
			title: "Esoteric Empiricist",
			text: ["Add Research Notes to your Personal Quarters; this item can never be marked. Additionally, when conducting research into the supernatural, you can roll the Information Move with either Reason or Sensitivity; instead of finding a Clue or Mastermind Clue, you can instead attempt to repair your pelt."],
		},
		{
			title: "Nothing Fishy Here, Sir",
			text: ["When you try to redirect someone prying into your activities or identity, roll with Reason. On a 10+, you successfully divert their attention with facts, logic, or a bit of interesting trivia. On a 7-9, as above, but you take the Condition: <strong>I’m Being Watched</strong>."],
		},
		{
			title: "Curse of the Deep",
			text: [
				"When you lash out at someone threatening you or your allies, invoke the magic of your kin and roll with Sensitivity. On a 10+, choose two from the list below. On a 7-9, choose one:",
				"<li>You have Advantage on your next roll.</li>",
				"<li>They are overwhelmed with fear and flee.</li>",
				"<li>They refuse to harm someone of your choosing, including yourself.</li>",
				"<li>They gain a deep fear regarding bodies of water.</li>",
			],
		},
		{
			title: "Fellow Outsider",
			text: ["When you reveal your identity to something that isn’t human, you may ask the Keeper two of the following:",
				"<li>How can I gain their trust? The Keeper will answer truthfully and completely.</li>",
				"<li>How has humanity treated them? The Keeper will answer in the form of a Clue.</li>",
				"<li>Will they help me? The Keeper will answer with a Clue and something the creature wishes for in return. When you aid the creature or it aids you, associated rolls are taken with Advantage.</li>",
				"<li>Do they know something that can help me repair the pelt? If the Keeper says yes, you can attempt to repair another section of the pelt. If the Keeper says no, you can attempt to glean other kinds of knowledge, possibly triggering another move. This effect is no longer available once the pelt has been repaired.</li>",
			],
		}
	],
	advancements: [
		"Increase an ability modifier by 1 (max 3)",
		"Increase an ability modifier by 1 (max 3)",
		"Increase an ability modifier by 1 (max 3)",
		"Choose an additional move from your playbook.",
		"Choose an additional move from your playbook.",
		"Write a custom move for your character.",
		"Unmark everything in your Personal Quarters.",
	],
};

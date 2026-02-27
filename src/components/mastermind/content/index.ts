import type { MastermindContent } from "../types";

export const Masterminds: Record<string, MastermindContent> = {
	theodora: {
		title: "Theodora Braithwaite",
		questions: [
			{
				layer: "Layer Four: The Assault on Hargrave House",
			question: "How can we defend Hargrave House from Mrs. Brathwaite’s Servants?",
			complexity: 6,
			opportunity: "Resolve the Threat by defending Hargrave House and capturing a Servant. If successful, the Servant will reveal a Mastermind Clue in the form of vital information about Mrs. Brathwaite’s plans. "
		},
			{layer: "Layer One: The Mastermind Question",
				question: "How does the Mastermind intend to destroy the Crown?",
				complexity: 8,
			},
			{
				layer: "Layer Five: The Confrontation",
				question: "[Keeper, replace this with your question!]",
				complexity: 6,
			}
		],
		layers: [
			{
				title: "Layer One: The Mastermind Question",
				text: [
					"This layer is unlocked at the end of the first Night Phase. Immediately read the following:",

"Before we move into the Dawn, I want to tell you about one more person doing dark work tonight. She is just outside the city, in her lavish country home, sitting in a well-appointed study, in a tall wingback chair upholstered in blue velvet. Her butler—a man so old he seems to be shrinking into his immaculate livery—has just slowly crossed the room to serve her an evening drink: spiced rum, always neat; an unusual choice, perhaps, in the English countryside.",

"We can see her more clearly now: mahogany skin, age lines around the eyes that only just diminish her beauty, dark curls falling over her shoulders. She’s wearing a dressing gown of dark blue satin, but more striking is the enormous sapphire at her throat, sparkling in the candlelight—a gem that can easily be traded for a fleet of ships or a small army, should either need arise.",

"She is pondering an enormous map of London mounted to the study wall. There are brass pins shaped like daggers marking out various places in the city, locations important for some grand scheme (you might notice a pin on Hargrave House). Our scene ends when she stands up, crosses the room, and plunges one of the brass daggers into Buckingham Palace.",

"Hargrave House doesn’t yet know this woman schemes against the Empire, but we do. As players, we have our own Question to answer, the Mastermind Question: How does the Mastermind intend to destroy the Crown? (Complexity: 8). Hargrave House will immediately confront her once we’ve successfully answered it."
				],
			},
			{ title: "Layer Two: The History Between Mrs. Brathwaite and the Queen", text: ["This layer is unlocked after the second Threat is introduced. You now have a new Keeper reaction: Reveal History. Whenever you do it, mark a box below and reveal the information in whatever way makes sense in the scene. "], checkList: [
				"1834: Theodora is captured by the Royal Navy at age sixteen. She is already known as the legendary Pirate Queen of Barbuda, and her capture is considered a significant victory for the British Empire. A young Princess Victoria, enchanted by stories of the Pirate Queen, intercedes on Theodora’s behalf and wins her freedom. Theodora turns her skills (and ships) to legitimate enterprise after that. ",

"1844: Mrs. Brathwaite arrives in London at age twenty-six. She goes on a buying spree, snapping up real estate and businesses that will later be the foundation of her vast fortune. She is the toast of London, and scandalous rumors suggest the young Queen Victoria has taken her as a lover.",

"1857: Mrs. Brathwaite becomes famous (again) for the masquerade parties she throws at Brathwaite Hall—events that are now legendary for the debauchery on offer. Queen Victoria, having embraced a program of morality and piety for her subjects, threatens to seize Brathwaite Hall if the gatherings continue, angering Mrs. Brathwaite and creating a schism between them.",

"1861 (less than ten years ago): Mrs. Brathwaite attempts to stop a particular import tax from being set; the tax will cost her businesses a lot of money. She ably manipulates Parliament and is on the cusp of victory when Queen Victoria’s meddling behind the scenes renews the vigor of those who support the tax, and it becomes law. ",
			] },
			{ title: "Layer Three: A Threat Becomes a Servant",
				text: ["This layer is unlocked after the fourth Threat is introduced.  Anytime thereafter, you can choose an active Threat and narrate a scene showing how the Threat becomes a Servant of the Mastermind. Add them to the Servants section and tell the Hunters the Threat can no longer be resolved (nor is it active for game purposes, though it may still be a danger to the city). You can do this once. "],
				addServant:true
			},
			{ title: "Layer Four: The Assault on Hargrave House",
				text: ["This layer is unlocked after the Hunters have successfully resolved three Threats and all boxes from Layer Two have been marked, or if the Hunters get a miss on an attempt to answer the Mastermind Question. Anytime thereafter, you may read the below text at the start of a Day Phase instead of doing the normal procedure; if you do, any countdowns on active Threats are suspended for a single Day/Night cycle, and The Assault on Hargrave House becomes the only active Threat until the end of the Night Phase.", 

"You have received information from a reliable source: Mrs. Brathwaite is sending a group of her henchmen to lay siege to Hargrave House tonight. Perhaps she’s tired of playing cat & mouse, or maybe she wants to send you a message; she may be testing you… or toying with you. No matter, the result is the same: her forces intend to ransack the house, and you’ll have to stop them. You don’t have much time to prepare a defense.",

"Question: How can we defend Hargrave House from Mrs. Brathwaite’s Servants? (Complexity: 6)",
"Opportunity: Resolve the Threat by defending Hargrave House and capturing a Servant. If successful, the Servant will reveal a Mastermind Clue in the form of vital information about Mrs. Brathwaite’s plans. ",

"Let the Hunters know that investigating this Threat means finding ways to defend the house from—and devising traps for—the Mastermind’s Servants. The following Clues are available (and can be used more than once, as needed):",
"<li>A good spot for an ambush or trap.</li>",
"<li>A good spot to put a lookout.</li>",
"<li>Materials to make a barricade.</li>",
"<li>A Side Character volunteers to help you.</li>",
"<li>A Side Character reveals a hidden talent for hand-to-hand combat.</li>",
"<li>An object of power (pick one: a mirror that causes the viewer to see their greatest fear, a talisman that makes a portal impassable, a veil that makes the wearer difficult to notice, something else).</li>",
"<li>A door that opens into an impossible room.</li>",
"<li>A staircase that’s a much longer climb/descent than it appears to be.</li>",
"<li>A hallway with impenetrable darkness.</li>",
"<li>A torture device (pick one: an iron maiden, a vise, shackles, something else).</li>",

"No matter the result of Answer a Question, the Servants will attack Hargrave House during the Night Phase. On a 10+, the Opportunity can be pursued in a straightforward and decisive way; have the Hunters narrate their great success, and only trigger another move if part of their plan is particularly risky. On a 7-9, the ﬁght is much tougher, and should trigger more moves to be successful. On a miss (or if the Hunters are unable to attempt the Question at all), the Hunters will have to make a few tough Night Moves in order to survive, and some of their property is destroyed during the assault; each Hunter must erase an unmarked item from their Personal Quarters.",

"The players must then immediately attempt to answer the Mastermind Question. The Threat is considered resolved at the end of the Night Phase."],
			},
			{ title: "Layer Five: The Confrontation",
				text: ["This layer is unlocked after the Hunters successfully answer the Mastermind Question, or The Assault on Hargrave House is resolved, whichever comes first. Follow the instructions on the associated Confrontation sheet. "],
			}
		],
	},
	flagg: {
		title: "Vice Admiral Thaddeus Flagg",
		questions: [
			{ question: "Who or what will Admiral Flagg sacrifice to his dark god?",
				layer: "Layer One: The Mastermind Question",
				complexity: 8,
			},
			{
				question: "How can we call Flagg’s monstrosity to us?",
				layer: "Layer Four: Infiltrating Chimaera",
				opportunity: "Engage in a Struggle against the Chimaera.",
				complexity: 6,
			},
			{
				question: "[Keeper, replace this with your question!]",
				layer: "Layer Five: The Confrontation",
				complexity: 6,
			}

		],
		layers:   [
			{ title: "Layer One: The Mastermind Question",
				text:     [
					"This layer is unlocked at the end of the first Night Phase. Immediately read the following:", 

"<i>Before we move into the Dawn, I want to tell you about one more person doing dark work tonight. The room we see is no ordinary cellar. Its stone walls have been painted a brilliant, cloud-flecked blue; ropes hang from beams like rigging; the floorboards are smeared with tar to mimic a ship’s deck. Lanterns swing overhead, though there is no breeze. The shadows they cast rock gently, as if the whole false vessel were rolling at sea.</i>",

"<i>Gathered in a tight circle are the surviving crew of HMS Chimaera—elderly men in threadbare naval coats, skin creased and leathery from decades of salt and sun. Their medals clink softly with every movement. They surround a younger man: Midshipman Miller. He stands stripped to his trousers, shivering despite the heat, his hair damp with sweat. The crew chant old naval verses—half drinking songs, half prayers—and shove him from man to man, each delivering blows disguised as a test of “discipline.”</i>",

"<i>The ritual grows harsher. Someone forces a rope across Miller’s back and hauls him to his knees. Another pours a bucket of seawater over his head. The men laugh, bark orders, demand he show the mettle of an officer. Their hands roam across his shoulders, his chest, his face, as they violently correct his “posture” and “bearing.” Miller tries to stand, tries to maintain dignity, but the laughter and the chanting drown him, the vicious blows break him. His breath comes shallow; his eyes glaze with fear and something like shame.</i>",

"<i>A sudden shift in the air stills the room. The chanting dies. The men part, reverently, almost trembling. From the painted horizon—through a doorway made to resemble a ship’s forecastle—steps Vice Admiral Thaddeus Flagg. His elderly body is lean and corded, bare of clothing, save for a lion’s pelt draped across his shoulders. Goat horns curl from a headdress strapped to his brow. Around his legs coils a living serpent, its scales catching the lantern-light like wet oil. Flagg walks among the assembly as a god.</i>",

"<i>The young man collapses at the Admiral’s feet, limbs stiffening, mouth frozen in a silent scream. The serpent slips from Flagg’s thigh to Miller’s chest as if claiming him. When the final breath rattles from Miller’s body, the crew bow their heads. Flagg smiles, touches the lion’s mane on his shoulders, and says, almost gently, “An unworthy sacrifice, I fear.”</i>",

"Hargrave House does not yet know it, but we do: Admiral Flagg is in contact with a dark god. He will make a sacrifice to this dark god so he can claim some of its power for himself, and then use that power to destroy London. As players, we have our own Question to answer: Who or what will Admiral Flagg sacrifice to his dark god? (Complexity: 8) Hargrave House will immediately confront him once we’ve answered it."
				],
			},
			{ title: "Layer Two: A History of Admiral Flagg's Service",
				text:     [
					"This layer is unlocked after the second Threat is introduced. You now have a new Keeper reaction: Reveal History. Whenever you do it, mark a box below and reveal the information in whatever way makes sense in the scene."],
					checkList: [
"1834: A young Lieutenant Flagg receives a special commendation for leading the daring nighttime boarding action that led to the capture of the Pirate Queen of Barbuda. Lieutenant Flagg singlehandedly killed six pirates during the boarding and fought the Pirate Queen herself to a draw in a sword duel that is still spoken of with reverence on British mess decks.",

"1838: Captain Flagg is given his first command, HMS Chimaera. Chimaera is widely considered a strange career path for Flagg, it being an ugly, unglamorous warship during a time of peace, and Flagg’s reputation as a dashing pirate hunter so well-established. But it was Flagg who aggressively pursued the commission, saying he was compelled to do so by a dream of a three-headed monster, similar to the creature depicted on Chimaera’s crest.",

"1843: Sir Bailey begins his expedition to the Arctic. Chimaera, as a warship, is easily refitted to be a polar exploration vessel and, with Flagg at the helm, sets out with Bailey to navigate the Northwest Passage, along with a second ship, HMS Fang. The ships were never seen again.",

"1846: Captain Flagg and most of his crew from Chimaera miraculously return to London. They share a story about how Chimaera and Fang became icebound, and how Flagg and his crew took shelter in a cave system near the wreckage of their ship, and were later rescued by a Canadian vessel. They claim to have no idea what happened to Fang. Flagg is celebrated throughout the Empire, and though he never again sets foot on a ship, he distinguishes himself as an effective administrator and rises in the ranks of the Royal Navy.",

"Present day: The wreckage of Chimaera and Fang have been found, and rumors are swirling. There is evidence of hostility—even fighting—between the two icebound vessels, and the bones of Fang’s dead crew members are said to have what appear to be bite marks on them. The interior bulkheads of Chimaera are said to be marked with numerous profane, arcane symbols, and Flagg’s diary—found in his stateroom—indicates he was tormented by strange hallucinations at the end…",
				],
			},
			{ title: "Layer Three: A Threat Becomes a Servant",
				text:     ["This layer is unlocked after the fourth Threat is introduced.  Anytime thereafter, you can choose an active Threat and narrate a scene showing how the Threat becomes a Servant of the Mastermind. Add them to the Servants section and tell the Hunters the Threat can no longer be resolved (nor is it active for game purposes, though it may still be a danger to the city). You can do this once."],
			},
			{ title: "Layer Four: Infiltrating Chimaera",
				text:     ["This layer is unlocked after the Hunters have successfully resolved three Threats and all boxes from Layer Two have been marked, or if the Hunters get a miss on an attempt to answer the Mastermind Question. Anytime thereafter, you may read the below text at the start of a Day Phase instead of doing the normal procedure; if you do, any countdowns on active Threats are suspended for a single Day/Night cycle. There is no Day or Dusk Phase during this event; rather, it’s a single, long Night Phase, with no Unscene:" ,

"<i>A young naval officer, Midshipman Strangford, comes to you early one evening. He’s seen something terrifying and strange at the home of Vice Admiral Flagg—a monstrosity Flagg calls “the Chimaera.” He informs you that Flagg and his “crew” are out for the evening, and that this might be the only chance to find and destroy the creature. You have a single Question, and just this Night Phase to answer it: How can we call Flagg’s monstrosity to us? (Complexity: 6) No matter the result of the Answer a Question roll, the answer is a Mastermind Clue, and you immediately confront the monstrosity. </i>",

"After the Question is attempted, immediately go to Struggle: The Chimaera. The players must then immediately attempt to answer the Mastermind Question. This event is considered resolved after the end of the Struggle and the Mastermind Question is attempted; immediately go to the Dawn Phase."],
			},
			{ title: "Layer Five: The Confrontation",
				text:     ["This layer is unlocked after the Hunters successfully answer the Mastermind Question, or Infiltrating Chimaera is resolved, whichever comes first. Follow the instructions on the associated Confrontation sheet. "],
			},
		]
	}
} as const;

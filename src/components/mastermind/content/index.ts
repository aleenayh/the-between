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
	},
	titania: {
		title: "Titania, Queen of the Fae",
		questions: [{
			question: "How does the Mastermind intend to destroy the Crown?",
			complexity: 8,
			layer: "Layer One: The Mastermind Question",
		},
	{
		question: "How can we defend Hargrave House from Titania's court?",
		complexity: 6,
		opportunity: "Resolve the Threat by defending Hargrave House and capturing one of Titania’s inner circle. If successful, the captive reveals a Mastermind Clue in the form of vital information about Titania’s plan.",
		layer: "Layer Four: The Assault on Hargrave House",
	},
	{
		layer: "Layer Five: The Confrontation",
		question: "[Keeper, replace this with your question!]",
		complexity: 6,
	}],
		layers:   [
			{title: "Layer One: The Mastermind Question",
				text:     [
					"This layer is unlocked at the end of the first Night Phase. Immediately read the following:",

"<i>Before we move into the Dawn, I want to tell you about one more person doing dark work tonight. The room we see is enormous but decayed: a once-grand ballroom inside an abandoned place somewhere in London. Rain leaks steadily through holes in the ceiling. Great curtains hang rotting from cracked windows. Dead ivy crawls across the walls. Yet tonight the ruin lives again.</i>",

"<i>Dozens of people move through the ballroom wearing masks cobbled together from scraps of theater costumes, broken jewelry, and painted animal skulls. A costermonger dances with a duchess. A gang member drinks beside a famous actor. Prostitutes recline like queens upon ruined furniture while violin music echoes from somewhere unseen. Hungry people feast greedily at long tables covered in stolen silverware and guttering candles melted into wine bottles.</i>",

"<i>At the center of it all sits their queen. She lounges in a splintered chair dragged onto the ballroom dais and transformed into a mockery of a throne. Her gown is stitched from a hundred scavenged garments. Wilted flowers crown her pale hair. A dozen followers kneel nearby awaiting judgment. One by one they bring gifts before her: stolen documents, jewelry, blackmail letters, police schedules, government seals.</i>",

"<i>She studies a map of London spread across the floorboards before her. Certain places are circled in white chalk: Buckingham Palace. Whitehall. The Tower. Hargrave House. A masked servant leans close and whispers, “The court grows restless.” She smiles faintly. “Good,” she says. “A kingdom should be made to tremble before it falls.”</i>",

"<i>Hargrave House does not yet know it, but we do: this woman, a queen brought low, is rebuilding her lost court in London. She intends to reclaim what Queen Victoria stole from her and bring the Crown to its knees in the process. As players, we have our own Question to answer: How does Mastermind intend to reclaim her stolen power from the Crown? (Complexity: 8). Hargrave House will immediately confront her once we’ve answered it.</i>"
				]
			},
			{title: "Layer Two: The History Between Titania and the Crown",
				text:     ["This layer is unlocked after the second Threat is introduced. You now have a new Keeper reaction: Reveal History. Whenever you do it, mark a box below and reveal the information in whatever way makes sense in the scene."],
				checkList: [
					"1546: Titania encounters the young Princess Elizabeth walking alone in the countryside. The two speak for hours. Elizabeth later claims she met “the Queen of Moonlight.”",	

"1559: Queen Elizabeth returns to her chambers after her coronation to find Titania waiting beside the hearth. Titania offers her aid in exchange for tribute. The tribute is (pick one: England’s dreams one night each year, spoils from the colonies, the Crown’s protection of hidden places, something else).",

"1603: Titania visits Elizabeth shortly before the queen’s death. Elizabeth begs Titania not to leave England, but Titania has grown weary of mortal ambition and empire. After Titania departs, Elizabeth reportedly falls into a profound melancholy.",

"1830: During a visit to Malvern Hills, the young Princess Victoria briefly encounters Titania. The future queen is fascinated by her and asks endless questions before being hurried away by her attendants.",

"1861 (less than ten years ago): Queen Victoria traps Titania during a private audience at Buckingham Palace. Armed with generations of secret knowledge passed down through the Crown, Victoria severs Titania’s connection to Faerie and steals her power for herself. Titania escapes imprisonment, but not before being reduced to mortality.",

				]
			},
			{title: "Layer Three: A Threat Becomes a Servant",
				text:     [
					"This layer is unlocked after the fourth Threat is introduced. Anytime thereafter, you can choose an active Threat and narrate a scene showing how the Threat becomes a Servant of the Mastermind. Add them to the Servants section and tell the Hunters the Threat can no longer be resolved (nor is it active for game purposes, though it may still be a danger to the city). You can do this once.",
					"Note that Titania never recruits through force alone. Every Servant joins her because she gives them something London denied them: beauty, belonging, vengeance, purpose, romance, or simply the chance to matter.",

				]
			},
			{title: "Layer Four: The Assault on Hargrave House",
				text:     [
					"This layer is unlocked after the Hunters have successfully resolved three Threats and all boxes from Layer Two have been marked, or if the Hunters get a miss on an attempt to answer the Mastermind Question. Anytime thereafter, you may read the below text at the start of a Day Phase instead of doing the normal procedure; if you do, any countdowns on active Threats are suspended for a single Day/Night cycle, and The Assault on Hargrave House becomes the only active Threat until the end of the Night Phase.",

"<i>Hargrave House awakens to signs that something is terribly wrong. Flowers have been pushed beneath every door in the house. Chalk crowns mark the exterior walls. Strange music drifts faintly through the halls despite no musicians being present. Several servants refuse to meet your eyes. One swears she saw masked figures dancing in the garden at dawn.</i>",

"<i>By evening, the truth becomes clear: Titania’s court is coming. Not policemen. Not hired killers. Revelers. Thieves. Lovers. Desperate people wrapped in velvet and stolen lace, armed with knives, clubs, pistols, and torches. Some wear animal masks. Some carry flowers. Some are weeping openly. All of them believe they are fighting for a better world. Titania herself is not among them.</i>",

"<strong>Question: How can we defend Hargrave House from Titania’s Court? (Complexity: 6)</strong>",

"<i>Opportunity: Resolve the Threat by defending Hargrave House and capturing one of Titania’s inner circle. If successful, the captive reveals a Mastermind Clue in the form of vital information about Titania’s plan.</i>",

"Let the Hunters know that investigating this Threat means preparing defenses, uncovering how Titania’s followers intend to infiltrate the house, and exploiting weaknesses in the Court itself. The following Clues are available (and may be used more than once):",
"<li>A Servant secretly loyal to Hargrave House.</li>",
"<li>A hidden entrance the Court intends to use.</li>",
"<li>Evidence that one of Titania’s followers regrets joining her.</li>",
"<li>A cache of stolen weapons.</li>",
"<li>A Side Character volunteers to help defend the house.</li>",
"<li>A good place for an ambush.</li>",
"<li>A room the Court seems frightened to enter.</li>",
"<li>A collection of masks abandoned in haste.</li>",
"<li>A hidden signal used by Titania’s followers.</li>",
"<li>Evidence that someone inside Hargrave House has been corresponding with Titania.</li>",
"<li>A barricade prepared long ago for another siege.</li>",
"<li>An object of significance to Titania from before her fall.</li>",

"No matter the result of Answer a Question, Titania’s Court attacks Hargrave House during the Night Phase. On a 10+, the Opportunity can be pursued in a straightforward and decisive way; have the Hunters narrate their great success, and only trigger another move if part of their plan is particularly risky. On a 7-9, the ﬁght is much tougher, and should trigger more moves to be successful. On a miss (or if the Hunters are unable to attempt the Question at all), the Hunters will have to make a few tough Night Moves in order to survive, and some of their property is destroyed during the assault; each Hunter must erase an unmarked item from their Personal Quarters.",

"The players must then immediately attempt to answer the Mastermind Question (this will be the second attempt if Layer Four was originally unlocked by getting a miss on an attempt to answer the Mastermind Question). The Threat is considered resolved at the end of the Night Phase.",

				]
			},
			{title: "Layer Five: The Confrontation",
				text:     ["This layer is unlocked after the Hunters successfully answer the Mastermind Question, or The Assault on Hargrave House is resolved, whichever comes first. Follow the instructions on the associated Confrontation sheet."]
			},

		],
	},
	gesod: {
		title: "Gesod, High Imperator of Venus",
		questions: [{
			question: "How does Gesod intend to force the Crown into surrender without firing a single shot?",
			complexity: 8,
			layer: "Layer One: The Mastermind Question",
		},
	{
		layer: "Layer Five: The Confrontation",
		question: "[Keeper, replace this with your question!]",
		complexity: 6,
	}],
		layers:   [{
			title: "Layer One: The Mastermind Question",
			text: [
				"This layer is unlocked at the end of the first Night Phase. Immediately read the following:",

"<i>Before we move into the Dawn, I want to tell you about one more person doing dark work tonight. High above London, suspended silently within the storm clouds, hangs Resplendent. Even now its immense scarlet hull glows faintly against the night sky like a second moon. Searchlights from below crawl uselessly across its metal surface. Newspapers call it a marvel. Priests call it a sign. Parliament calls it an opportunity.</i>",

"<i>Inside the vessel, all is silent order. Great halls of green metal stretch impossibly far beneath vaulted ceilings lit by pale electrical flame. Strange machinery hums behind translucent walls. Tall Venusian attendants move soundlessly between chambers carrying silver trays laden with untouched food and crystal decanters filled with glowing liquid.</i>",

"<i>At the center of the vessel sits Gesod, High Imperator of Venus. He stands before an enormous viewing window overlooking London. Several members of the British aristocracy stand nearby in careful conversation with Venusian diplomats. One elderly lord nervously laughs while accepting a gift: a small mechanical device no larger than a pocketwatch. Across the room, another guest signs a document with visibly shaking hands. Nearby, a famous industrialist stares in open awe as a Venusian engineer demonstrates a machine capable of powering an entire city block without coal.</i>",

"<i>After a long silence, Gesod says, almost gently, “You will kneel gladly. Your species has always mistaken comfort for virtue.”</i>",

"<i>Hargrave House does not yet know it, but we do: Gesod intends to conquer first Britain, then the world. As players, we have our own Question to answer: How does Gesod intend to force the Crown into surrender without firing a single shot? (Complexity: 8). Hargrave House will immediately confront him once we’ve successfully answered it.</i>"
			]
		},
	{
		title: "Layer Two: Life After Contact",
		text: ["This layer is unlocked after the second Threat is introduced. You can now begin using The Venusian Unscenes."]
	},
	{title: "Layer Three: A Threat Becomes a Servant",
		text:   ["This layer is unlocked after the fourth Threat is introduced. Choose an active Threat and narrate a scene in which Lord Gesod publicly proclaims to have defeated the Threat. Later, narrate a scene showing how the Threat is still alive and now a Servant of the Mastermind. Note the Threat in the Servants section and tell the Hunters the Threat can no longer be resolved (it also ceases to be “active” for purposes of presenting new Threats, though it is still a danger in London). You can do this once."]
	},
	{title: "Layer Four: The Pacification Beast",
		text:   ["This layer is unlocked after the Hunters have successfully resolved three Threats and all the Venusian Unscenes are complete, or if the Hunters get a miss on an attempt to answer the Mastermind Question. Anytime thereafter, you may do Struggle: The Pacification Beast. The Struggle happens outside the normal phase structure. After the Struggle is complete, the players must immediately attempt to answer the Mastermind Question (this will be the second attempt if Layer Four was originally unlocked by getting a miss on an attempt to answer the Mastermind Question). This event is considered resolved after the end of the Struggle and the Mastermind Question is attempted; immediately go to the Dawn Phase."]
	},
	{title: "Layer Five: The Confrontation",
		text:   ["This layer is unlocked after the Hunters successfully answer the Mastermind Question, or Struggle: The Pacification Beast is resolved, whichever comes first. Follow the instructions on the associated Confrontation sheet."]
	},
],
	},
	wellingtonHughes: {
		title: "The Wellington-Hughes Family",
		questions: [{
			question: "How does the Mastermind intend to destroy the Crown?",
			complexity: 8,
			layer: "Layer One: The Mastermind Question",
		},
	{
		layer: "Layer Four: The Whereabouts of the Wellington-Hughes",
		question: "Where is Loren's charity ball going to be held?",
		complexity: 2,
		opportunity: "Find the ball and confront Loren."
	},
	{
		layer: "Layer Four: The Whereabouts of the Wellington-Hughes",
		question: "Where are Solomon and the crime lords meeting?",
		complexity: 2,
		opportunity: "Find the meeting and confront Solomon."
	},
	{
		layer: "Layer Four: The Whereabouts of the Wellington-Hughes",
		question: "Where will the entrance to the sanctuary appear next?",
		complexity: 2,
		opportunity: "Find it before Exodus does."
	},
	{
		layer: "Layer Five: The Confrontation",
		question: "[Keeper, replace this with your question!]",
		complexity: 6,
	}],
		layers:   [  
			{ title: "Layer One: The Mastermind Question", text: [
			"This layer is unlocked at the end of the first Night Phase. Immediately read the following:",

"<i>You are not the only hunters scouring the night. There are others who spend this evening scheming and stalking the city in search of inhuman quarry, each in their own way. One uses her grace and charm to entertain the London elite at a lavish dinner party; another hobnobs at a pub, regaling drunken patrons with his “preposterous” hunting stories; a third skulks from the rooftops, knives drawn and his eye fixed on unnatural prey. Elsewhere, there is Sir Alexander III. </i>",

"<i>The patriarch of the family has retired to their estate in the countryside: Whitehart Abbey, a manor-fortress built on the bones of an old monastery. We find him examining a wall-sized map of London tacked with notes of various ongoing hunts—with a large, ivory-headed pin placed straight through Buckingham Palace. The youngest of the Wellington-Hughes clan enters and presents his father with a dossier. As Sir Alexander searches the contents for something useful, we pull back to see the full splendor of the Wellington-Hughes’ trophy room—a vault so grand, so overstuffed with tokens of their conquests that it makes the trophy room at Hargrave House seem like a quaint display of tchotchkes by comparison. </i>",

"<strong>Keeper Tip:</strong> When playing out the scene of Sir Alexander III reading the dossier, use this as an opportunity to tease the next Threat—if it is supernatural in nature, they will want to hunt it for themselves; however, a more mundane Threat can provide useful diversions to Hargrave House while the Wellington-Hughes do the real work.",

"<i>Hargrave House knows that the Wellington-Hughes are hunters like them, but they are not aware of the family’s larger schemes against Her Majesty and Hargrave House itself. However, we as players are privy to them, and we have a Mastermind Question to answer: How does the Mastermind intend to destroy the Crown? (Complexity: 8). Hargrave House will immediately confront the family once we’ve answered it.</i>"
		] },
		{ title: "Layer Two: The History of the Wellington-Hughes Family", text: ["This layer is unlocked after the second Threat is introduced. You now have a new Keeper reaction: Reveal History. Whenever you do it, mark a box below and reveal the information in whatever way makes sense in the scene.",
			"Additionally, the following Keeper Reaction is unlocked: <strong>Poached by the Wellington-Hughes.</strong> As a complication to a miss or 7-9 when Answering a Question that resolves a Threat, the Wellington-Hughes family may take it upon themselves to resolve the Threat themselves. If a Threat is poached, it ceases to be active and cannot be pursued any further. Hunters may still reward each other at the end of the Night Phase with mementos from the Threat to add to their Personal Quarters (this is separate from the formal Rewards for that Threat), but it is not considered resolved when answering Dawn Questions, and Threat Rewards are not distributed. At the end of the session in which this Reaction takes place, narrate a scene in which a member of the Wellington-Hughes family resolves the Threat and is thanked by a Side Character. "
		],
	checkList: [
		"1795: Sir Alexander Wellington-Hughes I and his family leave the comfort of England shortly after his noble appointment—a gift from the Crown for his distinguished military service. Dissatisfied with the hollow pageantry of high society, he returns to Africa to hunt more dignified game, and is intrigued by Zulu folk stories regarding a mythological water spirit called the Inkanyamba. He eventually manages to trap and kill it, and though he angers local tribes in doing so, Sir Alexander I is unconcerned and continues scouring the continent for more legendary creatures to hunt. ",	
		"1805: What began as little more than sport for Sir Alexander I has matured into a heroic calling over the last decade. As part of his oath to preserve mankind, he forges a cutlass he christens as “the Burden,” a symbol of his steel-strong devotion to the hunt. His son, Alexander II, inherits the blade not long after its completion, when his father is gravely wounded by a vicious Fae—a creature that would plague their family for decades to come. ",
		"1820: Alexander II finally tracks down the Fae creature to Ireland, where it has been abducting young boys all across the island. He successfully baits the creature—dubbed “Tommy Rawhead” by locals—using his adolescent son, Alexander III, but the creature proves more formidable than anticipated. Alexander II is slain, much like his father before him. Alexander III wastes no time taking up the Burden in pursuit of Rawhead, wielding it with even more righteous fervor than his father. ",
		"1849: Alexander III and his growing family travel to the Republic of Texas after receiving word that a creature has been stealing children in a manner similar to the Tommy Rawhead disappearances in Ireland. While Alexander III is away, Rawhead ambushes the rest of the family. It slaughters Alexander III’s wife, Margery, and leaves Exodus half-blind before stealing away the eldest son, Alexander IV. Alexander III is unable to rescue his son and all traces of the Fae eventually go cold. Despondent but unbroken, the rest of the family returns to England after decades away. Alexander III is granted an audience with Her Majesty to plead for the Crown’s support in dealing with “night creatures” and the danger they pose to the world. His claims are dismissed as eccentric ravings and his request is denied, which only further incenses the family. ",
		"Six months prior: Tommy Rawhead is successfully tracked to Crumpshall Workhouse in Manchester, where it has been snatching orphans and menacing the unfortunate labourers who reside there. Before the family can close in on Rawhead, it is intercepted by Hargrave House. The family learns that instead of slaying the creature, Hargrave House sent it to the Australian penal colonies at the behest of Queen Victoria for reasons unknown. Though Her Majesty bestows a title onto Alexander III in an attempt to assuage him, the Wellington-Hughes swear vengeance upon both the Queen and Hargrave House for robbing them of their quarry. ",
	] },
		{ title: "Layer Three: A Threat Becomes a Servant", text: ["This layer is unlocked after the fourth Threat is introduced. Anytime thereafter, you can choose an active Threat and narrate a scene showing how the Threat becomes a Servant of the Mastermind. Narrate an end of session scene in which a Danger or the Threat itself falls prey to a trap set by the Wellington-Hughes family. Describe the nature of the trap, and narrate a scene in which a Side Character from the Threat thanks the Wellington-Hughes for doing what Hargrave House was clearly incapable of. The Threat is now a Servant of the Wellington-Hughes family—add them to the Family section of the Conspiracy sheet. Tell the Hunters the Threat can no longer be resolved (nor is it active for game purposes, though it may still be a danger to the city). You can do this once."] },
		{ title: "Layer Four: The Whereabouts of the Wellington-Hughes", text: [
			"This layer is unlocked after the Hunters have successfully resolved three Threats and all boxes from Layer Two have been marked, or if the Hunters get a miss on an attempt to answer the Mastermind Question. Anytime thereafter, you may read the below text at the start of a Day Phase instead of doing the normal procedure; if you do, any countdowns on active Threats are suspended for a single Day/Night cycle, and The Whereabouts of the Wellington-Hughes is now the only active Threat, and it lasts until the end of the Night Phase.",

"<i>The Wellington-Hughes family have kept their distance as of late, and though it has allowed Hargrave House to investigate uninterrupted, their absence has been noticeably suspicious. Over the last few days, bits of information have drifted your way that hints at their plans, all of which are scheduled to converge this very evening. Many of the city’s well-to-do types are giddy over Loren’s charity ball, the venue of which is a secret; moles in London’s criminal underground tell of a meeting taking place between Solomon and the city’s most powerful crime lords; and a sanctuary for homeless house spirits and familiars is the latest target of Exodus’s wrath. The time to confront them is now before they can retreat again.</i>",

"<strong>Question: Where is Loren’s charity ball going to be held? (Complexity: 2)</strong>",
"<i>Opportunity: Find the ball and confront Loren. </i>",

"<strong>Question:Where are Solomon and the crime lords meeting? (Complexity: 2)</strong>",
"<i>Opportunity: Find the meeting and confront Solomon. </i>",

"<strong>Question: Where will the entrance to the sanctuary appear next? (Complexity: 2)</strong>",
"<i>Opportunity: Find it before Exodus does. </i>",

"Let the Hunters know that all three Questions must be answered by the end of the Dusk Phase. When they make successful Information Moves, let them come up with a Clue from something in the scene—the Clue should not conclusively answer any of the Questions. Let them know that Clues for investigating can be any of the following: ",

"<li>A password.</li>",
"<li>A specific time.</li>",
"<li>Pilfered invitations.</li>",
"<li>Annotated maps of London.</li>",
"<li>A Side Character volunteers to help you. </li>",
"<li>Overheard gossip from a Side Character. </li>",	
"<li>A particular sensory note (pick one: the scent of aged brandy, the sound of men arguing over money, the taste of salty sea air, something else). </li>",
"<li>A Danger from a previous Threat agrees to help you in exchange for their protection from the Wellington-Hughes family. </li>",

"Additionally, Hunters may also use any unmarked Personal Quarters items of theirs as Clues to answering these Questions; if they do so, they must be marked if the answer to the Question is correct. ","At the start of the Night Phase, introduce the Unscene: <strong>THE CONFLAGRATION OF LONDON</strong> (activating this layer adds it to the Unscenes section of the app).", 

"During the Night Phase, each Hunter must resolve the previous Questions; when they do, be sure to note how the fire has not spared the scenes. If Answer a Question was 10+,  the Hunters can pursue the Opportunities in a straightforward and decisive way—the family member may even help them combat the fire to save lives; have the Hunters narrate their great success, and only trigger another move if part of their resolution is particularly risky. On a 7-9, the resolutions should be more dangerous—with raging fires and aggressive family members—and trigger more moves to be successful. On a miss, the Hunters will not be able to pursue the Opportunities and will have to make tough Night Moves in order to spare themselves and Hargrave House from the fire. No matter the outcome, players must then immediately attempt to answer the Mastermind Question (this will be the second attempt if Layer Four was originally unlocked by getting a miss on an attempt to answer the Mastermind Question). The Threat is considered resolved at the end of the Night Phase. ",

"At the end of the session, narrate a brief stinger scene in which Sir Alexander III is confronted by his children, shocked by his decision, and his cold indifference towards their concern—as well as his doubt in their commitment to the hunt. ",

		] },
		{ title: "Layer Five: The Confrontation", text: ["This layer is unlocked after the Hunters successfully answer the Mastermind Question, or The Whereabouts of the Wellington-Hughes is resolved, whichever comes first. Follow the instructions on the associated Confrontation sheet."] }
		],
	},
	queenOfHearts: {
		title: "The Queen of Hearts",
		questions: [{
			question: "How does the Queen of Hearts intend to alter the royal line of succession?",
			complexity: 8,
			layer: "Layer One: The Mastermind Question",
		},
	{
		layer: "Layer Five: The Confrontation",
		question: "[Keeper, replace this with your question!]",
		complexity: 6,
	}],
	layers: [
		{
			title: "Layer One: The Mastermind Question",
			text: [
				"This layer is unlocked at the end of the first Night Phase. Immediately read the following:",
				"Before we move into the Dawn, I want to tell you about one more person doing dark work tonight. A grand ballroom stretches endlessly beneath a crimson sky. Chandeliers hang from nothing at all. Hundreds of dancers move in perfect silence through the hall: noblewomen in pearl-white gowns, soldiers with ribbons pinned to their uniforms, widows in black lace, debutantes with flushed cheeks and hungry eyes. Every face is beautiful. Every smile is exhausted.",	
				"Beyond the ballroom windows lies no London any of you recognize. The city outside has softened into dream: silver rivers winding through gardens of ivory roses, cathedral spires tangled in thorn-vines, palace rooftops drowned beneath moonlit fog. Somewhere far below, church bells ring underwater.",
				"At the center of the ballroom sits the Queen of Hearts.Her gown spills across the marble steps beneath her throne like fresh blood. Jewels glitter at her throat, unable to conceal the thin execution scar circling her neck. Around her lounge pale courtiers in powdered wigs and half-buttoned uniforms. Servants drift silently through the crowd carrying silver platters laden with sugared fruits, oysters, and still-beating animal hearts.",
				"A young man kneels trembling before the Queen. Though dressed in royal clothing, he wears no crown. His face shifts subtly each time you look at him: now Crown Prince Edward, now a younger version of King Henry VIII, now a frightened little boy standing alone in an enormous palace corridor.",
				"The Queen lifts his chin gently. “You were born into the wrong story,” she whispers. Behind her, an immense mirror reflects not the ballroom, but Buckingham Palace draped in black mourning cloth.",
				"Hargrave House does not yet know it, but we do: the Queen of Hearts intends to reshape the future of the British Crown. As players, we have our own Question to answer: How does the Queen of Hearts intend to alter the royal line of succession? (Complexity: 8). Hargrave House will immediately confront her once we’ve successfully answered it.",
				"In addition to the above, Unscenes can be Reverie Unscenes during a London Night Phase (see: Reverie Unscenes in the Unscene tab). "
			],
		},
		{ title: "Layer Two: The History of Mary I", text: ["This layer is unlocked after the second Threat is introduced. You now have a new Keeper reaction: Reveal History. Whenever you do it, mark a box below and reveal the information in whatever way makes sense in the scene."], checkList: [
			"1515: King Henry threatens to strip his queen consort of her titles or worse if she fails to bear him a living boy. Catherine, through blood magic, finally births a healthy child: a vile cherub, pale as death, with eyes welling with blood and a wolfish grin. Thus the Queen of Hearts, Mary I, is born. ",

"1516-1547: Mary is raised in captivity, with only her dreams to provide sanctuary. She is used as a political pawn, with her maidenhood offered to the highest bidder. Her father marries her off to a succession of foreign princes, but each man winds up exsanguinated. ",

"1553: Mary takes the crown for herself. Her reign is soaked in blood as she persecutes her enemies and satisfies her dark desires. Mary is a physical manifestation of her father’s domestic monstrosity. ",

"1558: Mary’s rule is unpopular and her half-sister Elizabeth I, the Virgin Queen, declares that the cure for her apparent vampirism would be for Mary to be “off with her head.” Elizabeth captures Mary and executes her. ",

"Present: Mary lurks in the public mind. Children sing “Mary, Mary quite contrary” in the workhouses. Field nurses curse “Bloody Mary” at the sight of gushing wounds. Mary did not pass through the Blood-Soaked Portal at her execution: she escaped into her dreams, where she reigns supreme." 
		] },
		{ title: "Layer Three: A Threat Becomes a Servant",
			text: ["This layer is unlocked after the fourth Threat is introduced.  Anytime thereafter, you can narrate a scene showing the Queen of Hearts breaking through the veil between worlds. She chooses an active Threat to become her champion, the Knave of Hearts. This Threat is now a Servant of the Mastermind. Note the Threat in the Servants section and tell the Hunters the Threat can no longer be resolved (it also ceases to be “active” for purposes of presenting new Threats, though it is still a danger in London). "],
			addServant:true
		},
		{ title: "Layer Four: Reverend Haresby’s Tea Party",
			text: [
				"This Layer is unlocked after the Hunters have successfully resolved three Threats and all boxes from Layer Two have been marked, or if the Hunters get a miss on an attempt to answer the Mastermind Question. Anytime thereafter, you may do Struggle: Reverend Haresby’s Tea Party. The Struggle happens outside the normal phase structure. After the Struggle is complete, the players must immediately attempt to answer the Mastermind Question (this will be the second attempt if Layer Four was originally unlocked by getting a miss on an attempt to answer the Mastermind Question). This event is considered resolved after the end of the Struggle and the Mastermind Question is attempted; immediately go to the Dawn Phase."
],
		},
		{ title: "Layer Five: The Confrontation",
			text: ["This layer is unlocked after the Hunters successfully answer the Mastermind Question, or Struggle: Reverend Haresby’s Tea Party is resolved, whichever comes first. Follow the instructions on the associated Confrontation sheet. "],
		}
	],
	}
} as const;

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
		servants: [
			{title: "Mr. Higgins, an enforcer",
				description:         ["Tweed suit. Pale, oily flesh. Only speaks in questions. Mr. Higgins is Mrs. Brathwaite’s man in London. He’s a cobbler, and spends most of his days at his shop, but when Mrs. Brathwaite needs some night work done, he can be found creeping around in dark alleys, conferring with police and prostitutes alike to find whatever—or whoever—she needs. He’s a crack shot with a pistol and maintains a loose confederation of bullies and cat’s paws in case violence is the remedy called for."],
				quotes: ["Are you going to continue being a thorn in my employer’s side? Do you know what happens to people who cross her? What if I told you I happen when people cross her? Do you suppose I have a gun in my coat? Would you guess I’m a very good shot?"],
			},
						{title: "The Black Laces, a gang",
				description:         ["A loosely-organized gang of thugs and killers in the employ of Mr. Higgins. They mostly hang around his shop, waiting for orders (and annoying the living hell out of him). Some names, if you need them: Stomper, Shins, Stitcher, Welly, Kicks, Spike, Heels. "],
				quotes: [],
			},
						{title: "D.I. Fairweather, a corrupt official",
				description:         ["Clean-shaven. Fastidiously-groomed, and dressed a bit too nice for someone living on a public servant’s pay. Always licking his lips. Detective Inspector Miles Fairweather is Mrs. Brathwaite’s man inside Scotland Yard. He loves fine things, and Mrs. Brathwaite keeps him in all the silk cravats and jeweled cufflinks he could possibly want in exchange for unerringly doing her bidding. Scotland Yard is always a nuisance to Hargrave House, but D.I. Fairweather has the power to make the Hunters’ lives miserable. "],
				quotes: ["Last night, we dragged a body out of the river. Helpfully, there were dozens of witnesses who saw what happened, and each of them—to a person—described seeing someone on the scene who fits your description exactly."],
			},
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
			}
		],
	},
} as const;

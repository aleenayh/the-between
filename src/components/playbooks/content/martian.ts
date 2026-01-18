import type { PlaybookBase } from "../types"

export const martianPlaybook: PlaybookBase = {
  title: "The Martian",
  intro: [
    "You are a Martian royal. The Venusians invaded your home planet when you were an infant, slaughtering your people and eradicating the ancient and proud Martian civilization. During the attack, your royal parents—with you bundled in their arms—fled to the Cinnabar Temple of U-Dur-Bar. There, the Cinnabar priests imprinted the Five Vaults of Tarthor—all the secret arts and priceless treasures of the Martian people—into your subconscious. You were then placed in a space capsule that piloted itself to Earth.",

"But you aren’t aware of any of that… yet. A young couple in the English countryside found you, raised you, and saw to your education. Until recently, you had a respectable job as a (pick one: solicitor, accountant, banker, something else). That changed when you discovered something strange about your body—something entirely unnatural—and, at the urging of a friend, sought shelter at Hargrave House. The people there agreed to help you figure out who or what you are, and in the meantime, you’ll help them with the dark and dangerous work they do."
  ],
  names: { firstName: [
    "Oswald", "Matthew", "Christopher", "Edmund", "Michael", "Iakobos", "Gopi", "Nikolai", "Hugh", "Maddox", "Edith", "Lauren", "Helen", "Jean", "Agnes", "Erfanieh", "Beth", "Manon", "Melenaida", "Kira"
  ], surname: [
    "Thomson", "Sutherland", "Griffiths", "Kingsbury", "Wolcott", "Churchyard", "Persson", "Walsh", "Palani", "Santos", "Tinka", "Sako", "Brown", "Hall", "March", "Aprenos", "Essex"
  ], martianName: [
    "Korlak", "Axatos", "Ban-Thas", "Nator", "Naxatar", "Corithax", "Anatos", "Zantos", "Uthavas", "Uthorkal", "Dotanda", "Thavia", "Zithia", "Em-Thia", "U-Tija", "Ptar", "Rabis", "Ulsis", "Sojas", "Tor-Dus"
  ] },
  look: [
    "a faded boater hat", "a hand-me-down bonnet with a burgundy ribbon", "slightly out-of-trim hair", "silver-rimmed pince-nez", "“one of those faces,”", "a perfectly smooth face", "moss-colored trousers", "maroon waistcoat", "mustard yellow cravat", "plain white blouse", "navy skirt and petticoats", "a walking stick with an unrecognizable animal", "a lapel pin with an indiscernible quadruped", "a necklace with a dusty red stone", "brown boots for “any occasion,”", "worn black riding boots", "brandy leather Chelsea boots"
  ],
  vices: ["ginger beer", "Whist", "the morning paper", "letters from home", "helping people"],
  questions: [
    "Did you go on and on about your bucolic life back home?",
    "Did you charmingly embarrass yourself in front of a potential love interest?",
    "Did you demonstrate extreme naivete when faced with the horrors of London?",
    "Did you quietly but visibly defer to the wishes of another Hunter despite your misgivings?",
    "Did you stick up for yourself while being bullied by another Hunter?",
  ],
  abilities: {
    vitality: 1,
    composure: 1,
    reason: 1,
    presence: -1,
    sensitivity: 0,
  },
  masksOfPast: [
    "Narrate a flashback to your childhood when your Earthly parents discovered your Martian tell. What did they do to protect you? Then, choose your Martian name. ",
    "Narrate a flashback to your youth showing how children treated you cruelly because you were different. Did you stick up for yourself? Then, discover the Vault of the Four Limbs. ",
    "Narrate a flashback to a time you had your heart broken. How did your Earthly parents console you?  ",
    "You have a recurring dream of Mars that started when you were a child. Paint the Scene: How do we know Mars is a civilization steeped in ancient esoteric traditions? Then, gain a Key to the Five Vaults of Tarthor. ",
    "Narrate a flashback to a time when you stood up for what was right, despite the consequences. Then, discover the Vault of Eternal Champion Uthavia. ",
    "Narrate a flashback to your adulthood when you became newly-aware of your Martian tell. ",
    "You have a recurring dream of the Cinnabar Temple of U-Dur-Bar that started just months ago. <strong>Paint the Scene:</strong> How do we know the Cinnabar Temple is the last remaining evidence of, and a memorial to, Martian civilization? Then, gain access to the Vault of the Cinnabar Temple. ",
  ],
  masksOfFutureDescription: "If no boxes are marked, you physically travel to the Cinnabar Temple of U-Dur-Bar, where you shall remain. Narrate a montage of scenes showing how you are no longer involved in the affairs of Earth. Then, retire this character. Otherwise, mark any box you wish.",
  masksOfFuture:   [
    "<strong>The Gilded Door</strong>: You can always mark the Gilded Door. When you do so, discover the Vault of the Martian Royals. If the Vault is already discovered, increase your Presence by 1 and lower your Vitality by 1.",
    "<strong>The Moss-Covered Gate</strong>: Narrate a scene in which you receive a letter from your Earthly parents urging you to return home. What does the letter say? Then take the Condition <strong>Homesick</strong> or <strong>Stoic</strong>, your choice, and gain a Key to the Five Vaults of Tarthor.",
    "<strong>The Darkened Threshold</strong>: Tell the Keeper to introduce Gesod, High Imperator of Venus as the new Mastermind. Any previously active Mastermind is now a Servant of Gesod. If Gesod is already the Mastermind, immediately gain a Mastermind Clue associated with you, personally; tell the Keeper what it is.",
    "<strong>The Cosmic Passage</strong>: Discover the Vault of the Cosmic Mind. If the Vault is already discovered, increase your Sensitivity by 1 (max 3).",
    "<strong>The Blood-Soaked Portal</strong>: You leave Hargrave House to become the Guardian of Britannia. Narrate a montage of scenes in which you use the Five Vaults of Tarthor to expand the British empire, put down insurrection, and create a new, supercharged Pax Britannica. This character is now retired.",
  ],
  startingMoves: ["An Open Book", "Martian Tell", "Vulnerability", "The Five Vaults of Tarthor"],
  moves: [
    {title: "An Open Book",
        text: ["You have very few secrets, and absolutely none from Hargrave House. You are not subject to the normal restrictions on speaking about your past. You can speak openly and unprompted with any character regarding your childhood and your Earthly parents. Elements of your Martian heritage should remain a secret to people outside Hargrave House, but can be spoken of openly and unprompted within Hargrave House. If Gesod, High Imperator of Venus is the Mastermind, you can speak of your Martian heritage openly and unprompted with any character."]
    },
    {title: "Martian Tell",
        text: ["You have a physical tell of your Martian heritage that recently reappeared. The tell can be hidden fairly easily, and only your Earthly parents were previously aware of it. The tell is (pick one: a glowing sigil in your chest, eyes that burn red in the dark, skin that shimmers in direct sunlight, something else)."]
    },
    {title: "Vulnerability",
        text:         [
          "You are highly vulnerable to a particular element (pick one: gold, corundum, solid iodine, something else). Take the Condition Drained if you come into physical contact with the element. If you are already Drained, take the Condition Catatonic.",
        ]
    },
    {title: "The Five Vaults of Tarthor",
        text: ["The Five Vaults of Tarthor represent the secret arts and priceless treasures of the Martians. You will gain access to these Vaults as you learn more about your Martian heritage. You need Keys to use the arts and treasures within the Vaults. Each Dawn phase, assign your Keys to the Vaults you have access to. At the start of the game, you have 1 Key and no access to the Vaults."]
    }
  ],
  advancements: [
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Gain a Key to the Five Vaults of Tarthor.", 
    "Gain a Key to the Five Vaults of Tarthor.", 
    "Unmark a box from the Mask of the Future.",
    "Unmark everything in your Personal Quarters.", 
  ],
}

export const vaults = [
    {key: "cosmicMind",
        title: "The Vault of the Cosmic Mind",
        description: "Your mind becomes attuned to the cosmic realm, your consciousness ever-expanding. ",
        effects: ["Add 1 to die rolls using Reason.", "Add 1 to die rolls using Sensitivity.", "Discover 1 extra Clue on the Information Move, even on a miss. ", "You know the exact location of all named Side Characters, Dangers, and Servants.",
            "You can communicate with other Hunters telepathically, over any distance."
        ],
    },
    {key: "fourLimbs",
        title: "The Vault of the Four Limbs",
        description: "You can call forth the sacred weapons of the Martians, which hover around you and strike without needing to be held. If a weapon you have summoned would be helpful in an action, take advantage on any rolls associated with that action.",
        effects: ["The Sword of Thantis, which calls lightning from the sky. How does the atmosphere change in the sword’s presence?", "The Shield of Corithor, which unerringly blocks a single doorway or passage. How does the building or location change while the shield is defending it? ", "The Hammer of Gantos, which can smash any object. What does it feel like to touch something so powerful? ", "The Javelin of Xaxatar, which screams through the sky. How does reality shudder when the javelin hits its mark? "],
    },
    {key: "uthavia",
        title: "The Vault of Eternal Champion Uthavia",
        description: "The blessings of Uthavia, Greatest of Martian Warriors, are upon you. ",
        effects: [
            "You are as fast as a steam train.",
            "Your skin cannot be damaged or pierced. ",
            "You are as strong as ten men. ",
            "You can fly short distances.  ",
            "Your breath is like gale force winds. ",
        ],
    },
    {key: "royals",
        title: "The Vault of the Martian Royals",
        description: "You can call forth your Martian family’s priceless treasures; take the appropriate Condition each time you do so. If you already have the Condition, ask the Keeper how it is made worse and then adjust it accordingly. If a treasure would help you with an action, you take double advantage on any die rolls associated with that action (roll four dice and keep the two highest).",
        effects: [
            "The Diadem of Queen Bantia, which demands obedience from all. How do you know you are superior to these people? Take the Condition Imperious. ",
            "The Scepter of King Tor, which enforces the law. How will you make these scoundrels pay? Take the Condition Merciless. ",
            "The Litter-Bearers of Prince Vor-Dak, who obey without question. What do these creatures look like? How are you casually cruel to them? Take the Condition “All Will Kneel!” ",
            "The Cowl of Duke Thavan, which was used to overthrow the Old King. How does the cowl hide your movements or intentions? Take the Condition Duplicitous. ",
        ],
    },
    {key: "cinnabarTemple",
        title: "The Vault of the Cinnabar Temple",
        description: "You can project your consciousness into the Cinnabar Temple of U-Dur-Bar, the last vestige of Martian civilization, floating somewhere in the cosmos, overlooking all.",
        effects: [
            "You can momentarily project your consciousness into the Cinnabar Temple in order to avoid an emotional or psychological Condition. ",
            "You can trap the consciousness of a single Side Character, Danger, or Servant inside a prison cell in the Cinnabar Temple. ",
            "When you discover any Clue, tell the Keeper what it is. The Clue cannot conclusively answer a Question by itself. ",
        ],
    }
]
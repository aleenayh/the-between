import type { PlaybookBase, PlaybookMove } from "../types"

export const apertureDefs: PlaybookMove[] = [
    { title: "The Aperture of the Azure Haze",
    text:     ["The dreamscape flowers in the waking world, ever entangling with details in the environment. When you answer a Paint the Scene prompt, you may do so in a manner that echoes something from the Dream. Whatever you describe may be visible to the other Hunters or only to you, Keeper’s choice. If you have marked The Cosmic Passage, you also have a new Dawn Question that is always marked: “Did you describe the dreamscape encroaching on the real world when answering a Paint the Scene prompt?” "],
    },
        { title: "The Aperture of the Tea Pot",
    text:     [
        "Whenever you encounter a Side Character, you may ask “Have we met before?” and roll with Sensitivity. On a hit, they will remove their mask so you may glimpse their true form, which may or may not be real; the Keeper will tell you how they appear to you. The Side Character will offer to provide guidance in the form of a Clue so long as you perform a favor for them. If you accept, they will explain what they want you to do; the nature of the favor depends on the Janus Mask, as detailed below; if there are multiple marks on the Mask of the Future, the Keeper decides which one applies. On a 10+, as above, but they will ask for no favor in return. On a 12+, they also give you something from the world where they come from; describe it and add it to your Personal Quarters.", 

"<strong>No marks on the Mask of the Future:</strong> The favor is without obvious significance.",
"<strong>If all aspects of the Mask of the Past are marked:</strong> The favor will involve someone or something from your past.",
"<strong>The Gilded Door:</strong> The favor will involve someone of influence.",
"<strong>The Moss-Covered Gate:</strong> The favor will involve a dangerous game.",
"<strong>The Cosmic Passage:</strong> The favor will involve an object of power.",
"<strong>The Darkened Passage:</strong> The favor will hasten a dark future for all of London.",
    ],
    checkboxes: 0,
    extraLines: 0,
    },
        { title: "The Aperture of the Pocket Watch",
    text:     ["You have a weathered pocket watch, tethered to a lucky white rabbit’s foot. It’s stuck at 6 o’clock. Add it to your Personal Quarters. While it is there, and so long as this Aperture is unlocked, whenever you make a roll the outcome of which ends in your death, you may reroll your lowest die and mark a box below, ticking the hour hand forward. If you live, you will wake in an unknown Location (Keeper’s choice), gasping for air; whatever unfortunate demise you experienced was all a dream. You can put on the Janus Mask if a re-rolled die still ends in an unwelcome result. When all hours on the pocket watch are marked, your time is up, and you must immediately mark The Blood-Soaked Portal. The hours on the pocket watch cannot be unmarked."],
    checkboxes: 6,
    },
        { title: "The Aperture of the Knowing Grin",
    text:     ["You have a Guide, who helps lead you through the flux of dreamscapes, someone who is honest with you—for good or for ill. The Guide will always appear as (pick one):",
        "<li>A mysterious cat with a disembodied smile, in whose silhouette floats a dozen galaxies. You call it by presenting dead prey on a threshold. It desires to devour you.</li>", 
"<li>A handsome, muscular faun. His hooves are razor sharp and his fur glistens. You call him by breathing in the scents of your body. He desires to make love to you.</li>",
"<li>A boy made of frost who seems to have drowned. You call him by exposing yourself to the cold. He has adopted you as his mother, but desires to find his real family.</li>",
"<li>Your first psychologist, who was kind to you and wore fresh blossoms in her bonnet. You call her by visiting her grave. She desires to see you live a normal life.</li>",
"<li>A fairy godmother, billowing with a wide wisteria-blue cloak and swishing a willow switch to emphasize her declarations. You call her by praying in abandoned places of worship. She desires to instill in you a moral education.</li>",
"<li>Your now-deceased sister who cannot forgive you for what you did to her. You do not need to call her; she is always there, at the edge of your vision, waiting. She desires to wear your body as her own.</li>",
"<li>Something else</li>",
"When you call the Guide, they will offer to bring you to a Location that will give insight regarding an active Threat. You add 1 to any rolls taken while in that Location. If the Cosmic Passage is marked, the place is difficult or impossible for a human to access (atop the the Great Clock of Westminster, up in the clouds, inside a thief’s pocket, peering through a Threat’s eyes like a pair of bay windows, etc.). When you take an advancement, instead of picking something from the advancement list, you can cease believing in the Guide or help it to fulfill its desire in a satisfactory manner, after which you may choose a new Guide. "
    ],
    },
        { title: "The Aperture of the White Lily’s Petals",
    text:     [
        "You have strange and wonderful appetites. To others, your palate is often bewildering, but you have your reasons. When you eat an uncooked flower, you may speak to others of its kind, at least while the residue lasts on your tongue. After you eat a raw animal, you may communicate with others that are similar, while the sinew remains between your teeth. Even objects, like buttons, can be consumed.",

"When you eat something raw, and while you can still taste it, you may ask another of its kind two questions from the following list; the Keeper will respond in the form of a Clue. Then, choose a Complication.",

"<strong>Questions:</strong>",
"<li>How can I find my way home?</li>",
"<li>Would you like to be my friend?</li>",
"<li>What do you dream of becoming?</li>",
"<li>Would you like to join me for tea?</li>",
"<li>What rule must I follow here in order to stay safe?</li>",

"<strong>Complications:</strong>",
"<li>Take an appropriate Condition, Keeper’s choice: Upset Belly, Unmoored, Nauseous, Misgivings, Hooked, Fever Dream, Hospitalized, or Something Else.</li>",
"<li>You draw immediate and unwanted attention.</li>",
"<li>The entity, and others of its kind, will develop an unhealthy interest in you.</li>",
"<li>You must give the entity an item from your Personal Quarters.</li>",
    ],
    },
        { title: "The Aperture of the Jabberwocky’s Maw",
    text:     [
        "The Hunters have a new Question & Opportunity", 

"<strong>Question:</strong> Why must we beware the Jabberwocky? (Complexity: 4)", 
"<strong>Opportunity:</strong> Tell the Keeper to read Struggle: The Jabberwocky",

'Only Clues gathered during the Vulnerable Move can be applied to this Question; so long as all Hunters in the Vulnerable Move scene agree, note the Clue below:'
    ],
    extraLines: 6,
    },
]

export const undergroundPlaybook: PlaybookBase = {
  title: "The Underground",
  intro: [
    "You were born buried alive; buried in the obligations of a lady of privilege: etiquette, engagements, embroidery; but also buried in the treatments of a girl deemed “mad:” physical restraints, and medications injected through far heavier needlework. However, you are not merely burdened by the privilege or the procedures of your past. What threatens to suffocate you now is a dreamlike “underworld” that vies for your attention— it is the reason you were institutionalized in the first place. You are able to glimpse beyond the facades of reality. Your gaze pierces the forced smiles of your suitors; it peels away the sugar-coated tongues of the governesses; and now that you are involved in the grim work at Hargrave House, your perception penetrates even the fearless masks of your fellow Hunters. This underworld you behold is a representation of the dreamscape of London, its psychic underground; and you, poor girl, are its undertaker."
  ],
  names: { firstName: [
    "Adelaide", "Jura", "Roseline", "Maud", "Violet", "Julia", "Gertrude", "Ernesta", "Ethel", "Irène", "Iwa", "Yvette", "Charlotte", "Lily", "Anne-Marie", "Lori", "Durga", "Euphemia", "Polly", "Winsome", "Bella"
  ], surname: [
    "Applecross", "Pussett", "Bosworth", "du Chevalier", "Lefebvre", "Dahle", "Kuma", "Yen Soo", "DeWolf", "Henlere", "Hyacinth", "Greenwood", "Windle", "Goodwin", "Fields", "Lancaster", "Smythe", "Manako", "Sodhi", "Belle"
  ] },
  look: [
    "a thin circlet crown crafted from a metal not known to man", "a wellington top hat made finely with beaver and silk", "straw canotier with periwinkle grosgrain ribbon", "a hijab that smells of old Teeta’s kitchen", "missing patches of hair", "shaved right eyebrow", "adoring eyes", "perpetually flushed cheeks", "porcelain skin", "a gap-toothed grin", "monocle and pipe", "Bedfordshire bobbin lace collar beautified with butterflies and bees", "pink puffy sleeves", "high-necked wool sweater", "a too-tight whale-boned corset", "an exuberance of trims and furls", "box-pleated skirts", "shredded blue gown", "stolen nurse’s apron", "hidden scars", "striped stockings", "shoes that are ripping at the toes", "single breasted overcoat with a rabbit fur collar", "cane with a flamingo pommel", "a luxurious three-wheeled rolling chaise Bath chair"
  ],
  vices: [
"croquette", "dolls", "armchair psycho-analysis", "exploring forgotten places", "hookah"
  ],
  questions: [
    "Did you live by your own Convictions?",
    "Did you embarrass another Hunter in public?",
    "Did you befriend someone you shouldn’t have?",
    "Did you attempt to reimagine who and what you are?",
    "Did you present yourself as an eminently marriageable young lady?",

  ],
  abilities: {
    vitality: 0,
    composure: 1,
    reason: -1,
    presence: 0,
    sensitivity: 2,
  },
  masksOfPast: [
    "Narrate a flashback to your early youth when you saw the world differently from others.",
    "Narrate a flashback to the time you understood that etiquette was a form of social control.",
    "Narrate a flashback to the time your family arranged an eligible match for you, an individual with whom you could not imagine sharing a life.",
    "Narrate a flashback to the time you entered The Bethlem Royal Psychiatric Hospital against your will.",
    "Narrate a flashback to the time you first looked through an Aperture of the Awakened Mind.",
    "Narrate a flashback to the time your imminent marriage fell to pieces.",
    "Narrate the first time you found comfort in the Dream.",

  ],
  masksOfFuture:   [
    "<strong>The Gilded Door</strong>: Take the following Condition: Most-Beloved. Tell the other Hunters they can no longer choose The Gilded Door on their own playbook (this does not count as being marked for them). You can never clear Most-Beloved.",
    "<strong>The Moss-Covered Gate</strong>: Narrate a scene in which you visit the family of the gentleman to whom you were betrothed, attempting to find—or bring—closure.",
    "<strong>The Darkened Threshold</strong>: The “hard work” done at Bethlem to constrain your mind begins to crack. Narrate a scene in which you grapple with trauma that you experienced there. You may now mark the Mask of the Past in any order.",
    "<strong>The Cosmic Passage</strong>: Increase your Sensitivity by 1 (max 3) and reduce your Reason by 1.",
    "<strong>The Blood-Soaked Portal</strong>: Narrate a scene in which you lose yourself to your dreams. If you are <strong>Most-Beloved,</strong> instead narrate a scene in which you become a bride. Either way, this playbook is now retired.",
  ],
  startingMoves: ["The Dream", "Defy Your Obligations", "Act On Your Convictions", "The Apertures of the Awakened Mind"],
  moves: [
    {title: "The Dream",
    text:[
        "The Dream beckons you down its rabbit holes. They hide terrors, true, but in their furthest recesses gleam secrets—and even flickers of the future. At the beginning of each Day Phase, when your eyelids quiver like sleepy moth wings, roll with Sensitivity. On a 7-9, the Keeper will provide a Clue in the form of a vivid and otherworldly dream, just before you awaken. On a 10+, your dream is also prophetic; tell the Keeper what you see, and the Keeper will ensure an aspect of the prophecy comes true at some point during the session. ", 

        "On a miss, you awaken trapped in an upside-down version of Hargrave House. Here you are stalked by a night terror. The Keeper will describe its horrible visage, what it wants to do to you, and what you must do to escape, which requires a single Night Move. ",

    ],
    },
    {title: "Defy Your Obligations",
        text:[
            "Select three Obligations at the start of play. When you defy an Obligation, mark a box below and take the Condition Guilty. If you are already Guilty, replace it with Sinful; if you are already Sinful, replace it with Wicked; if you are already Wicked, put on the Janus Mask. Once all six boxes are marked, you can unmark them at any time to unlock an Aperture of the Awakened Mind. If you do so, cross out your selected Obligations; you don’t have access to this move again until you are able to select new ones.",
            "<strong>Obligations:</strong>",
            "<check>You shall never speak falsely.</check>",
"<check>You shall not worship another god.</check>",
"<check>You shall never act like a gentleman.</check>",  
"<check>You shall not engage in sexual intimacy.</check>",
"<check>You shall never adopt a wild animal as a pet.</check>",
"<check>You shall never dirty your skirts with rough play.</check>",
"<check>You shall be obedient to the wishes of your elders.</check>",
"<check>You shall never steal from someone who might catch you.</check>",
"<check>You shall never seek comfort from the entities you see in your dreams.</check>",
"<check>You shall keep the house tidy, with pristine floors and shining surfaces.</check>",
"<check>You shall never provide genuine friendship to a person of a lower class.</check>",
"<check>You shall not fritter away the day by wandering wherever the wind blows.</check>",
"<check>You shall never show that you care, or otherwise express undue emotion.</check>",
"<check>You shall be a refined host and provide perfectly brewed tea, and crumpets.</check>",
"<check>You shall not mourn the one who suffered like you did, but couldn't get away.</check>",
        ],
        checkboxes: 6,
    },
    {title: "Act On Your Convictions",
            text:["In addition to any other Rewards gained from resolving Threats, you can reinterpret a single Obligation to be a Conviction. When you do so, cross out the Obligation and write a new Conviction to replace it; consider how the Threat you just resolved and the greater arc of the story have shaped how you now view the world. When you act in accordance with a Conviction, you take advantage on any associated rolls."],
            extraLines: 6,
    },
    {title: "The Apertures of the Awakened Mind",
                text:["It is difficult for you to distinguish between the real and the imaginary. The things you see, taste, and feel are not necessarily illusions: they can influence the wider world. Apertures represent your unique perspectives, and the gifts they provide. Apertures are unlocked via Defy Your Obligations.",
                ],
                checkboxes: 6,
    },
    ...apertureDefs,
  ],
  advancements: [
    "Select three more Obligations.",
    "Select three more Obligations.",
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Change your Name, Look, and Vice; then, reassign your ability points.",
    "Unmark everything in your Personal Quarters.",  
"Work with the Keeper to create a new Aperture of the Awakened Mind, which is automatically unlocked."

  ],
}

export const obligationDefs = [
    "You shall never speak falsely.",
    "You shall not worship another god.",
    "You shall never act like a gentleman.",
    "You shall not engage in sexual intimacy.",
    "You shall never adopt a wild animal as a pet.",
    "You shall never dirty your skirts with rough play.",
    "You shall be obedient to the wishes of your elders.",
    "You shall never steal from someone who might catch you.",
    "You shall never seek comfort from the entities you see in your dreams.",
    "You shall keep the house tidy, with pristine floors and shining surfaces.",
    "You shall never provide genuine friendship to a person of a lower class.",
    "You shall not fritter away the day by wandering wherever the wind blows.",
    "You shall never show that you care, or otherwise express undue emotion.",
    "You shall be a refined host and provide perfectly brewed tea, and crumpets.",
    "You shall not mourn the one who suffered like you did, but couldn't get away.",
]
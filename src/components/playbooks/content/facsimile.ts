import type { DollPart, PlaybookBase } from "../types";

export const facsimilePlaybook: PlaybookBase = {
    title: "The Facsimile",
    intro: ["You were an automaton, a mechanical doll made to satisfy the curious whims of your Creator. Like most dolls, you were born from bits of wood and brass; hewn, screwed, painted, and dressed to resemble something pleasant—but ultimately lifeless. You were content, because you had no reason not to be. That was until you were bestowed the Spark, a gift that let you operate in ways beyond the designs of your maker. Your gears became lubricated by something new and intangible: curiosity. Stories of the world your Creator read to you were now things that you yearned to experience, despite their protestations. You followed this inquisitiveness, determined to take your life into your own wooden hands, and eventually the strings of curiosity led you to London. For now you’ve settled at Hargrave House, living with other peculiar types who seem to dance on similar strings as you. The world beyond the workshop is a hard one, though, full of folks eager to play with you in rougher ways. Nevertheless, you will not be made a puppet for anyone’s desires but your own."],
    names: { givenName: [
      "Maria", "Angelo", "Sasha", "Uno", "Reuben", "Lilly", "Euphonia", "Gregory", "Haji", "Federico", "Philippe", "Verne", "Rosalind", "Prim", "Galatea", "Margot", "Boy", "Issac", "Annabelle", "Kratt"
    ], },
    look: [
      "ringlets of ultra-fine copper filament", "oil-stained dress shirt, ball joint articulation points", "interchangeable faceplates featuring various painted expressions", "dough-colored wool cap", "phosphorescent blue eyes", "human hair wig", "pale milky ichor", "bonnet with taffeta ribbon", "white formal gloves", "collared moth-bitten cape", "antique gold brooch with jade cricket", "sapphire blue brocade waistcoat", "uncanny smile", "jabot with ivory cameo pendant of your Creator", "shoplifted cigar", "collapsible metal parasol", "perfume to mask the scent of wood varnish and oil", "Roman nose", "leather ankle boots with contrast quarter", "sailor shirt with frayed neckerchief", "lace manchette gloves", "bombazine skirt with crinoline and chantilly petticoat", "exposed clockwork mechanics from the neck down ",  
    ],
    vices: [
      "cleaning and tuning up your parts" , "admiring children at play", "befriending strays", "etiquette training", "pantomime"  
    ],
    questions: [
      "Did you attempt to blend into London society to avoid arousing suspicion of your otherness?",
      "Did you attempt to convince someone that your experiences of the world are of equal value, despite your mechanical nature?",
      "Did you astound someone with your unique physicality?",
      "Did you share an intimate moment with a living being, then remind them of your own inhumanity?",
      "Did you disregard the advice or safety of another in the reckless pursuit of your own curiosity?",
    ],
    abilities: {
      vitality: 0,
      composure: 0,
      reason: 0,
      presence: 0,
      sensitivity: 0,
    },
    masksOfPast: [
      "Narrate a flashback to when your Creator showered you with affection as if you were already perfect, despite your crude lifeless form. ",
      "Narrate a flashback to the time when you were bestowed the Spark, and the concern your Creator expressed over this development. ",
      "Narrate a flashback to a time when your Creator put you on exhibition and the discomfort you felt—but could not articulate—being used as a contrivance for someone else’s amusement. ",
      "Narrate a flashback to when you first expressed desire for autonomy, and the lesson your Creator taught you in their attempt to show just how dangerous the world beyond the workshop was. ",
      "Narrate a flashback to the time curiosity got the better of you and led you away from your Creator and into the camaraderie of a gang of young schemers and hustlers. ",
      "Narrate a flashback to a time you did something for the gang that you knew would disappoint your Creator if they ever found out, but couldn’t help but be excited to do it anyway.  ",
      "Narrate a flashback to a time the gang put you up to something that resulted in you crossing paths with a Hunter from Hargrave House."

    ],
    masksOfFuture:   [
      "<strong>The Guilded Door</strong>: Take the following Condition: Most-Beloved. Tell the other Hunters they can no longer choose The Gilded Door on their own playbook (this does not count as being marked for them). You can never clear Most-Beloved.",
      "<strong>The Moss-Covered Gate</strong>: Your Creator has finally passed on. Narrate a scene in which an internal mechanism previously unknown to you is remotely activated, causing you—perhaps against your will—to mourn them. Take the Condition Mourning is Compulsory.",
      "<strong>The Darkened Threshold</strong>: Narrate a scene in which you violently lash out—against yourself or another—out of frustration over your inability to feel sensation. ",
      "<strong>The Cosmic Passage</strong>: You discover a room that had previously been used as a workshop for an artificer who has long departed Hargrave House. From now on, you can swap out 1 Doll Part for another and redistribute 1 Adaptor Key during the Dusk Phase. ",
      "<strong>The Oil-Stained Portal</strong>: Narrate a scene in which the Spark is stripped from you. Describe how your remains are confiscated and repurposed. This character is now retired. ",
    ],
    startingMoves: ["The Spark", "Doll Parts"],
    moves: [
      {title: "The Spark",
        text:         ["While the brilliant machinations of your Creator gave your body motion, the Spark gave you sentience. You are not affected by lack of food, water, oxygen, or sleep, and cannot receive Conditions related to those.",
          "You begin with the Condition Being Human as well as a Behavior track. This Condition cannot be cleared via the Vulnerable Move, but you can remove it to gain advantage on a roll. When you clear this Condition, you cannot take the Condition again until your Behavior track is full. You mark a box each time you do something distinctly human—telling a lie, destroying something for pleasure, praying to God, etc.—until all boxes are marked. When all boxes are marked, you can unmark all of them and retake the Being Human Condition. "
        ],
        checkboxes: 6
      },
      {title: "Doll Parts",
        text:         ["You do not start with any ability scores. Instead, at the start of each Day Phase, you equip three “Doll Parts”—attachments capable of enhancing your mechanical physiology. Each Doll Part operates with an ability, giving you +1 in that ability until you choose to switch the part for another.", 

"Each Doll Part comes with a pair of Adaptors, secondary moves that help you to further customize your Doll Parts. During the Day Phase, whenever you reassign your Doll Parts, you may also reassign your Adaptors using Adaptor Keys. You can only access the Adaptors that are associated with Doll Parts you have equipped. You start the game with access to 1 Adaptor Key."]
      },
    ],
    advancements: [
      "Increase a Doll Part ability modifier by 1 (max 3)",
      "Increase a Doll Part ability modifier by 1 (max 3)",
      "Increase a Doll Part ability modifier by 1 (max 3)",
      "Unlock an Adaptor Key.",
      "Unlock an Adaptor Key.",
      "Write a custom Adaptor for one of your Doll Parts.",
      "Unmark everything in your Personal Quarters.",
    ],
  }

export const startingParts: DollPart[] = [
  {name: "COLOSSUS-GRADE ACTUATORS",
    ability: "vitality",
    adjustment:1,
    equipped: false,
    adaptors: [{ text: ["You are as strong as ten men, and can extend your telescopic limbs a meter."], equipped: false}, {text: ["You are capable of moving at fantastic speeds.  Once per session, you can appear in any scene at any time. "], equipped: false}],
  },
    {name: "GALVANIC CARDIOVERTER",
    ability: "composure",
    adjustment:1,
    equipped: false,
    adaptors: [{ text: ["You can remove your appendages and retain control of them remotely. When you do this, take the Condition The Missing (Body Part); you can recall the part safely by removing the Condition unless it has been compromised as a result of a complication."], equipped: false}, {text: ["You can funnel the electricity coursing through your body into simple handheld weapons; describe the weapon as you manifest it. If a weapon formed would be helpful in an action, take advantage on any rolls associated with that action."], equipped: false}],
  },  {name: "CRICKET-QUICK COMPACT ANALYTICAL ENGINE",
    ability: "reason",
    adjustment:1,
    equipped: false,
    adaptors: [{text: ["Your ability to process information quickly is doubled. You receive 1 additional Clue on any Information Move made with Reason regardless of a miss; on a miss, in addition to any other Keeper reactions, take the Condition Spanner in the Works. This Adaptor cannot be used if you have this Condition. "], equipped: false}, { text:     [
      "The engine has a consciousness of its own called the “Little Wisdom.” Once per session, when you receive a mental or emotional Condition, you may call upon the Wisdom to talk you through it. Ask another player to act as the voice of the Little Wisdom and between the two of you, share a brief scene of self-reflection discussing what carrying that Condition would mean for you. At the end of the scene, you may either clear the Condition and learn nothing of consequence, or keep the Condition and award the player 1 XP in gratitude for teaching you a lesson. ",
    ] , equipped: false}],
  },  {name: "QUICKSILVER-INFUSED LINGUAL APPARATUS",
    ability: "presence",
    adjustment:1,
    equipped: false,
    adaptors: [{ text: ["When you intentionally lie or misdirect a Side Character in order to gain their favor, tell the Keeper what the truth is and roll Presence. <strong>On a hit</strong>, mark 1 box on your Behavior track; the Side Character will perform one small duty for you, which may come in the form of finding you a Clue—you decide. <strong>On a 10+</strong>, mark 2. <strong>On a miss</strong>, describe how you malfunction or otherwise subtly reveal your mechanical nature; take the Condition The Liar’s Tell. This Adaptor cannot be used if you have this Condition. "], equipped: false}, { text: ["You can throw your voice and mimic any sound that you’ve heard in an attempt to create a diversion. Additionally, you can modulate your voice to create a disorienting sonic blast. "], equipped: false}],
  },  {name: "SPECTROGRAPHIC OPTIC SENSORS",
    ability: "sensitivity",
    adjustment:1,
    equipped: false,
    adaptors: [{ text: ["Your sensors can perceive the invisible fields of energy that surround others. When you interrogate a Side Character for the first time, you may ask two of the following questions—the Keeper must answer truthfully, but not necessarily completely; the Keeper may also respond in the form of a Clue, at their discretion.",
"<li>Are they telling me the truth?</li>",
"<li>Are they hiding something from me on their person?</li>",
"<li>Have they recently been in the presence of the supernatural?</li>",
"<li>Are they frightened or amused by me?</li>",
"<li>Do they wish to harm me?</li>",], equipped: false}, { text: ["Once per session, when you enter a Location for the first time, you can declare that there is a hidden door undetectable to the human eye. Roll with Sensitivity to determine what’s behind it. *On a hit, choose 1. *On a 10+, choose 2. *On a 12+, you also find a Mastermind Clue.",
"<li>A Clue to an active Threat, ask the Keeper to describe it. </li>",
"<li>A corpse clutching something valuable; describe it and add it to your Personal Quarters. </li>",
"<li>An animal who inhabits the secret space; when you interrogate it for information about the Location, make the Information Move with advantage. </li>",
"<li>A direct passageway to another Location. </li>",
"<li>On a miss, the secret chamber will be empty, or worse—contains a Danger. </li>",
], equipped: false}],
  }
]

export const dollPartDescriptions: Record<string, string[]> = {
  "COLOSSUS-GRADE ACTUATORS": ["These attachments were modeled after parts meant for much larger machines, and allow for feats of extraordinary physicality. This Doll Part operates with Vitality."],
  "GALVANIC CARDIOVERTER": ["Your electric core keeps your body operational; this attachment allows for even more control over how that energy is conducted. This Doll Part operates with Composure."],
  "CRICKET-QUICK COMPACT ANALYTICAL ENGINE": ["A prototypical computing device scaled to the size of a human brain; you took it when you fled the workshop. This Doll Part operates with Reason."],
  "QUICKSILVER-INFUSED LINGUAL APPARATUS": ["A waxen prosthetic organ threaded with veins of charged mercury. This Doll Part operates with Presence."],
  "SPECTROGRAPHIC OPTIC SENSORS": ["Designed by your Creator using experimental technology, these sapphire lenses provide insight into that which most others cannot see. This Doll Part operates with Sensitivity."],
}
import type { PlaybookBase } from "../types";

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
      "Unlock and Adaptor Key.",
      "Unlock and Adaptor Key.",
      "Write a custom Adaptor for one of your Doll Parts.",
      "Unmark everything in your Personal Quarters.",
    ],
  }
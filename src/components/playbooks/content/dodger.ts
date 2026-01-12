import type { PlaybookBase } from "../types"

export const boons = [
  "Wield the dragon’s trove: use an item from your Hoard to give you advantage on an appropriate roll, to assist another Hunter by adding 1 to their roll (applied after they roll, and only if they agree), or to function as a Clue when Answering a Question for an active Threat. The item remains in your Hoard.",
"Wield the dragon’s claws: make a single Day or Night Move with +3 Vitality (no max),",
"Wield the dragon’s sight: immediately gain 2 Clues for an active Threat.",
"Wield the dragon’s wings: appear or disappear from a place you shouldn’t be able to get into or out of",
"Wield the dragon’s flame: utterly destroy something or someone that can be destroyed by fire (cannot be used against Threats unless an appropriate Opportunity has been unlocked).",
] as const;

export const banes = [
  "Your breath smells of smoke and your tears are full of ashes.",
  "You dream every night of flames and barrows and heaps of gold. Roll with disadvantage on your first move each London Night Phase, unless it is connected to acquiring some treasure.",
  "Something goes missing from your hoard when you mark this Bane. Take the Condition: Burning for Vengeance until you punish the culprit.",
  "Your teeth grow sharper, your smile colder. Reduce Presence by 1 and increase Vitality by 1 (max 3).",
  "The Wyrm bursts back into the waking world, consuming your body in flame as it passes through you. Tell the Keeper to put the Wyrm Threat in play and retire this playbook.",
] as const;

export const dodgerPlaybook: PlaybookBase = {
  title: "The Dodger",
  intro: ["More. It’s what you always wanted, because there was never enough: in the workhouse, on the street, in your gang of pickpockets. You wanted more. And so you stole something, something big, that could get you out of the thieving life and set you up for good. The treasure you stole was bejeweled, storied, valuable—the heist got you a ticket into Hargrave House, where your particular set of skills can be put to work on the side of the angels. Maybe it’s finally enough? You’d like to think so, but the gnawing hunger in your belly and your dreams of fire and death tell you: it’s never enough."],
  names: { firstName: [
    "Olivia", "Davey", "Tom", "Kat", "Molly", "Algie", "Dismas", "Doris", "Vincenzo", "Charlie", "Will", "Valentine", "Renard", "Lisbet", "Jezebel", "Absalom", "Tillie", "Georgie", "Reed", "Brigid"
  ], surname: [
    "Turning", "Swift", "Stane", "Walsham", "Bramer", "Horgan", "McGill", "Browning", "Sweet", "Hicks", "Twaddle", "Cook", "Hackfall", "Woolahan", "D'Amico", "Stoddard", "MacDougal", "North"
  ] },
  look: [
    "squashed top hat", "felt cap", "fascinator with a golden snake motif", "braided hair", "face always a bit soot-stained", "scar crossing one eyebrow", "carefully groomed goatee", "black silk cravat", "fox fur stole", "secondhand finery", "dark gray waistcoat", "coat adorned with mismatched patches", "too many pocket watches", "cane topped with a silver magpie", "fingerless gloves", "rings on every finger", "long crimson skirt", "hobnail boots", "old boots with thinned soles to feel the cobbles"
  ],
  vices: [
    "cheating at cards", "attending social events under false pretenses", "pranks", "consorting with undesirables", "eavesdropping", "window shopping"
  ],
  questions: [
    "Did you make use of knowledge learned on the mean streets of London?",
    "Did you openly covet something precious or rare that belongs to someone else?",
    "Did you steal something intimate from someone you desire carnally or romantically?",
    "Did you complicate a situation with compulsive lies or theft?",
    "Did you let loose the fury of the Wyrm?",
  ],
  abilities: {
    vitality: 1,
    composure: 1,
    reason: 0,
    presence:1,
    sensitivity: -1,
  },
  masksOfPast: [
    "Narrate a flashback to your life as an orphan in a workhouse, mistreated and dreaming of more.", 
    "Narrate a flashback to the moment you decided to run away and become an urchin thief.",
    "Narrate a flashback to the first time you stole something of real value. ",
    "Narrate a flashback to a happy moment you spent with your gang of fellow thieves.",
    "Narrate a flashback to the time you stole something from someone who needed it more than you, leaving your victim in dire straits.",
    "Narrate a flashback to the time your gang pushed you into riskier, more violent work.",
    "Narrate a flashback to your big score, when you acquired the crown jewel of your hoard and quickly realized you couldn’t ever sell, discard, or give away the treasure.",
  ],
  masksOfFuture:   [
    "<strong>The Guilded Door</strong>: Take the following Condition: Most-Beloved. Tell the other Hunters they can no longer choose The Gilded Door on their own playbook (this does not count as being marked for them). You can never clear Most-Beloved.",
    "<strong>The Moss-Covered Gate</strong>: Narrate a scene where you return to old stomping grounds and steal something of personal significance; add it to your Personal Quarters.",
    "<strong>The Darkened Threshold</strong>: Narrate a scene of your former criminal accomplices swearing a blood-oath of vengeance against you for your betrayal. Tell the Keeper the names and specialties of three criminals that can now serve as free-floating Dangers to you and your fellow Hunters. ",
    "<strong>The Cosmic Passage</strong>: Narrate a scene in which you see London from the point of view of an ancient dragon. Increase your Sensitivity by 1 (max 3) and reduce your Reason by 2.",
    "<strong>The Blood-Soaked Portal</strong>: Narrate a scene in which you are physically destroyed. This playbook is now retired. Bequeath your Hoard and the dragon sickness to another Hunter; if they accept it, they gain The Dragon Sickness move. ",
  ],
  startingMoves: ["The Dragon Sickness"],
  moves: [
    {title: "The Dragon Sickness",
    text:       [
      "The treasure you stole has connected you to its previous owner: a great Wyrm, slumbering somewhere beyond the waking world but sometimes terribly, terribly close to you. Its voice echoes in your dreams, speaking no human language but making its meaning clear enough: <i>More. Bring me more.</i>",
      "<strong>Each Dusk Phase, choose:</strong> ",
"<li>try to add a treasure to your Hoard, OR</li>",
"<li>take the Condition: Covetous</li>",

"When you try to add a treasure to your Hoard, choose a treasure (either an item from your Personal Quarters or something else you’ve acquired) and roll with Sensitivity; take advantage if the item you are trying to add is bejeweled or made of precious material.",

"<strong>On a hit</strong>, the item is added to your Hoard; write it below.",
"<strong>On a 10+</strong>, the Wyrm is pleased by your tribute. Unlock a new Boon of the Wyrm.",
"<strong>On a 7–9</strong>, something about the treasure is unsatisfactory. Either take the Condition: Gold-Hunger, or unlock a Boon of the Wyrm and mark the next Bane of the Wyrm.",
"<strong>On a miss</strong>, your paltry offering is rejected. Do not add the item to your Hoard, and mark the next unmarked Bane of the Wyrm.",
"When you wish to call upon the power of the dragon who haunts your dreams, take the Condition: Thrall of the Wyrm and use an unlocked Boon of the Wyrm. You cannot use a Boon again until the Condition is cleared.",
"<strong>Boon of the Wyrm:</strong>",
...boons,
"<strong>Banes of the Wyrm:</strong>",
...banes,
"You can answer the first Question of The Wyrm Threat while it is inactive (“How can the Wyrm be propitiated?”). Items in your Hoard count as Clues toward answering it, and you may attempt to Answer a Question when you have at least three items (half the Complexity). If you answer it successfully, you can pursue the Opportunity even though the Threat isn’t active. If you attempt to answer it and get a miss, the Wyrm awakens fully and you flee London in terror; retire this character and tell the Keeper to put The Wyrm in play. ",

"<strong>YOUR HOARD:</strong>",
    ],
    extraLines: 8,
    },    {
      title: "Thief in the Night",
      text: [
        "Each of your fellow Hunters can summon you to them when they roll a miss during the Night Phase. Your arrival need not seem possible by ordinary rules of time and space—you have your ways. Your intervention increases their result to a 10. Afterwards, help yourself to a reward: take a marked item from their Personal Quarters and add it to yours, unmarked. Each Hunter can summon you in this way one time total.",
      ],
    },
  {title: "A Pocket or Two",
    text:       ["When you mingle with a crowd and attempt to liberate some valuables, roll with Composure.",
"<strong>On a 10+,</strong> you strike gold. Ask the Keeper to detail a Clue or a valuable treasure you find; in the latter case, add it to your Personal Quarters.",
"<strong>On a 7–9,</strong> you find some minor trinkets—nothing worth noting—and learn some interesting tidbits about someone in the crowd in the process; ask the Keeper what it is. However, they realize something’s gone missing and will be on their guard…",
"<strong>On a miss,</strong> someone catches you red-handed. Work out with the Keeper how you could have slipped up, then brace yourself for consequences."],
  },
  {title: "Thieves' Cant",
    text:       ["You know the secret argot of the underworld, a coded tongue of rogues, beggars, and hustlers. Once per phase, when you converse with such unsavory types in cant, ask the Keeper: what have they seen that would shock or appall polite society? The Keeper will answer with a Clue."],
  },
  {title: "A Dangerous Crowd",
              text:       ["When you meet someone who is or has been part of London’s criminal element, you can tell the Keeper that you know them of old, then roll with Presence.",
"<strong>On a 10+,</strong> they are well-disposed to you and owe you a favor.",
"<strong>On a 7–9,</strong> you have a complicated history and probably owe each other several favors and maybe an apology or two.",
"<strong>On a miss,</strong> they hate your guts (probably justifiably) and will seek to destroy you."],
  },
  {title: "Burglar’s Appraisal",
                text:       [
                  "When you use the Information Move to investigate a place, you can always also ask the Keeper one of the following questions, even on a miss; the Keeper will answer truthfully and completely:",
"<li>How could I get in?</li>",
"<li>How could I get out?</li>",
"<li>What here is worth taking?</li>",
"Take advantage on any die rolls associated with appropriate follow-up actions."
                ],
  },
  ],
  advancements: [
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Choose an additional move from your playbook.",
    "Choose an additional move from your playbook.",
    "Unmark one Bane of the Wyrm of your choice.",
    "Unmark everything in your Personal Quarters.",
    "Write a custom move for your character.",

  ],
}
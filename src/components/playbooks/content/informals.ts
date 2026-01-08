import type { Abilities, PlaybookBase } from "../types"
import { blankPlaybook } from "./blank"

export const informalsPlaybook: PlaybookBase= {
  ...blankPlaybook,
    title: "The Informals",
    intro: ["This is a troupe-style playbook, meaning rather than playing a single character, you switch between a number of different characters. You are the Hargrave House Informals, a group of people in London who assist the Hunters with their investigations. You don’t know each other, and you don’t live in Hargrave House, but you are each in the employ of a resident of the house, and provide them with valuable skills and street-level knowledge they can’t get anywhere else. Let’s meet each of you in turn…"],
    masksOfFutureDescription: "This Mask shows each of the Informals being brutally killed by a serial murderer known as the Herald. Whenever you put on the Janus Mask, mark the next available box. The Informal killed doesn’t have to be the same one you were playing when you put on the Mask. These scenes are always narrated at the end of the play session you marked them, after any out-of-character Keeper scenes and debrief. Do not reveal which Informal is to be killed until you narrate the scene. You may not reveal any identifying details about the Herald in your narration; keep them in the shadows or just out of frame.",
    masksOfFuture:   [
    "<strong>The Blood-Soaked Portal</strong>: Narrate a scene showing an Informal being brutally murdered by the Herald. What does the Herald take from the Informal as a trophy? Write it on the line below.",
      "<strong>The Blood-Soaked Portal</strong>:  Narrate a scene showing an Informal being brutally murdered by the Herald. What does the Herald take from the Informal as a trophy? Write it on the line below. All remaining Informals begin to have an uneasy feeling, and take the Condition: Unnerved.",
      "<strong>The Blood-Soaked Portal</strong>:  Narrate a scene showing an Informal being brutally murdered by the Herald. What does the Herald take from the Informal as a trophy? Write it on the line below. All remaining Informals start to see evidence of the Herald wherever they look. Whenever you Paint the Scene, you must additionally answer the question: Is there evidence the Herald was here? If so, what? ",      "<strong>The Blood-Soaked Portal</strong>:  Narrate a scene showing an Informal being brutally murdered by the Herald. What does the Herald take from the Informal as a trophy? Write it on the line below. All remaining Informals begin to dream of their pending doom; increase their Sensitivity by 1 (max 3). (The Character Keeper will add this automatically).",
      "<strong>The Blood-Soaked Portal</strong>:  Narrate a scene showing an Informal being brutally murdered by the Herald. What does the Herald take from the Informal as a trophy? Write it on the line below. All remaining Informals take the Condition: Obsessed with Death.",
      "<strong>The Blood-Soaked Portal</strong>:  Narrate a scene showing an Informal being brutally murdered by the Herald. What does the Herald take from the Informal as a trophy? Write it on the line below. The remaining Informal must include a prophecy of their own demise in every conversation.",
      "<strong>The Blood-Soaked Portal</strong>:  Narrate a scene showing an Informal being brutally murdered by the Herald. What does the Herald take from the Informal as a trophy? Write it on the line below. Retire this playbook. The Herald is now unlocked.",
    ],
  }

type InformalDetails = {
  name: string;
  vice: string;
  look: string;
  abilities: Abilities;
  moves: {
    title: string;
    text: string[];
    checkboxes?: number;
    extraLines?: number;
  }[];
  dawnNarration: string;
  duskFlashback: string;
}

  const elsieDetails = {
    name: "Elsie Willow, a prositute",
    vice: "helping the poor",
    look: "red hair, laughs a lot, moth eaten dress",
    abilities: {
      vitality: 0,
      composure: 0,
      reason: 0,
      presence: 2,
      sensitivity: 0,
    },
    moves:     [
      {
        title: "Day Phase",
        text: [
          "Once per Day Phase, you gain an extra Clue on the Information Move when questioning a destitute person, even on a miss. Your Patron can also do this once per Day Phase, so long as you are in the scene with them; how does your presence make the downtrodden trust your Patron more? ",
        ],
      },
      {
        title: "Night Phase",
        text: [
          "        When you perform a sex act for a Side Character, Danger, Servant, Threat, or Mastermind, pick one:",
          "<li>They confess something to you; this confession may come in the form of a Clue, at the Keeper’s discretion.</li>",
          "<li>You take something from them; name it and add it to your Personal Quarters.</li>",
          "<li>A Danger or Servant becomes a Side Character; why are they no longer trouble for Hargrave House? </li>",
          "<li>You or your Patron take advantage on a single roll connected to an action against the character you perform a sex act for; how are they vulnerable to you?</li>",
          "<li>Clear an appropriate Condition. </li>",
        ],
      },
    ],
    dawnNarration: "Narrate a scene in the present day showing how you are making progress on a new life for yourself OR how you’re content with the life you have now.",
    duskFlashback: "Narrate a flashback showing the incident that caused you to start selling your body for money. ",
  }

  const kipDetails = {
    name: "Kip Longfellow, a street urchin",
    vice: "gorging himself",
    look: "quite short, smells of hay, weirdly red",
    abilities: {
      vitality: -1,
      composure: 1,
      reason: 1,
      presence: 0,
      sensitivity: 1,
    },
    moves:     [
      {
        title: "Day Phase",
        text: [ "Once per Day Phase, you may take advantage on a roll associated with an action where being physically small would be helpful. Your Patron can also get this benefit once per Day Phase so long as you are directly helping them with a task."
        ],
      },
      {
        title: "Night Phase",
        text: [
          "You’re the leader of a gang of small street children, the Cobblestone Crew. At the beginning of the phase, pick three to accompany you during the night. So long as they’re with you, they each add 1 to your ability score that corresponds to what they have listed next to their name (no max).",
          "<check><strong>Nibs</strong> (Composure) – Sharp eyes, quick fingers, always chewing on a reed of straw.</check>",
          "<check><strong>Sooty</strong> (Vitality) – Smudged face, smells faintly of chimney ash, laughs like a cough.</check>",
          "<check><strong>Tuppence</strong> (Sensitivity) – Torn pinafore, one shoe too big, jingles a lucky coin on a string.</check>",
          "<check><strong>Mite</strong> (Composure) – Barely up to your waist, darting as fast as a sparrow, missing a front tooth.</check>",
          "<check><strong>Knocker</strong> (Reason) – Broad forehead, perpetual bruise on one cheek, grins like he knows a secret.</check>",
          "<check><strong>Penny Jane</strong> (Presence) – Stringy hair tied with ribbon, sings bawdy songs in a child’s voice, pockets full of buttons.</check>",
          "<check><strong>Cricket</strong> (Sensitivity) – Quick-talking, whistles when nervous, eyes reflect any bit of light.</check>",
          "<check><strong>Louse</strong> (Vitality) – Scratchy cap, raw knuckles, insists on shaking hands.</check>",
          "<check><strong>Buttons</strong> (Presence) – Coat covered in mismatched brass and bone fasteners, polite as a butler, never still.</check>",
          "<check><strong>Scab</strong> (Reason) – Skinny as wire, fresh scrape on his chin every day, hums hymns in the gutter.</check>",
        ],
        checkboxes: 10
      },
    ],
    dawnNarration: "Narrate a scene in the present day showing how you’ve secretly made friends with a child from a wealthy family.",
    duskFlashback: "Narrate a flashback showing why you ended up on the streets at such a young age.",
  }

  const silasDetails = {
    name: "Silas Gren, a butcher",
    vice: "good books",
    look: "muscular, bloody apron, looks older than he is",
    abilities: {
      vitality: 1,
      composure: 2,
      reason: -1,
      presence: 0,
      sensitivity: 0,
    },
    moves:     [
      {
        title: "Day Phase",
        text: [ "Your Patron always takes advantage on rolls associated with blood, bones, ligaments, an understanding of anatomy (human or beast), disassembling things, or religion, so long as you are present in the scene; how does your knowledge help in the matter?"
        ],
      },
      {
        title: "Night Phase",
        text: [ "Once per phase, you get an extra Clue on the Information Move when you butcher or otherwise explore a carcass, even on a miss. "
        ],
      },
    ],
    dawnNarration: "Narrate a scene in the present day showing how the beasts forgive you for what you do.",
    duskFlashback: "Narrate a flashback to a time when you carved up an animal and how the experience was almost holy to you.",
  }

  const velmaDetails = {
    name: "Velma Thenwicket, a governess",
    vice: "naughty books",
    look: "pretty, usually stern, always tired",
    abilities: {
      vitality: 0,
      composure: 1,
      reason: 2,
      presence: 1,
      sensitivity: -2,
    },
    moves:     [
      {
        title: "Day Phase",
        text: [
          "Your Patron’s Reason score is increased by 1 (no max) so long as you are present. "
        ],
      },
      {
        title: "Night Phase",
        text: [
          "When you indulge your Vice—with no other Hunters present—in the dark and seedy underbelly of London in order to feel something, pick two:",
"<li>You don’t draw any unwanted attention.</li>",
"<li>You befriend a Side Character.</li>",
"<li>You stumble on a Clue; tell the Keeper what it is. The Clue cannot conclusively answer a Question by itself.</li>",
"<li>Clear an appropriate Condition.</li>",

        ],
      },
    ],
    dawnNarration: "Narrate a scene in the present day showing how you break free from the restrictive job of governess, and into something much more befitting your talents and passions. ",
    duskFlashback: "Narrate a flashback showing the day you met the children who are your charges. In what ways is this job beneath your skill and intellect?",
  }

  const pigEarDetails = {
    name: "Pig’s Ear, a pickpocket",
    vice: "romance",
    look: "hirsute, smells… interesting, surprisingly poetic",
    abilities: {
      vitality: 0,
      composure: 3,
      reason: 0,
      presence: 0,
      sensitivity: -1,
    },
    moves:     [
      {
        title: "Day Phase",
        text: [ "You can lift something from a Side Character, Danger, or Servant the first time you meet them so long as your Patron is acting as a distraction; name what you get and add it to your Personal Quarters, or give it to your Patron, who then adds it to their Personal Quarters. You can do this once per phase."
        ],
      },
      {
        title: "Night Phase",
        text: [ "You’re working on a big score—a heist that will help you get out of this wretched city once and for all. Describe it. You now have a personal <strong>Question: How can I successfully pull off this crime?</strong> (Complexity: 4). Hereafter, any Clues collected by you or your Patron (no matter the phase of play) can be redirected to this Question, as you see fit. <strong>Opportunity:</strong> Narrate a scene showing how you pull off the score. Then, strike the next entry on the Mask of the Future (it never existed) and narrate a scene showing how you retire to safety and obscurity."
        ],
      },
    ],
    dawnNarration: "Narrate a flashback to a scene in the present day showing how you get your revenge on the people who betrayed you.",
    duskFlashback: "Narrate a flashback to a time you were betrayed and left for dead by your criminal underworld employer. ",
  }

  const brotherSamuelDetails = {
    name: "Brother Samuel, a disgraced vicar",
    vice: "the occult",
    look: "clean cut, smells of juniper, soft hands",
    abilities: {
      vitality: 0,
      composure: -1,
      reason: 0,
      presence: 1,
      sensitivity: 2,
    },
    moves:     [
      {
        title: "Day Phase",
        text: [ "Your Patron always takes advantage on any rolls associated with the occult, spirits, or blasphemy so long as you are present; how does your knowledge help them?"
        ],
      },
      {
        title: "Night Phase",
        text: [ "Once per phase, you can perform a dark rite; describe it. Then, pick one from the list of Effects and two from the list of Complications:",  
"<strong>Effects:</strong>",
"<li>Banish a spirit or curse from the person, object, or place it inhabits.</li>",
"<li>Communicate with someone or something that you do not share a language with.</li>",
"<li>Observe another place or time.</li>",
"<strong>Complications:</strong>",
"<li>You take a Condition; the Keeper will tell you what.</li>",  
"<li>The magic draws immediate, unwanted attention.</li>",
"<li>The magic has a problematic side effect.</li>",
        ],
      },
    ],
    dawnNarration: "Narrate a scene in the present day showing how you atone or otherwise gain redemption for the incident that caused your fall from grace.",
    duskFlashback: "People believe it was your interest in the occult that caused your fall from grace. Narrate a flashback showing what really happened.",
  }

  const barrelDetails = {
    name: "Barrel Staves, a hooligan",
    vice: "small, pretty things",
    look: "an absolute unit",
    abilities: {
      vitality: 3,
      composure: 1,
      reason: -1,
      presence: 1,
      sensitivity: -2,
    },
    moves:     [
      {
        title: "Day Phase",
        text: [ "You take advantage on any rolls associated with the direct defense of your Patron."
        ],
      },
      {
        title: "Night Phase",
        text: [ "You can bar a place to a single person or creature. No matter their size, no matter their form, no matter their talents, <i>they cannot enter.</i> Why?"
        ],
      },
    ],
    dawnNarration: "Narrate a scene in the present day showing how someone loves you just the way you are.",
    duskFlashback: "Narrate a flashback to your childhood showing how other people were cruel to you because of your unusual size.",
  }


  export const members: Record<string, InformalDetails> = {
    elsie: elsieDetails,
    kip: kipDetails,
    silas: silasDetails,
    velma: velmaDetails,
    pigEar: pigEarDetails,
    brotherSamuel: brotherSamuelDetails,
    barrel: barrelDetails,
  }
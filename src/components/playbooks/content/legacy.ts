import type { PlaybookBase } from "../types"

export const legacyPlaybook: PlaybookBase = {
  title: "The Legacy",
  intro: ["Hargrave House is filled with monster-hunters, but you’re the only one who was born to do it. Your parents, their parents, and their parents before them have known one thing: reveling in the destruction of un-Godly beasts and carnivorous terrors. Your family name has been whispered in secret meetings for generations, passed along to those in need of your hereditary talents. You were taught how to hold a blade when you were a child, and completed your first hunt not many years after. Your knowledge of combat and trapping is unparalleled, but you’ve grown disillusioned with your heritage. You want to be more than just another entry in a long ledger of death. You want out. But you have one last score to settle first: a curse of sorts, a Beast that’s haunted you and your family for as long as anyone can remember. Prepare to say your family’s vow…"],
  names: { firstName: [
    "Ariana", "Emily", "Jessica", "Hebony", "Ramisa", "Fatima", "Ho-Kwan", "Anouk", "Martina", "Chrysoula", "Bradford", "Bailey", "Dominic", "Henry", "Oscar", "Quinn", "Abraham", "Vinod", "Tiago", "Dem Ashur"
  ], familyName: [
    "Van Helsing", "Gasciogne", "Winchester", "Rivia", "Magnus", "Constantine", "Vasconcelos", "Sarkar", "Kamakaris", "al-Rumi", "Artester", "Sekhemkhet", "Barsukov", "Durand", "Lichtermann", "Báthory", "Boromi"
  ] },
  look: [
    "witch-hunter hat with silver dagger emblem", "muddy tricorne with bites taken out of it", "scorched right ear", "vacant eyes", "mutton chops", "extravagantly braided hair", "sturdy handlebar mustache", "shaggy wind-blown hair", "maroon-stained black leather coat", "deep brown duster with patches and tears", "extravagant ruby frock", "bodice held together with sharp pins", "loose white killigrew with no undershirt", "gold inlaid hand-me-down scabbard", "cloth quiver with tattered shoulder strap", "fingerless gloves with mirrored back of hand", "missing ring finger", "vein-like scars", "knee-high mildewed boots", "barefoot", "white button-up french doll shoes"
  ],
  vices: [
    "laudanum", "confessing sins", "sex with strangers", "reading old tomes", "skinning things"
  ],
  questions: [
   "Did you loudly curse your family’s name? ", 
   "Did you try to go unnoticed in a public space? ",
   "Did you revel in the thrill of the hunt? ",
   "Did you tell someone why their plans were poorly made? ",
   "Did you taste someone (or something) else’s blood, sweat, or other bodily fluids? ",
  ],
  abilities: {
    vitality: 2,
    composure: 0,
    reason: 0,
    presence: -1,
    sensitivity: 1,
  },
  masksOfPast: [
    "Narrate a flashback to your childhood that shows the first hunt you went on and what about it disturbed you.", 
"Narrate a flashback to your early teenage years where you tried to live a normal life, but a family member put you in your place.", 
"Narrate a flashback to the first time a family member grieved that they could never give you more.",
"Narrate a flashback to when you watched the Beast destroy the family member who understood you the most.",
"Narrate a series of three quick flashbacks when the Beast showed up during hunts throughout your life and put you in danger.", 
"Narrate a flashback to when you first tried to kill the Beast that shows how greatly unprepared you were.", 
"Narrate a flashback where you showed up bloody and beaten to a place of comfort and were met with kindness." 
  ],
  masksOfFuture:   [
    "<strong>The Gilded Door</strong>: Take the following Condition: Most-Beloved. Tell the other Hunters they can no longer choose The Gilded Door on their own playbook (this does not count as being marked for them). You can never clear Most-Beloved.",
    "<strong>The Moss-Covered Gate</strong>: Narrate a scene where you stumble upon the Beast unprepared, but it shows no interest in you and vanishes into the night. Mark or erase two of either symbol on your Hunt.",
    "<strong>The Darkened Threshold</strong>: Narrate a scene where you kill an innocent for the sake of the hunt. Mark an X on your Hunt.",
    "<strong>The Cosmic Passage</strong>: Your connection to the Beast has grown. At the start of the Dusk Phase, roll with Presence. On a 10+, take advantage on your next roll and describe what aspect of the Beast you feel helping you. On a 7-9, as above, but take the Condition: Bloodthirsty; if you are already Bloodthirsty, put on a mask. Once The Beast is resolved, unmark this box. When you mark it again, change the connection to any active Threat. The box cannot be unmarked after that.",
    "<strong>The Blood-Soaked Portal</strong>: Narrate a scene in which you are physically destroyed. This character is now retired. ",
  ],
  startingMoves: ["A Hunter's Life…", "…Is Never Over"],
  moves: [
    {
      title: "A Hunter's Life…",
      text: [
        "Your entire life has been filled with lessons on slaying beasts. Engaging in physical combat with a supernatural creature is always Vitality for you.", 

"You also possess a hereditary weapon, passed down to you from your ancestors. What type of weapon is it?",
"<li>Sword</li>",
"<li>Whip</li>",
"<li>Twin blades</li>",
"<li>_______________(write your own)</li>",
"Name the weapon and add it to your Personal Quarters. When you use the weapon in physical combat with a supernatural creature, you can mark a box below and describe how the weapon has been modified to be particularly effective against creatures of that type. If you do so, you can increase the result tier of a single die roll connected to that combat, as if you had put on the Janus Mask. Afterwards, narrate a flashback showing one of your ancestors destroying a monster of that type using the hereditary weapon.",
      ],
      checkboxes: 3,
    },
    {
      title: "…Is Never Over",
      text: ["Fill out the first three sections on The Beast Threat sheet. Fill out the remaining sections as you wish, between sessions. You should keep this information secret as you would for any other aspect of your past.", 

"Use the boxes below to track your Hunt for the Beast. Whenever you mark your Hunt, ask another player to describe what you find that tells you you’re one step closer. These clues should be very small or subtle—a feeling, a scent, a shadow, or something in the air. Whenever you resolve a Threat with violence, or are otherwise instructed to do so by something on the playbook or by the Keeper, mark one of the Hunt boxes with an X. Whenever you resolve a threat peacefully, or are otherwise instructed to do so by something on the playbook or by the Keeper, mark one of the Hunt boxes with an O. When all boxes have been marked, give The Beast Threat sheet to the Keeper and tell them to put it in play (even if there are already three active Threats). If there are at least 6 X’s, instruct the Keeper to lower the first Question’s Complexity by 2. Otherwise, instruct them to lower the second Question’s Complexity by 2. "],
    },
    {
      title: "…Fueled by Vengeance…",
      text: ["When pursuing or fighting a creature that is the same type as the Beast, add 1 to any associated die rolls (you may tell the Keeper and other players what the Beast is in order to get this bonus). If you do, ask another Hunter how your doggedness or brutality makes them feel (this may give them a Condition, at the Keeper’s discretion), and then unmark the <strong>Darkened Threshold</strong> if it is marked. This move is no longer available once The Beast is resolved."],
    },
    {
      title: "…Shrouded in Mystery…",
      text: ["Whenever a Mastermind Clue is discovered by any Hunter, you may mark your Hunt with an O; ask another player how you are getting closer to finding the Beast, as normal. This move is no longer available once The Beast is resolved."],
    },
    {
      title: "…A Lonely One…",
      text: ["During the London Night Phase, you get 1 additional Clue on the Information Move (including on a miss) so long as there are no other Hunters present. "],
    },
    {
      title: "…In Want of Priviledge…",
      text: ["When you leverage your family’s name in order to gain information or assistance, roll with Presence. On a 10+, the person has a history with your family and will help you for the remainder of the phase; any information they give can be in the form of a Clue, at the Keeper’s discretion, and any rolls associated with actions they help you with are taken at advantage. On a 7-9, as above, but they will require something in return; the Keeper will say what. On a 12+, they also lean in to whisper something about the Beast. Mark your Hunt with an O. The 12+ result is no longer available once The Beast is resolved."],
    },
    {
      title: "…Soaked in Blood.",
      text: ["Whenever you lash out in gratuitous violence, you may remove all emotional or psychological Conditions. Then, mark your Hunt with an X and ask another player how this is getting you closer to your quarry, as normal; this secondary effect is no longer available once The Beast is resolved."],
    },
  ],
  advancements: [
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Choose an additional move from your playbook.",
    "Choose an additional move from your playbook.",
    "Write a custom move for your character.",
    "Unmark all the boxes on “A Hunter’s Life…”",
  ],
}
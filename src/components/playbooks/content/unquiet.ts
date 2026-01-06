import type { PlaybookBase } from "../types"

export const unquietPlaybook: PlaybookBase = {
    title: "The Unquiet",
    intro: ["You were a resident of Hargrave House many decades ago, but now, ghosty-ghost, you’re dead. In fact, you met an untimely end as the result of a betrayal by one of your contemporaries. The arrival of the traitor’s descendant in London has awakened you, restless spirit, and anchored you to Hargrave House, which you’ll haunt until you can exact your revenge by destroying said descendant. In the meantime, you find yourself drawn yet again to the dark work done by Hargrave House, and these new Hunters could certainly use your help. You might even be able to summon the energy needed to temporarily slip your spectral bonds and stalk the streets of London once again. "],
    names: { firstName: ["Anne", "Ada", "Bonnie", "Clarice", "Adora", "Eunice", "Maria", "Thomasina", "Heather", "Minerva", "Jack", "Henry", "Bartholomew", "Talmadge", "Edward", "Shiloh", "Randall", "Connor", "James", "Gawain"], surname: [
      "Drake", "Twopenny", "Bellamy", "Easton", "Jones", "York", "Avery", "Hornigold", "Grimm", "Morgan", "Davidson", "Hawkins", "Lovejoy", "Wade", "Canterbury", "Morgenstern", "Crowley"
    ] },
    look: [
      "crooked tricorn hat", "Tudor bonnet", "powdered wig", "dark circles under eyes", "green glass eye", "severed head",  "blood dribbling from mouth", "oversized neck ruff", "ghastly chest wound", "dated military uniform", "dusty pink waistcoat and breeches", "long dress with bare shoulders and no corset", "vermillion doublet with oversized mutton sleeves", "black cape with gold brocade trim", "heart outside the chest", "lace cuffs/collar", "fine wool stockings with lavender ribbons", "dramatically heeled shoes festooned with jewels", "boots forever caked in mud", "shoeless"
    ],
    vices: [
      "walking through living things", "watching people cry", "eavesdropping", "decadent meals", "lecturing others about the past"
    ],
    questions: [
      "Did you add to the list of secrets you collect on your fellow Hunters?",
      "Did you counsel the living to appreciate being alive?",
      "Did you utilize the past to solve a problem in the present?",
      "Did you luxuriate in the tactile?",
      "Did you give someone a fright? ",

    ],
    abilities: {
      vitality: 0,
      composure: -1,
      reason: 0,
      presence:1,
      sensitivity: 2,
    },
    masksPastDescription: "Mark the first unmarked box. After resolving each entry, ask another Hunter to define an object from the scene (it can be explicit in the scene or merely implied) and add it to their Personal Quarters. ",
    masksOfPast: [
      "Narrate a flashback to when you were alive that shows you battling and destroying a monstrous threat on behalf of Hargrave House. ",
      "Narrate a flashback to when you were alive that shows you having an intimate moment with the Hunter who would eventually betray you. Name them. ",
      "Narrate a flashback to when you were alive that shows Hargrave House’s chief nemesis during those days. ",
      "Narrate a flashback showing how the Hunter who would eventually betray you fell in with Hargrave House’s nemesis. ",
      "Narrate a flashback showing the betrayal. ",
      "Narrate a flashback showing how the betrayal resulted in your death. ",
      "The Keeper narrates a scene in the present-day in which we see the descendant of the Hunter who betrayed you. Name them. ",
    ],
    masksOfFutureDescription: "If no boxes are marked, Hargrave House can perform a quieting ritual that will allow you to pass peacefully into the next world. Work with the other Hunters to describe the scene. Otherwise, mark any box you wish.",
    masksOfFuture:   [
      "<strong>The Moss-Covered Gate</strong>: You have gathered enough spectral energy so you no longer have to return to the spirit world after your Energy track is filled. Instead, if you wish, unmark all the boxes and take the Condition: Drained. If you are already Drained, put on the Janus Mask.",
      "<strong>The Darkened Threshold</strong>: Narrate a scene in which we see you silently observing the descendant of the Hunter who betrayed you. ",
      "<strong>The Darkened Threshold</strong>: Narrate a scene in which we see you silently observing the descendant of the Hunter who betrayed you. ",
      "<strong>The Darkened Threshold</strong>: Narrate a scene in which we see you silently observing the descendant of the Hunter who betrayed you. ",
      "<strong>The Cosmic Passage</strong>:  Once per session, you can take as many points as you wish from Sensitivity and add them to Reason, and vice-versa (min -3 and max 3).  .",
      "<strong>The Blood-Soaked Portal</strong>: Narrate a scene in which you destroy the descendant of the Hunter who betrayed you. Then, pass into the next world. This character is now retired.",
    ],
    startingMoves: ["The Phantom", "Made Flesh"],
    moves: [
      {
      title: "The Phantom",
      text: [
        "You are anchored to Hargrave House. You may roam about the interior of the mansion, but if you manage to leave, you will return involuntarily at Dawn. While in the house, you may openly converse in a disembodied voice.",
        "Additionally, during a Hargrave House Night Phase, you are able to have regular scenes in the house, even though the other Hunters cannot; the gameplay cuts back and forth between the Room narrations and your scene, as if the Room narrations were an Unscene during a London Night Phase. You still participate in Room narrations.", 

"You can summon enough spectral energy to temporarily break free from your ghostly bonds or interact with the world in ways that are more physical in nature. Whenever instructed to do so, either by the Keeper or another move, mark the Energy track below. When the track is full, you must spend the next Day Phase recovering in the spirit realm. You can take no actions while in the spirit realm, nor can you interact with other characters. However, during other Hunters’ scenes, you should describe how your residual spectral energy is subtly affecting the environment. Additionally, you gain a Clue while in the spirit realm. Tell the Keeper what it is and to which active Threat it applies. The Clue cannot conclusively answer a Question by itself. Unmark all Energy at the end of the recovery Day Phase."
      ],
      checkboxes: 4,
      extraLines: 1,
    },
    {
      title: "Made Flesh", 
      text: [
        "During the Dusk Phase, mark 2 boxes on the Energy track to pull together enough ectoplasm to appear as a solid, living person, dressed in clothes from the period you died in, along with any Personal Quarters items you wish. While in this form, you can leave Hargrave House, touch things, be touched, communicate normally, and suffer injury. This physical manifestation ends during the Dawn Phase. If you are killed in this form, you immediately return to Hargrave House as a ghost and take the Condition: Shaken. If you are already Shaken, put on the Janus Mask. ",

"As always, you can have regular scenes during a Hargrave House Night Phase; those scenes can take place in the city while manifesting physically."

      ]
    },
    {
      title: "The Open Door",
      text: ["During the Dusk Phase, mark 1 box on the Energy track to possess a non-human animal. While inhabiting the animal, you can leave Hargrave House and take any action the animal would be able to take. You cannot speak while in the animal, but you can communicate via physical gestures. The possession ends during the Dawn Phase. If the animal is killed, you immediately return to Hargrave House as a ghost and take the Condition: Shaken. If you are already Shaken, put on the Janus Mask. "]
    },
    {
      title: "Poltergeist",
      text: ["You can employ telekinetic force to move small objects, lower or raise the temperature in a room, or extinguish or light candles. Mark 1 box on the Energy track to take a more powerful action: hurl objects as large as a man, cause a room to instantly freeze or catch fire, or cause every light source in a room to extinguish or illuminate."]
    },
    {
      title: "Lowering the Veil",
      text: ["You can walk through walls and other objects while you’re in a physical form. Additionally, you can mark 1 box on the Energy track to do one of the following:",
        "<li>Use the power defensively to completely avoid danger, no roll needed.</li>",
        "<li>Become invisible and observe a place completely unseen, no roll needed.</li>",
        "<li>Kill a Danger or Side Character by grabbing their heart, no roll needed.</li>",]
    },
    {
      title: "The Portrait Gallery",
      text: ["The portrait gallery in Hargrave House contains paintings of past Hunters. You’ve made friends with a few of these spirits. During the Dusk Phase, you can mark 2 boxes on the Energy track to summon one of them to aid Hargrave House during the upcoming Night Phase. Any rolls associated with actions they are particularly good at helping with are taken at advantage.",
        "<li><strong>Elizabeth Sinclair, a dhampir.</strong> Elizabeth helped clear a vampire infestation from London over 100 years ago. She still retains her fiery red hair which is tied back in a green velvet band. She has extensive knowledge of nocturnal creatures and is highly skilled at fighting them. Quote: <i>“I am glad to be of service to Hargrave House once more. I only require a small cup of blood and we can get started.”</i></li>",
        "<li><strong>Montgomery Cavendish, Lord Witch-Finder.</strong> This nobleman successfully rooted out witchcraft and demonic forces in the 1600s. He wears an iron breastplate and a perpetual scowl. Montgomery is knowledgeable about demons and witchcraft, and is skilled at exorcisms and counter-sorcery. Quote: <i>“As the Almighty God is my witness, I do proclaim to all before me that she has the Devil’s Mark upon her. Burn the witch!”</i></li>",
        "<li><strong>The Dark Jester, an assassin.</strong> The Dark Jester was one of the first residents of Hargrave House—before it was even called Hargrave House. Before that, he was a spy and assassin for an ancient Saxon king. He is dressed in patchwork shades of black, and the bells on his shoes make no sound. Summon the Dark Jester to assist with stealth and murder. Quote: <i>[sneer]</i></li>",
        "<li><strong>Create your own.</strong> Name them, describe them, and note two things they’re good at.</li>",
      ],
      extraLines: 5,
    },
    ],
    advancements: [
      "Increase an ability modifier by 1 (max 3)",
      "Increase an ability modifier by 1 (max 3)",
      "Increase an ability modifier by 1 (max 3)",
      "Choose an additional move from your playbook.",
      "Choose an additional move from your playbook.",
      "Write a custom move for your character.",
      "Unlock the next two marks on the Energy track.",
    ],
  }
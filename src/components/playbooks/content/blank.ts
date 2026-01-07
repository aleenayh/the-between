import type { PlaybookBase } from "../types"

export const blankPlaybook: PlaybookBase = {
  title: "Community-Created Playbook",
  intro: [],
  names: { firstName: [], surname: [] },
  look: [],
  vices: [],
  questions: [],
  abilities: {
    vitality: 0,
    composure: 0,
    reason: 0,
    presence: 0,
    sensitivity: 0,
  },
  masksOfPast: [],
  masksOfFuture:   [
    "<strong>The Guilded Door</strong>: Take the following Condition: Most-Beloved. Tell the other Hunters they can no longer choose The Gilded Door on their own playbook (this does not count as being marked for them). You can never clear Most-Beloved.",
    "<strong>The Moss-Covered Gate</strong>: ",
    "<strong>The Darkened Threshold</strong>: ",
    "<strong>The Cosmic Passage</strong>: Increase your Sensitivity by 1 (max 3) and reduce your Reason by 2.",
    "<strong>The Blood-Soaked Portal</strong>: Narrate a scene in which you are physically destroyed. This character is now retired. ",
  ],
  startingMoves: [],
  moves: [],
  advancements: [
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Increase an ability modifier by 1 (max 3)",
    "Write a custom move for your character.",
    "Write a custom move for your character.",
    "Write a custom move for your character.",
    "Unmark everything in your Personal Quarters.",
  ],
}
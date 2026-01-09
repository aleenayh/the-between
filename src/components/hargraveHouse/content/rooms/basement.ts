import type { RoomContent } from "../../types"

export const basementContent: RoomContent = {
  title: "The Basement",
  intro:
    "Sun barely breaching the lightwell to intrude upon the shadows and gloom. Coal piled under the chute. Boxes, crates, and burlap sacks stacked haphazardly.",
  prompts: [
    "<strong>Paint the Scene:</strong This space is cluttered with the belongings of long-dead Hunters who used to live in Hargrave House. One such Hunter amassed quite a collection of documents, artifacts, and evidence while investigating the mystery that ultimately consumed them. What did they leave behind?",
    "Lady Adrienne Shea moved through London high society for decades without anyone ever suspecting she was a Hunter. Which of her abandoned belongings suggest reports of her death have been greatly exaggerated?",
    "The British Museum has been sending letters to Hargrave House regularly, insisting on the return of a particular relic found here. What is it and why must it never leave the basement?",
    "Hargrave House associate Vaughan McEwan’s collection of rare and unusual music boxes is coated in a thick layer of dust, but one of the Hunters saw Vaughan come through Hargrave House just this month. What about that brief encounter suggests Vaughan knew their end was nigh?",
  ],
  onUnlock: {
    text: [
      "Special: The Hunters do not add items directly to their Personal Quarters at the conclusion of this Room; rather, they are added to the lines below.",
      "Whenever you rummage through the items stored in the basement, roll with Reason.",
      "<li><strong>On a hit,</strong> you may exchange an object from your Personal Quarters for an object previously stashed here; move a stored item to your Personal Quarters and vice versa.</li>",
      "<li><strong>On a 10+,</strong> you also stumble on a long-forgotten object that is a Clue for an active Threat. Tell the Keeper what it is. The Clue cannot conclusively answer a Question by itself.</li>",
      "<li><strong>On a miss,</strong> you have a stifling sense that your end is nigh. Cross off an item from your Personal Quarters now—and every Dusk Phase hereafter—as you feel compelled to archive your possessions for posterity. When you have no items remaining in your Personal Quarters, retire this character to a sudden and inexplicable disappearance.</li>",
    ],
    extraLines: 5,
  },
}

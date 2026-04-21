import type { RoomContent } from "../../types";


export const threeCrownsContent: RoomContent = {
    title: "The Three Crowns Room",
    intro: "A trapdoor concealed beneath a threadbare Axminster carpet leads to a narrow, sloping passage of jagged rock. The air is stagnant and cold. In the dark tomb below, three crowns rest upon an unadorned stone altar.",
    prompts: [
        "1801: Former Hunter James Paxton-Vaughan did not uncover the Three Crowns Room through luck or honest means. His obsession with these elusive treasures drove him to unspeakable acts. <strong>Paint the Scene:</strong> What remnants of his crimes linger in this tomb?",
        "The first crown: Twisted gold, still smudged with blue woad paint, worn by a queen on a blood-soaked battlefield. This crown called to Paxton-Vaughan from its throne in the tomb, promising victory over a threat—for a cost, in blood. What horrifying and excessive mutilations did Paxton-Vaughan inflict on his victims to pay this price, and how did he revel in their suffering?",
        "The second crown: A gnarled wreath cut from the world tree, lost during the frenzy of the Wild Hunt. It whispers relentlessly, offering visions of the sprawling branches of the future, the tender fruits of destiny. What harrowing sacrifice of his own bloodline did Paxton-Vaughan make to obtain this power?",
        "The third crown: A broken fragment from the colossal skull of an old god, offering the temptation of ancient secrets and forbidden wisdom. What part of himself did Paxton-Vaughan sacrifice for this transcendence, and in what inhuman ways did the knowledge twist his mind and body?",
    ],
    onUnlock: {
        text: [
            "When you <strong>wear one of the Three Crowns,</strong> take the Condition <strong>Blessed by the Crown</strong> and roll with Sensitivity. ",
            "<strong>On a 10+,</strong> invoke one of the following at any time while you bear both the crown and its blessing. When you do, change the Condition: Blessed by the Crown to Cursed by the Crown. You may clear this Condition and remove the crown only by destroying another person. ",
            "<li>An automatic 10+ on a Night Move when facing a Threat or Danger.</li>",
            "<li>After a missed roll, narrate how the Crown showed you this future and how you made preparations to avoid it. The roll is now a 10+.</li>",
            "<li>A Clue for any Threat and a Mastermind Clue. Tell the Keeper what they are; they cannot conclusively answer a Question.</li>",
            "<strong>On a 7-9</strong>, invoke one of the following at any time while you bear both the Crown and its blessing.  When you do, change the Condition: Blessed by the Crown to Cursed by the Crown. You may clear this Condition and remove the crown only by destroying someone you care about.",
            "<li>An automatic 7-9 on a Night Move when facing a Threat or Danger.</li>",
            "<li>After a missed roll, narrate how the Crown showed you this future and how you made preparations to avoid it. The roll is now a 7-9.</li>",
            "<li>A Clue for any Threat. Tell the Keeper what it is; it cannot conclusively answer a Question.</li>",
            "<strong>On a miss</strong>, describe the incomprehensible horrors the crown shows you, and narrate how the knowledge destroys you physically. This character is now retired.",
        ],
    },
}
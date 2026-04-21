import type { RoomContent } from "../../types";


export const belltowerContent: RoomContent = {
    title: "The Bell Tower & Parapets",
    intro: "Narrow spiral steps ascend beneath a bell which never rings. Wrought-iron fencing lines a winding pathway over a precariously steep roof. Flying buttresses and jagged peaks jut at unsettling angles. Gargoyles keep watch from the parapets, sheltering small creatures in their teeth and claws.",
    prompts: [
        "<strong>Paint the Scene:</strong> Hargrave House is a Pandora’s box of strange architectural choices, but some of the more bizarre elements are hidden in plain sight at its pinnacle. What unlikely feature or embellishment has been added to the rooftop? What surprising views of the city are only possible from this vantage point?",
        "In a generation before yours, one afflicted Hunter—more beast now than human—is ready to retire from Hargrave House. His companion has carried him here in secret, as promised. What final, tender words do they exchange before parting? As he surrenders control of his human self for the last time, what shape does he take that frees him to roam this secret world above?",
        "The Hunter returns here with friends—bright-eyed birds, spectral followers, and a growing horde of cats. They watch impassionately as countless dramas unfold below. One human story in particular seizes the heart of the former Hunter—someone from his former life, now in grave danger. How does he try to warn them, without human speech? How does he ultimately fail?",
        "Moonlight washes over the rooftop, making a celestial temple of its grotesque and twisted features. Hundreds of cats have gathered in silent witness, their flicking tails like lapping waves. At their center lies the Hunter, chest gently rising and falling as the moon draws closer, filling his vision until he is still at last. The court honors their king, who lived a thousand lives and now lives on through them, prowling dark paths with eyes aflame. What small treasures do they lay upon him as a funeral offering?",
    ],
    onUnlock: {
        text: [
            "Hereafter, when a Hunter <strong>takes to the rooftops of London during a London Night Phase,</strong> they may mark an unmarked box below.",
            "<check>Describe the night sky over London, as the fog clears before you. Does the sight of the glittering void fill you with wonder or dread? This acts as an omen; record it in your Personal Quarters.</check>",
            "<check>Narrate a scene where you feed the cats a rich delicacy they have never tasted before. Gain the Condition: Followed by Cats. When you face grave peril, you can clear this Condition to reveal how the cats appear in the scene to warn you of danger, allowing you to escape unharmed.</check>",   
            "<check>Narrate a scene where you rest in silence as the cats gather around you, then clear a relevant Condition. If you have the Condition Followed by Cats, a gift is also dropped in your lap in the form of an animal carcass, or a piece of something dead—ask another Hunter what it is. This counts as a Clue for any active Threat.</check>",
            "<check>You find a Fine Brass Spyglass left by a previous Hunter; add it to your Personal Quarters.</check>",
            "<check>You have discovered a secret path across the rooftops of London, established by a previous Hunter. Choose any Location within the city. From now on, when you narrate a montage showing your swift and graceful traversal of the rooftops, you reach that Location undetected and have the element of surprise; make your next roll with advantage.</check>"
        ],
        inlineChecks: 5,
    },
}
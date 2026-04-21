import type { RoomContent } from "../../types";


export const artistContent: RoomContent = {
    title: "The Artist's Studio",
    intro: "What first feels like a draft becomes an unnatural chill, but it passes. The faint smell of turpentine and expired paint. A single chair, facing the back of an easel and a blank canvas.",
    prompts: [
        "In the early 1800s, Christian Hawkins is known for his vivid illustrations of strange crime scenes and monstrous activity. In his spare time, he paints the portraits of Hargrave House’s other Hunters in this studio, several of which still hang throughout the House. <strong>Paint the Scene:</strong> Describe one of the scenes he’s depicted, and what his artistic eye sees in it that no one else can.",
        "The year is 1815. One of Hargrave House’s fiercest fighters is sitting for her portrait. What otherworldly force gives her strength, and how does Christian reflect that in her image? While painting her, how does Christian almost reveal that he is enamored with her?",
        "Three years have passed. A breathtakingly handsome Hunter is sitting for his portrait. While most people see only his noble features, what subtle detail in the painting reveals its subject as a monster passing for human? As Christian works, how can we tell that just a few years at Hargrave House have changed him, Christian, irrevocably?",
        "The year is 1824. Christian is dying, and commits his final moments to a self-portrait. Describe the ritual in which he is able to capture not just his own image, but his soul, in this room.",
    ],
    onUnlock: {
        text: [
            "If you were absent during the previous session of play, you may <strong>declare that your Hunter spent that time sitting for their portrait in the Artist Studio</strong> (you can only do this once). If you do, you add A Portrait by Christian Hawkins to your Personal Quarters. As long as the item remains unmarked, when a mental or spiritual Condition would give you disadvantage, you may invoke your portrait instead; describe the hidden strength, captured by Christian’s artistic eye, that negates the Condition—then remove both the Condition and the portrait from your sheet.",
        ],
    },
}
import type { RoomContent } from "../../types";


export const galleryContent: RoomContent = {
    title: "The Gallery",
    intro: "A massive floor-to-ceiling painting featuring dozens of people, each in vastly different attire but the same exquisite agony, takes up an entire wall. A single uneven pinewood chair sits facing the artwork. The screams of those depicted emanate from the canvas, just beyond what the human ear can perceive.",
    prompts: [
        "The painting’s subjects were drawn into the canvas after gazing upon it too deeply, depicted in a manner drawn from the fears of the painting’s latest victim. <strong>Paint the Scene:</strong> What horrors would befall the painting’s subjects if you, too, were consumed?",
        "The year is 1623. The painting rests in a remote wood cabin, portraying a gaunt young man slowly being turned inside-out by a strange contraption. A palette and brush stained with otherworldly pigments lay strewn on the floor before it. What evidence remains of the supernatural creature harvested to create the paints used in this gruesome work of art?",
        "The year is 1756. The painting has been sent anonymously to Hargrave House resident Erasmus Scrivens, a former infantryman of the British Army. He removes its protective sheet to see ten people boiled alive in a massive stewpot, overseen by the cackling visage of a giant crone. What detail does Erasmus notice that makes him unable to look away, causing him to become the painting’s next victim?",
        "The year is 1848. The sorceress Violet Jardine—a nemesis of Hargrave House and leader of the Society of Unending Night—sits tied to an uneven pinewood chair, her eyes forced open by four finger-shaped mechanisms. The painting before her depicts thirty-three people being flayed alive by a demon, their innards pecked bloody by crows. As she becomes the painting’s thirty-fourth victim, how does the image change to show her deepest fear?",
    ],
    onUnlock: {
        text: [
            "When you make a Side Character stare at the painting, roll with Composure.",
            "<strong>On a 10+,</strong> the painting claims a new victim. Describe how the painting changes to show the Side Character’s deepest fears and swallows them into itself.",
            "<strong>On a 7-9,</strong> as above, but you catch yourself being consumed by the painting just before it claims you, too. Take the Condition Drawn to the Painting.",
            "<strong>On a miss,</strong> the painting claims you both. Describe how the painting changes to incorporate both yours and the Side Character’s deepest fears before swallowing you both into itself. This character is now retired.",
        ],
    },
}
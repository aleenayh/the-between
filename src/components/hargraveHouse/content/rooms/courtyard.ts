import type { RoomContent } from "../../types";


export const courtyardContent: RoomContent = {
    title: "The Whispering Courtyard",
    intro: "Open to the sky, lined with ivy-trellised walls and low marble benches. Billowing nets suspended above keep birds out. One of the four walls, concave and smooth, provides an acoustic mystery: sounds and voices of unknown provenance can be heard here.",
    prompts: [
        "<strong>Paint the Scene:</strong> The odd overheard conversations reflected by the whispering wall are treated as voyeuristic amusements by residents of Hargrave House, who sometimes take smoke breaks here. What fragments of conversations have been memorable enough to share, delicious as rare gossip?",
        "August, last year. A member of staff is dismissed, having been caught in flagrante delicto, using the wall to share an intimate moment with an anonymous and amorous sweetheart. How do they plead their case, once discovered?",
        "April, this year. A voice claims to be from the future, eager to help the Hunters by consulting future newspaper archives for insight into enemies Hargrave House has yet to encounter in the present. It turns out to be a ruse. What gives away that this 'time wizard' is a fantasist (and a terrible liar), and how are they forced to make amends?",
        "This week, a mason is hired to patch the wall with brick and thereby put a stop to the phenomenon. What voices whisper in their ear as they work, and what horrible crime are they convinced to commit instead of finishing the project?",
    ],
    onUnlock: {
        text: [
            "When you <strong>stand listening to the Whispering Courtyard's captured sounds of the city,</strong> roll with Sensitivity. On a 10+, you'll overhear something related to a current Threat; the Keeper will provide a Clue. On a 7-9, a voice from the future will whisper a Clue for a Threat not yet introduced. Take the Condition <strong>Touched by the True Time Wizard.</strong> On a miss, you'll hear something hostile, unwelcome, and persuasive. Prepare for the worst."
        ],
    },
}
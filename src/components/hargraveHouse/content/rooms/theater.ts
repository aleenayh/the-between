import type { RoomContent } from "../../types";


export const theaterContent: RoomContent = {
    title: "The Theater",
    intro: "Black velvet curtains drape the stage like a mourning veil. Alabaster angels perch atop the proscenium arch, cherubic faces carved in silent lamentation of the tragedies unfolding below. The air crackles with otherworldly echoes: ghostly murmurs, snatches of song, the low rumbling of distant applause.",
    prompts: [
        "This small private theater is never dark, and never empty. A single gas lamp—the “ghost light”—is left burning to illuminate the unseen dramas of the phantoms haunting the stage. Unlike mortals and their fragile frames, the ghost light never dies. <strong>Paint the Scene:</strong> In what small, superstitious ways do Hunters try to placate the theater’s restless spirits?",
        "1594, Wesley Fryth—a Hargrave House resident and no stranger to the Elizabethan stage—was killed in the course of the hunt. His brother Lyle, overcome by grief, came to the theater to end his own life. Perform, with mounting horror and sorrow, a selection from Lyle’s soliloquy about the terror of solitude.",
        "1761, ingénue Isabeau Charlet died backstage in her lover’s embrace. She gave everything to him—including her life—as a show of ultimate devotion, her faithful heart pumping its last onto the ruffles and silks of their half-doffed costumes. Perform, with lust and longing, a selection from her soliloquy about the ecstasy of love.",
        "1838, Hunter and amateur dramatist Horatio Branscombe died unceremoniously, the victim of a prop gun mishap during a performance of his autobiographical play. He delivered his last words with a disbelieving grin: “How funny.” Perform, with humor and brio, a selection from his soliloquy about the cruelty of fate.",
    ],
    onUnlock: {
        text: ["Each Dawn Phase, a single Hunter may <strong>deliver a soliloquy onstage in the Theater</strong>, inspired by one of the themes below. Their words are heard by no one except for the ghosts and the audience of players at the table. When the curtains close, the Hunter marks 1 XP. If they also take the Condition <strong>Dramatic,</strong> they may define a Clue for an active Threat related to their soliloquy’s theme; as always, this Clue cannot conclusively answer a Question by itself.",
            "<li>The terror of solitude</li>",
            "<li>The ecstasy of love</li>",
            "<li>The cruelty of fate</li>",
            "<li>The comfort of death</li>",
            "<li>The lure of darkness</li>",
        ],
    },
}
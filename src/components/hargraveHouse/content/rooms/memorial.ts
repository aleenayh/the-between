import type { RoomContent } from "../../types";


export const memorialContent: RoomContent = {
    title: "The Memorial Room",
    intro: "This airy room has walnut panelling and floors, with large windows providing plenty of natural light. Portraits line the walls, and pedestals and shelves bear personal belongings: a dagger carved from the fang of some huge beast, a gilded mirror reflecting events from five seconds in the future, an ornate music box that plays a song no human ear can detect but which evokes intense melancholy. Items of clothing are equally on display: a flowing silk dress as resilient as steel, a ruffled shirt stained with the blood of a fairy king, a pitted iron helm of Saxon design, rumoured to have been worn by Beowulf himself. Each portrait or item is accompanied by a small plaque bearing the name of a former Hunter and a short description of how they fell in the line of duty.",
    prompts: [
        "<strong>Paint the Scene:</strong> You knew some of the Hunters commemorated here personally—fought alongside them, shared meals or a bed. Which fallen Hunter do you miss the most, and which of their possessions displayed here symbolizes them best?",
        "Ophelia Grace, a seer and purported witch, was a Hunter in Hargrave House in the 1790s. Her gruesome death is still spoken of to this day. What was she hunting and how does it echo one of the Threats faced by the current generation of Hunters?",
        "Narrate a scene in which Miss Grace tracks down her quarry and comes up with what she believes is a foolproof plan to defeat it.",
        "Continue the scene as Miss Grace realises too late that she has made a terrible mistake. Make it bloody and brutal—the kind of death that goes down in history. ",
    ],
    onUnlock: {
        text: ["By examining the memorials, the Hunters may be able to learn from the mistakes of the fallen. <strong>Once total per session, when death is on the line,</strong> a Hunter gets advantage on an associated roll by narrating how a fallen Hunter met their fate in a similar situation, and how they avoid that fatal error."],
    },
}
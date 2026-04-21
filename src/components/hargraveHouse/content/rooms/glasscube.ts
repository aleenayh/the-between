import type { RoomContent } from "../../types";


export const glasscubeContent: RoomContent = {
    title: "The Glass Cube Room",
    intro: "A large glass cube the size of a prison cell sits in the center of the room, lit internally by a bright and unseen source. A row of theater chairs surrounds the cube on all sides. Light dances on the room’s deep maroon wallpaper, revealing geometric patterns inlaid in gold.",
    prompts: [
        "<strong>Paint the Scene:</strong> The glass cube has been confined to Hargrave House for many years due to its otherworldly nature. What about the cube shows that it is not of this world?",
        "The year is 1824. Charles Babbage—philosopher, mathematician, and Hargrave House associate—has taken an academic interest in the cube. What meticulous and scientific methods does Babbage employ in his investigation of the cube? What unsettling reaction does the cube exhibit in response to this experimentation?",
        "As Babbage notes his findings, the cube begins to vibrate, shaking the entire room. Babbage stops his work, staring in awe at the cube. How can we tell the cube is, at this moment, probing his psyche?",
        "Babbage’s pen hand resumes scribbling notes—though his eyes, unblinking, remain fixated on the cube. After some hours, he collapses to the floor and the cube goes still. The words “Difference Engine” have been written over and over again in his notebook alongside a multitude of mathematical equations. When Babbage eventually wakes, how do we know the cube has taken more from his mind than it gave him?",
    ],
    onUnlock: {
        text: [
            "When you seek the cube’s counsel, speak your query and roll with Sensitivity.",
            "<strong>On a 10+,</strong> the cube provides. The Keeper will answer your question fully and truthfully, or in the form of a Clue, your choice. In addition, narrate a brief scene showing the cube altering a marked item from your Personal Quarters. Unmark the item and change its text to reflect this.",
            "<strong>On a 7-9,</strong> as above, but the cube gazes back. Do not alter an Item from your Personal Quarters, and instead take the Condition Probed.",
            "<strong>On a miss,</strong> the cube takes more than it gives. Cross out the next unmarked box on the Mask of the Past; it is no longer available as the cube steals the memory from you. If no unmarked boxes remain on the Mask of the Past, you must mark the Mask of the Future.",
            "<strong>On a 12+,</strong> the cube gives you more than you asked for. Detail a Mastermind Clue based on the question you asked.",
        ]
    },
}
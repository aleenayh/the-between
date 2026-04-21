import type { RoomContent } from "../../types";


export const mirrorContent: RoomContent = {
    title: "The Mirror Room",
    intro: "A seemingly boundless chamber covered in mirrors from floor to ceiling. Reflections warp and dance through a kaleidoscopic void. A simple glass chair holds dominion in the center of the room.",
    prompts: [
        "In 1851, Hunter Montrose Dumani, a nearly seven-foot tall former Imperial serviceman from Kashmir, used this room for solitary reflection. He studies the blood stains on his clothing, trying to come to terms with the harm he has caused in order to protect the innocent. What visions taunt him from the mirrored walls?",
        "In 1833, two Hunters make a habit of meeting in the mirror room for their steamy afternoon rendezvous. In one encounter, as the two struggle for dominance, a ghoulish and emaciated figure stumbles out from one of the many mirrors. A dusty wig and blue velvet tatters cling to its ragged body. What confused dying words does the horror splutter in French before it expires?",
        "In 1796, Miss Butterson was hired by one of the more affluent Hunters to clean and dust the place. While wiping down the reflective chamber, her mind drifts and she finds herself in a hall of mirrors. How long does she aimlessly wander and in what surprising place, far from Hargrave House, does she end up?",
        "In 1677, Enrico Feramigni—a brilliant inventor from Venice—discovers a circular stone chamber with one wall completely covered by mirrored glass. Seeing no feasible way the mirror could have been attached to this wall, Enrico places his hand on the ice-cold surface. What does it show him that compels him to add more mirrors to this room?",
    ],
    onUnlock: {
        text: [
            "When you <strong>step through a mirror to traverse the Halls of Reflection</strong>, declare the location you desire to reach (it must reasonably contain a mirror). Roll with Sensitivity. ",
            "<strong>On a hit,</strong> you emerge through a mirror in your intended destination.",
            "<strong>On a 7-9,</strong> as above, but you see disorienting and disturbing visions on your journey. Take the Condition: Cracked. This Condition can only be cleared by performing the Vulnerable Move, alone, in the Mirror Room. If you are already Cracked, put on a Mask. ",
            "<strong>On a miss,</strong> you are lost and left to wander; at a moment of the Keeper’s choosing, the Halls will shunt you to an unexpected and inopportune location. ",
        ],
    },
}
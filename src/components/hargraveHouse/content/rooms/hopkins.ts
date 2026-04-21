import type { RoomContent } from "../../types";


export const hopkinsContent: RoomContent = {
    title: "The Matthew Hopkins Room",
    intro: "The room is named after Matthew Hopkins, England’s self-proclaimed Witchfinder General and former resident of Hargrave House. Wooden shelving is built into faded yellow walls, and filled with various trophies from demons and witches vanquished. The furniture is sparse, allowing very little comfort. Smooth indentations in the hardwood floors suggest this was a place of constant penance.",
    prompts: [
        "<strong>Paint the Scene:</strong> From 1644 to 1647, Matthew Hopkins and his colleague, John Stearne, regularly put their fellow Hunters’ faith to the test. How do they attempt to sniff out devilry and witchcraft in Hargrave House? What implements of the task do we see scattered across his room?", 
        "The Witchfinder General is known to have a bit of a sweet tooth, and Stearne is always willing to provide his employer whatever he requests, to his detriment. How does Hopkins ensure, despite his associate’s indulgence, he will never give in to a single delectable, sugary treat?",  
        "Hopkins keeps the talking head of Miss Pursemint, a wily hedgewitch from a village to the southeast of London, preserved in a glass jar. One of Stearne's many duties as Hopkins’ assistant is to document her tirades. In life, how did Miss Pursemint help those in need? In death, how does she lead Hopkins and Stearnes astray?",
        "After a long day of exorcising demons and purging the innocent, Hopkins embraces Stearne in lustful entanglement. How will tortured spirits, the victims of Hopkins’ hypocrisy, later take their revenge in ways he won’t forget until his dying day?",
    ],
    onUnlock: {
        text: ["The Hunter with the highest Composure (or whomever the Keeper chooses in the case of a tie) discovers the Stave of the Witchfinder General (nondescript, well-tended and worn, shudders in the presence of the profane), adding it to their Personal Quarters. During the Vulnerable Move, this item may be freely exchanged between Hunters.",
"You always roll with Composure when you <strong>clutch the Stave in order to hold fast against dark entities,</strong> resisting fear and temptation. You may also mark a box below to increase the result of your roll by one success tier, as if you had put on a Mask. When all boxes have been marked, the Stave splinters and turns to ash in your hands."],
checks: 3,
    },
}
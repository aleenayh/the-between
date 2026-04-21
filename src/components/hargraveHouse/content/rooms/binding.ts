import type { RoomContent } from "../../types";


export const bindingContent: RoomContent = {
    title: "The Binding Room",
    intro: "A high vaulted, circular chamber permeated with the scent of old incense, sweat, and charred flesh. Hundreds of bells and charms hang motionless overhead. A shallow moat of running water forms an outer perimeter, with prayers of different faiths inscribed along the walls. At the center, a magnetic presence seems to draw your attention to an intricate chalk sigil on the pocked stone floor.",
    prompts: [
        "<strong>Paint the Scene:</strong> Many foul entities have been bound in this circle before, some at great cost. How can you tell that some of them nearly broke free?",
        "A time before the foundations of this house were laid. A single figure crouches amidst the scorched ruins of a temple, gazing defiantly up at a smoldering pillar of shadow and flame. What do they demand of it, and how does it transform them?",
        "The year is 1622. The binding chamber is newly completed, and Brother Ignatius, a seasoned demon hunter, tests its capacities while his companions assist. Describe the entity they bind within the chamber and how it tempts each of them to turn against one another.",
        "Brother Ignatius has been returning to the chamber in secret, enthralled by the intoxicating knowledge the demon whispers to him. His resolve gives way as the demon compels him to break the binding and free it. Describe how the remaining Hunters of Hargrave House, sensing something amiss with their companion, intervene just in time to prevent this—but not without cost. How are they each changed by the ordeal? ",
    ],
    onUnlock: {
        text: [
            "Hereafter, the Binding Room can be used to imprison a single demonic entity at a time. Once bound here, it cannot escape unless a Hunter releases it or rolls a miss when attempting to command it.",
            "<i>Note: the Keeper should interpret the term “demon” loosely, as various supernatural entities may be interpreted as such by different cultures, and the true nature of an entity may not become apparent until resolving a Threat. If the entity is supernatural, malevolent, and powerful, the Binding Room may be used to contain it.</i>",
            
            "<strong>Binding an Entity</strong>",
            "When you attempt to bind an entity within the circle, make any associated rolls with advantage. ",
            "<strong>Paint the Scene:</strong> What supplies or features of the Binding Room aid you in the ritual? How do you lure the entity here or invoke it by name? How do you protect yourself from its influence? Describe the ritual that binds it in place so it cannot escape.",
            
            "<strong>Commanding an Entity</strong>",
            "When you command an entity bound within the circle, roll with Presence. If the entity was bound here as part of the resolution of a Threat, roll with advantage. ",
            "<strong>On a 7-9,</strong> choose 1. <strong>On a 10+,</strong> choose 2. ",
            "<li>The entity will answer a single question to the best of its ability, truthfully but incompletely. This counts as a Clue.</li>",
            "<li>The entity grants a supernatural boon. Take the Condition: Touched by [entity name]. Until the next Dawn Phase, this Condition cannot be cleared, and you roll with advantage using a single ability of your choice. </li>",
            "<li>You manage to shield your mind from the terrifying revelations hiding in the entity’s words, and avoid revealing an unwelcome truth to the entity that it will leverage against you. </li>",
            "<strong>On a miss,</strong> you have grossly overestimated your abilities, and fall under the sway of the entity. Take the permanent Condition: Servant of [entity name]. You roll with advantage when committing acts of violence or subterfuge in service of the entity. You also gain an additional Dawn question, which is always marked: Did you make a worthy sacrifice to please your master? If you are unable to answer “Yes” to this question, retire this character and narrate how they are ultimately consumed or destroyed by the entity.",
        ],
    },
}
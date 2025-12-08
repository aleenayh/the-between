export type ShrineType = "guilded" | "mud" | "futility" | "empty";

type ShrineDetails = {
    fullName: string;
    description: string;
    prompts: string[];
    rewards: string[];
}

export const shrineDescriptions: Record<ShrineType, ShrineDetails> = {
    guilded: {
        fullName: "The Guilded Shrine",
        description: "In the time of the Old Fire, great wealth could build walls higher than accountability, and some believed gold alone could hold back the end. By praying at this shrine, you recall a wealthy merchant—his true name long devoured by the Dimning—whom we shall call Lord Mercival, master of a prosperous castle-town. When the Dimning crept across the land like a slow eclipse, Mercival sealed his gates, gathered the wealthy and the favored, and vowed to outlast the darkness with revelry.",
        prompts: [
            "Lord Mercival stands atop his castle walls, watching the first signs of the Dimning coil through the lowlands. Narrate a flashback showing how he orders the gates sealed, refusing refuge to the desperate masses outside. What excuses does he give his guards? What cruelties or comforts convince the wealthy within that safety and pleasure are theirs by right?",
            "Inside the castle, the feasting begins. Narrate a montage of revelry: rich fabrics swaying in torchlight, platters of fruit and sugared meats, music loud enough to drown out the screams below the walls. What luxury becomes grotesque in the face of the Dimning? What guest whispers the first fear that something is wrong inside the walls too?",
            "The Dimning slips past the gates. Narrate a flashback showing its first touch inside the castle. How do the revelers deny what is happening? What lie does Lord Mercival tell to keep the party going?",
            "The Dimning overtakes the castle entirely. Narrate a flashback to the revelers’ downfall. Does Mercival try to bribe the darkness with gold, or face it with hollow dignity? How does decadence become terror?",
        ],
        rewards: [
            "The Ember who marked Cinder adds the Gilded Seal to their Equipment.",
            "All others add an Aspect to one of their Relics, inspired by something from the Remembrance.",
            "Gilded Seal: A heavy signet once used to ▢press wax onto decrees of wealth and denial. Holding it ▢recalls hollow splendor and the walls people build around themselves."],
    },
    mud: {
        fullName: "The Mud Shrine",
        description: "In the time of the Old Fire, many small folk made their living along the banks of the Great River, and the river provided: fish for eating, reeds for building, a dependable artery of trade throughout the lands, and much more besides. The people who depended on the Great River were called “mud men” or “mud folk,” titles they bore with no shame. By praying at this shrine, you recall a family of mud folk, names lost to time—how they lived… and how they died when the Dimning came.",
        prompts: [
            "A family, who we shall know as Mother, Father, Son, and Daughter, has made a life on the Great River for countless generations. Narrate a montage of scenes in flashback showing how, although their lives on the river are hard, they are bountiful. How does the family’s work draw them closer together? Why do they find no shame in being called “mud folk?” ",
            "Daughter is the first member of her family to glimpse the Dimning, which came to the mud folk in the guise of the Great River itself. Narrate a flashback showing this moment. How did the Great River change to reflect the coming of the Dimning? Why does Daughter think the Great River might be a creature of the Dimning rather than the Old Fire? ",
            "The Dimning first struck the family in the form of tragedy. Narrate a flashback showing how one member of the family was lost to the Great River. How did the family cope with the loss? How did they know they would each eventually succumb to the Dimning? ",
            "Narrate a flashback to the family’s end. What did it look like when the Dimning claimed them for good?",
        ],
        rewards: [
            "The Ember who marked Cinder adds the mud bundle to their Equipment.",
            "All other Embers add an Aspect to one of their Relics, inspired by something from the Remembrance.",
            "Mud bundle: A collection of tools commonly found among the mud men during the time of the Old Fire, including ▢a well-made fishing rod, ▢a collapsible boat large enough for one person, and ▢a jar of mud poultice infused with the spirit of the Great River."
        ],
    },
    futility: {
        fullName: "The Shrine of Futility",
        description: "Elgoreth the Archwizard was a beacon of power and wisdom, feared and revered in equal measure. From the heights of his silver tower, he read the movements of stars, storms, seasons—and was among the first of the learned to sense the Dimning’s slow approach. By praying at this shrine, you recall the final days of Elgoreth’s vigil, when many believed he alone could hold back the end.",
        prompts: [
            "Elgoreth ascends to the tower’s peak. Narrate a flashback showing how he first perceives the Dimning’s approach. What sign convinces him that the world stands at the brink, and that he must act?",
            "The wizard prepares his defense. Narrate a flashback showing Elgoreth gathering power—rituals, sigils, storms, or strange energies—to turn back the Dimning. What awe or terror do his followers feel as they watch him work?",
            "The Dimning arrives. Narrate a flashback showing how Elgoreth’s great magic meets the Dimning’s force. What moment reveals that even his strength, brilliant and terrible as it is, cannot halt what is coming?",
            "Narrate Elgoreth’s end. How does the Dimning claim him, and what becomes of his tower when his last spell falters?",
        ],
        rewards: [
            "The Ember who marked Cinder adds the Staff of Elgoreth to their Equipment.",
"All others add an Aspect to one of their Relics, inspired by something from the Remembrance.",
"The Staff of Elgoreth: A walking staff made of gnarled wood, shot through with veins of silver, gold, iron, and glass. It can  ▢raise a magical barrier,  ▢call down lightning, and  ▢turn its wielder invisible for a short time."
        ],
    },
    empty: {
        fullName: " ",
        description: "",
        prompts: [],
        rewards: [],
    },
};
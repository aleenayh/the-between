import type { RoomContent } from "../../types";


export const waxContent: RoomContent = {
    title: "The Wax Room",
    intro: "Ancient stone walls, cracks sealed with golden wax. Bundles of dried herbs and animal parts hang over a heavy oak work table covered with simple tools, healing supplies, and dozens of miniature cups and saucers. An engraving hangs over the hearth—a cave with a wrought-iron gate, figures waiting at the entrance. In the corner, silent and shrouded on a pale rocking chair, the waxwork figure of Mother Ludlam holds court.",
    prompts: [
        "<strong>Paint the Scene:</strong> Mother Ludlam, also known as the Surrey Witch, was equally beloved and feared according to legend. What miracle or curse have you heard associated with her name? How have previous Hunters made an effort to make her feel welcome in Hargrave House?",
        "The year is 1643. A man in priest’s robes stands at the entrance to Mother Ludlam’s cave, the same one depicted in the engraving. He asks to borrow her cauldron to brew a healing draft for the sick villagers. How can we tell that he is no priest, but a witch hunter in disguise trying to lure Mother Ludlam out?",
        "The witch hunter returns home empty handed, only to find the requested cauldron waiting in his room. How does he attempt to get rid of it and how does it return, more insistently each time? Describe how the witch hunter grows desperate in his attempts to deceive the witch and avoid repaying Mother Ludlam for her gift. What tragic, grisly death befalls him as he flees the wrath of the Surrey Witch?",
        "A mob of armed assailants and church hirelings clashes violently with village folk at the entrance to Mother Ludlam’s cave. How do the villagers hold their own, despite a lack of arms or formal training? In the torchlit carnage that ensues, describe how representatives of Hargrave House are able to slip past and escort Mother Ludlam to safety.",
    ],
    onUnlock: {
        text: [
            "Hereafter, each time you return to the Wax Room, the figure of Mother Ludlam has moved since you last saw it. <strong>Paint the Scene:</strong> How does Mother Ludlam’s pose reflect her feelings on the recent actions of the Hunters?",
            "When you <strong>borrow an item from Mother Ludlam,</strong> you must stand alone at the entrance of The Wax Room and beseech her to lend you one of her belongings. You must continue to make your case to the silent wax figure, until the Keeper knocks to indicate that your request is granted. Add an item from the list to your Personal Quarters, and take the Condition: <strong>Marked by the Witch.</strong> This Condition can only be cleared by returning the item.</strong>",
            "<li>A tarnished cauldron which brews potent healing drafts from any liquid.</li>",
            "<li>A beeswax figurine that crawls, listens, and gathers secrets.</li>", 
            "<li>A beast fang which extracts supernatural afflictions.</li>",
            "<li>A blackened, twisted branch that repels spirits.</li>",
            "<li>A lumpy, sweet-smelling tallow candle which attracts undead creatures.</li>",
            "<li>A tattered lace scarf which cloaks you in silence and shadows.</li>",
            "Mother Ludlam’s possessions are never marked, but their powers may trigger the Day or Night Move to use. You must return the item within two Night Phases, along with payment of a unique gift from your Personal Quarters. If you fail to do so, Mother Ludlam bursts from the Wax Room in a fury; replace Marked by the Witch with <strong>Pursued by the Witch.</strong> If Mother Ludlam touches you while you have this condition, your flesh turns to pale, rancid wax. You can only clear Pursued by the Witch by evading Mother Ludlam and hiding her possession in a place she cannot enter—circled by running water, in a temple, church or hallowed ground. You can no longer visit The Wax Room.",
        ],
    },
}
import type { RoomContent } from "../../types";


export const dragonContent: RoomContent = {
    title: "The Dragon Chapel",
    intro: "Wood panel paintings cover the chapel walls, depicting a telling of the legend of Saint George and the Dragon. When they were fresh, the paintings amplified the light of several candelabras, giving the room a light and pastoral feel. The paintings are now dingy and dull, the wood panels rotting and moldy.",
    prompts: [
        "Tonight, the Hunters are removing the unsalvageable wood from the paneled walls, revealing wrought iron Celtic knotwork beneath—part of a massively sculpted, serpentine body. <strong>Paint the Scene:</strong> How are the paintings clearly inferior works to even this small section of sculpture?",
        "Down comes the panel of the dragon demanding tribute from the ancient city of Silene. Down comes the panel of the city offering up their princess, chosen by lot. Down comes the panel of her arrival at the dragon’s lair, strangely dressed in bridal clothes. Near Silene, 278: The princess’s mind is made: she will cleave to the dragon to have her revenge on the city. Before Saint George comes to her rescue, what nuptial vows does the princess whisper to the dragon? ",
        "Down comes the panel of the dragon surrendering to Saint George. Down comes the panel of the princess leading the knight and leashed dragon into her city. Down comes the panel of the citizens of Silene contrite before the princess, the dragon, and a proselytizing Saint George. Silene, 278: How do the facades of the apparently thankful damsel and defeated dragon begin to crack under the sanctimony of Saint George’s preaching? ",
        "Down comes the final panel in the room, showing Saint George beheading the dragon as the city of Silene watches. The facades removed, the black body of a wrought iron dragon encircles the room. Where the dragon’s head would be sits a reliquary of glass and iron, housing the skull of the princess of Silene. Silene, 278: What ruin is wrought by the bride and her dragon that forces Saint George to behead them both? ",
    ],
    onUnlock: {
        text: [
            "Gain access to the following Mask, which counts as a Threat Mask for any Threat for the purpose of increasing the success tier of an Answer a Question roll.",
            "<check><strong>The Mask of the Bride:</strong> Each Hunter narrates a flashback to vows they whispered to something dangerous, and how they were almost embraced before someone inconvenient intervened to “rescue” them.</check>",
        ],
        inlineChecks: 1,
    },
}
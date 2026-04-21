import type { RoomContent } from "../../types";


export const fleshTerrariumContent: RoomContent = {
    title: "The Flesh Terrarium",
    intro: "No two descriptions of the Flesh Terrarium are the same. Some experience a glass case filled with writhing tissue, others a tangled mass of pulsing roots, or a rift into a dimension where time and flesh fold together in indescribable shapes. In the journals of past Hunters, it has been a garden, a nursery, a lover, a prison—but it is never empty.",
    prompts: [
        "1764: Longtime Hunter Francis Braddock finds a cavern inside Hargrave House containing an oscillating mass of bloodless flesh suspended within an immense glass bell jar. After studying the phenomenon, he claims it can grow replacements for what was lost, like a starfish regrowing an arm. What does he try to replace, and what is wrong with it when it comes back?",
        "1792: Isobel Hartley’s last known act is the obsessive carving of a sculpture from the vast slab of pulsing, living tissue that fills this room. What shocking secret about Hargrave House is laid bare in her magnum opus, and why does she vanish from the house before the work is done?",
        "1819: Evelyn Baxter spends months tending to a small meaty sprout as it grows immense, responding like a bonsai tree to her nurturing touch. One evening, Evelyn offers her body to it, not to nourish it but to know it intimately. What otherworldly life does she subsequently birth and how does Evelyn, now irrevocably changed, respond to her creation?",
        "1851: Novice Hunter Elias Vale stumbles upon a shimmering pool of liquified flesh, steaming and rancid. A slick, yellowish film of congealed fat sluggishly ripples over chunks of sallow gristle. What temptation does Elias see in the slurry, and how does the terrarium claim him?",
    ],
    onUnlock: {
        text: [
            "The Flesh Terrarium has shown you its secret, endless capacity for change. When you <strong>manipulate the flesh within the terrarium to reshape something broken, lost, or incomplete</strong>, roll with Sensitivity. ",
            "<strong>On a 10+,</strong> it regrows exactly as you wish. Describe how the new growth is an improvement over the original, at least for now. ",
            "<strong>On a 7-9,</strong> the transformation succeeds, but imperfectly. Describe the complication and ask the Keeper to narrate the scene, or vice versa.  ",
            "<strong>On a miss,</strong> the new form is shaped according to the desires of the Flesh, not your own. The Keeper will describe the horror that manifests.",
        ],
    },
}
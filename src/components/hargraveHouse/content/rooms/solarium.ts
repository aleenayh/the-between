import type { RoomContent } from "../../types";


export const solariumContent: RoomContent = {
    title: "The Solarium",
    intro: "Tall Palladian windows set in iron frames with a curiously distinct lack of right angles. Exotic plants spilling out from ornate flowerpots and amphorae. Cushioned salon chairs of banded mahogany, their upholstery embroidered with floral patterns that blend seamlessly into the environment. By light of day, an ancient bronze sundial keeps perfect time.",
    prompts: [
        "Londinium, mere days before the arrival of Boudica’s forces. Roman merchant Tullus Septimius entertains guests and luxuriates in his newly installed tepidarium. What does Tullus see or hear this sun-drenched afternoon that leads him to conclude he will not be leaving this bath alive?",
        "As the sun sets on the reign of King George IV, construction of the solarium at Hargrave House begins. The artisans steadfastly refuse to restore an ancient tile mosaic, original to the Roman baths that once stood here, that was damaged or perhaps purposefully defaced. What is it about even the remnants that so disturbs them?",
        "Glass panes are carefully slotted into place. Many are slightly curved, like lenses. Daylight is refracted into prismatic bands of color in unexpected sequences, some hues alien and wrong while others are missing entirely. What can be glimpsed in the back garden and the London cityscape beyond that suggests this is sunlight from another world?",
        "<strong>Paint the Scene:</strong> The solarium at Hargrave House debuted with an exclusive masquerade ball, gold-themed and gleaming in the breaking dawn. Guests arrive and set gifts around the sundial. Describe one such costumed celebrant and what they have brought.",
    ],
    onUnlock: {
        text: ["The Solarium is designed and furnished for relaxation and calm. When you <strong>lie still and let the sun burn away your troubles</strong>, mark an unmarked box below.",
            "<check>Name a Side Character, living or dead, from a resolved Threat. They stand outside, somewhat indistinct until they peer in and tap on the glass. How are they dramatically different from what you remember? They warn you of a Danger related to an active Threat. The Keeper will tell you what you learn. You may take rolls related to that Danger at advantage.</check>",
            "<check>Strange flowers have bloomed in the Solarium and sway as if jostled by a breeze only they can feel. Their vibrations form a discordant hum. What buried memories rise to the surface, beckoned by the strangely familiar song? Take the Condition: Attuned. This Condition can be cleared to make a roll using Sensitivity with advantage.</check>",
            "<check>Twin suns above cast pairs of shadows—or perhaps it is just an optical illusion. Unmark a Mask of the Past as you sort through two conflicting sets of memories, then take the Condition: Refracted. This Condition can never be cleared.</check>",
        ],
        inlineChecks: 3,
    },
}
import type { RoomContent } from "../../types";


export const seanceContent: RoomContent = {
    title: "The Séance Room",
    intro: "A long, polished table dominates the center, its surface warped in subtle ripples. High-backed chairs ring it evenly. Heavy curtains choke the windows, keeping the room in a perpetual twilight. The faint scent of ash and old perfume lingers.",
    prompts: [
        "<strong>Paint the Scene:</strong> The room is arranged with deliberate care, as if prepared for an important ritual. What detail suggests this was not the first séance held here, but part of an ongoing practice?",
        "1842: A renowned medium, Madame Isolde Varnay, is invited to Hargrave House to demonstrate her gifts to the Hunters. At what moment during the séance does doubt begin to give way to unease?",
        "1842 (later that night): The séance deepens. The table trembles, the lights dim, and something answers the medium’s call—but not in the voice expected. What is the first sign that the presence in the room is not the spirit they intended to contact?",
        "1842 (the breaking of the circle): Panic erupts. Someone lets go. The room responds violently—chairs overturn, the table lifts, the air itself seems to tear. What terrible act occurs in this moment that ensures the séance will never be spoken of openly again?",
    ],
    onUnlock: {
        text: ["When you attempt to contact spirits in this room, any associated rolls are taken with advantage. This effect can stack with other effects to grant double advantage (roll four dice and take the two highest). "],
    },
}
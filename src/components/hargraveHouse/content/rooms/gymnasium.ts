import type { RoomContent } from "../../types";

export const gymnasiumContent: RoomContent = {
    title: "The Gymnasium",
    intro: "A skylight running the length of the wooden floors. Gymnastic equipment, dumbbells, and white canvas pads. The tang of sweat, mildew, and chalk.",
    prompts: [
        "<strong>Paint the Scene:</strong> Framed daguerreotypes on the walls display aspirational physiques—belonging not to athletes or strongmen, but to monstrous predators. Describe one such daguerreotype. Are you motivated to train in order to hunt such creatures, or in order to be more like them?",
        "1836: Sir Gerald Trezevant-Bruce takes new Hunter Bertrand Zefars under his wing. How does their first competition in the gymnasium convince Bertrand he must train hard or become easy prey?",
        "1839: Sir Gerald and Bertrand’s every interaction at Hargrave House is strained—except for their training sessions. As Bertrand finally surpasses Sir Gerald tonight, what happens that destroys their capacity to work together?",
        "1844: Sir Gerald appears to offer a truce in the form of an athletic contest—in actuality, luring Bertrand to the gymnasium in order to murder him. By what means does Sir Gerald slay his now far superior opponent, and what horrors does Sir Gerald inflict on Bertrand’s corpse that convince the other Hunters he needs to be put down?",
    ],
    onUnlock: {
        text: [
            "<strong>When you trade verbal barbs with a fellow Hunter while training in the Gymnasium,</strong> you each take the Condition: <strong>Rivalry with [Hunter].</strong> You each may clear this Condition to take advantage on a roll if your action would frustrate your rival or prove your superiority.",
        ],
    },
}
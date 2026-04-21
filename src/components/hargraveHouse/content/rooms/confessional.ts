import type { RoomContent } from "../../types";


export const confessionalContent: RoomContent = {
    title: "The Confessional",
    intro: "A narrow, labyrinthian corridor of ancient stone leads to a confessional booth shrouded in suffocating darkness. Two red eyes ignite behind the lattice that separates penitent and confessor, the booth groaning under the weight of the towering skeleton that waits there, serpents coiling through its hollow rib cage. With its fiery gaze alone, it compels the supplicant to confess the truth, and judges accordingly.",
    prompts: [
        "1814: Etienne Laurent, French exile and Hargrave House Hunter, seeks out the confessional to unburden his conscience. A judge of the damned, the skeletal Adjudicator has delivered justice for centuries both in the underworld and above. <strong>Paint the Scene:</strong> As he peers into the shadows and the Adjudicator’s red eyes begin to glow, what does Etienne perceive that suggests its skeletal body once belonged to an ancient king?",
        "1829: Lynette “Lucky” Smythe is forced into the booth by her fellow Hunters, having been caught in a lie. What falsehood has she built her reputation on and what price does the Adjudicator demand in return for its silence—a price that will eat away at her more than any public disgrace ever could?",
        "1841: An unknown figure visits the confessional, battered and shivering. Not a Hunter, but their prey. Instead of confessing, the figure condemns, rasping a Hunter’s name to be put forth for judgement. How does the Adjudicator enact its swift, inescapable justice against the accused?",
        "1852: Sir Percival Campbell-White, an explorer of great renown and immense wealth, visits the confessional. Wracked with guilt for betraying his colleagues and beyond all hope of redemption, what punishment does he secretly wish the Adjudicator will enact—and what consolation does it offer instead? ",
    ],
    onUnlock: {
        text: [
            "When you visit the Confessional and reveal a shameful truth about yourself, your actions, or your feelings toward the other Hunters, roll with Sensitivity.",
            "<strong>On a 10+,</strong> take the Condition: <strong>Unburdened.</strong> You may clear this Condition at any time to gain advantage on a roll, narrating how your truthful confession has helped you.",
            "<strong>On a 7-9,</strong> as above, but the Adjudicator demands something from you for penance. If you do it, mark XP. If you refuse, take the Condition: <strong>Marked for Judgement.</strong>",
            "<strong>On a miss,</strong> the Adjudicator enacts justice upon you. Trigger the Night Move. Instead of naming what you are afraid will happen if you fail, name the punishment you believe is deserved for your transgression.",
        ],
    },
}
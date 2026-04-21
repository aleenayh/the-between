import type { RoomContent } from "../../types";


export const yellowGirlContent: RoomContent = {
    title: "The Yellow Girl Room",
    intro: "A small gilded chamber that seems more fitting for the palace of Versailles than it does 19th century London. Damask walls are barely visible behind dozens of framed portraits spanning generations of art movements, each featuring the same young girl in an elegant yellow silk day dress; Romanesque pedestals bear sculptures also made in her likeness. Chandeliers and candles flicker but never go out, no matter how much one tries to extinguish them.",
    prompts: [
        "In the year 1666, a hunter named Ludowicke Matthis is drawn to a strange room he did not know existed. As he tours this gallery devoted to the girl in sunshine yellow, he happens upon a painting depicting her as a solemn figure amidst a scene of chaos and catastrophe. What disaster does Ludowicke see in the painting, and how is he able to use his new knowledge as a means to avert it?", 
        "Ludowicke comes to realize that every artwork in this gallery is an omen of ill portent, and uses them to stop cataclysmic events from occurring. <strong>Paint the Scene:</strong> Describe one of the works in the gallery; what style and medium has its yellow-clad subject been rendered in, and what event does it portend?",
        "Ludowicke’s “prophecies” eventually gain him a reputation as a seer, as well as a flock of devotees he ministers to within Hargrave House. He returns to the gallery to find a new painting—one that sends his heart sinking into his stomach. It is a portrait of the girl and Ludowicke himself. What peculiar style is the portrait done in, and what horrible fate does Ludowicke see for himself?", 
        "Ludowicke abandons his followers and flees London to parts remote, thinking he’s made himself safe from the girl in yellow. Where does Ludowicke try to hide, and how does fate—and its golden harbinger—eventually find him?",
    ],
    onUnlock: {
        text: [
            "When an Answer a Question roll results in a miss, a Hunter may <strong>declare that they saw this failure depicted in an artwork from the Yellow Girl Room</strong>. If they do, increase the result to a 7-9; the Hunter who declared it takes the Condition: <strong>I Saw the Yellow Girl,</strong> and marks a box below. When the track is full, any Hunter with the Condition must retire by the end of the following Night Phase, narrating how they flee London to escape their fate… and to where the Yellow Girl will inevitably find them.",
        ],
        checks: 3,
    },
}
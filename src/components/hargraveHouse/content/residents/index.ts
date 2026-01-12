import type { ResidentContent } from "../../types";
import { greco } from "./greco";

const manInSunMask: ResidentContent = {
    title: "The Man in the Sun Mask",
    intro: "When a Hunter consults this Resident, mark a box below. Once three boxes are marked, unlock Night Phase: The Solaria.",
    prompts:     ["The Man in the Sun Mask invites the Hunter to a quiet, candlelit meal in his suite at Hargrave House. <strong>Paint the Scene:</strong> What about the meal or the suite shows the Man in the Sun Mask is trying to impress you?",
        "The Man in the Sun Mask can be found walking in a public garden, stopping occasionally to smell a bloom. <strong>Paint the Scene:</strong> Something about their behavior makes you think the other patrons can’t see the Man in the Sun Mask. What is it?",
        "The Man in the Sun Mask can be found in his private box at the Royal Opera House; you and he are the only ones in the audience that night. <strong>Paint the Scene:</strong> The opera being performed is surreal and difficult to follow; you’ve never heard of it before. Describe one of the strange scenes. ",
        "The Man in the Sun Mask visits you in a dream. <strong>Paint the Scene:</strong> Something about his appearance in the dream makes him seem like an entity from another plane of existence. What is it? ",
        "The Man in the Sun Mask shows you a secret room at Hargrave House, behind a door that can only be found if you are in an altered state of consciousness. <strong>Paint the Scene:</strong> His presence in the house makes it seem even more strange than usual. How so? <strong>Special Rule:</strong> The secret room can only be accessed by playing the game Beach Blanket Body Bag and finding The Secret Room.",
    ],
    onUnlock: {
        title: "The Solaria",
        text: ["Hargrave House is invited to the Solaria, an extravagant masquerade ball held in a partially-constructed tube tunnel. The walls are decorated with night sky motifs, hundreds of lanterns are hung from the ceiling, and all the attendees wear masks inspired by planets and stars. <strong>Paint the Scene:</strong> No one is allowed to reveal their identity at the Solaria. In what way do you see this custom being gently enforced? <strong>Special Rule:</strong> Any Hunter who attends the Solaria should describe their mask and then add it to their Personal Quarters. "],
    }
}

const jenny: ResidentContent = {
    title: "Jenny Johnston",
    intro: "When a Hunter consults this Resident, mark a box below. Once three boxes are marked, unlock Night Phase: Mahjong Night.",
    prompts:     [
        "Jenny can be found admonishing a group of her nephews against continuing with their foolish behavior. <strong>Paint the Scene:</strong> It seems her nephews got into trouble after a night of drunkenness. Based on their appearance and what you overhear, what kind of trouble did they get into?",
        "Jenny comes to Hargrave House seeking donations for a charity shop she is on the board of. <strong>Paint the Scene:</strong> What strange or unsuitable thing from Hargrave House do you donate?",
        "Jenny can be found upbraiding a police constable for failing to keep certain types of riff-raff out of her establishment. <strong>Paint the Scene:</strong> How can you tell the police constable is scared of her? ",
        "Jenny can be found overseeing a delivery of goods to her establishment. <strong>Paint the Scene:</strong> What about this scene makes you think some of these goods are black market in nature? ",
        "Jenny comes to Hargrave House with her niece, Bethany, to see if the Hunters might have some work for the girl (cooking, cleaning, etc.). <strong>Paint the Scene:</strong> How can you tell Bethany is new to London?",
    ],
    onUnlock: {
        title: "Mahjong Night",
        text:         ["Jenny invites Hargrave House to her monthly Mahjong night at the opium den. The place is scrubbed clean, including of its normal clientele, and lit much more brightly than usual. Cheerful music is being played on the piano and the only drinks being served are Sherry Cobblers. There is a constant click-clack of Mahjong tiles. Paint the Scene: Jenny’s friends are sweet on the surface, but absolutely ruthless when it comes to their monthly game night. How can you tell? Special Rule: You can’t trigger the Information Move at Mahjong night, but the players will reveal two Clues as they gossip."],
        
    }
}

const lurker: ResidentContent = {
    title: "The Lurker",
    intro: "When a Hunter consults this Resident, mark a box below. Once three boxes are marked, unlock Night Phase: The Lurker Joins the Hunt.",
    prompts:     [
        "The Lurker can be found watching a young family from the shadows. <strong>Paint the Scene:</strong> How can you tell the Lurker longs to play with the family’s children? ", 
        "The Lurker is trying to lure a stray dog. <strong>Paint the Scene:</strong> Do you think the Lurker wants to befriend the dog or eat the dog? How can you tell? ", 
        "The Lurker is practicing blood magic on a young boy they have befriended. <strong>Paint the Scene:</strong> What about the boy makes you think the Lurker frequently practices blood magic on him?",
        "The Lurker is asleep. <strong>Paint the Scene:</strong> As you watch them sleep, you are reminded that the Lurker is still a child. How so?",
        "The Lurker is feeding on someone they’re not supposed to. <strong>Paint the Scene:</strong> Looking around, what sort of quick action will you have to take to ensure no one discovers what the Lurker has done? (This may trigger the Night Move, at the Keeper’s discretion.)",
    ],
    onUnlock: {
        title: "The Lurker Joins the Hunt",
        text:         ["You take the Lurker with you on the night’s hunt. Gain 1 extra Clue on the Information Move when the Lurker uses their heightened senses to help you investigate."],
    }
}

export const residentContent: Record<string, ResidentContent> = {
    manInSunMask: manInSunMask,
    jenny: jenny,
    lurker: lurker,
    greco: greco,
}
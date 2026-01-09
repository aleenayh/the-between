import type { ResidentContent } from "../../types";

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

const greco: ResidentContent = {
    title: "Greco, the Dream Sovereign",
    intro: "This checklist is used by the Keeper after a player selects Greco as a Reward for completing The Creature of Cremorne Gardens. When a Hunter declares an intention to consult Greco via dreams, mark a box below and do as instructed. The Hunters have access to a new move, A Society of Dreamers, once three boxes are marked. ",
    prompts:     [
        "Frame a scene showing the Hunter walking hand-in-hand with Greco down a little-known side street in London. <strong>Paint the Scene:</strong> Something about the behavior of the Londoners  on this street makes us think we’re in a dream. What is it? ", 
        "Frame a scene with the Hunter and Greco on a small boat, floating in the middle of an inky underground lake. Their destination: an island lit with torches—a pinprick of distant light in the vast darkness. <strong>Paint the Scene:</strong> How do we know the boat will never reach the island? ",
        "Frame a scene with Greco and the Hunter starting the journey of The Fool in the tarot’s major arcana, ready to step off the cliff into oblivion. <strong>Paint the Scene:</strong> Greco’s dream tarot features cards not found in a standard deck. Name one of these secret cards. What mysterious aspect of life does it stand for? ",
        "Frame a scene with the Hunter standing before Greco, who is seated upon a throne, presiding over a court of mist and madness. <strong>Paint the Scene:</strong> Greco’s courtiers are Lost Ones, condemned to endlessly petition their dream sovereign for a place in his gossamer realm. Describe one; based on their appearance and mannerisms at court, how do they suffer in the real world? ",
        "Frame a scene with Greco and the Hunter crawling through the root system of an impossibly vast and ancient tree. <strong>Paint the Scene:</strong> How do we know this tree is God? ",
    ],
    onUnlock: {
        title: "A Society of Dreamers",
        text:         ["The consultations with Greco have led to an increased interest in dream explorations. Among the books in the vast, weird library of Hargrave House is a Norwegian tome called Et Samfunn av Drømmere, or A Society of Dreamers. The book details a ritual that allows a person, the Diver, to enter the dreams of a sleeping individual, the Dreamer; the actions of the Diver are controlled by other individuals present during the ritual, called Guides. Roll for each section below in order to detail the ritual.",
            "In game terms, a Hunter can declare during the Dusk Phase that they wish to dive into the dreams of a Side Character during a London Night Phase. So long as at least one other Hunter is willing to participate as a Guide, and the Hunters are able to meet the ritual requirements, the dive takes place and lasts the entirety of the Night Phase. ",  
            "To get the full effect, play the Night Phase by candlelight. The dive begins with the player of the Diver closing their eyes; their eyes should remain closed for the duration of the Night Phase (they will not be required to participate in the Unscene). After the first Unscene prompt is resolved, the Keeper reads a dream prompt aloud and asks a Guide what the Diver should do. The chosen Guide will respond with whatever action they think the Diver should perform in the dream (“go up the stairs,” “open the door,” “look behind you,” etc.). The Diver then describes what they see after they perform the action (“I see a long hallway draped in shadow,” “I see an impossibly tall mountain,” “I see a field of iridescent flowers,” etc.). The Keeper then asks a new Guide (or the same Guide if there is only one) what the Diver should do. The Diver once again describes what they see. Go back and forth like this for a little bit before returning to the Unscene or cutting to another Hunter scene. Continue the dream dive between Unscene prompts. At the start of the dream dive scene following the last Unscene prompt:",
            "The Diver rolls plus the number of Guides assisting with the dream dive. On a hit, the Hunters will discover 2 Clues for an active Threat of their choice. Players should describe the Clues based on what was experienced during the dream dive up to that point; the Clues should not conclusively answer a Question by themselves. On a 7-9, the Diver will also encounter a Danger. On a miss, the Diver will encounter a Danger as well as lose some memories in the Palace of Locked Doors; they take the Condition: Locked Doors. Hunters with the Locked Doors Condition do not have access to the Mask of the Past until they clear the Condition. ",
            "On a 12+, the Hunters also discover a Mastermind Clue; the Keeper will describe it.",
            "<strong>Dream Prompts:</strong> ",
            "<check>The Distant Tower</check>",
            "<li>You’re standing on a cliff’s edge, a narrow strip of dirt and gravel separating you from oblivion below. You can turn around, but you know if you do, it’s just shadows and mist, unseemly things swirling around in your mind. There is a tight path clinging to the cliff face; following it will take you into the valley below. There is also an earthen bridge stretching out before you; on the far side of it, a tower.</li>",
            "<i>Dangers: a titan, barely shrouded by the mist; the ground beneath your feet, crumbling away; leathery, winged things roosting in the shadows.</i>",

            "<check>Nine Steps Down</check>",
            "<li>You’re standing at the top of a staircase that descends into the earth: the Nine Steps of Persephone, the journey into the Underworld. Behind you and around you is the idyll of your mother: golden wheat and lowing cows and suckling babes. Juices red like blood dribble from your mouth, along your arms, through your fingertips, down nine steps. Your foot is raised in expectation.</li>",
            "<i>Dangers: Lost Ones, fitfully sleeping in the real world, trapped in this one, beseeching one who is not their sovereign for release.</i>",

            "<check>The Hall of Swords</check>",
            "<li>You’re roaming around an endless series of halls, surfaces trimmed in marble or gold, mirrors placed at regular intervals. Sunlight is streaming in from somewhere; there are no windows or skylights. At each juncture, a masked figure points a long, thin sword down the hall. You stop and consider where a figure in a bird mask is pointing you: down a hall lined with portraits of your ancestors. Behind the figure is a hall filled with plundered treasure; ahead of the figure, a hall occluded by shadow.</li>",
            "<i>Dangers: a bravo hoping to earn her reputation in the Hall of Swords; your shadow self, stepping out of a mirror to challenge you; a king on a roaming throne.</i>",

            "<check>The Midsummer Faire</check>",
            "<li>You’re taking in the sights at a country faire, the sun high in the sky, the mood cheerful, the smells earthy and sweet. Children dancing around the maypole beckon you to join their reel. A group of women laughing and drinking beer occasionally turn their attention to you. Feats of daring and strength—barrel rolling, tug-o-war, pig wrangling—are waiting for you to take your turn. </li>",
            "<i>Dangers: men with false-flesh faces; a mud-black pit for drowning Sorrows; a hanging, a shunting, a sacrifice.</i>",

           
            "<check>The Catacombs of Old King Smule</check>",
            "<li>You’ve been trapped down here for an age, maybe two. The corridors are low and cramped, bodies interred on all sides. You rise from your death niche, drawn by the too-loud whispers of plunderers, their torch light bobbing up and down. Will you follow them? Will you ask them gently for a measure of their precious life, or will you take it from them with a cold embrace? Or will you seek an exit, follow what’s left of your nose, seeking the sweet surface air?</li>",
            "<i>Dangers: golden light, burning inside your skull and chest cavity; words that act as a yoke, worming their way inside your hollow head, tightening and controlling; blades that hack, tools that smash.</i>",

            "<check>The Shores of Lake Hali</check>",
            "<li>You’re standing ankle-deep in the foam. Behind you and around you: an ink-black lake of unfathomable fastness, underground. At your disposal: a little boat. Ahead of you: a city of amber and brass, lit by an enormous brazier that burns in a tower like a false sun, though not bright enough to create more than a dim glow through the city’s alleys and passages. It is a city of artists and scholars and mad people. </li>",
            "<i>Dangers: a living artwork, beckoning you to join the tableau; masked chainmen enforcing a strict and brutal etiquette; the king at the bottom of the lake.</i>",
        ],
        inlineChecks: 5,
        extraLines:3,
        
    }
}


export const residentContent: Record<string, ResidentContent> = {
    manInSunMask: manInSunMask,
    jenny: jenny,
    lurker: lurker,
    greco: greco,
}
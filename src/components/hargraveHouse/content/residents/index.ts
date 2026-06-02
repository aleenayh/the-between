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
    onUnlock: [{
        title: "The Solaria",
        text: ["Hargrave House is invited to the Solaria, an extravagant masquerade ball held in a partially-constructed tube tunnel. The walls are decorated with night sky motifs, hundreds of lanterns are hung from the ceiling, and all the attendees wear masks inspired by planets and stars. <strong>Paint the Scene:</strong> No one is allowed to reveal their identity at the Solaria. In what way do you see this custom being gently enforced? <strong>Special Rule:</strong> Any Hunter who attends the Solaria should describe their mask and then add it to their Personal Quarters. "],
    }]
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
    onUnlock: [{
        title: "Mahjong Night",
        text:         ["Jenny invites Hargrave House to her monthly Mahjong night at the opium den. The place is scrubbed clean, including of its normal clientele, and lit much more brightly than usual. Cheerful music is being played on the piano and the only drinks being served are Sherry Cobblers. There is a constant click-clack of Mahjong tiles. Paint the Scene: Jenny’s friends are sweet on the surface, but absolutely ruthless when it comes to their monthly game night. How can you tell? Special Rule: You can’t trigger the Information Move at Mahjong night, but the players will reveal two Clues as they gossip."],
    }]
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
    onUnlock: [{
        title: "The Lurker Joins the Hunt",
        text:         ["You take the Lurker with you on the night’s hunt. Gain 1 extra Clue on the Information Move when the Lurker uses their heightened senses to help you investigate."],
    }]
}

const chemist: ResidentContent = {
    title: "The Chemist",
    intro: "You get 1 extra Clue on the Information Move when you seek her counsel on transformation, even on a miss. When a Hunter consults this Resident, mark a box below. Once three boxes are marked, unlock London Night Phase: The Chromatic Laboratory.",
    prompts:     [
        "The Chemist receives you in a dim corridor, veil shimmering like a heat haze. <strong>Paint the Scene:</strong> How can you tell the Chemist is trying to hide something from you?",
        "The Chemist invites you into a locked cabinet room under the pretense of needing “a second opinion,” instruments gleaming like patient predators. <strong>Paint the Scene:</strong> How can you tell the Chemist is trying to hide something from you?",
        "In the courtyard, the Chemist traces lingering patterns in the air with thin gloved fingers. <strong>Paint the Scene:</strong> How can you tell the Chemist is trying to hide something from you?",
        "The Chemist is humming over a corpse stained in impossible hues. <strong>Paint the Scene:</strong> How can you tell the Chemist is trying to hide something from you?",
        "The Chemist drifts through Hargrave House with unsettling ease, fingertips grazing objects as though appraising their secrets. <strong>Paint the Scene:</strong> How can you tell the Chemist is trying to hide something from you?",
    ],
    onUnlock: [{
        title: "The Chromatic Laboratory",
        text:         ["The Chemist invites the Hunters to her new lab, located somewhere in the catacombs beneath Hargrave House. <strong>Paint the Scene:</strong> What about this place shows that, here, the color spectrum behaves… mostly? <strong>Special Rule:</strong> If a Hunter allows the Chemist to perform a color experiment on them, they can take no other action during this phase. At the end of the phase, the Hunter should say what color the Chemist turned them, and why. They then take the Condition: [Color]. "],
    }]
}

const edwin: ResidentContent = {
    title: "Edwin Belmont",
    intro: "Get an extra Clue on the Information Move when you seek his counsel about the government or foreign affairs. Once three boxes are marked, unlock London Night Phase: The Ambassador’s Ball.",
    prompts:     [
        "You bump into Edwin cruising for trade in St. James’ Park. He rolls his eyes but catches up with you, even as his gaze is diverted by guardsmen from the nearby barracks. <strong>Paint the Scene:</strong> Who else do you see looking for a furtive encounter in the dark, and what are they really looking for: a moment of human connection, a little beer money, or something else?",
        "Edwin is dressed in a disguise that almost fools you for a moment. When he has your attention, he motions to speak with you in confidence. <strong>Paint the Scene:</strong> Who passes by in the street, and what about them seems suspicious? ",
        "You sit next to Edwin on a bench at Charing Cross Station, both reading the evening paper. He murmurs to you out the side of his mouth as he feigns interest in the broadsheet. <strong>Paint the Scene:</strong> What everyday scenes of betrayal do you see played out in the station, and how are they reflected in the news stories of the day?",
        "Edwin has left an anonymous dead-drop for you on the street, directing you to a safehouse for a private meeting. <strong>Paint the Scene:</strong> What precautions has Edwin taken to keep the appointment private?",
        "You meet Edwin at the India Office, at home amongst the sensibly-suited bureaucrats. <strong>Paint the Scene:</strong> How do you see Edwin deftly maintain his professional mask? What signs of his true personality can be gleaned underneath? ",
    ],
    onUnlock: [{
        title: "The Ambassador’s Ball",
        text:         ["The ambassador from the Ottoman Empire is throwing a grand ball at the embassy, and Edwin has managed to wrangle you all invitations (either as guests or staff). During the ball, all rolls with Presence are made at advantage, and no move may result in the death of a character (Hunter or otherwise). During the following Dawn Phase, each Hunter may add a character they had a positive interaction with to their Personal Quarters. "],
    }]
}

const julius: ResidentContent = {
    title: "Julius, the Vampire King of London",
    intro: "Get an extra Clue on the Information Move when you consult Julius about matters related to the undead, even on a miss. When a Hunter does this, mark a box below and note the name of the Hunter on the lines below. Once all five boxes are marked, unlock London Night Phase: The Crimson Suite.",
    prompts:     [
        "Julius is discovered lounging across a Hargrave House divan at noon, curtains drawn tight by kneeling worshippers as he sips blood from a crystal goblet. <strong>Paint the Scene:</strong> How can you tell Julius is enjoying himself?",
        "Julius saunters through the halls in a silk robe far too thin for the hour, masked devotees hushing one another reverently as he passes. <strong>Paint the Scene:</strong> How can you tell Julius is enjoying himself?",
        "Julius interrupts a serious conversation by reclining across the back of a chair, booted feet draped over priceless furniture. <strong>Paint the Scene:</strong> How can you tell Julius is enjoying himself?",
        "Julius corners a Hunter near the staircase, breath cool and perfumed, smile sharp as a blade. <strong>Paint the Scene:</strong> How can you tell Julius is enjoying himself?",
        "Julius hosts an impromptu gathering in the drawing room, worshippers closing doors and shuttering windows as candles bloom like flowers. <strong>Paint the Scene:</strong> How can you tell Julius is enjoying himself?",
    ],
    onUnlock: [{
        title: "The Crimson Suite",
        text:         ["Julius invites the Hunter whose name is written on the most lines to spend the evening in his private chambers hidden behind velvet curtains and ritual locks. The walls are draped in red silks darkened with old stains, mirrors fog from the inside, and the air is thick with smells of incense, wine, and something unmistakably alive. Paint the Scene: What modifications have been made that make these chambers ideal for feasting on blood in violent, orgiastic excess? Special Rule: The Hunter invited to the Crimson Suite can have scenes and trigger moves as normal, so long as those scenes and moves take place in the Crimson Suite. At the end of the Night Phase, the player of that Hunter should draw three checkboxes next to The Blood-Soaked Portal on their playbook (four total). The extra checkboxes allow The Blood-Soaked Portal to be marked multiple times; no matter how the Hunter is violently killed, they resurrect in the Crimson Suite during the next Dusk Phase and re-enter play. The Hunter is destroyed permanently when the last box is marked on The Blood-Soaked Portal. "],
        extraLines: 5,
    }]
}

const millicent: ResidentContent = {
    title: "Millicent Bryant",
    intro: "Get an extra Clue on the Information Move when you consult with her about scientific theories or astronomy. When a Hunter consults this Resident, mark a box below. Once three boxes are marked, unlock London Night Phase: The Royal Society.",
    prompts:     ["You go stargazing with Millicent on Blackheath Common, where the stars twinkle brightly at the edge of the smog hanging over the city. <strong>Paint the Scene:</strong> What omens do you read in the night sky? How does Millicent explain there is a perfectly rational reason for these feelings?",
        "You walk in on Millicent furiously trying to solve an extremely complex mathematical equation on a chalkboard in her office. <strong>Paint the Scene:</strong> What signs do you see that Millicent never truly feels more alive than a moment such as this?",
        "Millicent is three sherries deep in one of the staff lounges at the Royal Observatory, railing against the “fools of the Royal Society.” <strong>Paint the Scene:</strong> What features of the room speak to an oppressive, masculine nature?",
        "Millicent is visiting Hargrave House to study some esoteric tomes kept in the library. <strong>Paint the Scene:</strong> How does Millicent act as a source of stability against the unstuck nature felt here?",
        "You meet Millicent for afternoon tea at the Clermont Hotel on the Strand. She seems to be in very high spirits. <strong>Paint the Scene:</strong> What makes you think that Millicent has fallen in love, and what clues indicate who with? If it is one of the Hunters, they may add A Passionate Love Letter from Millicent to their Personal Quarters.",
        ],
    onUnlock: [{
        title: "The Royal Society",
        text:         ["Millicent invites the Hunters to attend a symposium held by the Royal Society of London for Improving Natural Knowledge, where she is due to present a paper. Any Hunters who take her up on this invitation will have the opportunity to rub shoulders with renowned scientists and any other Side Character who may be inclined to attend. For this Night Phase, the Keeper will introduce a special Unscene: The Symposium at Somerset House."],
    }]
}

const mcCluskey: ResidentContent = {
    title: "Mrs. McCluskey",
    intro: "Get an extra Clue on the Information Move when you ask Mrs. McCluskey for information on Soho or London’s gangland. When a Hunter consults this Resident, mark a box below. Once three boxes are marked, unlock London Night Phase: A Proper Knees-Up.",
    prompts:     [
        "One of Mrs. McCluskey’s children took a nasty knife-wound in a gangland brawl, and she's stitching them up in the Palais's costume room. <strong>Paint the Scene:</strong> As Mrs. McCluskey deftly attends to her charge, how do we see her genuine care even as she chides them for their carelessness?",
        "Mrs. McCluskey has asked you to come over and help her move an old trunk, as she doesn’t have the strength anymore. <strong>Paint the Scene:</strong> How do you know there is a body in the trunk, and that this is not the first one Mrs. McCluskey has had to dispose of?",
        "Mrs. McCluskey is in the middle of helping some performers with a quick costume change as you arrive, and she tells you to take a seat while she works. <strong>Paint the Scene:</strong> How do we see the youthful vigour of the performers as they change? How, in contrast to her age, are Mrs. McCluskey's eyes and fingers still as sharp as her needles and pins?",
        "Having indulged in a medicinal bottle of gin, Mrs. McCluskey is waxing loquacious. <strong>Paint the Scene:</strong> Describe a story of one of the Misters McCluskey, and an annoying trait that may have led a suffering wife to consider murder.",
        "Things have gone badly for you, but Mrs. McCluskey offers solace. If you go to her for aid, you may clear a Condition. <strong>Paint the Scene:</strong> What practical or moral assistance does Mrs. McCluskey offer, and how do you know it was learned through bitter experience? ",
    ],
    onUnlock: [{
        title: "A Proper Knees-Up",
        text:         ["Mrs. McCluskey has arranged a good old 'knees-up' at a boozer in the West End. Beer and gin flow like water, someone is banging out a tune on the joanna, and the enthusiasm of the dancers is unmatched even by their talent. Throughout the long night of carousing, Mrs. McCluskey’s children ply their various illicit trades. During any scene in or around the party, rolls with Vitality or Composure are made at advantage, so long as a Hunter calls on the McCluskeys for aid or support. In the Dawn Phase that follows, all Hunters take the Condition <strong>The Morning After.</strong>"],
    }]
}

const nym: ResidentContent = {
    title: "Nym Granby",
    intro: "Get an extra Clue on the Information Move when you consult Nym on matters concerning demons, summoning, or the occult. When a Hunter consults this Resident, mark a box below. Once all five boxes are marked, Nym disappears from London. The Hunters each get to claim something from his rooms at Hargrave House and add it to their Personal Quarters; they may ask another Hunter what it is or define it themselves. ",
    prompts:     [
        "Nym is collecting a special order from a bookstore you’ve never heard of, its entrance hidden in the back of an apothecary. <strong>Paint the Scene:</strong> How can you tell Nym believes this book is a dangerous occult artifact?",
        "Nym is making their rounds through a neighborhood you rarely visit. They ask you to keep watch while they deftly redraw a series of chalk symbols in hidden places along the route. <strong>Paint the Scene:</strong> You recognize these drawings as magic sigils. Based on their form, what kind of entity do you believe Nym is warding against?",
        "Nym invites you to their flat for a midnight coffee. Their winding route home frequently backtracks and cuts through several businesses, finally reaching a strange door with no number. <strong>Paint the Scene:</strong> Nym has arranged extensive layers of magical and spiritual protection throughout their home. What do you see that indicates this?",
        "Nym misses an appointment with you. Concerned, you find your way to the door of their flat. Strange sounds emanate from within. After you make the secret knock they showed you, a flustered and disheveled Nym opens the door, breathing heavily. <strong>Paint the Scene:</strong> How can you tell Nym has been engaged in a spirited audience with a non-human entity?",
        "Nym moves into Hargrave House to continue their work, in a thick-walled chamber no one seems to recall existing before. <strong>Paint the Scene:</strong> What have they brought into the chamber that is an asset to Hargrave House, and what poses a danger?",
    ],
    onUnlock:     []
}

const salomon: ResidentContent = {
    title: "Rabbi Rebekka Salomon",
    intro: "If you have the <strong>Darkened Threshold</strong> marked when you confer with her, Salomon will recommend you undergo a process of atonement. If you do so, unmark the Darkened Threshold (any effects previously applied by marking it may be removed or changed at the Keeper’s discretion). Each Hunter can do this once. No matter, whenever you consult her, mark a box below. Once three boxes are marked, unlock London Night Phase: Shabbat Dinner. When all five are marked, unlock London Night Phase: Chevra Kadisha (Holy Society)",
    prompts:     [
        "Rebekka can be found guiding a circle of recovering addicts at her congregation. <strong>Paint the Scene:</strong> What about their stories of fragility and resolve echo your own recoveries?",
        "Rebekka can be found caring for a terminally ill patient in a dilapidated house at the edge of London. <strong>Paint the Scene:</strong> What small but meaningful acts of kindness does Rebekka perform that bring peace to the patient in their final days?",
        "Rebekka can be found tending to a starving vampire she once hunted, now begging for mercy. <strong>Paint the Scene:</strong> Rebekka is torn between the demands of her faith to save a life, but also her remit to quell darkness. How does this internal battle reflect itself in her actions? How would your own Hunter act given such a quandary?",
        "Rebekka can be found in her study, fluttering through her diaries from her  time working at Hargrave House. The diary and the study are littered with memories and artifacts that she cannot bring herself to dispose of or forget. <strong>Paint the Scene:</strong> What of her former tenure at Hargrave House, revealed through these details, still haunts her?",
        "Rebekka can be found tinkering with a grand golem, a hulking thing of clay and iron hidden in the as-yet unused subway station below her synagogue. Its immense form looms in the half-light. <strong>Paint the Scene:</strong> What details worked into the design suggest that this would be a highly dangerous weapon in the hands of the Mastermind?",
    ],
    onUnlock:     [
        { title: "Shabbat Dinner",
            text: ["Rebekka invites the Hunters to a Shabbat meal she has elected to hold at Hargrave House. Salomon has invited members of her network, high and low, living and not, to celebrate an evening of peace-making and merriment. A seemingly invisible clarinetist plays jazz, echoing from the music room, as fine china is set. <strong>Paint the Scene:</strong> Rebekka’s network is a colorful array of unlikely characters. Choose two (including Side-Characters, Unscene personalities, Dangers, Servants, or Threats) from the campaign, and describe how, during the course of the meal, you might uncover a surprising commonality that ties you more closely than you first realized."],
        },
      {
        title: "Chevra Kadisha (Holy Society)",
        text: [
          "Rebekka has died. A member of her congregation has brought a letter asking Hargrave House to assist in performing her funeral. The pit has already been dug and women in her congregation have already washed her body. What Rebekka needs is for Hargrave House to perform a cleansing ritual at the grave-site before she is lowered. <strong>Paint the Scene:</strong> Rebekka’s mourners include both friends and adversaries she created during her time at Hargrave House. Other than the Mastermind, who is in attendance, describe one unusual mourner who comes to give a last farewell. Are they here out of love or respect? ",
        ],
      },
    ]
}

const randall: ResidentContent = {
    title: "Randall Newcastle",
    intro: "Can be consulted once per Day Phase: in exchange for hot gossip about a previously resolved Threat, he will give a Clue about an active Threat of the Keeper’s choice. When a Hunter consults this Resident, mark a box below. Once three boxes are marked, unlock London Night Phase: The Midnight Printing Run.",
    prompts:     [
        "Randall corners you outside Hargrave House with a too-wide grin, shoving a damp proof sheet into your hands before you can protest. <strong>Quote:</strong> “Look, love, I just need one vivid detail. Doesn’t even have to be true. Especially if it isn’t.”",
        "Randall ushers you into a cramped closet in Hargrave House he calls his “newsroom”—just a desk, a stolen chair, and a chaos of paper. His eyes shine with conspiratorial delight as he circles phrases you didn’t say. <strong>Quote:</strong> “Truth is elastic. Stretch it enough and it snaps back as something much more interesting.”",
        "Randall “happens” to be waiting for you at a café, two empty cups already on the table, and a third pushed invitingly toward your seat. <strong>Quote:</strong> “Everyone’s got secrets, petal. Some people even have interesting ones. Any of yours ready for print?”",
        "Randall drags you to the alley behind a rival penny paper to show you a pile of discarded proofs he calls “research.” <strong>Quote:</strong> “Competition’s fierce. If I don’t get ahead of the story, someone else will get ahead of me, and we can’t have that.”",
        "Randall proudly unveils a “wall of sources” in his closet office—a mosaic of clippings, string, scribbles, and portraits. <strong>Quote:</strong> “Marvelous, isn’t it? Half of it’s hearsay, a quarter is wishful thinking, and the rest… well, the rest is just the rest, I suppose.”",
    ],
    onUnlock: [{
        title: "The Midnight Printing Run",
        text:         ["Randall invites the Hunters to accompany him to an abandoned print shop he uses after hours. The presses groan to life with unsettling speed, as if hungry for scandal. Ink spatters, gears snap, and rumors become tangible in the mechanical din. <strong>Special Rule:</strong> The Information Move cannot be used during this Night Phase. Instead, Hargrave House uncovers two Clues from Randall’s rags. The players work together to define these Clues, which can be for any active Threat; the Clues cannot conclusively answer a Question by themselves."],
    }]
}

const sorokin: ResidentContent = {
    title: "Sarah Tanner, aka Madam Serafima Sorokin",
    intro: "Get an extra Clue on the Information Move when you seek her counsel about spiritualism and dark secrets. Once three boxes are marked, unlock London Night Phase: The Seance.",
    prompts:     [
        "Madam Sorokin is consoling a sailor’s wife, whose husband is presumed lost at sea. She sees the woman off at the end of her reading, solemn even as she discreetly takes her payment. <strong>Paint the Scene:</strong> How does Sarah's genuine skill at supporting the grief-stricken manifest, even as she makes her living off them?",
        "You sit across from Madam Sorokin at the dining table and, without even thinking, she draws out her deck of Tarot cards and begins dealing. <strong>Paint the Scene:</strong> What grim fate do the cards portend for you?",
        "You take tea with Madam Sorokin in her parlour, and as she reads the leaves she discloses some gossip about a recent client. <strong>Paint the Scene:</strong> What images are revealed in the leaves, and how do they relate to the story she tells?",
        "Madam Sorokin is poring over a grimoire in the library of Hargrave House, making copious notes. <strong>Paint the Scene:</strong> Whether she has gained some mystic insight or merely found captivating new material, it is clear Sarah is dedicated to her craft. How do we know this?",
        "Madam Sorokin comes to you with advice about a problem Hargrave House is dealing with. <strong>Paint the Scene:</strong> Does her advice seem to come from supernatural insight or familiarity with the human condition?",
    ],
    onUnlock: [{
        title: "The Seance",
        text:                 [
          "Madam Sorokin hosts a grand seance, to which you are all invited. Each Hunter may name a Side Character they wish to be in attendance.",
          "<li>If she has true power, Madam Sorokin channels a powerful ritual; Hunters make any rolls with Sensitivity at advantage. Additionally, at the climax of the seance, the Keeper will reveal a Mastermind Clue. </li>",
          "<li>If she is a fraud, Madam Sorokin concocts an elaborate show to distract the guests; the Hunters make all rolls with Presence and Reason at advantage. In the Dawn Phase that follows, each Hunter receives a personal token from a guest or piece of blackmail on them from Madam Sorokin; they describe what it is, and add it to their Personal Quarters.</li>",
        ],
    }]
}

const snowQueen: ResidentContent = {
    title: "The Snow Queen",
    intro: "If you have the <strong>Cosmic Passage</strong> marked when you confer with her, she will give you a treasure; ask another Hunter what it is and then add it to your Personal Quarters. Each Hunter can do this once. Once three boxes are marked, unlock London Night Phase: The Reflection of Regent’s Park Lake.",
    prompts:     [
        "The Snow Queen can be found clandestinely arranging a Christmas display at the luxury store Harrods. <strong>Paint the Scene:</strong> What details suggest she might have once escaped from the pages of a storybook?",
        "The Snow Queen can be found playing Hide-and-Seek in the residence of the Prime Minister. <strong>Paint the Scene:</strong> What about the game indicates she is sourcing a Christmas meal for the needy, and the kids are in on the game? Who is in pursuit?",
        "The Snow Queen can be found tending to a garden of winter blooms in the shadowy alcoves of the Tower of London. <strong>Paint the Scene:</strong> How does her care for the garden indicate a certain Fae touch?",
        "The Snow Queen can be found meticulously reconstructing the broken violin of a blind street musician. <strong>Paint the Scene:</strong> What does she bestow upon the violin or the musician that promises to bless the man’s future performances?",
        "The Snow Queen is in the foyer below the Hunters’ quarters, playing with dolls and a miniature replica of Hargrave House. <strong>Paint the Scene:</strong> What features or behaviors of the dolls suggest she has breathed life into them?",
    ],
    onUnlock: [{
        title: "The Reflection of Regent's Park Lake",
        text:         ["The Snow Queen invites Hargrave House to step through the lake to the shimmering reverse-side of Regent’s Park Lake’s reflection, where the spirits of the drowned still glide gracefully across the ice, their joyous celebration washing a watercolor glow over the scene. <strong>Paint the Scene:</strong> The souls that skate here yearn for the warmth of their families during the Christmas season. What about their actions towards the Hunters reveal their longing to reconnect with their loved ones?"],
    }]
}

const wraith: ResidentContent = {
    title: "The Wraith",
    intro: "While the Wraith is a Resident of Hargrave House for most rules purposes, the Hunters cannot actually seek them out; rather, the Keeper can mark a box below when appropriate. Once three boxes are marked, unlock London Night Phase: Urban Safari.",
    prompts:     [
        "When you are being pursued or confined by someone who means you ill, the Wraith drops into the scene to aid you in your escape. <strong>Paint the Scene:</strong> What obstacles do you face in your escape, and how does the Wraith help you overcome them?",
        "When you have a body to move or other incriminating evidence to destroy, the Wraith emerges from the shadows to lend a helping hand. <strong>Paint the Scene:</strong> What disturbing tools or techniques does the Wraith bring to bear, and what about the scene reminds you of being caught in a misdeed as a child?",
        "When you are engaged in a desperate battle, the Wraith joins the fray to harry and distract your opponent. <strong>Paint the Scene:</strong> How does the Wraith demonstrate their martial skills with an artistry that makes the violence beautiful?",
        "When you are alone in your room at Hargrave House, the Wraith slips in to perform an elaborate romantic gesture. <strong>Paint the Scene:</strong> What gifts has the Wraith brought, and why are they unsettling?",
        "Special rule: If the Hunter accepts the Wraith's advances, ask them to describe the scene; this can be treated as doing the Vulnerable Move with a Side Character, but without having to trigger the Day/Night Move. If they do not accept, they can add one of the presents the Wraith brought them to their Personal Quarters. Ask them to describe how they take out their frustrations on the people of London.",
        "When you visit the rooftops, the Wraith can be found observing the messy beauty of London known only to chimney sweeps and steeplejacks. They share their views on the city. <strong>Paint the Scene:</strong> What moments of brutal beauty and beautiful brutality do you see unfolding in the streets below you?",
    ],
    onUnlock: [{
        title: "Urban Safari",
        text:         ["The Wraith helps you prepare a series of snares and ambushes for your prey. When you pursue an Opportunity to resolve a Threat during this Night Phase, the target cannot escape or get the better of you, and the hunt will end with their death or capture. No rolls are needed; each Hunter simply describes in turn how the Wraith’s traps help capture or slay the target. "],
    }]
}


export const residentContent: Record<string, ResidentContent> = {
    manInSunMask: manInSunMask,
    jenny: jenny,
    lurker: lurker,
    greco: greco,
    chemist: chemist,
    edwin: edwin,
    julius: julius,
    millicent: millicent,
    mcCluskey: mcCluskey,
    nym: nym,
    salomon: salomon,
    randall: randall,
    sorokin: sorokin,
    snowQueen: snowQueen,
    wraith: wraith,
}
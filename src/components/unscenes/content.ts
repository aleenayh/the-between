type UnsceneContent = {
    title: string;
    intro: string;
    prompts: string[];
}

export const unscenes: Record<string, UnsceneContent> = {
    "A Night at the Grand Guignol, The Baker’s Son": {
        title: "A Night at the Grand Guignol, <i>The Baker’s Son</i>",
        intro: "Every class of people in London is represented in the audience at the Theatre Grand Guignol. They have come to watch the newest production, <i>The Baker’s Son</i>, a story filled with romance, heartbreak, and bucketfuls of blood.",
        prompts: [
            "<strong>Paint the Scene:</strong> As the limelights pop to life and the crimson curtain is raised, what do we see as our eyes scan the stage that tells us this is the story of a humble baker’s son?",
            "Describe Act I, in which the Baker’s son, a young man named Daniel, falls in love with a woman, Dahlia, who he cannot have.",
            "Describe Act II, in which Daniel impotently fights back against the forces that prevent him from being with Dahlia.",
            "Describe Act III, in which Daniel engages in a desperate action to get what he wants. The final moment, just before the curtain falls, should be very bloody.",
        ],
    },
    "The Tarot Card Reading of Ms. Lydia Wainwright": {
        title: "The Tarot Card Reading of Ms. Lydia Wainwright",
        intro: "Lydia Wainwright is a young woman of nineteen, born into a respectable family. Her mother has commanded her to marry Edgar Thornton, the son of a wealthy industrialist, but her heart belongs to Samuel, a poor, but very handsome, chimney sweep. Lydia has snuck off in the night to the home of a fortune teller, seeking guidance on the matter.",
        prompts: [
            "<strong>Paint the Scene:</strong> As Lydia enters the home of the fortune teller, what do we see that shows this place has real magic?",
            "The first two cards drawn in the five-card spread are the Lovers and the Ace of Wands, the latter of which is typically associated with passion. Speaking in the voice of the fortune teller, begin telling Lydia what you see in the cards.",
            "The next two cards drawn are the Five of Swords, typically associated with violence, and the Fool, which represents the beginning of a journey. Continue the fortune teller’s card reading.",
            "The last card drawn is the Devil, representing the seduction of the material world and other earthly pleasures. Continue your reading and then tell Lydia, definitively, what she must do.",
        ],
    },
    "Night Shift at St. Thomas’s": {
        title: "Night Shift at St. Thomas’s",
        intro: "Sitting across the Thames from the Palace of Westminster, St. Thomas’s Hospital is London’s newest hospital, purpose-built to the most modern standards of medicine. It consists of sprawling wings joined by covered walkways, allowing convalescent patients to take the air during the day. But at night, a skeleton crew struggle to save their charges from the illness, accidents, and violence that stalk the gloom.",
        prompts: [
            "<strong>Paint the Scene:</strong> As the hospital is lit up by the glow of the city, what do we see that shows this place is a place of healing?",
            "A destitute woman is in the throes of a complicated birth, a porter holding her down while a surgeon prepares to operate. How do we know the child will never meet their birth mother?",
            "In the casualty waiting room, the experienced ward sister Mary O’Brien triages the sick and wounded; who does she see, and will they live or die?",
            "The young nurse Agnes Pell walks the TB ward, silent but for the laboured breathing and coughing of her charges. Who do we see among the gaunt, pale patients that shows death respects neither age nor rank?",
        ],
    },
    "Madame Morvayne’s Boy Tour: Powdered Princelings and Delightful Demigods, All Agape for Your Amusement!": {
        title: "Madame Morvayne’s Boy Tour: Powdered Princelings and Delightful Demigods, All Agape for Your Amusement!",
        intro: "Madame Morvayne’s famous guidebook is a walking tour of all the best male prostitutes in London. Ship captain Jackson “Flint” Broadmoor has just come in for a three-day port o’call, the well-worn guidebook clutched beneath his arm.",
        prompts: [
            "<strong>Paint the Scene:</strong> Beyond the wood panelled walls and leather armchairs, what signs of masculinity and power are on display here?",
            "Prince Louis, powdered, soft, covered in yards of satin and lace, invites Captain Broadmoor into his boudoir. What distinctly feminine touches do we see in Prince Louis’s room?",
            "Anthony the Adonis, whose body is rubbed with golden powder. How do we know Anthony is dying of consumption?",
            "Gianni, an Italian temple, olive-skinned, breathtaking. How do we know Gianni is having the time of his life.",
            "Thomas, a rather plain young man–barely a man, really–who is clean and able. How do we know Thomas is doing this out of desperation?",
        ],
    },
    "The Empire Club": {    
        title: "The Empire Club",
        intro: "The Empire Club is situated in a grand townhouse just off St. James’ Square; membership is popular among young aristocratic sons of lower birth-order, many of whom have travelled to or profit from holdings abroad. Select invitations have been granted to those of less esteemed breeding who have managed to make their mark—and a small fortune—overseas. It boasts card games til the early hours of the morning, cooks from the four corners of the world, and plentiful bedrooms for those far from home or avoiding their family. Tall tales and business deals alike are shared over brandy and cigars.",
        prompts: [
            "<strong>Paint the Scene:</strong> Beyond the wood panelled walls and leather armchairs, what signs of masculinity and power are on display here?",
            "A boisterous game of cards is played by some of the young bucks. Amidst the bluff and bluster, how do we see the differences between those with great wealth and noble blood, and those with only one or the other?",
            "Two older gentlemen, Sir Mortimer Holland and Colonel Bulstrode, grumble about the lax morals and deficient work ethic of the younger generation. What complaints do they make, and how do we see the envy for their youth?",
            "Francis Akerman has recently returned from the sub-continent. As he retires to the bedroom he has taken at the club, how do we see him drop his stern facade and express his vulnerability?",
        ],
    },
    "The Bitter End": {
        title: "The Bitter End",
        intro: "There is a brothel in Whitechapel, informally called “The Bitter End,” which, even by the standards of such disreputable places, is wholly wretched. A young nun, Sister Mary Edward Price, has taken it upon herself to help the “enders,” stopping by once a week to provide them with counseling and light medical services. Let’s meet the residents of The Bitter End...",
        prompts: [
            "<strong>Paint the Scene:</strong> How do we know the Bitter End is a place of desperation and sin?",
            "Georgina, who is dying of consumption. How do we know Georgina is the most popular girl at the brothel?",
            "Nanette, sweet-natured and petite. How do we know Nanette is doing this because she has no other choice?",
            "Candace, whose three children live with her in the brothel. In what ways has Candace tried to create a normal life for them here?",
            "Mabel, who has gotten a bit long in the tooth. What does Mabel try to do to keep up with the younger girls?",
        ],
    },
    "Moonlit Mudlarking": {
        title: "Moonlit Mudlarking",
        intro: "The Port of London is one of the busiest in the world, and with so much cargo being loaded and unloaded, the odd crate ends up overboard. The ebb and flow of the Thames deposits this lost cargo up and down the riverbank. Under the light of the full moon the desperate or optimistic pick through the sucking mud of low tide, stinking of shit and rotting fish, in the hope of finding treasure.",
        prompts: [
            "<strong>Paint the Scene:</strong> What debris from industry, trade, or homelife is found washed up on the mudbanks of the Thames? What does it tell us about the city?",
            "Two youths come to blows over a case of whisky with a couple of bottles still intact. As they push and shove in the slimy mud, how do we know this fight is about more than just the find?",
            "An older woman picks through the mud. Lost in her own world, she does not seem to focus on items of monetary value. What do we see her collect?",
            "Several bedraggled children poke a bloated corpse with sticks. Those who do not double over retching rifle through the waterlogged effects—what last traces of this person’s life or death do they run off with?",
        ],
    },
    "The Prison Hulk at Woolwich": {
        title: "The Prison Hulk at Woolwich",
        intro: "Moored near the industrial town of Woolwich are a number of hollowed-out old warships that serve as temporary prisons for convicts set to be transferred to Australia and other penal colonies. One of these “prison hulks” is the HMS Bellorophon, now called the HMS Captivity. A too-young cook is walking above and below deck, passing out the evening’s portion of hard biscuits and pea soup.",
        prompts: [
            "<strong>Paint the Scene:</strong> How do we know the Captivity is a nightmare of filth and desperation?",
            "Narrate a scene in which we see the convicts at leisure. How do they entertain themselves? How do they maintain their connection to God and society, if at all?",
            "Narrate a scene in which we see a convict being punished by a ship’s officer. What did the convict do? How is the punishment being carried out?",
            "Narrate a scene in which we see a convict finding comfort and companionship within the bulkheads of the Captivity.",
        ],
    },
    "The Dinner Party": {
        title: "The Dinner Party",
        intro: "Eric Taylor has a good job as a clerk, and with his wife Abigail they form the very picture of the respectable new Victorian middle class. Behind the lace curtains of their terrace home, they are throwing a small dinner party for equally respectable friends, the Davenports. The Taylor’s daughter Maude plays piano passably in the parlour before dinner is served.",
        prompts: [
            "<strong>Paint the Scene:</strong> As the Taylors and the Davenports enter the dining room, what do we see that shows the Taylors have made their best efforts to impress, and how do we know the Davenports are a rung above them in terms of wealth and prestige?",
            "Mrs. Taylor and Mrs. Davenport hate one another, how do they subtly lash out over the course of dinner without drawing attention or causing a scene?",
            "Maude and the Davenports’ son Alexander both chafe under the expectations of their parents. As the meal draws to a close, how do we see this expressed in their conversation or petty acts of rebellion?",
            "Mr. Davenport and Mr. Taylor withdraw into Taylor’s study for port and cigars. Alone, how do they expose the vices they hide from society to one another?"
        ],
    },
    "Brown’s Hotel": {
        title: "Brown’s Hotel",
        intro: "None of the 117 rooms at Brown’s Hotel on Albermarle Street are the same, though they each have housed some of the most fashionable people you’ll find in London or anywhere. A concierge, Teddy Miller, delights in spying on the hotel’s posh clientele.",
        prompts: [
            "<strong>Paint the Scene:</strong> Teddy puts his ear up against the door of a wealthy young bachelor. What does he hear that makes him desperately want the life of this young bachelor?",
            "Teddy rummages through the personal effects of an actress staying at the hotel while she is out. What does he find that makes him desire her or desire to be her?",
            "Teddy draws a hot bath for a pair of good-looking young men staying in the same room. In what ways does Teddy help bring the erotic subtext of this scene to the fore?",
            "Teddy returns to his tiny, dingy flat in East London. What do we see in Teddy’s apartment that shows how he tries to incorporate bits of glamor into his dull, gray life?",
        ],
    },
    "A Night at the Museum": {
        title: "A Night at the Museum",
        intro: "In the heart of Bloomsbury the British Museum has recently been expanded and renovated, housing relics of civilisations plundered by British adventurers, explorers, and colonial officers. Kamal Mansour once led excavations in Luxor, but came to work at the museum as a caretaker, and we follow him on his nightly rounds.",
        prompts: [
            "<strong>Paint the Scene:</strong> Kamal sighs as he sees the soot and grime of industry settling on the Parthenon marbles. What scenes does he see of classical Athens that demonstrate its role as a dominant centre of civilisation and martial power?",
            "Polishing the marble floor in a room of Roman relics, Kamal takes a moment to look around. What items tell a story of the supposed decadence of Rome?",
            "In the Egyptian hall, Kamal is surrounded by the works of his ancient ancestors—some of them pulled from the sands by his own hands. What here demonstrates inevitable, looming death?",
            "Kamal pauses in the doorway as he sees two young scholars, meeting beneath the statue of Ganymede, one of them nervously clutching a pamphlet of Uranian poetry. As he watches, how do they awkwardly, wordlessly negotiate their assignation?",
        ],
    },
    "A Night at the Grand Guignol, <i>The Laboratory of Hallucinations</i>": {
        title: "A Night at the Grand Guignol, <i>The Laboratory of Hallucinations</i>",
        intro: "Every class of people in London is represented in the audience at the Theatre Grand Guignol. They have come to watch a production of <i>The Laboratory of Hallucinations</i>, a story of revenge.",
        prompts: [
            "<strong>Paint the Scene:</strong> As the limelights pop to life and the crimson curtain is raised, what do we see as we scan the stage that tells us this is the story of a mad scientist.",
            "Describe Act I, in which a mad scientist discovers his wife is having an affair with another man.",
            "Describe Act II, in which the mad scientist kidnaps his wife’s lover and uses an experimental technique to take over his mind.",
            "Describe Act III, in which the enthralled man manages to turn on the mad scientist and destroy him; the final scene should be very bloody.",
        ],
    },
    "Perched in the Rookery": {
        title: "Perched in the Rookery",
        intro: "Decrepit tenements lean against one another like drunks, broken windows covered by rotting boards and old newspapers decrying the moral decline of the city, alleys cramped, dark, and full of oozing filth. This rookery is publicly despised by the well-heeled of London as they drive the unfortunate into it, and the source of much salacious interest in private. ",
        prompts: [
            "<strong>Paint the Scene:</strong> A squad of peelers come in mob-handed to drag off a bunch of the usual suspects for a robbery charge. What do we see of those who get picked up in the raid? What do the peelers use to justify their brutality?",
            "Two families share a damp garret, a single room with rainwater leaking in through the rotted shingles. As they huddle together for warmth against the cold night air, what little touches of homeliness do we see that show they are making the best of their situation?",
            "In a lean-to slumped in a reeking alley a small group of pickpocket urchins divvy up their spoils to buy food. What objects of frivolous wealth have they managed to lift?",
            "Describe someone we see making their way back to their home through the cramped alleys, and the desperation that has led them here.",
        ],
    },
    "A Night at the Grand Guignol, <i>Good For Her</i>": {
        title: "A Night at the Grand Guignol, <i>Good For Her</i>",
        intro: "Every class of people in London is represented in the audience at the Theatre Grand Guignol. They have come to watch a production of <i>Good For Her</i>, a story about a nanny that murders the upper class children in her care.",
        prompts: [
            "<strong>Paint the Scene:</strong> As the limelights pop to life and the crimson curtain is raised, what do we see as we scan the stage that shows how the nanny lives a modest life compared to the rich family she serves?",
            "Describe Act I, in which the two children are very abusive toward the nanny.",
            "Describe Act II, in which, pushed past her limits, the nanny murders her bratty charges. How does the audience respond?",
            "Describe Act III, in which the nanny gets her comeuppance; the final scene should be very bloody.",
        ],
    },
    "A Show at Tavistock Hall": {
        title: "A Show at Tavistock Hall",
        intro: "Tavistock Hall was one of the earliest custom built music halls in London. While the business started as a pub with a sideline in entertainers, they commissioned a space specifically for performances. The clientele sit at tables, cabaret style, and can drink and eat while watching a variety show. It is an affordable luxury for London’s working class, and the crowd at Tavistock’s is already lively as the show begins...",
        prompts: [
            "<strong>Paint the Scene:</strong> The audience make their way to their seats as the orchestra begins playing. Describe one of the audience members, and how we can tell they have been looking forward to this evening.",
            "Parson Klapp is a larger than life caricature of a rural clergyman performed by a male impersonator in a comical bit with jokes and bawdy songs. How does the act poke fun at the establishment?",
            "The Aldwych Amazons are a pair of twin sisters who have devoted themselves to athletics and body-building. What feats of strength and endurance do we see them perform, and how do we see they take pride in their bodies?",
            "Sartini the Superlative is an illusionist whose performances inspire wonder in the audience. What about his act demonstrates he may have some real knowledge of mystical traditions?",
        ],
    },
    "The Bellefort Murder": {
        title: "The Bellefort Murder",
        intro: "Charles and Nancy Bellefort have been married for ten years and they absolutely despise each other. Tonight is the night when one of them will finally snap.",
        prompts: [
            "<strong>Paint the Scene:</strong> As we look around the Belleforts’ home, how do we know their love for one another died long ago?",
            "Narrate a scene in which Charles does something to get under Nancy’s skin.",
            "Narrate a scene in which Nancy humiliates Charles.",
            "Which of the two can’t take it any longer? Describe them murdering the other one. Are they happy at the end?",
        ],
    },
    "Billingsgate Fish Market": {
        title: "Billingsgate Fish Market",
        intro: "The fish market at Billingsgate, within the bounds of the City of London itself, is the largest in the world. Even in the dead of night it is a hive of activity as the porters, traders, and fishwives prepare for the return of the trawlermen before the sun rises over the Thames. Stalls are scrubbed ready for the day’s catch, and lamps lit on the wharves.",
        prompts: [
            "<strong>Paint the Scene:</strong> Before dawn has broken, the market is already bustling. Describe a moment in which the loud, messy industry of the market reflects that of London as a whole.",
            "David Mendes, a sephardic Jew, has a stall selling battered fish and chipped potatoes deep fried in a vat of oil. Workers on their way home from a late shift stop for a hot meal. Who stops by and what do they vent about as David prepares their food?",
            "Maggie Dhillon is a fishwife of middle years with a lifetime’s experience in the market. As the catch comes in and she bargains with trawlermen and customers, how do we see that this is her domain, and she refuses to fit the mould of genteel womanhood?",
            "Bridget MacKenna is a kitchen maid, one of the first customers to arrive at the market. As she moves between the stalls, how do we see she is desperate to impress her master?",
        ],
    },
    "The Cult of the Pig": {
        title: "The Cult of the Pig",
        intro: "A secretive cult dedicated to the pagan swine god Moc’h has gathered in a fashionable salon on this holy night to make offerings to their porcine deity.",
        prompts: [
            "<strong>Paint the Scene:</strong> How has this otherwise sumptuously decorated salon been changed to make it a ritual space dedicated to an ancient pagan pig god?",
            "Moc’h demands a sacrifice of riches. What does the cult offer him? Describe the manner of the offering.",
            "Moc’h demands a sacrifice of status. What does the cult offer him? Describe the manner of the offering.",
            "Moc’h demands a sacrifice of blood. What does the cult offer him? Describe the manner of the offering.",
        ],
    },
    "St. Osana’s Home for the Destitute": {
        title: "St. Osana’s Home for the Destitute",
        intro: "St. Osana’s is a modest sized workhouse, with around 300 inmates. The cramped, unsanitary accommodation is segregated by age and gender, with families separated except for babes in arms. The food is meagre, the work frequently pointless, and the discipline harsh and arbitrary. After lights out, the house is silent but for muffled sobs and snatches of whispered conversation.",
        prompts: [
            "<strong>Paint the Scene:</strong> What signs do we see that this place is not just pointlessly cruel, but deliberately so?",
            "Cedric Decker is a boy of eleven, whose father was a wealthy wine merchant until gambling landed him in debtors' jail. As Cedric lies in his bed in the boy’s wing, how do we see his sheltered upbringing has not prepared him for this place?",
            "Milly Cooper cradles her young baby in her arms, softly murmuring stories of the baby’s father, a man of noble blood. What do we learn of him?",
            "Walter McTavish is a homeless ex-soldier, who sleeps on the filthy straw-covered floor of the casual ward when he’s not been able to beg and scrounge enough for a bed elsewhere. What has he lost in service to Queen and country?",
        ],
    },
    "A Drink at the Four Magpies": {
        title: "A Drink at the Four Magpies",
        intro: "The Four Magpies is a small, unassuming pub in the heart of London’s West End. It is a popular haunt for the city’s working class, who come here to relax after a hard day’s work. The pub is known for its cheap beer and hearty food, and for the friendly atmosphere it exudes.",
        prompts: [
            "<strong>Paint the Scene:</strong> The pub is busy with customers, many of whom are already drunk. Describe a moment in which the pub reflects the spirit of London as a whole.",
            "Curtis Jackson is a young barrow-boy who has heard rumours of the Four Magpies, but never visited before. How do we see him make his first nervous steps inside, and how is he drawn in?",
            "A well-dressed toff enters the pub, clearly cruising for trade. Which eager lads compete—good-naturedly or otherwise—for his attention, and who just scoffs at him?",
            "As last orders are called and people start to file out of the pub, how do we see Polly looking after her customers with words or action where needed?",
        ],
    },
    "An Evening Promenade in Covent Garden": {
        title: "An Evening Promenade in Covent Garden",
        intro: "Covent Garden houses a large market—selling mostly fruit, vegetables, and fresh flowers—recently covered by a new market building. While most of the stalls have packed up by the time dusk falls, the area is still abuzz with visitors—both the Royal Opera House and the Theatre Royal can be found here. And while it has cleaned up its image a little, it still has a reputation for hosting ladies of the evening.",
        prompts: [
            "<strong>Paint the Scene:</strong> As crowds gather for evening performances, and market porters clear down stalls, describe how this place is a crossroads for all strata of London society.",
            "A young girl sells bouquets outside the flower hall, made up from the leftovers of the day's trade. Who comes to her to buy, and who are they taking the flowers to?",
            "What scenes of high drama do we see play out on the stage of the Royal Opera House, and how do we see these same tragedies and romances play out on the street outside?",
            "In a gin palace later in the evening, sex workers and actors sit side by side, enjoying a drink after a busy night. How do we see the kinship they feel for each other?",
        ],
    },
    "The Attic at Gransby House":     {
      title: "The Attic at Gransby House",
      intro:
        "Gransby House is a fine mansion in Mayfair, but above the grand rooms is a cramped series of attic rooms that is the beating heart of the house: the maids’ quarters. Alternating between too hot and too cold, lit only by candlelight, this is the girls’ only refuge from their life of service. With shifts the last to bed and the first awake, there are a scant few hours of silence every night.",
      prompts: [
        "<strong>Paint the Scene:</strong> The attic quarters are cramped, with whitewashed wooden partition walls separating the girls into rooms of four or so occupants. What touches of the girls’ personalities do we see added to their personal spaces?",
        "A group of girls gather in one room, gossiping in hushed tones about potential beaus—fellow servants, boys from back home, or even a member of the household. Who dreams of true love (or desire), who of escape from service by marriage, and who remains notably quiet on the subject?",
        "Shona Muir, one of the chambermaids, is just about to unpin her cap when the servants bell rings. What last domestic duties is she called to attend to by members of the household as the house settles down for the night?",
        "Kitty Saxton and Daisy Warren share a room with a couple of other girls. When all is quiet, Kitty sneaks into Daisy’s bed. What comfort do they share with one another? Do the other girls, aware of what is going on, maintain a discreet silence or gently rib them?",
      ],
    }
}

export const venusianUnscenes: Record<string, UnsceneContent> = {
  "Visitors Among Us": {
    title: "Visitors Among Us",
    intro:
      "For the first few days London could not stop talking about the arrival of visitors from another world. But now a kind of normalcy has settled and tonight we see how ordinary people are coming to accept the presence of the Venusians.",
    prompts: [
      "<strong>Paint the Scene:</strong> A member of Gesod’s entourage, flanked by two robotic soldiers, walks the streets of London. Are the locals excited, curious, or fearful, and how do we know this?",
      "Adora is a seamstress who specializes in fashion for highborn ladies. What Venusian elements do we see her incorporating into her latest designs?",
      "Rufus and Joseph, a pair of middle-aged factory workers, spend most of their evenings sitting on the front step and discussing current events together. What do they think of the Venusian arrival?",
      "Chadwick is a writer for the tabloid The Illustrated Police News, and is working late on an article. What completely unfounded plot will he accuse the Venusians of in his piece?",
    ],
  },
  "Life on Venus": {
    title: "Life on Venus",
    intro:
      "As night falls in London across the void of space, through thick, yellow clouds, day breaks on Venus. In one village, one of the countless that dot this alien planet, the residents emerge from their humble dwellings to greet another day.",
    prompts: [
      "In poor light the figures could be mistaken for humans. What alien feature marks them as beings from another world?",
      "<strong>Paint the Scene:</strong> What signs do we see showing this village is under the occupation of Gesod’s Empire?",
      "Most of these villagers toil in fields of alien wheat to provide food for the Empire. One of them is brutally punished by a robotic soldier for failing to work quickly enough. Do their fellow villagers react with open anger, or do they do their best to ignore this?",
      "As the cloud-dimmed sun begins to set, a few villagers secretly meet to engage in a local custom banned under Gesod’s rule. What is it?",
    ],
  },
  "The Fall of Taraxes": {
    title: "A Night at the Grand Guignol, <i>The Fall of Taraxes</i>",
    intro:
      "Every class of people in London is represented in the audience at the Theatre Grand Guignol. They have come tonight to see a play written in honor of the visiting Venusians, a dramatization of the conflict between Gesod and his brother Taraxes as they struggled for the throne. ",
    prompts: [
      "<strong>Paint the Scene:</strong> As the limelights pop to life and the crimson curtain is raised, how has the scene been set to depict the landscape of Venus on the stage?",
      "Describe Act I, in which Taraxes delivers an impassioned speech against Gesod to his assembled forces. In what ways does the performance go out of its way to depict this as foolish and misguided?",
      "Describe Act II, in which Taraxes’s plan is defeated. What masterstroke does Gesod leverage against his brother, demonstrating his cunning? ",
      "Describe Act III, in which Taraxes is put to death in a public execution. Make it bloody.",
    ],
  },
}

export const conflagration: Record<string, UnsceneContent> = {
  "The Conflagration of London": {
    title: "The Conflagration of London",
    intro: "A seasoned hunter knows that not every hunt goes according to plan, and thus a contingency must always be at the ready. Unbeknownst to the rest of his family, Sir Alexander Wellington-Hughes III and his youngest son, Thaddeus, have installed a network of explosives beneath several places across London—prescribed to flush out the monstrous corruption that infects the city's institutions. As the sun sets, London burns bright while the city skyline fills with acrid smoke accompanied by the echoes of explosions and screams. ",
    prompts: [
        "Clerkenhall Workhouse on Coppice Row, an institution notorious for its squalid conditions, is congested with smoke and panic. Despite the chaos and the opportunity it allows for individuals to escape, how do we see the laborers band together to save one another instead?",
        "The parish at Westminster Abbey pray for salvation as the fires eat away at the centuries-old church. What monstrous entities descend on the scene—either to take advantage of the disaster, or to help deliver the flock from a fiery end? ",
        "As the city continues to burn, the Halls of Parliament erupt in bureaucratic arguments over how best to react to the ongoing catastrophe. What loss does the city suffer as its leaders bicker over how best to serve it? ",
        "<strong>Paint the Scene:</strong> No neighbourhood is safe in London, not even Belgrave Square. Flames get their fill of the classical-style homes that neighbour Hargrave House. As they descend upon the Gothic-revival building, describe how your Hunter’s room is transformed by the fire. ",
    ],
  },
}
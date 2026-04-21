import type { RoomContent } from "../../types";


export const larderContent: RoomContent = {
    title: "The Larder",
    intro: "Thick stonework to keep the damp out and the cold in. Wooden shelves wedged between the stones and piled high with jars, fresh produce, and sacks of dry goods. Meat hanging from hooks, the occasional fly buzzing lazily about.",
    prompts: [
        "<strong>Paint the Scene:</strong> The residents of Hargrave House are known to have some peculiar dietary needs and demands. What is being stored here at your request?",
        "There are more things in the larder than are dreamt of in mundane culinary philosophy. What do you see preserved in brine and sealed for age and purpose unknown? Why does its mere presence here make you uneasy?",
        "Residents of Hargrave House still talk about the carcass of a bizarre creature that was once stored here, said to be the last of its kind. Describe the beast’s defenses, natural and unnatural, that made it such a fearsome foe, then narrate a scene that demonstrates why bringing even its lifeless form back to Hargrave House was sheer hubris and most unwise.",
        "Special provisions are being staged here for an upcoming anniversary dinner. What is being commemorated? What key ingredient will serve to remind attendees of the cause for celebration or remembrance?",
    ],
    onUnlock: {
        text: [
            "Whenever you succumb to the sudden urge to consume raw flesh in the Larder, you draw the attention of the pagan swine god Moc’h, whose influence is still felt here long after the reckless Hunter who venerated him was banished from Hargrave House. Roll with Sensitivity. If the flesh belonged to a humanoid creature, roll with advantage. ",
            "<strong>On a 10+,</strong> Moc’h reveals secrets in the meat (ask the Keeper for a Clue) and you are sated for now (clear an appropriate Condition).",
            "<strong>On a 7-9,</strong> as above but take the Condition: Ravenous instead of clearing one.",
            "<strong>On a miss,</strong> Moc’h demands a sacrifice of riches, status, or blood (Keeper’s choice). During the next Night Phase, describe how you satisfy the request, or retire this character after narrating a scene where they are consumed by their own bloodlust.",
        ],
    },
}
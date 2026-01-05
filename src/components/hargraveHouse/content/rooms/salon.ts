import type { RoomContent } from "./types";

export const salonContent: RoomContent = {
	title: "The Salon",
	intro: "Plush Italian loveseat and matching chairs. Gold candelabras on ornate tables. A single massive window looking out onto Belgrave Square.",
	prompts: [
		"<strong>Paint the Scene:</strong> What do you see in this room that makes it the most comfortable spot in the entire house? ",
		"It is the summer of 1814, the height of the Regency era, and Hunter-in-residence Helena Shrike has invited the vampiress Camille Artois to Hargrave House under a banner of peace. As Camille arrives, what does she notice the Hunters have done to make her feel at ease? ",
		"Continue the scene between Helena and Camille. As they talk and drink, what suggests that each is enjoying the other’s company more than they suspected they would? What suddenly causes Camille to want to call the whole thing off and make for the exit? ",
		"How does Helena stop Camille, and how does she use the few scant seconds that she gains to ultimately convince Camille to work with Hargrave House? What offer does she present that Camille cannot ignore? ",
	],
	onUnlock: { text: ["<strong>When you trigger the Vulnerable Move with a Side Character in the Salon</strong>, always trigger the Day Move instead of the Night Move, so long as you have not taken hostile action against them in the scene."] },
};

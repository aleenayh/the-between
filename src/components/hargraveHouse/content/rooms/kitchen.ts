import type { RoomContent } from "./types";

export const kitchenContent: RoomContent = {
	title: "The Kitchen",
	intro:
		"An enormous wood-fired oven. Stone slab counters, more like altars than work surfaces. Cracked tile floors. ",
	prompts: [
		"<strong>Paint the Scene:</strong> The kitchen existed long before the rest of the house, long before the city of London, long before there was an England. What do you see that reminds you of this fact?",
		"<strong>Paint the Scene:</strong> It’s a time before recorded history, and a group of warriors who call themselves the Keepers of the Crystal Ember are sat around a communal fire, enjoying what is likely to be their last meal, for the hordes of the Great Wolf-King are near. How do these men and women comfort each other? How do they enjoy what are likely their final hours on this plane of existence? ",
		"The Great Wolf-King is here. Describe the indescribable—the horror of his coming, the quaking of the beasts and babes, the tearing of the land and sky, the baying of the hordes. ",
		"<strong>Paint the Scene:</strong> The Crystal Ember is extinguished this night, but the battle is fierce, and the Great Wolf-King is turned away… for now. Though they will not be remembered, our stalwarts died with bloody mirth in their hearts. How so? ",
	],
	onUnlock: {
		text: [
			"The Arcane Prison is now available to be explored. But where is the Arcane Prison...?",
		],
	},
};

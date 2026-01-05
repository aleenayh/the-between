import type { RoomContent } from "./types";

export const servantsContent: RoomContent = {
	title: "The Servants' Quarters",
	intro: "Sloped plaster ceiling; burgundy tile floors. Upper-floor footfalls and the gurgle of the house’s plumbing. Scrounged furniture from when staff would gather for gossip and a nightcap.",
	prompts: [
		"<strong>Paint the Scene:</strong> These rooms are mostly empty nowadays as, given the place’s history, very few people want to work at Hargrave House. They have most frequently been used as a place for trysts between the house’s residents. What here reminds you of that? ",
		"1587: Over drinks, Edith Simmons, the housekeeper, regales the staff with a story of accidentally interrupting a hunter and their supernatural paramour. What sultry scene does Edith describe? What details does she linger on to let us know she secretly liked what she saw? ",
		"Head-cold season, 1632: Arthur Godwin, the butler, tries to alleviate the staff’s misery by describing the much more debilitating eldritch diseases and foul curses he’s seen in the course of his employment. Which gruesome malady makes some servants think twice about working at Hargrave House? ",
		"August 1744: two odorless, gaunt men—both apparently named “Mr. Kevins”—massacre most of Hargrave House. From her cramped hiding place, Iphigenia Jones witnesses the grisly death of a fellow maid. In what horrid place does Iphigenia hide? What ordinary household object does she see Mr. Kevins use to execute her friend? ",
	],
	onUnlock: { text: ["When you <strong>initiate a secret tryst in the Servants Quarters with another Hunter</strong>, trigger the Vulnerable Move; you may both speak freely about your pasts. Until you trigger this move again, you may each use any unmarked item from your paramour’s Personal Quarters once (they mark it on their sheet as usual)."] },
};

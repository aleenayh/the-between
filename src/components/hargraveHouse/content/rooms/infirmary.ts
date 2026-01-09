import type { RoomContent } from "../../types";

export const infirmaryContent: RoomContent = {
	title: "The Infirmary",
	special:  "This is a special Room that can only be put in play according to the instructions on The Mother playbook. Thereafter, the Keeper can select it for a Hargrave House Night Phase in the normal manner. When this Room is the focus of such a Night Phase, all Hunters except the Mother can take action as if it were a London Night Phase (in which case, the prompts here are used in place of Unscene prompts). The first prompt is answered by all players, as normal; prompts II-IV are answered by the player of the Mother. Only the player of the Mother gets to add something to Personal Quarters at the end.",
	intro: "Three iron-framed beds lined with thin mattresses, each separated by white curtains yellowed at the hems. Air tinged with the sharp scent of carbolic acid and camphor, mingled with the faint copper tang of blood. Glass-fronted cabinets filled with jars and surgical instruments. ",
	prompts: [
		"<strong>Paint the Scene:</strong> This small infirmary was established several years ago by a former resident, Dr. Bartholomew Gastrell. What here shows Dr. Gastrell had unusual ideas about human biology? ",
		"Dr. Gastrell often helped “heal” people from off the streets—beggars, prostitutes, anyone who couldn’t afford proper medical treatment. Looking through some of his old notes, describe a successful case. What radical treatment did Dr. Gastrell prescribe? Why do you think it worked? ",
		"You’ve heard a story about someone who died in Dr. Gastrell’s care, right here in this infirmary. What happened? What evidence of this incident can still be found here? What would you have done differently? ",
		"Dr. Gastrell conducted his own bold experiments related to life and death, not dissimilar from your own. Describe one of these experiments. Why will you succeed where Dr. Gastrell failed? ",
	],
	onUnlock: { text: ["When the Vulnerable Move is triggered in the Infirmary, each Hunter in the scene can clear two Conditions instead of one, so long as at least one of those Conditions is a physical injury."] },
};

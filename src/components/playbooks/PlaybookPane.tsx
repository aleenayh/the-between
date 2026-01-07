import { DiceIndicator } from "../shared/DiceIndicator";
import { PlayerPill } from "../shared/PlayerPill";
import { Section } from "../shared/Section";
import { InformalsPane } from "./informals/InformalsPane";
import { AbilityBoxes } from "./sharedComponents/AbilityBoxes";
import { Conditions } from "./sharedComponents/Conditions";
import { ExperienceTracker } from "./sharedComponents/ExperienceTracker";
import { Extras } from "./sharedComponents/Extras";
import { Masks } from "./sharedComponents/Masks";
import { Moves } from "./sharedComponents/Moves";
import { PersonalQuarters } from "./sharedComponents/PersonalQuarters";
import { Questions } from "./sharedComponents/Questions";
import { playbookKeys, type Character } from "./types";

export function PlaybookPane({ character }: { character: Character }) {
	if (character.playbook === playbookKeys.informals) {
		return <InformalsPane troupe={character} />
	}
	return (
		<section
			aria-label={`Hunter for ${character.name}`}
			className="border-2 border-theme-border-accent bg-theme-bg-primary rounded-lg p-4 h-full flex flex-col gap-2 overflow-hidden relative"
		>
			<DiceIndicator playerId={character.playerId} />
			<PlayerPill playerId={character.playerId} />
			<h2 className="text-lg whitespace-normal text-balance font-bold text-theme-text-accent shrink-0 truncate mx-10">
				{character.name}
			</h2>
			<div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 min-w-0 flex flex-col gap-0">
				<Section title="Conditions">
					<Conditions character={character} />
				</Section>
				<AbilityBoxes stats={character.abilities} abbreviate />
				<ExperienceTracker character={character} />

				<Section title="Moves" collapsible={true}>
					<Moves character={character} />
				</Section>
				<Section title="Personal Quarters" collapsible={true}>
					<PersonalQuarters character={character} />
				</Section>
				<Section title="Masks" collapsible={true}>
					<Masks character={character} />
				</Section>
				<Section title="Questions" collapsible={true}>
					<Questions character={character} />
				</Section>
				<Extras character={character} />
			</div>
		</section>
	);
}

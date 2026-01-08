import { useMemo, useState } from "react";
import { DiceIndicator } from "../shared/DiceIndicator";
import { Section } from "../shared/Section";
import { AdvancementTab } from "./advancement/AdvancementTab";
import { AbilityBoxes } from "./sharedComponents/AbilityBoxes";
import { Conditions } from "./sharedComponents/Conditions";
import { ExperienceTracker } from "./sharedComponents/ExperienceTracker";
import { Masks } from "./sharedComponents/Masks";
import { Moves } from "./sharedComponents/Moves";
import { PersonalQuarters } from "./sharedComponents/PersonalQuarters";
import { Questions } from "./sharedComponents/Questions";
import type {CharacterNotTroupe } from "./types";


const tabsConfig = (character: CharacterNotTroupe) => [
	{
		label: "Moves",
		component: <Moves character={character} />,
	},
	{
		label: "Personal Quarters",
		component: <PersonalQuarters character={character} />,
	},
	{
		label: "Masks",
		component: <Masks character={character} />,
	},
	{
		label: "Questions",
		component: <Questions character={character} />,
	},
	{
		label: "More",
		component: <AdvancementTab character={character} />,
	},
];

export function PlaybookExpanded({ character }: { character: CharacterNotTroupe }) {
	const tabs = useMemo(() => {
		return tabsConfig(character);
	}, [character]);
	const [activeTab, setActiveTab] = useState<keyof typeof tabs>(
		tabs[1].label as keyof typeof tabs,
	);

	console.log("DEBUG: CHARACTER STATE:", JSON.stringify(character, null, 2))

	return (
		<div className="border-2 border-theme-border-accent bg-theme-bg-primary rounded-lg p-4 h-full flex flex-col gap-2 overflow-hidden relative">
			<DiceIndicator playerId={character.playerId} />
			<h1 className="text-2xl font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">
				{character.name}
			</h1>
			<div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 min-w-0 flex flex-col gap-3">
				<Section title="Conditions">
					<Conditions character={character} />
				</Section>

				<AbilityBoxes stats={character.abilities} />
				<ExperienceTracker character={character} />

				<div className="flex gap-1 justify-center text-md flex-wrap">
					{tabs.map((tab) => (
						<button
							type="button"
							className={
								activeTab === tab.label
									? "bg-theme-bg-accent text-theme-text-accent border-theme-border-accent border-2 rounded-lg p-1"
									: "bg-theme-bg-secondary text-theme-text-secondary border-theme-bg-primary border-2 rounded-lg p-1"
							}
							onClick={() => setActiveTab(tab.label as keyof typeof tabs)}
							key={tab.label}
						>
							{tab.label}
						</button>
					))}
				</div>
				{tabs.find((tab) => tab.label === activeTab)?.component}
			</div>
		</div>
	);
}

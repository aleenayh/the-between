import { Section } from "../../shared/Section";
import { playbookBases } from "../content";
import { type CharacterNotTroupe, playbookKeys } from "../types";

export function Extras({ character }: { character: CharacterNotTroupe }) {
	const base = playbookBases[character.playbook];
	return (
		<div className="flex flex-col gap-2 text-left">
			<div className="grid grid-cols-[auto_1fr] gap-2">
				<h3 className="text-sm font-bold text-theme-text-accent">Vice:</h3>
				<p className="text-sm text-theme-text-primary">{character.vice}</p>
				<h3 className="text-sm font-bold text-theme-text-accent">Look:</h3>
				<p className="text-xs text-theme-text-secondary">{character.look}</p>
			</div>
			{character.playbook !== playbookKeys.custom && (
				<Section title="Story" collapsible={true}>
					<div className="flex flex-col gap-2 text-sm text-theme-text-secondary">
						{base.intro.map((intro) => (
							<p key={intro}>{intro}</p>
						))}
					</div>
				</Section>
			)}
		</div>
	);
}

import { useGame } from "../../../../context/GameContext";
import { playbookBases } from "../../content";
import { Character } from "../../types";

export function AdvancementTab({ character }: { character: Character }) {
	return (
		<div>
			<div className="grid grid-cols-2 gap-4 p-10">
				<AdvancementOptionButton
					title="Earn an Advancement"
					onClick={() => {}}
				/>
				<AdvancementOptionButton title="Claim a Reward" onClick={() => {}} />
				<AdvancementOptionButton title="Retire Character" onClick={() => {}} />
				<AdvancementOptionButton title="Ascend the Throne" onClick={() => {}} />
			</div>

			<RetireCharacterModal character={character} />
			<AscendTheThroneModal character={character} />
		</div>
	);
}

function AdvancementOptionButton({
	title,
	onClick,
}: {
	title: string;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			className="hover:bg-theme-bg-accent hover:text-theme-text-accent hover:border-theme-border-accent border-2 rounded-lg p-1 bg-theme-bg-secondary text-theme-text-secondary border-theme-bg-primary"
			onClick={onClick}
		>
			{title}
		</button>
	);
}

function RetireCharacterModal({ character }: { character: Character }) {
	return <div>TODO</div>;
}

function AscendTheThroneModal({ character }: { character: Character }) {
	const copy = playbookBases[character.playbook].ascendTheThrone;

	return (
		<div className="text-theme-text-primary text-md italic">
			{copy.join("\n\n")}
		</div>
	);
}

import { Extras } from "../sharedComponents/Extras";
import type { CharacterNotTroupe } from "../types";
import { AdjustmentModal } from "./AdjustModal";
import { AdvancementModal } from "./AdvancementModal";
import { ModifyMovesModal } from "./ModifyMovesModal";
import { RetireCharacterModal } from "./RetireModal";

export function AdvancementTab({ character }: { character: CharacterNotTroupe }) {
	return (
		<div className="flex flex-col gap-2">
			<div className="grid grid-cols-2 gap-4 p-2 md:p-10">
				<AdvancementModal character={character} />
				<ModifyMovesModal character={character} />
				<AdjustmentModal character={character} />
				<RetireCharacterModal />
			</div>
			<Extras character={character} />
		</div>
	);
}

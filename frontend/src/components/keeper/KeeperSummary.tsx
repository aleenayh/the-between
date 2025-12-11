import { useGame } from "../../context/GameContext";
import { Conditions } from "../playbooks/sharedComponents/Conditions";
import { PlayerPill } from "../playbooks/sharedComponents/PlayerPill";
import type { Character } from "../playbooks/types";
import { CopyInvite } from "../settings/GameInfo";

export function KeeperSummary() {
	const { gameState } = useGame();
	const characters = gameState.players
		.map((player) => player.character)
		.filter((character): character is Character => character !== null);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:hidden overflow-y-auto">
			{characters.map((character) => (
				<div
					key={character.playerId}
					className="border-2 border-theme-border-accent rounded-lg p-4 relative"
				>
					<h2 className="text-lg whitespace-normal text-balance mx-auto">
						{character.name}
					</h2>
					<PlayerPill playerId={character.playerId} />
					<Conditions character={character} />
				</div>
			))}
		</div>
	);
}

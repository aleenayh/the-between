import { useGame } from "../../context/GameContext";
import { Shrine } from "./Shrine";

export function ShrineRow() {
    const {gameState} = useGame();
    const shrines = gameState.shrines;
    const shrineNames = shrines.map(shrine => shrine.id);
		return (
			<div className="flex justify-center gap-2 w-full overflow-x-none">
				{shrineNames.map(name => <Shrine name={name} key={name} />)}
			</div>
		);
	}
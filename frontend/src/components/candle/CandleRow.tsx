import { useGame } from "../../context/GameContext";
import { Candle } from "./Candle";

// Hardcoded candle configurations
const CANDLE_CONFIG = [
    { height: 180, leftPercent: 0 },
    { height: 250, leftPercent: 14 },
    { height: 300, leftPercent: 28 },
    { height: 450, leftPercent: 42 },
    { height: 300, leftPercent: 56 },
    { height: 220, leftPercent: 70 },
    { height: 160, leftPercent: 84 },
];

export function CandleRow() {
    const {gameState} = useGame();
    const shrines = gameState.shrines;
    const colors = shrines.filter(shrine => shrine.state === "completed" || shrine.state === "active").map(shrine => shrine.color);
    
    return (
        <div className="w-full flex justify-center h-[300px]">
            <div className="w-1/3 h-full relative">
                {CANDLE_CONFIG.map((config, index) => (
                    <Candle 
                        key={shrines[index].id}
                        color={colors[index] || null} 
                        height={config.height}
                        leftPercent={config.leftPercent}
                    />
                ))}
            </div>
        </div>
    );
}
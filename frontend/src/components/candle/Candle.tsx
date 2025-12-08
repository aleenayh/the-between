import { useId } from "react";
import { Flame } from "./Flame";

interface CandleProps {
    color: string | null;
    height: number;
    leftPercent: number;
}

// Flame size (2/3 of original 40)
const FLAME_WIDTH = 27;

export function Candle({ color, height, leftPercent }: CandleProps) {
    const wickHeight = 12;
    const totalCandleHeight = height + wickHeight;
    // Position flame proportionally - 70/192 ≈ 0.365 worked for height=180
    const flameBottomOffset = Math.round(totalCandleHeight * 0.365);
    
    return (
        <div 
            className="absolute bottom-0"
            style={{ 
                left: `${leftPercent}%`,
                width: 40,
            }}
        >
            {/* Candle stick */}
            <div style={{ height: totalCandleHeight }}>
                <CandleStick height={height} />
            </div>
            {/* Flame - positioned above candle, overlapping the wick */}
            {color && (
                <div 
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{ 
                        bottom: flameBottomOffset+3,
                        width: FLAME_WIDTH,
                        aspectRatio: '90/190',
                    }}
                >
                    <Flame color={color} />
                </div>
            )}
        </div>
    );
}

function CandleStick({height}: {height: number}) {
    const gradientId = useId();
    const wickHeight = 12;
    const totalHeight = height + wickHeight;
    
    return (
        <svg 
            width="100%" 
            height="100%" 
            viewBox={`0 0 100 ${totalHeight}`}
            preserveAspectRatio="xMidYMax meet"
        >
            <title>Candle Stick</title>
            <defs>
                {/* Gradient for subtle cylindrical shading */}
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E0D5C3" />
                    <stop offset="45%" stopColor="#F5EFE0" />
                    <stop offset="100%" stopColor="#D4C9B7" />
                </linearGradient>
            </defs>
            
            {/* Wick - curved black line */}
            <path 
                d={`M 50 ${wickHeight} Q 47 6 50 1`}
                stroke="#1a1a1a" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
            />
            
            {/* Main candle body */}
            <rect 
                x="38" 
                y={wickHeight} 
                width="24" 
                height={height} 
                fill={`url(#${gradientId})`} 
            />
            
            {/* Melted wax pool on top */}
            <ellipse 
                cx="50" 
                cy={wickHeight + 3} 
                rx="13" 
                ry="5" 
                fill="#D9CEBC" 
            />
            
            {/* Left drip */}
            <path 
                d={`M 38 ${wickHeight + 4} 
                    Q 36 ${wickHeight + 15} 37 ${wickHeight + 28}
                    Q 38 ${wickHeight + 32} 40 ${wickHeight + 30}
                    Q 39 ${wickHeight + 20} 38 ${wickHeight + 4}`}
                fill="#D9CEBC"
            />
            
            {/* Right drip (smaller) */}
            <path 
                d={`M 62 ${wickHeight + 3}
                    Q 64 ${wickHeight + 10} 63 ${wickHeight + 18}
                    Q 62 ${wickHeight + 22} 60 ${wickHeight + 20}
                    Q 61 ${wickHeight + 12} 62 ${wickHeight + 3}`}
                fill="#D9CEBC"
            />
        </svg>
    );
}
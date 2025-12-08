
import { useId } from 'react';
import frameImg from './assets/frame.png';
import { shrineDescriptions, type ShrineType } from './details';
import guildedImg from './assets/guilded.png';
import mudImg from './assets/mud.png';
import futilityImg from './assets/futility.png';
import { useGame } from '../../context/GameContext';
import type { ShrineState } from '../../context/types';
import { colors } from '../colors';

export const shrineImages: Record<ShrineType, string> = {
    guilded: guildedImg,
    mud: mudImg,
    futility: futilityImg,
    empty: frameImg,
};


export function Shrine({ name }: { name: ShrineType }) {
    const {gameState } = useGame();
    const shrineState = gameState.shrines.find(shrine => shrine.id === name);
    if (!shrineState) return null;
    const {color, state} = shrineState;
    return (
        <div className="flex-1 w-fit">
            <div className="flex flex-col">
                <div className="mx-auto max-w-48 w-full relative overflow-hidden">
                    <img src={frameImg} alt="shrine frame" className="w-full h-auto" />
                    <ShrineGradient color={color} state={state}/>
                    <img src={shrineImages[name]} alt={name} className="absolute inset-0 w-full h-auto opacity-0.5" />
                </div>
                <h3 className="text-sm font-bold text-center whitespace-nowrap">{shrineDescriptions[name].fullName}</h3>
            </div>
        </div>
    );
}

export function ShrineGradient({ color, state }: { color: string | null, state: ShrineState }) {
    // Absolutely positioned to overlay the frame image
    const baseClass = "absolute inset-0 pointer-events-none";
    // Ellipse: 45% horizontal radius, 60% vertical radius (portrait shape)
    // Solid until 65%, then sharp fade
    const mask = {
        maskImage: 'radial-gradient(ellipse 45% 60% at center, black 0%, black 60%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 45% 60% at center, black 0%, black 60%, transparent 80%)',
    }

    switch (state) {
        case "active":
            return (
                <div className={`${baseClass} animate-pulse`} style={mask}>
                    <MottledGradient color={color} />
                </div>
            );
        case "completed":
            return (
                <div className={`${baseClass} opacity-0.5`}style={mask}>
                    <MottledGradient color={color}  />
                </div>
            );
        case "locked":
            return (
                <div className={baseClass} style={mask}>
                    <MottledGradient color={"White"} />
                </div>
            );
        case "available":
            return (<div className={baseClass} style={mask}>
            <MottledGradient color={"White"} />
        </div>)
    }
}

function MottledGradient({ color}: { color: string | null }) {
    const id = useId();
    const colorObject = color ? colors[color] : { h: 0, s: 0, l: 90 };
    // Significantly lighter colors - boost lightness by 30-50%
    const primaryColor = `hsl(${colorObject.h}, ${colorObject.s * 0.6}%, ${Math.min(100, colorObject.l + 35)}%)`;
    const darkColor = `hsl(${colorObject.h}, ${colorObject.s * 0.5}%, ${Math.min(100, colorObject.l + 25)}%)`;
    const lightColor = `hsl(${colorObject.h}, ${colorObject.s * 0.4}%, ${Math.min(100, colorObject.l + 45)}%)`;
    
    const filterId = `mottled${id}`;
    const gradId = `colorGrad${id}`;
    
    return (
            <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full mix-blend-multiply opacity-[0.8]"
                aria-hidden="true"
            >
                <title>Shrine gradient overlay</title>
                <defs>
                    {/* Displacement filter - shifts colors between shades, not opacity */}
                    <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence 
                            type="fractalNoise" 
                            baseFrequency="0.02" 
                            numOctaves="3" 
                            seed="42"
                            result="noise"
                        />
                        <feDisplacementMap 
                            in="SourceGraphic" 
                            in2="noise" 
                            scale="15" 
                            xChannelSelector="R" 
                            yChannelSelector="G"
                        />
                    </filter>
                    
                    {/* Multi-stop gradient for color variation */}
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={lightColor} />
                        <stop offset="25%" stopColor={primaryColor} />
                        <stop offset="50%" stopColor={darkColor} />
                        <stop offset="75%" stopColor={primaryColor} />
                        <stop offset="100%" stopColor={lightColor} />
                    </linearGradient>
                </defs>
                
                {/* Color layer with subtle displacement for organic feel */}
                <rect 
                    width="100" 
                    height="100" 
                    fill={`url(#${gradId})`}
                    filter={`url(#${filterId})`}
                />
            </svg>
    );
}

export function ActiveShrine() {
    const {gameState} = useGame();
    const name = gameState.shrines.find(shrine => shrine.state === "active")?.id;
    if (!name) return null;

    return <div>
            <div><p className="text-sm text-gray-500">
                {shrineDescriptions[name].description}
            </p>
<div className="flex flex-col gap-2">
                {shrineDescriptions[name].prompts.map((prompt, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: will not change
<div key={index} className="flex gap-2">
                        <h4 className="text-lg font-bold">{index + 1}.</h4>
                        <p className="text-sm text-gray-500">
                            {prompt}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-2"><span className="text-lg font-bold">Rewards</span>
                {shrineDescriptions[name].rewards.map((reward, index) => (
                                        // biome-ignore lint/suspicious/noArrayIndexKey: will not change
                    <div key={index} className="flex flex-col gap-2">
                        <p className="text-sm text-gray-500">
                            {reward}
                        </p>
                    </div>
                ))}
            </div></div>
    </div>
}
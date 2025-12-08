import { useMemo, useState } from "react";
import { useGame } from "../../context/GameContext";
import { PlayerRole } from "../../context/types";
// import { KeeperPane } from "../keeper/KeeperPane";
// import { PlaybookPane } from "../playbooks/PlaybookPane";
import { ActiveShrineDetails } from "../shrine/ActiveShrineDetails";
import { MysteryPane } from "./MysteryRow";

export function FocalContainer() {
	const {
		gameState,
		user: { role },
	} = useGame();
	const activeShrine = gameState.shrines.find(
		(shrine) => shrine.state === "active",
	);
	const activeMysteries = gameState.mysteries.filter(
		(mystery) => mystery.state === "active",
	);

	const tabs = useMemo(() => {
		const dynamicTabs: Record<string, string> = {};

		for (const mystery of activeMysteries) {
			dynamicTabs[mystery.id] = mystery.title;
		}

		dynamicTabs.shrine = "Shrine";
		dynamicTabs.playbook =
			role === PlayerRole.KEEPER ? "Keeper Tools" : "Playbook";

		return dynamicTabs;
	}, [activeMysteries, role]);

	const [activeTab, setActiveTab] = useState<keyof typeof tabs>("playbook");

	return (
		<div className="h-full rounded-lg p-4 bg-theme-bg-secondary border border-theme-border-accent overflow-auto">
			<NavigationTabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>

			{activeTab === "shrine" && activeShrine ? (
				<ActiveShrineDetails name={activeShrine.id} viewerRole={role} />
			) : null}
			{/* {activeTab === "playbook" &&
				(userRole === PlayerRole.KEEPER ? <KeeperPane /> : <PlaybookPane />)} */}
			{activeTab !== "shrine" && activeTab !== "playbook" && (
				<MysteryPane
					mystery={activeMysteries.find((mystery) => mystery.id === activeTab)}
				/>
			)}
		</div>
	);
}

function NavigationTabs({
	tabs,
	activeTab,
	setActiveTab,
}: {
	tabs: Record<string, string>;
	activeTab: string;
	setActiveTab: (tab: string) => void;
}) {
	return (
		<div className="flex justify-center gap-2">
			{Object.entries(tabs).map(([key, label]) => (
				<button
					type="button"
					key={key}
					onClick={() => setActiveTab(key)}
					className={
						activeTab === key
							? "bg-theme-bg-accent text-theme-text-primary font-bold border-theme-border-accent border-2 rounded-lg p-2"
							: "bg-theme-bg-secondary text-theme-text-secondary font-bold border-theme-bg-primary border-2 rounded-lg p-2"
					}
				>
					{label}
				</button>
			))}
		</div>
	);
}

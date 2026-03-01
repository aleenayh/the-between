import { Tooltip } from "radix-ui";
import { useGame } from "../../../context/GameContext";
import { CopyInvite } from "../../settings/GameInfo";
import { PullOutDrawer } from "../../shared/PullOutDrawer";
import { Section } from "../../shared/Section";
import { StyledTooltip } from "../../shared/Tooltip";
import { InformalsPane } from "../informals/InformalsPane";
import { PlaybookPane } from "../PlaybookPane";
import { type Character, playbookKeys } from "../types";
import { ReactComponent as GroupIcon } from "./group.svg";

export function PullOutCharacterOverview({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}) {
	const {
		gameState,
		user: { id },
	} = useGame();
	const otherCharacters = gameState.players
		.filter((player) => player.id !== id)
		.map((player) => player.character)
		.filter((character): character is Character => character !== null);

	return (
		<div className="flex flex-col md:hidden justify-start items-start h-full w-full pointer-events-none">
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
				<button
				type="button"
				aria-label="Open character overview"
				className="hidden md:block drawerButton"
				onClick={() => setIsOpen(!isOpen)}
			>
				<GroupIcon className="w-full h-full" />
			</button>
				</Tooltip.Trigger>
			<Tooltip.Content className="z-30" side="right">
				<StyledTooltip>View characters.</StyledTooltip>
			</Tooltip.Content>
			</Tooltip.Root>
			<PullOutDrawer 
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
						<h1 className="text-[2rem] font-bold text-theme-text-accent">
							Other Hunters
						</h1>
						{otherCharacters.length > 0 ? (
							<div className="w-full min-w-0 flex flex-col gap-2 overflow-y-auto">
								{otherCharacters.map((character) => (
									<Section
										key={character.playerId}
										title={character.playbook === playbookKeys.informals ? "The Informals" : character.name}
										collapsible
										minify
									>
										{character.playbook === playbookKeys.informals ? <InformalsPane troupe={character} /> : <PlaybookPane character={character} />}
									</Section>
								))}
							</div>
						) : (
							<CopyInvite />
						)}
			</PullOutDrawer>
		</div>
	);
}

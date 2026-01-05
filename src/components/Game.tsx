import { ReactComponent as LogoSpine } from "./assets/logo-spine.svg";
import { Drawers } from "./Drawers";
import { CharacterOverview } from "./playbooks/CharacterOverview";


export function Game() {
	return (
		<div className="flex flex-col w-full h-full p-4 overflow-hidden">

			<Drawers />
			<div className="ml-8 flex-1 min-h-0 overflow-hidden z-[5]">
				<CharacterOverview />
			</div>
				<LogoSpine className="absolute bottom-6 left-0 text-theme-text-accent w-12 h-auto"/>
		</div>
	);
}

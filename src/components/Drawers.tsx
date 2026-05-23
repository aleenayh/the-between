import { useState } from "react";
import { ReactComponent as Logo } from "./assets/between-logo.svg";
import { HargraveHouseSheet } from "./hargraveHouse/HargraveHouseSheet";
import {ReactComponent as HouseIcon} from "./hargraveHouse/house.svg"
import { MastermindSheet } from "./mastermind/MastermindSheet";
import {ReactComponent as HourglassIcon} from "./mystery/hourglass.svg"
import {ReactComponent as MoonIcon} from "./mystery/icons/moon.svg"
import { MysterySheet } from "./mystery/MysterySheet";
import { NotesPane } from "./notes/NotesPane";
import {ReactComponent as NotesIcon} from "./notes/quill.svg"
import {ReactComponent as HunterIcon} from "./playbooks/drawer/group.svg"
import { PullOutCharacterOverview } from "./playbooks/drawer/PullOutDrawer";
import {ReactComponent as BookIcon} from "./referenceSheet/book.svg"
import { ReferenceSheet } from "./referenceSheet/referenceSheet";
import {ReactComponent as HeartShieldIcon} from "./safety/heartshield.svg"
import { SafetyPane } from "./safety/SafetySheet";
import {ReactComponent as CogIcon} from "./settings/cog.svg"
import { SettingsPane } from "./settings/SettingsPane";
import { UnsceneSheet } from "./unscenes/unsceneSheet";

const tabKeys = ["reference","notes", "hargraveHouse", "hunters", "home", "mystery", "unscene",  "safety", "settings"];
const icons: Record<typeof tabKeys[number], React.ReactNode> = {
	reference: <BookIcon className="w-full h-full" />,
	mystery: <HourglassIcon className="w-full h-full" />,
	hargraveHouse: <HouseIcon className="w-full h-full" />,
	hunters: <HunterIcon className="w-full h-full" />,
	home: <Logo className="w-full h-full" />,
	unscene: <MoonIcon className="w-full h-full" />,
	notes: <NotesIcon className="w-full h-full" />,
	safety: <HeartShieldIcon className="w-full h-full" />,
	settings: <CogIcon className="w-full h-full" />,
};

export function Drawers() {
	const [refOpen, setRefOpen] = useState(false);
	const [huntersOpen, setHuntersOpen] = useState(false);
	const [mysteryOpen, setMysteryOpen] = useState(false);
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [notesOpen, setNotesOpen] = useState(false);
	const [hargraveHouseOpen, setHargraveHouseOpen] = useState(false);
	const [mastermindOpen, setMastermindOpen] = useState(false);
	const [safetyOpen, setSafetyOpen] = useState(false);
	const [unsceneOpen, setUnsceneOpen] = useState(false);

	return (
		<div className="hidden md:flex absolute top-0 left-0 w-full h-auto flex-col justify-start items-start pointer-events-none">
			<ReferenceSheet isOpen={refOpen} setIsOpen={setRefOpen} />
			<MysterySheet isOpen={mysteryOpen} setIsOpen={setMysteryOpen} />
			<MastermindSheet isOpen={mastermindOpen} setIsOpen={setMastermindOpen} />
			<PullOutCharacterOverview
				isOpen={huntersOpen}
				setIsOpen={setHuntersOpen}
			/>
			<HargraveHouseSheet
				isOpen={hargraveHouseOpen}
				setIsOpen={setHargraveHouseOpen}
			/>
			<UnsceneSheet
				isOpen={unsceneOpen}
				setIsOpen={setUnsceneOpen}
			/>
			<NotesPane isOpen={notesOpen} setIsOpen={setNotesOpen} />
			<SafetyPane isOpen={safetyOpen} setIsOpen={setSafetyOpen} />
			<SettingsPane isOpen={settingsOpen} setIsOpen={setSettingsOpen} />
		</div>
	);
}

export function MobileDrawerNavigation() {
	const [refOpen, setRefOpen] = useState(false);
	const [huntersOpen, setHuntersOpen] = useState(false);
	const [mysteryOpen, setMysteryOpen] = useState(false);
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [notesOpen, setNotesOpen] = useState(false);
	const [hargraveHouseOpen, setHargraveHouseOpen] = useState(false);
	const [safetyOpen, setSafetyOpen] = useState(false);
	const [unsceneOpen, setUnsceneOpen] = useState(false);

	const closeAllExcept = (key: typeof tabKeys[number] | null) => {
		setRefOpen(false);
		setMysteryOpen(false);
		setHuntersOpen(false);
		setHargraveHouseOpen(false);
		setUnsceneOpen(false);
		setNotesOpen(false);
		setSafetyOpen(false);
		setSettingsOpen(false);
		switch (key) {
			case "reference":
				setRefOpen(true);
				break;
			case "mystery":
				setMysteryOpen(true);
				break;
				case "hargraveHouse":
				setHargraveHouseOpen(true);
				break;
			case "hunters":
				setHuntersOpen(true);
				break;
			case "unscene":
				setUnsceneOpen(true);
				break;
			case "notes":
				setNotesOpen(true);
				break;
			case "safety":
				setSafetyOpen(true);
				break;
			case "settings":
				setSettingsOpen(true);
				break;
			default:
				break;
		}
	}

	return (
		<div className="flex md:hidden">
			<div className="flex absolute top-0 left-0 w-full h-full flex-col justify-start items-start pointer-events-none pb-16">
			<ReferenceSheet isOpen={refOpen} setIsOpen={setRefOpen} />
			<MysterySheet isOpen={mysteryOpen} setIsOpen={setMysteryOpen} />
			<PullOutCharacterOverview
				isOpen={huntersOpen}
				setIsOpen={setHuntersOpen}
			/>
			<HargraveHouseSheet
				isOpen={hargraveHouseOpen}
				setIsOpen={setHargraveHouseOpen}
			/>
			<UnsceneSheet
				isOpen={unsceneOpen}
				setIsOpen={setUnsceneOpen}
			/>
			<NotesPane isOpen={notesOpen} setIsOpen={setNotesOpen} />
			<SafetyPane isOpen={safetyOpen} setIsOpen={setSafetyOpen} />
			<SettingsPane isOpen={settingsOpen} setIsOpen={setSettingsOpen} />
		</div>
		<div className="fixed bottom-0 left-0 right-0 top-auto mx-0 w-full h-auto flex justify-stretch items-center whitespace-nowrap isolate z-10">
		{tabKeys.map((tab) => (
			<button
				type="button"
				className={`mobileNavButton ${tab === "home" ?     "flex-1 scale-125 z-[15]": "scale-100 z-10"}`}
				onClick={() => closeAllExcept(tab)}
				key={tab}
			>
				{    icons[tab]}
			</button>
		))}
	</div>
	</div>
	)

}
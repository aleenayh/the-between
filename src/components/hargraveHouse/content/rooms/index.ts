import { ballroomContent } from "./ballroom";
import { basementContent } from "./basement";
import { conservatoryContent } from "./conservatory";
import { diningContent } from "./dining";
import { gardensContent } from "./gardens";
import { infirmaryContent } from "./infirmary";
import { kitchenContent } from "./kitchen";
import { libraryContent } from "./library";
import { mapContent } from "./map";
import { menagerieContent } from "./menagerie";
import { musicContent } from "./music";
import { ritualContent } from "./ritual";
import { salonContent } from "./salon";
import { servantsContent } from "./servants";
import { trophyContent } from "./trophy";
import type { RoomContent } from "./types";

export enum roomKeys {
	ballroom = "ballroom",
	basement = "basement",
	conservatory = "conservatory",
	dining = "dining",
	gardens = "gardens",
	infirmary = "infirmary",
	kitchen = "kitchen",
	library = "library",
	map = "map",
	menagerie = "menagerie",
	music = "music",
	ritual = "ritual",
	salon = "salon",
	servants = "servants",
	trophy = "trophy",
}

export const roomContent: Record<keyof typeof roomKeys, RoomContent> = {
	ballroom: ballroomContent,
	basement: basementContent,
	conservatory: conservatoryContent,
	dining: diningContent,
	gardens: gardensContent,
	infirmary: infirmaryContent,
	kitchen: kitchenContent,
	library: libraryContent,
	map: mapContent,
	menagerie: menagerieContent,
	music: musicContent,
	ritual: ritualContent,
	salon: salonContent,
	servants: servantsContent,
	trophy: trophyContent,
};

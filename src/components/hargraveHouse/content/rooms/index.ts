
import type { RoomContent } from "../../types";
import { artistContent } from "./artist";
import { ballroomContent } from "./ballroom";
import { basementContent } from "./basement";
import { belltowerContent } from "./belltower";
import { bindingContent } from "./binding";
import { confessionalContent } from "./confessional";
import { conservatoryContent } from "./conservatory";
import { courtyardContent } from "./courtyard";
import { diningContent } from "./dining";
import { dragonContent } from "./dragon";
import { fleshTerrariumContent } from "./fleshterrarium";
import { galleryContent } from "./gallery";
import { gardensContent } from "./gardens";
import { glasscubeContent } from "./glasscube";
import { gymnasiumContent} from "./gymnasium";
import { hopkinsContent } from "./hopkins";
import { infirmaryContent } from "./infirmary";
import { kitchenContent } from "./kitchen";
import { larderContent } from "./larder";
import { libraryContent } from "./library";
import { mapContent } from "./map";
import { memorialContent } from "./memorial";
import { menagerieContent } from "./menagerie";
import { mirrorContent } from "./mirror";
import { musicContent } from "./music";
import { ritualContent } from "./ritual";
import { salonContent } from "./salon";
import { seanceContent } from "./seance";
import { servantsContent } from "./servants";
import { solariumContent } from "./solarium";
import { theaterContent } from "./theater";
import { threeCrownsContent } from "./threeCrowns";
import { trophyContent } from "./trophy";
import { waxContent } from "./wax";
import { yellowGirlContent } from "./yellowGirl";

export enum roomKeys {	
	artist = "artist",
	ballroom = "ballroom",
	basement = "basement",
	belltower = "belltower",
	binding = "binding",
	confessional = "confessional",
	conservatory = "conservatory",
	dragon = "dragon",
	dining = "dining",	
	fleshTerrarium = "fleshTerrarium",
	gallery = "gallery",
	gardens = "gardens",
	glasscube = "glasscube",
	gymnasium = "gymnasium",
	infirmary = "infirmary",
	kitchen = "kitchen",
	larder = "larder",
	library = "library",
	map = "map",
	hopkins = "hopkins",
	memorial = "memorial",
	menagerie = "menagerie",
	mirror = "mirror",
	music = "music",
	ritual = "ritual",
	salon = "salon",
	seance = "seance",
	servants = "servants",
	solarium = "solarium",
	theater = "theater",
	threeCrowns = "threeCrowns",
	trophy = "trophy",
	wax = "wax",
	courtyard = "courtyard",
	yellowGirl = "yellowGirl",
}

export const roomContent: Record<keyof typeof roomKeys, RoomContent> = {
	artist: artistContent,
	ballroom: ballroomContent,
	basement: basementContent,
	belltower: belltowerContent,
	binding: bindingContent,
	confessional: confessionalContent,
	conservatory: conservatoryContent,
	dining: diningContent,
	dragon: dragonContent,
	fleshTerrarium: fleshTerrariumContent,
	gallery: galleryContent,
	gardens: gardensContent,
	glasscube: glasscubeContent,
	gymnasium: gymnasiumContent,	
	infirmary: infirmaryContent,
	kitchen: kitchenContent,
	larder: larderContent,
	library: libraryContent,
	map: mapContent,
	hopkins: hopkinsContent,
	memorial: memorialContent,
	menagerie: menagerieContent,
	mirror: mirrorContent,
	music: musicContent,
	ritual: ritualContent,
	salon: salonContent,
	seance: seanceContent,
	servants: servantsContent,
	solarium: solariumContent,
	theater: theaterContent,
	threeCrowns: threeCrownsContent,
	trophy: trophyContent,
	wax: waxContent,
	courtyard: courtyardContent,
	yellowGirl: yellowGirlContent,
};

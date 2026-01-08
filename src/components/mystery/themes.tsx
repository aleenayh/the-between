import { ReactComponent as FeatherIcon } from "./icons/feather.svg";
import { ReactComponent as GobletIcon } from "./icons/goblet.svg";
import { ReactComponent as KnifeIcon } from "./icons/knife.svg";
import { ReactComponent as MaskIcon } from "./icons/mask.svg";
import { ReactComponent as MoonIcon } from "./icons/moon.svg";
import { ReactComponent as RoseIcon } from "./icons/rose.svg";
import { ReactComponent as ScratchIcon } from "./icons/scratch.svg";
import { ReactComponent as TarotIcon } from "./icons/tarot.svg";
import { MysteryTheme } from "./types";


export const themeElements: Record<
	MysteryTheme,
	React.ReactNode
> = {
	[MysteryTheme.Feather]: <FeatherIcon className="w-10 h-10" />,
	[MysteryTheme.Rose]: <RoseIcon className="w-10 h-10" />,
	[MysteryTheme.Goblet]: <GobletIcon className="w-10 h-10" />,
	[MysteryTheme.Mask]: <MaskIcon className="w-10 h-10" />,
	[MysteryTheme.Moon]: <MoonIcon className="w-10 h-10" />,
	[MysteryTheme.Tarot]: <TarotIcon className="w-10 h-10" />,
	[MysteryTheme.Scratch]: <ScratchIcon className="w-10 h-10" />,
	[MysteryTheme.Knife]: <KnifeIcon className="w-10 h-10" />,
};

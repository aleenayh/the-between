import { ReactComponent as FrameSVG } from "../../assets/frame.svg";
import type { CharacterNotTroupe } from "../types";



export function Portrait({ character }: { character: CharacterNotTroupe }) {

    if (!character.portraitUrl) {
        return null
    }
    return (
        <div className=                "relative top-1 right-1 w-[200px] h-[200px] text-theme-text-accent flex items-center justify-center">
            <img src={character.portraitUrl} alt={character.name} className=        "absolute object-cover w-[110px] h-[140px] [clip-path:ellipse(40%_47%_at_50%_52%)]"/>
            <FrameSVG className="absolute w-[160px] h-[200px] " />
        </div>
    )
}
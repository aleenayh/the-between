import { DiceIndicator } from "../../shared/DiceIndicator";
import { EditableLine } from "../../shared/EditableLine";
import { PlayerPill } from "../../shared/PlayerPill";
import { members } from "../content/informals";
import { AbilityBoxes } from "../sharedComponents/AbilityBoxes";
import { InformalsConditions } from "../sharedComponents/Conditions";
import type { Troupe } from "../types";
import { parseStaticText, parseWithCheckboxes } from "../utils";
import { adjustedForMask, pretty } from "./InformalsExpanded";

export function InformalsPane({ troupe }: { troupe: Troupe }) {
	const activeInformal = Object.keys(troupe.members).find((member) => troupe.members[member].isActive)

		return 		<section
		aria-label={`The Informals`}
		className="border-2 border-theme-border-accent bg-theme-bg-primary rounded-lg p-4 h-full flex flex-col gap-2 overflow-y-auto relative"
	>
						<DiceIndicator playerId={troupe.playerId} />
						<PlayerPill playerId={troupe.playerId} />
						{activeInformal ? <TabContent member={activeInformal} troupe={troupe} /> : <div className="flex flex-col gap-2 h-full"><h1 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">The Informals</h1>

			<p>When the player selects an Informal for the phase, their character will apppear here.</p></div>}

			<MaskSummary troupe={troupe} />
		</section>

}

function TabContent({ member, troupe }: { member: keyof typeof members, troupe: Troupe }) {
	const details = members[member]
	const dayMove = details.moves.find((move) => move.title === "Day Phase")
	const nightMove = details.moves.find((move) => move.title === "Night Phase")
	const {look, vice} = details

	const duskFlashbackChecked = troupe.members[member].duskFlashback ?? false
	const dawnNarrationChecked = troupe.members[member].dawnNarration ?? false
	const personalQuarters = troupe.members[member].personalQuarters ?? [{text: "", marked: false}, {text: "", marked: false}]
	const personalQuartersDisabled = troupe.members[member].personalQuartersUnavailable ?? false
  
  
	return (
	  <div className="flex flex-col gap-2 h-fit">
		<h2 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">The Informals:</h2>
		<h2 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">{details.name}</h2>
		<h3 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Conditions</h3>
		<InformalsConditions troupe={troupe} characterKey={member} editable={false} />
		<AbilityBoxes stats={adjustedForMask(details.abilities, troupe.masksOfFuture)} abbreviate={true} />
		{!personalQuartersDisabled && <div className="flex flex-col gap-2"><h4 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">
			Personal Quarters
		  </h4>
		  {personalQuarters.map((quarter, index) => (
		   <EditableLine key={`personal-quarter-${quarter.text}-${index}`} editable={false} index={index} text={quarter.text} onSave=    {() => {}}/>
		  ))}
  </div>
		}
  
			{dayMove && (
		<div key={dayMove.title}>
		  <h4 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">
			Day Move
		  </h4>
		  <p className="text-left text-sm text-theme-text-primary whitespace-normal ">
			{dayMove.text.map((text, index) => (
			  <span key={`${dayMove.title}-text-${index}`}>{parseStaticText(text)}</span>
			))}
		  </p>
		</div>
	  )}

		{nightMove &&     <div key={nightMove.title}>
		<h4 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">
		  Night Move
		</h4>
		<div className="text-left text-sm text-theme-text-primary whitespace-normal ">
		  {nightMove.text.map((text, index) => {
			let checkIndex = 0
			const { elements, nextAspectIndex } = parseWithCheckboxes(text, Array.from          ({ length: nightMove.checkboxes ?? 7 }), checkIndex, false, () => {})
			checkIndex = nextAspectIndex
			return <p key={`${nightMove.title}-text-${index}`}>{elements}</p>
		  })}
		</div>
	  </div>}
  
		<div key="flashbacks">
		  <p className="text-left text-sm text-theme-text-primary whitespace-normal"><input type="checkbox" disabled={true} checked={dawnNarrationChecked}/> 
			Dawn Narration
		  </p>
		  <p className="text-left text-sm text-theme-text-primary whitespace-normal"><input type="checkbox" disabled={true} checked={duskFlashbackChecked} />Dusk Flashback</p>
		</div>
  
		<div key="extras">
		<div className="flex gap-2 justify-start items-center"><h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Patron:</h3> <p className="text-left text-sm text-theme-text-primary whitespace-normal ">{troupe.members[member].patron}</p></div>
		  <div className="flex gap-2 justify-start items-center"><h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Look:</h3> <p className="text-left text-sm text-theme-text-primary whitespace-normal ">{look}</p></div>
		  <div className="flex gap-2 justify-start items-center"><h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Vice:</h3> <p className="text-left text-sm text-theme-text-primary whitespace-normal ">{vice}</p></div>
  
		</div>
  
	  </div>
	)
  }

function MaskSummary({ troupe }: { troupe: Troupe }) {
	const masks = troupe.masksOfFuture

	return (
		<div className="w-full flex flex-col gap-2">
			<h3 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Masks of Future</h3>
			<div className="flex gap-2 justify-center items-center">{masks.map((mask, index) => (
				<input type="checkbox" disabled={true} checked={mask === 1} key={`mask-${// biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
index}`} />
			))}</div>

<div className="flex flex-wrap gap-1 justify-center items-stretch text-md max-w-fit">
			{Object.entries(troupe.members).map(([member, details]) => (
				<div key=    {`${member}-summary`}>
					<div
              className={
                details.isDead ?
                "informalButtonDead" 
                :"informalButton"
              }
              key={member}

            >
              {pretty(member)}
            </div>
				</div>
			))}
		</div>
		</div>
	)
}
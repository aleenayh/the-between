import { useState } from "react";
import { useGame } from "../../../context/GameContext";
import { ReactComponent as BabySVG } from "../../assets/baby.svg";
import { EditableLine } from "../../shared/EditableLine";
import { playbookBases } from "../content";
import { heraldPlaybookAdditions } from "../content/herald";
import type { CharacterNotTroupe } from "../types";
import { parseStaticText } from "../utils";

export function Moves({ character }: { character: CharacterNotTroupe }) {
	const otherMoves = character.moves ? character.moves : [];

	return (
		<div className="text-sm">
			<div className="h-6" />
			{otherMoves.length > 0 &&
				otherMoves.map((move) => {
					return (
						<MoveDisplay key={move.title} character={character} move={move} />
					);
				})}
		</div>
	);
}

const specialMoveTitles = ["The Child", "The Royal Explorer's Club","Rites of Salt & Smoke", "The Reflection","The Family", "The Phantom", "Doll Parts", "The Offering"]

function MoveDisplay({
	character,
	move,
}: {
	character: CharacterNotTroupe;
	move: CharacterNotTroupe["moves"][number];
}) {
	const {
		gameState,
		updateGameState,
		user: { id },
	} = useGame();
	const editable = id === character.playerId;
	const contentDef = playbookBases[character.playbook].moves.find(
		(m) => m.title === move.title,
	);
	const content = move.text ? move.text : contentDef?.text;

	// Count aspects in the content by joining and parsing
	const fullText = content?.join("\n") ?? "";
	const aspectCount = (fullText.match(/<check>/g) || []).length;

	// Checkboxes come after aspects in the checks array
	const checkboxCount = move.checks?.length ?? 0;

	const toggleCheck = (index: number) => {
			if (!editable) return;

			const currentChecks = move.checks ?? [];
			const newChecks = [...currentChecks];
			// Ensure array is long enough
			while (newChecks.length <= index) {
				newChecks.push(0);
			}
			newChecks[index] = newChecks[index] === 1 ? 0 : 1;

			updateGameState({
				players: gameState.players.map((player) =>
					player.id === id
						? {
								...player,
								character: player.character
									? {
											...player.character,
											moves: character.moves.map((m) =>
												m.title === move.title
													? { ...m, checks: newChecks }
													: m,
											),
										}
									: null,
							}
						: player,
				),
			});
	}

	const updateLine = (index: number, line: string) => {
		const newLines = [...move.lines ?? []];
		newLines[index] = line;
		updateGameState({
			players: gameState.players.map((player) =>
				player.id === id && player.character
					? {
							...player,
							character: {
								...player.character,
								moves: character.moves.map((m) =>
									m.title === move.title ? { ...m, lines: newLines } : m,
								),
							},
						}
					: player,
			),
		});
	};

	const specialHandling = specialMoveTitles.includes(move.title)
	
	if (specialHandling) {
		return <SpecialMoveDisplay character={character} title={move.title} />
	}
  return (
    <div className="flex flex-col justify-center gap-1">
      <h3 className="text-sm font-bold text-theme-text-accent text-center">{move.title}</h3>
      {content &&
        content.length > 0 &&
        content.map((line, lineIndex) => {
          const parsed = parseStaticText(line)

          return (
            <p className="text-left leading-relaxed" key={`${move.title}-line-${lineIndex}`}>
              {parsed}
            </p>
          )
        })}

      {/* Checkboxes row  */}
      {checkboxCount > 0 && (
        <div className="w-full flex justify-center items-center gap-2">
          {Array.from({ length: checkboxCount }).map((_, idx) => {
            const checkIndex = aspectCount + idx
            const isChecked = (move.checks ?? [])[checkIndex] === 1
            return (
              <button
                key={`${move.title}-checkbox-${checkIndex}`}
                type="button"
                onClick={() => toggleCheck(checkIndex)}
                disabled={!editable}
                className={`w-4 h-4 border rounded text-[10px] leading-[0.75rem] text-center ${
                  isChecked
                    ? "bg-theme-accent-primary border-theme-accent-primary text-white"
                    : "border-theme-border-accent bg-transparent"
                } ${editable ? "cursor-pointer hover:border-theme-accent-primary" : "cursor-default opacity-70"}`}
                aria-label={isChecked ? "Uncheck" : "Check"}
              >
                {isChecked && "✓"}
              </button>
            )
          })}
        </div>
      )}

      <div className="h-6" />
      {move.lines &&
        move.lines.length > 0 &&
        move.lines.map((line, lineIndex) => {
          return <EditableLine key={`${move.title}-line-${lineIndex}-${line}`} text={line} editable={editable} onSave={(index, value) => updateLine(index, value)} index={lineIndex} />
        })}
    </div>
  )
}

function SpecialMoveDisplay({ character, title }: { character: CharacterNotTroupe; title: string }) {
	switch (title) {
		case "The Child":
			return <TheChild character={character} />
		case "The Royal Explorer's Club":
			return <TheREC character={character} />
		case "Rites of Salt & Smoke":
			return <RitesOfSaltAndSmoke character={character} />
		case "The Reflection":
			return <TheReflection character={character} />
		case "The Family":
			return <TheFamily character={character} />
		case "The Phantom":
			return <ThePhantom character={character} />
			case "Doll Parts":
			return <DollParts character={character} />
		case "The Offering":
			return <TheOffering character={character} />
	}
	return <div>{title} Special Display not built yet!</div>
}

function TheChild({ character }: { character: CharacterNotTroupe }) {
	const moveState = character.moves.find((m) => m.title === "The Child");
	const checks = moveState?.checks ?? Array.from({ length: 13 }, () => 0);
	const {gameState, updateGameState, user: { id }} = useGame();
	const editable = id === character.playerId;

	const toggleCheck = (index: number) => {
		if (!editable) return;
		const newChecks = [...checks];
		newChecks[index] = newChecks[index] === 1 ? 0 : 1;
		updateGameState({ players: gameState.players.map((player) => player.id === id && player.character ? { ...player, character: { ...player.character, moves:character.moves.map((m) => m.title === "The Child" ? { ...m, checks: newChecks } : m) } } : player) });
	}
	return <div className="flex flex-col gap-2 text-left">
		<h3 className="text-sm font-bold text-theme-text-accent text-center">The Child</h3>
		<p>You have a secret laboratory in Hargrave House where you are building a person from body parts you acquire in the city. When the time is right, you will use principles of chemistry and alchemy to give your creation life. When you acquire a body part for the Child, check it off from the list below and narrate a brief, pleasant memory of the person you lost that is triggered by holding the part in your hands.</p> 

<div className="relative text-theme-border-accent h-32 w-80 mx-auto flex justify-center">
	<MotherCheckbox className="right-24 top-0" checked={checks[0] === 1} label="Hair" onChange={() => {toggleCheck(0)}} right/>
	<MotherCheckbox className="left-16 top-2" checked={checks[1] === 1} label="Head" onChange={() => {toggleCheck(1)}} />
	<MotherCheckbox className="left-12 top-6" checked={checks[9] === 1} label="Hands" onChange={() => {toggleCheck(9)}} />
	<MotherCheckbox className="right-20 top-4" checked={checks[2] === 1} label="Eyes" onChange={() => {toggleCheck(2)}} right/>
	<MotherCheckbox className="left-12 top-14" checked={checks[3] === 1} label="Blood" onChange={() => {toggleCheck(3)}} />
	<MotherCheckbox className="right-16 top-12" checked={checks[4] === 1} label="Heart" onChange={() => {toggleCheck(4)}} right/>
	<MotherCheckbox className="left-10 top-10" checked={checks[5] === 1} label="Lungs" onChange={() => {toggleCheck(5)}} />
	<MotherCheckbox className="right-[4.5rem] top-[4.25rem]"checked={checks[6] === 1} label="Torso" onChange={() => {toggleCheck(6)}} right/>
	<MotherCheckbox className="left-20 bottom-8" checked={checks[7] === 1} label="Guts" onChange={() => {toggleCheck(7)}} />
	<MotherCheckbox className="right-16 top-8" checked={checks[8] === 1} label="Arms" onChange={() => {toggleCheck(8)}} right/>
	<MotherCheckbox className="right-8 bottom-6" checked={checks[10] === 1} label="Sex Organs" onChange={() => {toggleCheck(10)}} right/>
	<MotherCheckbox className="left-20 bottom-2"checked={checks[11] === 1} label="Legs" onChange={() => {toggleCheck(11)}} />
	<MotherCheckbox className="right-16 bottom-2" checked={checks[12] === 1} label="Feet" onChange={() => {toggleCheck(12)}} right/>
<BabySVG className="absolute h-full w-auto mx-auto mb-4 opacity-50 pointer-events-none z-0"/>
</div>
	
<p>	When you acquire all the necessary parts or are instructed to do so by the Mask of the Future, you attempt to bring the Child to life and roll with Reason. If you have acquired all the parts, you can disregard the result of the roll and pick whichever outcome you like.</p> 
<ul>
<li><strong>On a 10+,</strong> the Child is alive, and they love you very much. You may add the following to your Dawn questions (it is always selected): “Did you teach the Child a lesson about what it means to be human?” </li>
<li><strong>On a 7-9,</strong> the Child is alive, but it is a disappointment or a horror. Retire this character to obscurity; The Orphan (Hunter) is now available. </li>
<li><strong>On a miss,</strong> the Child is alive and consumed by anger and fear. Tell the Keeper to put The Orphan (Threat) in play.</li>
</ul>
	</div>
}

function MotherCheckbox({className, checked, label, onChange, right}: {className: string, checked: boolean, label: string, onChange: () => void, right?: boolean}) {
	return <div className={`absolute ${className} flex items-center gap-2 text-left`}>
		{!right && (
  <label className="text-xs text-theme-text-accent cursor-pointer select-none" htmlFor={`Mother-checkbox-${label}`}>
    {label}
  </label>
)}
		<input type="checkbox" id={`Mother-checkbox-${label}`} className="cursor-pointer" checked={checked} onChange={onChange} />
		{right && (
  <label className="text-xs text-theme-text-accent cursor-pointer select-none" htmlFor={`Mother-checkbox-${label}`}>
    {label}
  </label>
)}
	</div>
}

function TheREC({ character }: { character: CharacterNotTroupe }) {
	const moveState = character.moves.find((m) => m.title === "The Royal Explorer's Club");
	const allowedCheckboxes = moveState?.checks?.length ?? 0;
	const {gameState, updateGameState, user: { id }} = useGame();
	const [explorer, setExplorer] = useState<string | null>(null);
	const editable = id === character.playerId;

	const toggleCheck = (index: number) => {
		if (!editable) return;
		const newChecks = [...moveState?.checks ?? []];
		newChecks[index] = newChecks[index] === 1 ? 0 : 1;
		updateGameState({ players: gameState.players.map((player) => player.id === id && player.character ? { ...player, character: { ...player.character, moves: character.moves.map((m) => m.title === "The Royal Explorer's Club" ? { ...m, checks: newChecks } : m) } } : player) });
	}

	const buttonStyle="w-full bg-theme-bg-secondary text-theme-text-accent border border-theme-border-accent rounded-lg px-2 py-1 text-xs font-[Questrial], sans-serif font-variant-[small-caps]";

	return <div className="flex flex-col gap-2 text-left">
		      <h3 className="text-sm font-bold text-theme-text-accent text-center">The Royal Explorer's Club</h3>
		      <p>You are a member of The Royal Explorers Club (the R.E.C.), a private dinner club for people who, like you, have led expeditionary forces into parts unknown, or who are members of the upper class with an interest in the geographical sciences. Your status within the club allows you to call in favors with its membership in order to help Hargrave House. That status grows as you do battle with the forces of evil in London and regale the R.E.C. with your tales.</p>

<p>Mark a checkbox in order to call on the help of any one member.</p>
{Array.from({ length: allowedCheckboxes }).map((_, idx) => <input type="checkbox" key={`REC-checkbox-${// biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
idx}`} checked={moveState?.checks?.[idx] === 1} disabled={!editable} onChange={() => toggleCheck(idx)} />)}

<p>Additionally, you can call upon the R.E.C. to help with Layer Four of the Mastermind Conspiracy. When you mark a box to call upon the help of an R.E.C. member during the Layer Four events, the Keeper will give you a distinct mechanical benefit associated with that help, depending on the circumstances (such as, but not limited to: lowering the Complexity of any Questions, increasing the number of Clues uncovered during investigations, awarding automatic Clues, giving advantage on certain die rolls, and so forth). This benefit is in place of the normal effects of calling upon that member of the R.E.C.</p>

{editable &&<div className="flex flex-col justify-center items-center"><h3 className="text-sm font-bold text-theme-text-accent text-center">Membership of the R.E.C.</h3>
<div className="flex flex-col md:grid md:grid-cols-2 md:grid-wrap justify-center items-start gap-2">
	<div className="flex flex-col gap-2">
	<button type="button" className={buttonStyle} onClick={() => setExplorer("herod")} >General Herod Farsblet-Mogg</button>
	<button type="button" className={buttonStyle} onClick={() => setExplorer("winnifred")} >Lady Winnifred Wheatley-Grainworth</button>
	<button type="button" className={buttonStyle} onClick={() => setExplorer("stewart")} >Sir Stewart Trebbling-Welles</button>
	<button type="button" className={buttonStyle} onClick={() => setExplorer("alfred")} >Rear Admiral Alfred Bingly-Greene</button>
	<button type="button" className={buttonStyle} onClick={() => setExplorer("cressida")} >Lady Cressida Bachelor-Howes</button>
	<button type="button" className={buttonStyle} onClick={() => setExplorer("antony")} >Sir Antony Rees-Woode</button>
	<button type="button" className={buttonStyle} onClick={() => setExplorer("gareth")} >Gareth Kellogg</button>
	</div>

{explorer === "herod" && <div className="text-left flex flex-col gap-2">
	<h3 className="text-sm font-bold text-theme-text-accent text-center">General Herod Farsblet-Mogg<br/>Fortify Hargrave House</h3>
	<p>General Farsblet-Mogg still has many connections in the army, and can help fortify Hargrave House in a pinch. Pick a Threat: the General provides enough security—including any necessary specialists—to keep them, and any Dangers associated with them, out of Hargrave House. </p></div>}
{explorer === "winnifred"	 && <div className="text-left flex flex-col gap-2">
	<h3 className="text-sm font-bold text-theme-text-accent text-center">Lady Winnifred Wheatley-Grainworth<br/>Scotland Yard</h3>
	<p>Lady Winnifred’s family owns 4 Whitehall Palace, the headquarters of Scotland Yard, and so she can exercise some influence on their operations. Pick a Threat. Scotland Yard will not interfere with Hargrave House’s investigation of that Threat in any way, nor will they follow-up on any criminal activity Hargrave House engages in in order to resolve the Threat. </p></div>}
{explorer === "stewart" && <div className="text-left flex flex-col gap-2">
	<h3 className="text-sm font-bold text-theme-text-accent text-center">Sir Stewart Trebbling-Welles<br/> Throw a Party</h3>
	<p>Sir Stewart is a former explorer, but now spends most of his time chasing young men and throwing lavish parties. With his help, you throw an extravagant party at a Location of your choice. Name any Side Characters you wish; they will be in attendance. The Mastermind will also show up at some point.</p></div>}
{explorer === "alfred" && <div className="text-left flex flex-col gap-2">
	<h3 className="text-sm font-bold text-theme-text-accent text-center">Rear Admiral Alfred Bingly-Greene<br/>Armory</h3>
	<p>The Rear Admiral is a former member of Hargrave House and has an unmatched collection of specialized weapons he collected from his time there; he is happy to give you access to them from time to time. During the Dusk Phase, each Hunter adds a specialized weapon to their Personal Quarters—pick from the list below or write your own. The weapon must be removed from Personal Quarters once it is marked. 
</p>
<ul>
<li>Silver bullets</li>
<li>Cold iron sword</li>
<li>Wooden stake launcher</li>
<li>Holy water “bombs,”</li>
<li>Sword cane</li>
<li>Just a fuckton of dynamite</li>
<li>Razor rosary</li>
<li>Caltrops</li>
<li>Balisong</li>
<li>Trick umbrella</li>
<li>Vicious dogs</li>
<li>Elephant gun</li>
<li>Runic gauntlets</li>
<li>Exploding pocket watch</li>
<li>Poisoned spectacles</li>
<li>Acid pen</li>
<li>Metal claws</li>
<li>Saltpeter gun</li>
<li>Hex bag</li>
<li>Flash powder</li>
</ul></div>}
{explorer === "cressida" && <div className="text-left flex flex-col gap-2">
	<h3 className="text-sm font-bold text-theme-text-accent text-center">Lady Cressida Bachelor-Howes<br/>Antiquities & the Ancient World</h3>
	<p>Lady Cressida is a former explorer and current chair of the Antiquities Department at the University of London. She can advise on matters related to antiquities and the ancient world; the Keeper reveals two relevant Clues. </p></div>}
{explorer === "antony" && <div className="text-left flex flex-col gap-2">
	<h3 className="text-sm font-bold text-theme-text-accent text-center">Sir Antony Rees-Woode<br/>Occult & Paranormal</h3>
	<p>Sir Antony is London’s foremost scholar on the occult and paranormal. The Keeper reveals two relevant Clues when he advises on such matters. </p></div>}
{explorer === "gareth" && <div className="text-left flex flex-col gap-2">
	<h3 className="text-sm font-bold text-theme-text-accent text-center small-caps">Gareth Kellogg<br/>Hansom Cab</h3>
	<p>Gareth is not a member of the R.E.C. as such, but rather a hansom cab driver the club has on permanent retainer. When engaged, he will spend an entire night whisking the Hunters to and fro, picking them up and dropping them off as needed. At the end of a Night Phase, you can mark The Royal Explorers Club and declare you are enlisting Gareth’s help. If you do so, immediately play another Night Phase. The extra Night Phase can be a London Night Phase or a Hargrave House Night Phase—your choice.</p></div>}
	</div>
</div>
}
	</div>
}

function RitesOfSaltAndSmoke({ character }: { character: CharacterNotTroupe }) {
	const moveState = character.moves.find((m) => m.title === "Rites of Salt & Smoke");
	const selectedRitual = moveState?.lines?.[0] ?? ""
	const {gameState, updateGameState, user: { id }} = useGame();
	const editable = id === character.playerId;

	const selectRitual = (_: number, ritual: string) => {
		updateGameState({ players: gameState.players.map((player) => player.id === id && player.character ? { ...player, character: { ...player.character, moves: character.moves.map((m) => m.title === "Rites of Salt & Smoke" ? { ...m, lines: [ritual] } : m) } } : player) });
	}

	return <div className="flex flex-col gap-2 text-left">
		<h3 className="text-sm font-bold text-theme-text-accent text-center">Rites of Salt & Smoke</h3>
		<p>You are skilled at contacting dark entities in order to perform magical rituals. When you give offerings to the dark entities that are always lingering in your peripheral vision, roll with Sensitivity. <strong>On a 10+,</strong> the magic works without further cost: choose your effect. <strong>On a 7-9,</strong> the magic works imperfectly: choose your effect and a complication.</p>

		{editable && (<div className="w-full flex flex-col gap-2">{selectedRitual === "" && (
  <div>
    <strong>Choose what kinds of offerings these entities require:</strong>
    <ul>
      <li>Blood sacrifice</li>
      <li>Perversion of Christian rituals</li>
      <li>Self-harm</li>
      <li>Something else</li>
    </ul>{" "}
  </div>
)}
<EditableLine text={selectedRitual} editable={editable} onSave={(index, value) => selectRitual(index,value)} index={0}/> </div>)}

<p><strong>Effects</strong></p>
<ul>
<li>Do one thing that is beyond human limitations.</li>
<li>Bar a place or portal to a specific person or creature.</li>
<li>Trap a specific person or creature.</li>
<li>Banish a spirit or curse from the person, object, or place it inhabits.</li>
<li>Communicate with someone or something that you do not share a language with.</li>
<li>Observe another place or time.</li>
</ul>

<p><strong>Complications</strong></p>
<ul>
<li>The effect is less than you wanted.</li>
<li>The effect is short-lived.</li>
<li>You take a Condition; the Keeper will tell you what.</li>
<li>The magic draws immediate, unwanted attention.</li>
<li>The magic has a problematic side effect.</li>
</ul>
<p><strong>On a 12+,</strong> you can unmark The Cosmic Passage if it is marked. If you do so, increase your Reason by 2 but leave your Sensitivity the same. Ignore this result if your Sensitivity is 3.</p>
</div>
}

function TheReflection({ character }: { character: CharacterNotTroupe }) {
const moveState = character.moves.find((m) => m.title === "The Reflection");
const masterwork = moveState?.lines?.[0] ?? ""
const {gameState, updateGameState, user: { id }} = useGame();
const editable = id === character.playerId;

const selectMasterwork = (_: number, masterwork: string) => {
	updateGameState({ players: gameState.players.map((player) => player.id === id && player.character ? { ...player, character: { ...player.character, moves: character.moves.map((m) => m.title === "The Reflection" ? { ...m, lines: [masterwork] } : m) } } : player) });
}

const toggleCheck = (index: number) => {
	if (!editable) return;
	const newChecks = [...moveState?.checks ?? Array.from({ length: 12 }, () => 0)];
	newChecks[index] = newChecks[index] === 1 ? 0 : 1;
	updateGameState({ players: gameState.players.map((player) => player.id === id && player.character ? { ...player, character: { ...player.character, moves: character.moves.map((m) => m.title === "The Reflection" ? { ...m, checks: newChecks } : m) } } : player) });
}

return <div className="flex flex-col gap-2 text-left">
	<h3 className="text-sm font-bold text-theme-text-accent text-center">The Reflection</h3>
	<p>Somewhere in London, hidden from the world, is a masterwork created in your image or otherwise inspired by your beauty. It is guarded by a cult dedicated to your worship.</p>

	{editable && (<div className="w-full flex flex-col gap-2">{masterwork === "" && (
<div>
<strong>What is the masterwork?</strong>
<ul>
<li>A portrait painting. How do your worshippers demonstrate they are unworthy to look upon it? </li>
<li>A statue carved in your likeness. How do your worshippers punish those foolish enough to touch it? </li>
A piece of music inspired by you. How do your worshippers ensure this music is always being played somewhere? 
<li>A cathedral that is used for traditional religious services, but is secretly a temple dedicated to you. In what subtle ways have your worshippers altered the traditional religious iconography to be about you instead? </li>
<li>Something else</li>
</ul>{" "}
</div>
)}
<EditableLine text={masterwork} editable={editable} onSave={(index, value) => selectMasterwork(index,value)} index={0}/> </div>)}

<p>The masterwork will gradually degrade so you can remain young and beautiful, and will bear the scars that your evil acts would otherwise leave on your soul. Whenever you scar your Reflection, either as the result of a move or because the Keeper said to, mark a box below and describe how the masterwork has changed for the worse.   </p>
<div className="flex gap-2 justify-center flex-wrap">{Array.from({ length: 12 }).map((_, idx) => <input type="checkbox" key={`Reflection-checkbox-${// biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
idx}`} checked={moveState?.checks?.[idx] === 1} disabled={!editable} onChange={()=> toggleCheck(idx)} />)}</div>

<p>When <strong>all the boxes are marked</strong>, you must frame an intimate scene with a fellow Hunter where you reveal the masterwork to them and explain some of the terrible things you have done that are reflected in it. Then, if you wish, throw yourself at their feet and beg them for redemption. They can grant it by taking you into a passionate embrace, then and there. If they do so, describe how you embrace a life of humility and grace, then retire this character.</p>

<p>If the other Hunter does not grant redemption, or if you choose not to ask for it, ask the Keeper to narrate a scene in which we see you become a servant of the Mastermind, then retire this character. 
</p>
</div>
}

function TheFamily({ character }: { character: CharacterNotTroupe }) {
	const moveState = character.moves.find((m) => m.title === "The Family");
	const family = moveState?.lines?.[0] ?? ""
	const problem = moveState?.lines?.[1] ?? ""
	const {gameState, updateGameState, user: { id }} = useGame();
	const editable = id === character.playerId;

	const writeLine = (index: number, value: string) => {
		const newLines = [...moveState?.lines ?? []];
		newLines[index] = value;
		updateGameState({ players: gameState.players.map((player) => player.id === id && player.character ? { ...player, character: { ...player.character, moves: character.moves.map((m) => m.title === "The Family" ? { ...m, lines: newLines } : m) } } : player) });
	}

	const toggleCheck = (index: number) => {
		if (!editable) return;
		const newChecks = [...moveState?.checks ?? []];
		newChecks[index] = newChecks[index] === 1 ? 0 : 1;
		updateGameState({ players: gameState.players.map((player) => player.id === id && player.character ? { ...player, character: { ...player.character, moves: character.moves.map((m) => m.title === "The Family" ? { ...m, checks: newChecks } : m) } } : player) });
	}

	return <div className="flex flex-col gap-2 text-left">
		<h3 className="text-sm font-bold text-theme-text-accent text-center">The Reflection</h3>
		<p>You help Hargrave House in order to earn your keep, but the people who live there can never be your family since they are even more broken than you are. There is another group of people in London you watch from afar in the hopes they will someday notice and accept you.</p>
	
		{editable && (<div className="w-full flex flex-col gap-2">{family === "" && (
	<div>
	<strong>There is another group of people in London you watch from afar in the hopes they will someday notice and accept you. Who are they?</strong>
	<ul>
	<li>A theater troupe</li>
	<li>A gang of rat catchers</li>
	<li>An actual family</li>
	<li>_______________(someone else)</li>
	</ul>
	</div>
	)}
	<EditableLine text={family} editable={editable} onSave={(index, value) => writeLine(index,value)} index={0}/> </div>)}

	{editable && (<div className="w-full flex flex-col gap-2">{problem === "" && (
	<div>
	<strong>The group you hope to join is suffering from a problem. What is it?</strong>
	<ul>
	<li>They are on the verge of financial ruin</li>
	<li>A member of the group is deathly ill</li>
	<li>The group is being threatened by someone</li>
	<li>Something else</li>
	</ul>
	</div>
	)}
	<EditableLine text={problem} editable={editable} onSave={(index, value) => writeLine(index,value)} index={0}/> </div>)}
	
	<p>You will secretly help the group solve this problem and then, when the time is right, present yourself to them. From now on, when you would collect a Reward from resolving a Threat, instead mark a box below and describe how something from the recently resolved Threat can be used to help the group with their problem.
	</p>
	{Array.from({ length: 3 }).map((_, idx) => <input type="checkbox" key={`Family-checkbox-${// biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
	idx}`} checked={moveState?.checks?.[idx] === 1} disabled={!editable} onChange={() => toggleCheck(idx)} />)}
	
	<p>When <strong>all three boxes are marked,</strong> roll with Presence; this roll is always made at disadvantage. <strong>On a 10+,</strong> they are thankful for your help and welcome you as one of their own. Narrate a short epilogue showing your life with your new family. This character is now retired. <strong>On a 7-9,</strong> they shun you and call you unkind names. Unmark a box from this move. <strong>On a miss,</strong> they are horrified, and turn on you. Mark The Blood-Soaked Portal. 
	</p>
	</div>
}

function ThePhantom({ character }: { character: CharacterNotTroupe }) {
		const moveState = character.moves.find((m) => m.title === "The Phantom");
		const medium = moveState?.lines?.[0] ?? ""
		const {gameState, updateGameState, user: { id }} = useGame();
		const editable = id === character.playerId;
		const checks = moveState?.checks ?? Array.from({ length: 4 }, () => 0);
		const selectMedium = (_: number, medium: string) => {
			updateGameState({ players: gameState.players.map((player) => player.id === id && player.character ? { ...player, character: { ...player.character, moves: character.moves.map((m) => m.title === "The Phantom" ? { ...m, lines: [medium] } : m) } } : player) });
		}
		
		const toggleCheck = (index: number) => {
			if (!editable) return;
			const newChecks = [...moveState?.checks ?? Array.from({ length: 12 }, () => 0)];
			newChecks[index] = newChecks[index] === 1 ? 0 : 1;
			updateGameState({ players: gameState.players.map((player) => player.id === id && player.character ? { ...player, character: { ...player.character, moves: character.moves.map((m) => m.title === "The Phantom" ? { ...m, checks: newChecks } : m) } } : player) });
		}
		
		return <div className="flex flex-col gap-2 text-left">
			<h3 className="text-sm font-bold text-theme-text-accent text-center">The Phantom</h3>
			<p>You are anchored to Hargrave House. You may roam about the interior of the mansion, but if you manage to leave, you will return involuntarily at Dawn. While in the house, you may openly converse in a disembodied voice.</p>
		
			{editable && (<div className="w-full flex flex-col gap-2">{medium === "" && (
		<div>
		<strong>What medium do you communicate through?</strong>
		<ul>
		<li>Your reflection in a mirrored surface</li>	
<li>Your portrait hanging on a wall</li>
<li>A bust of your likeness</li>
<li>A former possession on display </li>
		<li>Something else</li>
		</ul>{" "}
		</div>
		)}
		<EditableLine text={medium} editable={editable} onSave={(index, value) => selectMedium(index,value)} index={0}/> </div>)}
		
		<p>Additionally, during a Hargrave House Night Phase, you are able to have regular scenes in the house, even though the other Hunters cannot; the gameplay cuts back and forth between the Room narrations and your scene, as if the Room narrations were an Unscene during a London Night Phase. You still participate in Room narrations.   </p>

		<p>You can summon enough spectral energy to temporarily break free from your ghostly bonds or interact with the world in ways that are more physical in nature. Whenever instructed to do so, either by the Keeper or another move, mark the Energy track below. When the track is full, you must spend the next Day Phase recovering in the spirit realm. You can take no actions while in the spirit realm, nor can you interact with other characters. However, during other Hunters’ scenes, you should describe how your residual spectral energy is subtly affecting the environment. Additionally, you gain a Clue while in the spirit realm. Tell the Keeper what it is and to which active Threat it applies. The Clue cannot conclusively answer a Question by itself. Unmark all Energy at the end of the recovery Day Phase. </p>
		<div className="flex gap-2 justify-center flex-wrap">{checks.map((check, idx) => <input type="checkbox" key={`Energy-checkbox-${// biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
		idx}`} checked={check === 1} disabled={!editable} onChange={()=> toggleCheck(idx)} />)}</div>
		
		</div>
}

function DollParts({character}: {character: CharacterNotTroupe}) {
	const moveState = character.moves.find((m) => m.title === "Doll Parts")
	if (!moveState) return null;
	return <div className="flex flex-col gap-2 text-left">
	<h3 className="text-sm font-bold text-theme-text-accent text-center">Doll Parts</h3>
	<p>You do not start with any ability scores. Instead, at the start of each Day Phase, you equip three “Doll Parts”—attachments capable of enhancing your mechanical physiology. Each Doll Part operates with an ability, giving you +1 in that ability until you choose to switch the part for another. 
	</p>
	<p>Each Doll Part comes with a pair of Adaptors, secondary moves that help you to further customize your Doll Parts. During the Day Phase, whenever you reassign your Doll Parts, you may also reassign your Adaptors using Adaptor Keys. You can only access the Adaptors that are associated with Doll Parts you have equipped.</p>
	<p>TODO ALEENA BUILD THE REST OF THIS</p>
	</div>
}

function TheOffering({ character }: { character: CharacterNotTroupe }) {
	const move = character.moves.find((m) => m.title === "The Offering");
	const {
		gameState,
		updateGameState,
		user: { id },
	} = useGame();
	const editable = id === character.playerId;
	const contentDef = heraldPlaybookAdditions.moves?.find((m) => m.title === move?.title);
	const content = contentDef?.text ?? [];
	const heraldOfferings = gameState.heraldOfferings ?? [];

	if (!move) return null;

	const updateLine = (index: number, line: string) => {
		const newLines = [...move.lines ?? []];
		newLines[index] = line;
		updateGameState({
			players: gameState.players.map((player) =>
				player.id === id && player.character
					? {
							...player,
							character: {
								...player.character,
								moves: character.moves.map((m) =>
									m.title === move.title ? { ...m, lines: newLines } : m,
								),
							},
						}
					: player,
			),
		});
	};


  return   <div className="flex flex-col justify-center gap-1">
    <h3 className="text-sm font-bold text-theme-text-accent text-center">The Offering</h3>
    {content &&
      content.length > 0 &&
      content.map((line, lineIndex) => {
        const parsed = parseStaticText(line)

        return (
          <p
            className="text-left leading-relaxed"
            key={`The Offering-line-${
              // biome-ignore lint/suspicious/noArrayIndexKey: blegh
              lineIndex
            }`}
          >
            {parsed}
          </p>
        )
      })}

    <div className="h-6" />
    {Array.from({ length: 12 }).map((_, lineIndex) => {
      return (
        <EditableLine
          key={`The Offering-line-${
            // biome-ignore lint/suspicious/noArrayIndexKey: order unimportant
            lineIndex
          }`}
          text={heraldOfferings[lineIndex] ?? ""}
          editable={editable}
          onSave={(index, value) => updateLine(index, value)}
          index={lineIndex}
        />
      )
    })}
  </div>

}
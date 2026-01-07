import { Dialog } from "radix-ui"
import { useState } from "react"
import toast from "react-hot-toast"
import { useGame } from "../../../context/GameContext"
import { DiceIndicator } from "../../shared/DiceIndicator"
import { EditableLine } from "../../shared/EditableLine"
import { Section } from "../../shared/Section"
import { informalsPlaybook, members } from "../content/informals"
import { AbilityBoxes } from "../sharedComponents/AbilityBoxes"
import { InformalsConditions } from "../sharedComponents/Conditions"
import type { Abilities, Troupe } from "../types"
import { parseStaticText, parseWithCheckboxes } from "../utils"

export function InformalsExpanded({ troupe }: { troupe: Troupe }) {
  const stateMembers = troupe.members
  const selectedActive = Object.keys(stateMembers).find((member) => stateMembers[member as keyof typeof stateMembers].isActive)

  const [activeTab, setActiveTab] = useState<keyof typeof members>("brotherSamuel")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const activeMemberDetails = selectedActive ? members[selectedActive] : undefined
  const {updateGameState, gameState} = useGame()

  const handleSetActiveMember = (memberKey: keyof typeof members) => {
    stateMembers[memberKey].isActive = true
    for (const member in stateMembers) {
      if (member !== memberKey) {
        stateMembers[member].isActive = false
      }
    }
    updateGameState({
      players: gameState.players.map((player) => {
        if (player.id === troupe.playerId) {
          return { ...player, troupe: { ...troupe, members: stateMembers } }
        }
        return player
      }),
    })
  }


  return (
    <div className="border-2 border-theme-border-accent bg-theme-bg-primary rounded-lg p-4 h-full flex flex-col gap-2 overflow-hidden relative">
      <DiceIndicator playerId={troupe.playerId} />
      <h1 className="text-2xl font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">
        {selectedActive ? pretty(selectedActive) : "The Informals"}
        
      </h1>
      {activeMemberDetails ? 
      <div className="overflow-y-auto overflow-x-hidden min-h-0 min-w-0 flex flex-col gap-3">
        <Section title="Conditions">
          <InformalsConditions troupe={troupe} characterKey={selectedActive as keyof typeof troupe.members} editable={true} />
        </Section>

        <AbilityBoxes stats={adjustedForMask(activeMemberDetails.abilities, troupe.masksOfFuture)} />
        </div>
      : <h2 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Who will you be today?</h2>}


        <div className="flex flex-wrap gap-1 justify-center items-stretch text-md max-w-fit">
          {Object.keys(members).map((member) => (
            <button
              type="button"
              className={
                stateMembers[member].isDead ?
                "informalButtonDead" 
                :
                  activeTab === member
                  ? "bg-theme-bg-accent text-theme-text-accent border-theme-border-accent border-2 rounded-lg p-1 w-32"
                  : "informalButton"
              }
              onClick={() => setActiveTab(member)}
              key={member}
              disabled={stateMembers[member].isDead}
            >
              {pretty(member)}
            </button>
          ))}
          <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Trigger asChild>
            <button
              type="button"
              className="informalButton"
            >
              Masks
            </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="absolute top-2 right-2 aspect-square w-8 h-8 bg-theme-bg-accent text-theme-text-primary rounded-full flex justify-center items-center"
                  >
                    X
                  </button>
                </Dialog.Close>
                <Dialog.Title className="DialogTitle">Masks of the Future</Dialog.Title>
                <Dialog.Description className="DialogDescription hidden">Masks of Future</Dialog.Description>
<MasksModal troupe={troupe} closeModal={() => setIsModalOpen(false)} />
</Dialog.Content>
                    </Dialog.Portal>
          </Dialog.Root>

      </div> 
			<div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 min-w-0 flex flex-col gap-3">

<div className="flex justify-center items-center gap-2">
  {stateMembers[activeTab].patron === "" ? <MeetInformal member={activeTab} troupe={troupe}/> : 
  <div className="flex justify-center items-center gap-2"><input type="checkbox" onChange={() => handleSetActiveMember(activeTab)} checked={selectedActive === activeTab} />
  <label htmlFor="check" className=        "text-left text-lg text-theme-text-accent font-[RumbleBrave] letter-spacing-widest">I am {pretty          (activeTab)}</label></div>}
  </div>
          <div className="flex flex-col gap-2 h-full flex-grow">
             <TabContent member={activeTab} troupe={troupe} />
          </div>
          </div>
    </div>
  )
}

function TabContent({ member, troupe }: { member: keyof typeof members, troupe: Troupe }) {
  const details = members[member]
  const dayMove = details.moves.find((move) => move.title === "Day Phase")
  const nightMove = details.moves.find((move) => move.title === "Night Phase")
  const {duskFlashback, dawnNarration, look, vice} = details
  const {updateGameState, gameState, user: { id }} = useGame()
  const editable = id === troupe.playerId
  const duskFlashbackChecked = troupe.members[member].duskFlashback ?? false
  const dawnNarrationChecked = troupe.members[member].dawnNarration ?? false
  const personalQuarters = troupe.members[member].personalQuarters ?? [{text: "", marked: false}, {text: "", marked: false}]
  const personalQuartersDisabled = troupe.members[member].personalQuartersUnavailable ?? false

  const handleSetDuskFlashback = (member: keyof typeof members) => {
    const newTroupe = troupe.members
    newTroupe[member].duskFlashback = !newTroupe[member].duskFlashback
    updateGameState({
      players: gameState.players.map((player) => {
        if (player.id === troupe.playerId) {
          return { ...player, troupe: { ...troupe, members: newTroupe } }
        }
        return player
      }),
    })
  }

  const handleSetPersonalQuarter = (member: keyof typeof members, index: number, value: string) => {
    const newTroupe = troupe.members
    newTroupe[member].personalQuarters[index].text = value
    updateGameState({
      players: gameState.players.map((player) => {
        if (player.id === troupe.playerId) {
          return { ...player, troupe: { ...troupe, members: newTroupe } }
        }
        return player
      }),
    })
  }

  const handleSetDawnNarration = (member: keyof typeof members) => {
    const newTroupe = troupe.members
    newTroupe[member].dawnNarration = !newTroupe[member].dawnNarration
    updateGameState({
      players: gameState.players.map((player) => {
        if (player.id === troupe.playerId) {
          return { ...player, troupe: { ...troupe, members: newTroupe } }
        }
        return player
      }),
    })
  }

  const handleSetPersonalQuartersDisabled = (member: keyof typeof members) => {
    const newTroupe = troupe.members
    newTroupe[member].personalQuartersUnavailable = !newTroupe[member].personalQuartersUnavailable
    updateGameState({
      players: gameState.players.map((player) => {
        if (player.id === troupe.playerId) {
          return { ...player, troupe: { ...troupe, members: newTroupe } }
        }
        return player
      }),
    })
  }

  const handleSetNightMoveCheckbox = (member: keyof typeof members, checkIndex: number) => {
    const newTroupe = troupe.members
    newTroupe[member] = { ...newTroupe[member], moves: newTroupe[member].moves.map((move) => move.title === "Night Phase" ? { ...move, checks: move.checks?.map((check, index) => index === checkIndex ? check === 1 ? 0 : 1 : check) } : move) }
    updateGameState({
      players: gameState.players.map((player) => {
        if (player.id === troupe.playerId) {
          return { ...player, troupe: { ...troupe, members: newTroupe } }
        }
        return player
      })
    })
  }

  return (
    <div className="flex flex-col gap-2 h-full">
      <h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">{details.name}</h3>
      {!personalQuartersDisabled && <div className="flex flex-col gap-2"><h4 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">
          Personal Quarters
        </h4>
        {personalQuarters.map((quarter, index) => (
         <EditableLine key={`personal-quarter-${quarter.text}-${index}`} editable={editable} index={index} text={quarter.text} onSave={(index, value) => handleSetPersonalQuarter(member, index, value)} />
        ))}
        <i className="text-sm text-theme-text-secondary">If {pretty(member)} would suffer fatal harm, you can cross off the Personal Quarters section and then describe how an item from the Personal Quarters (marked or unmarked) helps them narrowly avoid death. {pretty(member)} no longer has access to Personal Quarters.</i>
        <button type="button" className="bg-theme-bg-secondary text-theme-text-secondary border-theme-bg-primary border-2 rounded-lg p-1 w-1/2 mx-auto hover:bg-theme-bg-accent hover:text-theme-text-accent" onClick={() => handleSetPersonalQuartersDisabled(member)}>Narrowly Avoid Death</button>
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
        <div key="duskFlashback">
        <h4 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Dusk Flashback</h4>
        <p className="text-left text-sm text-theme-text-primary whitespace-normal"><input type="checkbox" onChange={() => handleSetDuskFlashback(member)} checked={duskFlashbackChecked} /> {parseStaticText(duskFlashback)}</p>
      </div>
      {nightMove &&     <div key={nightMove.title}>
      <h4 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">
        Night Move
      </h4>
      <div className="text-left text-sm text-theme-text-primary whitespace-normal ">
        {nightMove.text.map((text, index) => {
          let checkIndex = 0
          const { elements, nextAspectIndex } = parseWithCheckboxes(text, Array.from          ({ length: nightMove.checkboxes ?? 7 }), checkIndex, editable, (checkIndex) => handleSetNightMoveCheckbox(member, checkIndex))
          checkIndex = nextAspectIndex
          return <p key={`${nightMove.title}-text-${index}`}>{elements}</p>
        })}
      </div>
    </div>}

      <div key="dawnNarration">
        <h4 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Dawn Narration</h4>
        <p className="text-left text-sm text-theme-text-primary whitespace-normal"><input type="checkbox" onChange={() => handleSetDawnNarration(member)} checked={dawnNarrationChecked}/> 
          {parseStaticText(dawnNarration)}
        </p>
      </div>

      <div key="extras">
      <div className="flex gap-2 justify-start items-center"><h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Patron:</h3> <p className="text-left text-sm text-theme-text-primary whitespace-normal ">{troupe.members[member].patron}</p></div>
        <div className="flex gap-2 justify-start items-center"><h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Look:</h3> <p className="text-left text-sm text-theme-text-primary whitespace-normal ">{look}</p></div>
        <div className="flex gap-2 justify-start items-center"><h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Vice:</h3> <p className="text-left text-sm text-theme-text-primary whitespace-normal ">{vice}</p></div>

      </div>

    </div>
  )
}

function MeetInformal({ member, troupe }: { member: keyof typeof members, troupe: Troupe }) {
  const details = members[member]
  const {updateGameState, gameState} = useGame()

  const handleSetPatron = (member: keyof typeof members, value: string) => {
    const newTroupe = troupe.members
    newTroupe[member].patron = value
    updateGameState({
      players: gameState.players.map((player) => {
        if (player.id === troupe.playerId) {
          return { ...player, troupe: { ...troupe, members: newTroupe } }
        }
        return player
      }),
    })
  }
  return (
    <div>
      <p className="text-xs italic text-left">You are the Hargrave House Informals, a group of people in London who assist the Hunters with their investigations. You don’t know each other, and you don’t live in Hargrave House, but you are each in the employ of a resident of the house, and provide them with valuable skills and street-level knowledge they can’t get anywhere else. Let’s meet each of you in turn…</p>
      <h4 className="text-md font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Meet     {details.name}</h4>
      <div key="extras">
        <div className="flex gap-2 justify-start items-center"><h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Look:</h3> <p className="text-left text-sm text-theme-text-primary whitespace-normal ">{details.look}</p></div>
        <div className="flex gap-2 justify-start items-center"><h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Vice:</h3> <p className="text-left text-sm text-theme-text-primary whitespace-normal ">{details.vice}</p></div>

        <p className="text-balance text-sm text-theme-text-primary whitespace-normal">Decide which of the other Hunters is {pretty(member)}'s Patron and add them to the line below. Then, ask the player of that Hunter for something that Hunter gave {pretty(member)} and add it to your Personal Quarters.</p>
        <div className="flex gap-2 justify-stretch items-center"><h3 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Patron:</h3> <div className="flex-grow w-full flex justify-start"><EditableLine editable={true} index={0} text={troupe.members[member].patron} onSave={(_index, value) => handleSetPatron(member, value)} /></div></div>
      </div>
    </div>
  )
}

export function pretty(member: keyof typeof members) {
  switch (member) {
    case "pigEar":
      return "Pig's Ear"
    case "brotherSamuel":
      return "Brother Samuel"
    default:
      return member.charAt(0).toUpperCase() + member.slice(1)
  }
}

function MasksModal({ troupe, closeModal }: { troupe: Troupe, closeModal: () => void }) {
  const masks = troupe.masksOfFuture
  const firstMask = !masks.some((mask) => mask === 1)
  const {masksOfFutureDescription, masksOfFuture} = informalsPlaybook
  const descriptionsAndMarks = masksOfFuture.map((mask, index) => ({description: mask, marked: masks[index] === 1}))
  const nextMaskIndex = descriptionsAndMarks.findIndex((descriptionAndMark) => !descriptionAndMark.marked)

  const {updateGameState, gameState} = useGame()

  const nextMaskDescription = descriptionsAndMarks.find((descriptionAndMark) => !descriptionAndMark.marked)?.description

  const handleSaveTrophy = (value: string) =>   {
    const newOfferings = gameState.heraldOfferings ?? []
    newOfferings[nextMaskIndex] = value
    updateGameState({
      heraldOfferings: newOfferings,
    })
  }

  const maskWithCondition = nextMaskIndex === 1 || nextMaskIndex === 4
  const informalsWithFullConditions = Object.keys(troupe.members).filter((member) => !troupe.members[member].isDead && troupe.members[member].conditions?.every((condition) => condition !== ""))

  const killInformal = (member: keyof typeof members) => {
    let newCondition = null
    let unlockHerald = false
    if (nextMaskIndex === 1) {
      newCondition = "Unnerved"
    } else if (nextMaskIndex === 4)     {
      newCondition = "Obsessed with Death"
    } else if (nextMaskIndex === 6) {
      unlockHerald = true
    }

    const newTroupe = troupe.members
    if (newCondition) {
      const stagedConditions: Record<keyof typeof members, string[]> = {}
      for (const memberKey in newTroupe) {
        if (memberKey === member || newTroupe[memberKey].isDead) continue
        const conditions = newTroupe[memberKey].conditions ?? ["", ""]
        const blankCondition = conditions.indexOf("")
        if (blankCondition === -1) {
            toast.error(
              `${pretty(memberKey)} has no blank conditions to which to add ${newCondition}. You will need to do this manually, and don another mask to clear the condition you remove.`,
            )
        }
        const newConditions = conditions.map((condition, index) => index === blankCondition ? newCondition : condition)
        stagedConditions[memberKey] = newConditions
        for (const memberKey in stagedConditions) {
          newTroupe[memberKey].conditions = stagedConditions[memberKey]
        }
      }
    }
    newTroupe[member].isDead = true
    newTroupe[member].isActive = false
    const newMasks = masks.map((mask, index) => index === nextMaskIndex ? 1 : mask)

    if (unlockHerald) {
      updateGameState({
        heraldUnlocked: true,
        players: gameState.players.map((player) => {
          if (player.id === troupe.playerId) {
            return { ...player, character: null }
          }
          return player
        },
      ),
      })
      closeModal      ()
      return
    }

    updateGameState({
      players: gameState.players.map((player) => {
        if (player.id === troupe.playerId) {
          return { ...player, character: { ...troupe, members: newTroupe, masksOfFuture: newMasks } }
        }
        return player
      }),
    })
    closeModal    ()
  }

  return (
      <div className="flex flex-col gap-2">
      <p className="text-left text-xs text-theme-text-primary italic whitespace-normal">{masksOfFutureDescription}</p>

      <p>    {parseStaticText(nextMaskDescription ?? "")}</p>
      <EditableLine editable={true} index={0} text={gameState.heraldOfferings?.[nextMaskIndex] ?? ""} onSave={(_index, value) => handleSaveTrophy(value)} />

      {maskWithCondition && informalsWithFullConditions.length > 0 && <div className="text-left text-sm text-theme-text-primary whitespace-normal"><h2 className="text-lg font-bold text-center text-theme-text-accent shrink-0 whitespace-normal text-balance">Warning!</h2>
        
        <p>In marking this mask, every surviving Informal will take a new Condition. </p>
        
        {informalsWithFullConditions.length === 1 ? `${pretty(informalsWithFullConditions[0])} has no empty condition lines. If you do not choose to kill them with this mask, you will be forced to don another mask immediately to clear one of their current conditions.` : <p>You have {informalsWithFullConditions.length} Informals with both conditions currently filled: {informalsWithFullConditions.map((member) => pretty(member)).join(", ")}. After marking this mask, you must <strong>immediately mark another mask</strong> to clear a condition on any that survive.</p>}
        </div>
        }



        

{firstMask && <div className="flex flex-col gap-2"><p> Then, read the following aloud to the other players:</p>

<p className="border-l-2 pl-2 text-sm italic">There is a brutal killer called the Herald stalking the streets of London. The killer has set their sights on the Hargrave House Informals, either as a way of sending a message to the Hunters, or for some other, heretofore unknown, purpose. Hargrave House is investigating these killings, collecting information from their contacts in Scotland Yard, and examining the crime scenes when they’re able. This is happening entirely offscreen—we won’t see the Hunters or any other resident of the house actively investigating the killings—but trust that the Herald will be dealt with in due time. Until then, know that the Informals are doomed. You cannot save them, but you can avenge them when the time comes.</p></div>
}

<div className="flex flex-wrap gap-1 justify-center items-stretch text-md max-w-fit">
{Object.keys(members).map((member) => {
  if (troupe.members[member].isDead) return null
  return (
            <button
            type="button"
            className="bg-theme-bg-accent text-theme-text-accent opacity-70 border-theme-border-accent border-2 rounded-lg p-1 w-32 hover:opacity-100"
            onClick={() => killInformal(member)}
            key={member}
          >
            Kill {pretty(member)}
          </button>
)
})}
</div>

      </div>
  )
}


export function adjustedForMask(abilities: Abilities, masks: number[]) {
  const thirdMaskMarked = masks[3] === 1
  const adjustedAbilities = { ...abilities }
  if (thirdMaskMarked) {
    adjustedAbilities.sensitivity = Math.min(adjustedAbilities.sensitivity + 1, 3)
  }
  return adjustedAbilities
}
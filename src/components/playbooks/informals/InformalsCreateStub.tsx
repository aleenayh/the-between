import { useState } from "react"
import { useGame } from "../../../context/GameContext"
import { playbookKeys, type MiniCharacter } from "../types"
import { members } from "../content/informals"

export function InformalsStub() {
    const { updateGameState, user, gameState } = useGame()
  
    const saveCharacter = () => {
      const troupe = constructInformals({playerId: user.id})
      updateGameState({
        players: gameState.players.map((player) => {
          if (player.id === user.id) {
            return { ...player, character: troupe }
          }
          return player
        }),
      })
    }
  
    return (
      <div className="p-4 h-full flex flex-col gap-2 overflow-y-auto text-left relative">
        <h1 className="text-2xl font-bold text-center">The Informals</h1>
        <p>
          This is a troupe-style playbook, meaning rather than playing a single character, you switch between a number of
          different characters. There is nothing to do during character creation except review the special rules below and
          confirm this is the playbook you'd like to use.
        </p>
  
        <ul className="list-disc list-inside text-sm ">
          <li>
            <strong>Play Structure:</strong> Pick an Informal to play at the start of each phase. The Informal has access
            to different moves, depending on whether it’s the Day or Night Phase. During the Dusk Phase, in addition to
            any group decisions you help make, you must also narrate the required flashback. During the Dawn Phase, you
            don’t collect Rewards or XP; rather, you simply narrate the scene required. An Informal can only be chosen
            once for a Dusk and Dawn Phase. During a Hargrave House Night Phase, you still participate in the Room
            narrations, but you don’t collect an item for Personal Quarters at the end. Additionally, you are able to have
            regular scenes in the city; you cut back and forth between the Room scenes and the Informal scenes, as if the
            Room was an Unscene during a London Night Phase.{" "}
          </li>
          <li>
            You are a Hunter for most rules purposes. Occasionally, it won’t make sense for a rule that generally applies
            to Hunters to also apply to you because you don’t live in Hargrave House. In such cases, work with the Keeper
            to determine if the rule applies; the Keeper has final say.{" "}
          </li>
          <li>Each Informal can only take two Conditions. If they would take a third, you must put on the Janus Mask.</li>
          <li>
            You only have two lines for each Informal’s Personal Quarters, meaning they can never have more than two such
            items.{" "}
          </li>
          <li>
            You can put on the Janus Mask like any other Hunter. Additionally, if an Informal would suffer fatal harm, you
            can cross off the Personal Quarters section of that Informal and then describe how an item from the Personal
            Quarters (marked or unmarked) helps them narrowly avoid death. That Informal no longer has access to the
            Personal Quarters rules.{" "}
          </li>
        </ul>
  
        <p className="italic text-theme-text-accent">
          You are the Hargrave House Informals, a group of people in London who assist the Hunters with their
          investigations. You don’t know each other, and you don’t live in Hargrave House, but you are each in the employ
          of a resident of the house, and provide them with valuable skills and street-level knowledge they can’t get
          anywhere else. Let’s meet each of you in turn…
        </p>
  
        <button
          type="button"
          onClick={saveCharacter}
          className="bg-theme-bg-accent text-theme-text-accent border-theme-border-accent border-2 rounded-lg p-1"
        >
          Confirm
        </button>
      </div>
    )
  }

  function constructInformals({playerId}: {playerId: string}) {
	const basicMember:Omit<MiniCharacter, "moves"> = {
		conditions: ["",""],
		personalQuarters: [{text: "", marked: false},
			{text: "", marked: false},
		],
		patron: "",
		duskFlashback: false,
		dawnNarration: false,
		personalQuartersUnavailable: false,
		isDead: false,
		isActive: false,
	}
  const membersRecord: Record<keyof typeof members, MiniCharacter> = {}
  Object.entries(members).forEach(([member, details]) => {
    membersRecord[member] = { ...basicMember, moves: details.moves.map((move) => ({title: move.title, text: move.text, checks: Array.from({length: move.checkboxes ?? 0}, () => 0), lines: Array.from({length: move.extraLines ?? 0}, () => "")})) }
  })

  return {
    playbook: playbookKeys.informals,
    playerId,
    name: "The Informals",
	members: membersRecord,
	masksOfFuture: [0,0,0,0,0,0,0]
  }
}
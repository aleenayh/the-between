import { PlayerPill } from "../../shared/PlayerPill";
import { Section } from "../../shared/Section";
import { InformalsConditions } from "../sharedComponents/Conditions"
import type { Troupe } from "../types";
import { pretty } from "./InformalsExpanded";


export function InformalsSummaryKeeper({ informal }: { informal: Troupe }) {
    const activeMember = Object.keys(informal.members).find((member) => informal.members[member].isActive)
  return (
    <div              className="border-2 border-theme-border-accent bg-theme-bg-primary rounded-lg p-4 relative">
      <PlayerPill playerId={informal.playerId} />
      <h2>{activeMember ? `The Informals: ${pretty(activeMember)}` : "The Informals"}</h2>
      <div className="overflow-y-auto overflow-x-hidden min-h-0 min-w-0 flex flex-col gap-3">
        <Section title="Conditions">
          <InformalsConditions troupe={informal} characterKey={activeMember as keyof typeof informal.members} editable={true} />
        </Section>
        </div>
    </div>
  )
}
/** biome-ignore-all lint/suspicious/noArrayIndexKey: text array */
import { PlayerRole } from "../../context/types";
import { type ShrineType, shrineDescriptions } from "./details";

export function ActiveShrineDetails({
	name,
	viewerRole,
}: {
	name: ShrineType;
	viewerRole: PlayerRole;
}) {
	const { fullName, description, prompts, rewards } = shrineDescriptions[name];

	return (
		<div>
			<h2>Prayer: {fullName}</h2>
			<p className="italic text-sm">{description}</p>
			<ul className="list-inside">
				{prompts.map((prompt, index) => (
					<li key={index} className="ml-6 py-2">
						{romanNumerals[index]}. {prompt}
					</li>
				))}
			</ul>
			{viewerRole === PlayerRole.KEEPER && (
				<ul>
					{rewards.map((reward, index) => (
						<li key={index}>{reward}</li>
					))}
				</ul>
			)}
		</div>
	);
}

const romanNumerals = [
	"I",
	"II",
	"III",
	"IV",
	"V",
	"VI",
	"VII",
	"VIII",
	"IX",
	"X",
];

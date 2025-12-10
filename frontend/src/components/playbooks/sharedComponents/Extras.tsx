import type { Character } from "../types";

export function Extras({ character }: { character: Character }) {
	return (
		<div className="flex flex-col gap-2 text-left">
			<div className="grid grid-cols-[auto_1fr] gap-2">
				<h3 className="text-sm font-bold text-theme-text-accent">Ritual:</h3>
				<p className="text-sm text-theme-text-primary">{character.ritual}</p>
				<h3 className="text-sm font-bold text-theme-text-accent">Look:</h3>
				<p className="text-xs text-theme-text-secondary">{character.look}</p>
			</div>
		</div>
	);
}

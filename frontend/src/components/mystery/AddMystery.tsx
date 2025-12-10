import { useForm } from "react-hook-form";
import { useGame } from "../../context/GameContext";
import { Section } from "../playbooks/sharedComponents/Section";
import { CountdownItem } from "./Countdown";
import { type Mystery, MysteryTheme } from "./types";

type AddMysteryFormInputs = {
	title: string;
	theme: MysteryTheme;
	countdownTotal: number;
};

export function AddMystery() {
	const { register, handleSubmit, watch, reset } = useForm({
		defaultValues: {
			title: "",
			theme: MysteryTheme.Dandelion,
			countdownTotal: 0,
		},
	});
	const { gameState, updateGameState } = useGame();
	const onSubmit = (data: AddMysteryFormInputs) => {
		const newMystery: Mystery = {
			title: data.title,
			theme: data.theme,
			countdownTotal: data.countdownTotal,
			countdownCurrent: 0,
		};
		updateGameState({
			mysteries: [...gameState.mysteries, newMystery],
		});
		reset();
	};
	return (
		<Section title="Add Mystery" collapsible={true}>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
				<div className="flex flex-col gap-2">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						{...register("title")}
						className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
					/>
					<div className="flex gap-2 items-center">
						<label htmlFor="theme">Select Countdown Theme</label>
						<select
							{...register("theme")}
							className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
						>
							{Object.values(MysteryTheme).map((theme) => (
								<option key={theme} value={theme}>
									{theme}
								</option>
							))}
						</select>
						<label htmlFor="countdownTotal">Countdown Total</label>
						<input
							type="number"
							{...register("countdownTotal")}
							min={1}
							max={20}
							className="border px-2 py-1 rounded-lg bg-theme-bg-secondary text-theme-text-primary hover:bg-theme-bg-accent hover:text-theme-text-accent"
						/>
					</div>
					<div>
						<p className="text-center italic">Preview Countdown Timer</p>
						<Preview type={watch("theme")} total={watch("countdownTotal")} />
					</div>

					<button
						type="submit"
						className="bg-theme-bg-accent text-theme-text-accent px-4 py-2 rounded-lg opacity-80 hover:opacity-100"
					>
						Add Mystery
					</button>
				</div>
			</form>
		</Section>
	);
}

function Preview({ type, total }: { type: MysteryTheme; total: number }) {
	return (
		<div className="flex gap-3 min-h-[100px] justify-center items-center mx-auto py-10">
			{" "}
			{Array.from({ length: total }).map((_, index) => (
				<CountdownItem
					key={`preview-${type}-${
						// biome-ignore lint/suspicious/noArrayIndexKey: preview only
						index
					}`}
					theme={type}
					index={index}
					filled={index === 0}
				/>
			))}
		</div>
	);
}

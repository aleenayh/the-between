export function GlassyButton({
	children,
	onClick = () => {},
	disabled = false,
	row = false,
}: {
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	row?: boolean;
}) {
	return (
		<button
			type="button"
			className={`m-1 px-4 py-2 rounded-lg text-theme-text-accent flex ${row ? "flex-row justify-center" : "flex-col justify-start"} items-center gap-1 border border-theme-border backdrop-blur-sm
      hover:filter hover:brightness-150 transition-filter`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

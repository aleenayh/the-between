export function StyledTooltip({ children }: { children: React.ReactNode }) {
	if (!children) return null;
	return (
		<div className="mx-2 my-1 text-theme-text-primary p-2 rounded-lg max-w-96 whitespace-normal break-words text-sm mb-2 border border-theme-border-accent backdrop-blur-lg">
			{children}
		</div>
	);
}

export function StyledTooltip({ children }: { children: React.ReactNode }) {
	if (!children) return null;
	return (
		<div className="bg-theme-bg-primary text-theme-text-primary p-2 rounded-lg max-w-96 whitespace-normal break-words text-sm mb-2 border border-theme-border-accent">
			{children}
		</div>
	);
}

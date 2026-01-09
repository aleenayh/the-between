export function PencilIconButton({
	isEditing,
	setIsEditing,
}: {
	isEditing: boolean;
	setIsEditing: (isEditing: boolean) => void;
}) {
	return (
		<button
			type="button"
			onClick={() => setIsEditing(!isEditing)}
			className="p-1 hover:bg-theme-bg-accent hover:text-theme-text-accent rounded-lg"
			aria-label={isEditing ? "Done editing" : "Edit value"}
		>
			{isEditing ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<polyline points="20 6 9 17 4 12" />
				</svg>
			) : (
				<PencilIcon/>
			)}
		</button>
	);
}

export const PencilIcon = () => <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
  <path d="m15 5 4 4" />
</svg>
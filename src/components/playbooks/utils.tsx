/**
 * Parse text into formatted segments: lists, headers, strong, etc.
 * @param text
 */
export function parseStaticText(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  let lastEnd = 0

  // Combined regex to match all tag types in order of appearance
  const tagRegex = /<(h2|li|strong|i)>(.*?)<\/\1>/g
  let match = tagRegex.exec(text)

  while (match !== null) {
    // Add text before this match
    if (match.index > lastEnd) {
      parts.push(text.slice(lastEnd, match.index))
    }

    const [fullMatch, tagName, content] = match

    // Add the formatted element based on tag type
    switch (tagName) {
      case "h2":
        parts.push(<h3 key={match.index}>{content}</h3>)
        break
      case "li":
        parts.push(
          <li key={match.index} className="ml-4">
            {parseStaticText(content)}
          </li>,
        )
        break
      case "strong":
        parts.push(<strong key={match.index}>{content}</strong>)
        break
	case "i":
		parts.push(<i key={match.index}>{content}</i>)
		break
    }

    lastEnd = match.index + fullMatch.length
    match = tagRegex.exec(text)
  }

  // Add remaining text after the last match
  if (lastEnd < text.length) {
    parts.push(text.slice(lastEnd))
  }

  return parts
}

/**
 * Converts text in snakeCase to Title Case, adding spaces
 * @param text text in snakeCaseLikeSo
 */

export function convertToTitle(text: string): string {
  let result = ""
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (i === 0) {
      result += char.toUpperCase()
      continue
    }

    if (char.toUpperCase() === char) {
      result += " "
    }
    result += char
  }
  return result
}

/**
 * Parse text and render <check> tags with checkboxes
 */
export function parseWithCheckboxes(
	text: string,
	checks: number[],
	startIndex: number,
	editable: boolean,
	onToggle: (index: number) => void,
): { elements: React.ReactNode; nextAspectIndex: number } {
	const parts: React.ReactNode[] = [];
	let currentIndex = startIndex;
	let lastEnd = 0;

	// Match all <aspect>...</aspect> patterns
	const regex = /<check>(.*?)<\/check>/g;
	let match = regex.exec(text);

	while (match !== null) {
		// Add text before this aspect
		if (match.index > lastEnd) {
			const formattedStaticText = parseStaticText(
				text.slice(lastEnd, match.index),
			);
			parts.push(formattedStaticText);
		}

		const aspectText = match[1];
		const aspectIndex = currentIndex;
		const isChecked = checks[aspectIndex] === 1;

		parts.push(
			<AspectSpan
				key={`checkbox-${aspectIndex}`}
				text={aspectText}
				checked={isChecked}
				editable={editable}
				onToggle={() => onToggle(aspectIndex)}
			/>,
		);

		currentIndex++;
		lastEnd = match.index + match[0].length;
		match = regex.exec(text);
	}

	// Add remaining text after last aspect
	if (lastEnd < text.length) {
		const formattedStaticText = parseStaticText(text.slice(lastEnd));
		parts.push(formattedStaticText);
	}

	return { elements: parts, nextAspectIndex: currentIndex };
}

function AspectSpan({
	text,
	checked,
	editable,
	onToggle,
}: {
	text: string;
	checked: boolean;
	editable: boolean;
	onToggle: () => void;
}) {
	return (
		<span>
			<button
				type="button"
				onClick={onToggle}
				disabled={!editable}
				className={`inline-block align-middle w-3 h-3 border rounded-sm text-[8px] leading-[0.6rem] text-center mr-1 ${
					checked
						? "bg-theme-accent-primary border-theme-accent-primary text-theme-text-accent"
						: "border-theme-border-accent bg-transparent"
				} ${editable ? "cursor-pointer hover:border-theme-accent-primary" : "cursor-default opacity-70"}`}
				aria-label={checked ? "Uncheck aspect" : "Check aspect"}
			>
				{checked && "✓"}
			</button>
			<strong
				className={`${checked ? "line-through opacity-60" : ""} text-theme-text-primary`}
			>
				{parseStaticText(text)}
			</strong>
		</span>
	);
}
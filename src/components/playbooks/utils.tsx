/**
 * Parse text into formatted segments: lists, headers, strong, etc.
 * @param text
 */
export function parseStaticText(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  let lastEnd = 0

  // Combined regex to match all tag types in order of appearance
  const tagRegex = /<(h2|li|strong)>(.*?)<\/\1>/g
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

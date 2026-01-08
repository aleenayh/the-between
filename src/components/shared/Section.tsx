import { useState } from "react"

export function Section({
  title,
  collapsible = false,
  minify = false,
  children,
  leftAlign = false,
}: {
  title: string
  collapsible?: boolean
  minify?: boolean
  children: React.ReactNode
  leftAlign?: boolean
}) {
  const [isCollapsed, setIsCollapsed] = useState(minify ?? false)
  return (
    <ControlledSection
      title={title}
      collapsible={collapsible}
      minify={minify}
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
      leftAlign={leftAlign}
    >
      {children}
    </ControlledSection>
  )
}

export function ControlledSection({
  title,
  collapsible = false,
  minify = false,
  isCollapsed,
  setIsCollapsed,
  children,
  leftAlign = false,
}: {
  title: string
  collapsible?: boolean
  minify?: boolean
  isCollapsed: boolean
  setIsCollapsed: (isCollapsed: boolean) => void
  children: React.ReactNode
  leftAlign?: boolean
}) {
  return (
    <div className="flex flex-col gap-2 my-4 justify-center items-stretch min-w-0">
      <h3 className={`font-bold ${leftAlign ? "text-left" : "text-center"} text-theme-text-accent ${minify ? "text-sm" : "text-lg"}`}>
        <button
          type="button"
          onClick={() => {
            collapsible && setIsCollapsed(!isCollapsed)
          }}
        >
          {collapsible && !leftAlign &&<span className="text-xs text-theme-text-muted">{isCollapsed ? "▶ " : "▼ "}</span>}{" "}
          {title} {collapsible && <span className="text-xs text-theme-text-muted">{isCollapsed ? " ◀" : "▼"}</span>}
        </button>
      </h3>
      <div
        className={`flex flex-col gap-2 w-full min-w-0 overflow-hidden break-words ${isCollapsed ? "h-0 opacity-0" : "h-auto opacity-100"}`}
      >
        {children}
      </div>
    </div>
  )
}

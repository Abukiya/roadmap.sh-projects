import { useEffect } from "react"

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  if (target.isContentEditable) {
    return true
  }

  return Boolean(
    target.closest("input, textarea, select, [contenteditable='true']")
  )
}

/** Pressing `R` anywhere outside a form control pulls another repo. */
export function useRerollShortcut(
  onReroll: () => void,
  { enabled }: { enabled: boolean }
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        !enabled ||
        event.repeat ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey
      ) {
        return
      }

      if (event.key.toLowerCase() !== "r" || isEditableTarget(event.target)) {
        return
      }

      onReroll()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onReroll, enabled])
}

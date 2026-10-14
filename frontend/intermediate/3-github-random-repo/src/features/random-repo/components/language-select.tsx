import { type ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import { LANGUAGES } from "../utils/constants"

type LanguageSelectProps = {
  value: string
  onChange: (language: string) => void
  /** Rendered beside the select — e.g. the fetch button. */
  action?: ReactNode
}

export function LanguageSelect({
  value,
  onChange,
  action,
}: LanguageSelectProps) {
  return (
    <div className="flex w-full flex-col gap-3.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor="language-select"
          className="font-mono text-xs tracking-[0.14em] text-steel"
        >
          LANGUAGE
        </label>
        <span className="font-mono text-xs tracking-[0.14em] text-steel">
          {LANGUAGES.length} LOADED
        </span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1">
          <select
            id="language-select"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="h-14 w-full appearance-none rounded-[4px] border-2 border-ink bg-white px-4 pr-11 text-[17px] font-bold text-ink outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          >
            {LANGUAGES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 size-3.5 -translate-y-1/2 text-ink"
          />
        </div>
        {action}
      </div>

      <span className="font-mono text-xs tracking-[0.08em] text-steel">
        TIP — PRESS R TO REROLL
      </span>
    </div>
  )
}

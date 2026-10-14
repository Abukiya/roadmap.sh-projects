import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LANGUAGES, POPULAR_LANGUAGE_VALUES } from "../utils/constants"

type ResultEmptyProps = {
  language: string
  onPickLanguage: (language: string) => void
  onFocusSelect: () => void
}

export function ResultEmpty({
  language,
  onPickLanguage,
  onFocusSelect,
}: ResultEmptyProps) {
  const popularChips = POPULAR_LANGUAGE_VALUES.map((value) => {
    return LANGUAGES.find((option) => option.value === value)
  }).filter((option): option is (typeof LANGUAGES)[number] => Boolean(option))

  return (
    <div className="flex max-w-[720px] flex-col gap-5">
      <span className="font-mono text-xs tracking-[0.14em] text-steel">
        0 RESULTS
      </span>

      <h2 className="text-[36px] leading-[1.08] font-black tracking-tight text-ink sm:text-[44px]">
        NOTHING IN
        <br />
        THE BIN.
      </h2>

      <p className="text-[17px] leading-[27px] text-ink-soft">
        No public repositories matched{" "}
        <span className="font-mono text-ink">{language}</span>. Broaden the
        search, or roll again with one of these popular picks:
      </p>

      <div className="flex flex-wrap gap-2">
        {popularChips.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onPickLanguage(option.value)}
            className="rounded-full border border-hairline px-3.5 py-1.5 font-mono text-xs tracking-[0.06em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
          >
            {option.label.toUpperCase()}
          </button>
        ))}
      </div>

      <Button
        variant="outline-ink"
        size="xl"
        className="mt-2 self-start"
        onClick={onFocusSelect}
      >
        PICK ANOTHER LANGUAGE
        <ChevronDown />
      </Button>
    </div>
  )
}

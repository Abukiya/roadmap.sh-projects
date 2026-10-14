import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelect } from "./language-select"

type FinderHeroProps = {
  language: string
  onLanguageChange: (language: string) => void
  onFetch: () => void
  isPending: boolean
}

export function FinderHero({
  language,
  onLanguageChange,
  onFetch,
  isPending,
}: FinderHeroProps) {
  return (
    <section className="flex flex-col gap-10 px-6 pt-10 md:px-16 md:pt-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
      <div className="flex flex-col gap-[22px]">
        <span className="font-mono text-xs tracking-[0.14em] text-steel">
          STEP 01 — CHOOSE YOUR LANGUAGE
        </span>
        <h1 className="text-[44px] leading-none font-black tracking-tight text-ink sm:text-[56px] lg:text-[64px]">
          PULL A REPO.
        </h1>
        <p className="max-w-[560px] text-[17px] leading-[27px] text-ink-soft">
          Pick a language, pull the lever, and one random repository is
          dispensed straight from GitHub&apos;s search index — stars, forks and
          open issues included.
        </p>
      </div>

      <div className="w-full lg:w-[452px] lg:shrink-0">
        <LanguageSelect
          value={language}
          onChange={onLanguageChange}
          action={
            <Button
              variant="signal"
              size="xl"
              onClick={onFetch}
              disabled={isPending}
              className="font-extrabold tracking-[0.06em] uppercase"
            >
              FETCH A REPO
              <ArrowRight />
            </Button>
          }
        />
      </div>
    </section>
  )
}

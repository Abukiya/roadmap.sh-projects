import { useCallback, useEffect, useState } from "react"
import {
  getPendingRequestUrl,
  useRandomRepository,
} from "../api/get-random-repo"
import { useRerollShortcut } from "../hooks/use-reroll-shortcut"
import { DEFAULT_LANGUAGE } from "../utils/constants"
import { FinderFooter } from "./finder-footer"
import { FinderHero } from "./finder-hero"
import { RepoResult } from "./repo-result"
import { ResultEmpty } from "./result-empty"
import { ResultError } from "./result-error"
import { ResultLoading } from "./result-loading"

export function RepoFinder() {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)
  const [dispenseCount, setDispenseCount] = useState(0)
  const { mutate, data, isPending, error } = useRandomRepository({
    options: {
      onSuccess: (result) => {
        if (result.repo) {
          setDispenseCount((count) => count + 1)
        }
      },
    },
  })

  const dispense = useCallback(() => {
    mutate(language)
  }, [mutate, language])

  // Auto-dispense on mount and whenever the language changes.
  useEffect(() => {
    dispense()
  }, [dispense])

  useRerollShortcut(dispense, { enabled: !isPending })

  const pickLanguage = useCallback(
    (nextLanguage: string) => {
      if (nextLanguage === language) {
        dispense()
        return
      }
      setLanguage(nextLanguage)
    },
    [language, dispense]
  )

  const focusLanguageSelect = useCallback(() => {
    document.getElementById("language-select")?.focus()
  }, [])

  const status = isPending
    ? "loading"
    : error
      ? "error"
      : data?.repo
        ? "success"
        : data
          ? "empty"
          : "idle"

  return (
    <main className="flex w-full flex-1 flex-col">
      <FinderHero
        language={language}
        onLanguageChange={setLanguage}
        onFetch={dispense}
        isPending={isPending}
      />

      <section
        aria-live="polite"
        className="flex flex-1 flex-col px-6 pt-[52px] pb-12 md:px-16"
      >
        {status === "success" && data?.repo && (
          <RepoResult
            repo={data.repo}
            dispenseCount={dispenseCount}
            onRefresh={dispense}
          />
        )}

        {(status === "loading" || status === "idle") && (
          <ResultLoading language={language} />
        )}

        {status === "empty" && (
          <ResultEmpty
            language={language}
            onPickLanguage={pickLanguage}
            onFocusSelect={focusLanguageSelect}
          />
        )}

        {status === "error" && error && (
          <ResultError error={error} onRetry={dispense} />
        )}
      </section>

      <FinderFooter
        requestUrl={data?.requestUrl ?? getPendingRequestUrl(language)}
      />
    </main>
  )
}

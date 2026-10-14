import { useEffect, useState } from "react"
import { RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ApiError } from "@/lib/api-client"
import { formatCountdown } from "../utils/format"

type ResultErrorProps = {
  error: Error
  onRetry: () => void
}

function useCountdown(resetAt: number | null): number | null {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(() => {
    if (resetAt === null) {
      return null
    }
    return Math.max(0, resetAt - Math.floor(Date.now() / 1000))
  })

  useEffect(() => {
    if (resetAt === null) {
      return undefined
    }

    const tick = () => {
      setSecondsLeft(Math.max(0, resetAt - Math.floor(Date.now() / 1000)))
    }

    const intervalId = window.setInterval(tick, 1000)
    return () => window.clearInterval(intervalId)
  }, [resetAt])

  return secondsLeft
}

export function ResultError({ error, onRetry }: ResultErrorProps) {
  const apiError = error instanceof ApiError ? error : null
  const isRateLimited = apiError?.rateLimitReset !== null && apiError !== null
  const secondsLeft = useCountdown(apiError?.rateLimitReset ?? null)

  const statusLabel =
    apiError === null
      ? "NETWORK ERROR"
      : apiError.status === 0
        ? "OFFLINE"
        : `${apiError.status}`

  return (
    <div className="flex max-w-[720px] flex-col gap-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="size-2.5 bg-alert" />
          <span className="font-mono text-xs tracking-[0.14em] text-alert">
            ERROR
          </span>
        </div>
        <span className="font-mono text-xs tracking-[0.08em] text-alert">
          {statusLabel}
        </span>
      </div>

      <h2 className="text-[36px] leading-[1.08] font-black tracking-tight text-ink sm:text-[44px]">
        {isRateLimited ? (
          <>
            RATE
            <br />
            LIMITED.
          </>
        ) : (
          <>
            REQUEST
            <br />
            FAILED.
          </>
        )}
      </h2>

      {isRateLimited ? (
        <>
          <p className="text-[17px] leading-[27px] text-ink-soft">
            GitHub allows 10 search requests per minute. Take a breath — the
            lever unlocks again in{" "}
            <span className="font-mono text-alert">
              {formatCountdown(secondsLeft ?? 60)}
            </span>
            .
          </p>
          <p className="text-[17px] leading-[27px] text-steel">
            If it keeps happening, an unauthenticated IP is sharing your quota.
          </p>
        </>
      ) : (
        <p className="text-[17px] leading-[27px] text-ink-soft">
          {error.message}
        </p>
      )}

      <Button
        variant="outline-alert"
        size="xl"
        className="mt-2 self-start"
        onClick={onRetry}
      >
        RETRY NOW
        <RotateCw />
      </Button>
    </div>
  )
}

import { getPendingRequestUrl } from "../api/get-random-repo"
import { prettyUrl } from "../utils/format"

function SkeletonBar({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-[2px] bg-hairline ${className}`} />
  )
}

export function ResultLoading({ language }: { language: string }) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3.5">
        <SkeletonBar className="h-[26px] w-[240px] max-w-full" />
        <SkeletonBar className="h-[13px] w-full max-w-[720px]" />
        <SkeletonBar className="h-[13px] w-full max-w-[560px]" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-12">
        <SkeletonBar className="h-14 w-full sm:w-[240px]" />
        <SkeletonBar className="h-14 w-full sm:w-[240px]" />
        <SkeletonBar className="h-14 w-full sm:w-[240px]" />
      </div>

      <div className="mt-2 flex flex-col gap-2.5">
        <div className="flex items-center gap-2.5">
          <svg
            className="size-4 shrink-0"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="6.5" stroke="#e5e1d6" strokeWidth="2.5" />
            <path
              d="M8 1.5A6.5 6.5 0 0 1 14.5 8"
              stroke="#14140f"
              strokeWidth="2.5"
            />
          </svg>
          <span className="font-mono text-[13px] tracking-[0.06em] text-ink">
            FETCHING FROM GITHUB…
          </span>
        </div>
        <span className="font-mono text-xs text-steel">
          GET {prettyUrl(getPendingRequestUrl(language))}
        </span>
      </div>
    </div>
  )
}

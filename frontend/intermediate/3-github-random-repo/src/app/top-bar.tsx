function DieMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <g fill="currentColor">
        <circle cx="6" cy="6" r="1.7" />
        <circle cx="14" cy="6" r="1.7" />
        <circle cx="10" cy="10" r="1.7" />
        <circle cx="6" cy="14" r="1.7" />
        <circle cx="14" cy="14" r="1.7" />
      </g>
    </svg>
  )
}

export function TopBar() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center justify-between bg-ink px-6 md:px-16">
      <div className="flex items-center gap-3">
        <DieMark className="size-[22px] text-signal" />
        <span className="flex items-baseline text-[18px] font-black tracking-tight text-white">
          REPO RIFFLE
          <span className="text-signal">.</span>
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="size-2 rounded-full bg-signal" />
        <span className="hidden font-mono text-xs tracking-[0.1em] text-hairline sm:block">
          GITHUB SEARCH API · RANDOM PAGE
        </span>
      </div>
    </header>
  )
}

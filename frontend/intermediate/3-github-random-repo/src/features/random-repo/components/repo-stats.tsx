import { type LucideIcon, CircleAlert, GitFork, Star } from "lucide-react"
import type { Repository } from "../types"
import { formatCount } from "../utils/format"

type Stat = {
  label: string
  value: number
  icon: LucideIcon
}

export function RepoStats({ repo }: { repo: Repository }) {
  const stats: Stat[] = [
    { label: "STARS", value: repo.stargazers_count, icon: Star },
    { label: "FORKS", value: repo.forks_count, icon: GitFork },
    { label: "OPEN ISSUES", value: repo.open_issues_count, icon: CircleAlert },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 bg-">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex flex-col gap-2.5 py-4 sm:py-0 ${
            index > 0
              ? "border-t border-hairline sm:border-t-0 sm:border-l sm:pl-12"
              : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <stat.icon className="size-3.5 text-steel" aria-hidden="true" />
            <span className="font-mono text-xs tracking-[0.14em] text-steel">
              {stat.label}
            </span>
          </div>
          <span className="font-mono text-[32px] leading-none font-semibold text-ink sm:text-[40px]">
            {formatCount(stat.value)}
          </span>
        </div>
      ))}
    </div>
  )
}

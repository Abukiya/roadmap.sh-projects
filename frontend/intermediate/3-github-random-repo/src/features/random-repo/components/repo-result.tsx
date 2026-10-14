import { type ReactNode } from "react"
import { ExternalLink, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Repository } from "../types"
import { formatAgo } from "../utils/format"
import { RepoStats } from "./repo-stats"

type RepoResultProps = {
  repo: Repository
  dispenseCount: number
  onRefresh: () => void
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-hairline px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-ink">
      {children}
    </span>
  )
}

export function RepoResult({
  repo,
  dispenseCount,
  onRefresh,
}: RepoResultProps) {
  const hasLicense = Boolean(
    repo.license?.spdx_id && repo.license.spdx_id !== "NOASSERTION"
  )

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="size-2 bg-signal" />
          <span className="font-mono text-xs tracking-[0.14em] text-steel">
            DISPENSED — JUST NOW · RESULT #{dispenseCount}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {hasLicense && <Chip>{repo.license?.spdx_id} LICENSE</Chip>}
          <Chip>UPDATED {formatAgo(repo.updated_at)}</Chip>
        </div>
      </div>

      <div className="mt-[26px] flex flex-col gap-4">
        <div className="flex flex-wrap items-baseline gap-x-3.5">
          <span className="text-[34px] leading-none font-black tracking-tight text-steel sm:text-[48px] lg:text-[56px]">
            {repo.owner.login} /
          </span>
          <span className="text-[34px] leading-none font-black tracking-tight break-all text-ink sm:text-[48px] lg:text-[56px]">
            {repo.name}
          </span>
        </div>
        <p className="max-w-[860px] text-[17px] leading-[28px] text-ink-soft sm:text-[19px] sm:leading-[30px]">
          {repo.description ?? "No description provided."}
        </p>
      </div>

      <div className="mt-[38px]">
        <RepoStats repo={repo} />
      </div>

      <div className="mt-[38px] flex flex-wrap items-center gap-3.5">
        <Button
          variant="signal"
          size="xl"
          onClick={onRefresh}
          className="font-extrabold tracking-[0.06em] uppercase"
        >
          <RefreshCw />
          REFRESH REPO
        </Button>
        <Button
          render={<a href={repo.html_url} target="_blank" rel="noreferrer" />}
          variant="outline-ink"
          size="xl"
          className="font-extrabold tracking-[0.06em] uppercase"
        >
          OPEN ON GITHUB
          <ExternalLink />
        </Button>
      </div>
    </div>
  )
}

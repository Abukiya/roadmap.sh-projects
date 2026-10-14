import { prettyUrl } from "../utils/format"

export function FinderFooter({ requestUrl }: { requestUrl: string }) {
  return (
    <footer className="mt-auto flex w-full flex-wrap items-center justify-between gap-2 border-t border-hairline px-6 py-[18px] md:px-16">
      <span className="font-mono text-xs tracking-[0.04em] break-all text-steel">
        GET {prettyUrl(requestUrl)}
      </span>
      <span className="font-mono text-xs tracking-[0.1em] text-steel">
        REPO RIFFLE · ROADMAP.SH PROJECT
      </span>
    </footer>
  )
}

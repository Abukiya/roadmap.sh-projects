import Skeleton from "../../components/Skeleton";

function LinkSketleton({ width }) {
  return (
    <div className="flex justify-around items-center gap-4 w-1/3 border-2 p-2 rounded-2xl border-neutral-400 cursor-pointer">
      <Skeleton className={`h-4 ${width}`} />
    </div>
  );
}

export function PrevnnextlinksSketleton() {
  return (
    <div role="status" aria-live="polite" className="flex justify-between">
      <span className="sr-only">Loading navigation…</span>
      <LinkSketleton width="w-24" />
      <LinkSketleton width="w-20" />
    </div>
  );
}

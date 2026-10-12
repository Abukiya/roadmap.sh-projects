import Skeleton from "../../components/Skeleton";

function CardSketleton() {
  return (
    <div className="flex justify-around items-center gap-4 w-1/3 border-2 p-2 rounded-2xl border-neutral-400">
      <Skeleton className="size-6" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-4 w-14" />
      </div>
    </div>
  );
}

export default function CardsSketleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex gap-4 justify-between"
    >
      <span className="sr-only">Loading weather details…</span>
      <CardSketleton />
      <CardSketleton />
      <CardSketleton />
    </div>
  );
}

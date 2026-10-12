import Skeleton from "../../components/Skeleton";

function HourCardSkeleton() {
  return (
    <div className="min-w-20 rounded-2xl bg-white p-4 text-center shadow-sm">
      <Skeleton className="mx-auto h-4 w-12" />
      <Skeleton className="mx-auto mt-3 h-6 w-10" />
      <Skeleton className="mx-auto mt-3 h-3 w-8" />
    </div>
  );
}

export default function HourlyPageSkeleton() {
  return (
    <section
      role="status"
      aria-live="polite"
      className="w-full lg:w-5xl flex flex-col gap-8"
    >
      <span className="sr-only">Loading hourly weather…</span>
      <div>
        <Skeleton className="h-9 w-56" />
        <Skeleton className="mt-3 h-4 w-64" />
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex items-baseline justify-between">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-28" />
        </div>
        <Skeleton className="mt-4 h-72 w-full" />
      </div>

      <div className="flex gap-3 overflow-hidden pb-2">
        {Array.from({ length: 9 }, (_, index) => (
          <HourCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export function LaneSkeleton({ rows = 4 }) {
  return (
    <div className="animate-pulse" aria-hidden="true">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="border-b border-neutral-200 px-3 py-3.5">
          <div className="h-3 w-3/4 bg-neutral-200" />
          <div className="mt-2 h-3 w-1/2 bg-neutral-200" />
          <div className="mt-3 flex gap-2">
            <div className="h-3 w-16 bg-neutral-200" />
            <div className="h-3 w-20 bg-neutral-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

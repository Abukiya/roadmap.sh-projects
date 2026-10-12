import Skeleton from "../../components/Skeleton";

export default function WeathercardSketleton() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full lg:w-5xl bg-blue-400 p-4 rounded-2xl text-white"
    >
      <span className="sr-only">Loading weather…</span>

      {/* Header: location + date, last updated + refresh button */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton tone="light" className="h-4 w-44" />
          <Skeleton tone="light" className="h-4 w-24" />
        </div>
        <div className="flex gap-4 items-center">
          <Skeleton tone="light" className="h-4 w-28" />
          <Skeleton tone="light" className="size-9 rounded-full" />
        </div>
      </div>

      {/* Icon, condition and temperature */}
      <div className="flex flex-col gap-4 justify-center">
        <Skeleton tone="light" className="size-32 mx-auto my-2 rounded-full" />
        <Skeleton tone="light" className="h-6 w-44 mx-auto" />
        <div className="flex justify-center items-end gap-2">
          <Skeleton tone="light" className="h-10 w-24" />
          <Skeleton tone="light" className="h-5 w-6" />
        </div>
      </div>
    </div>
  );
}

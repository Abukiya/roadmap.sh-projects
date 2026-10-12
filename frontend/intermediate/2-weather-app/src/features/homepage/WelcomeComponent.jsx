import { CloudSun } from "lucide-react";

export default function Welcomecomponent() {
  return (
    <section className="w-full rounded-2xl bg-linear-to-br from-blue-400 to-blue-500 p-10 text-center text-white shadow-sm">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-white/15">
        <CloudSun className="size-9" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h1 className="mt-4 text-2xl font-bold">How's the weather out there?</h1>
      <p className="mt-2 text-sm text-blue-100">
        Search for any city above to see the current conditions, wind, rain
        and humidity — plus the previous and next 24 hours.
      </p>
      <p className="mt-4 text-xs text-blue-100">
        Try "London", "Tokyo" or "San Francisco"
      </p>
    </section>
  );
}

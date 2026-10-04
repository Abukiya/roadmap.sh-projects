const HOUR = 60 * 60 * 1000;

const formatHour = (timestamp) =>
  new Date(timestamp)
    .toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
    })
    .replace(",", ""); // "Wed, Oct 1, 3 PM" -> "Wed Oct 1, 3 PM"

export default function HourlySection({ title, hours }) {
  const start = hours[0].timestamp;
  const end = start + 24 * HOUR;

  return (
    <section className="w-full lg:w-5xl flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">
        {formatHour(start)} → {formatHour(end)}
      </p>
      <div className="flex gap-3 overflow-x-auto">
        {hours.map((h) => (
          <div
            key={h.timestamp}
            className="min-w-20 rounded-2xl bg-white p-4 text-center shadow-sm mb-2"
          >
            <p className="text-sm text-slate-500">{h.datetime.slice(0, 5)}</p>
            <p className="font-semibold">{Math.round(h.temp)}°</p>
            <p className="text-xs text-sky-500">{h.precipprob}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}

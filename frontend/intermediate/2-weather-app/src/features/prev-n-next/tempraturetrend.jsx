// src/components/TemperatureTrend.jsx
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceDot,
  ResponsiveContainer,
} from "recharts";

const hourLabel = (timestamp) =>
  new Date(timestamp).toLocaleString("en-US", { hour: "numeric" }); // "4 PM"

const dotLabel = (value) => ({
  value: `${Math.round(value)}°`,
  position: "top",
  fontSize: 12,
  fontWeight: 700,
  fill: "#0f172a",
});

export default function TemperatureTrend({ hours }) {
  // 1. reshape the data for Recharts
  const data = hours.map((h) => ({
    label: hourLabel(h.timestamp),
    temp: h.temp,
  }));

  // 2. find the coldest and hottest points
  const temps = data.map((d) => d.temp);
  const min = Math.min(...temps);
  const max = Math.max(...temps);
  const minPoint = data.find((d) => d.temp === min);
  const maxPoint = data.find((d) => d.temp === max);

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between">
        <h3 className="text-sm font-bold text-slate-900">Temperature trend</h3>
        <p className="text-xs text-slate-500">
          {Math.round(min)}° – {Math.round(max)}° over 24 h
        </p>
      </div>

      {/* ResponsiveContainer needs a parent with a real height */}
      <div className="mt-2 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 28, right: 16, bottom: 0, left: 16 }} >
            <defs>
              <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="label"
              interval={5} // a label every 6 hours
              tickLine={false}
              axisLine={{ stroke: "#cbd5e1" }}
              tick={{ fontSize: 12, fontWeight: 600, fill: "#334155" }}
            />

            {/* hidden axis, only used to give the line room above and below */}
            <YAxis hide domain={[min - 2, max + 2]} />

            <Tooltip
              formatter={(value) => [`${Math.round(value)}°`, "Temp"]}
              cursor={{ stroke: "#94a3b8", strokeDasharray: "4 4" }}
              contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0" }}
            />

            <Area
              type="monotone" // smooth, with no overshoot
              dataKey="temp"
              stroke="#1e293b"
              strokeWidth={2.5}
              fill="url(#tempGradient)"
              dot={false}
              activeDot={{ r: 5, fill: "#0ea5e9", stroke: "#1e293b", strokeWidth: 2 }}
            />

            {/* highlighted max and min points with labels */}
            <ReferenceDot
              x={maxPoint.label}
              y={max}
              r={5}
              fill="#0ea5e9"
              stroke="#1e293b"
              strokeWidth={2}
              label={dotLabel(max)}
            />
            <ReferenceDot
              x={minPoint.label}
              y={min}
              r={5}
              fill="#0ea5e9"
              stroke="#1e293b"
              strokeWidth={2}
              label={dotLabel(min)}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
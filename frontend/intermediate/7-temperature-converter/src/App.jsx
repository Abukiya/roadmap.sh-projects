import { useState } from "react";
import { convertTemperature } from "./converter";
export default function App() {
  const UNITS = [
    { value: "fahrenheit", label: "Fahrenheit", symbol: "°F" },
    { value: "celsius", label: "Celsius", symbol: "°C" },
    { value: "kelvin", label: "Kelvin", symbol: "K" },
  ];

  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isReady) return;

    const num = parseFloat(value);
    if (Number.isNaN(num)) {
      setError("Enter a valid number.");
      setResult(null);
      return;
    }
    if (fromUnit === "kelvin" && num < 0) {
      setError("Kelvin can't be below 0.");
      setResult(null);
      return;
    }
    const converted = convertTemperature(value, fromUnit, toUnit);
    setResult(`${value} ${fromUnit} is ${converted} ${toUnit}  `);
  };

  const isReady = value.trim() !== "" && fromUnit !== "" && toUnit !== "";
  const controlClass =
    "h-12 rounded-xl border border-black bg-white px-4 text-base outline-none focus:ring-2 focus:ring-black/20";
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl rounded-2xl border border-black px-8 py-10"
      >
        <h1 className="text-3xl font-medium">Temperature Converter</h1>
        <p className="mt-3 text-base">
          Enter the temperature, select units and submit
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <input
            type="number"
            step="any"
            aria-label="Temperature"
            placeholder="0.00"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`${controlClass} w-24`}
          />

          <select
            aria-label="From unit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className={`${controlClass} w-44 ${fromUnit === "" ? "text-neutral-500" : ""}`}
          >
            <option value="" disabled>
              From Unit
            </option>
            {UNITS.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>

          <select
            aria-label="To unit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className={`${controlClass} w-44 ${toUnit === "" ? "text-neutral-500" : ""}`}
          >
            <option value="" disabled>
              To Unit
            </option>
            {UNITS.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={!isReady}
            className="h-12 rounded-xl bg-black px-8 text-base text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black/30 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:hover:bg-neutral-300"
          >
            Convert
          </button>
        </div>

        {error && (
          <p role="alert" className="mt-6 text-red-600">
            {error}
          </p>
        )}
        {result && (
          <p aria-live="polite" className="mt-6 text-2xl font-medium">
            {result}
          </p>
        )}
      </form>
    </main>
  );
}

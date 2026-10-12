import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchWeather } from "../../api/getWeather";
import HourlySection from "./HourlySection";
import HourlyPageSkeleton from "./HourlyPageSkeleton";

function flattenHourlyData(data) {
  return data.days
    .flatMap((day) =>
      day.hours.map((hour) => ({
        ...hour,
        date: day.datetime,
        timestamp: new Date(`${day.datetime}T${hour.datetime}`).getTime(),
      })),
    )
    .sort((first, second) => first.timestamp - second.timestamp);
}

export default function HourlyPage() {
  const { city: encodedCity, range } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const requestKey = `${encodedCity || ""}:${range || ""}`;

  useEffect(() => {
    if (!encodedCity || !["previous", "next"].includes(range)) {
      navigate("/", { replace: true });
      return;
    }

    let city;
    try {
      city = decodeURIComponent(encodedCity).trim();
    } catch {
      navigate("/", { replace: true });
      return;
    }

    if (!city) {
      navigate("/", { replace: true });
      return;
    }

    const controller = new AbortController();

    async function loadHourlyData() {
      try {
        const data = await fetchWeather(city, controller.signal);
        const allHours = flattenHourlyData(data);
        const currentHour = new Date();
        currentHour.setMinutes(0, 0, 0);
        const currentTimestamp = currentHour.getTime();
        const selectedHours =
          range === "previous"
            ? allHours.filter((hour) => hour.timestamp < currentTimestamp).slice(-24)
            : allHours.filter((hour) => hour.timestamp >= currentTimestamp).slice(0, 24);

        if (selectedHours.length === 0) {
          throw new Error("Hourly weather data is unavailable for this city.");
        }

        setResult({ key: requestKey, hours: selectedHours, error: null });
      } catch (err) {
        if (err.name !== "AbortError") {
          setResult({
            key: requestKey,
            hours: null,
            error: err.message || "Unable to load hourly weather data.",
          });
        }
      }
    }

    loadHourlyData();

    return () => controller.abort();
  }, [encodedCity, navigate, range, requestKey]);

  if (!result || result.key !== requestKey) {
    return <HourlyPageSkeleton />;
  }

  if (result.error) {
    return <p className="text-red-500">{result.error}</p>;
  }

  return (
    <HourlySection
      title={range === "previous" ? "Previous 24 Hours" : "Next 24 Hours"}
      hours={result.hours}
    />
  );
}
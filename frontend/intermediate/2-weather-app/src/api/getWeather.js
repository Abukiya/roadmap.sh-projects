export async function fetchWeather(city, signal) {
  function pad(num) {
    return num.toString().padStart(2, "0");
  }
  function toAPIDateTime(dt) {
    return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}T${pad(dt.getHours())}:${pad(dt.getMinutes())}:00`;
  }

  const now = new Date();
  const prev24 = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const next24 = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const dtStart = toAPIDateTime(prev24);
  const dtEnd = toAPIDateTime(next24);

  const params = new URLSearchParams({
    key: import.meta.env.VITE_WEATHER_KEY,
    unitGroup: "metric",
    include: "current,hours",
  });
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}/${dtStart}/${dtEnd}?${params}`;

  const response = await fetch(url , { signal});

  if (!response.ok) {
    const message = await response.text();
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return response.json();
}
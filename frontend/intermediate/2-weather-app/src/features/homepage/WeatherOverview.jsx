import { WeatherCard } from "./weathercard";
import { Cards } from "./cards";
import { Prevnnextlinks } from "./prev-n-next-link";

export function WeatherOverview({ data }) {
  const city = data.resolvedAddress || data.address;

  return (
    <>
      <WeatherCard data={data} />
      <Cards data={data} />
      <Prevnnextlinks city={city} />
    </>
  );
}

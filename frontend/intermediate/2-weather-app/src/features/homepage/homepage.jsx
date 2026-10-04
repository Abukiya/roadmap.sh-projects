import { Search_input } from "../../components/search";
import { WeatherCard } from "./weathercard";
import { Cards } from "./cards";
import { Prevnnextlinks } from "./prev-n-next-link";
export function Homepage() {
  return (
    <div className="w-full lg:w-5xl flex flex-col gap-8">
      <Search_input />
      <WeatherCard />
      <Cards />
      <Prevnnextlinks />
    </div>
  );
}

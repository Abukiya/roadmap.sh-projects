import { Search_input } from "./search";
import { WeatherCard } from "./weathercard";
import { Cards } from "./cards";
import { Prevnnextlinks } from "./prev-n-next-link";
import { useState } from "react";
import { fetchWeather } from "../../api/getWeather";
export function Homepage() {
  const [weather, setWeather] = useState(null);
  async function api_handler(city) {
    const data = await fetchWeather(city);
    setWeather(data)
    console.log(data);
    alert(city);
  }

  return (
    <div className="w-full lg:w-5xl flex flex-col gap-8">
      <Search_input onSearch={api_handler} />
      {weather && <WeatherCard data={weather} />}
      {weather && <Cards data={weather}/>}
      <Prevnnextlinks />
    </div>
  );
}

import { Search_input } from "./search";
import { WeatherOverview } from "./WeatherOverview";
import { useState } from "react";
import { fetchWeather } from "../../api/getWeather";
import HomepageSkeleton from "./HomepageSkeleton";
import Welcomecomponent from "./WelcomeComponent";

export function Homepage() {
  const [weather, setWeather] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  async function api_handler(city) {
    setIsloading(true);
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      if (err.status === 400) {
        if (err.message.includes("too short")) {
          setError("Please enter a longer city name.");
        } else if (err.message.includes("No valid locations")) {
          setError("City not found. Check the spelling and try again.");
        } else {
          setError("Invalid request.");
        }
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsloading(false);
    }
  }

  return (
    <div className="w-full lg:w-5xl flex flex-col gap-8">
      <Search_input onSearch={api_handler} />
      {!isloading && !error && !weather && <Welcomecomponent/>}
      {isloading && <HomepageSkeleton />}
      {!isloading && error && <p className="text-red-500">{error}</p>}
      {!isloading && !error && weather && <WeatherOverview data={weather} />}
    </div>
  );
}

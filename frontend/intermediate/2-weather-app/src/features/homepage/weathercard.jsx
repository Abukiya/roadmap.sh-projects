import { RefreshCcw } from "lucide-react";
import mockWeather from "../../data/mockWeather";

import { Sun, CloudSun, Cloud, CloudRain, Moon, CloudMoon} from "lucide-react";

const iconMap = {
  "clear-day": Sun,
  "partly-cloudy-day": CloudSun,
  cloudy: Cloud,
  rain: CloudRain,
  "clear-night": Moon,
  "partly-cloudy-night": CloudMoon,
};
const { currentConditions, resolvedAddress } = mockWeather;
export function WeatherCard() {
  const Icon = iconMap[currentConditions.icon] || Cloud;
  return (
    <div className="w-full lg:w-5xl bg-blue-400 p-4 rounded-2xl text-white">
      <div className="flex justify-between">
        <div>
          <h1>{resolvedAddress}</h1>
          <p>{currentConditions.datetime.slice(0,5)}</p>
        </div>
        <div className="flex gap-4 items-center">
          <p>Last updated 2 min ago</p>
          <button className="border-2 rounded-full p-1 bg-blue-300 hover:bg-blue-400">
            <RefreshCcw />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <Icon className="mx-auto my-2  size-32 " />
        <h1 className="text-center text-2xl font-bold">{currentConditions.conditions}</h1>
        <div className="flex justify-center">
          <p className="font-semibold text-4xl">{Math.round(currentConditions.temp)}</p>
          <p>°c</p>
        </div>
      </div>
    </div>
  );
}

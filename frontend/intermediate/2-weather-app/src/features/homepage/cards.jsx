import mockWeather from "../../data/mockWeather";
const { currentConditions } = mockWeather;
import { Wind  , CloudRain , Droplet} from "lucide-react";

export function Cards() {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex justify-around items-center gap-4 w-1/3 border-2 p-2 rounded-2xl border-neutral-400">
        <div>
          <Wind />
        </div>
        <div>
          <p>Wind speed</p>
          <p>{currentConditions.windspeed}</p>
        </div>
      </div>
      <div className="flex justify-around items-center gap-4 w-1/3 border-2 p-2 rounded-2xl border-neutral-400">
        <div>
          <CloudRain />
        </div>
        <div>
          <p>Chance of Rain</p>
          <p>{currentConditions.precipprob}</p>
        </div>
      </div>
      <div className="flex justify-around items-center gap-4 w-1/3 border-2 p-2 rounded-2xl border-neutral-400">
        <div>
          <Droplet />
        </div>
        <div>
          <p>Humudity</p>
          <p>{currentConditions.humidity}</p>
        </div>
      </div>
    </div>
  );
}

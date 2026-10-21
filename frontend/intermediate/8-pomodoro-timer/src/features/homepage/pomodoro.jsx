import { useState } from "react";
import { Display } from "./display";
function Pomodoro({ Pomodoro, shortbreak, longbreak }) {
  const [taptime, setTaptime] = useState(Pomodoro);
  return (
    <div className=" w-lg p-6 flex flex-col items-center gap-4 self-start mt-6 rounded-md bg-neutral-100">
      <div className="flex gap-2">
        <button
          className="bg-gray-300 p-1 rounded-md hover:bg-gray-400"
          onClick={() => setTaptime(Pomodoro)}
        >
          Pomodoro
        </button>
        <button
          className="bg-gray-300 p-1 rounded-md hover:bg-gray-400"
          onClick={() => setTaptime(shortbreak)}
        >
          Short Break
        </button>
        <button
          className="bg-gray-300 p-1 rounded-md hover:bg-gray-400"
          onClick={() => setTaptime(longbreak)}
        >
          Long Break
        </button>
      </div>
      <Display key={taptime} selectedtaptime={taptime} />
    </div>
  );
}
export default Pomodoro;

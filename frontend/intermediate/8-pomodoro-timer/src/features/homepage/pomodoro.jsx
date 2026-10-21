import { useState } from "react";
import useCountdown from "./countdown";
function Pomodoro({ Pomodoro, shortbreak, longbreak }) {
  const [taptime, setTaptime] = useState(Pomodoro);
  const { secondsLeft, isRunning, start, pause, reset, setTime } = useCountdown(
    taptime * 60,
  );

  // function tapset({ tap }) {
  //   setTaptime(tap);
  //   setTime(tap);
  // }

  


  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className=" w-lg p-6 flex flex-col items-center gap-4 self-start mt-6 rounded-md bg-neutral-100">
      <div className="flex gap-2">
        <button
          className="bg-gray-300 p-1 rounded-md hover:bg-gray-400"
          onClick={() => setTime(Pomodoro)}
        >
          Pomodoro
        </button>
        <button
          className="bg-gray-300 p-1 rounded-md hover:bg-gray-400"
          onClick={() => setTime(shortbreak)}
        >
          Short Break
        </button>
        <button
          className="bg-gray-300 p-1 rounded-md hover:bg-gray-400"
          onClick={() => setTime(longbreak)}
        >
          Long Break
        </button>
      </div>
      <div className=" flex justify-center text-8xl p-4">
        <h1>
          {minutes}:{seconds}
        </h1>
      </div>
      <div>
        <button
          onClick={isRunning ? pause : start}
          className="text-2xl p-2 px-6 rounded-md bg-gray-300 hover:bg-gray-400"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
      <div>
        <button
          onClick={reset}
          className="text-2xl p-2 px-6 rounded-md bg-gray-300 hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Pomodoro;

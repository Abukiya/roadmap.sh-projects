import useCountdown from "./countdown";
export function Display({ selectedtaptime }) {
  const { secondsLeft, isRunning, start, pause, reset } = useCountdown(
    selectedtaptime * 60,
  );
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  return (
    <div className="flex flex-col gap-2">
      <div className=" flex justify-center text-8xl p-4">
        <h1>
          {minutes}:{seconds}
        </h1>
      </div>
      <div className="self-center">
        <button
          onClick={isRunning ? pause : start}
          className="text-2xl p-2 px-6 rounded-md bg-gray-300 hover:bg-gray-400"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
      <div className="self-center">
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

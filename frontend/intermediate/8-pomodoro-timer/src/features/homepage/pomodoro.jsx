function Pomodoro() {
  return (
    <div className=" w-lg p-6 flex flex-col items-center gap-4 self-start mt-6 rounded-md bg-neutral-100">
      <div className="flex gap-2">
        <button className="bg-gray-300 p-1 rounded-md hover:bg-gray-400">
          Pomodoro
        </button>
        <button className="bg-gray-300 p-1 rounded-md hover:bg-gray-400">
          Short Break
        </button>
        <button className="bg-gray-300 p-1 rounded-md hover:bg-gray-400">
          Long Break
        </button>
      </div>
      <div className=" flex justify-center text-8xl p-4">
        <h1>25:00</h1>
      </div>
      <div>
        <button className="text-2xl p-2 px-6 rounded-md bg-gray-300 hover:bg-gray-400">
          Start
        </button>
      </div>
    </div>
  );
}
export default Pomodoro;

import { ClockCheck, Settings } from "lucide-react";
export function Header() {
  return (
    <header className="h-20 flex justify-center">
      <div className=" flex w-lg justify-between items-center  self-center p-2 border-b border-gray-800">
        <div className="flex gap-2 item-center">
          <ClockCheck size={22} className="self-center" />
          <h1 className="text-2xl self-center">Pomodoro</h1>
        </div>
        <div className="self-center">
          <button className="flex gap-1 p-1 rounded-md bg-gray-300 hover:bg-gray-400">
            <Settings />
            {/* <p>setting</p> */}
          </button>
        </div>
      </div>
    </header>
  );
}

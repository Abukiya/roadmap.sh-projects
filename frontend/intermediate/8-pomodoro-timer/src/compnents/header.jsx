import { ClockCheck, Settings } from "lucide-react";
export function Header() {
  return (
    <header className="h-20 flex justify-center ">
      <div className=" flex w-lg justify-between items-center">
        <div className="flex gap-1 item-center justify-center  ">
          <ClockCheck size={20} className="self-center" />
          <h1 className="text-xl self-center">Pomodoro</h1>
        </div>
        <div>
          <button className="flex gap-1 border p-1 rounded-md bg-gray-300 hover:bg-gray-400">
            <Settings />
            <p>setting</p>
          </button>
        </div>
      </div>
    </header>
  );
}

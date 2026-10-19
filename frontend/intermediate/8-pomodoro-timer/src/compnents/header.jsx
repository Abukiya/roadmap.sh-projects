import { useNavigate } from "react-router";
import { ClockCheck, Settings } from "lucide-react";
export function Header() {
  const navigate = useNavigate();
  return (
    <header className="h-20 flex justify-center">
      <div className=" flex w-lg justify-between items-center  self-center p-2 border-b border-gray-300">
        <div className="flex gap-2 item-center">
          <ClockCheck size={22} className="self-center" />
          <h1 className="text-2xl self-center">Pomodoro</h1>
        </div>
        <div className="self-center">
          <button
            className="flex gap-1 p-1 rounded-md bg-gray-300 hover:bg-gray-400"
            onClick={()=>navigate("/setting")}
          >
            <Settings />
          </button>
        </div>
      </div>
    </header>
  );
}

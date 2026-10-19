import { Timer, X } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

function Setting({
  pomodoro,
  setpomodoro,
  shortbreak,
  setShortbreack,
  longbreak,
  setLongbreak,
}) {
  const [pomodoroinput, setPomodoroinput] = useState(pomodoro);
  const [shortbreakinput, setShortbreackinput] = useState(shortbreak);
  const [longbreakinput, setLongbreakinput] = useState(longbreak);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    alert("working");
    setpomodoro(pomodoroinput);
    setShortbreack(shortbreakinput);
    setLongbreak(longbreakinput);
  }
  return (
    <div className=" w-lg p-4 mt-6 rounded-md bg-neutral-100 gap-2 flex flex-col absolute  top-20">
      <div className="flex justify-center p-1 border-gray-300  border-b relative">
        <h1 className="text-xl">Setting</h1>
        <button
          className="absolute  right-2 text-gray-500 hover:text-gray-800"
          onClick={() => navigate("/")}
        >
          <X />
        </button>
      </div>
      <div className="flex flex-col gpp-1 pl-7 ">
        <div className="flex gap-2  p-1">
          <Timer />
          <p>Timer</p>
        </div>
        <p className="text-gray-500 p-1">Time(minutes)</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex  flex-col gap-2 self-center"
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 p-2 w-1/3">
            <label htmlFor="pomodoro" className="text-gray-500">
              Pomodoro:
            </label>
            <input
              type="number"
              id="pomodoro"
              name="pomodoro"
              value={pomodoroinput}
              onChange={(e) => setPomodoroinput(e.target.value)}
              className="outline-none bg-gray-300 border-gray-800 rounded-md p-1  text-gray-500 focus:text-gray-800 w-30"
            />
          </div>
          <div className="flex flex-col gap-1 p-2 w-1/3 ">
            <label htmlfor="shortbreak" className="text-gray-500">
              Short Break:
            </label>
            <input
              type="number"
              name="shortbreak"
              id="sortbreak"
              value={shortbreakinput}
              onChange={(e) => setShortbreackinput(e.target.value)}
              className="outline-none bg-gray-300 border-gray-800 rounded-md p-1  text-gray-500 focus:text-gray-800 w-30"
            />
          </div>
          <div className="flex flex-col gap-1 p-2 w-1/3">
            <label htmlFor="longbreak" className="text-gray-500">
              Long break:
            </label>
            <input
              type="number"
              value={longbreakinput}
              onChange={(e) => setLongbreakinput(e.target.value)}
              name="longbreak"
              id="longbreak"
              className="outline-none bg-gray-300 border-gray-800 rounded-md  p-1 text-gray-500 focus:text-gray-800 w-30"
            />
          </div>
        </div>
        <div className="self-center p-2  bg-gray-300 hover:bg-gray-400 rounded-md px-4">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Setting;

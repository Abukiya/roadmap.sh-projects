import Card from "./components/card";
import { Buttons } from "./components/buttons";
import flashcards from "./config/flashcards";

import { useState } from "react";

export default function App() {
  const [answer, setanswer] = useState(false);
  const [id, setid] = useState(1);
  const widthMap = {
    1: "w-1/10",
    2: "w-2/10",
    3: "w-3/10",
    4: "w-4/10",
    5: "w-5/10",
    6: "w-6/10",
    7: "w-7/10",
    8: "w-8/10",
    9: "w-9/10",
    10: "w-10/10",
  };

  const display = flashcards.filter((person) => person.id === id);
  return (
    <div className="flex justify-center items-center h-screen flex-col p-15 gap-1">
      <div className=" w-full md:max-w-xl p-1 border-2 rounded-lg flex justify-between relative">
        <div
          className={`bg-gray-200 flex justify-between rounded-lg p-3 ${widthMap[id]}`}
        >
          <p>{id * 10}%</p>
        </div>
        <p className="flex justify-center items-center p-1 absolute right-3 top-3">
          {id} of 10
        </p>
      </div>
      <div className="flex flex-col w-full border-2 justify-center items-center md:max-w-xl p-2 rounded-lg min-h-96">
        {display.map((pal) => {
          return <Card Card={pal} answer={answer} />;
        })}
        <Buttons answer={answer} setanswer={setanswer} id={id} setid={setid} />
      </div>
    </div>
  );
}

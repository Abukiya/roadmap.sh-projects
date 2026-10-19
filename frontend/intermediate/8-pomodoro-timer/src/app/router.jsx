import { Routes, Route } from "react-router";
import { Layout } from "../compnents/layout";
import Pomodoro from "../features/homepage/pomodoro";
import Setting from "../features/setting/setting";
import { useState } from "react";

export function Approuter() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortbreak, setSortbreak] = useState(5);
  const [longbreak, setLongbreak] = useState(15);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Pomodoro Pomodoro={pomodoro} shortbreak={shortbreak} longbreak={longbreak} />} />
        <Route path="/setting" element={<Setting pomodoro={pomodoro} shortbreak={shortbreak} longbreak={longbreak} setpomodoro={setPomodoro} setShortbreack={setSortbreak} setLongbreak={setLongbreak}/>} />
      </Route>
    </Routes>
  );
}

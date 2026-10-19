import { Navigate, Routes, Route } from "react-router";
import { Layout } from "../compnents/layout";

import Homepage from "../features/homepage/homepage";

export function Approuter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

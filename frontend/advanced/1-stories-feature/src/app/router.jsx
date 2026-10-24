import { Routes, Route } from "react-router";
import { Layout } from "../compnents/layout";
import { Storycirclecard } from "../features/stories/components/storycirclecard";
import { Storylist } from "../features/stories/components/storylist";
import { Storybar } from "../features/stories/components/storybar";
export function Approuter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Storybar />} />
      </Route>
    </Routes>
  );
}

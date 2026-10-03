import { Routes, Route } from "react-router";
import { Layout } from "../components/layout";
import { Homepage } from "../features/homepage/homepage";
import { Prevnext } from "../features/prev-n-next/prev-n-next";
import { ErrorBoundary } from "../components/error-boundary";
export function Approuter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/prevnext"
          element={
            <ErrorBoundary>
              <Prevnext />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

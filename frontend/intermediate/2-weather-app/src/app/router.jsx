import { Routes, Route } from "react-router";
import { Layout } from "../components/layout";
import { Homepage } from "../features/homepage/homepage";
import HourlyPage from "../features/prev-n-next/Hourlypage";
import { ErrorBoundary } from "../components/error-boundary";
export function Approuter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/hours/:range"
          element={
            <ErrorBoundary>
              <HourlyPage />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

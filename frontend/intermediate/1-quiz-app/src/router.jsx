import { Routes, Route } from "react-router";
import { Layout } from "./components/layout";
import { Start } from "./components/start";
import Result from "./components/result";
import { Questions } from "./components/question";
import { ErrorBoundary } from "./components/error-boundary";
export function Approuter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Start />} />
        <Route
          path="/question"
          element={
            <ErrorBoundary>
              <Questions />
            </ErrorBoundary>
          }
        />
        <Route
          path="/result"
          element={
            <ErrorBoundary>
              <Result />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

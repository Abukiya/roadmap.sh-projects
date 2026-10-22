import { BrowserRouter} from "react-router";
import { Approuter } from "./router";
import { ErrorBoundary } from "../compnents/error-boundary";
function App() {
  return (
    <BrowserRouter basename="/roadmap.sh-projects">
      <ErrorBoundary>
        <Approuter />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

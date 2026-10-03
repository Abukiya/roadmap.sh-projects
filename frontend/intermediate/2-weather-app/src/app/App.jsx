import { BrowserRouter} from "react-router";
import { Approuter } from "./router";
import { ErrorBoundary } from "../components/error-boundary";
function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Approuter />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

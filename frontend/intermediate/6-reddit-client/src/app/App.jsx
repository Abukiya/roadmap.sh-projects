import { BrowserRouter } from 'react-router';
import { ErrorBoundary } from '../components/error-boundary';
import { AppProvider } from './provider';
import { AppRouter } from './router';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

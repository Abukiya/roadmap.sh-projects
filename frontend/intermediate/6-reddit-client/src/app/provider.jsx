import { LanesProvider } from '../features/lanes/stores/lanes-provider';

/**
 * Application-wide providers. Grew from here as global state adds up
 * (theming, notifications, data libraries, ...).
 */
export function AppProvider({ children }) {
  return <LanesProvider>{children}</LanesProvider>;
}

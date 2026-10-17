import { useContext } from 'react';
import { LanesContext } from '../stores/lanes-context';

export function useLanes() {
  const context = useContext(LanesContext);
  if (context === null) {
    throw new Error('useLanes must be used within a <LanesProvider>.');
  }
  return context;
}

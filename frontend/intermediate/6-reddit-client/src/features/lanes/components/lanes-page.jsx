import { useLanes } from '../hooks/use-lanes';
import { LanesBoard } from './lanes-board';
import { Welcome } from './welcome';

export function LanesPage() {
  const { lanes } = useLanes();
  return lanes.length === 0 ? <Welcome /> : <LanesBoard />;
}

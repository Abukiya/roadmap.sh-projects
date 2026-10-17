import { createContext } from 'react';

/**
 * Shape: {
 *   lanes: [{ id, name, sort }],
 *   addLane(name) -> boolean,
 *   removeLane(id),
 *   setLaneSort(id, sort),
 * }
 */
export const LanesContext = createContext(null);

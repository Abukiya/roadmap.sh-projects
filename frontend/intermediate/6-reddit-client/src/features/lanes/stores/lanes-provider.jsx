import { useCallback, useMemo } from 'react';
import { SORT_OPTIONS, STORAGE_KEYS } from '../../../config/app-config';
import { useLocalStorage } from '../../../hooks/use-local-storage';
import {
  isValidSubredditName,
  normalizeSubredditName,
} from '../../../utils/validate-subreddit';
import { LanesContext } from './lanes-context';

const EMPTY_LANES = [];
const SORT_VALUES = SORT_OPTIONS.map((option) => option.value);

function createLaneId() {
  return crypto.randomUUID();
}

/**
 * localStorage may contain stale or hand-edited data. Re-validate every
 * entry on read so the board only ever renders well-formed lanes.
 */
function sanitizeLanes(value) {
  if (!Array.isArray(value)) return EMPTY_LANES;

  const seen = new Set();
  const lanes = [];

  for (const entry of value) {
    if (!entry || typeof entry !== 'object') continue;
    const name = normalizeSubredditName(String(entry.name ?? ''));
    if (!isValidSubredditName(name) || seen.has(name)) continue;
    seen.add(name);
    lanes.push({
      id: typeof entry.id === 'string' && entry.id ? entry.id : createLaneId(),
      name,
      sort: SORT_VALUES.includes(entry.sort) ? entry.sort : 'hot',
    });
  }

  return lanes;
}

export function LanesProvider({ children }) {
  const [storedLanes, setStoredLanes] = useLocalStorage(
    STORAGE_KEYS.lanes,
    EMPTY_LANES,
  );
  const lanes = useMemo(() => sanitizeLanes(storedLanes), [storedLanes]);

  const addLane = useCallback(
    (rawName) => {
      const name = normalizeSubredditName(rawName);
      if (!isValidSubredditName(name)) return false;
      if (lanes.some((lane) => lane.name === name)) return false;

      setStoredLanes((prev) => {
        const current = sanitizeLanes(prev);
        if (current.some((lane) => lane.name === name)) return prev;
        return [...current, { id: createLaneId(), name, sort: 'hot' }];
      });
      return true;
    },
    [lanes, setStoredLanes],
  );

  const removeLane = useCallback(
    (id) => {
      setStoredLanes((prev) =>
        sanitizeLanes(prev).filter((lane) => lane.id !== id),
      );
    },
    [setStoredLanes],
  );

  const setLaneSort = useCallback(
    (id, sort) => {
      if (!SORT_VALUES.includes(sort)) return;
      setStoredLanes((prev) =>
        sanitizeLanes(prev).map((lane) =>
          lane.id === id ? { ...lane, sort } : lane,
        ),
      );
    },
    [setStoredLanes],
  );

  const value = useMemo(
    () => ({ lanes, addLane, removeLane, setLaneSort }),
    [lanes, addLane, removeLane, setLaneSort],
  );

  return <LanesContext.Provider value={value}>{children}</LanesContext.Provider>;
}

import { useCallback, useState } from 'react';
import {
  getSubredditNameError,
  normalizeSubredditName,
} from '../../../utils/validate-subreddit';
import { verifySubreddit } from '../api/mock-reddit-api';
import { useLanes } from './use-lanes';

/**
 * Validates + verifies a subreddit against the (mock) Reddit API before
 * adding it as a lane. Shared by the header form, the welcome screen and
 * the suggestion chips so all add flows behave identically.
 *
 * Returns { addLaneByName(input) -> Promise<{ ok, name?, error? }>, isAdding }
 */
export function useAddLane() {
  const { lanes, addLane } = useLanes();
  const [pendingName, setPendingName] = useState(null);

  const addLaneByName = useCallback(
    async (rawInput) => {
      const inputError = getSubredditNameError(rawInput);
      if (inputError) return { ok: false, error: inputError };

      const name = normalizeSubredditName(rawInput);
      if (lanes.some((lane) => lane.name === name)) {
        return { ok: false, error: `r/${name} is already on your board.` };
      }

      setPendingName(name);
      try {
        await verifySubreddit(name);
        const added = addLane(name);
        if (!added) {
          return { ok: false, error: `r/${name} is already on your board.` };
        }
        return { ok: true, name };
      } catch (error) {
        return { ok: false, error: error?.message ?? 'Something went wrong.' };
      } finally {
        setPendingName(null);
      }
    },
    [lanes, addLane],
  );

  return {
    addLaneByName,
    isAdding: pendingName !== null,
    pendingName,
  };
}

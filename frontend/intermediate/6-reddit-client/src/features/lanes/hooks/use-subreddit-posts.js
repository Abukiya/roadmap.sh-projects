import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { fetchSubredditPosts } from '../api/mock-reddit-api';

const INITIAL_STATE = { requestKey: null, data: null, error: null };

/**
 * Fetches posts for one lane. Loading/refreshing/error are all *derived*
 * from whether the last settled request matches the current one, so the
 * effect never has to setState synchronously. Stale responses (sort
 * changed mid-flight) are dropped via a request id.
 */
export function useSubredditPosts(name, sort) {
  const [state, setState] = useState(INITIAL_STATE);
  const [reloadKey, setReloadKey] = useState(0);
  const requestIdRef = useRef(0);

  const requestKey = useMemo(
    () => `${name}|${sort}|${reloadKey}`,
    [name, sort, reloadKey],
  );

  useEffect(() => {
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    const isCurrent = () => requestIdRef.current === requestId;

    fetchSubredditPosts(name, { sort }).then(
      (data) => {
        if (!isCurrent()) return;
        setState({ requestKey, data, error: null });
      },
      (error) => {
        if (!isCurrent()) return;
        setState((prev) => ({
          requestKey,
          data: prev.data,
          error: error ?? new Error('Unknown error'),
        }));
      },
    );
  }, [name, sort, requestKey]);

  const refetch = useCallback(() => setReloadKey((key) => key + 1), []);

  const isPending = state.requestKey !== requestKey;

  return {
    posts: state.data?.posts ?? [],
    subreddit: state.data?.subreddit ?? null,
    isLoading: isPending && state.data === null,
    isRefreshing: isPending && state.data !== null,
    error: isPending ? null : state.error,
    refetch,
  };
}

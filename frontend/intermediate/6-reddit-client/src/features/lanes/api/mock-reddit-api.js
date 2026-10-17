// Mock Reddit client.
//
// Stands in for `https://www.reddit.com/r/{subreddit}.json`, which Reddit
// now blocks for anonymous JSON consumption. It mimics a real network layer:
// artificial latency, an "does this subreddit exist?" check, occasional
// network failures on post fetches, and sorted results.
//
// Swapping mock data for a real API later only means rewriting this file —
// the rest of the app consumes the promises below and never sees the source.

import { normalizeSubredditName } from '../../../utils/validate-subreddit';
import { MockNetworkError, SubredditNotFoundError } from './errors';
import { buildSubredditPosts, getSubredditRecord } from './mock-data';

const MIN_LATENCY_MS = 350;
const MAX_LATENCY_MS = 900;
// Only post fetches can "fail" (verification stays deterministic so adding
// a lane never randomly breaks). This keeps the error/retry UI reachable.
const POST_FETCH_FAILURE_RATE = 0.08;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomLatency() {
  return MIN_LATENCY_MS + Math.random() * (MAX_LATENCY_MS - MIN_LATENCY_MS);
}

function toSummary(record) {
  return {
    name: record.name,
    title: record.title,
    description: record.description,
    subscribers: record.subscribers,
    activeNow: record.activeNow,
  };
}

function sortPosts(posts, sort) {
  switch (sort) {
    case 'new':
      return [...posts].sort((a, b) => a.createdMinutesAgo - b.createdMinutesAgo);
    case 'top':
      return [...posts].sort((a, b) => b.score - a.score);
    case 'hot':
    default:
      // Mock data is authored in "hot" order already.
      return posts;
  }
}

function resolveRecord(rawName) {
  const name = normalizeSubredditName(rawName);
  const record = getSubredditRecord(name);
  if (!record) {
    throw new SubredditNotFoundError(name);
  }
  return record;
}

/**
 * Verifies a subreddit exists (used by the add-lane form before a lane
 * is created). Deterministic — never fails randomly.
 */
export async function verifySubreddit(rawName) {
  await delay(randomLatency());
  return toSummary(resolveRecord(rawName));
}

/**
 * Fetches a subreddit summary and its posts for a lane.
 */
export async function fetchSubredditPosts(rawName, { sort = 'hot' } = {}) {
  await delay(randomLatency());

  if (Math.random() < POST_FETCH_FAILURE_RATE) {
    throw new MockNetworkError();
  }

  const record = resolveRecord(rawName);
  return {
    subreddit: toSummary(record),
    posts: sortPosts(buildSubredditPosts(record), sort),
    fetchedAt: Date.now(),
  };
}

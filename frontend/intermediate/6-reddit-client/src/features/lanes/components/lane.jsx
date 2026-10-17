import { AlertCircle, RefreshCw, X } from 'lucide-react';
import { SORT_OPTIONS } from '../../../config/app-config';
import { useLanes } from '../hooks/use-lanes';
import { useSubredditPosts } from '../hooks/use-subreddit-posts';
import { formatCount } from '../utils/format';
import { LaneSkeleton } from './lane-skeleton';
import { PostCard } from './post-card';

export function Lane({ lane }) {
  const { removeLane, setLaneSort } = useLanes();
  const { posts, subreddit, isLoading, isRefreshing, error, refetch } =
    useSubredditPosts(lane.name, lane.sort);

  return (
    <section className="flex w-80 shrink-0 snap-start flex-col border border-neutral-300 bg-white">
      <header className="flex items-center gap-1.5 border-b border-neutral-300 bg-neutral-50 px-3 py-2">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-bold">r/{lane.name}</h2>
          <p className="truncate text-xs text-neutral-500">
            {subreddit
              ? `${formatCount(subreddit.subscribers)} members`
              : 'loading…'}
          </p>
        </div>

        <select
          aria-label={`Sort r/${lane.name}`}
          value={lane.sort}
          disabled={isLoading}
          onChange={(event) => setLaneSort(lane.id, event.target.value)}
          className="h-7 border border-neutral-300 bg-white px-1 text-xs focus:border-neutral-900 focus:outline-none"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          type="button"
          aria-label={`Refresh r/${lane.name}`}
          title="Refresh"
          disabled={isLoading || isRefreshing}
          onClick={refetch}
          className="rounded p-1 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 disabled:opacity-50"
        >
          <RefreshCw
            size={15}
            className={isRefreshing ? 'animate-spin' : undefined}
          />
        </button>

        <button
          type="button"
          aria-label={`Remove r/${lane.name} lane`}
          title="Remove lane"
          onClick={() => removeLane(lane.id)}
          className="rounded p-1 text-neutral-500 hover:bg-red-50 hover:text-red-600"
        >
          <X size={15} />
        </button>
      </header>

      <div className="thin-scrollbar min-h-0 flex-1 overflow-y-auto">
        {isLoading ? (
          <LaneSkeleton />
        ) : error ? (
          <LaneError error={error} onRetry={refetch} />
        ) : posts.length === 0 ? (
          <p className="px-3 py-6 text-center text-xs text-neutral-500">
            No posts in this feed right now.
          </p>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </section>
  );
}

function LaneError({ error, onRetry }) {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-8 text-center">
      <AlertCircle size={22} className="text-red-500" />
      <p className="text-xs text-neutral-700">{error.message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="border border-neutral-900 px-3 py-1 text-xs hover:bg-neutral-900 hover:text-white"
      >
        Try again
      </button>
    </div>
  );
}

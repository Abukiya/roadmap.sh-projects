import { useState } from 'react';
import { ArrowBigUp, Clock, MessageSquare } from 'lucide-react';
import { formatCount, formatTimeAgo } from '../utils/format';

export function PostCard({ post }) {
  const [upvoted, setUpvoted] = useState(false);
  const score = post.score + (upvoted ? 1 : 0);

  return (
    <article className="flex gap-3 border-b border-neutral-200 px-3 py-3.5 last:border-b-0">
      <div className="flex w-9 shrink-0 flex-col items-center gap-0.5">
        <button
          type="button"
          aria-label={upvoted ? 'Remove upvote' : 'Upvote'}
          aria-pressed={upvoted}
          onClick={() => setUpvoted((value) => !value)}
          className={`rounded p-1 transition-colors ${
            upvoted
              ? 'bg-orange-50 text-orange-600'
              : 'text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900'
          }`}
        >
          <ArrowBigUp size={18} fill={upvoted ? 'currentColor' : 'none'} />
        </button>
        <span
          className={`text-xs font-bold tabular-nums ${
            upvoted ? 'text-orange-600' : 'text-neutral-700'
          }`}
        >
          {formatCount(score)}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        {post.flair && (
          <span className="mb-1.5 inline-block border border-indigo-200 bg-indigo-50 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-indigo-700 uppercase">
            {post.flair}
          </span>
        )}
        <h3 className="text-sm leading-snug font-bold break-words text-neutral-900">
          {post.title}
        </h3>
        <p className="mt-1.5 text-xs text-neutral-500">
          by u/{post.author}
        </p>
        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <MessageSquare size={12} />
            {formatCount(post.comments)} comments
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {formatTimeAgo(post.createdMinutesAgo)}
          </span>
          <span className="text-neutral-400">
            {Math.round(post.upvoteRatio * 100)}% upvoted
          </span>
        </p>
      </div>
    </article>
  );
}

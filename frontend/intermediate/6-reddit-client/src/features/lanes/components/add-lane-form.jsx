import { useState } from 'react';
import { LoaderCircle, Plus, Search } from 'lucide-react';
import { useAddLane } from '../hooks/use-add-lane';

/**
 * Validates and adds a subreddit lane. Variants:
 * - "compact": small inline form used in the header / ghost lane slot
 * - "large": hero form used on the welcome screen
 */
export function AddLaneForm({ variant = 'compact', autoFocus = false }) {
  const { addLaneByName, isAdding } = useAddLane();
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const isLarge = variant === 'large';

  async function handleSubmit(event) {
    event.preventDefault();
    if (isAdding) return;

    setError(null);
    const result = await addLaneByName(value);
    if (result.ok) {
      setValue('');
    } else {
      setError(result.error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-1" noValidate>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-neutral-400"
            size={isLarge ? 18 : 15}
          />
          <input
            className={`w-full border border-neutral-300 bg-white pl-8 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none ${
              isLarge ? 'h-12 px-3 text-base' : 'h-9 pr-2 text-sm'
            }`}
            type="search"
            name="subreddit"
            id={`add-lane-input-${variant}`}
            aria-label="Subreddit name"
            placeholder="Add subreddit (e.g. webdev, reactjs...)"
            value={value}
            disabled={isAdding}
            autoFocus={autoFocus}
            onChange={(event) => {
              setValue(event.target.value);
              setError(null);
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isAdding}
          className={`flex items-center gap-1.5 border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60 ${
            isLarge ? 'h-12 px-4 text-sm' : 'h-9 px-3 text-sm'
          }`}
        >
          {isAdding ? (
            <LoaderCircle className="animate-spin" size={isLarge ? 18 : 15} />
          ) : (
            <Plus size={isLarge ? 18 : 15} />
          )}
          {isAdding ? 'Adding…' : 'Add Lane'}
        </button>
      </div>
      {error && (
        <p role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}

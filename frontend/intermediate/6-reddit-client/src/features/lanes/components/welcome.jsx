import { useState } from 'react';
import { useAddLane } from '../hooks/use-add-lane';
import { AddLaneForm } from './add-lane-form';

// Safe defaults — every name here exists in the mock registry.
const SUGGESTIONS = ['webdev', 'reactjs', 'javascript'];

export function Welcome() {
  const { addLaneByName, isAdding } = useAddLane();
  const [notice, setNotice] = useState(null);

  async function handleSuggestion(name) {
    setNotice(null);
    const result = await addLaneByName(name);
    if (!result.ok) {
      setNotice(result.error);
    }
    // On success the board takes over — lanes live in the global store.
  }

  return (
    <div className="flex w-full justify-center overflow-y-auto px-4 py-16">
      <div className="flex max-w-xl flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to DeckReddit</h1>
        <p className="text-neutral-600">
          Create your personalized multi-column dashboard. Monitor your
          favorite communities side by side with lanes you can sort, refresh
          and remove at will.
        </p>

        <AddLaneForm variant="large" autoFocus />

        {notice && (
          <p role="alert" className="text-sm text-red-600">
            {notice}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-neutral-500">Popular lanes:</span>
          {SUGGESTIONS.map((name) => (
            <button
              key={name}
              type="button"
              disabled={isAdding}
              onClick={() => handleSuggestion(name)}
              className="border border-neutral-300 bg-white px-2.5 py-1 font-bold hover:border-neutral-900 disabled:opacity-50"
            >
              r/{name}
            </button>
          ))}
        </div>

        <p className="text-xs text-neutral-400">
          Runs on mock data — no Reddit account or API key required.
        </p>
      </div>
    </div>
  );
}

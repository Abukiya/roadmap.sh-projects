import { Plus } from 'lucide-react';
import { useLanes } from '../hooks/use-lanes';
import { AddLaneForm } from './add-lane-form';
import { Lane } from './lane';

export function LanesBoard() {
  const { lanes } = useLanes();

  return (
    <div className="thin-scrollbar flex h-full w-full snap-x snap-mandatory gap-4 overflow-x-auto p-4">
      {lanes.map((lane) => (
        <Lane key={lane.id} lane={lane} />
      ))}

      <div className="flex w-80 shrink-0 flex-col items-center justify-center gap-3 border border-dashed border-neutral-300 p-4 text-center">
        <Plus size={20} className="text-neutral-400" />
        <p className="text-xs text-neutral-500">
          Add another subreddit to grow your board
        </p>
        <AddLaneForm variant="slot" />
      </div>
    </div>
  );
}

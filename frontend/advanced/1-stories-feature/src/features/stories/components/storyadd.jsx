import { UserRound } from 'lucide-react';
export function Storyadd({ setIsaddsheetopen }) {
  return (
    <div className="relative" onClick={() => setIsaddsheetopen(true)}>
      <div className="rounded-full bg-white p-0.75 dark:bg-zinc-600">
        <UserRound size={72} />
      </div>
      <span className="absolute bottom-0.5 right-0.5 flex size-5 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs text-white dark:border-zinc-900">
        +
      </span>
    </div>
  );
}

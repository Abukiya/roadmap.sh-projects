import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="m-auto flex flex-col items-center gap-4 px-4 text-center">
      <p className="text-6xl font-bold">404</p>
      <p className="text-neutral-600">This lane leads nowhere.</p>
      <Link
        to="/"
        className="border border-neutral-900 px-4 py-2 text-sm hover:bg-neutral-900 hover:text-white"
      >
        Back to your board
      </Link>
    </div>
  );
}

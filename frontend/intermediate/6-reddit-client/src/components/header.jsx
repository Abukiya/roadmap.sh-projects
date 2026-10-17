import { Link } from 'react-router';
import { APP_NAME } from '../config/app-config';

export function Header({ actions }) {
  return (
    <header className="flex min-h-16 shrink-0 flex-wrap items-center gap-3 border-b border-neutral-300 bg-white px-4 py-2">
      <Link to="/" className="flex shrink-0 items-center gap-2">
        <img
          src="/favicon/apple-touch-icon.png"
          className="size-8 rounded-full"
          alt=""
        />
        <span className="text-lg font-bold">{APP_NAME}</span>
      </Link>
      {actions && <div className="min-w-0 flex-1 sm:max-w-2xl">{actions}</div>}
    </header>
  );
}

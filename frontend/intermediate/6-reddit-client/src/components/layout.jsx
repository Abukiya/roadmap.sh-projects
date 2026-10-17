import { Outlet } from 'react-router';
import { Header } from './header';

export function Layout({ headerActions }) {
  return (
    <div className="flex h-dvh flex-col bg-neutral-100 font-mono">
      <Header actions={headerActions} />
      <main className="flex min-h-0 flex-1 justify-center overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

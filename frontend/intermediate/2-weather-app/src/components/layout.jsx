import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router";
export function Layout() {
  return (
    <div className="  flex flex-col h-dvh font-mono bg-neutral-100">
      <Header />
      <main className="flex justify-center items-center min-h-0 flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

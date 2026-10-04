import { Link } from "react-router";
export function Prevnnextlinks() {
  return (
    <div className="flex justify-between">
      <Link
        className="flex justify-around items-center gap-4 w-1/3 border-2 p-2 rounded-2xl border-neutral-400 cursor-pointer"
        to="/hours/previous"
      >
        Previous 24h
      </Link>
      <Link
        className="flex justify-around items-center gap-4 w-1/3 border-2 p-2 rounded-2xl border-neutral-400 cursor-pointer"
        to="/hours/next"
      >
        Next 24h
      </Link>
    </div>
  );
}

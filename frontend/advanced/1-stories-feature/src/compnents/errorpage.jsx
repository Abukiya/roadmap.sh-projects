import { Link } from "react-router";

export function ErrorPage({ error, resetErrorBoundary }) {
  return (
    <div className="w-full md:max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
      <h1 className="text-2xl font-semibold text-red-600">Something went wrong</h1>
      <p className="mt-3 text-neutral-700">
        {error?.message || "An unexpected error occurred while rendering this page."}
      </p>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={resetErrorBoundary}
          className="rounded-xl bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
        >
          Try again
        </button>
        <Link
          to="/"
          onClick={resetErrorBoundary}
          className="rounded-xl bg-neutral-200 px-5 py-2 text-neutral-900 hover:bg-neutral-300"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
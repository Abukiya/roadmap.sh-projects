import { useLocation, useNavigate } from "react-router";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No results yet.</p>;

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-sm">
      <h1 className="text-4xl font-bold text-slate-900">
        {state.score}/{state.total}
      </h1>
      <div className="flex gap-2">
        <button
          onClick={() => navigate("/question")}
          className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Retry Quiz
        </button>
        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

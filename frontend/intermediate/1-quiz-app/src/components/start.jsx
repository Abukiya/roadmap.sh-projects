import { Link } from "react-router";
export function Start() {
  return (
    <div className="w-full  md:max-w-2xl p bg-white shadow-xl p-8 rounded-lg flex flex-col gap-8 ">
      <div className="rounded-lg p-1 px-2 bg-blue-500 self-start">
        JavaScript Quiz
      </div>
      <h1 className="text-3xl">Test Your Knowledge</h1>
      <p className="text-neutral-600">
        Challenge yourself with 10 questions covering core concepts of
        JavaScript, from basic syntax to advanced patterns.
      </p>
      <div className="flex gap-4">
        <p className="rounded-lg bg-neutral-200 p-1 px-2 text-sm self-center">
          10 Questions
        </p>
        <div className="rounded-lg bg-neutral-200 p-1 px-2 text-sm self-center">
          Multiple Choice
        </div>
        <div className="rounded-lg bg-neutral-200 p-1 px-2 text-sm self-center">
          60s per Q
        </div>
      </div>
      <Link to={"/question"}>
        <button className="bg-blue-500 text-xl w-full text-start p-2 rounded-lg">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}


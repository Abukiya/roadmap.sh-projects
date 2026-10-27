import { Link } from "react-router";
export function Storycirclecard({ story }) {
  return (
    <Link
      to={`/stories/${story.id}`}
      className={`rounded-full p-0.75 ${
        story.viewed
          ? "bg-zinc-300 dark:bg-zinc-700"
          : "bg-linear-to-tr from-amber-400 via-pink-500 to-purple-600"
      }`}
    >
      <div className="rounded-full bg-white p-0.75 dark:bg-zinc-900">
        <img
          src={story.image}
          alt=""
          className="size-16 rounded-full object-cover"
        />
      </div>
    </Link>
  );
}

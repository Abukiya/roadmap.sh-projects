export function Storycirclecard({ story }) {
  return (
    <button
      id={story.id}
      class="rounded-full p-0.75 bg-linear-to-tr from-amber-400 via-pink-500 to-purple-600"
    >
      <div class="rounded-full bg-white p-0.75 dark:bg-zinc-900">
        <img
          src={story.image}
          alt="Story"
          class="size-16 rounded-full object-cover"
        />
      </div>
    </button>
  );
}

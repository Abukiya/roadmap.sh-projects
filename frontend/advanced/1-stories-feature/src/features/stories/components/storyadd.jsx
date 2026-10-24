export function Storyadd() {
  return (
    <div class="relative">
      <div className="rounded-full bg-white p-0.75 dark:bg-zinc-900">
        <img
          src="..."
          alt=""
          className="size-17 rounded-full object-cover"
        />
      </div>
      <span class="absolute bottom-0.5 right-0.5 flex size-5 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs text-white dark:border-zinc-900">
        +
      </span>
    </div>
  );
}

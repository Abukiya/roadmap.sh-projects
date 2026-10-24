export function Emptystory() {
  return (
    <div className="flex mt-40 items-center flex-col flex-1">
      <div className="flex flex-col gap-1">
        <button className="bg-neutral-200 border border-dashed size-16 rounded-full self-center">+</button>
        <h1 className="p-2">No Stories Yet</h1>
        <button className="bg-linear-to-tr from-amber-400 via-pink-500 to-purple-600 rounded-xl p-2">Add First story</button>
      </div>
    </div>
  );
}

import { AddStory } from "./addstorybutton";
export function Addstorysheet({ setIsaddsheetopen }) {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsaddsheetopen(false);
      }}
    >
      <div className="flex flex-col bg-white p-4 0 justify-center items-center gap-3 rounded-2xl">
        <h1 className="text-xl font-bold">Add to your story</h1>
        <AddStory />
        <p className="text-xs text-gray-500">
          Max 1080x1920px. Disappears after 24 hours.
        </p>
        <button className="bg-linear-to-tr  from-amber-400 via-pink-500 to-purple-600 w-full rounded-2xl p-2 px-4">
          Post Story
        </button>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setIsaddsheetopen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { AddStory } from "./addstorybutton";
export function Addstorysheet({ setIsaddsheetopen, setStories }) {
  const [preview, setPreview] = useState(null); // the base64 string, or null
  const handleAdd = () => {
    if (!preview) return;

    setStories((prev) => {
      const newStory = {
        id: crypto.randomUUID(),
        image: preview,
        createdAt: Date.now(),
        viewed: false,
      };
      const nextStories = [...prev, newStory];
      localStorage.setItem("lstories", JSON.stringify(nextStories));
      return nextStories;
    });
    setIsaddsheetopen(false);
  };
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsaddsheetopen(false);
      }}
    >
      <div className="flex flex-col bg-white p-4 0 justify-center items-center gap-3 rounded-2xl">
        <h1 className="text-xl font-bold">Add to your story</h1>
        <AddStory preview={preview} setPreview={setPreview} />
        <p className="text-xs text-gray-500">
          Max 1080x1920px. Disappears after 24 hours.
        </p>
        <button
          className="bg-linear-to-tr from-amber-400 via-pink-500 to-purple-600 w-full rounded-2xl p-2 px-4 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleAdd}
          disabled={!preview}
        >
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

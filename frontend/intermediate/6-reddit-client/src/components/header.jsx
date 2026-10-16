import { Plus } from "lucide-react";
export function Header() {
  return (
    <header className="h-24 flex justify-around">
      <div className="flex gap-2 self-center">
        <img
          src="public/favicon/apple-touch-icon.png"
          className="size-10 rounded-full"
          alt=""
        />
        <h1 className=" self-center text-xl">DeckReddit</h1>
      </div>
      <div className="self-center">
        <form className="flex gap-2">
          <input
            className="bg-gray-200 p-1"
            type="search"
            name=""
            id="subreddit"
            placeholder="Add subreddit (e.g. webdev, reactjs..)"
          />

          <div>
            <button type="submit" className="flex gap-1 border-2 p-1">
              <Plus />
              <p>Add Lane</p>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

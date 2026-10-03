import { Search } from "lucide-react";
export function Search_input() {
  return (
    <div className="relative">
      <input
        className="border-2 p-2 pl-8 rounded-2xl w-full "
        type="text"
        placeholder="search for a city..."
      />
      <div className=" absolute top-0 flex items-center p-2 h-full">
        <Search className="w-6 h-6" />
      </div>
      <button className="absolute right-1 h-9 p-1 bg-blue-400 top-1  rounded-2xl">
        search
      </button>
    </div>
  );
}

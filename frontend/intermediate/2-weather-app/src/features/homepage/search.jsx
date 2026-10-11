import { Search } from "lucide-react";
import { useState } from "react";
export function Search_input({onSearch}) {
  const [input, setInput] = useState("");

  function handlesearch(){
    onSearch(input)
  }

  return (
    <div className="relative">
      <input
        className="border-2 p-2 pl-8 rounded-2xl w-full "
        type="text"
        placeholder="search for a city..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div className=" absolute top-0 flex items-center p-2 h-full">
        <Search className="w-6 h-6" />
      </div>
      <button className="absolute right-1 h-9 p-1 bg-blue-400 top-1  rounded-2xl" onClick={handlesearch}>
        search
      </button>
    </div>
  );
}

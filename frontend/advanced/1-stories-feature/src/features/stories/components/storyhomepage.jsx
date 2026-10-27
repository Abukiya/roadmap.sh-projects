import { Storybar } from "./storybar";
import { Emptystory } from "./emptystory";
import { Addstorysheet } from "./addtostorysheet";
import { useState } from "react";
export function Homepage({stories,setStories}) {
  const [isaddsheetopen, setIsaddsheetopen] = useState(false);
  return (
    <div className="flex flex-col  bg-fuchsia-400 w-full max-w-lg">
      <Storybar
        stories={stories}
        setIsaddsheetopen={setIsaddsheetopen}
      />
      <Emptystory setIsaddsheetopen={setIsaddsheetopen} />
      {isaddsheetopen && (
        <Addstorysheet
          setStories={setStories}
          setIsaddsheetopen={setIsaddsheetopen}
        />
      )}
    </div>
  );
}

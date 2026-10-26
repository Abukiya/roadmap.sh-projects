import { Storybar } from "./storybar";
import { Emptystory } from "./emptystory";
import { Addstorysheet } from "./addtostorysheet";
import { useState } from "react";
export function Homepage() {
  const [isaddsheetopen, setIsaddsheetopen] = useState(false);
  return (
    <div className="flex flex-col max-w-lg">
      <Storybar setIsaddsheetopen={setIsaddsheetopen}/>
      <Emptystory setIsaddsheetopen={setIsaddsheetopen} />
      {isaddsheetopen && <Addstorysheet setIsaddsheetopen={setIsaddsheetopen} />}
      {/* <Addstorysheet /> */}
    </div>
  );
}

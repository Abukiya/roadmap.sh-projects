import { Storyadd } from "./storyadd";
import { Storylist } from "./storylist";
export function Storybar({setIsaddsheetopen, stories}) {
  return (
    <div className="flex gap-4 overflow-x-auto px-7 py-3 h-min items-start bg-amber-400 self-start w-full">
      <Storyadd setIsaddsheetopen={setIsaddsheetopen} />
      <Storylist stories={stories} />
    </div>
  );
}

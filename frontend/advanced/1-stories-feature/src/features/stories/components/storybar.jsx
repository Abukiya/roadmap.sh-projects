import { Storyadd } from "./storyadd";
import { Storylist } from "./storylist";
export function Storybar({setIsaddsheetopen}) {
  return (
    <div className="flex gap-4 overflow-x-auto px-7 py-3 h-min">
      <Storyadd setIsaddsheetopen={setIsaddsheetopen} />
      <Storylist />
    </div>
  );
}

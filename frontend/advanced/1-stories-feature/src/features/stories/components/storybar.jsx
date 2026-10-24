import { Storyadd } from "./storyadd";
import { Storylist } from "./storylist";
export function Storybar() {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-3 h-min">
      <Storyadd />
      <Storylist />
    </div>
  );
}

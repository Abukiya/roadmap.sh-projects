import { Storybar } from "./storybar";
import { Emptystory } from "./emptystory";
export function Homepage() {
  return (
    <div className="flex flex-col">
      <Storybar />
      <Emptystory />
    </div>
  );
}

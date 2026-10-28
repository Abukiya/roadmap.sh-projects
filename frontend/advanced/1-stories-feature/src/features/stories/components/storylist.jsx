import { Storycirclecard } from "./storycirclecard";
export function Storylist({ stories }) {
  return (
    <div className="flex gap-4 overflow-x-auto h-min">
      {stories.map((story) => {
        return <Storycirclecard key={story.id} story={story} />;
      })}
    </div>
  );
}

import { Storycirclecard } from "./storycirclecard";
const stories = [
  { id: 1, image: "/a.jpg", viewed: false },
  { id: 2, image: "/b.jpg", viewed: true },
  { id: 3, image: "/a.jpg", viewed: false },
  { id: 4, image: "/b.jpg", viewed: true },
];
export function Storylist() {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-3 h-min">
      {stories.map((story) => {
        return <Storycirclecard story={story} />;
      })}
    </div>
  );
}

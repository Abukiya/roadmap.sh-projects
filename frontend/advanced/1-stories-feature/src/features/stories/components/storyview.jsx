import { ChevronLeft, ChevronRight } from "lucide-react";
export function Storyview() {
  return (
    <div className="fixed text-white inset-0 bg-black/30 flex justify-center items-center">
      <div
        className="flex gap-4"
      >
        <button>
          <ChevronLeft size={32}/>
        </button>
        <div className="max-w-lg">
          <img src="/public/image3.png" alt="image" />
        </div>
        <button>
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

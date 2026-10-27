import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
export function Storyview({ stories, setStories }) {
  const { id } = useParams(); // the ":id" from the URL
  const navigate = useNavigate();

  const index = stories.findIndex((s) => s.id === id);
  const story = stories[index];
  const storyId = story?.id;
  const storyViewed = story?.viewed;

  useEffect(() => {
    if (!storyId || storyViewed) return;

    setStories((currentStories) => {
      const nextStories = currentStories.map((currentStory) =>
        currentStory.id === storyId
          ? { ...currentStory, viewed: true }
          : currentStory,
      );
      localStorage.setItem("lstories", JSON.stringify(nextStories));
      return nextStories;
    });
  }, [setStories, storyId, storyViewed]);

  if (index === -1) return <Navigate to="/" replace />; // expired or invalid link

  const hasPrevious = index > 0;
  const hasNext = index < stories.length - 1;

  const navigateToStory = (storyIndex) => {
    navigate(`/stories/${stories[storyIndex].id}`);
  };

  return (
    <div className="fixed text-white inset-0 bg-black/30 flex justify-center items-center"
          onClick={(e) => {
        if (e.target === e.currentTarget) navigate("/");
      }}>
      <div className="flex gap-4">
        <button
          type="button"
          aria-label="Previous story"
          disabled={!hasPrevious}
          onClick={() => navigateToStory(index - 1)}
          className="disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={32} />
        </button>
        <div className="max-w-lg">
          <img src={story.image} alt="image" />
        </div>
        <button
          type="button"
          aria-label="Next story"
          disabled={!hasNext}
          onClick={() => navigateToStory(index + 1)}
          className="disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

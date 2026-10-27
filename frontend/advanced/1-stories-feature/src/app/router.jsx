import { Routes, Route } from "react-router";
import { Layout } from "../compnents/layout";
import { Homepage } from "../features/stories/components/storyhomepage";
import { Storyview } from "../features/stories/components/storyview";
import { useState } from "react";

const STORY_EXPIRATION_MS = 24 * 60 * 60 * 1000;

function loadActiveStories() {
  try {
    const saved = JSON.parse(localStorage.getItem("lstories"));
    if (!Array.isArray(saved)) return [];

    const now = Date.now();
    const activeStories = saved.filter((story) => {
      if (!story || !Number.isFinite(story.createdAt)) return true;
      return now - story.createdAt < STORY_EXPIRATION_MS;
    });

    if (activeStories.length !== saved.length) {
      localStorage.setItem("lstories", JSON.stringify(activeStories));
    }

    return activeStories;
  } catch {
    return [];
  }
}

export function Approuter() {
  const [stories, setStories] = useState(loadActiveStories);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage setStories={setStories} stories={stories} />} />
        <Route
          path="/stories/:id"
          element={<Storyview stories={stories} setStories={setStories} />}
        />
      </Route>
    </Routes>
  );
}

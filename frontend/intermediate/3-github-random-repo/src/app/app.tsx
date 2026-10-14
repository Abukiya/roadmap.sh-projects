import { RepoFinder } from "@/features/random-repo/components/repo-finder"
import { TopBar } from "./top-bar"

export function App() {
  return (
    <div className="flex min-h-svh flex-col bg-white font-sans text-ink">
      <TopBar />
      <RepoFinder />
    </div>
  )
}

export default App

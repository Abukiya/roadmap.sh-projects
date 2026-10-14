import type { LanguageOption } from "../types"

export const LANGUAGES: LanguageOption[] = [
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "java", label: "Java" },
  { value: "c++", label: "C++" },
  { value: "c#", label: "C#" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
]

export const DEFAULT_LANGUAGE = "typescript"

/** Languages offered as one-click picks in the empty state. */
export const POPULAR_LANGUAGE_VALUES = [
  "javascript",
  "python",
  "go",
  "rust",
] as const

/** Repositories per request — matches the footer request line in the design. */
export const PER_PAGE = 30

/** The GitHub search API only serves the first 1000 results. */
export const MAX_RESULTS = 1000

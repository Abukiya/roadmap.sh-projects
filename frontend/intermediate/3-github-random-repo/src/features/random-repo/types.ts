export type LanguageOption = {
  /** Query slug sent to the GitHub search API, e.g. "typescript" */
  value: string
  label: string
}

export type Repository = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  updated_at: string
  license: { spdx_id: string | null } | null
  owner: { login: string }
}

export type SearchResult = {
  /** `null` when GitHub returns no repositories for the language */
  repo: Repository | null
  totalCount: number
  /** Human-readable path of the request that dispensed the result */
  requestUrl: string
}

import { useMutation } from "@tanstack/react-query"
import { ApiError, api, buildUrl } from "@/lib/api-client"
import type { MutationConfig } from "@/lib/react-query"
import type { SearchResult } from "../types"
import { MAX_RESULTS, PER_PAGE } from "../utils/constants"
import { pickRandom, randomInteger } from "../utils/format"

type SearchApiResponse = {
  total_count: number
  items: NonNullable<SearchResult["repo"]>[]
}

const SEARCH_PATH = "/search/repositories"

function toDisplayUrl(params: Record<string, string | number>): string {
  const url = buildUrl(SEARCH_PATH, params)
  return `${url.pathname}${url.search}`
}

/**
 * Pulls one random repository for a language by rolling a random page of the
 * search results and then a random item within it.
 *
 * Returns `repo: null` when the language matches no repositories, which the
 * feature renders as its empty state.
 */
export async function getRandomRepository(
  language: string
): Promise<SearchResult> {
  const query = `language:${language}`
  const countRequestUrl = toDisplayUrl({ q: query, per_page: 1 })

  let total_count: number

  try {
    const response = await api.get<SearchApiResponse>(SEARCH_PATH, {
      params: { q: query, per_page: 1 },
    })
    total_count = response.total_count
  } catch (error) {
    // GitHub answers 422 when the language qualifier matches no known
    // language — nothing can be dispensed, so surface the empty state.
    if (error instanceof ApiError && error.status === 422) {
      return { repo: null, totalCount: 0, requestUrl: countRequestUrl }
    }
    throw error
  }

  if (total_count === 0) {
    return {
      repo: null,
      totalCount: 0,
      requestUrl: countRequestUrl,
    }
  }

  const reachableResults = Math.min(total_count, MAX_RESULTS)
  const pageCount = Math.ceil(reachableResults / PER_PAGE)
  const page = randomInteger(1, pageCount)

  const { items } = await api.get<SearchApiResponse>(SEARCH_PATH, {
    params: { q: query, per_page: PER_PAGE, page },
  })

  const requestUrl = toDisplayUrl(
    page > 1
      ? { q: query, per_page: PER_PAGE, page }
      : { q: query, per_page: PER_PAGE }
  )

  return {
    repo: pickRandom(items),
    totalCount: total_count,
    requestUrl,
  }
}

type UseRandomRepositoryOptions = {
  options?: MutationConfig<typeof getRandomRepository>
}

export const useRandomRepository = ({
  options,
}: UseRandomRepositoryOptions = {}) => {
  return useMutation({
    mutationFn: getRandomRepository,
    ...options,
  })
}

/** The request line shown while a dispense is in flight. */
export function getPendingRequestUrl(language: string): string {
  return toDisplayUrl({ q: `language:${language}`, per_page: PER_PAGE })
}

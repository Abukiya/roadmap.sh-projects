/**
 * Single pre-configured API client instance for the whole application.
 *
 * Uses the native fetch API behind a small axios-like surface so request
 * declarations stay declarative and responses come back pre-parsed.
 */

export class ApiError extends Error {
  readonly status: number
  readonly rateLimitReset: number | null

  constructor(message: string, status: number, rateLimitReset: number | null) {
    super(message)
    this.name = "ApiError"
    this.status = status
    this.rateLimitReset = rateLimitReset
  }
}

type RequestOptions = {
  params?: Record<string, string | number | undefined>
}

export function buildUrl(path: string, params?: RequestOptions["params"]) {
  const url = new URL(path, "https://api.github.com")

  for (const [key, value] of Object.entries(params ?? {})) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value))
    }
  }

  return url
}

async function get<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const url = buildUrl(path, options.params)

  let response: Response

  try {
    response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    })
  } catch {
    throw new ApiError(
      "Could not reach GitHub. Check your connection and try again.",
      0,
      null
    )
  }

  if (!response.ok) {
    const rateLimitReset = Number(
      response.headers.get("X-RateLimit-Reset") ?? 0
    )
    const isRateLimited =
      response.status === 403 &&
      response.headers.get("X-RateLimit-Remaining") === "0"

    const message = isRateLimited
      ? "GitHub is rate-limiting unauthenticated search requests."
      : `GitHub responded with ${response.status} ${response.statusText}.`

    throw new ApiError(
      message,
      response.status,
      isRateLimited && rateLimitReset > 0 ? rateLimitReset : null
    )
  }

  return (await response.json()) as T
}

export const api = { get }

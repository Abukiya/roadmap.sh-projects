import { QueryClient, type UseMutationOptions } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: 1,
    },
  },
})

type AnyMutationFn = (...args: never[]) => Promise<unknown>

/**
 * Utility type for overriding the react-query configuration of a mutation
 * hook without losing the inferred data/error/variables types.
 */
export type MutationConfig<TMutationFn extends AnyMutationFn> = Omit<
  UseMutationOptions<
    Awaited<ReturnType<TMutationFn>>,
    Error,
    Parameters<TMutationFn>[0]
  >,
  "mutationFn" | "mutationKey"
>

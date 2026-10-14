import { type ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "@/components/theme-provider"
import { queryClient } from "@/lib/react-query"

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}

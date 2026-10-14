const numberFormatter = new Intl.NumberFormat("en-US")

/** Human-readable request line: decodes %3A etc. without breaking on bad input. */
export function prettyUrl(url: string): string {
  try {
    return decodeURIComponent(url)
  } catch {
    return url
  }
}

export function formatCount(value: number): string {
  return numberFormatter.format(value)
}

/** "JUST NOW" · "9M AGO" · "2D AGO" · "1Y AGO" */
export function formatAgo(isoDate: string): string {
  const elapsedSeconds = Math.max(
    0,
    Math.floor((Date.now() - new Date(isoDate).getTime()) / 1000)
  )

  if (elapsedSeconds < 60) {
    return "JUST NOW"
  }

  const minutes = Math.floor(elapsedSeconds / 60)
  if (minutes < 60) {
    return `${minutes}M AGO`
  }

  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours}H AGO`
  }

  const days = Math.floor(hours / 24)
  if (days < 30) {
    return `${days}D AGO`
  }

  const months = Math.floor(days / 30)
  if (months < 12) {
    return `${months}MO AGO`
  }

  return `${Math.floor(months / 12)}Y AGO`
}

/** "00:42" countdown label for the rate-limit error state. */
export function formatCountdown(totalSeconds: number): string {
  const seconds = Math.max(0, totalSeconds)
  const minutesPart = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")
  const secondsPart = (seconds % 60).toString().padStart(2, "0")
  return `${minutesPart}:${secondsPart}`
}

export function pickRandom<T>(items: readonly T[]): T | null {
  if (items.length === 0) {
    return null
  }

  return items[Math.floor(Math.random() * items.length)] ?? null
}

export function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

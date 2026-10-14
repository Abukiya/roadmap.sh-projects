# Repo Riffle — GitHub Random Repository Finder

A [roadmap.sh](https://roadmap.sh/projects/github-random-repo) intermediate project:
pick a programming language, pull the lever, and one random repository is dispensed
from the GitHub Search API — stars, forks and open issues included.

Built from the "Repo Riffle" Paper design (signage mood: enamel white × screen-print
ink × chrome yellow) and structured following
[bulletproof-react](https://github.com/alan2207/bulletproof-react) (react-vite flavor).

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 + shadcn/ui (Base UI primitives)
- TanStack Query (mutation-based data fetching)
- Archivo (display) + IBM Plex Mono (data)

## Commands

```bash
npm run dev        # start dev server
npm run build      # typecheck + production build
npm run preview    # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run format     # prettier --write
```

## Architecture

```
src
├── app                # application layer: provider, shell (top bar), app root
├── components         # shared UI (button variants, theme provider)
├── lib                # pre-configured api client + query client
└── features
    └── random-repo    # the single feature
        ├── api        # request declaration: fetcher + react-query hook
        ├── components # hero, select, result, stats, footer, states
        ├── hooks      # R-key reroll shortcut
        ├── types.ts
        └── utils      # language list, formatting, randomization
```

Data flows one way (`shared → features → app`); the feature owns its API
declaration, state machine and UI.

## How it works

- **Randomness** — rolls a random page of the first 1000 search results
  (GitHub's search cap) for `language:<value>`, then a random item on that page.
- **States** — `idle → loading → success | empty | error`, derived from the
  mutation status; the loading skeleton, empty picker and error panels replace
  the result surface in place.
- **Rate limits** — a 403 with `X-RateLimit-Remaining: 0` renders a live
  countdown until the quota resets; 422 responses (unknown language) surface
  the empty state.
- **Controls** — language select auto-dispenses on change, `FETCH A REPO`
  pulls again, a `REFRESH REPO` button appears after the first success, and
  pressing `R` anywhere rerolls.

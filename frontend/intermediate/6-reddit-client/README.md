# DeckReddit — Multi-lane Reddit Client

A browser-based Reddit client that displays multiple subreddits in separate,
customizable lanes (a Trello-style board for Reddit feeds).

Built as the [roadmap.sh Reddit Client project](https://roadmap.sh/projects/reddit-client),
but running on **mock data**: Reddit no longer allows anonymous access to its
JSON feeds (`/r/{subreddit}.json`), so the app ships with a local mock client
that mimics the real API — artificial latency, "subreddit not found" errors,
occasional network failures and deterministic posts that survive reloads.

## Features

- **Add lanes** by subreddit name; the name is validated and verified against
  the (mock) API before the lane is created. Invalid names show inline errors.
- **Every lane** shows post titles, authors, vote counts, comment counts,
  flairs, relative ages and a local upvote toggle.
- **Sort per lane** — Hot / New / Top — plus a manual refresh button.
- **Loading skeletons** while fetching, an error card with retry when the
  mock network hiccups, and a friendly empty state.
- **Remove lanes** with one click; the board persists to `localStorage`
  (including per-lane sort) and is restored on reload — corrupted storage is
  sanitized on read.
- **Responsive**: horizontally scrolling snap board, everything degrades
  gracefully down to mobile widths.
- **Error handling**: error boundary around the app + a 404 catch-all route.

## Tech

React 19 · Vite · React Router · Tailwind CSS v4 · lucide-react

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run lint     # eslint
npm run build    # production build
npm run preview  # preview the build
```

## Project structure

Follows the [bulletproof-react](https://github.com/alan2207/bulletproof-react)
architecture (app → features → shared, one-way imports, feature-first code):

```sh
src
├── app # application layer: provider, router, app shell
├── config # global config (app name, storage keys, sort options)
├── components # shared UI (layout, header, error boundary, 404)
├── features
│ └── lanes # the reddit-lanes feature
│ ├── api # mock reddit client + dataset + typed errors
│ ├── components # board, lane, post card, forms, welcome
│ ├── hooks # use-lanes, use-add-lane, use-subreddit-posts
│ ├── stores # lanes context + provider (localStorage-backed)
│ └── utils # count/time formatting
├── hooks # shared hooks (useLocalStorage)
└── utils # shared utils (subreddit name validation)
```

## Swapping the mock for the real Reddit API

All data flows through one file: `src/features/lanes/api/mock-reddit-api.js`.
It exports `verifySubreddit(name)` and `fetchSubredditPosts(name, { sort })`.
Reimplement those two functions against a real API (or a proxy that adds
OAuth) and nothing else in the app has to change.

## Adding mock subreddits

Edit the registry in `src/features/lanes/api/mock-data.js` — add an entry
with a name, metadata and a list of post titles. Scores, comment counts,
ages, authors and flairs are derived deterministically from the title, so
data stays stable across reloads. Names in the registry are exactly the
subreddits the app considers "existing"; anything else reports
`Sorry, there isn't a subreddit called r/...`.

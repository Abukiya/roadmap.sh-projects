# Changelog Component

A vertical timeline changelog component built with Tailwind CSS. A solution for **Beginner Project #4 (Changelog Component)** from [roadmap.sh](https://roadmap.sh/projects).

## Screenshots

### Desktop

![Changelog Component](screenshot.png)

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS v4** - Utility-first styling via CDN

## What I Learned

Building this vertical timeline taught me about CSS positioning and layout:

- **Absolute positioning** - Using `absolute` with `top-0 bottom-0` to create a full-height vertical line
- **Z-index layering** - Placing dots on top of the line using `z-10`
- **Transform centering** - Using `-translate-x-1/2` to precisely center the line
- **Flexbox structure** - Creating a three-column layout (date | dot | content)
- **Relative containers** - Using `relative` on parent to position children absolutely within it

I got help from AI (OpenCode) to understand how to structure the timeline and position elements correctly.

## How to Run

No build tools needed. Just open `index.html` directly in a browser.

```bash
# Using a local server (optional)
npx serve .
```

## Author

Abukiya - 2026

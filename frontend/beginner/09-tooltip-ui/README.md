# Tooltip UI

A CSS-only tooltip component with smooth fade transitions. A solution for **Beginner Project #9 (Tooltip UI)** from [roadmap.sh](https://roadmap.sh/projects/tooltip-ui).

## Screenshots

### Desktop

![Tooltip UI](screenshot.png)

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS v4** - Utility-first styling via CDN

## What I Learned

Building this tooltip UI taught me about CSS transitions and hover-based interactions:

- **CSS Transitions** - Using `transition-opacity duration-300` to animate opacity changes smoothly over time
- **Group Hover Pattern** - Using Tailwind's `group` class on a parent and `group-hover:opacity-100` on children to trigger hover states without JavaScript
- **Absolute Positioning** - Placing tooltips above buttons with `absolute bottom-full` and centering with `left-1/2 -translate-x-1/2`
- **CSS Border Triangles** - Creating arrow/caret elements using zero-width borders with transparent sides and colored tops
- **Opacity Visibility** - Controlling element visibility with `opacity-0` and `group-hover:opacity-100` for clean show/hide behavior


## How to Run

No build tools needed. Just open `index.html` directly in a browser.

```bash
# Using a local server (optional)
npx serve .
```

## Author

Abukiya - 2026

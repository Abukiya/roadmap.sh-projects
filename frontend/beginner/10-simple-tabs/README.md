# Simple Tabs

An accessible tab interface built with HTML, Tailwind CSS, and vanilla JavaScript. A solution for **Beginner Project #10 (Simple Tabs)** from [roadmap.sh](https://roadmap.sh/projects/simple-tabs).

## Screenshots

### Desktop

![Simple Tabs](screenshot.png)

## Tech Stack

- **HTML5** - Semantic markup with ARIA attributes
- **Tailwind CSS v4** - Utility-first styling via CDN
- **JavaScript** - Vanilla JS for tab switching logic

## What I Learned

Building this accessible tab component taught me about accessibility patterns and DOM manipulation:

- **ARIA roles** - Using `role="tablist"`, `role="tab"`, and `role="tabpanel"` to define the tab widget structure for screen readers
- **ARIA attributes** - Using `aria-selected` to indicate the active tab and `aria-controls` / `aria-labelledby` to link tabs with their panels
- **DOM selection with ARIA** - Querying elements with `document.querySelectorAll('[role="tab"]')` instead of relying on classes or IDs alone
- **State management** - Toggling `aria-selected`, `hidden`, and `active` class to switch between visible tab panels
- **Accessible interactions** - Ensuring the tab interface communicates state changes properly to assistive technologies

## How to Run

No build tools needed. Just open `index.html` directly in a browser.

```bash
# Using a local server (optional)
npx serve .
```

## Author

Abukiya - 2026

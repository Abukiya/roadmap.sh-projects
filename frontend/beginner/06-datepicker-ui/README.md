# Datepicker UI

A static datepicker UI component built with HTML and Tailwind CSS. A solution for **Beginner Project #6 (Datepicker UI)** from [roadmap.sh](https://roadmap.sh/projects).

## Screenshots

### Desktop

![Screenshot](screenshot.png)

## About

A visually styled datepicker mockup featuring a text input with calendar icon, month/year navigation header, and a full calendar grid for March 2024. This is a static UI prototype with no JavaScript logic yet.

## Technologies

- HTML5
- Tailwind CSS via the browser CDN
- Font Awesome 6.5.1 for icons

## What I Learned

- Table borders can't be rounded by just adding `rounded-lg` to the `<table>` element. I had to wrap the table in a `<div>` with `overflow-hidden` and apply the border radius on the wrapper instead.
- How to structure a calendar grid using HTML tables with consistent border styling.

I got help from AI (OpenCode) to understand how to properly round table borders with CSS.

## Run Locally

No build tools needed. Just open `index.html` directly in a browser.

```bash
# Using a local server (optional)
npx serve .
```

## Author

Abukiya - 2026

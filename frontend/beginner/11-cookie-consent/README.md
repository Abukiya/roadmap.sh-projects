# Cookie Consent

A GDPR-compliant cookie consent banner with persistent state. A solution for **Beginner Project #11 (Cookie Consent)** from [roadmap.sh](https://roadmap.sh/projects/cookie-consent).

## Screenshots

### Desktop

![Screenshot](screenshot.png)

## Tech Stack

- **HTML5** - Semantic markup with ARIA attributes
- **Tailwind CSS** - Utility-first styling via CDN
- **JavaScript** - Vanilla JS for consent logic
- **Font Awesome** - Cookie icon

## What I Learned

- **localStorage** - How to persist user consent so the banner doesn't reappear on page reload
- **ARIA attributes** - Using `role="alertdialog"`, `aria-labelledby`, and `aria-describedby` for accessibility
- **Conditional rendering** - Checking `localStorage` on page load to decide whether to show the banner
- **Event delegation** - Attaching click handlers to Accept/Decline buttons to capture and save user choices

## How to Run

No build tools needed. Just open `index.html` directly in a browser.

```bash
# Using a local server (optional)
npx serve .
```

## Author

Abukiya - 2026

---
name: write-readme
description: Use when the user says "Write readme for project #X, I learned..." to automatically create a README file for a roadmap.sh project following the established structure.
---

# Write README Skill

When the user says "Write readme for project #X, I learned [things]", follow these steps:

## Steps

1. **Parse the input** - Extract:
   - Project number from the message (e.g., "#5" → 5)
   - What the user learned (the text after "I learned")

2. **Read existing READMEs** for structure reference:
   - `frontend/beginner/Single-Page-cv_1/README.md`
   - `frontend/beginner/portfolio-no2-n-3/readme.md`
   - `frontend/beginner/changelog-component/readme.md`

3. **Find the project directory** - Look for the folder that matches the project number or contains the recent work. If not found, ask the user which folder to use.

4. **Take a screenshot** using:
   ```bash
   chromium --headless --disable-gpu --screenshot=<project-dir>/screenshot.png --window-size=1280,800 file:///<project-dir>/index.html
   ```
   Save to `screenshots/` subfolder if it exists, otherwise in the project root.

5. **Write the README** following this structure:

```markdown
# [Project Name]

[Description]. A solution for **Beginner Project #[N] ([Project Name])** from [roadmap.sh](https://roadmap.sh/projects).

## Screenshots

### Desktop

![Screenshot](screenshot.png)

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS v4** - Utility-first styling via CDN

## What I Learned

[What the user told you they learned]

I got help from AI (OpenCode) to understand how to [relevant context].

## How to Run

No build tools needed. Just open `index.html` directly in a browser.

```bash
# Using a local server (optional)
npx serve .
```

## Author

Abukiya - 2026
```

6. **Adjust based on project** - Modify the Tech Stack section if the project uses different technologies (check `index.html` for what's actually used).

## Notes

- Always use "Abukiya - 2026" as author
- Always include the roadmap.sh project number
- Screenshot should be saved as `screenshot.png` in the project directory
- If chromium is not available, skip the screenshot and note it in the README

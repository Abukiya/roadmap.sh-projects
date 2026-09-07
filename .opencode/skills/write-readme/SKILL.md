---
name: write-readme
description: Use when the user says "Write readme for project #X <slug>, I learned..." to automatically create a README file for a roadmap.sh project following the established structure.
---

# Write README Skill

When the user says "Write readme for project #X <slug>, I learned [things]", follow these steps:

**Example input:** "Write readme for project #6 single-page-cv, I learned about meta tags and responsive design"

## Steps

1. **Parse the input** - Extract:
   - Project number from the message (e.g., "#5" → 5)
   - Project slug from the message (e.g., "single-page-cv", "testimonial-cards")
   - What the user learned (the text after "I learned")

2. **Read existing READMEs** for structure reference:
   - `frontend/beginner/01-Single-Pagecv/README.md`
   - `frontend/beginner/02-n-03-portfolio/readme.md`
   - `frontend/beginner/04-changelog-component/readme.md`

3. **Find the project directory** - Look for the folder that matches the project number or contains the recent work. If not found, ask the user which folder to use.

4. **Take a screenshot** using:
   ```bash
   chromium --headless --disable-gpu --screenshot=<project-dir>/screenshot.png --window-size=1280,800 file:///<project-dir>/index.html
   ```
   Save to `screenshots/` subfolder if it exists, otherwise in the project root.

5. **Write the README** following this structure:

```markdown
# [Project Name]

[Description]. A solution for **Beginner Project #[N] ([Project Name])** from [roadmap.sh](https://roadmap.sh/projects/<slug>).

## Screenshots

### Desktop

![Screenshot](screenshot.png)

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS v4** - Utility-first styling via CDN

## What I Learned

[What the user told you they learned]


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

7. **Update root `readme.md`** - Add a commented link to the project list:
   - Read `readme.md` from the workspace root
   - Find the correct section based on:
     - Area: `frontend` or `backend` (from path)
     - Level: `beginner`, `intermediate`, or `advanced` (from path)
   - Insert the link in commented format: `<!--[Project Name](https://roadmap.sh/projects/<slug>)-->`
   - Insert below existing links in that section, or under the level heading if it's the first project

8. **Add image grid to root `readme.md`** - Add thumbnail images in a 3-column table:
   - Auto-detect screenshot path (check in order): `screenshots/desktop.png`, `screenshots/homepage.png`, `screenshot.png`
   - Format: `[![Project Name](relative-image-path)](github-url)<br>Project Name`

   - Add after the commented links in the correct section
   - Use a 3-column markdown table layout

9. **Update area `README.md`** (e.g., `frontend/README.md`):
   - append the project list with clickable link
   - Format: `- [Project Name](beginner/project-folder/)`

10. **Update level `README.md`** (e.g., `frontend/beginner/README.md`):
    - Append project names and description in the table
    - Format: `| # | [Project Name](folder/) | Description |`

## Notes

- Always use "Abukiya - 2026" as author
- Always include the roadmap.sh project number
- Screenshot should be saved as `screenshot.png` in the project directory
- If chromium is not available, skip the screenshot and note it in the README
- Root `readme.md` links must be commented: `<!--[Project Name](https://roadmap.sh/projects/<slug>)-->`
- GitHub repo base URL: `https://github.com/Abukiya/roadmap.sh_projects`

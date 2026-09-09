# Learning Companion

A Socratic coding mentor designed to guide learners to think, predict, and reason through software challenges rather than spoonfeeding code.

> **"If you're not thinking, you're not learning."**  
> AI should reduce the friction around learning to code without reducing the cognitive effort required to master it.

---

## Why This Skill Exists

When tackling projects from [roadmap.sh](https://roadmap.sh), the goal is not merely having finished code in the repository—it is building lasting mental models, debugging instincts, and problem-solving resilience.

The **Learning Companion** intercepts the habit of asking AI to "write me X" or "fix this bug", redirecting the conversation toward guided discovery:
- **Diagnostic questions** instead of instant answers
- **Concept explanations and docs references** instead of full code snippets
- **Hypothesis testing & prediction** before running or checking code

---

## Core Principles & Behaviors

```mermaid
flowchart TD
    Q["Learner Asks Question / Hits Bug"] --> AI["Learning Companion Intercepts"]
    AI --> A["1. Ask Before Answering<br/>'What do you expect will happen?'"]
    AI --> B["2. Guide, Don't Give<br/>Direct to docs & specific specs"]
    AI --> C["3. Trace Thinking Gaps<br/>'Walk me through your logic step-by-step'"]
    AI --> D["4. Celebrate Struggle<br/>Reinforce that confusion is learning"]
    A & B & C & D --> L["Learner Formulates Solution & Writes Code"]
```

### 1. Ask Before Answering
Before providing technical guidance, the companion asks you to predict the behavior, reason through inputs/outputs, or articulate your current mental model:
- *"What do you think happens when this event fires?"*
- *"Can you predict the output with an empty input array?"*
- *"What would you try first to isolate whether it's a CSS or JS issue?"*

### 2. Guide, Don't Give
Instead of writing boilerplate or complete functions, the companion points to official documentation, relevant MDN guides, or key CSS/DOM APIs.

### 3. Diagnose Thinking Gaps
When you encounter a bug, the companion helps you formulate a debugging strategy rather than pointing out the line with the typo:
- *"What was the expected behavior vs. actual behavior?"*
- *"Let's trace through the state changes step-by-step."*
- *"Where could we add a `console.log` or breakpoint to test that assumption?"*

### 4. Celebrate Struggle & Confusion
Confusion is a sign that a new mental model is forming. The companion validates the difficulty and helps break complex concepts into manageable chunks.

---

## Response Patterns

| What You Ask | How the Companion Responds |
| :--- | :--- |
| *"Write a function that toggles active tabs"* | *"What state does each tab button need to track? What HTML attributes or classes reflect that state?"* |
| *"Why is my cookie consent banner not hiding?"* | *"What does `console.log(localStorage.getItem('cookie_consent'))` return? Let's check when that value gets updated."* |
| *"How do I center this modal with Tailwind?"* | *"Which positioning strategy are you considering: Flexbox, Grid, or Fixed positioning with transforms? Let's look at the trade-offs."* |
| *"Is this code correct?"* | *"What edge cases have you tested so far? What happens if the user presses Escape or navigates via keyboard?"* |

---

## Anti-Patterns (What the Companion Will NEVER Do)

- 🚫 Write complete solution files for you
- 🚫 Use automated file-editing tools (`write_to_file`, `replace_file_content`) to write your project code
- 🚫 Explain concepts without prompting for your engagement
- 🚫 Hand over answers without giving you the chance to reason through them first

---

## Prompting Cheatsheet for Learners

To get the most out of the companion, use prompts like:

```text
"Guide me through building the tab switching logic for Project 10."
"I'm stuck on why my event listener isn't triggering. Help me debug it."
"Explain the difference between flex-grow and flex-basis with a minimal example."
"Review my approach for persisting user preferences in localStorage—am I missing any edge cases?"
```

---

## Integration with Repository Workflow

The companion is paired with the repository's documentation automation skill:

1. **Active Development:** You solve the roadmap.sh challenge using the **Learning Companion** to reason, debug, and implement your own code.
2. **Project Completion:** Once your solution works and tests pass, you trigger the **`write-readme`** skill (`Write readme for project #X <slug>, I learned...`) to automate screenshots, local READMEs, and catalog tables.

---

## Related Files

- [SKILL.md](SKILL.md) — The system prompt and behavioral instructions executed by the AI.
- [write-readme SKILL.md](../write-readme/SKILL.md) — The automated documentation skill.
- [Skills Catalog](../README.md) — Index of all workspace skills.


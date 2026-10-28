# Workspace Skills

This directory contains custom skills configured for this repository via [`opencode.json`](../../opencode.json).

Each skill extends the AI's capabilities or enforces specific coding methodologies across projects.

---

## Available Skills

| Skill                                         | Directory                                    | Purpose                                                                                                                       | Trigger / Activation                                                                                                         |
| :-------------------------------------------- | :------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **[learning-companion](learning-companion/)** | [`learning-companion/`](learning-companion/) | Opt-in Socratic coding coach that guides through questions, predictions, and debugging strategies without writing solutions for you. | Explicitly triggered with `/learning-companion ...`; ordinary requests are not intercepted. |
| **[write-readme](write-readme/)**             | [`write-readme/`](write-readme/)             | Automates generating standardized project READMEs, capturing desktop screenshots, and updating catalog tables.                | Explicitly triggered: `"Write readme for project #X <slug>, I learned..."`                                                   |

---

## How Skills Are Configured

Skills are discovered by OpenCode through the root configuration file [`opencode.json`](../../opencode.json):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "skills": {
    "paths": [".opencode/skills"]
  }
}
```

Each skill folder contains:

- **`SKILL.md`**: Contains YAML frontmatter (`name`, `description`) and the execution instructions/guardrails for the AI.
- **`README.md`**: Human-readable documentation, rationale, and usage examples.

## Global Availability

The `write-readme` workflow is also installed globally so it can be used from
Copilot, Freebuff, and Hermes:

- Canonical Copilot/Freebuff skill: `~/.agents/skills/write-readme`
- Hermes skill copy: `~/.hermes/skills/write-readme`
- Repository-local OpenCode copy: `.opencode/skills/write-readme`

Use the same explicit trigger in each tool:

```text
Write readme for project #X <slug>, I learned ...
```

Keep the three `SKILL.md` files aligned when changing the workflow.

---

## Workflow Relationship

```mermaid
flowchart LR
    A["Building Roadmap Projects"] -->|"Active Thinking & Reasoning"| B["learning-companion"]
    B -->|"Solution Complete & Verified"| C["write-readme"]
    C -->|"Screenshots & Index Tables Updated"| D["Repository Ready & Committed"]
```

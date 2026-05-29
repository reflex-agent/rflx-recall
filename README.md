# Recall Engine

A Reflex utility that turns your own history into something you can query — and
that chases the threads you abandon.

- **`/recall <question>`** — answers from your journals and chat transcripts
  across every Space, with citations (built on Reflex's cross-conversation
  recall).
- **Morning "Loose Ends"** — a scheduled workflow (`at:06:00`) that finds open
  questions and "I'll get back to this" moments you never closed, saves them to
  the KB (`kind: loose-end`), pings you, and surfaces them on a dashboard card.

Mostly headless: value comes from the slash command, the workflow, and the
card. The iframe is a light help page.

## Install

Ships in the Reflex curated registry. Or install from GitHub:

```
github:reflex-agent/rflx-recall@v0.1.0
```

## Permissions

- `sessions.search` — read-only cross-Space recall (the whole point).
- `kb.read` / `kb.write` (`kind: loose-end`) — store the morning digest.
- `llm.tasks: [quick]`, `workers` — the card refresh action.

MIT.

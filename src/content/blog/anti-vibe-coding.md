---
title: 'Anti-vibe-coding: engineering rigor for AI'
description: 'AI coding is not about one-shot prompts and luck. It is about the same discipline that makes any software project succeed: clear decisions, explicit architecture, phased execution, and structured review.'
pubDate: 'May 10 2026'
---

There's a style of working with AI that I've started calling *vibe-coding*: open a chat, describe the feature in a sentence, paste whatever comes back, and hope the tests pass. When it works, it feels like magic. When it doesn't, which is most of the time on anything non-trivial, you're left debugging code you never reasoned about, with no record of *why* any of it exists.

I don't think the problem is the model. The problem is that we dropped the engineering discipline the moment the autocomplete got good.

## Spec-driven, not prompt-driven

The way I work with AI looks a lot like good software engineering, because it *is* good software engineering. I write the spec and the architecture first. The AI executes a plan, not a vibe. The project's standards stay consistent the whole way through.

In practice that means:

- **Small batches.** Implement in phases, not one giant generation. Each phase is reviewable.
- **Fast feedback.** A review loop after every step, with iterative correction before moving on.
- **Documented decisions.** Architecture choices get written down where the next run, human or AI, can find them.
- **Simplicity first.** Avoid speculative complexity. The AI is very happy to add abstractions you'll never need.

## Why documentation is the unlock

The single highest-leverage thing you can do with an AI coding agent is make it write down what it decided and why. Not as an afterthought, but as part of the loop.

A model with no memory of your last session will cheerfully contradict it. A model handed an accurate, current record of your architecture will stay on the rails. Auto-documentation isn't bureaucracy; it's how you keep delivery predictable across dozens of runs.

## It's still your job to think

The uncomfortable truth is that AI doesn't remove the need for engineering judgment. It raises the cost of *not* having it. A loose data model, an unclear boundary, a missing contract: these don't get smoothed over by a bigger model. They get amplified, at speed.

So I treat AI the way I treat any powerful tool: give it clear inputs, review its outputs, and never let it make a decision I couldn't defend myself.

That's the whole pitch. Not anti-AI. Anti-*vibe*.

---

*An early draft. I'll be expanding it with concrete examples from real projects.*

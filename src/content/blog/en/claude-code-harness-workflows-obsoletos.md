---
title: "Claude Code's harness made my AI workflow obsolete (and most others too)"
description: 'I built a workflow with 20 commands and 45 agents and once wrote "long live OMC". Today Claude Code does almost all of it on its own. What changed and what I still add on top.'
pubDate: 'Nov 26 2026'
tags: ['AI', 'Claude Code', 'My Opinion', 'Setup']
---

In March I shipped version 1.0 of [Pster's AI Workflow](https://github.com/J-Pster/Psters_AI_Workflow), a plugin with 20 commands, 45 agents, 17 skills, 4 hooks and 8 rules to organize how AI works on a project. In May, in my [post about moving from Cursor to Claude Code](/en/blog/migrei-cursor-para-claude-code/), I ended with "long live OMC", the agent orchestrator I had installed on top of Claude Code.

Today I use neither.

Both still work. What changed is Claude Code itself, its harness has improved so much that it now does almost everything those workflows did, and in some cases does it better. In my opinion this applies to most of the workflows we used to install on top of it. Mine is just the example I know best.

In this post I explain what the harness is, what my workflow did, what Claude Code already does with no plugin at all, and the two things I still add on top.

## What is the Claude Code harness?

The harness is everything that runs around the model. The model (Opus, Sonnet) does the thinking. The harness gives it the tools to act, like reading and editing files, running commands, launching other agents, managing context and remembering things between one conversation and the next.

A useful way to think about it is that the model is the engine and the harness is the rest of the car. A good engine in a bad car doesn't get you far.

For a long time the engine was ahead of the car. The model could already do a lot, but the harness didn't give it the structure to organize itself on large tasks. That gap is what workflows were built to fill.

## What my workflow did (and why it made sense)

Pster's AI Workflow was built for Cursor and had a fixed flow:

```text
/pwf-brainstorm      → define scope and decisions
/pwf-plan            → break the feature into phases
/pwf-checklist, /pwf-clarify, /pwf-analyze   → optional quality gates
/pwf-work-plan       → implement one phase at a time, until done
/pwf-review          → multi-agent review
/pwf-commit-changes  → structured commits
```

It rested on two ideas. The first was **predictability**, the README itself said the commands don't pick the path on their own and the developer chooses the next step. The second was **documentation as memory**, the commands read the project docs before implementing and updated them at the end, because the AI forgot everything from one session to the next.

When I moved to Claude Code, another piece was missing, which was running several agents at once. For that I installed OMC ([oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)), which added commands like `/team`, `/ralph` and `/ultrawork` to orchestrate agents in parallel.

Back then all of this made sense. The model didn't organize itself well on long tasks, so I gave it rails.

## What Claude Code does on its own today

Here is how it compares to what I had built:

| What I needed | How I solved it before | How it works today |
|---|---|---|
| Plan before implementing | `/pwf-brainstorm` + `/pwf-plan` | Claude plans on its own when the task calls for it |
| Execute in parts | `/pwf-work-plan`, one phase at a time | It splits the work and launches subagents |
| Several agents in parallel | OMC (`/team`, `/ultrawork`) | `/workflow` |
| Multi-agent review | `/pwf-review` | `/code-review` |
| Instructions I keep repeating | The plugin's rules and skills | Native skills and plugins |
| Project memory | Docs maintained by the workflow | Claude's memory (still weak) + ai-memory |

Some of these changes deserve more detail.

### Agent orchestration is now built in

A **subagent** is an agent Claude launches to handle part of the work. It runs with its own context and returns only the result, so it doesn't flood the main conversation. **Orchestrating** means coordinating several of them at the same time.

With `/workflow`, Claude Code builds a flow that launches several subagents and combines what they produce. Before, that was only possible with OMC. Now it ships out of the box, and the orchestrations it builds already go beyond what the old OMC had.

### Sessions got more flexible

`/btw` lets you ask a side question without disrupting the task that's running. You can also open a subchat from the session you're in.

And the part I find the coolest is that one chat can now talk to another. One session sends a task to another, the other one answers, and you don't have to copy and paste between them.

### Claude manages itself

The sequence of brainstorm, plan and phased execution that I used to force with commands, it now does without being asked. It decides when planning is worth it, when to split the work and when to call a subagent.

That took away the core idea of my workflow. I chose every step because the model couldn't choose well, and today it can.

### Projects replaced my workspace

My workflow had a whole command just to create a workspace with all of a project's repositories and keep the plan and docs together. Claude Code's projects do this natively, with one central session that orchestrates subsessions, called topics. It's what I used to build by hand.

## What the harness still lacks

There are two things I still add on top.

### Serena, for searching and editing code

Claude Code still works with basic file tools that only read, edit and search text, the way the operating system does. It works, but it's crude. To change a function, it has to read the file, find the snippet and edit the text.

[Serena](https://github.com/oraios/serena) gives Claude tools that understand code, like `find_symbol` to find a function or class, `find_referencing_symbols` to see who uses it and `replace_symbol_body` to replace its body without reading the whole file. That uses less context and makes fewer mistakes. I think something like this will make it into the harness eventually, but it hasn't yet.

### ai-memory, for remembering things

Claude's memory is starting to improve, but it isn't very good yet. That's why I use [ai-memory](https://github.com/akitaonrails/ai-memory), by Akita.

It stores memory as markdown files on a server you run yourself, versioned in git, and it works across agents and across machines. You can quit Claude Code in the middle of a task, open another agent in the same folder and continue without explaining the architecture again.

## My setup today

It's much smaller than the one in my May post:

- Claude Code, with its harness;
- Serena;
- ai-memory;
- my skills.

I uninstalled or stopped using everything else.

## Explained it twice? Make it a skill

If there's one tip I'd give anyone using Claude Code today, it's that anything you have to explain twice should become a skill.

A **skill** is a bundle of instructions Claude loads when a task calls for it. You write down once how to do something, and it follows that whenever the topic comes up. I have skills for deploying, for my commit convention and for writing in my voice.

This post is an example. On the first draft, Claude used a skill I had made for chat messages, and the text came out too short for a blog. Instead of explaining again how I wanted the post, I asked it to create a skill just for blog posts, with structure, SEO and my site's rules. This post was written with it.

And skills keep growing. They're now merging with connectors, which are integrations with external services, into a single thing, **plugins**. A skill used to be one `.md` file. Today a plugin can have several skills, several `.md` files, scripts, commands, connectors and other support files. It's exactly what I tried to build by hand in Pster's AI Workflow, except now it's a native format.

If you have a workflow installed on top of Claude Code, my advice is to try a few weeks without it. See what you actually miss, and add only that back, ideally as a skill. Tell me in the comments what's left in your setup.

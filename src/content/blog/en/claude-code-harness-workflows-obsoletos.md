---
title: "Claude Code's harness made my AI workflow obsolete"
description: 'I built a workflow with 20 commands and 45 agents and now Claude Code does almost all of it on its own, so I wrote down what changed in the harness and what I still use on top'
pubDate: 'Nov 26 2026'
tags: ['AI', 'Claude Code', 'My Opinion', 'Setup']
---

In March I shipped version 1.0 of [Pster's AI Workflow](https://github.com/J-Pster/Psters_AI_Workflow), a plugin I built to organize how AI works on my projects, with 20 commands, 45 agents, 17 skills, 4 hooks and 8 rules. In May, in the [post where I told the story of moving from Cursor to Claude Code](/en/blog/migrei-cursor-para-claude-code/), I even signed off with "long live OMC", the agent orchestrator I had installed on top of Claude Code.

Today I use neither.

And they both still work. What changed is Claude Code itself. Its harness got so much better over these months that it now does almost everything I had built, and in some cases it does it better than my workflow did. I think that goes for most of the workflows we used to install on top of it, and mine is just the one I know from the inside.

## What is the Claude Code harness?

The harness is everything that runs around the model. The model, Opus or Sonnet, does the thinking, and the harness gives it the tools to act, like reading and editing files, running commands, launching other agents, managing context and remembering things from one conversation to the next. I like to think of the model as the engine and the harness as the rest of the car, and a good engine in a bad car won't get you anywhere.

For a long time the engine was better than the car. The model could already handle a lot, but the harness didn't give it the structure to organize itself on a big task, and that's the gap workflows like mine were built to fill.

## What my workflow did

Pster's AI Workflow started out in Cursor and had a fixed flow that I ran one command at a time:

```text
/pwf-brainstorm      → define scope and decisions
/pwf-plan            → break the feature into phases
/pwf-checklist, /pwf-clarify, /pwf-analyze   → optional quality gates
/pwf-work-plan       → implement one phase at a time, until done
/pwf-review          → multi-agent review
/pwf-commit-changes  → structured commits
```

There were two ideas behind it. The first was predictability. The README itself said the commands don't pick the path on their own and the developer decides the next step. The second was using documentation as memory, so the commands read the project docs before touching anything and updated them at the end, because the AI forgot everything from one session to the next.

When I moved to Claude Code there was still one piece missing, which was running several agents at once, so I installed OMC ([oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)), which added commands like `/team`, `/ralph` and `/ultrawork` to orchestrate agents in parallel. It made sense. The model didn't organize itself well on long tasks, so I gave it rails.

## What Claude Code does on its own today

To see the difference for myself, I put together this table with what I needed, how I solved it and how it works now:

| What I needed | How I solved it before | How it works now |
|---|---|---|
| Plan before implementing | `/pwf-brainstorm` + `/pwf-plan` | Claude plans on its own when the task calls for it |
| Execute in parts | `/pwf-work-plan`, one phase at a time | It splits the work and launches subagents |
| Several agents in parallel | OMC (`/team`, `/ultrawork`) | `/workflow` |
| Multi-agent review | `/pwf-review` | `/code-review` |
| Instructions I keep repeating | The plugin's rules and skills | Native skills and plugins |
| Project memory | Docs maintained by the workflow | Claude's memory (still weak) + ai-memory |

What surprised me most was agent orchestration. A subagent is an agent Claude launches to handle part of the work, and it runs with its own context and hands back only the result, so it doesn't flood the main conversation. With `/workflow`, Claude Code builds a flow that launches several of them and combines what they produce, which is something I could only do with OMC before, and the orchestrations it builds today already go further than the old OMC did.

Sessions got a lot more flexible too. You can ask a side question with `/btw` without interrupting the task that's running and you can open a subchat from the session you're in, but the part I find coolest is that one chat can now talk to another. One session sends a task to another, the other one answers, and I don't have to copy and paste between them anymore.

And Claude started managing itself. The brainstorm, plan and phased execution sequence that I used to force with commands, it now does without me asking, deciding when planning is worth it, when to split the work and when to call a subagent. That killed the core idea of my workflow. I chose every step because the model couldn't, and now it can.

Even the command I had for setting up a workspace with all of a project's repositories stopped making sense, because Claude Code's projects do that natively, with one central session that orchestrates subsessions they call topics.

## What I still use on top

The first one is [Serena](https://github.com/oraios/serena). Claude Code still works on code with basic file tools that only read, edit and search text, the way the operating system does. It works, but it's crude, and to change a function it has to read the file, find the snippet and replace the text. Serena gives Claude tools that understand code, like `find_symbol` to find a function or class, `find_referencing_symbols` to see who uses it and `replace_symbol_body` to replace its body without reading the whole file. It uses less context and makes fewer mistakes. I think something like this will make it into the harness eventually, but it hasn't yet.

The other one is memory. Claude's is starting to improve but it isn't good yet, so I use [ai-memory](https://github.com/akitaonrails/ai-memory) by Akita, which stores memory as git-versioned markdown files on a server you run yourself and works across agents and across machines. I can quit Claude Code in the middle of a task, open another agent in the same folder and keep going without explaining the architecture again.

My setup ended up much smaller than the one in my May post:

- Claude Code, with its harness
- Serena
- ai-memory
- my skills

I uninstalled or stopped using everything else.

## If you explained it twice, make it a skill

The tip I'd give anyone using Claude Code today is to turn anything you have to explain twice into a skill. A skill is a bundle of instructions Claude loads when a task calls for it, so you write down once how to do something and it follows that whenever the topic comes up. I have skills for deploying, for my commit convention and for writing in my own voice.

This post is an example. On the first draft Claude used a skill I had made for chat messages and the text came out way too short for a blog, so instead of explaining again how I wanted the post, I asked it to create a skill just for blog posts, with structure, SEO, my site's rules and a long list of AI writing habits to avoid. This version was rewritten with it.

And skills keep growing. They're merging with connectors, which are integrations with outside services, into a single thing called plugins. A skill used to be one `.md` file, and today a plugin can have several skills, several `.md` files, scripts, commands, connectors and other support files, which is more or less what I tried to build by hand in Pster's AI Workflow, except now it's native.

If you have a workflow installed on top of Claude Code, try a few weeks without it, see what you miss and add only that back, ideally as a skill. And tell me in the comments what's left in your setup.

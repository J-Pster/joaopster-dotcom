---
slug: claude-code-harness-made-my-workflow-obsolete
title: "Claude Code's harness made my AI workflow obsolete"
description: 'I built a workflow with 20 commands and 45 agents and now Claude Code does almost all of it on its own, so I wrote down what changed in the harness and what I still use on top'
pubDate: '2026-11-25T21:46:04-03:00'
tags: ['ai', 'claude-code', 'opinion', 'setup']
---

In March I shipped version 1.0 of [Pster's AI Workflow](https://github.com/J-Pster/Psters_AI_Workflow), a plugin I built to organize how AI works on my projects, with 20 commands, 45 agents, 17 skills, 4 hooks and 8 rules. In May, in the [post where I told the story of moving from Cursor to Claude Code](/en/blog/i-migrated-from-cursor-to-claude-code/), I even signed off with "long live OMC", the agent orchestrator I had installed on top of Claude Code.

Today I use neither.

And they both still work. What changed is Claude Code itself. Its harness got so much better over these months that it now does almost everything I had built, and in some cases it does it better than my workflow did. I think that goes for most of the workflows we used to install on top of it, and I say that because I went through a bunch of them myself. Mine is just the one I know from the inside, and there are worse cases, like Ruflo, which I found out in that same May post was mostly theater.

## What is the Claude Code harness?

The harness is everything that runs around the model. The model, Opus or Sonnet, does the thinking, and the harness gives it the tools to act, like reading and editing files, running commands, launching other agents, managing context and remembering things from one conversation to the next.

For a long time the model improved faster than the harness. It could already handle a lot, but it didn't have the structure to organize itself on a big task, and that's the gap workflows like mine were built to fill.

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

To see the difference for myself, I put together this table:

| What I needed | In my workflow | In Claude Code today |
|---|---|---|
| Plan before implementing | `/pwf-brainstorm` + `/pwf-plan` | native |
| Execute in phases | `/pwf-work-plan` | native, with subagents |
| Several agents in parallel | OMC (`/team`, `/ultrawork`) | `/workflow` |
| Multi-agent review | `/pwf-review` | `/code-review` |
| Instructions I keep repeating | the plugin's rules and skills | skills and plugins |
| Project memory | docs maintained by the workflow | Claude's memory + ai-memory |

The first time `/workflow` impressed me was on a research task. I wanted the AI to dig into several topics to figure out the best way to do something, and until then I did that by asking it to launch workers by hand, which is what I called subagents, agents Claude launches to handle part of the work with their own context and that hand back only the result. `/workflow` is that, but structured. It launches the subagents with a clear goal, each one on its own piece, and puts everything together at the end. I thought it was amazing! Before, I could only orchestrate agents like that with OMC, and now Claude Code does it on its own and goes further than the old OMC did.

Sessions got a lot more flexible too. You can ask a side question with `/btw` without interrupting the task that's running and you can open a subchat from the session you're in, but the part I find coolest is that one chat can now talk to another. One session sends a task to another, the other one answers, and I don't have to copy and paste between them anymore.

And Claude started managing itself. The brainstorm, plan and phased execution sequence that I used to force with commands, it now does without me asking, deciding when planning is worth it, when to split the work and when to call a subagent. That killed the core idea of my workflow. I chose every step because the model couldn't, and now it can.

Even the command I had for setting up a workspace with all of a project's repositories stopped making sense, because Claude Code's projects do that natively, with one central session that orchestrates subsessions they call topics.

I uninstalled OMC about two months ago, when I realized Claude Desktop had gotten better than the CLI. In my May post I was defending the CLI because the UI froze with a lot of agents running, but the harness in Desktop is much better implemented now, so I moved to Desktop and OMC stopped making sense.

One thing I can't tell you is how much I saved with all this. I didn't feel a difference in usage, and Claude's usage swings a lot on its own anyway. Some weeks I do the same amount of work and token usage blows up, and other weeks it barely moves. Is it something internal to Anthropic's models? My guess is yes, but I don't know.

## What I still use on top

The first one is [Serena](https://github.com/oraios/serena). Claude Code still works on code with basic file tools that only read, edit and search text, the way the operating system does. It works, but it's crude, and to change a function it has to read the file, find the snippet and replace the text. Serena gives Claude tools that understand code, like `find_symbol` to find a function or class, `find_referencing_symbols` to see who uses it and `replace_symbol_body` to replace its body without reading the whole file. In practice Claude finishes the job a lot faster, because it edits files a lot faster.

Fair warning though, it eats RAM. I have 96 GB of memory and I run 6 or 7 Serena instances at the same time, each one takes between 6 and 18 GB, and in the end it sucks up almost all the memory on the machine. I still won't drop it, it's saved me a lot since I installed it. I think something like this will make it into the harness eventually, but it hasn't yet.

The other one is memory. Claude's is starting to improve but it isn't good yet, so I use [ai-memory](https://github.com/akitaonrails/ai-memory) by Akita, which stores memory as git-versioned markdown files on a server you run yourself and works across agents and across machines. I can quit Claude Code in the middle of a task, open another agent in the same folder and keep going without explaining the architecture again.

My setup ended up much smaller than the one in my May post:

- Claude Code, now in Claude Desktop
- Serena
- ai-memory
- my skills

I uninstalled or stopped using everything else.

## If you explained it twice, make it a skill

The tip I'd give anyone using Claude Code today is to turn anything you have to explain twice into a skill. A skill is a bundle of instructions Claude loads when a task calls for it, so you write down once how to do something and it follows that whenever the topic comes up. I have skills for deploying, for my commit convention and for writing in my own voice.

This post is an example. On the first draft Claude used a skill I had made for chat messages and the text came out way too short for a blog, so instead of explaining again how I wanted the post, I asked it to create a skill just for blog posts, with structure, SEO, my site's rules and a long list of AI writing habits to avoid. This version was rewritten with it.

And skills keep growing. They're merging with connectors, which are integrations with outside services, into a single thing called plugins. A skill used to be one `.md` file, and today a plugin can have several skills, several `.md` files, scripts, commands, connectors and other support files, which is more or less what I tried to build by hand in Pster's AI Workflow, except now it's native.

If you have a workflow installed on top of Claude Code, try a few weeks without it, see what you miss and add only that back, ideally as a skill. And tell me in the comments what's left in your setup, I'm curious whether anyone still runs OMC.

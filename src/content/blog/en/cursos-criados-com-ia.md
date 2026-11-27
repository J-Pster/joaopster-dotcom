---
slug: how-i-use-ai-to-build-courses
title: 'How I use AI to build courses the way I like to learn'
description: "I stopped depending on how a teacher explains things and now I ask Claude to build text courses made for me, from the basics up, with a glossary, quizzes and spaced repetition, here's how I build them and how I study them"
pubDate: '2026-11-26T18:11:31-03:00'
updatedDate: '2026-11-27T15:52:39-03:00'
tags: ['ai', 'claude-code', 'courses', 'opinion']
---

In early November, Brazil's Civil Defense put out guidance telling every family to keep a kit to get by on their own for 72 hours, with water, food and medicine, and that landed right when everyone was talking about El Niño. I read it and thought, man, I should know first aid. I went looking and the material was scattered, hard to find in one place, and nothing took me from start to finish. So I asked AI to build a course for me.

What came out was a course with 27 modules and 293 lessons, plus a glossary with 2,486 terms, based on PHTLS, TCCC and TECC, which are the reference standards for trauma care. It was the first big, truly structured course I made, because it was a subject I knew basically nothing about. In this post I explain how I ask AI to build a course the way I learn, the skill I wrote for it, and how I study what comes out.

## What wore me out about ready-made courses

Before AI I'd look for courses on Udemy and videos on YouTube. I was never much of a book reader, and good, organized written material was hard to find. What bothered me most was depending on how the teacher explained things, and a lot of the time it wasn't my way. Either it was so-so, or the video had bad audio, bad image, and that stressed me out.

Today I prefer text, by a lot. AI is really good at generating text and not at generating video, so text is where I can get content made for the way I learn. And I read text at my own pace, go back, mark a passage. With a video I have to listen to the guy say the same thing again, and with text I just glance and find it, it's way faster.

## How I tell the AI the way I learn

I only learn by starting from the foundation. Even when I already know something about the subject I like to start from the basics, because if I don't understand why something is the way it is, I don't accept that information. So the first thing I did was write that down as rules:

- The first module is always the deepest foundation of the subject.
- Every lesson answers "why is it like this?" before "how do you do it?".
- No module uses something that hasn't been taught yet.
- The course ends with a project tied to a concrete goal of mine.

You can see it in the order of the courses. The first aid one opens with "How the body keeps itself alive", and tourniquets only show up in module 5, after four modules of foundation. The AWS one opens with "Why the cloud exists".

The other thing I do is tell the AI the situation I'm in, so it focuses even more on me. That's why an AWS lesson says "João has already chosen `us-east-1` when creating resources". The course talks to me by name and uses my case as the example, which no recorded course does.

That doesn't mean the course only works for me. Since it starts from zero, anyone with almost no background can pick it up and read it. And when the goal is a certification, I ask for a course for the specific exam I want, because then it also teaches how the exam works. The opening note of the AWS course already explains that there are 65 questions, that you pass with 720 out of 1,000 and how much each domain weighs, and the material follows those weights.

## The skill that builds the course

I use Claude Code with Opus 5.5 and a skill I wrote, `criar-curso` ("create course"). A skill is an instructions file Claude loads when the request matches its description, and mine has the whole process:

1. Understand the topic and where I want to get to.
2. Design the curriculum, with modules in dependency order, and show it to me for approval before researching anything.
3. Research and write, with one agent per module, up to 5 in parallel, all reading the same writing guide.
4. Put it all together, check that facts match across modules and link each term to the glossary.
5. Verify with scripts, no broken links, no unlinked terms and answer keys without bias (the right answer can't always be the longest one, which is a habit of AI-generated text).

I run this with Claude Code's `/workflow`, which launches several subagents (other Claude instances, each with its own task) and collects what they return. I wrote more about it in the [post about the Claude Code harness](/en/blog/claude-code-harness-made-my-workflow-obsolete/). The AWS course alone used around 483 agents, spread across several workflows.

A course takes 2 to 3 hours to finish, depending on its size, and it's basically one shot. The workflows themselves research, write and review, so the AI handles the back and forth on its own without me touching anything. I'm on the Ultra plan, and each course eats about 1 to 2% of my weekly usage.

The course comes out as a folder in the format [Obsidian](https://obsidian.md/) understands, with one note per lesson, one note per glossary term and links between them. The courses section of my site reads that same format and adds on top what Obsidian doesn't have, so I write the course once and it works in both.

The skill wasn't born like this. The first two courses, House Modeling and then Radio, back in September, came from a very early version that only researched and wrote the course. It had no glossary, didn't link one lesson to another and didn't follow the Obsidian structure. The courses weren't bad, but they were more basic, and the skill kept growing from there until the first aid one.

## How I study the course

Every day I open the course on any of my devices, and my progress is already saved there. I read the lesson to the end and, when I finish the module, I take its quiz, which helps me lock in what I read, and then I move on to the next one.

About two days later I go back to the questions I got wrong. And I do spaced repetition pretty much every day, with cards for the glossary terms of the lessons I've already read and for the questions I missed, and each card comes back on the day I'd be close to forgetting it.

When I don't understand something, I ask the AI assistant built into the courses platform. You add your own Anthropic, OpenAI or Google key, and it reads the lesson you have open and answers based on it, you can even select a passage and ask only about that. It's amazing. And when I find a mistake in the course, I fix it and update the course on the site. I showed everything else the platform does in the [post about the study platform](/en/blog/free-study-platform-spaced-repetition-practice-exams-ai/).

AWS is the one I'm studying the most. I study one or two hours a day and I plan to take the exam in the next few months, maybe weeks.

## Does the AI get things wrong?

It does, for sure, and there's not much way around it. What you can do is make it research and analyze a lot online before it writes anything, which is what the skill does, and check the critical points yourself.

What I see most is the AI drifting into generic stuff. Once I asked for some first aid quick reference cards and it gave me huge, messy explanations, which is awful for a card you need to read in two seconds during an emergency. I had to refine the request until I got what I wanted, and the skill is basically that, a prompt I've already refined so it doesn't go generic.

Now, to anyone who says AI teaches wrong things so it's useless for learning, I'd point out that books get things wrong, teachers get things wrong and YouTube videos get things wrong, and nobody stopped reading books because of it.

## How to build your own course

The skill is open on the [How I make the courses](/en/courses/how-i-make-them/) page (the skill files are in Portuguese, but you can ask for the course in any language). To use it:

1. Download the skill .zip.
2. In Claude Code, unzip it and copy the `criar-curso` folder to `~/.claude/skills/`. On claude.ai or the app, upload the .zip in Settings, Capabilities, Skills. In another AI, paste the content of `SKILL.md` and `guia-de-escrita.md` as instructions.
3. Ask by saying the topic, where you want to get to and, if you want, your situation, like this:

```text
Learning photography, I want to be able to shoot a wedding on my own. Write the course in English.
```

It shows you the curriculum to approve, writes the modules and checks everything at the end. The courses I've made this way are open in the [courses section of my site](/cursos/) (in Portuguese), and if you make one, send it to me at joao@joaopster.com and I'll read it and, if it's good, publish it there with credit to you.

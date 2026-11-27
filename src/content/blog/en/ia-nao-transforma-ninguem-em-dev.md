---
slug: ai-doesnt-turn-anyone-into-a-developer
title: "AI doesn't turn anyone into a developer"
description: "I saw on LinkedIn that a 15-year-old with Claude Code does what used to take a developer years to learn, and I disagree, because AI writes the code but only multiplies what you already know"
pubDate: '2026-11-27T18:10:29-03:00'
tags: ['ai', 'career', 'opinion']
---

Yes, I used AI to write this post. And I doubt you'll find the generic text here, full of "in today's landscape" and punchy one-liners, that comes out when someone asks ChatGPT to "write an article about AI and the future of developers". This post came out of a [skill I wrote myself](https://github.com/J-Pster/joaopster-dotcom/tree/master/.claude/skills/escrever-post-blog), which interviewed me in two rounds before writing a single line, researched the sources, and then ran the text through a check against AI writing habits. Everything here is something I said, the AI only organized it, and that way of using the tool is exactly what this post is about.

A few days ago I saw a post on LinkedIn saying that today a 15-year-old with Claude Code does what used to take a developer years of experience. I don't remember who wrote it, and it doesn't matter, because I see that line everywhere, in a dozen variations. And I disagree with it, because it mixes up writing code with doing a developer's job.

So you know where I'm coming from, I've been programming for six years. I went through [Trybe](https://www.tecmundo.com.br/mercado/236790-trybe-vale-pena-8-pontos-olho.htm), a Brazilian bootcamp of more than 1,500 hours, almost a full year of course, and even so most of what I know I learned on my own, because I'm self-taught and obsessed with productivity, and when I want something I don't let go. Today I have a startup I can't name yet, 10 months old with more than 500 users, and I wrote about 87% of its code, close to 2 million lines, not counting tests, migrations or generated files (I counted with a script, it's not a guess). All the architecture and all the infrastructure, since day zero, were my decisions. And 100% of that code goes through AI, I haven't written a line of code by hand in a long time.

So no, I'm not against AI. I've been using AI to program for three years, and it clicked for me the very first time I used it.

## The door into programming got knocked down

The LinkedIn post gets one thing right. Today anyone can write code. The door into programming isn't just open, it got knocked down, there's no door anymore. You open Lovable, Bolt or Claude Code itself, describe what you want and a working screen comes out.

The name stuck in February 2025, when Andrej Karpathy [called it "vibe coding"](https://simonwillison.net/2025/Feb/6/andrej-karpathy/), a way of programming where you "forget that the code even exists". But a lot of people forgot the other half of the tweet, where he says himself that it's "not too bad for throwaway weekend projects", weekend projects you throw away, and there are people using it to store customer data.

Writing code was never the hard part. The hard part is building software that lasts, that you can maintain, that can grow, that scales, with infrastructure that doesn't go down and doesn't ruin you at the end of the month. AI doesn't give you that for free, because to ask for the right thing you have to know what the right thing is.

## Writing code got easy, the rest is still hard

Ask someone who became a "dev" in seven days what a design pattern is. What changes between a monolith and microservices, and when each one makes sense. How a layered architecture works, or one split by domain. Most of the time they don't know, and they don't know because they never studied it. They know how to ask AI for code, and when the system grows and architecture problems show up, they don't even have the vocabulary to understand what's wrong.

With infrastructure it's even worse. There are a lot of people calling themselves developers who have never opened the AWS console, never logged into Azure and don't know what GCP stands for. Instead they use Supabase and Firebase, and think they're doing infrastructure.

I have nothing against Supabase itself. Under the hood it's Postgres, with auth, storage and a generated REST API on top, it's open source, the managed service [runs on AWS](https://supabase.com/docs/guides/platform/regions) and you can host it yourself. What bothers me is people who use it with no idea of any of that. They don't know there's a Postgres underneath, they don't know security depends on something called RLS (Row Level Security, the rules that say which user can read which row of the database) and they don't know that, if they don't set it up, anyone with the public key from the frontend can read the whole database.

In 2025 a researcher analyzed 1,645 apps built on Lovable and found 170 exposing data because of misconfigured RLS, with emails, phone numbers, payment data and API keys leaking, and that became [CVE-2025-48757](https://nvd.nist.gov/vuln/detail/CVE-2025-48757). In February 2026 Wiz found [Moltbook's entire database wide open](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys) for the same reason, with about 1.5 million tokens exposed, and the founder had said publicly that he didn't write a single line of code. I've found exposed keys myself while looking into SaaS products out there, and YouTube is full of videos of people showing how easy it is to exploit these apps.

### Firebase is not "the database"

I've seen a lot of people call Firebase a database, and worse, truly believe it's the right database for a large production system storing user data, because "it's faster to get started". Firebase is a platform, and the databases inside it are [Firestore and the Realtime Database](https://firebase.google.com/docs/database/rtdb-vs-firestore). When a developer says "database", almost everyone pictures Postgres or MySQL, a relational database with SQL. Firestore is a document database, NoSQL. And that's where juniors fall.

NoSQL isn't bad, Amazon keeps a lot of stuff in DynamoDB. The mistake is taking relational data, which needs joins, transactions and integrity, and shoving it into a document database without modeling anything.

I know the headache because I've worked on a project like that, with a few hundred thousand users, the database on Firestore and the backend on a pile of Cloud Functions. The cost was very high. We needed relations between the data and couldn't do them properly, because the database isn't relational. There was no standard for security rules, so pretty much anything could change any document. A lot of the data had no structure at all, one document looked one way and the one next to it looked another. And migrating that was misery.

### Lovable is not a developer tool

For building a prototype and validating an idea, Lovable is great and I have nothing against it. What makes me angry is people so convinced they've become developers that they think Lovable is what a developer uses, with no idea what the AI setup of someone who programs for a living looks like.

Mine, for example, is Claude Code with a few dozen skills I wrote, a bunch of hooks and thousands of lint and Stylelint rules to force the code to come out the way I want. At the startup we have tens of thousands of unit tests, a hook that runs before every push, a hook at deploy time, a huge CI/CD pipeline and a sanity check that simulates a real user after every deploy. On a normal day I have six to eight AI chats open, each with dozens of subagents. Anyone who thinks a developer with AI is someone who writes a prompt and hits enter has never heard of unit tests or lint rules, and if they have, they don't know how to use them.

And if you think I'm exaggerating my productivity, my [WakaTime](https://wakatime.com/@JoaoPster) is public, and the top of my site shows the total hours I've coded.

## Who's selling the shortcut

Search for "developer course" or "build your SaaS without knowing how to code" and you'll find a ton of people promising to turn you into a developer in seven days. It's everywhere, and everyone knows it. I've never bought one of those and I never will, because to me it's a scam.

They exploit something every human being has, the urge to get things fast, which today, with so much cheap dopamine, is stronger than ever. It's the old "easy money, fast", now dressed up as AI.

What bothers me most is that it hurts people, and if there's one thing I hate in life it's getting in someone else's way. But a scammer goes further than getting in the way. He lies to the person, takes their money and still leaves them behind, thinking they learned something, with an insecure app online and without the foundation to see how big the problem is. I did a one-year course of more than 1,500 hours and I know how much I was still missing when I finished. Seven days is a joke.

## AI multiplies what you already are

AI is a tool, and like any tool it makes whoever uses it more productive, but it doesn't make bad code good and it doesn't turn anyone who isn't a developer into one.

- A good developer with AI is still a good developer, only shipping ten times more.
- A bad developer with AI is still bad, and ships ten times more bad code.
- Someone who isn't a developer still isn't one, and ships broken code full of security holes ten times faster.

I've seen hired developers shipping buggy, random, senseless AI-generated code, at more than one company. And it's the complaint I see most online. In the 2025 Stack Overflow survey, the number one frustration of people using AI to code was exactly code that's ["almost right, but not quite"](https://survey.stackoverflow.co/2025/ai), cited by 66% of developers. Someone who can't program can't even see where the "almost" is.

### AI as a crutch

There's another type that bothers me, the person who uses AI as a crutch. No patience, no perseverance, no discipline to use AI to learn before using it to do, so they ask for everything ready-made and move on without understanding anything.

I know what it's like because I've done it. Early on, I already knew unit testing but didn't know how to write integration tests, and I was arrogant enough to ask AI to do it without understanding how it worked. It went wrong. I got stuck in a loop, the thing broke, I asked AI to fix it, it broke again, and I had no idea why, because I didn't know what was going on there. When it finally clicked I thought I'd been really stupid, all I had to do was learn it first and ask later.

In January 2026 Anthropic itself published a [study with 52 engineers learning a new library](https://www.anthropic.com/research/AI-assistance-coding-skills). Those who learned with AI doing the work for them scored 17% lower on average on a comprehension quiz than those who wrote the code by hand, and the biggest gap was in debugging. And those who used AI to ask for explanations and clear up conceptual questions learned more. AI teaches well, if you ask it to teach you.

## Will AI end developers?

The developer as the job looks today, I think it will. Developers will stop writing code and become the people who define the architecture, the infrastructure, how things have to work and which structure to use. I already work like that, AI writes and I decide.

In March 2025 Dario Amodei, Anthropic's CEO, [said](https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic) that in three to six months AI would be writing 90% of the code. In the same talk he said the programmer would still need to define the design and security of the system, and almost nobody repeats that second part. And junior jobs really are harder to get, a [Stanford study](https://digitaleconomy.stanford.edu/publications/canaries-in-the-coal-mine) using payroll data shows that hiring of 22 to 25 year olds in the jobs most exposed to AI fell well below trend, but the authors themselves say they can't claim AI is the cause.

To me the developer career isn't over. What changed is what you need to study. What you used to learn only once you became senior, a junior now has to learn from the start, because AI already writes the code.

## What I'd study if I were starting today

First, learn how to learn. It sounds silly, but you need to know how you learn, and Fabio Akita, a well-known Brazilian developer, has [a 2020 video about it](https://www.youtube.com/watch?v=oUPaJxk6TZ0) (in Portuguese) that I recommend, where he sums up learning how to learn as truly figuring things out on your own. I use AI to build the courses I study with, and I show the whole process on the page about [how I make my courses](/en/courses/how-i-make-them/).

Then the foundation. The concepts, how the internet works, what happens between the browser and the server. And writing code, lots of code. Juniors have to write code, because writing it is how you understand what the AI is handing you.

And then, much earlier than we used to, the senior stuff. Architecture, every kind. Infrastructure. Software modeling, which in [Akita's other video](https://www.youtube.com/watch?v=SmYQcaP1Jgw) means representing the real world in code, and for that you need to understand the business and not just the language. Design patterns. And even learning to be an entrepreneur.

Some time from now I'll write another post showing how I keep code quality high with AI, with high throughput and without having to review every PR by hand. There you'll see in practice the difference between asking AI for code and programming with it.

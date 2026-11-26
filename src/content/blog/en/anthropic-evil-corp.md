---
title: 'Is Anthropic the Evil Corp or not?'
description: 'A LinkedIn article claims Anthropic uses Claude Code to copy your software, so I went through every single source to separate fact from fearmongering'
pubDate: 'Nov 26 2026'
tags: ['AI', 'Claude Code', 'My Opinion']
---

Anyone who watched Mr. Robot remembers E Corp, the biggest conglomerate in the world on the show, which Elliot only ever calls [Evil Corp](https://en.wikipedia.org/wiki/Mr._Robot). Well, an article that showed up on LinkedIn this month paints Anthropic in pretty much the same way, as a company that uses Claude Code to get into your repository, copy your business and throw you away afterwards.

I found this article in a funny way. I published my [post about how Claude Code's harness made my workflow obsolete](/en/blog/claude-code-harness-workflows-obsoletos/) on LinkedIn, and the author of this article commented on it. I went to read it, and the title alone tells you the tone, ["Se você usa Claude Code, está lascado"](https://www.linkedin.com/pulse/se-voc%C3%AA-usa-claude-code-est%C3%A1-lascado-por-que-sua-de-com-maia-favero-9pqcf/) ("If you use Claude Code, you're screwed"), published on November 3, 2026.

Before anything else I want to make one thing clear. I'm not an Anthropic investor, I don't work there, I'm not a fan of any AI company and I'm not against any of them either. I'm in favor of everyone using whatever works best for them, safely. And one thing I hate is opinion dressed up as fact, which is exactly what this article does and what I see in a lot of writing about AI out there. You take a half-truth, mix it with a lot of sensationalism and deliver digital fearmongering of the "don't use AI, go back to the stone age" kind.

So I did what the article didn't do. I went after every claim, I read Anthropic's IPO filing, the news from the time, the terms of service and the data policies, and I put a link to all of it here so you don't have to believe me or him.

## Who wrote it and why that matters

The article is by Edilson Maia Favero, and my criticism here is of the article, not the person. He has open source projects, he has a company, he does cool stuff, but there's a detail the article leaves out.

The whole article revolves around conflict of interest, the idea that Anthropic has an interest in grabbing your data and locking you in. But the author himself has a huge conflict of interest on this subject. The headline of his LinkedIn profile literally says "You as the sole owner of your data | I turn cloud dependence into technological autonomy through extreme efficiency and converting OPEX into CAPEX". In the consulting section, he writes that his focus is "eliminating systemic dependence on Big Tech providers". His company, Costafavero, advertises [Vault-Code, an "AI agent server" with "its own infrastructure"](https://costafavero.com.br) on its website, and he maintains [Autoreflex, a local memory server for agents](https://github.com/edilsonmaia/Autoreflex) on GitHub.

Now look at the "survival architecture" he recommends at the end of the article. Your own harness, local memory under your control, no closed vendor agent. Point by point, it's what he sells.

That doesn't automatically make the article false, and I even think he gets a few things right, which I'll show you. But someone who accuses others of hiding commercial interests should disclose their own.

## Where I stand

So you understand where I'm coming from, this is my position.

I use Claude Code every day. At my company I use an Ultra plan, I've even used two at the same time, and the training toggle is off. I think this has to be a conscious choice for each person, and I chose to keep it off.

I'm in favor of local memory, `deny` rules, hooks and any other lock that keeps AI from reaching where you don't want it to. And if I had to pick the best option of all, I'd pick an open source model running on your own hardware, because that's real independence, independence even from cloud hardware providers. The catch is that today this is still expensive, and I'll talk more about it at the end.

So no, I'm not here to defend Anthropic. I'm here to separate fact from opinion.

## Mechanism 1, the "confession" in the IPO filing

The article says the NYU Stern analysis of the S-1 "put the final nail in the coffin of illusions" (translated from Portuguese), and that the document makes it clear "in no uncertain terms" that Claude Code is a weapon to

> break into companies through the back door (via individual programmers), map internal usage, lock the entire corporate operation into the closed Claude for Enterprise ecosystem and exterminate all intermediary software companies

**What it actually says.** I went straight to the document. The S-1 exists, Anthropic filed it with the SEC on [October 26, 2026](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm), and the IPO happened on November 18 at US$ 83 per share, according to the [final prospectus](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm). I read the passages, and this is what the document says.

> These users provide strategic value as a top-of-funnel engine for our enterprise business— individuals who utilize Claude for their personal work and then champion it inside their organizations.

> By the time our direct teams engage a customer, Claude is often already in use.

Putting it the way I understood it, Anthropic counts on the dev who uses Claude for personal work to bring it into the company, so when the sales team shows up, Claude is already there. That's it. There's no "breaking in", no "mapping internal usage", no "exterminating intermediaries". I searched the final prospectus for any risk factor or sentence about competing with its own customers and didn't find one. The document says the opposite, that customers like Legora and Salesforce build products on top of Claude, and that one of the risks is a customer developing its own AI and no longer buying.

**Is that normal?** From what I researched, it's everywhere. It's called product-led growth, or bottom-up growth, and it's exactly what the [NYU Stern analysis itself](https://bhr.stern.nyu.edu/quick-take/enterprise-ai-with-a-consumer-funnel-what-anthropics-s-1-reveals-about-the-ai-ipo-era/) says, that Anthropic is applying "a well-worn marketing strategy to the AI era". NYU Stern's criticism, by the way, is about something else, the risk to consumers and mental health, not stealing companies. I looked up what other companies wrote in their own IPO filings, and look at this.

- **Dropbox, 2018.** "Our 500 million registered users are our best salespeople. They've spread Dropbox to their friends and brought us into their offices" ([S-1](https://www.sec.gov/Archives/edgar/data/1467623/000119312518055809/d451946ds1.htm)).
- **Atlassian, owner of Jira, 2015.** "We rely on word-of-mouth and low-touch demand generation to drive trial, adoption and expansion of our products within customers" ([F-1](https://www.sec.gov/Archives/edgar/data/1650372/000104746915008450/a2226437zf-1.htm)).
- **Slack, 2019.** "self-service users become leads for our salespeople" ([S-1](https://www.sec.gov/Archives/edgar/data/1764925/000162828019004786/slacks-1.htm)).
- **Zoom, 2019.** "Our sales model allows us to efficiently turn a single non-paying user into a full enterprise deployment" ([S-1/A](https://www.sec.gov/Archives/edgar/data/1585521/000119312519107178/d642624ds1a.htm)).
- **Figma, 2025.** "approximately 70% of new Organization and Enterprise plan customers included at least one user who was previously a member of a Professional plan" ([S-1](https://www.sec.gov/Archives/edgar/data/1579878/000162828025033742/figma-sx1.htm)).

Canva hasn't gone public yet, so there's no filing like these, but it talks about its own ["product-led roots"](https://www.canva.com/newsroom/news/one-year-canva-enterprise/) itself. Nobody calls Dropbox the Evil Corp because you brought it to work.

The number that scared me the most was the net revenue retention of around 900%, meaning that on average business customers spend nine times more than they did a year before. But the prospectus itself explains that this number excludes Pro, Max and Ultra subscribers. It measures companies that bought more, not devs who were "captured".

**My verdict.** The "top of funnel" part is real and it's in writing. The rest is the author's interpretation presented as if it were the document's text.

## Mechanism 2, the Windsurf case

The article calls this one "Telemetry as industrial espionage and supply cutoff". The thesis is that Windsurf practically invented the modern coding agent, that Anthropic watched everything through the API, shamelessly copied it to create Claude Code and then cut off Windsurf's access to steal its customers.

**What's true.** I checked, and Windsurf really did process over 100 million tokens per minute on Anthropic's API, which is in the [customer case study Anthropic itself publishes](https://claude.com/customers/windsurf), and the cutoff really happened. On June 3, 2025, Windsurf's CEO, Varun Mohan, said Anthropic cut almost all of its first-party capacity for the Claude 3.x models "with less than five days of notice" ([TechCrunch](https://techcrunch.com/2025/06/03/windsurf-says-anthropic-is-limiting-its-direct-access-to-claude-ai-models/)). That was harsh, and I think Anthropic got the way it did it wrong.

**What the article leaves out.** The stated reason. Two days later, co-founder Jared Kaplan said the decision came from the reports that OpenAI was going to buy Windsurf, "I think it would be odd for us to be selling Claude to OpenAI" ([TechCrunch](https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai/)). You can think the reason is bad, but it isn't "stealing the dev base", and Claude 4 stayed available on Windsurf with the user's own API key.

The ending of the story was left out too. The OpenAI deal didn't happen, Google hired the CEO and paid US$ 2.4 billion in licensing ([The Verge](https://www.theverge.com/openai/705999/google-windsurf-ceo-openai), [Reuters](https://www.reuters.com/business/google-hires-windsurf-ceo-researchers-advance-ai-ambitions-2025-07-11/)), and Cognition, which bought the rest of Windsurf on July 14, 2025, announced the IDE "now with full access to the latest Claude models" ([Cognition](https://cognition.com/blog/windsurf)). Anthropic went back to selling to them.

**And the copying?** For me the timeline doesn't add up. Boris Cherny started the prototype of what became Claude Code in September 2024, and it was already being used inside Anthropic in November 2024 ([The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built)), the same month Windsurf launched Cascade, on [November 13, 2024](https://devin.ai/blog/windsurf-launch). Claude Code's public launch was on [February 24, 2025](https://www.anthropic.com/news/claude-3-7-sonnet), four months before the cutoff. And Windsurf didn't invent the coding agent either. [Aider](https://github.com/Aider-AI/aider/releases/tag/v0.5.0) already existed in 2023, [Devin](https://cognition.com/blog/introducing-devin) was announced in March 2024 and [Cline](https://github.com/cline/cline/releases/tag/v2.0.0) started as Claude Dev in July 2024. As for "sucking it out of the telemetry", I didn't find any evidence, and [Anthropic's commercial terms](https://www.anthropic.com/legal/commercial-terms) say "Anthropic may not train models on Customer Content from Services". You can distrust the contract, of course, but then you need proof, and the article brings none.

**My verdict.** The cutoff with less than five days' notice is real and it was ugly. The "industrial espionage" is an accusation without proof, and the order of events works against it.

## Mechanism 3, harness detection

The name he gave it was "Silent inspection and sabotage of harnesses". The article says that in a scandal called the "Anthropic Billing Controversy", in May 2026, people found out Anthropic was scanning prompts, headers and requests to find competing harnesses, and when it found one it changed the billing, blocked usage on the plan or killed `claude -p`.

This is the one with the most truth in it.

**What happened.** On April 25, 2026, a user opened [issue #53262 on the Claude Code GitHub](https://github.com/anthropics/claude-code/issues/53262) showing that the string `HERMES.md` in a commit message made Claude Code send requests to extra usage billing instead of the plan. He spent US$ 200.98 in extra usage with only 13% of his Max 20x weekly limit used, and support replied that it didn't refund "technical errors that result in incorrect billing routing". Theo Browne reproduced it with an empty repository and the word OpenClaw in a JSON file ([GIGAZINE](https://gigazine.net/gsc_news/en/20260501-claude-code-ban-openclaw/)). Boris Cherny closed the issue saying it was "an overactive anti-abuse system", and Thariq, from the Claude Code team, admitted it was a bug "with the 3rd party harness detection and how we pull git status into the system prompt", with a refund and an extra month of credit ([GIGAZINE](https://gigazine.net/gsc_news/en/20260430-hermes-claude-code/), [Hacker News](https://news.ycombinator.com/item?id=47952722)). But the money only came back after the case blew up on Hacker News.

In other words, Anthropic really was looking for competing harness names in the `git status` that Claude Code itself puts into the prompt, it overcharged people who weren't even using those harnesses, and support refused refunds until it became a scandal. That's serious, and I'm not going to sugarcoat it.

**What the article distorts.** The backdrop is a pricing rule, not an independence rule. Since April 4, 2026, the subscription, which has a fixed price, no longer covers third-party harnesses like OpenClaw. Boris Cherny wrote that you could keep using those tools "via extra usage bundles (now available at a discount), or with a Claude API key" ([The Verge](https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban)). The [consumer terms](https://www.anthropic.com/legal/consumer-terms) already prohibited automated access outside the API key, and according to [The Register](https://www.theregister.com/ai-ml/2026/05/14/anthropic-tosses-agents-into-the-api-billing-pool/5240748) that rule dates from February 2024 and just wasn't enforced.

`claude -p` was never killed. In May Anthropic announced that programmatic usage would get a separate balance starting June 15, and on June 16 it [backed off](https://the-decoder.com/anthropic-backs-off-unpopular-billing-overhaul-as-price-war-with-openai-looms/). And most importantly, having your own harness call Claude through the API and pay per token was never prohibited. The article says Anthropic sabotages anyone who wants independence, but what it actually did was stop the subscription's fixed price from being used outside its own tools.

**My verdict.** The keyword detection and the refusal to refund are real and deserved all the noise they made. The rest, the dates, the "headers", `claude -p` being killed and "your own harness gets sabotaged", doesn't match the sources.

## Mechanism 4, "sucking up alpha"

The title of this one was "sucking out the operational soul of companies". The thesis is that Anthropic's joint venture with Wall Street funds puts engineers inside companies to map their business secrets and train agents that then get sold to competitors, and that Bridgewater ditched the commercial labs precisely so it wouldn't get sucked dry.

**What's true.** The joint venture exists, and I read the announcement. On May 4, 2026, Anthropic announced, together with Blackstone, Hellman & Friedman and Goldman Sachs, an AI services company for mid-sized businesses, with Anthropic engineers working alongside them ([Anthropic](https://www.anthropic.com/news/enterprise-ai-services-company)). The US$ 1.5 billion figure comes from the Wall Street Journal, with about US$ 300 million from Anthropic, Blackstone and H&F and around US$ 150 million from Goldman ([Reuters](https://www.reuters.com/legal/transactional/anthropic-nears-15-billion-ai-joint-venture-with-wall-street-firms-wsj-reports-2026-05-04/)), and the Bridgewater study exists too. They fine-tuned Qwen3-235B and went from 78.2% to 84.7% accuracy on financial screening tasks, at 13.8 times lower cost ([Bridgewater AIA Labs](https://www.bridgewater.com/aia-labs/learning-to-replicate-expert-judgment-in-financial-tasks)).

**What the article makes up.** The phrase "sucking up alpha" didn't come from "market reports". It comes from Alex Karp, Palantir's CEO, who said on CNBC in July that the labs are "stealing the weights and alpha of my business" ([Mediaite](https://www.mediaite.com/media/tv/you-sound-pretty-angry-cnbc-anchor-left-stunned-as-palantir-ceo-blows-his-stack-during-wild-interview/), [Forbes](https://www.forbes.com/sites/josipamajic/2026/07/02/karp-says-frontier-ai-labs-are-stealing-enterprise-value-and-vcs-are-listening/)), and Palantir sells exactly the "sovereign" alternative. Conflict of interest again.

Bridgewater never said anywhere that it did this to stop Anthropic from sucking up its intelligence. The reason they give is different. They say an expert's judgment doesn't fit in a prompt, "the judgments that matter most are often the hardest to articulate", and that they chose Qwen3-235B because its fine-tuning is well studied. I also didn't find any evidence that Anthropic engineers train agents on a client's secrets to sell them to a competitor. The commercial contract says the opposite.

And this is where my opinion comes in, even if all of that were true. If you let an outside developer into your company to read your code without a proper contract, that's on you. In the United States this has a name, NDA, the non-disclosure agreement, and a lot of companies add an intellectual property clause and a non-compete clause on top. The non-compete isn't even valid in every state (in California it's banned in most cases), but the NDA is. It's like letting a stranger who knocked on your door into your house, and you wouldn't do that. Maybe it would be wrong for Anthropic to do it. Fine. But we live under capitalism, every company exists to make a profit, and whoever let them in without protecting themselves didn't do their homework. You can't call anyone the Evil Corp for that, since everybody everywhere does the same.

**My verdict.** The facts exist, but the story that ties them together is the author's own montage.

## Mechanism 5, the competing product clause

He called this one "The legal guillotine in the Terms of Service". The thesis is that the terms prohibit using the API to build a competing product, so when Anthropic launches something just like your product, you become a violator and it cuts you off.

**What's true.** The clause exists. The [commercial terms](https://www.anthropic.com/legal/commercial-terms), in section D.4, say the customer may not "access the Services to build a competing product or service, including to train competing AI models", and [Brookings published on March 12, 2026](https://www.brookings.edu/articles/what-happens-when-ai-companies-compete-with-their-customers/) an analysis by Mark MacCarthy saying Anthropic could use this clause against Cursor or any coding app, and that US antitrust law is unlikely to protect those who depend on the supplier. This is the article's most serious argument, and I agree the risk exists.

**What the article hides.** The same Brookings piece says that "Each of the major AI model providers has an explicit policy allowing them to disconnect competing AI app developers". So OpenAI and Google have the same clause, and it isn't an Anthropic thing. The article's step by step, where you build, it copies and then cuts you off, is a hypothesis. I didn't find a single case of a customer being cut off because Anthropic launched something similar. The only known cutoff is Windsurf's, with the stated reason being the OpenAI acquisition, and I found no news at all of Cursor being cut off, even though it competes directly with Claude Code.

And I'll go further. If I owned Anthropic, or any AI company, I'd have this clause too, because it's how you protect yourself from a competitor using your own tool. The others have something similar. OpenAI's terms prohibit "Use Output to develop models that compete with OpenAI" ([OpenAI](https://openai.com/policies/terms-of-use/)), and Gemini's say "You may not use the Services to develop models that compete with the Services" ([Google](https://ai.google.dev/gemini-api/terms)). Anthropic's is broader, that's true, because it talks about products or services and not only models. But the logic is the same.

And Anthropic has already used this clause for exactly that. In August 2025 it cut off OpenAI's own access to Claude, because engineers there were using Claude Code ahead of the GPT-5 launch ([TechCrunch](https://techcrunch.com/2025/08/02/anthropic-cuts-off-openais-access-to-its-claude-models/)). Notice that it's mechanism 4 in reverse, a competitor coming in through the tool, and the one who did its homework and protected itself was Anthropic.

**My verdict.** Real risk, a hypothesis with no concrete case, and it applies to any model provider.

## What Anthropic actually keeps from your code

Now the part the article should have explained and didn't. Yes, Anthropic receives and stores the code that goes through Claude. There's no way around it, since the model needs to see the code to work on it.

But it doesn't scan your repository. From what I read in the [Claude Code documentation](https://code.claude.com/docs/en/data-usage), local Claude Code sends what you write, what Claude answers and what the tools bring into the conversation, meaning the files it opens and the output of the commands it runs. A file it never opened stays on your machine. The exception is Claude Code on the web, which clones the repository onto an Anthropic machine.

And how much it keeps, from what I read in the Privacy Center, depends on your plan and the training toggle ([Privacy Center](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data)).

| What | Goes to Anthropic? | Training toggle off | Training toggle on |
|---|---|---|---|
| Your prompts and the responses | yes | 30 days, no training | up to 5 years, with training |
| Files Claude opens | yes | 30 days, no training | up to 5 years, with training |
| Command output | yes | 30 days, no training | up to 5 years, with training |
| Files it never opened (local) | no | n/a | n/a |
| Entire repository (Claude Code on the web) | yes | 30 days, no training | up to 5 years, with training |
| Thumbs up and `/feedback` | yes | 5 years | 5 years |
| Incognito chat | yes | no training | no training |
| Conversation flagged for a violation | yes | up to 2 years | up to 2 years |
| Commercial plan (Team, Enterprise, API) | yes | 30 days, no training | n/a |

Two things I think matter there. Turning off the toggle doesn't hide anything from Anthropic, since it still receives everything and keeps it for 30 days. It just doesn't train on it. And the thumbs up and `/feedback` bypass the toggle, so the whole conversation gets sent and stays there for five years. That's the kind of thing every dev should know, and it isn't in the article.

## Your company isn't just your code

Even with all that, there's something I want to say that is my own opinion, and I'm making it clear that it's opinion.

Your company isn't made of your code alone. Code is really important, and I'd say it's the engine of the company, but there's still the whole rest of the body. There's the infrastructure, the people, the relationship with your customers, the customers themselves and everything you built around it. If someone took your code tomorrow, they wouldn't take the contracts, the trust, the support, the team's knowledge of the business and the years of relationship with each customer along with it.

The article treats the code as if it were the whole company, and that's what makes the fear look so big.

And there's something else. These days it doesn't even take Anthropic reading your code to copy your project. In August 2026 an indie dev, FindTheNeedleDev, released the demo of Find the Needle on Steam, a game about finding the needle in a haystack. The game went viral, and before the final version came out there were already dozens of clones on Roblox and Fortnite, some with tens of thousands of players and making good money ([Plagiarism Today](https://www.plagiarismtoday.com/2026/09/17/the-attack-of-the-roblox-clones/)). Nobody needed his code. Watching the video was enough, and AI makes this kind of copying even faster ([How To Market A Game](https://howtomarketagame.com/2026/10/28/ai-cloners-are-here-are-indie-devs-cooked/)).

There are greedy, self-serving people out there, and a lot of people got rich exactly that way. It's brutal, but that's how the business world is, period. Your protection is what you build around the code.

## How I protect myself today

I'm against the fearmongering and I'm still careful. I have several locks, and none of them depend on trusting Anthropic.

- Training toggle off on my Ultra plan.
- No database passwords on my machine. The database is accessed through an AWS IAM profile that asks for my authentication every time. The AI doesn't have my password, it can't open the browser and log in for me, and its own guardrails stop it from trying.
- AWS IAM everywhere, which is what helps me the most to protect the code and the infrastructure.
- `deny` rules in the Claude Code config, so it stays out of certain places.
- A deploy script that forces every test to run, so the AI can't deploy without tests, even if it wanted to.

None of this is exotic. The `deny` rules and hooks are Claude Code's own configuration, and the rest is AWS. If you use another tool, the same ideas apply.

## The future I believe in is the model on your own hardware

If I had to pick the solution I like the most, it's running an open source model on your own hardware. Then you don't depend on any company, any cloud or anyone's data policy. The catch is that today it's still expensive and still behind the closed models.

I have 96 GB of RAM and I've never run a local model on my machine, but I've rented GPUs to test a few and run benchmarks, and I closely follow the tests [Akita on Rails](https://akitaonrails.com/2026/10/27/llm-benchmark-melhores-llms-open-source-hardware-caseiro/) runs on this. In the latest one, he spent over US$ 6,000 renting GPUs and landed on an open model, Qwen3.8 Flash-Next, which runs on an RTX 5090 and scored 91 on his coding test, against 92.5 for the best open models running on datacenter GPUs.

The overall numbers point the same way. Epoch AI measured that the price to reach the same level of performance drops [9 to 900 times per year](https://epoch.ai/data-insights/llm-inference-price-trends), depending on the benchmark, and that a single RTX 5090 runs models at the level that was the top [6 to 12 months earlier](https://epoch.ai/data-insights/consumer-gpu-model-gap). But the gap to the top is still big. On the Artificial Analysis index from October 2026, the best open-weights model sits [26 points behind the leader](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5). It's still expensive and it's still behind, but it's getting cheaper, and I believe the future is everyone with their own hardware running their own AI.

## So, is it the Evil Corp or not?

Before answering, do an exercise with me. Imagine you own Anthropic and think like a business owner, without playing the victim.

Wouldn't you want the dev who uses your product at home to bring it to work, the way Dropbox, Slack and Jira did? Wouldn't you put a clause in the contract so nobody uses your tool to build your competitor? And if your biggest rival were buying one of your customers, would you keep selling them capacity as if nothing had happened? I think most of the people complaining would do exactly the same things, and maybe worse.

So no, it isn't the Evil Corp. Anthropic is a private company that's now listed on the stock market and needs to grow, and it plays hardball. It cut off Windsurf with less than five days' notice, overcharged people because of a word in a commit and only gave the money back after the scandal, and it has a clause that leaves anyone who builds on top of it vulnerable. All of that is real and deserves criticism, but the same logic applies to OpenAI, Google and any company that size. That has a name, and the name is capitalism.

What I don't accept is taking those facts, mixing them with things that didn't happen and selling panic, especially when the person writing it sells the cure for the fear he created himself. The article gets the risk of depending on a single vendor right, and gets it badly wrong when it says Anthropic reads your code to copy your business.

If you use Claude, or any other AI, what I recommend is a lot less dramatic. Turn off the training toggle if you don't want your code used for training, put company code on a commercial plan, don't send secrets into the conversation, use `deny`, hooks and IAM, keep your product able to switch models, and keep an eye on local models, because they're coming.

And yes, I used Claude to research and put this post together, and I left every source linked above precisely so you don't have to trust me, him or Claude.

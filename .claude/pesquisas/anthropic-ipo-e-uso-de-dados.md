# Anthropic: IPO (S-1), estratégia e uso de dados

Pesquisa feita em 26/11/2026 com o workflow deep-research (103 agentes, 21 fontes lidas, 25 afirmações verificadas por 3 votos adversariais, 23 confirmadas e 2 derrubadas), mais uma busca manual sobre incidentes e processos. Conflito de interesse: a pesquisa foi feita e verificada por modelos Claude, da Anthropic. As políticas de dados citadas são autodeclaradas pela Anthropic e não têm auditoria independente conhecida.

## Resumo

The rumor's facts are real, but the reading put on them goes further than the evidence. Anthropic, PBC did file a public Form S-1 with the SEC on Oct 26, 2026, listing on Nasdaq as "ANT". The filing is on EDGAR under CIK 0002130357, followed by S-1/A amendments on Nov 2, 10 and 17 and an S-1MEF on Nov 18. It does describe a developer-led, land-and-expand go-to-market. Its own words are that individual users are "a top-of-funnel engine for our enterprise business", that Claude Code relationships "often begin with individual engineers", and that "by the time our direct teams engage a customer, Claude is often already in use". It also reports roughly 900% net revenue retention. That is the standard bottom-up SaaS playbook, disclosed openly. Nothing in the verified passages describes taking customer code, selling data, or locking customers in through their data. On data use, Anthropic's primary docs say it does not train on prompts or code sent under Commercial Terms (Team, Enterprise, API, Bedrock, Vertex, Gov) unless the customer opts in. Consumer accounts (Free, Pro, Max, Ultra) are different. Since the Aug 2025 change, their data, including Claude Code sessions, is used for training when the setting is on, and kept for 5 years in that case versus 30 days when off. Zero-data-retention exists, but only by negotiation and for eligible commercial or Enterprise organizations. This verification pass produced no evidence that Anthropic sold user data or reused customers' own code. The documented controversies are about scraped training data from the web, which the S-1 itself flags as a legal risk. Conflict of interest: the researcher is a Claude model made by Anthropic, and most data-policy sources are Anthropic's own self-descriptions, not independent audits.

## Achados verificados

### 1. (high, voto 3-0 (merged claims 0, 15, 17, 19))

An IPO prospectus exists and is public. Anthropic, PBC filed Form S-1 with the SEC on Oct 26, 2026, for Class A stock on the Nasdaq Global Select Market under ticker ANT. A confidential draft S-1 preceded it on Jun 1, 2026. Price range and share count were blank at filing. Amendments followed: S-1/A on Nov 2, Nov 10 and Nov 17, and an S-1MEF on Nov 18, 2026.

**Evidência:** Anthropic newsroom: "Today, Anthropic, PBC filed a registration statement on Form S-1 with the U.S. Securities and Exchange Commission." EDGAR's filing index independently lists the S-1 and its amendments. Fortune, NPR, TechCrunch and The New Stack covered it the same day. Quotes in the final report should come from the latest S-1/A or the final 424B prospectus, because a Nov 20 Anthropic headline suggests the IPO may have closed. That is unverified.

**Fontes:**
- https://anthropic.com/news/s1-sec
- SEC EDGAR CIK 0002130357, accession 0001628280-26-067168 (original S-1), 0001628280-26-068676 (S-1/A Nov 2), 0001628280-26-074338 (S-1/A No. 3 Nov 17)
- https://www.thenewstack.io/claude-codes-enterprise-20-to-1/
- https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/
- https://www.mlex.com/mlex/technology/articles/2544847/anthropic-says-privacy-concerns-a-pervasive-regulator-risk-as-ipo-looms

### 2. (high, voto 3-0 (claim 16); 2-1 on TechCrunch's API → Claude Code → Cowork framing (claim 20))

The S-1 openly describes developers and individual users as the top of the enterprise sales funnel, which is the passage people are quoting. Organic adoption by individual engineers, especially through Claude Code, comes first. Direct sales arrive later, when Claude is often already in use, and turn that into executive sponsorship and enterprise-wide rollout. Analysts call this land-and-expand, but the filing never uses that phrase.

**Evidência:** Verbatim from the S-1/A: "These users provide strategic value as a top-of-funnel engine for our enterprise business— individuals who utilize Claude for their personal work and then champion it inside their organizations." Also: "Claude Code is now embedded in software development workflows across major organizations, with these relationships often beginning with individual engineers who recognized the value of autonomous coding agents and accelerated adoption across their enterprises." Also: "By the time our direct teams engage a customer, Claude is often already in use. Our go-to-market teams use this organic momentum to build executive sponsorship and drive enterprise-wide adoption." Also: "Claude Code is now becoming the default choice inside many enterprise engineering organizations." A risk factor admits dependence on organic adoption and the risk that "competitors capture the individual users from whom our enterprise adoption often originates." EDGAR full-text search finds 0 hits for "land-and-expand" in the filing. The sentence "A business that starts with the API can deploy Claude Code to their engineers and then Cowork to their broader workforce" is TechCrunch's own analysis, not filing text, and the AWS/Uber comparison is also TechCrunch's. The TechCrunch headline uses the word "hooked", which colors how this gets read.

**Fontes:**
- SEC EDGAR S-1/A Amendment No. 3, anthropicpbc-sx1ax3.htm, section 'Our Approach to Claude Diffusion'
- https://www.thenewstack.io/claude-codes-enterprise-20-to-1/
- https://techcrunch.com/2026/10/26/anthropics-ipo-filing-reveals-its-strategy-for-keeping-enterprise-customers-hooked/

### 3. (high, voto 3-0 (claims 21, 22))

The S-1 metrics are what make the strategy sound aggressive. Net revenue retention was about 900% as of Sept 30, 2026, attributed to usage expansion as customers adopt agentic products like Claude Code. Over 50% of customers paying $100k+ (TTM) used both Claude Platform and at least one first-party app, up from about 30% in Q4 2025. These measure expansion and cross-selling, a disclosed revenue strategy. They are not evidence of data-based lock-in.

**Evidência:** S-1 verbatim: "This enables us to expand quickly with customers, as demonstrated by our Net Revenue Retention of approximately 900% as of September 30, 2026." Also: "We see this expansion as customers adopt agentic products like Claude Code." Also: "over 50% of our customers with $100,000 or more of revenue on a TTM basis used Claude Platform and at least one of our first-party applications, up from approximately 30% for the three months ended December 31, 2025." NRR is defined as Qualified Customers' current-period revenue over the same quarter a year earlier, and it excludes Pro/Max subscribers. Morningstar cites an analyst who expects it to fall sharply. These figures are self-reported.

**Fontes:**
- https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm
- https://techcrunch.com/2026/10/26/anthropics-ipo-filing-reveals-its-strategy-for-keeping-enterprise-customers-hooked/

### 4. (high, voto 3-0 (claim 18))

The S-1 risk factors admit legal exposure over scraped training data. That exposure concerns public web, book and other collected data, not customers' own prompts or code. Anthropic says it may be unable to verify whether scraped material is protected by privacy or IP law. It cites Reddit v. Anthropic as pending, and MLex reports the filing flags privacy as a pervasive regulatory risk.

**Evidência:** Verbatim: "To collect publicly available information, we utilize web scraping or web crawling techniques, book scanning, and other methods... our efforts may not always be successful. Further, we may not be able to verify whether information collected using such techniques is protected under privacy, copyright, or other intellectual property laws in certain cases..." Also: "Claims of allegedly illegal scraping and web crawling techniques may be extremely broad, and it may not be possible for us to conduct our business in such a way as to avoid all such claims." Reddit v. Anthropic was remanded to state court on Mar 30, 2026. This is hedged, standard risk-factor language, and it covers training-data sourcing, not misuse of customer data.

**Fontes:**
- SEC EDGAR S-1/A accession 0001628280-26-068676 (Nov 2, 2026), risk factors
- https://www.mlex.com/mlex/technology/articles/2544847/anthropic-says-privacy-concerns-a-pervasive-regulator-risk-as-ipo-looms

### 5. (high, voto 3-0 (claims 1, 4))

Under commercial terms (Team, Enterprise, API, third-party platforms such as Bedrock and Vertex, and Claude Gov), Anthropic says it does not train generative models on code or prompts sent to Claude Code unless the customer opts in, for example through the Development Partner Program. That program exists only on Anthropic's first-party API. The Aug 2025 consumer change explicitly excluded these services.

**Evidência:** Docs verbatim: "Commercial users: (Team and Enterprise plans, API, 3rd-party platforms, and Claude Gov) maintain existing policies: Anthropic does not train generative models using code or prompts sent to Claude Code under commercial terms, unless the customer has chosen to provide their data to us for model improvement (for example, the Developer Partner Program)." From the Aug 28, 2025 post, the updates "do not apply to services under our Commercial Terms, including Claude for Work, Claude for Government, Claude for Education, or API use, including via third parties such as Amazon Bedrock and Google Cloud's Vertex AI." Not being trained on does not mean not stored. Transcripts sent through /feedback, /bug or /share are kept for 5 years and may be used to improve products. This is Anthropic's self-declared policy and has not been independently audited.

**Fontes:**
- https://code.claude.com/docs/en/data-usage
- https://anthropic.com/news/updates-to-our-consumer-terms

### 6. (high, voto 3-0 (claims 2, 3, 5))

Consumer plans (Free, Pro, Max, Ultra), including Claude Code used from those accounts, do feed training when the model-improvement setting is on. Data is kept 5 years with the setting on and 30 days with it off. Deleted conversations are not used for future training. The change was announced Aug 28, 2025, applied to new or resumed chats and coding sessions, and gave existing users until Oct 8, 2025 to choose.

**Evidência:** Docs: "We will train new models using data from Free, Pro, Max, and Ultra accounts when this setting is on (including when you use Claude Code from these accounts)." Also: "Users who allow data use for model improvement: 5-year retention period" and "Users who don't allow data use for model improvement: 30-day retention period." From the 2025 post: "These updates apply to users on our Claude Free, Pro, and Max plans, including when they use Claude Code from accounts associated with those plans" and "If you delete a conversation with Claude it will not be used for future model training." The setting is chosen at a consent prompt, so it is not a strict default-off opt-in. Data already used stays in models trained before an opt-out. The setting lives at claude.ai/settings/data-privacy-controls. Claude Code also keeps plaintext transcripts locally under ~/.claude/projects/ for 30 days by default, configurable with cleanupPeriodDays. This local-retention detail comes from a verifier note; the claim that bundled it was refuted 1-2, so treat it as medium confidence.

**Fontes:**
- https://code.claude.com/docs/en/data-usage
- https://anthropic.com/news/updates-to-our-consumer-terms

### 7. (high, voto 3-0 (claims 6, 7, 8, 9))

Zero Data Retention is available but narrow. Claude Code ZDR on Enterprise is not part of the standard plan, cannot be enabled from admin settings, and is switched on per organization by Anthropic after an eligibility check. Separately, Legacy ZDR can cover Claude Code used with Commercial-organization API keys. In both cases, metrics and usage stats, flagged content (up to 2 years) and legal holds are exempt. Personal logins or another org's keys are not covered. Consumer plans, the Console, Managed Agents (unless self-hosted) and Teams/Enterprise chat interfaces are not ZDR-eligible.

**Evidência:** Verbatim: "When ZDR is enabled, prompts and model responses generated during Claude Code sessions are processed in real time and not stored by Anthropic after the response is returned, except where needed to comply with law or combat misuse." Also: "ZDR is not included in the standard Claude for Enterprise plan and cannot be enabled from your admin settings. It is available to qualified accounts and requires separate enablement by Anthropic." Also: "Legacy ZDR applies when Claude Code is used with API keys from a Commercial organization ... If metrics logging is enabled in Claude Code, productivity data such as usage statistics is exempted from Legacy ZDR and may be retained." Not covered: "Claude Free, Pro, Max, and Ultra plans, including when customers on those plans use Claude's web, desktop, or mobile apps or Claude Code." The managed settings forceLoginMethod and forceLoginOrgUUID can force sessions into the ZDR org. Under ZDR, cloud sessions, Remote Control and /feedback are disabled. Bedrock, Vertex and Foundry follow their own platform retention policies. Some Covered Models (Fable/Mythos 5.x) require 30-day retention.

**Fontes:**
- https://code.claude.com/docs/en/zero-data-retention.md
- https://platform.claude.com/docs/manage-claude/api-and-data-retention

### 8. (high, voto 3-0 (claims 10-14))

Competitors draw the same paid-versus-free line, and in places Google's free tier is more permissive than Anthropic's. OpenAI has not trained on API data by default since Mar 1, 2023, unless the customer opts in, and keeps abuse-monitoring logs for up to 30 days. Google's free Gemini API and AI Studio (Unpaid Services) use prompts and responses to improve products, human reviewers may read them, and Google tells users not to submit confidential data. On paid Gemini tiers Google does not use prompts to improve products but still logs them for abuse detection, and keeps Search-grounding data for 30 days.

**Evidência:** OpenAI: "As of March 1, 2023, data sent to the OpenAI API is not used to train or improve OpenAI models (unless you explicitly opt in to share data with us)." Also: "abuse monitoring logs are ... retained for up to 30 days, unless longer retention is required by law." Google Unpaid: "Google uses the content you submit to the Services and any generated responses to provide, improve, and develop Google products..." and "human reviewers may read, annotate, and process your API input and output. ... Do not submit sensitive, confidential, or personal information to the Unpaid Services." Google Paid: "Google doesn't use your prompts (including associated system instructions, cached content, and files) or responses to improve our products." In the EEA, Switzerland and the UK, paid-style protections apply to all Gemini services. Not verified in this pass: the 2025 NYT v. OpenAI preservation order, which forced OpenAI to keep API logs beyond 30 days. That was a legal hold, not training.

**Fontes:**
- https://developers.openai.com/api/docs/guides/your-data
- https://ai.google.dev/terms (redirects to https://aistudio.google.com/docs/terms, effective Mar 23, 2026)

### 9. (medium, voto Synthesis of 3-0 claims; the 'no evidence of misuse' part rests on absence of findings, not on a dedicated verified search)

Verdict, synthesized from the findings above. Documented fact: a public S-1 openly describes a developer-first, bottom-up enterprise strategy with very high expansion metrics, and consumer-plan data, Claude Code included, is used for training when the setting is on, with 5-year retention. Legitimate concern: vendor lock-in through workflow embedding, which the S-1 discloses as strategy; consumer-tier retention and training; telemetry and metrics that are exempt from ZDR; and the narrow, negotiated availability of ZDR. Unsupported: claims that Anthropic sells user data, stores customer source code to steal architecture, or locks customers in through their data. This verification pass surfaced no lawsuit, regulatory action or investigative report supporting those claims. Practical steps: use Commercial Terms access (Team/Enterprise/API, or Bedrock/Vertex) rather than personal Pro/Max accounts for company code. If on a consumer plan, turn off model improvement. Negotiate ZDR and enforce forceLoginMethod and forceLoginOrgUUID. Disable metrics logging if ZDR matters. Avoid /feedback, /bug and /share with sensitive code. Shorten local retention with cleanupPeriodDays. Review which MCP servers and integrations receive data.

**Evidência:** Taken together, the findings above show an aggressive but openly disclosed commercial strategy and data rules that depend on the account tier. None of the 23 verified claims shows data sales or reuse of customer code. The controversies that do exist (Reddit v. Anthropic, the S-1 scraping risk factor, and the authors' copyright settlement mentioned in the research question but not verified here) concern training-data sourcing, not customers' own data.

**Fontes:**
- https://code.claude.com/docs/en/data-usage
- https://code.claude.com/docs/en/zero-data-retention.md
- https://platform.claude.com/docs/manage-claude/api-and-data-retention
- SEC EDGAR Anthropic PBC S-1 / S-1/A

## Afirmações derrubadas na verificação

- (1-2) Commercial users have a standard 30-day retention period. Zero data retention exists only for qualified Claude for Enterprise accounts and is not included by default: the account team turns it on per organization. Claude Code also keeps session transcripts locally in plaintext under ~/.claude/projects/ for 30 days by default. Fonte: https://code.claude.com/docs/en/data-usage
- (0-3) Anthropic's API docs commit that retained data is not used for model training without the customer's express permission, and that conversation content (prompts and outputs) is not retained by default. The exception is 'Covered Models', which require 30-day retention. This is Anthropic's own primary-source statement, so it is self-reported and has not been independently audited. Fonte: https://platform.claude.com/docs/manage-claude/api-and-data-retention

## Ressalvas

Conflict of interest: the researcher and all verifiers are Claude models made by Anthropic. Most data-use evidence is Anthropic's own documentation, which shows what the policy says, not whether the company follows it in practice. No independent audit was found. Gap in coverage: no verified claim directly addresses question 3, meaning lawsuits, regulatory actions, breaches or investigative reporting about misuse of customer data. The statement that there is "no evidence" of data sales or code reuse therefore reflects what this pass found, not an exhaustive search. The authors' copyright settlement (Bartz) and the details of Reddit v. Anthropic were not independently verified here, except as cited inside the S-1. Time sensitivity: the S-1 has been amended three times and the IPO may have priced around Nov 18-20, 2026, so final figures should be checked against the 424B prospectus. Policies change often; Anthropic docs and Google terms were fetched on 2026-11-26. The New Stack page returned 403, so its wording came from a search snippet, though the S-1 text confirms the substance. TechCrunch's "hooked" headline and its API → Claude Code → Cowork sequence are editorial framing, not filing text (2-1 vote). Two claims were refuted and excluded: one bundling commercial 30-day retention with local transcript storage (1-2), and one saying Anthropic API docs promise no retention of conversation content by default (0-3). So the precise default retention for commercial API use should be stated carefully, and the 30-day figure attributed to the docs page only after rechecking it. NRR of 900% excludes Pro/Max subscribers and comes from a low base, and analysts expect it to fall.

## Perguntas em aberto

- Is there any lawsuit, regulator action (FTC, EU DPAs, ANPD in Brazil), security incident or credible investigation alleging that Anthropic misused, leaked or sold customers' own prompts or code? This needs a dedicated search; this pass did not cover it.
- What is Anthropic's exact default retention for commercial API and Claude Code data under Commercial Terms in Nov 2026? The claim stating 30 days was refuted 1-2, so the figure needs re-verification.
- Does the final 424B prospectus or the latest S-1/A contain additional language on switching costs, customer data use or contractual lock-in, beyond the go-to-market passages verified here?
- What telemetry does Claude Code send by default (Statsig/Sentry-style metrics, error reporting), and which environment variables disable it? The current docs were not verified in this pass.

## Busca complementar: incidentes e processos (feita à mão depois do workflow)

Nenhum processo, multa ou reportagem encontrada mostra a Anthropic vendendo dados ou reutilizando código de clientes. O que existe:

- **Bartz v. Anthropic.** Acordo de US$ 1,5 bilhão com autores por baixar cerca de 482 mil livros de bibliotecas piratas (LibGen, Pirate Library Mirror) para treino. Aprovação preliminar em set/2025 (juiz Alsup), final em 20/07/2026 (juíza Martínez-Olguín). O juiz Alsup já tinha decidido que treinar com livro comprado legalmente é fair use, e o problema era a pirataria. Fontes: https://www.fortune.com/2026/07/21/anthropic-copyright-settlement-authors/ , https://www.jurist.org/news/2026/07/judge-approves-record-1-5-billion-settlement-involving-anthropic/
- **Reddit v. Anthropic.** Raspagem do Reddit, devolvido à justiça estadual em 30/03/2026, ainda em andamento (citado no próprio S-1).
- **Vazamento do código-fonte do Claude Code (31/03/2026).** Um `.npmignore` faltando publicou cerca de 512 mil linhas do TypeScript do Claude Code no npm. Era código da Anthropic. A empresa disse que nenhum dado ou credencial de cliente foi exposto e que foi erro humano de empacotamento. Houve um caso parecido em fev/2025. A Anthropic derrubou mais de 8 mil cópias no GitHub por DMCA (WSJ). Fontes: https://www.pymnts.com/cybersecurity/2026/anthropic-says-claude-code-leak-did-not-expose-customer-data/ , https://fortune.com/2026/03/31/anthropic-source-code-claude-code-data-leak-second-security-lapse-days-after-accidentally-revealing-mythos
- **Arquivo enviado por terceirizado.** Um terceirizado mandou um arquivo com dados para um terceiro não autorizado. Segundo a Anthropic, sem dados pessoais sensíveis, sem dados bancários e sem prompts ou respostas. Data não ficou clara nas fontes. Fonte: https://www.techradar.com/pro/security/anthropic-confirms-it-suffered-a-data-leak-ai-wunderkid-says-human-error-behind-customer-info-breach
- **Acesso não autorizado ao modelo Mythos (abr/2026).** Por meio de um sistema de terceirizados (Bloomberg, via outras fontes).
- **Processo de editoras de música de US$ 3 bilhões (2026).** Só achei numa fonte fraca (ai2.work), não confirmado.

## Passos práticos para limitar exposição no Claude Code

1. Código de empresa só em conta comercial (Team, Enterprise, API, Bedrock, Vertex), não em conta pessoal Pro/Max/Ultra.
2. Em plano pessoal, desligar a opção de melhoria do modelo em claude.ai/settings/data-privacy-controls (retenção cai de 5 anos para 30 dias).
3. Não mandar código sensível por `/feedback`, `/bug` ou `/share` (guardado 5 anos).
4. Em empresa, negociar ZDR e travar o login com `forceLoginMethod` e `forceLoginOrgUUID` nas managed settings.
5. Desligar logging de métricas se ZDR for importante (métricas ficam fora do ZDR).
6. Revisar quais MCPs e integrações recebem dados.
7. Encurtar a retenção local de transcrições com `cleanupPeriodDays`.

## Fontes lidas pelo workflow

- [primary] https://anthropic.com/news/s1-sec
- [secondary] https://www.thenewstack.io/claude-codes-enterprise-20-to-1/
- [secondary] https://www.mlex.com/mlex/technology/articles/2544847/anthropic-says-privacy-concerns-a-pervasive-regulator-risk-as-ipo-looms
- [secondary] https://fortune.com/2026/10/26/anthropic-s1-risk-factors-existential-risk-pentagon-dario-amodei/
- [blog] https://dev.to/akaranjkar08/anthropic-ipo-965b-s-1-filed-what-developers-need-to-know-5h2b
- [secondary] https://techcrunch.com/2026/10/26/anthropics-ipo-filing-reveals-its-strategy-for-keeping-enterprise-customers-hooked/
- [secondary] https://www.vktr.com/ai-market/anthropic-files-public-s1-with-900-net-revenue-retention/
- [blog] https://saastr.com/5-interesting-learnings-from-anthropics-s-1-at-16-3-billion-in-half-year-revenue-900-nrr-6-6m-in-revenue-per-employee-and-a-10-adjusted-operating-margin
- [secondary] https://www.forrester.com/blogs/anthropics-proposed-ipo-will-change-the-economics-of-enterprise-ai/
- [secondary] https://www.deeplearning.ai/the-batch/anthropic-opens-its-books/
- [blog] https://dev.to/tyson_cung/anthropics-ipo-unpacked-what-the-s-1-filing-means-for-ai-developers-4pej
- [primary] https://code.claude.com/docs/en/data-usage
- [primary] https://anthropic.com/news/updates-to-our-consumer-terms
- [primary] https://code.claude.com/docs/en/zero-data-retention.md
- [primary] https://platform.claude.com/docs/manage-claude/api-and-data-retention
- [unreliable] https://www.mlex.com/mlex/articles/2548285
- [secondary] https://courthousenews.com/articles/chatbot-user-files-class-action-against-anthropic-over-biometric-data-policy
- [blog] https://simonwillison.net/2025/Jun/5/openai-court-order
- [primary] https://developers.openai.com/api/docs/guides/your-data
- [primary] https://ai.google.dev/terms
- [primary] https://developers.google.com/gemini-code-assist/resources/privacy-notice-gemini-code-assist-individuals

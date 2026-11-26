# Padrões de texto de IA: achados brutos da pesquisa

Pesquisa de 26/11/2026 (workflow ai-writing-tells-research, 8 agentes, 160 padrões). A versão consolidada e revisada está em `.claude/skills/escrever-post-blog/references/padroes-ia.md`. Este arquivo guarda os achados brutos de cada linha de pesquisa, com exemplos e fontes, para consulta.

## Linha de pesquisa: academic-stylometry

**Notas do pesquisador:** I pulled 22 patterns from academic and quantitative sources, and 9 of them (marked "new") are not in the covered list yet. Several sources point the opposite way from things the skill already says, so the skill should be adjusted on these:

1. **Passive voice.** Reinhart et al. (PNAS 2025) found GPT-4o uses agentless passive at about half the human rate, while TextPulse found AI rewrites add passive voice. A blanket "avoid passive" rule is not backed by data. The stronger levers are nominalizations and gerund tails.
2. **Repeated sentence openings.** TextPulse measured humans repeating openers 2.7x more than AI (7.2 vs 2.7 per 100 transitions). The covered rule should target formulaic anaphora only, not plain repetition of "eu" or of a noun. Synonym cycling is the actual AI tell.
3. **Lexical diversity.** Older GPT-3.5 studies in the survey say AI is less diverse, but every 2025-2026 study I read (TextPulse, Graphite, Style of Machines PT-BR, the NILC PT-BR paper) finds current models more diverse within a text.
4. **Commas and semicolons.** Results go both ways: TextPulse rewrites add commas (62.7→71.2 per 1k words), GPT novels use fewer. Semicolons are lower for GPT and higher for Claude Opus 4.5 in the prose-check sample. Keep Joao's no-semicolon rule as a personal style rule, not a measured one.
5. **Em dash.** It is now model- and version-specific. Graphite says Claude Opus 5 is at about the human rate and GPT-6 Astra at one-eighth. But GPT translations into PT/ES inject 25-27 per 1k tokens, so the translation step of the pipeline is where dashes most need checking.
6. **Word lists go stale.** Hubarava & Ineichen (arXiv 2610.26008) show "delve" and "insight" rising and then falling, and Graphite finds 65% of tells are unique to one model family. Structural levers (rhythm, nominalization, voice markers, gerund tails) are more durable than word blacklists.

**PT-specific evidence is thin.** The only peer-reviewed PT-BR stylometric sources I opened are the NILC/USP EPIA 2026 fake-news paper (Sabiá-3, news genre), the 12-text Style of Machines ACL paper, and the WebMedia 2025 Reddit paper (abstract and methods only, I did not reach the results tables). The contractions and function-word mappings to PT ("pra", "tá", "porque", "ia") are my inference from English data. The PT connective baselines come from one practitioner site (semlerolero.com.br), not a peer-reviewed study.

**How I read the sources:**
- Opened in full or substantially: TextPulse fingerprints, Graphite AI Tells, the Terčon & Dobrovoljc survey (arXiv 2510.05136), Russell et al. (arXiv HTML, through a summarizing fetch), Hubarava abstract and intro, the EPIA PT paper intro, and the WebMedia paper intro and methods.
- Read through long search highlights rather than a full fetch: Reinhart PNAS, Kobak in PMC, Style of Machines, Freeburg (arXiv 2603.27006), arXiv 2608.12630, the TextPulse burstiness page, Pangram's signs page, semlerolero, humanizartexto, Exame, Fast Company Brasil, and the prose-check GitHub stats.
- Liang et al. (arXiv 2403.07183): I did not open the primary paper. The commendable / meticulous / intricate ratios come from secondary pages that quote it.
- Juzek & Ward "focal words" (a 50-269x figure is quoted by cpdf.ai): not verified, so I left it out.
- Some 2026 sources (Graphite, TextPulse, Pangram) are detector vendors, not peer-reviewed. Their numbers are measured but self-published.

**For the skill itself:** the content runs on Claude, so the Claude-specific tells in the Graphite data deserve priority: "genuinely", "single most", "less like a _ and more like", "matters because", "deliberate/steady/measured", colon overuse.

**Memory:** I used none, apart from noting the stored feedback that blog drafts should be shown as rendered markdown. Nothing new to save.

### Gerund/participle clause pile-up (oração reduzida de gerúndio) [measured] (pt/en/es, sentence, adds-evidence-to-covered)

Instruction-tuned LLMs attach present-participle clauses to the main clause far more often than humans do. In PT this shows up as gerund tails and stacks: ', permitindo que...', ', garantindo...', ', tornando...'. Each one adds a second claim nobody asked for. Split it out or make it a finite verb with a subject ('e isso fez...', 'aí eu consegui...').

- Errado: Migrei o pipeline para o harness, reduzindo o tempo de build e permitindo que o time focasse no produto, garantindo entregas mais rápidas.
- Certo: Migrei o pipeline pro harness e o build caiu de 8 pra 3 minutos, o resto do ganho eu ainda não sei medir.
- Evidência: Reinhart et al. (PNAS 2025): instruction-tuned models use present participial clauses at 2 to 5 times the human rate, GPT-4o at 5.3x. Llama base models stay close to human rates, so instruction tuning causes the shift.
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122

### Nominalization density (-ção, -mento, -dade) [measured] (pt/en/es, vocabulary, new)

LLMs pack actions into nouns ('a implementação de', 'a otimização do', 'a redução da') where a person would use a verb with a subject, usually 'eu'. This is the 'noun-heavy, informationally dense' register. If a sentence has more than one -ção/-mento/-dade noun, turn at least one into a verb.

- Errado: A implementação da migração possibilitou a redução do tempo de execução e a melhoria da manutenibilidade.
- Certo: Quando eu migrei, os testes ficaram mais rápidos e mexer no código ficou menos chato.
- Evidência: Reinhart et al.: nominalizations at 1.5 to 2x the human rate, GPT-4o at 2.1x. TextPulse paired study (60,786 human texts vs AI rewrites, 8 models): nominalizations go from 58 to 75 per 1,000 words (Cohen's d = 1.12). Terčon & Dobrovoljc survey of 44 studies: AI text has more nouns, determiners and adpositions.
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122, https://textpulse.ai/research/ai-style-fingerprints, https://arxiv.org/pdf/2510.05136v1.pdf

### Paired nouns and adjectives joined by 'e' (phrasal coordination) [measured] (pt/en/es, structure, new)

LLMs keep producing 'X e Y' pairs of nouns or adjectives ('rápido e confiável', 'segurança e escalabilidade', 'claro e objetivo'). This is a separate thing from the triad: the pair is a 2-item version that sounds balanced and says little. Keep the one word that is true. Humans in PT coordinate verbs instead, chaining actions with 'e... e...'.

- Errado: O setup ficou mais simples e eficiente, com mais segurança e escalabilidade.
- Certo: O setup ficou menor, eu apaguei uns doze comandos e ninguém sentiu falta.
- Evidência: Reinhart et al.: GPT-4o uses phrasal coordination at 1.9x the human rate. Andrade, Silva & Pardo (NILC/USP, EPIA 2026), 5,391 paired PT-BR human vs Sabiá-3 texts: machine text has more ADJ-conj-e (d=0.512) and NOUN-de-NOUN-conj-e chains (d=0.484). Human text has more triple VERB coordination with 'e', an 'informal, additive listing style'.
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf

### Formal adversative 'mas/porém/contudo' scaffolding (PT) [measured] (pt, sentence, new)

In PT-BR, machine text marks contrast explicitly over and over ('X, mas Y'; 'porém'; 'contudo'; 'no entanto'), which builds a staged argument structure. Human PT moves forward by adding things ('e aí', 'e', 'daí') more often than by setting up a contrast. Keep one 'mas' where there really is a turn and add the rest with 'e'.

- Errado: O Claude Code faz quase tudo sozinho, mas ainda tem limites. Porém, isso não é um problema, contudo exige atenção.
- Certo: O Claude Code faz quase tudo sozinho e eu fui desligando meus comandos um por um, sobrou o de deploy que eu não confio nele pra rodar.
- Evidência: Andrade, Silva & Pardo (EPIA 2026): VERB-conj-mas is the strongest machine-side dependency pattern (d = 0.632), read as 'argumentative structure with explicit contrast marking'. Human texts favour additive 'e' chains.
- Fontes: https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf

### Flat sentence rhythm (low burstiness) [measured] (pt/en/es, rhythm, adds-evidence-to-covered)

AI text drifts to a run of medium-length sentences. Models cut the longest sentences and almost entirely remove the short, blunt ones. Humans swing between a long sentence chained with commas and a short one. This sharpens Joao's rule 4: the fix is not 'longer sentences everywhere'. Mix one long comma-chained sentence with an occasional very short one, and don't make paragraphs the same size.

- Errado: Eu usava um workflow com vinte comandos. Ele funcionava bem na maior parte do tempo. Com o tempo, o harness evoluiu bastante. Hoje boa parte disso ficou desnecessária.
- Certo: Eu tinha um workflow com vinte comandos e uns quarenta agentes que eu fui empilhando ao longo de um ano, cada um pra tapar um buraco que o Claude Code tinha na época, e aí veio a atualização do harness e metade disso virou peso morto. Apaguei.
- Evidência: TextPulse burstiness study (60,779 pairs): sentence-length CV is 0.449 for humans and 0.376 for AI rewrites, 79.3% of rewrites come out flatter, and SD drops from about 12.0 to 9.4 words. Every one of the 8 models flattens, with an 8x spread between them (DeepSeek -0.234, Grok -0.032). Graphite (10k human vs 90k AI articles, 9 models): sentence-length SD is much lower in AI. Muñoz-Ortiz et al. 2024: human news has 'more scattered sentence length distributions'. Desaire 2023 and Zindela 2023 (via survey): AI sentence lengths vary less.
- Fontes: https://textpulse.ai/research/ai-burstiness-sentence-length, https://graphite.io/research/ai-tells, https://link.springer.com/article/10.1007/s10462-024-10903-2, https://arxiv.org/pdf/2510.05136v1.pdf

### Too many periods / chopped sentences in PT and ES [measured] (pt/es, punctuation, adds-evidence-to-covered)

In PT-BR and ES, GPT writes shorter sentences with more periods than human writers in those languages. Human Romance-language prose chains clauses with commas. This also hits translation: a PT→ES or EN→PT pass by the model adds periods. After translating, check the period rate and re-join fragments with commas.

- Errado: Criei um workflow com 20 comandos. Hoje o Claude Code faz quase tudo sozinho. O que mudou no harness e o que eu ainda uso por fora.
- Certo: Criei um workflow com 20 comandos e 45 agentes e hoje o Claude Code faz quase tudo sozinho, então resolvi contar o que mudou no harness e o que eu ainda uso por fora
- Evidência: 'The Style of Machines' (ACL Anthology, StyGenAI 2026), GPT-4o vs human in EN/PT-BR/ES: GPT translations use more periods than human ones (PT 108.2 vs 86.7 per 1k tokens, ES 105.1 vs 95.8). In original writing the ES human mean sentence is 19.6 words vs 8.9 for GPT, and PT-BR GPT originals also have shorter sentences. The corpus is small (12 texts), so treat this as directional.
- Fontes: https://aclanthology.org/2026.stygenai-1.5.pdf

### Translation pass injects em dashes [measured] (pt/es/en, translation, adds-evidence-to-covered)

When GPT translates, it adds em dashes at very high rates in PT and ES, even when the source has none. Since posts are written in PT and then machine-translated to EN/ES, the translated versions need their own dash check. Replace each dash with a comma, a parenthesis or a period.

- Errado: El harness cambió todo — y la mayoría de mis comandos — dejaron de tener sentido.
- Certo: El harness cambió bastante y la mayoría de mis comandos dejaron de tener sentido.
- Evidência: Style of Machines (ACL 2026): human translators score 0.0 em dashes per 1k tokens in all three languages. GPT-4o translations score 10.1 (EN), 27.3 (PT) and 25.3 (ES), and GPT originals 12.5 (EN), 9.5 (PT-BR) and 2.9 (ES). The authors call the em dash 'the single most discriminating feature'. Freeburg 2026 (arXiv 2603.27006): telling models 'no markdown' wipes out lists and bold but leaves em dashes in GPT-4.1 (10.62→9.10 per 1k words). In Claude Opus 4.6 the same instruction cuts them 98%.
- Fontes: https://aclanthology.org/2026.stygenai-1.5.pdf, http://arxiv.org/abs/2603.27006

### Low punctuation variety (only commas and periods) [measured] (pt/en/es, punctuation, new)

AI text uses a narrower set of punctuation marks, mostly commas and periods. Human text mixes in parenthetical asides, question marks, exclamation marks, quotes and ellipses. Joao's rule against parenthetical TITLES still holds, but in the body a real aside in parentheses '(sim, eu sei que isso é gambiarra)' or a '!' reads human. Use them sparingly and for real asides.

- Errado: Esse hook roda antes de cada commit. Ele valida o lint. Isso evita retrabalho.
- Certo: Esse hook roda antes de cada commit e valida o lint (demorei uns três meses pra perceber que dava pra fazer isso), funciona!
- Evidência: Andrade, Silva & Pardo (PT-BR, EPIA 2026): punctuation diversity is the single most human-discriminative NILC-Metrix feature (δ = +0.725). Graphite 2026: human writers use exclamation marks 'more than a hundred times as often' as each current model and use far more parenthetical asides. Survey (Terčon & Dobrovoljc, citing Desaire 2023 and Simon 2023): AI text has fewer question marks, dashes, parentheses, semicolons and colons and is dominated by commas and periods. Russell et al. (ACL 2025) experts: humans show 'a mix of dashes, brackets, and quotes'.
- Fontes: https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://graphite.io/research/ai-tells, https://arxiv.org/pdf/2510.05136v1.pdf, https://arxiv.org/abs/2501.15654

### Voice markers stripped: first person, contractions, questions [measured] (pt/en/es, voice, adds-evidence-to-covered)

The most one-sided measured change in AI rewriting is the removal of the writer: first person is cut in half, contractions nearly disappear, and questions and exclamations drop. PT equivalents: 'eu', 'meu', 'a gente', 'pra', 'tá', 'tô', 'né', and real questions to yourself ('será que valia a pena?'). Put them back in at a natural rate. Don't put one in every sentence.

- Errado: A adoção do harness tornou o workflow anterior obsoleto. É possível manter alguns comandos externos.
- Certo: Depois que eu passei pro harness novo meu workflow antigo ficou meio inútil, sinceramente, tô usando só uns dois comandos meus ainda, será que vale manter?
- Evidência: TextPulse fingerprints (60,786 pairs): first person falls from 4.34 to 2.19 per 1,000 words (-50%, up in only 9.0% of pairs). Contractions fall from 0.32 to 0.15 and go up in only 0.9% of pairs, 'the most one-sided change in the corpus'. Questions fall from 0.34 to 0.22 per 1k. Graphite: human tells include first person ('we're going to'), direct address ('did you know'), casual qualifiers ('pretty', 'sort of'), personal experience ('my favorite', 'last year'). Tobias & Couto da Silva (WebMedia 2025, PT-BR Reddit, ChatGPT/Gemini/Sabiá vs humans): human comments are 'more concise, diverse, and include personal experiences'. Contraction data is English, and the PT contraction equivalents are my inference.
- Fontes: https://textpulse.ai/research/ai-style-fingerprints, https://graphite.io/research/ai-tells, https://doi.org/10.5753/webmedia.2025.15908

### Synonym cycling (elegant variation) instead of repeating the plain word [measured] (pt/en/es, vocabulary, new)

Humans repeat the same plain word and even the same sentence opener ('Eu...', 'Eu...'). LLMs avoid repetition by cycling synonyms ('afirma', 'destaca', 'ressalta', 'pontua'; 'ferramenta', 'solução', 'plataforma') and get higher within-text lexical diversity. This corrects the covered 'repeated sentence openings' rule: formulaic anaphora is AI, but plain repetition of 'eu' or of the same noun is human. Pick a word and keep it.

- Errado: O harness executa a tarefa. A ferramenta então valida o resultado, e a solução por fim registra tudo. A plataforma se destaca nisso.
- Certo: O harness roda a tarefa, depois o harness valida e loga tudo. Eu gosto do harness por isso.
- Evidência: TextPulse: humans open consecutive sentences with the same word 7.2 times per 100 transitions vs 2.7 for AI (-63%, d = -0.45). MATTR rises from 0.785 to 0.827 in AI rewrites (d = 1.31). Graphite: AI MTLD is higher than human. Style of Machines: GPT MATTR is higher in all three languages (EN 0.808 vs 0.742). EPIA PT-BR: machine Honoré lexical richness δ = -0.798. Russell et al.: humans repeat 'says' where AI uses 'notes'/'explains'. Older GPT-3.5 studies in the survey found the opposite (lower diversity), so the direction depends on the model.
- Fontes: https://textpulse.ai/research/ai-style-fingerprints, https://graphite.io/research/ai-tells, https://aclanthology.org/2026.stygenai-1.5.pdf, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://arxiv.org/abs/2501.15654

### Long, rare, abstract words over short concrete ones [measured] (pt/en/es, vocabulary, new)

AI text uses longer, rarer, later-acquired and more abstract words, and fewer concrete, picturable and sensory ones. In PT this means 'otimizar', 'potencializar', 'viabilizar', 'mecanismo', 'abordagem' instead of 'deixar mais rápido', 'jeito', 'coisa', 'olhei', 'vi', 'quebrou'. Prefer the word you would say out loud and concrete objects (the terminal, the file, the error message).

- Errado: Essa abordagem viabiliza a otimização do fluxo de desenvolvimento.
- Certo: Desse jeito eu paro de copiar e colar o mesmo prompt no terminal toda vez.
- Evidência: TextPulse: words of 7+ letters go from 357 to 444 per 1k (d = 1.57, up in 96.4% of pairs), mean word length from 5.51 to 6.12. Graphite: AI averages 5.2-5.7 characters per word vs 4.9 for humans. Style of Machines PT-BR: GPT content words are rarer (Zipf 3.51 vs 3.70) and lexical density is higher (0.540 vs 0.485). EPIA PT-BR: human text has more early-acquired words (δ = +0.667), imageability (+0.626) and concreteness (+0.583). Survey: sensing verbs (read, look, hear) and feeling phrases ('feels like', 'hate') are less common in AI text.
- Fontes: https://textpulse.ai/research/ai-style-fingerprints, https://graphite.io/research/ai-tells, https://aclanthology.org/2026.stygenai-1.5.pdf, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://arxiv.org/pdf/2510.05136v1.pdf

### Function-word profile: missing 'porque/se/quando/eu/ia' [measured] (en/pt/es, vocabulary, new)

At the level of small words, AI text uses fewer causal and conditional conjunctions (because, if, when, although, but), fewer I/my, and fewer would/might/could. It uses more 'can', 'and', 'their', 'by/with/for'. In PT: write the reasoning with 'porque', 'se', 'quando', and use conditional and hesitant forms ('ia', 'acho que', 'talvez', 'teria') in place of capability statements ('é possível', 'pode-se').

- Errado: É possível configurar hooks para automatizar a validação. Pode-se também integrar com o CI.
- Certo: Se eu tivesse descoberto os hooks antes, acho que nem teria escrito metade desses comandos, porque era isso que eles faziam.
- Evidência: Survey of 44 studies (Terčon & Dobrovoljc 2025), citing Desaire 2023, Fujiwara 2024 and Kim & Desaire 2024: AI text is less likely to contain however, but, although, because, if, that, or, when, I, my, they, will, would, might, could, and more likely to contain can, and, by, with, for, their. These are English measurements, and the PT mapping is my inference.
- Fontes: https://arxiv.org/pdf/2510.05136v1.pdf

### Over-smooth sentence-to-sentence progression (each sentence restates the last) [measured] (pt/en/es, structure, new)

In machine text, each sentence overlaps heavily with the one before it, so ideas glide forward too smoothly. Humans jump: a new detail, a side remark, a change of topic without a bridge. Delete bridging sentences that only restate what came before, and let a paragraph start on something new without a connective.

- Errado: O cache resolveu o problema de lentidão. Ao resolver esse problema de lentidão, o cache também melhorou a experiência. Essa melhoria na experiência foi percebida pelo time.
- Certo: O cache resolveu a lentidão. Meu chefe nem percebeu, quem percebeu foi o cara do suporte que parou de me mandar print.
- Evidência: Andrade, Silva & Pardo (PT-BR, EPIA 2026): machine text has higher LSA givenness (δ = -0.685) and LSA span (δ = -0.699), 'continuous, uniform semantic progression where sentences appear to share substantial overlap'. Human text shows 'irregular semantic transitions reflecting thematic variability'. Russell et al. experts: AI 'over-explains' and is 'telling rather than showing'.
- Fontes: https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://arxiv.org/abs/2501.15654

### PT connective density ('além disso', 'dessa forma', 'nesse sentido') [observed] (pt, vocabulary, new)

These connectives aren't wrong in PT. The tell is their density, especially opening paragraphs. A practitioner measurement of human PT-BR text gives a baseline: even the most common ones appear well under once per 1,000 words, and most 'AI expressions' never appear in human PT at all. Aim for zero or one per post. Swapping one for a synonym ('nesse contexto' → 'nesse cenário') does not help, so cut the connective or state the actual relation ('por isso', 'mesmo assim').

- Errado: Além disso, o harness gerencia contexto. Dessa forma, nesse sentido, vale ressaltar que o workflow ficou mais leve.
- Certo: O harness também gerencia o contexto sozinho, por isso eu apaguei o comando que fazia resumo da sessão.
- Evidência: Sem Lero-Lero (Aug 2026) ran 212 terms against a human PT corpus (BR blogs 2018-2021, Wikipedia 2021, Agência Brasil, Machado de Assis): 154 terms never appeared. The highest densities were 'no entanto' 0.27, 'fundamental' 0.22, 'além disso' 0.18 and 'dessa forma' 0.12 per 1,000 words. humanizartexto.app: 5 humanizer tools kept 2 to 4 of the 4 crutch expressions and just swapped in synonyms. Exame and Fast Company Brasil (2026) list the same connectives. This is a single-practitioner corpus, not peer-reviewed.
- Fontes: https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia, https://humanizartexto.app/expressoes-de-ia, https://exame.com/tecnologia/examelab/como-saber-se-um-texto-foi-feito-por-inteligencia-artificial/, https://fastcompanybrasil.com/ia/5-formas-identificar-texto-criado-inteligencia-artificial/

### Corrective framing variants: 'menos X e mais Y', 'em vez de simplesmente' [measured] (pt/en/es, sentence, adds-evidence-to-covered)

These are measured variants of the covered not-X-but-Y pattern that a ban on 'não é X, é Y' misses: 'menos como um X e mais como um Y', 'em vez de simplesmente/meramente', 'não se trata apenas de', 'o X não é simplesmente'. Claude in particular overuses 'less like a _ and more like'. State Y directly.

- Errado: O harness funciona menos como uma ferramenta e mais como um colega, em vez de simplesmente executar comandos.
- Certo: O harness decide sozinho quando abrir um subagente, coisa que antes eu fazia na mão.
- Evidência: Graphite (10k human vs 90k AI articles): GPT-6 Astra 'not simply' 157x, 'the _ is not simply' 576x, 'rather than relying' 187x. Claude Opus 5 'rather than merely' 160x, 'less like a _ and more like' 105x, 'Less X, More Y' comparisons 82x. Gemini 'is not just a _ it is' 153x. Pangram: 'not just X but Y' 1 vs 3 per 10k words (3x). Russell et al. experts flag 'not only … but also'.
- Fontes: https://graphite.io/research/ai-tells, https://www.pangram.com/signs-of-ai-writing, https://arxiv.org/abs/2501.15654

### Trade-off denial ('sem abrir mão de', 'sem perder') [measured] (pt/en/es, content, new)

AI promises a benefit with no cost: 'without sacrificing', 'without losing', 'without compromising', 'without requiring'. Real dev posts name the cost. Delete the clause, or say what you actually lost.

- Errado: Simplifiquei o setup sem abrir mão da flexibilidade e sem perder controle.
- Certo: Simplifiquei o setup e perdi umas coisas, o comando de review que eu tinha era melhor que o nativo e eu sinto falta dele.
- Evidência: Graphite 2026: 'without requiring' 70x (GPT-6 Astra), 'without losing' 22x / 6.1x / 5.4x, 'without sacrificing' 6.4x / 4.3x / 7.8x, 'without compromising' 2.6x / 5.2x for Astra / Claude Opus 5 / Gemini 3.1 Pro.
- Fontes: https://graphite.io/research/ai-tells

### Telling the reader it matters ('isso importa porque') [measured] (pt/en/es, content, adds-evidence-to-covered)

'Matters because', 'the distinction matters', 'matters more than'. In PT: 'isso importa porque', 'essa diferença importa', 'e aqui está o ponto'. It points at importance in place of the fact that carries it. Cut it and give the consequence.

- Errado: Essa diferença importa porque muda a forma como trabalhamos.
- Certo: Por causa disso eu parei de abrir três terminais.
- Evidência: Graphite: 'matters because' 357x (GPT-6 Astra) and 132x (Claude Opus 5), 'matters more than' 93x (Claude), 'distinction matters' with 0 human occurrences.
- Fontes: https://graphite.io/research/ai-tells

### Claude-specific superlative and sincerity tics [measured] (pt/en/es, vocabulary, new)

The blog skill runs on Claude, so Claude's own tells matter most. Claude frames things as extreme or unusually important ('single most', 'arguably the most', 'every single', 'enormously') and uses 'is genuinely', plus calm evaluative adjectives that rate something without describing it: deliberate, measured, steady. PT equivalents: 'o mais importante de todos', 'talvez o maior', 'cada um dos', 'genuinamente', 'deliberado', 'consistente', 'sólido'.

- Errado: Essa foi genuinamente a decisão mais importante de todas, uma escolha deliberada e consistente.
- Certo: Foi a decisão que mais me poupou tempo esse ano, acho.
- Evidência: Graphite: 'is genuinely' appears 1,021 times in Claude Opus 5 articles vs 4 in human articles. 'Single most' and 'arguably the most' appear with 0 occurrences in GPT-6 Astra, 'every single' 112x and 'enormously' 45x the Astra rate. 'Deliberate' 26x, 'steady' 6x, 'measured' 4.2x the human rate. Claude's 'mannered-prose' score is about 2.5x human and up 19% since Opus 4. Claude Opus 5 uses em dashes at about the human rate.
- Fontes: https://graphite.io/research/ai-tells

### Adjectives that rate without describing (with measured ratios) [measured] (pt/en/es, vocabulary, adds-evidence-to-covered)

Evaluation adjectives and intensifiers are the most stable lexical signal. Most of the excess 'style words' are verbs and adjectives. PT list to cut: 'louvável', 'meticuloso', 'intrincado', 'inovador', 'prático', 'significativo', 'robusto', 'incrivelmente', 'extremamente', 'absolutamente'. Replace with a number or an observable detail.

- Errado: Uma solução incrivelmente prática, meticulosa e significativamente mais robusta.
- Certo: Rodou 40 dias sem eu precisar mexer.
- Evidência: Liang et al. 2024 (ICLR 2024 reviews): 'commendable' 9.8x, 'intricate' 11.2x, 'meticulous' 34.7x (from secondary summaries quoting the paper, primary not opened). Kobak et al. (Science Advances 2025, 15.1M PubMed abstracts): 'delves' r = 28.0, 'underscores' 13.8, 'showcasing' 10.7. Of the 379 excess style words in 2024, 66% were verbs and 14% adjectives, and they put a lower bound of 13.5% on LLM-processed abstracts. Graphite: GPT-6 Astra 'dependable' 59x, 'practical' 26x, 'meaningful' 13x. Gemini 'profound' 25x, 'immense' 22x, 'incredibly' 18x, intensifiers overall 13x.
- Fontes: https://pmc.ncbi.nlm.nih.gov/articles/PMC12219543/, https://graphite.io/research/ai-tells, https://bhanneke.github.io/RISE/papers/notes/liang2024monitoring/, https://montanaresearch.org/blog/17-percent-of-iclr-2024-reviews-touched-by-llm/

### Markdown structure inside prose (bullets, bold, headers) [measured] (pt/en/es, formatting, adds-evidence-to-covered)

Bullet lists and markdown in running text are among the strongest measured tells. A blog post that turns every idea into a bulleted list with bold labels reads generated. Use paragraphs when the ideas connect. Keep lists for real enumerations (commands, steps, configs).

- Errado: **Vantagens:**
- **Velocidade:** mais rápido
- **Simplicidade:** menos comandos
- **Confiabilidade:** menos erros
- Certo: Ficou mais rápido e eu apaguei uns quinze comandos, erro eu ainda tenho, mas são outros.
- Evidência: Pangram (corpus of millions of documents): markdown 8 vs 90 per 10k words (12x), bullet lists 3 vs 28 (9x), triads 5 vs 19 (4x), em dashes 2 vs 17 (10x). Freeburg 2026: unconstrained essays carry 0.85-6.27 markdown features per 1k words across 12 models, and one prose-only instruction takes that to about 0.
- Fontes: https://www.pangram.com/signs-of-ai-writing, http://arxiv.org/abs/2603.27006

### Forced positivity and optimistic vague endings [measured] (pt/en/es, content, adds-evidence-to-covered)

LLMs lean toward joy and positive affect and steer away from fear, disgust and irritation. They close on an optimistic, vague note ('apesar dos desafios, o futuro é promissor'). Real dev posts complain, admit annoyance and end on a concrete, sometimes unresolved point.

- Errado: Apesar dos desafios, o futuro do desenvolvimento com IA é promissor e cheio de possibilidades.
- Certo: Ainda não sei se volto a escrever comando próprio, por enquanto tô deixando o harness fazer e reclamando quando ele erra.
- Evidência: Muñoz-Ortiz et al. (AI Review 2024, 6 LLMs vs NYT): humans show more fear and disgust and less joy, while LLMs produce more joy and surprise. EPIA PT-BR: machine texts score higher on LIWC positive emotion (d = 0.472) and affect (d = 0.460), and human texts on informal language (d = 0.595) and past focus (d = 0.595). Russell et al. (ACL 2025) experts flag 'optimistically vague conclusions' and AI being 'safe, and lacking in surprises or humor'. Sem Lero-Lero: the 'desafios, mas futuro promissor' mold closes 'half of generated texts' (practitioner claim).
- Fontes: https://link.springer.com/article/10.1007/s10462-024-10903-2, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://arxiv.org/abs/2501.15654, https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia

### No anecdotes or time anchors [measured] (pt/en/es, content, new)

Human tells include small anecdotes and personal time anchors: 'he said', 'years ago', 'last year', 'my favorite', 'mom'. In PT: 'ano passado', 'semana passada', 'um colega me falou', 'lá na BidChex' (only if Joao approves naming it). AI text states general truths with no when or who. Add at least one concrete 'when it happened to me' moment per section.

- Errado: Muitos desenvolvedores enfrentam dificuldades com workflows complexos.
- Certo: Em março eu passei uma tarde inteira debugando um agente meu que brigava com outro agente meu.
- Evidência: Graphite: human tells cluster as first person, direct address, casual qualifiers, small anecdotes ('he said', 'years ago') and personal experience ('my favorite', 'mom', 'last year'). EPIA PT-BR: human texts have more past focus (d = 0.595) and social processes (d = 0.517). WebMedia 2025 PT-BR Reddit: human comments 'include personal experiences'.
- Fontes: https://graphite.io/research/ai-tells, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://doi.org/10.5753/webmedia.2025.15908

### Colon overuse (model-specific) [opinion] (en/pt/es, punctuation, adds-evidence-to-covered)

This supports Joao's rule 1 with data, but the signal is model-specific. In one practitioner sample, recent Claude models used colons about 4x the human rate. GPT novels came out near the human colon rate. Keep the rule: colons only before a list, table or code block.

- Errado: O resultado foi claro: o harness venceu.
- Certo: No fim o harness ganhou, e com folga.
- Evidência: prose-check repo (GitHub, single author): 200 Claude Opus 4.5 samples vs 6,000 human texts, colons 4.12 vs 1.01 per 1k characters (4.1x), Sonnet 4 4.68, Sonnet 3.7 3.90. arXiv 2608.12630 (novels): GPT-5.5 colon ratio about 1.02-1.06 vs human, Qwen 0.24. TextPulse: AI rewrites lower colons (1.98→1.50 per 1k words). The evidence is mixed, so treat this as a Claude-specific tell.
- Fontes: https://github.com/shandley/prose-check/blob/main/.claude/skills/human-writing/statistics.md, https://arxiv.org/html/2608.12630v1, https://textpulse.ai/research/ai-style-fingerprints

## Linha de pesquisa: portuguese

**Notas do pesquisador:** Caveats e qualidade das fontes:
- Imoto (Zenodo, 2026) é preprint de autor único, sem revisão por pares. Ainda assim é a única fonte que achei que mede texto humano PT-BR de dev (403 posts do TabNews anteriores ao ChatGPT) contra LLMs atuais. Dela vem o dado mais útil para o João: em PT a IA usa MENOS vírgula que o humano (d=-0.83), e em EN usa MAIS (d=+0.45). Li só o abstract no Zenodo, não as tabelas completas.
- PROPOR 2026 (Andrade, Silva, Pardo, NILC/USP) e o artigo do EPIA 2026 usam notícias falsas reescritas pelo Sabiá-3. O gênero e o modelo são outros, então a generalização para blog de dev é inferência. Os números (sílabas por palavra d=1,87, desvio padrão de frase 32,97 contra 9,93, presente do indicativo como a feature nº 1 com 25,4%, diversidade de pontuação δ=+0,725) li direto nos PDFs.
- O Sem Lero-Lero é medição de um único site comercial (densidades no corpus humano: 'no entanto' 0,27 por mil palavras e assim por diante). TextPulse também é vendor.
- Abri o artigo ENEM/humanizados (Ribeiro e Righetto 2026) só no abstract, sem as features específicas.
- Não achei estudo que meça ênclise ou mesóclise em texto de LLM em PT. O padrão de colocação pronominal se apoia em sociolinguística sobre a escrita BR (Época, Bagno) mais a inferência de que a IA segue a norma escolar. Também não achei matéria de Folha, Piauí, Nexo, Estadão, TecMundo, Canaltech ou Tecnoblog sobre sinais de IA em PT. Achei Exame, Fast Company Brasil, BBC Brasil e o Manual do Estadão (regras de título).
- A Wikipédia PT tem página própria ('Wikipédia:Sinais de texto gerado por inteligência artificial'), traduzida e adaptada da inglesa. Ela avisa que as listas lexicais são do inglês e não estão validadas em PT, e que variante do português (PT-PT) não é indício de IA. Ela classifica o travessão como indicador 'histórico (2022 a setembro de 2026)', ou seja, o sinal pode estar sumindo nos modelos novos. Li só os dois primeiros terços da página (cerca de 200 mil de 308 mil caracteres).
- Deixei de fora como padrão o 'gerúndio de call center' ('vou estar enviando'). Só o repositório unslop afirma isso, e LLMs atuais raramente produzem essa forma. Também deixei de fora a mistura PT-PT/PT-BR ('utilizador', 'estou a fazer'), citada só por um site de humanizador e contestada pela Wikipédia PT.
- Tensão com a regra 5 do João (cometer erros): a evidência (Russell et al., 24,8%) apoia que gramática perfeita é pista. Os guias práticos (FEP, humanaizer, unslop) avisam que erro forçado ou gíria demais soa falso. A recomendação para o skill é usar a gramática coloquial que o João já usa (pra, tá, a gente, tem por há, próclise, 'atualizar ele', 'aonde', 'assisti o vídeo', vírgula de fala) e não inventar typo aleatório. Os posts reais do TabNews mostram exatamente esse tipo de desvio.
- O 'estilo LinkedIn' de frase curta com ponto e a monotonia das frases médias são o mesmo problema, baixa variação. Os dados mostram que a média humana em PT é até mais curta (15,6 contra 20,6 tokens), mas varia muito mais. O alvo é variação, não 'frases longas'.
- Possível memória para a sessão principal (inferido nesta pesquisa, não dito pelo usuário): nada novo sobre o João. Da memória, só li o índice (preferência de mostrar rascunho renderizado em markdown), que não se aplica aqui.

### Déficit de vírgula em PT (IA usa menos vírgula que brasileiro) [measured] (pt-BR, punctuation, adds-evidence-to-covered)

Em português, o texto de IA usa vírgula numa taxa bem menor que o humano. O modelo escreve vírgula numa taxa quase igual em qualquer língua, mas o brasileiro usa cerca do dobro. O brasileiro emenda oração com vírgula, e a IA corta em ponto. Isso dá dado medido à regra 4 do João. Em inglês acontece o contrário (ver o padrão de tradução).

- Errado: Criei um workflow com 20 comandos. Hoje o Claude Code faz quase tudo sozinho. Vou mostrar o que mudou.
- Certo: Eu tinha montado um workflow com 20 comandos e uns 45 agentes, e hoje o Claude Code faz quase tudo isso sozinho, então resolvi contar o que mudou e o que eu ainda uso por fora.
- Evidência: Imoto (2026, preprint no Zenodo, autor único, sem revisão por pares) comparou 7 LLMs com 403 posts do TabNews anteriores ao ChatGPT. A densidade de vírgulas da IA fica ABAIXO da humana em PT (d = -0.83) e ACIMA em EN (d = +0.45). A explicação dele é que 'AI writes commas at a nearly language-independent rate while human comma conventions differ twofold'.
- Fontes: https://doi.org/10.5281/zenodo.21424903

### Ritmo monótono (baixa burstiness), curto ou médio [measured] (pt-BR/en/es, rhythm, adds-evidence-to-covered)

Na IA, as frases e os parágrafos têm quase o mesmo tamanho. O humano alterna frase muito curta com período longo. A uniformidade pode vir de dois jeitos: todas as frases médias (o padrão dos modelos) ou todas curtas com ponto (o 'estilo LinkedIn'). O que denuncia é a falta de variação, não o tamanho. Em média, a frase humana em PT é mais curta, mas varia muito mais.

- Errado: O Claude Code agora gerencia subagentes nativamente. Isso reduziu a necessidade de orquestração externa. Os hooks também ficaram mais completos. Com isso, boa parte do meu setup perdeu o sentido.
- Certo: Quebrou. Eu fui olhar o log e era o hook que eu tinha escrito em 2024 pra contornar uma coisa que o próprio harness já resolve faz meses, e eu nem tinha percebido porque o meu setup tava rodando por cima de tudo sem reclamar.
- Evidência: Imoto (2026): em PT, contra os posts do TabNews, a burstiness por caractere tem d = -1.03 e a direção é a mesma em todas as 70 células modelo x língua. Andrade et al. (PROPOR 2026, notícias falsas em PT, Sabiá-3): o desvio padrão de sílabas por sentença é 32,97 no humano e 9,93 na máquina, e a média de tokens por sentença é 15,58 no humano e 20,57 na máquina. TextPulse (vendor, EN acadêmico, 60.779 pares): o CV humano é 0,449 e o da IA 0,376, e 79,3% das reescritas saíram mais planas, porque 'models trim long sentences and remove the short, direct sentences'.
- Fontes: https://doi.org/10.5281/zenodo.21424903, https://aclanthology.org/2026.propor-2.22.pdf, https://textpulse.ai/research/textpulse-burstiness-sentence-length-2026.pdf

### Parágrafos todos do mesmo formato [measured] (pt-BR/en/es, structure, new)

Parágrafos com o mesmo número de frases e o mesmo desenho, do tipo afirmação, explicação, exemplo, fecho. Texto humano tem parágrafo de uma linha ao lado de parágrafo de oito.

- Errado: (cinco parágrafos seguidos, cada um com 3 frases e cada um fechando com uma frase de síntese)
- Certo: (um parágrafo longo contando o bug, depois uma linha solta tipo 'Pois é.', depois um parágrafo médio com o código)
- Evidência: Imoto (JA, 2026): a variação da estrutura de parágrafo é menor na IA (d = -0.67). EPIA 2026 (Andrade et al., PT-BR): sentences_per_paragraph é a 2ª feature mais importante do XGBoost (13,7% do ganho) e aparece no top-15 de todos os classificadores.
- Fontes: https://doi.org/10.5281/zenodo.21413035, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf

### Palavras longas e latinizadas (utilizar, realizar, possuir) [measured] (pt-BR/es, vocabulary, new)

A máquina escolhe palavras mais compridas e de aquisição tardia, onde o brasileiro usa a palavra curta do dia a dia. Exemplos: utilizar no lugar de usar, realizar no lugar de fazer, possuir no lugar de ter, efetuar, disponibilizar, auxiliar, visando.

- Errado: Para realizar a migração, utilizei uma ferramenta que possui suporte nativo a hooks e disponibiliza diversas funcionalidades.
- Certo: Pra fazer a migração eu usei uma ferramenta que já tem hook nativo e faz muita coisa sozinha.
- Evidência: PROPOR 2026: sílabas por palavra são 2,17 no humano e 2,39 na máquina, com d de Cohen = 1,87 (efeito grande). EPIA 2026: o humano usa palavras de aquisição precoce, mais imagéticas e concretas (proporção de aquisição precoce δ=+0,667, concretude δ=+0,583), e a máquina usa palavras de aquisição tardia (δ=-0,686) e mais riqueza lexical de Honoré (δ=-0,798). Antonelli (Texto Livre 2025, editoriais da Folha contra Sabiá-3): o Sabiá-3 tem mais sílabas por palavra e mais orações subordinadas.
- Fontes: https://aclanthology.org/2026.propor-2.22.pdf, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://www.scielo.br/j/tl/a/PhbtJMN7DygfqTfnDnS8zZv/?format=pdf&lang=pt

### Estilo nominal (substantivo no lugar do verbo) [measured] (pt-BR/en/es, sentence, new)

A IA transforma ação em substantivo, como 'a implementação de', 'a realização de' ou 'a otimização do'. O humano usa verbo e pronome. No corpus em PT, o humano tem proporcionalmente mais VERB, AUX e PRON, e a máquina mais NOUN e ADJ.

- Errado: A adoção dos subagentes nativos resultou na redução da complexidade e na eliminação da necessidade de manutenção do meu orquestrador.
- Certo: Quando eu passei a usar os subagentes nativos, o setup ficou bem mais simples e eu parei de dar manutenção no meu orquestrador.
- Evidência: Reinhart et al. (PNAS 2025): os modelos com instruction tuning usam nominalizações de 1,5 a 2 vezes mais que o humano (GPT-4o 2,1x), e o estilo é 'noun-heavy, informationally dense... even when prompted to match informal speech'. O artigo cita trabalho anterior com 'fewer human subjects and epistemic stance markers'. PROPOR 2026 (PT): humano com mais verbos e pronomes, máquina com mais substantivos e adjetivos.
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122, https://aclanthology.org/2026.propor-2.22.pdf

### Gerúndio de cauda (destacando, garantindo, permitindo) [measured] (pt-BR/en/es, sentence, adds-evidence-to-covered)

É o equivalente em PT do -ing de cauda. A frase termina com um gerúndio que acrescenta análise rasa. Esse caso já está coberto; aqui entra a medida.

- Errado: O harness passou a gerenciar o contexto automaticamente, permitindo sessões mais longas e garantindo mais estabilidade.
- Certo: O harness passou a gerenciar o contexto sozinho, e as sessões aguentam bem mais tempo sem eu ter que dar /clear.
- Evidência: Reinhart et al. (PNAS 2025): orações de particípio presente aparecem de 2 a 5 vezes mais nos LLMs com instruction tuning, e 5,3 vezes no GPT-4o. A Wikipédia PT confirma que o -ing inglês corresponde ao gerúndio ('destacando sua importância').
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122, https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Sinais_de_texto_gerado_por_intelig%C3%AAncia_artificial

### Presente atemporal em vez de narrar no passado [measured] (pt-BR/en/es, voice, new)

A IA escreve num presente do indicativo genérico, 'o Claude Code oferece', 'os hooks permitem'. O humano conta o que aconteceu, no pretérito e em primeira pessoa: fiz, testei, quebrou, levei 3 dias.

- Errado: Os subagentes permitem paralelizar tarefas e o harness gerencia o contexto de forma eficiente.
- Certo: Semana passada eu rodei três subagentes em paralelo pra revisar um PR, e foi a primeira vez que não precisei do meu script de orquestração.
- Evidência: EPIA 2026 (PT-BR): a feature mais importante do XGBoost é a proporção de verbos no presente do indicativo, com 25,4% da importância ('a timeless generative style'). No LIWC, o humano tem mais foco no passado (d = 0,595) e mais processos sociais (d = 0,517).
- Fontes: https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf

### Registro formal onde o brasileiro escreve coloquial (pra, tá, a gente, tem) [measured] (pt-BR, voice, adds-evidence-to-covered)

Num blog pessoal, a IA mantém 'para', 'está', 'nós', 'há' e 'você poderá'. O dev brasileiro escreve 'pra', 'tá', 'a gente', 'tem' no sentido de existir, 'dá pra', 'vou' em vez de 'irei'. A IA quase nunca usa contração, enchimento, gíria ou abreviação.

- Errado: Nós havíamos configurado diversos agentes, porém está claro que há formas mais simples de fazer isso.
- Certo: A gente tinha configurado um monte de agente, mas tá na cara que tem jeito mais simples de fazer isso.
- Evidência: Russell, Karpinska e Iyyer (ACL 2025): a categoria 'Formality' aparece em 12,3% das explicações dos especialistas ('rarely contains filler words, contractions, slang, or abbreviations'), e a maioria de 5 especialistas errou só 1 de 300 artigos. Sociolinguística: na fala do noroeste paulista, 'a gente' tem 74,6% contra 25,4% de 'nós' (GEL), e no NURC culto 'a gente' tem 34% contra 39% de 'nós' (Lopes, DELTA). EPIA 2026: o humano tem mais 'informal language' no LIWC (d = 0,595). Dado observado: o post de dev do horadecodar escreve 'pra', 'tu delimita', 'a galera'.
- Fontes: https://arxiv.org/html/2501.15654v2, https://revistas.gel.org.br/estudos-linguisticos/article/download/1359/901/3619, https://www.scielo.br/j/delta/a/KQmrjr5yGgL49JPWMSGGhSj/?lang=pt, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://horadecodar.com.br/humanizar-textos-chatgpt/

### Colocação pronominal de gramática (ênclise e mesóclise) em vez de próclise brasileira [observed] (pt-BR, sentence, new)

A IA segue a norma escolar: 'Lembrei-me', 'atualizá-la', 'Far-se-á', nunca começa frase com pronome. O brasileiro, até colunista de revista, usa próclise: 'Me lembrei', 'Me pergunto', 'atualizar ela'. 'Atualizar ela' é coloquial e serve para blog pessoal. A próclise em início de frase ('Me pergunto') já aparece na escrita jornalística culta.

- Errado: Percebi-me refém do meu próprio setup e decidi atualizá-lo. Dir-se-ia que foi exagero.
- Certo: Me peguei refém do meu próprio setup e resolvi atualizar ele. Pode ter sido exagero, sei lá.
- Evidência: Valadares (UFVJM): em colunas da Época online há próclise onde a norma pede ênclise, como 'Me pergunto como assim depois de tudo?', 'Me sinto capaz de viver', 'Por lá, se paga mais caro'. Bagno (2009), citado em Veredas/UFJF, fala de uma 'tendência maciça' do brasileiro à próclise e chama a mesóclise de 'ridícula'. O blog OpenL descreve próclise como o padrão BR e ênclise como o padrão PT. Não achei estudo que meça a ênclise em texto de LLM. A relação com IA é inferência a partir do registro normativo.
- Fontes: https://site.ufvjm.edu.br/revistamultidisciplinar/files/2015/05/Fl%C3%A1vio-Valadares.pdf, https://periodicos.ufjf.br/index.php/veredas/article/download/43701/28277/205892, https://blog.openl.io/pt/brazilian-vs-european-portuguese/

### Gramática impecável (o humano tem pequenos desvios) [measured] (pt-BR/en/es, content, adds-evidence-to-covered)

É o caso de texto sem nenhum desvio. Os posts reais do TabNews têm 'aonde' por 'onde', 'tem' por 'há', concordância solta e acento faltando. A melhor saída é usar a gramática coloquial que o João já usa (regência e colocação de fala, vírgula de fala), não inventar erro de digitação aleatório. Erro forçado e gíria em excesso também soam falsos.

- Errado: Há diversos projetos onde é possível aplicá-lo, e a todos eles assisti com atenção.
- Certo: Tem um monte de projeto aonde dá pra usar isso, eu assisti todos os vídeos do canal e nenhum falava do hook.
- Evidência: Russell et al. (ACL 2025): 'Grammar & Punctuation' aparece em 24,8% das explicações ('AI-generated text is usually grammatically perfect... while human-written text often contains minor errors'). Exemplos reais do TabNews: thi (2022) escreve 'aonde ele tem o mesmo objetivo', 'Segundamente', 'teve alguns afins'; iagofgermano escreve 'recomceçamos', 'eramos', 'uma pessoa pessoa experiente'. O BBC Brasil cita 'ausência de erros gramaticais' como pista. Contraponto: o iahumanizador diz que escrever sem erro não prova IA, e o guia FEP avisa que erro demais fica 'obviamente proposital'.
- Fontes: https://arxiv.org/html/2501.15654v2, https://www.tabnews.com.br/thi/meu-primeiro-projeto-open-source, https://www.tabnews.com.br/iagofgermano/subi-meu-primeiro-site-no-ar-e-vou-detalhar-minha-experiencia, https://www.bbc.com/portuguese/articles/c4gkwxq8we3o, https://inematds.github.io/FEP/conteudo/modulo2-humanizacao.md

### Pouca variedade de pontuação [measured] (pt-BR/en/es, punctuation, new)

O texto humano mistura parênteses, reticências, exclamação, interrogação, aspas e emoji de reação dentro da frase. A IA fica em ponto e vírgula (e travessão). Para o João, que não usa travessão, a variedade tem que vir de parênteses, '...', '!' e '?' de verdade.

- Errado: O hook falhou. Foi necessário reescrever a lógica. O resultado foi satisfatório.
- Certo: O hook falhou (claro, era sexta à noite) e eu tive que reescrever tudo... no fim funcionou, mas que raiva!
- Evidência: EPIA 2026 (PT-BR): a feature humana mais discriminativa do NILC-Metrix é a diversidade de pontuação, δ = +0,725 ('greater punctuation variety reflecting colloquial style'). Russell et al.: a IA evita 'dashes and ellipses', e um especialista citou 'dashes, brackets, quotes... short spurts of comma sections' como pista de texto humano.
- Fontes: https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://arxiv.org/html/2501.15654v2

### Costura semântica lisa demais [measured] (pt-BR/en/es, structure, new)

Na IA, cada frase retoma o conteúdo da anterior e a progressão é contínua e sem saltos. O humano pula de assunto, faz digressão e volta, e deixa transição implícita.

- Errado: Os subagentes resolvem a paralelização. Essa paralelização, por sua vez, reduz o tempo de execução. Essa redução de tempo torna o workflow mais eficiente.
- Certo: Os subagentes resolveram a paralelização. Aliás, lembrei agora que o meu primeiro orquestrador era um Makefile, juro. Enfim, o tempo de um review caiu de 20 pra 6 minutos.
- Evidência: EPIA 2026: na máquina, o LSA span mean dá δ = -0,699 e o LSA givenness δ = -0,685 ('continuous, uniform semantic progression where sentences appear to share substantial overlap'). Os textos humanos têm 'irregular semantic transitions'. PROPOR 2026: o texto da máquina 'apresenta maior coesão textual', e o humano é 'mais fragmentado e direto'.
- Fontes: https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://aclanthology.org/2026.propor-2.22.pdf

### Densidade de conectivo formal (além disso, no entanto, dessa forma, nesse sentido) [measured] (pt-BR/es, vocabulary, adds-evidence-to-covered)

Nenhum conectivo é proibido. O que denuncia é a densidade e o vício de abrir parágrafo com um. No português, o 'mas' formal aparece em quatro versões (contudo, entretanto, todavia, no entanto). O brasileiro escrevendo blog usa 'mas', 'só que', 'aí', 'então', 'por isso', 'tipo'. A melhor correção é cortar. Trocar por um sinônimo não resolve.

- Errado: Além disso, o harness gerencia o contexto. No entanto, ainda uso hooks. Dessa forma, mantenho controle. Nesse sentido, vale ressaltar que...
- Certo: O harness também cuida do contexto, só que eu ainda uso hook pra duas coisas, aí sim eu tenho controle.
- Evidência: Sem Lero-Lero (agosto de 2026, corpus próprio de blogs BR de 2018 a 2021, Wikipédia, Agência Brasil e Machado de Assis; um único site): 154 de 212 expressões nunca aparecem no corpus humano. As maiores densidades humanas são 'no entanto' 0,27 por mil palavras, 'fundamental' 0,22, 'além disso' 0,18 e 'dessa forma' 0,12. Acima disso é sinal. EPIA 2026: coordenação adversativa com 'mas' é marca de máquina (d = 0,632). Exame e Fast Company Brasil (2026) citam o excesso de conectivos como sinal nº 1. humanizartexto.app: em 5 humanizadores, 2 a 4 das 4 expressões sobreviveram, e 'nesse contexto' virou 'nesse cenário'.
- Fontes: https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://fastcompanybrasil.com/ia/5-formas-identificar-texto-criado-inteligencia-artificial/, https://exame.com/tecnologia/examelab/como-saber-se-um-texto-foi-feito-por-inteligencia-artificial/, https://humanizartexto.app/expressoes-de-ia

### Muleta de anúncio (vale ressaltar, é importante destacar, cabe mencionar) [observed] (pt-BR/es, vocabulary, adds-evidence-to-covered)

Expressão que anuncia que vem algo importante e não diz a coisa. Ela sai inteira sem levar sentido junto. Em PT, essa família inclui 'vale lembrar', 'é interessante notar', 'faz-se necessário', 'no que diz respeito a', 'quando se trata de', 'dito isso' e 'pode-se dizer que'.

- Errado: Vale ressaltar que é importante destacar que os hooks continuam úteis.
- Certo: Os hooks continuam úteis, eu uso um pra bloquear commit com segredo.
- Evidência: Sem Lero-Lero dá a esta família peso 3 por marca a cada mil palavras, contra 0,6 de um conectivo comum, e diz que a diferença 'saiu de medição'. Exame (outubro de 2026) e o TargetHD listam 'vale ressaltar' e 'é importante destacar'. O humanizartexto.app achou a lista apenas 1 vez em 20 respostas do próprio ChatGPT (cerca de 2.180 palavras), então ela acha trecho genérico mas não é detector.
- Fontes: https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia, https://exame.com/inteligencia-artificial/estas-x-frases-entregam-que-seu-texto-foi-escrito-por-inteligencia-artificial-como-evitar/, https://www.targethd.net/as-palavras-que-denunciam-um-texto-escrito-pelo-chatgpt/, https://humanizartexto.app/expressoes-de-ia

### Aberturas e fechos de redação em PT [observed] (pt-BR/es, structure, adds-evidence-to-covered)

Versões em PT das aberturas e fechos prontos. Aberturas: 'Em um mundo cada vez mais...', 'No cenário atual', 'Nos dias de hoje', 'Com o avanço da tecnologia', 'Neste artigo', 'Vamos explorar', 'Você já parou para pensar'. Fechos: 'Em suma', 'Em resumo', 'Por fim', 'Diante do exposto', 'Concluindo', 'Espero ter ajudado', 'E isso é só o começo', 'só o tempo dirá', 'apesar dos desafios, o futuro é promissor'. Essas fórmulas vêm da redação do ENEM e do vestibular.

- Errado: Em um mundo cada vez mais dominado por agentes de IA, neste artigo vamos explorar como o harness evoluiu. (...) Em suma, o futuro é promissor.
- Certo: Abri meu ~/.claude ontem e tinha 20 comandos que eu não uso faz três meses. (...) Ainda não sei o que fazer com o agente de deploy, vou deixar ele lá mais um tempo.
- Evidência: O Sem Lero-Lero lista 26 aberturas e 24 fechos e diz que 'em um mundo cada vez mais' é 'a abertura de redação de vestibular que o gerador herdou'. Fast Company Brasil: o fecho que repete o conteúdo vem com 'concluindo', 'diante do exposto', 'em resumo'. Russell et al. (guia dos especialistas): 'AI-generated text always ends with a neat conclusion, instead of just ending the article naturally' e 'AI tends to be inherently positive... especially towards the conclusion'.
- Fontes: https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia, https://fastcompanybrasil.com/ia/5-formas-identificar-texto-criado-inteligencia-artificial/, https://arxiv.org/html/2501.15654v2

### Decalque do inglês corporativo [observed] (pt-BR/es, translation, new)

Expressões que soam como tradução literal do inglês: 'no final do dia', 'entregar valor', 'mover a agulha', 'dobrar a aposta', 'mergulhar fundo', 'jornada', 'endereçar um problema', 'navegar o cenário', 'seja você um X ou um Y', 'um verdadeiro testemunho de', 'isso muda tudo', 'deixa eu te contar', 'aqui está o porquê', 'não é sobre X, é sobre Y'.

- Errado: No final do dia, o que realmente entrega valor é mergulhar fundo na sua jornada com o Claude Code, seja você iniciante ou sênior.
- Certo: No fim das contas o que me ajudou foi ler o changelog do Claude Code, coisa que eu nunca fazia.
- Evidência: unslop/ptbr.md (repositório de praticante): 'Soam a texto passado no tradutor'. Sem Lero-Lero: 'verdadeiro testemunho' é 'tradução literal de a testament to'. Jefferson Barbosa (Substack, outubro de 2026) lista 'mergulhar', 'jornada', 'desbloquear' e 'Não é sobre X. É sobre Y.' como o 'sotaque' em PT. A UFMG (Adriana Pagano, na BBC Brasil) atribui o travessão a 'treinamento, provavelmente com língua inglesa'.
- Fontes: https://github.com/badmuriss/unslop/blob/a952141f/references/ptbr.md, https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia, https://jeffersonfbarbosa.substack.com/p/voce-esta-falando-como-o-chatgpt, https://www.bbc.com/portuguese/articles/c4gkwxq8we3o

### Title Case e ponto final em título de post em PT [observed] (pt-BR/es, title-headline, adds-evidence-to-covered)

Em português, título de matéria e de seção leva maiúscula só na primeira palavra e nos nomes próprios. Title Case em PT é decalque do inglês. O Estadão também não usa título com ponto. Maiúscula em cada palavra só vale para título de obra (filme, livro).

- Errado: ## O Que Mudou No Harness Do Claude Code.
- Certo: ## O que mudou no harness do Claude Code
- Evidência: Manual de Redação do Estadão, Títulos, regra 5: 'Use inicial maiúscula apenas na primeira palavra do título e nos nomes próprios'. Regra 12: 'O Estado não usa títulos com ponto'. A Folha usa maiúscula em cada palavra só para títulos de obras. A Wikipédia PT lista 'Maiúsculas em todas as palavras principais dos títulos' como sinal.
- Fontes: https://www.estadao.com.br/manualredacao/esclareca/t.php, https://www1.folha.uol.com.br/folha/circulo/manual_texto_m.htm, https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Sinais_de_texto_gerado_por_intelig%C3%AAncia_artificial

### Travessão em PT (com dado de frequência) [measured] (pt-BR/en/es, punctuation, adds-evidence-to-covered)

Já está coberto. Este item traz os números e o contexto brasileiro. O teclado ABNT2 não tem travessão, e o brasileiro digitando usa vírgula, parênteses ou ponto. A exceção legítima é o intervalo numérico (2024–2026).

- Errado: O setup — que levou meses — ficou obsoleto em uma semana.
- Certo: O setup, que levou meses pra montar, ficou obsoleto em uma semana.
- Evidência: Washington Post (328.744 mensagens do GPT-4o, de maio de 2024 a julho de 2025): o travessão estava em menos de 1 de cada 10 respostas um ano antes e em mais da metade no verão de 2025. Adriana Pagano (UFMG, BBC Brasil): 'Tem um uso do travessão que é mais frequente, de fato'. A Wikipédia PT põe o travessão em 'indicadores históricos' ('de 2022 a setembro de 2026'), o que sugere que o sinal está mudando com os modelos novos.
- Fontes: https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/, https://www.bbc.com/portuguese/articles/c4gkwxq8we3o, https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Sinais_de_texto_gerado_por_intelig%C3%AAncia_artificial, https://github.com/badmuriss/unslop/blob/a952141f/references/ptbr.md

### Staccato de ponto com anáfora e fecho de impacto [observed] (pt-BR/en/es, rhythm, adds-evidence-to-covered)

Sequência de frases curtas com ponto que repetem uma palavra e terminam numa frase de efeito, ou uma frase por linha no estilo LinkedIn. Na percepção de leitores brasileiros, a IA tem 'tara por usar ponto'. Reforça a regra 4 do João.

- Errado: É pensar diferente. Planejar diferente. Automatizar diferente. E isso muda tudo.
- Certo: Eu tive que repensar como eu planejo as tarefas, porque metade do que eu automatizava o harness já faz.
- Evidência: Rafael Miqueleto (LinkedIn, julho de 2025): 'IA também tem uma tara por usar ponto' e dá o exemplo 'É fazer diferente. Pensar diferente... SER ÚNICO.'. Arthur Andrade (LinkedIn, maio de 2026) parodia 'Cheios de frases curtas... E isso muda tudo.'. Wellington Cruz (LinkedIn, 2025): 'pequenas frases, ponto a ponto... Falta coesão'. Contraponto nos comentários: há escritores humanos (Lygia Fagundes Telles) que usam muito ponto.
- Fontes: https://pt.linkedin.com/posts/rafamiqueleto_nao-sei-voc%C3%AAs-mas-d%C3%A1-pra-notar-muito-f%C3%A1cil-activity-7350896618423889920-QCxT, https://pt.linkedin.com/posts/arthurandraderj_eu-n%C3%A3o-aguento-mais-posts-de-ia-que-s%C3%A3o-activity-7465359922877247488-D5QK, https://pt.linkedin.com/posts/wellingtoncruz_o-linkedin-est%C3%A1-cheio-de-textos-assim-escrito-activity-7382148149491941376-wFJL

### Rotação de sinônimos para a mesma coisa [observed] (pt-BR/en/es, vocabulary, new)

A IA troca o nome do mesmo referente a cada frase (agente, assistente, ferramenta, solução, plataforma) para não repetir palavra. O humano repete o substantivo sem problema.

- Errado: O agente revisa o PR. Em seguida, o assistente comenta, e a ferramenta abre a issue. A solução é bem prática.
- Certo: O agente revisa o PR, comenta e abre a issue. O agente é burro pra nome de branch, mas o resto ele faz bem.
- Evidência: unslop/ptbr.md, 5.4, severidade alta: 'Humano repete o substantivo. A rotação confunde o leitor'. Miqueleto (LinkedIn) descreve 'mais duas [frases] que usam sinônimos para aquilo ou reforçam a ideia'. Não achei medição específica para PT.
- Fontes: https://github.com/badmuriss/unslop/blob/a952141f/references/ptbr.md, https://pt.linkedin.com/posts/rafamiqueleto_nao-sei-voc%C3%AAs-mas-d%C3%A1-pra-notar-muito-f%C3%A1cil-activity-7350896618423889920-QCxT

### Lítotes (não é raro, não foi um mau resultado) [opinion] (pt-BR/en/es, sentence, new)

Afirmar pela negação do contrário. A forma direta diz o mesmo com menos volta.

- Errado: Não é raro o hook falhar, e o resultado não foi nada mau.
- Certo: O hook falha direto, mas o resultado ficou bom.
- Evidência: Thais Paneto (LinkedIn, novembro de 2026) põe a lítotes entre os 5 maneirismos que ela bloqueia no Claude. É uma fonte única de praticante.
- Fontes: https://pt.linkedin.com/posts/thaispaneto_escritacomia-produ%C3%A7%C3%A3odeconteudo-inteligenciaartificial-activity-7526739361875357697-N3O1

### Sem marcador oral nem reação emocional [measured] (pt-BR, voice, new)

Falta o que o dev brasileiro põe no texto: 'né', 'tipo', 'aí', 'enfim', 'sei lá', 'kkk', 'pô', 'putz', emoji de reação no meio da frase (😂, 😅), inglês solto ('please', 'deploy', 'já era'), palavrão leve. O uso tem que ser moderado: numa dose plausível soa humano, demais soa forçado.

- Errado: Os testes não foram implementados devido à complexidade de testar geração de imagens.
- Certo: Testes? Simplesmente não existe 😐 eu sei que é essencial, mas não faço a menor ideia de como testar geração de imagem, se alguém souber me fala, please.
- Evidência: EPIA 2026: o perfil humano em PT tem 'informal markers (netspeak, fillers)', com 'informal language' d = 0,595. Guia de Russell et al.: 'AI will avoid any type of swear word, including mild ones'. Exemplo real do TabNews (thi, 2022): 'Simplesmente não existe 😐!... deixem nos comentários, please!', 'Meti os tipos na pasta types... e já era'. Comentário no LinkedIn: 'Nao sou uma AI kkkkkk'. Cuidado, segundo humanaizer.io e unslop: 'Inserir muitas interjeições ou gírias forçadas soa falso'.
- Fontes: https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://arxiv.org/html/2501.15654v2, https://www.tabnews.com.br/thi/meu-primeiro-projeto-open-source, https://humanaizer.io/pt/blog/como-deixar-o-texto-do-chatgpt-mais-natural-em-portugus-guia-prtico

### Impessoal e passivo onde o humano diz 'eu' [measured] (pt-BR/en/es, voice, adds-evidence-to-covered)

Formas como 'pode-se dizer', 'acredita-se que', 'foi identificado', 'faz-se necessário' e 'é possível observar' escondem quem fez. O post de dev brasileiro é cheio de 'eu decidi', 'eu escolhi', 'meu setup'. Reforça a regra 6 do João.

- Errado: Foi identificado que a orquestração externa tornou-se desnecessária.
- Certo: Eu percebi que não precisava mais do meu orquestrador quando passei uma semana sem abrir ele.
- Evidência: PROPOR 2026: o humano tem mais PRON e o texto humano traz 'opiniões explícitas do autor'. Reinhart et al. citam evidência de 'fewer human subjects and epistemic stance markers' em texto do GPT-4. Real no TabNews (deividsousan, 2026): 'Eu escolhi Python. Eu escolhi qual biblioteca... Eu escolhi a arquitetura'. Comentário de raulpy271 no TabNews sobre texto de IA: 'percebe-se a ausência de características humanas, como emoções, opiniões pessoais'.
- Fontes: https://aclanthology.org/2026.propor-2.22.pdf, https://www.pnas.org/doi/10.1073/pnas.2422455122, https://www.tabnews.com.br/deividsousan/sobre-minha-experiencia-criando-algo-100-por-cento-com-ia, https://www.tabnews.com.br/raulpy271/como-o-chatgpt-esta-me-desmotivando-a-usar-o-tabnews

### Carga de adjetivo intensificador [measured] (pt-BR/en/es, vocabulary, adds-evidence-to-covered)

A máquina põe mais adjetivos e modificadores adjetivais, como 'suposta dívida milionária', 'poderosa ferramenta', 'abordagem robusta e escalável'. O humano usa o fato ou o número.

- Errado: Uma poderosa e intuitiva ferramenta que oferece uma experiência robusta e significativa.
- Certo: A ferramenta roda 3 agentes ao mesmo tempo e não travou nenhuma vez em duas semanas.
- Evidência: PROPOR 2026: a maior diferença em classes gramaticais é o uso de ADJ pela máquina. O teste qui-quadrado é significativo, mas o V de Cramer = 0,082 é negligenciável, então o efeito no agregado é pequeno. EPIA 2026: a máquina tem mais coordenação de adjetivos ('e'). O Sem Lero-Lero lista 37 'adjetivos vazios'.
- Fontes: https://aclanthology.org/2026.propor-2.22.pdf, https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf, https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia

### Tema genérico sem motivo pessoal [observed] (pt-BR/en/es, content, new)

Post que explica o que qualquer documentação explica ('O que são hooks', 'Boas práticas de X', 'Top 10 Y') sem dizer por que o autor chegou ali. Na comunidade brasileira de dev, esse formato é lido como IA mesmo quando foi escrito por uma pessoa. A saída é partir do que aconteceu com o autor e trazer referência.

- Errado: Hooks no Claude Code: o que são e como usar. Hooks são scripts executados em eventos do ciclo de vida...
- Certo: Eu escrevi um hook que apagava meu .env sem querer, e foi assim que eu fui entender de verdade quando cada evento dispara.
- Evidência: No TabNews, JhonnyFreire comenta 'O que são os HTTP Status Code... tende a ser uma Ctrl+C e Ctrl+V do site do MDN... não faz diferença se o conteúdo foi gerado por um humano ou IA', e rafael diz que texto do ChatGPT é 'cansativo... muito lero lero'. No post de lucasdiasnoronha (2024), os comentários reclamam de 'post criado por IA todo bonitinho'. Russell et al.: originalidade aparece em 23,7% das explicações ('safe, lacking in surprises or humor').
- Fontes: https://www.tabnews.com.br/raulpy271/como-o-chatgpt-esta-me-desmotivando-a-usar-o-tabnews, https://www.tabnews.com.br/lucasdiasnoronha/quando-tabnews-se-tornou-umlinkedin-nunca-vi-tanto-texto-fake-criado-por-ia-como-aqui, https://arxiv.org/html/2501.15654v2

### Lista com rótulo em negrito e emoji como marcador [measured] (pt-BR/en/es, formatting, adds-evidence-to-covered)

O formato '- **Velocidade:** explicação' repetido em todo item, ou ✅/🚀/💡 servindo de bullet. Num post real, o emoji aparece dentro da frase como reação, não como marcador.

- Errado: - ✅ **Subagentes:** paralelização nativa.
- ✅ **Hooks:** automação de eventos.
- Certo: Hoje eu uso só duas coisas por fora, um hook que bloqueia commit com segredo e um comando de deploy que o harness não tem.
- Evidência: Washington Post: em julho de 2025, 70% das mensagens do ChatGPT tinham pelo menos um emoji, ✅ aparece 11 vezes mais que em texto humano, e 🧠 e 🔹 10 vezes mais. Guia de Russell et al.: 'When AI makes lists, it typically uses... a bold header per bullet point, followed by a colon'.
- Fontes: https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/, https://arxiv.org/html/2501.15654v2

### Lista de palavras proibidas envelhece, a estrutura não [measured] (en/pt-BR/es, other, adds-evidence-to-covered)

As palavras marcadoras mudam com o modelo. 'delve' caiu e 'core' e 'modern' subiram. Um skill que só proíbe palavras fica velho rápido. O que se mantém entre modelos é o ritmo, a vírgula, o estilo nominal e o paralelismo negativo. Na versão em inglês, ainda vale evitar o conjunto comum de Kobak.

- Errado: (skill que só tem uma lista de palavras proibidas e deixa passar 'core', 'modern' e frase de 20 palavras em série)
- Certo: (skill que checa a variação do tamanho das frases, a taxa de vírgula, o pretérito em primeira pessoa e o 'não é X, é Y', e só depois a lista de palavras)
- Evidência: Washington Post: em julho de 2025, 'delve' aparecia em 1 de cada 1.000 chats. 'Core' ficou 5 vezes mais frequente que no ano anterior, e 'modern' estava em mais de 8% das mensagens. As contrações subiram ('you're/it's' em quase 1/3), e 'not just X, but Y' estava em 6% dos chats. Kobak et al. (Science Advances 2025, 15,1 milhões de resumos): pelo menos 13,5% dos resumos de 2024 passaram por LLM. O conjunto comum é across, additionally, comprehensive, crucial, enhancing, exhibited, insights, notably, particularly, within, e 'delves' teve r = 28,0. Imoto (JA): o vocabulário identifica QUAL modelo escreveu (92%), e o ritmo muda na mesma direção em todos os modelos.
- Fontes: https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/, https://pmc.ncbi.nlm.nih.gov/articles/PMC12219543/, https://doi.org/10.5281/zenodo.21413035

### Tradução PT para EN e ES leva a pontuação junto [measured] (en/es/pt-BR, translation, new)

A convenção de vírgula muda com a língua. Em PT, a IA põe vírgula de menos. Em EN, põe de mais. Se o skill encadeia orações com vírgula em PT e traduz mantendo a mesma pontuação, o inglês fica cheio de vírgula e comma splice, o que lá é sinal de IA ou de tradução. Na versão em inglês, vale quebrar com ponto ou 'and'. Também vale reescrever as expressões, porque o decalque soa traduzido nos dois sentidos. Não achei medição para o espanhol.

- Errado: EN traduzido ao pé da letra: I had built a workflow with 20 commands, and today Claude Code does almost all of it, so I decided to write about what changed, and what I still use.
- Certo: EN: I had a workflow with 20 commands. Claude Code now does most of it on its own, so here's what changed and the two things I still run outside it.
- Evidência: Imoto (2026): a vírgula da IA fica acima da humana em EN (d = +0.45, contra 853 artigos do Dev.to anteriores ao ChatGPT) e abaixo em PT (d = -0.83, contra o TabNews). Preprint de autor único, sem dado para ES. A Wikipédia PT avisa que traduzir uma lista inglesa de marcadores não valida esses marcadores em PT e cita a perda de desempenho entre línguas no MULTITuDE.
- Fontes: https://doi.org/10.5281/zenodo.21424903, https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Sinais_de_texto_gerado_por_intelig%C3%AAncia_artificial

### Humanizar trocando sinônimo não funciona [measured] (pt-BR/en/es, other, new)

Paráfrase e humanizador trocam a muleta pela prima ('nesse contexto' vira 'nesse cenário') e mantêm a estrutura. O skill tem que cortar e reestruturar, não substituir palavra.

- Errado: Nesse cenário, convém salientar que o harness evoluiu. (trocado a partir de 'Nesse contexto, vale ressaltar')
- Certo: O harness mudou muito desde a versão que eu usava.
- Evidência: Russell et al.: 'neither paraphrasing nor humanization effectively removes all of these signatures', e a maioria dos especialistas teve 100% de TPR em textos do o1-Pro humanizados. humanizartexto.app: em 5 humanizadores, 2 a 4 das 4 expressões voltaram. BBC Brasil: pedir 'como um humano' baixou a nota do detector para 30%, mas o texto não ficou indetectável.
- Fontes: https://arxiv.org/abs/2501.15654, https://humanizartexto.app/expressoes-de-ia, https://www.bbc.com/portuguese/articles/c4gkwxq8we3o

### Citação de pessoa formal demais [measured] (pt-BR/en/es, content, new)

Quando o post cita alguém (um colega, um tweet, um comentário), a IA faz a citação falar no mesmo registro limpo do texto. Citação real é curta, truncada e coloquial.

- Errado: Como meu colega observou: "A adoção de subagentes representa uma mudança significativa na forma como estruturamos fluxos de trabalho."
- Certo: Um colega olhou meu setup e falou "cara, metade disso o Claude já faz", e ele tava certo.
- Evidência: Russell et al. (ACL 2025): citações aparecem em 22,3% das explicações. 'AI-generated quotes sound overly formal... mirror the article's main text too closely', e 'every expert speaks the same way'.
- Fontes: https://arxiv.org/html/2501.15654v2

## Linha de pesquisa: titles-descriptions

**Notas do pesquisador:** Sources I opened directly with full text: the HN /best page, the TabNews front page and the GATTINA PDF. All other sources were read through Exa's extracted page text, which in most cases covered the relevant sections (PNAS, Learned Publishing, the Sebo PMC paper, PROPOR 2026, StyGenAI 2026, the HKU stance study, Appel et al., Desloppy, the HubSpot/Outbrain PDF, the WaPo piece as reprinted by the Boston Globe). Caveats: (1) Desloppy, Originality.ai and Geostar are detector or humanizer vendors with a commercial interest. Desloppy publishes its method (100 posts, 5 models). Geostar's frequency percentages have no stated method, so I rated them opinion or observed only. (2) I found no study that measures parenthetical teaser titles or 3-clipped-sentence meta descriptions in AI output. The parenthetical entry rests on its traceable origin (HubSpot/Outbrain bracket data, SEO formula files given to LLMs) and on my own count of HN and TabNews titles. I found nothing new on meta descriptions beyond João's existing rule, so I did not add a pattern for them. (3) Some current TabNews front-page titles look AI-assisted themselves (parentheticals, 'tem três causas e três comandos', 'o que aprendemos no caminho'), so TabNews is not a clean human baseline. HN titles are a cleaner reference. (4) The StyGenAI stylometric corpus is very small (about 2,000 words per condition), so treat its numbers as indicative only. The PROPOR Portuguese numbers come from fake-news texts, not blogs. (5) LinkedIn AI share, for context: Originality.ai says 54% of long-form posts were likely AI in Oct 2024 and 81.2% of 5,000 posts in July 2026. A Pangram/404 Media figure (41% long-form) appears only second-hand in WriteNexa and I did not open the original. (6) One source (Twick) says Wikipedia now files the em dash as an AI sign only for 2022 to Sept 2026, because newer models were tuned to avoid it. I did not verify that on the Wikipedia page. (7) Two findings pull against each other: by default AI headlines are less sensational than human ones, but when prompted to be 'engaging' they overshoot. So the skill should aim for one honest strong word, not blandness and not hype. No memory notes bore on this task. The only indexed note, about showing blog drafts as rendered markdown, is unrelated and I did not open it.

### Colon title (X: Y) [measured] (pt/en/es/it, title-headline, new)

LLMs put a colon in almost every title, keyword first and explanation after: 'Tema: subtítulo explicativo'. They keep doing it even when the prompt tells them not to. Human dev titles are usually one plain sentence or a short noun phrase.

- Errado: Claude Code Harness: como a nova arquitetura de agentes mudou meu workflow
- Certo: O Claude Code engoliu meu workflow
- Evidência: GATTINA (CLiC-it 2024): 2,940 of 3,006 Phi-3.5 headlines (97.8%) had a colon. Mistral, Qwen, Gemma, Claude 3.5 Sonnet and GPT-4o did the same, even when told not to use colons, and Claude added the colon format to the prompt when asked to improve it. Sebo et al. 2026 (PMC): ChatGPT-4 titles had a colon in 100% of cases vs 30% for human titles. My own count of HN /best (30 titles, 26 Nov 2026): 2 of 30 had a colon, not counting the Ask HN/Show HN prefixes.
- Fontes: https://aclanthology.org/2024.clicit-1.121.pdf, https://pmc.ncbi.nlm.nih.gov/articles/PMC13367301/, https://news.ycombinator.com/best

### Over-complete, long title [measured] (pt/en/ko, title-headline, new)

AI titles try to hold the whole post: tool, method, result and audience. They come out longer and more explicit than human titles. Humans pick one fact or one feeling and leave the rest for the post.

- Errado: Como o harness do Claude Code com subagentes, hooks e skills substituiu meu workflow de 20 comandos e 45 agentes
- Certo: Joguei fora 45 agentes que eu mesmo criei
- Evidência: Sebo et al. 2026: ChatGPT titles had a median of 16 words vs 12.5 for humans (p<0.001), with more punctuation, more study-design detail and more framing. Korean headline study (KASBA, 48 articles): AI headlines averaged 39.2 characters and 8.6 eojeol vs 33.5 and 7.8 for journalists (p<.01 for characters).
- Fontes: https://pmc.ncbi.nlm.nih.gov/articles/PMC13367301/, https://kasba.or.kr/uploads/papers/NODE12408905.pdf

### Breakthrough-verb title opener (Unlocking/Navigating/Desvendando) [measured] (en/pt/es, title-headline, new)

A title that opens with a present participle verb promising a discovery: Unveiling, Unlocking, Unleashing, Revolutionizing, Navigating, Harnessing, Exploring. In Portuguese the same move is an opening gerund: Desvendando, Desbloqueando, Dominando, Navegando, Explorando, Revolucionando.

- Errado: Desvendando o harness do Claude Code: o que muda para devs
- Certo: Fui ver o que o harness do Claude Code faz por baixo
- Evidência: Comas-Forgas et al., Learned Publishing 2024 (Scopus titles 2015-2024): mean year-over-year growth in 2023-24 was Revolutionizing 381%, Unleashing 208%, Unveiling 157%, Unlocking 137%, Unravelling 89%, Navigating 74%, Harnessing 63%. 'Revolutionizing' titles went from 80 in 2022 to 616 in 2023. The authors estimate 63,780 potentially AI-assisted titles in 2023-24.
- Fontes: https://doi.org/10.1002/leap.1647, https://users.uniwa.gr/akoul/pubs/lp2025.pdf, https://ivoryembassy.com/15-ai-verbs-in-academic-writing/

### Parenthetical teaser add-on in title [observed] (pt/en/es, title-headline, adds-evidence-to-covered)

A complete title followed by a teaser in parentheses: '(e a maioria dos outros)', '(e por que isso importa)', '(e como corrigir)', '(that actually work)'. This comes from content-marketing CTR advice. The HubSpot/Outbrain finding was about format labels such as [Infographic] or [Template], and SEO playbooks turned it into a teaser device. LLMs and SEO 'skills' now produce it by default. A label that says what the post contains, like '(com código)', is not the problem. A wink that adds a twist is.

- Errado: O harness do Claude Code deixou meu workflow obsoleto (e a maioria dos outros)
- Certo: O harness do Claude Code deixou meu workflow obsoleto
- Evidência: HubSpot/Outbrain 2014-15 (3.3M paid headlines): 'bracketed clarifications' like [photos] or [interview] got 38% more CTR, and HubSpot's own blog saw 33% more views. A public SEO-writer skill (Mnemosyne-AI title-formulas.md) tells the model to add 'Brackets/Parentheticals', e.g. 'Email Marketing Tips (That Actually Work)'. Headline guides also list 'Why You're Doing X Wrong (and How to Fix It)'. I found no study that measures how often AI writes parenthetical teasers. My count: 0 of 30 HN /best titles had a teaser parenthetical, and 4 of 31 TabNews front-page titles had one (some of those may be AI-written).
- Fontes: https://cdn2.hubspot.net/hub/53/file-2505556912-pdf/Data%5FDriven%5FStrategies%5FFor%5FWriting%5FEffective%5FTitles%5Fand%5FHeadlines.pdf, https://github.com/dhaher-labs/Mnemosyne-AI/blob/main/skills/seo-content-writer/references/title-formulas.md, https://thebreakoutinsights.substack.com/p/5-7-headline-formulas-that-will-get, https://news.ycombinator.com/best, https://www.tabnews.com.br/

### Telegraphic keyword headline (articles dropped) [observed] (pt/it/en, title-headline, new)

AI titles drop articles and connectors to pack keywords in, which is an SEO habit. In Portuguese this reads strongly as machine-made because human titles keep 'o/a/meu' and verbs.

- Errado: Claude Code harness: agentes, hooks e workflows modernos
- Certo: Meu workflow de agentes virou peso morto
- Evidência: The GATTINA authors noticed that LLM headlines were generally 'poor in determinative and indefinite articles' compared with human ones, and they suggest SEO keyword stuffing in the training data as a cause. This was a qualitative remark with no count.
- Fontes: https://aclanthology.org/2024.clicit-1.121.pdf

### Bland explanatory headline with no charged word [measured] (pt/en/ko/ro, title-headline, new)

When nobody asks for clickbait, LLM titles are neutral and explanatory. Human titles more often carry one emotional or blunt word: obsolete, holy shit, quebrei, demorei, joguei fora. Opposite case: when an LLM is told to be 'engaging', it overshoots into exclamations, CAPS and 'the truth about'. Both extremes are tells. The human version is one honest strong word.

- Errado: Uma análise das mudanças no harness do Claude Code e seus impactos no desenvolvimento
- Certo: Demorei seis meses pra perceber que o Claude Code já fazia o que meu setup fazia
- Evidência: Korean study: 35.4% of journalist headlines (17/48) had stimulating words vs 12.5% (6/48) of ChatGPT headlines, chi2=7.13, p=0.0076. ACM TSC 2026: human headlines got higher clickbait ratings than LLM rewrites (human raters 3.74 vs 2.90). Gherhes et al. 2024 (600 participants): clickbait headlines that ChatGPT wrote on request used exclamations and 'SHOCK', and 44.7% of respondents rated them the most misleading.
- Fontes: https://kasba.or.kr/uploads/papers/NODE12408905.pdf, https://dl.acm.org/doi/full/10.1145/3839336, https://www.mdpi.com/2673-5172/5/4/110, https://www.mdpi.com/2078-2489/16/2/150

### SEO power-word titles (Ultimate guide / Guia completo / Tudo o que você precisa saber) [observed] (pt/en/es, title-headline, new)

Formula titles built on 'power words': Ultimate, Complete, Essential, Proven, Secret, Everything you need to know, The definitive guide, plus year tags like '[2026]'. SEO title-formula files hand these to LLMs as rules. A personal blog post that claims to be a complete guide reads as content-farm output.

- Errado: Claude Code em 2026: o guia definitivo com tudo o que você precisa saber
- Certo: O que eu ainda configuro à mão no Claude Code
- Evidência: The Mnemosyne-AI SEO-writer skill lists 'Ultimate, Essential, Complete, Proven, Secret' and year tags as CTR boosters for the model to use. The EarnQuill 2026 headline guide says to avoid 'ultimate' and 'game changing'. None of the 30 HN best titles used them.
- Fontes: https://github.com/dhaher-labs/Mnemosyne-AI/blob/main/skills/seo-content-writer/references/title-formulas.md, https://earnquill.com/blogging/how-to-write-blog-headlines, https://news.ycombinator.com/best

### Recap title 'X, e o que aprendi / o que mudou' [observed] (pt/en, title-headline, new)

A title (or description) made of two clauses: the event, then a promise of lessons ('e o que aprendi', 'o que aprendemos no caminho', 'o que mudou e o que eu ainda uso'). It works like the LinkedIn 'lessons learned' frame. Humans more often just state the event, or the single lesson.

- Errado: Criei 45 agentes, o harness tornou eles inúteis, e o que eu aprendi com isso
- Certo: Criei 45 agentes e o Claude Code tornou quase todos inúteis
- Evidência: Desloppy (100 AI LinkedIn posts from 5 models, Oct 2026): 'Lessons/takeaways' lists appeared in 26 of 100 posts. The same frame shows up on today's TabNews front page ('...e o que aprendi colocando no ar sozinho', 'O que aprendemos no caminho'). That is my reading of a single snapshot, with no count of how many of those posts are AI-written.
- Fontes: https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai, https://www.tabnews.com.br/

### What human dev titles look like (positive model) [observed] (pt/en, title-headline, new)

Real high-voted titles are mostly one plain sentence, in sentence case, often short. They name a concrete thing or a first-person event with a real number, sometimes with slang or profanity, and with no colon or parenthetical teaser. Use them as the target shape.

- Errado: Otimizando a latência de voice agents: estratégias para reduzir o tempo de resposta de LLMs
- Certo: Demorei 3 dias pra entender que meu voice agent perdia 300ms esperando o LLM terminar
- Evidência: HN /best sample (26 Nov 2026): '2035 came early', 'Smart people who give a shit use tools', 'LLM agents work for their parent companies, not for you', 'Quad9 pulled their DNS service from France'. 2 of 30 had a colon, 0 had a teaser parenthetical. TabNews sample: 'Demorei 3 dias pra entender que meu voice agent perdia 300ms...', 'A mesma tarefa no Claude Code custou de US$ 0,263 a 0,050 sem eu mudar nada', 'Ser proativo é algo ruim. Foi isso que escutei'. These use first person, real numbers and colloquial 'pra'.
- Fontes: https://news.ycombinator.com/best, https://www.tabnews.com.br/

### Uniform sentence length (Portuguese measured) [measured] (pt/en/es, rhythm, adds-evidence-to-covered)

In LLM Portuguese text, sentences are all about the same length. Human Portuguese text swings between very long comma-chained sentences and short ones. This supports João's rule that rows of short period-ended sentences read as AI: the fix is variance, including at least one long sentence held together with commas.

- Errado: Criei um workflow com 20 comandos. Hoje o Claude Code faz quase tudo sozinho. Vou mostrar o que mudou.
- Certo: Eu tinha montado um workflow com 20 comandos e 45 agentes, e hoje o Claude Code faz quase tudo isso sozinho, então resolvi ver o que ainda vale manter.
- Evidência: PROPOR 2026 (Fake.br/FakeTrueBR, Portuguese): the standard deviation of sentence length was 32.97 syllables in human text vs 9.93 in LLM text, and LLM text had lower syntactic diversity. Stylometric study (StyGenAI 2026, small corpus): GPT-4o original PT-BR and ES stories had shorter sentences than human ones (ES 8.9 vs 19.6 words). Muñoz-Ortiz et al. 2024 is cited there for more dispersed human sentence lengths in English news.
- Fontes: https://aclanthology.org/2026.propor-2.22.pdf, https://aclanthology.org/2026.stygenai-1.5.pdf

### Longer, rarer words and stacked adjectives (Portuguese) [measured] (pt/en, vocabulary, new)

LLM Portuguese prefers long, rare words and piles adjectival modifiers onto nouns ('solução robusta e escalável', 'utilizar', 'potencializar', 'implementação'). Human Portuguese uses short, common words: usar, fazer, ajuda, coisa.

- Errado: A utilização de uma arquitetura robusta e escalável potencializa significativamente a produtividade.
- Certo: Usar o harness do jeito que ele vem já me deixa bem mais rápido.
- Evidência: PROPOR 2026: machine Portuguese text averaged 2.39 syllables per word vs 2.17 for human text (Cohen's d=1.87, large), with significantly more adjectival modifiers. StyGenAI 2026: GPT-4o PT-BR originals had a mean Zipf frequency of 3.51 vs 3.70 for human text (rarer words) and higher lexical density (0.540 vs 0.485).
- Fontes: https://aclanthology.org/2026.propor-2.22.pdf, https://aclanthology.org/2026.stygenai-1.5.pdf

### Missing first person (self-mention gap) [measured] (en/pt/es, voice, adds-evidence-to-covered)

LLMs evaluate without anyone doing the evaluating. 'É crucial', 'isso proporciona benefícios inestimáveis', where a human writes 'eu acho', 'pra mim', 'eu fiz'. This is one of the largest measured gaps between human and AI text, and it supports João's first-person rule. Put 'eu' in the claims, not only in the anecdotes.

- Errado: Manter um workflow próprio de agentes é cada vez menos necessário, já que o harness oferece recursos nativos.
- Certo: Eu parei de manter meu workflow de agentes porque o harness já faz quase tudo que eu tinha montado.
- Evidência: Appel et al. 2025 (Humanities & Social Sciences Communications): first-person pronouns averaged 2.81 in human stories vs 0.21 in ChatGPT stories (d=0.93). HKU AJAL stance study (125 GPT-4o essays vs 125 learner essays): self-mentions had a median of 29.0 per 1,000 words for humans vs 0 for GPT-4o (Cliff's delta=.988), appeared in 124/125 human essays vs 37/125 GPT essays, and appeared in 52.4% of human Claims vs 5.3% of GPT Claims. The same pattern held for GPT-5.5, DeepSeek-V4 and Claude Sonnet 4.6. Kobe University corpus study: ChatGPT avoids first-person singular pronouns.
- Fontes: https://www.nature.com/articles/s41599-025-06341-2, https://caes.hku.hk/ajal/index.php/ajal/article/download/1554/780, https://da.lib.kobe-u.ac.jp/da/kernel/0100487714/0100487714.pdf

### Too formal, no colloquial or netspeak markers [measured] (pt/en, voice, adds-evidence-to-covered)

LLM text keeps a polished, standard register and uses far fewer informal and internet-speak forms than humans. In Brazilian Portuguese the human markers are 'pra', 'tá', 'né', 'tipo', 'a gente', dropped subjects and light agreement slips. This supports João's rule that perfect grammar reads as AI.

- Errado: Nós estamos utilizando esta ferramenta há aproximadamente seis meses e os resultados têm sido satisfatórios.
- Certo: A gente tá usando isso faz uns seis meses e, tipo, funcionou bem melhor do que eu esperava.
- Evidência: Rodrigues, Sturm & Pinheiro 2026 (PMC): every LLM tested produced 'a more formal and standardized tone, using significantly fewer informal and netspeak expressions' than humans, with fewer negative emotions (anger, sadness) and more certainty and causal language.
- Fontes: https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/

### Both-sides balance and double thesis [measured] (pt/en, content, new)

LLMs argue both sides by default and won't commit: 'X é importante, mas Y é igualmente importante', 'uma combinação de fatores'. Humans pick a side and defend it with evidence. A personal blog post needs a clear position.

- Errado: O harness é poderoso, mas workflows customizados também têm seu valor, e o ideal é encontrar um equilíbrio.
- Certo: Pra mim o harness ganhou. Mantive só dois comandos, e só porque o Claude Code ainda não faz deploy do jeito que eu quero.
- Evidência: HKU AJAL: GPT-4o 'predominantly presented two-sided complete arguments, while learner essays were predominantly one-sided'. Antonio & Antonelli 2025 (Acta Scientiarum, UEM vestibular, Brazilian Portuguese): ChatGPT answered that success is 'uma combinação dos três fatores' or set up two central units joined by contrast, while human candidates used evidence and justification relations, and ChatGPT repeated nouns and adjectives more. Kobe study: ChatGPT took the same side in all 50 essays per topic.
- Fontes: https://caes.hku.hk/ajal/index.php/ajal/article/download/1554/780, https://periodicos.uem.br/ojs/index.php/ActaSciLangCult/article/view/72030, https://da.lib.kobe-u.ac.jp/da/kernel/0100487714/0100487714.pdf

### Participle tails and nominalizations (measured rates) [measured] (en/pt/es, sentence, adds-evidence-to-covered)

Instruction-tuned models stack present participial clauses ('..., garantindo X', '..., permitindo Y') and nominalizations ('a implementação da otimização'). This is already on the covered list, so the entry only adds hard rates. In Portuguese, cut the trailing gerund and turn nouns back into verbs.

- Errado: O harness centraliza a orquestração dos agentes, garantindo a otimização da execução e permitindo a redução da complexidade.
- Certo: O harness cuida dos agentes sozinho, então eu tenho bem menos coisa pra manter.
- Evidência: Reinhart et al., PNAS 2025 (Biber's 66 features): GPT-4o used present participial clauses at 5.3x the human rate (d=1.38), nominalizations 2.1x, 'that' clauses as subject 2.6x, and phrasal coordination 1.9x. Instruction tuning made output less human-like than the base models.
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122

### Generic hashtag stack [measured] (pt/en/es, formatting, new)

A row of 4-7 generic tags at the end of a post (#IA #Inovação #Carreira #Tecnologia #Produtividade). It is the most frequent single habit in AI LinkedIn posts. Use none, or one or two specific tags.

- Errado: #IA #ClaudeCode #Produtividade #Inovação #DesenvolvimentoDeSoftware #Tecnologia
- Certo: #claudecode
- Evidência: Desloppy (100 posts, 5 models, Oct 2026): 86 of 100 had hashtags. Averages were 6.5 per post for GPT-OSS, 5.7 for Qwen, 5.6 for Gemini, 4.5 for Claude and 0.8 for ChatGPT. This is a small study by a vendor.
- Fontes: https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai

### Emoji bullets and rocket/check emoji [measured] (pt/en/es, formatting, adds-evidence-to-covered)

Emoji at the start of lines (🚀 ✅ 💡 👉) used as bullets, and closing with 🚀 or 👇. Wikipedia lists emoji at the start of headings and list items, but the LinkedIn rates are new.

- Errado: 🚀 Menos comandos
✅ Mais autonomia
💡 Mais foco no que importa
- Certo: Hoje eu uso dois comandos meus, o resto é o que o Claude Code já traz.
- Evidência: Washington Post (328,744 GPT-4o messages, May 2024 to Jul 2025): 70% of messages had at least one emoji by July 2025. ✅ was used 11x more than humans used it, and 🧠 and 🔹 10x more. Desloppy: 🚀 in 43 of 100 posts, emoji at line start in 40, 👇 in 18.
- Fontes: https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/, https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai

### Announcement opener ('Thrilled to share' / 'Feliz em compartilhar') [measured] (en/pt/es, content, new)

The post opens by announcing an emotion about sharing ('Feliz em compartilhar', 'Animado em anunciar', 'Thrilled to share') before the news. The fix is to open with the news.

- Errado: Muito feliz em compartilhar que publiquei um novo artigo no blog! 🚀
- Certo: Joguei fora 43 dos 45 agentes que eu tinha criado. Escrevi o porquê no blog.
- Evidência: Desloppy: 'Thrilled/excited to share' in 24 of 100 AI posts. 'Grateful/gratitude' appeared in 31, 'journey' in 22, 'incredible/amazing' in 22 and 'next chapter' in 10.
- Fontes: https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai, https://getpresend.com/blog/linkedin-post-not-sound-like-chatgpt

### LinkedIn journey/gratitude vocabulary (jornada, novo capítulo, grato) [measured] (en/pt/es, vocabulary, new)

Career-post filler words: jornada/journey, novo capítulo/next chapter, grato/grateful thanking everyone as a group, incrível/amazing. Thank one named person for one specific thing, or don't thank anyone.

- Errado: Essa jornada foi incrível e sou muito grato a todos que fizeram parte desse novo capítulo.
- Certo: Valeu ao Pedro, que me mostrou os hooks do Claude Code numa call de 10 minutos.
- Evidência: Desloppy (100 posts): grateful 31, journey 22, incredible/amazing 22, next chapter 10. Portuguese practitioner lists (Dorly, Jefferson Barbosa, Leandro Rezende) independently name 'jornada'.
- Fontes: https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai, https://dorly.com.br/artigos/sinais-texto-escrito-por-ia/, https://jeffersonfbarbosa.substack.com/p/voce-esta-falando-como-o-chatgpt

### Broetry / staircase formatting [observed] (en/pt/es, structure, new)

Every sentence is its own paragraph for the whole post, with one-word dramatic beats ('Hoje?', 'Resultado?'). LinkedIn's creator courses taught this shape and models learned it from them. Use paragraphs of 2-4 sentences, with at most one standalone line.

- Errado: Eu tinha 45 agentes.

20 comandos.

Hoje?

Uso 2.
- Certo: Eu tinha 45 agentes e 20 comandos, e hoje uso dois comandos e quase nenhum agente meu. O resto o Claude Code já faz.
- Evidência: Sagnik Bhattacharya, FreeHumanizerAI, WriteNexa (40 drafts marked up), Presend and Underslop all name staircase/broetry as a top tell, and Underslop traces it to pre-LLM creator courses. Geostar lists a 'dramatic pause' single-word paragraph as step 6 of an 8-step AI formula, but its methodology was not stated.
- Fontes: https://sagnikbhattacharya.com/blog/linkedin-posts-with-ai-without-sounding-ai, https://www.freehumanizerai.com/blog/humanize-ai-linkedin-posts, https://www.writenexa.com/blog/how-to-write-linkedin-posts-with-ai-without-sounding-like-linkedin/, https://underslop.com/why/linkedin-post-sounds-like-chatgpt, https://www.geostar.ai/resources/ai-writing-patterns-research-data/linkedin

### Scroll-stopper hook before 'see more' [observed] (en/pt, structure, new)

A first line written only to beat the LinkedIn truncation, about 140 characters on mobile and about 210 on desktop. It is dramatic and has no information ('3 anos atrás eu perdi tudo.', 'Ninguém fala sobre isso.'). Human hooks carry a fact, a number and a tension.

- Errado: Ninguém te conta isso sobre o Claude Code.
- Certo: Apaguei 43 dos 45 agentes que eu tinha escrito pro Claude Code, porque o harness novo já fazia o trabalho deles.
- Evidência: Sagnik Bhattacharya gives about 140 characters on phone and a bit over 200 on desktop before 'see more', and says strong hooks share 'a fact, a tension and a promise'. Geostar puts the hook (<210 chars) first in the AI formula. WriteNexa's advice is to start with the second sentence, which is 'usually the real one'.
- Fontes: https://sagnikbhattacharya.com/blog/linkedin-posts-with-ai-without-sounding-ai, https://www.geostar.ai/resources/ai-writing-patterns-research-data/linkedin, https://www.writenexa.com/blog/how-to-write-linkedin-posts-with-ai-without-sounding-like-linkedin/

### Label opener ('Hard truth:' / 'Opinião impopular:' / 'Here's what happened:') [observed] (en/pt, punctuation, adds-evidence-to-covered)

A line opens with a label and a colon that announces the kind of statement coming ('Verdade dura:', 'Opinião impopular:', 'Aqui está o que aconteceu:', 'Here's what I learned:'). Close to the covered colon-reveal and staged-runup patterns, listed here as its LinkedIn variant.

- Errado: Opinião impopular: você não precisa de 45 agentes.
- Certo: Eu acho que quase ninguém precisa de 45 agentes, eu com certeza não precisava.
- Evidência: WriteNexa lists 'Label openers' among its ten tells, found in more than half of 40 drafts. Geostar gives 'Here's what happened next:' a 100% frequency in its formula, with unstated methodology. The skillsdirectory LinkedIn skill bans 'Here's what I learned:' and 'The lesson?'.
- Fontes: https://www.writenexa.com/blog/how-to-write-linkedin-posts-with-ai-without-sounding-like-linkedin/, https://www.geostar.ai/resources/ai-writing-patterns-research-data/linkedin, https://www.skillsdirectory.com/skills/thesmokedev-linkedin-post

### Engagement-bait closer ('Agree? 👇' / 'E você, o que acha?') [measured] (en/pt/es, content, new)

The post ends on a stock question to farm comments ('Concorda?', 'E você, como faz?', 'Comenta aqui 👇'). End on your own point, or ask one specific question you actually want answered.

- Errado: E você, ainda usa workflows customizados? Comenta aqui 👇
- Certo: Se alguém achou um jeito de fazer o Claude Code respeitar o meu fluxo de deploy, me fala, porque esse é o único comando que eu ainda mantenho.
- Evidência: Desloppy: closing question in 7 of 100 AI posts and 👇 in 18. Geostar lists 'Question + emoji' CTA at 78% frequency (methodology not stated). Several practitioner guides (Presend, FreeHumanizerAI, Sagnik) name it.
- Fontes: https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai, https://www.geostar.ai/resources/ai-writing-patterns-research-data/linkedin, https://getpresend.com/blog/linkedin-post-not-sound-like-chatgpt

### Suspiciously specific scene detail / manufactured metric [opinion] (en/pt, content, new)

Invented-looking precision used to fake authenticity ('Eram 16h47 de uma terça', 'R$ 5 milhões em receita'). Real numbers are good. Decorative timestamps and round, too-good metrics are the tell. Use only numbers João actually has.

- Errado: Eram 23h47 de uma quinta-feira quando percebi que meus 45 agentes não serviam pra nada.
- Certo: Percebi numa sexta à noite, rodando o mesmo PR com e sem meus agentes.
- Evidência: One source only: Geostar's LinkedIn formula page, which gives 87% for 'suspiciously specific' timestamps and 94% for manufactured metrics without describing its corpus or method.
- Fontes: https://www.geostar.ai/resources/ai-writing-patterns-research-data/linkedin

### Title Case in Portuguese titles [observed] (pt/es/en, title-headline, adds-evidence-to-covered)

Capitalizing every main word ('O Harness Do Claude Code Deixou Meu Workflow Obsoleto') is an English habit. Portuguese and Spanish titles use sentence case, so in PT/ES it is an even stronger tell. Wikipedia lists title case for English headings, and this entry adds the PT note.

- Errado: Como Eu Substituí Meu Workflow Pelo Harness Do Claude Code
- Certo: Como eu troquei meu workflow pelo harness do Claude Code
- Evidência: Wikipedia Signs of AI writing: 'Using title case instead of sentence case in section titles'. An EMNLP 2026 Findings paper codifies it as cue WE6. In my TabNews sample almost all human titles are sentence case.
- Fontes: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing, https://aclanthology.org/2026.findings-emnlp.1539.pdf, https://www.tabnews.com.br/

### Em dash in Portuguese (measured) [measured] (pt/es/en, punctuation, adds-evidence-to-covered)

Already covered, added here because there are Portuguese-specific numbers. GPT-4o puts em dashes into PT-BR text, especially translations, where human PT writers use almost none. This matters for the PT to EN/ES translation step of the pipeline: check the translations for dashes too.

- Errado: O harness — que antes era simples — agora faz quase tudo.
- Certo: O harness, que antes era simples, agora faz quase tudo.
- Evidência: StyGenAI 2026: 27.3 em dashes per 1,000 tokens in GPT-4o PT translations, 25.3 in ES and 10.1 in EN, vs 0.0 in every human translation. GPT PT-BR originals had 9.5 vs 0.0 for the human PT original (small corpus). Washington Post: more than half of ChatGPT responses had an em dash by summer 2025, up from fewer than 1 in 10 a year earlier. 'Not just X but Y' appeared in 6% of chats in July 2025.
- Fontes: https://aclanthology.org/2026.stygenai-1.5.pdf, https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/

### Portuguese filler connectors and openers [observed] (pt, vocabulary, adds-evidence-to-covered)

PT equivalents of AI vocabulary: 'vale ressaltar', 'é importante destacar', 'no cenário atual', 'nos dias de hoje', 'além disso' at the start of a sentence, 'mergulhar', 'robusto', 'alavancar', 'desbloquear', 'em suma'. Several independent Brazilian sources agree on the same list.

- Errado: No cenário atual, vale ressaltar que o Claude Code se tornou uma ferramenta robusta. Além disso, ele permite mergulhar fundo em workflows.
- Certo: O Claude Code ficou bom o bastante pra eu largar meu setup.
- Evidência: These sources independently list the same items: O Tecido 2026 ('mergulhar fundo', 'no cenário atual', 'vale ressaltar que', 'não se trata apenas de X, mas de Y', trios, 'robusto', travessões), Dorly ('conectivos de esteira: Além disso, Ademais', 'conclusão-bumerangue' that repeats the intro), Jefferson Barbosa ('Nenhum eu'), Lucas Silva's banned list, and Leandro Rezende.
- Fontes: https://otecido.com.br/article/o-escritorio-comecou-a-falar-como-o-chatbot, https://dorly.com.br/artigos/sinais-texto-escrito-por-ia/, https://jeffersonfbarbosa.substack.com/p/voce-esta-falando-como-o-chatgpt, https://www.lucassilva.io/skills/escrita-humanizada, https://lp.boldschool.com.br/viral/skills-anti-slop

## Linha de pesquisa: human-voice

**Notas do pesquisador:** How I read the sources: full or partial WebFetch for Russell et al. 2025 (arXiv html v2, first 100k characters), Wikipedia:Signs of AI writing (characters 0–200k; the last 52k were not read), and the Rodrigues et al. PMC article (first 100k characters; its Table S3 with the Portuguese keywords was not visible, so only the PT terms quoted in the article text are used). Everything else was read from substantial page extracts returned by Exa search: abstracts plus quoted result sections for PNAS Reinhart, PNAS Jakesch, HC3, RAID, Stumbling Blocks, the PISA arXiv paper, Witchel/Frontiers, Fake.br/PROPOR, STYGENAI and the Pangram pages.

Two sources were read as abstract only: the Imoto 2026 Zenodo preprint (TabNews/Dev.to rhythm and comma results) and Thorold 2025. The Imoto numbers come from its abstract and the preprint is not peer-reviewed. The HumanPen page is secondary; I used it only for the r/Professors anecdotes and checked its RAID numbers against the RAID PDF table, where they match. I did not open Waltzer 2024, De Wilde 2024 or Fleckenstein 2024; they are cited only as reported inside the PISA paper. I did not run the Pangram humanizer or verify vendor methodology.

Conflicting evidence:
(a) Hedging. Some studies find AI hedges as much as or more than humans (Kolesnikova 2026, Curfman 2026 vs L2 learners), while others find fewer stance markers overall (Jiang & Hyland, Carlo & Takeuchi). Boosters and self-mention being lower in AI is the consistent part.
(b) Sentence length. The mean goes in different directions in PT: longer in machine fake news (Fake.br) but shorter in GPT-4o PT-BR stories (STYGENAI). Lower variance in AI text is consistent everywhere.
(c) Bullets and headers. Pangram measures 9× more bullets in AI text, but a 2026 N=60 pilot found no significant difference.
(d) First person. Lay readers over-trust it (Jakesch), so it fools casual readers but not expert ones. It must come with real content.
(e) Passive voice. The covered list treats it as an AI tell, but PNAS found GPT-4o uses the agentless passive at about half the human rate. Suggest softening that rule.
(f) Em dash. Wikipedia now files em-dash overuse under historical indicators (2022 to Sep 2026), and one GPT corpus found fewer em dashes than humans in novels. Still, 2025 ChatGPT and GPT-4o PT translations used them heavily, so banning them remains safe for João.

On the user's specific request to 'commit Portuguese errors': the evidence supports colloquial register and loose, comma-chained syntax. It does not support planted misspellings. Those barely move commercial detectors (RAID, GPTZero -1.4 points), measurably cut reader trust (-5.9 per 100 points for 2 typos, -13.5 for 5), and Google's helpful-content questions mention spelling. I recommend the skill encode 'informal but fluent BR Portuguese' rather than random typos, and the main session should present this tradeoff to João honestly.

Memory: the only memory note (feedback_blog_draft_rendered_markdown.md, show drafts as rendered markdown, not in a code block) is not relevant to this research step. Nothing new to save from this research, except perhaps that TabNews and Dev.to pre-ChatGPT corpora have been used as human baselines (Imoto 2026), which could be useful for calibrating a lint.

### Primeira pessoa singular densa (eu/meu), não 'nós' genérico [measured] (pt/en/es, voice, adds-evidence-to-covered)

Humans writing opinion or personal text use 'I/eu' far more than LLMs. LLMs either drop the self or switch to an inclusive rhetorical 'we/nós' ('we must', 'can we...?'). An LLM rewrite of a human text also cuts first-person density. In the skill, put João's 'eu' in the subject position of claims and experiences ('eu testei', 'eu acho', 'no meu setup'), and avoid 'nós precisamos'/'devemos' as a rhetorical device.

- Errado: Precisamos repensar a forma como usamos agentes. Podemos, então, nos perguntar: vale a pena manter um workflow próprio?
- Certo: Eu passei uns três meses mantendo 20 comandos e 45 agentes, e na real hoje eu uso uns quatro, o resto eu nem lembro que existe.
- Evidência: Appel et al. 2025 (German stories, LIWC): 1st-person pronouns were 2.81% of words in human texts vs 0.21% in ChatGPT, d=0.93. Thorold 2025 (100 UK op-eds vs 100 GPT-4): humans used I and you more than twice as often, and GPT-4 relied on a repetitive inclusive 'we' ('we must', can+we questions). Jiang & Hyland 2026: self-mention 'I' appeared 243 times in student essays vs 1 time in ChatGPT essays on the same topics. Tobias & Couto da Silva 2025 (Brazilian Reddit, PT): human comments use more 1st-person singular and past tense. van Nuenen 2026: GPT-5.4, Claude Sonnet 4.6 and Gemini 3.1 rewrites cut 1st-person density by 9% (d=-0.57). Godar et al. 2026 pilot: LLMs used fewer personal pronouns (p=0.0046, largest effect). Caveat, Jakesch et al. 2023 (PNAS, N=4,600): lay readers treat 1st person as a human cue, but the feature alone did not separate AI from human self-presentations, so 'eu' is necessary but not sufficient.
- Fontes: https://doi.org/10.1057/s41599-025-06341-2, http://www.nature.com/articles/s41599-025-06341-2.pdf, https://hdl.handle.net/2077/90156, https://www.degruyterbrill.com/de/document/doi/10.1515/applirev-2025-0188/html, https://doi.org/10.5753/webmedia.2025.15908, https://arxiv.org/abs/2604.22142, https://doi.org/10.1109/gaiss66401.2026.11779697, https://www.pnas.org/doi/10.1073/pnas.2208839120

### Polir/reescrever com IA apaga a voz (inclusive na tradução) [measured] (pt/en/es, voice, new)

Asking a model to 'improve' or even just 'rewrite' human text moves it the same way every time: fewer function words, fewer 1st-person pronouns and contractions, longer words, more varied vocabulary, more elaborate punctuation, more distanced narration and compressed abstraction. Prompts that ask the model to preserve voice only cut the effect by about a third. Practical rule for the skill: a revision pass must not 'polish'. Each revision has to be checked against João's draft for pronoun density, contractions and sentence-length variance. This applies to the EN and ES translations too.

- Errado: (rascunho do João) 'Aí eu fui ver e o hook tava rodando duas vezes, perdi uma tarde nisso.' → (revisão IA) 'Ao investigar, constatei que o hook era executado em duplicidade, o que demandou uma tarde de depuração.'
- Certo: Aí eu fui ver e o hook tava rodando duas vezes, perdi uma tarde inteira nisso.
- Evidência: van Nuenen 2026 (300 personal narratives, 3 frontier models, 13 stylometric markers): contraction density -31% (d=-0.48), 1st-person -9% (d=-0.57), word length +8.5% (d=+1.50), MTLD +53%. Direction held for 'rewrite-only' prompts. Voice-preserving prompts cut magnitude by 32% but kept the direction. Rewrites converged in feature space and could not be matched back to their sources. Reinhart et al. 2025 (PNAS): instruction tuning widens the style gap. Base Llama matched human rates, and instruct models did not, even when given a 500-word style sample. 'The Style of Machines' (STYGENAI 2026): GPT-4o translations into PT-BR used 27.3 em dashes per 1k tokens vs 0.0 in human translations.
- Fontes: https://arxiv.org/abs/2604.22142, https://www.pnas.org/doi/10.1073/pnas.2422455122, https://aclanthology.org/2026.stygenai-1.5.pdf

### Ritmo monótono: variar muito o tamanho de frase e de parágrafo [measured] (pt/en/es, rhythm, adds-evidence-to-covered)

Across languages, LLM sentence lengths cluster in a narrow band (about 10 to 30 tokens), and humans spread much wider, with long chained sentences next to very short ones. Paragraphs are also more uniform in AI text. In PT-BR this was measured against pre-ChatGPT TabNews posts, which are João's own cross-post venue. The variance matters more than the mean. Mix a long, comma-chained sentence with a short throwaway one, and vary paragraph length, including a one-line paragraph that is not a dramatic closer.

- Errado: O Claude Code evoluiu bastante. Agora ele gerencia subagentes sozinho. Isso reduz a necessidade de comandos próprios. Meu workflow ficou redundante.
- Certo: O Claude Code mudou tanto nos últimos meses que metade do que eu tinha montado virou redundante, os subagentes, o esquema de plano, até o hook de review que eu tinha orgulho, tudo isso ele já faz sem eu pedir. Sobrou pouco.
- Evidência: Imoto 2026 preprint (abstract only read): 7 LLMs × 10 themes × 5 trials vs 403 pre-ChatGPT TabNews posts (PT-BR) and 853 Dev.to posts (EN). In all 70 model×language cells, AI sentence-length burstiness and CV were lower than human. Pooled character-burstiness d=-1.03 (PT), -1.12 (EN). Current Claude models show about one third of GPT-3.5's monotonization (d=-0.58 to -0.96). Fake.br study (PROPOR 2026, PT-BR): sentence-length SD was 32.97 syllables in human fake news vs 9.93 in machine text, and machine sentences were longer on average (20.57 vs 15.58 tokens). Muñoz-Ortiz et al. 2024 (NYT, 6 LLMs): LLM sentences concentrate in the 10–30 token range, and humans have wider distributions. Sedaghat Payam & Quinn 2026: sentence-length variability is compressed in GPT-5.5 novels. GPTZero: burstiness is 'how much writing patterns and text perplexities vary over the entire document' (GPTZero says it moved to deep learning in autumn 2023). Pangram guide: AI paragraphs are 'all about the same length'.
- Fontes: https://doi.org/10.5281/zenodo.21424903, https://aclanthology.org/2026.propor-2.22.pdf, https://link.springer.com/article/10.1007/s10462-024-10903-2, https://arxiv.org/abs/2608.12630, https://gptzero.me/news/perplexity-and-burstiness-what-is-it, https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns

### Vírgula a mais, ponto a menos (calibrado para PT) [measured] (pt/es, punctuation, adds-evidence-to-covered)

LLMs place commas at roughly the same rate in every language. Human Portuguese uses far more commas than English, so in PT the AI text undershoots the human comma rate. GPT-4o in PT-BR also uses more periods than human writers. This supports João's rule (chain clauses with commas, use fewer periods). The direction is the opposite in English, where AI overshoots commas, so the EN translation should not copy the PT comma density mechanically.

- Errado: Criei 20 comandos. Hoje uso quatro. O resto ficou obsoleto.
- Certo: Eu criei uns 20 comandos, hoje uso quatro, o resto ficou parado lá na pasta.
- Evidência: Imoto 2026 (TabNews PT-BR baseline): AI comma density was below human in Portuguese (d=-0.83) and above human in English (d=+0.45), because 'AI writes commas at a nearly language-independent rate while human comma conventions differ twofold'. 'The Style of Machines' (STYGENAI 2026, small corpus): GPT-4o PT-BR translations had more periods than human ones (108.2 vs 86.7 per 1k tokens), and human PT-BR/ES originals had much longer sentences (ES human 19.6 vs GPT 8.9 words). Small samples, so the direction is more reliable than the magnitude.
- Fontes: https://doi.org/10.5281/zenodo.21424903, https://aclanthology.org/2026.stygenai-1.5.pdf

### Registro coloquial brasileiro, não erros de digitação [measured] (pt, voice, adds-evidence-to-covered)

Human PT-BR online text is markedly more informal: spoken connectors and contractions ('aí', 'então', 'por isso', 'pra', 'tô', 'a gente', starting a sentence with 'Mas' or 'E'), slang and netspeak. LLMs strip all of this. The safe way to break 'perfect grammar' is to write in accepted spoken-register Brazilian Portuguese (colloquial syntax, informal agreement, clitic placement as people speak, 'ter' for 'haver') rather than to plant misspellings.

- Errado: Ademais, convém salientar que tal abordagem se mostrou mais eficiente.
- Certo: E tem outra coisa, pra mim isso funcionou bem melhor, mas eu tô no Mac, não sei como fica no Windows.
- Evidência: Rodrigues et al. 2026 (European PT news, GPT-4o/Mistral/Llama, LIWC): informal language was 54–72% lower in LLM factual news, and netspeak was about 81–84% lower in LLM fake news. Human-salient n-grams included 'por isso', 'vai', 'então', 'porque'. Tobias & Couto da Silva 2025 (Brazilian Reddit): readability of human comments needed 2–7 years of schooling vs 10–12 for GPT/Gemini/Sabiá, and models used more articles, conjunctions and prepositions. HC3 (Guo et al. 2023): human answers are 'more colloquial... full of oral abbreviations and slang'. Russell et al. 2025: contractions, slang, 'just', 'actually' made one expert label o1-Pro text as human. Washington Post 2025: ChatGPT's own contraction use rose sharply ('you're'/'it's' in almost a third of chats), so English contractions alone are weakening as a cue.
- Fontes: https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/, https://doi.org/10.5753/webmedia.2025.15908, https://arxiv.org/pdf/2301.07597, https://arxiv.org/html/2501.15654v2, https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/

### Erros de digitação deliberados: evidência dos dois lados [measured] (pt/en/es, content, adds-evidence-to-covered)

Debate summary for the skill. FOR: expert human detectors cite near-perfect grammar as an AI clue, teachers rely on the absence of errors, and a few character typos break metric-based detectors. AGAINST: modern commercial and embedding detectors barely move, some detectors raise the AI score when typos are added, typos measurably cut trust and perceived intelligence, Google's helpful-content self-assessment asks about spelling issues, and Russell's experts were not fooled by humanization. Recommendation: no fake misspellings in the published post. Get 'imperfection' from register (colloquial grammar, run-ons, self-correction, wordy phrasing), and keep at most one natural slip of the kind a fluent speaker makes, never a non-word.

- Errado: Eu achei o resultado muito interesante e a perfomance melhorou bastante.
- Certo: Eu achei o resultado bem interessante, a performance melhorou, ou melhor, melhorou no meu caso, que é um repo pequeno.
- Evidência: FOR: Russell et al. 2025: grammar/punctuation clues appeared in 24.8% of expert explanations ('usually grammatically perfect'), and imperfect grammar pointed to human. Jakesch et al. 2023: grammatically flawed self-presentations were 15% less likely to be AI. PISA 2025 study: students wrote 4.36 misspellings per 100 words vs 0.72 for chatbots, and teachers rely on the absence of errors (Waltzer 2024, De Wilde 2024). Stumbling Blocks (ACL 2024): 2–6 character typos per ~110-token text pushed most metric detectors below random. AGAINST: RAID (ACL 2024): a common-misspelling attack changed accuracy at 5% FPR by only -1.4 (GPTZero), -6.4 (Originality), -3.5 (Winston). PISA: inserted misspellings changed macro-F1 by at most 0.03. Brar 2026: adding typos raised AI scores on some detectors. Jakesch: lay readers were 5% more likely to call text with grammar issues AI. Witchel et al. 2022 (Frontiers): 2 typos cut trust by 5.91/100 and 5 typos by 13.5/100. Kreiner et al. 2002: 4 errors had no significant effect, many errors lowered perceived writing ability. AB-Lab (n=400): 4 typos cut perceived smartness by 21.5%. Google: 'Does the content have any spelling or stylistic issues?' (self-assessment, not stated as a ranking signal). r/Professors reports (via HumanPen, secondary): implausible misspellings make graders suspicious.
- Fontes: https://arxiv.org/html/2501.15654v2, https://www.pnas.org/doi/10.1073/pnas.2208839120, https://arxiv.org/html/2611.12487, https://aclanthology.org/2024.acl-long.160.pdf, https://aclanthology.org/2024.acl-long.674.pdf, https://doi.org/10.5281/zenodo.22651813, https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.873844/full, https://pubmed.ncbi.nlm.nih.gov/12038495/, https://www.ab-lab.org/email-typos.html, https://developers.google.com/search/docs/fundamentals/creating-helpful-content, https://humanpen.net/blog/do-typos-lower-ai-detection-score

### Tomar partido com 'boosters' pessoais (sempre, na real, eu sei) [measured] (pt/en/es, voice, new)

Human argumentative writers commit: they use boosters ('always', 'actually', 'I know', 'I think', 'of course', 'never') about twice as often as LLMs, often hyperbolically and tied to 'I'. LLMs keep a detached, balanced stance, give every side a paragraph and conclude nothing. Hedging evidence is mixed (some studies find AI hedges as much or more), so the clearer signal is the missing commitment. João should state a position and own it.

- Errado: Há vantagens e desvantagens em manter um workflow próprio, e a escolha depende do contexto de cada desenvolvedor.
- Certo: Eu acho que não vale mais a pena manter workflow próprio pra quase nada, sempre que eu tentei manter, quebrou na versão seguinte do Claude Code.
- Evidência: He 2025 (DAIGT V2, about 1.3M words): boosters were 4.01 per 1k words in human essays vs 1.75 in AI (-56.4%). 'always' 0.91 vs 0.26, 'actually' 0.54 vs 0.15. Humans use 'I know/you know', and AI uses 'we know that'. Jiang & Hyland 2026: ChatGPT essays had significantly fewer stance expressions and a narrower repertoire. Human essays had think (74), believe (68), of course (35), never (34), and ChatGPT barely used these. Shalevska 2024: no use of boosters like 'clearly/definitely' in 100 ChatGPT-3.5 essays. Carlo & Takeuchi 2026: at C1, LLM hedges and boosters were about 61% of human rates, and self-mention 27%. Conflicting: Curfman 2026 and Kolesnikova 2026 found models hedge more than learners or academic text. HC3: ChatGPT is 'safer, more balanced, neutral', humans are subjective. Rodrigues 2026: certainty markers were +111–152% in LLM PT factual news, i.e. impersonal authoritative certainty, which differs from personal conviction.
- Fontes: https://doi.org/10.22158/eltls.v7n6p103, https://www.degruyterbrill.com/de/document/doi/10.1515/applirev-2025-0188/html, https://ojs.ikm.mk/index.php/kij/article/view/6979, https://doi.org/10.1111/ijal.70353, https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7195350, https://doi.org/10.25136/2409-8698.2026.5.79364, https://arxiv.org/pdf/2301.07597, https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/

### Especificidade concreta: datas, horários, números, nomes reais [measured] (pt/en/es, content, new)

Human text anchors claims in checkable particulars (dates, weekdays, times, amounts, versions, places, cited sources), and in narrative it uses more time and space ('relativity') language. AI text talks about 'developers', 'companies', 'results'. For a tech post that means real version numbers, real file names, how long something took, what it cost, the date João noticed it.

- Errado: Após a atualização, o desempenho melhorou significativamente e o fluxo ficou mais eficiente.
- Certo: Depois que eu atualizei pra 2.1 numa terça, o build caiu de uns 40 segundos pra 12, e eu nem mexi no tsconfig.
- Evidência: Rodrigues et al. 2026 (PT news, SAGE keywords): human-salient terms were 'novembro', 'terça-feira', '8:00', 'km', 'salário', 'euros m2', and LLM-salient terms were 'importância', 'é fundamental', 'para garantir', 'além disso'. Appel et al. 2025: relativity words 22.24% (human) vs 20.13% (ChatGPT), d=0.70. HC3: human answers 'are more specific and include detailed citations from sources'. Muñoz-Ortiz et al. 2024 is also cited for LLMs using more numbers, but I did not verify that claim. Google helpful content: 'first-hand expertise... from having actually used a product'.
- Fontes: https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/, https://doi.org/10.1057/s41599-025-06341-2, https://arxiv.org/pdf/2301.07597, https://developers.google.com/search/docs/fundamentals/creating-helpful-content

### Emoção negativa e humor: reclamar, ironizar [measured] (pt/en/es, voice, new)

Aligned LLMs skew positive and motivational and suppress anger, sadness and irony. Humans complain, mock, joke and use irony and memes. A post that never shows annoyance, frustration or a joke at the author's own expense reads aligned. Let João be irritated about a bug or sarcastic about his own over-engineering.

- Errado: Essa experiência foi extremamente enriquecedora e me trouxe aprendizados valiosos sobre automação.
- Certo: Confesso que fiquei meio puto, passei um fim de semana montando 45 agentes pra descobrir que o próprio Claude já fazia aquilo melhor.
- Evidência: Rodrigues et al. 2026 (PT): positive emotion +114% to +133% in LLM factual news, and anger and sadness generally lower. Appel et al. 2025: positive emotion 5.46 (ChatGPT) vs 3.60 (human), d=-1.06. HC3: 'humans express significantly more negative emotions than ChatGPT'. Humans 'apply humor, irony, metaphors', and 'ChatGPT never uses antiphrasis'. Russell et al. 2025: originality clue (23.7%) included AI being 'safe... lacking surprise or humor'. Tobias 2025 (Brazilian Reddit): models show more positive emotion.
- Fontes: https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/, https://doi.org/10.1057/s41599-025-06341-2, https://arxiv.org/pdf/2301.07597, https://arxiv.org/html/2501.15654v2, https://doi.org/10.5753/webmedia.2025.15908

### Divagar e sair do tópico (apartes, parênteses) [measured] (pt/en/es, structure, new)

LLM answers stay strictly on the literal question. Humans drift, add side remarks, read the hidden intent behind a question, and use parentheses or brackets to explain things in passing. A short aside that is not strictly necessary ('(isso é outro post)') is a human marker, as long as it is real and not a staged flourish.

- Errado: O primeiro passo é configurar o hook. O segundo passo é testar. O terceiro passo é validar o resultado.
- Certo: Primeiro eu configurei o hook (que, aliás, tinha um bug no Windows que eu nunca entendi direito, mas isso é outro post), depois testei.
- Evidência: HC3 human summarization (200+ volunteer reports): 'ChatGPT's responses are generally strictly focused on the given question, whereas humans' are divergent and easily shift to other topics'. Humans 'use various brackets... to explain things', and ChatGPT uses 'Firstly..., Secondly..., Finally'. Russell et al. 2025: experts cited mixed dashes, brackets and quotes as a human sign, and AI 'clarity' clue (19.5%) = over-explaining. Pangram guide: 'AI does not often use semicolons, parentheses'. Evidence is qualitative annotator reports, not counts.
- Fontes: https://arxiv.org/pdf/2301.07597, https://arxiv.org/html/2501.15654v2, https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns

### Excesso de orações de particípio e nominalização [measured] (pt/en/es, sentence, adds-evidence-to-covered)

Instruction-tuned models write a noun-heavy, informationally dense style even when asked to imitate speech or blogs: present-participial clauses, nominalizations ('a implementação', 'a otimização'), 'that'-clauses as subjects, phrasal coordination. In PT this shows as gerund chains ('..., permitindo..., garantindo...') and '-ção' nouns where a verb with 'eu' would do.

- Errado: A implementação da automatização proporcionou a otimização do processo, permitindo maior agilidade e garantindo a padronização das entregas.
- Certo: Eu automatizei o deploy e agora sai mais rápido, e todo mundo faz igual porque é o mesmo script.
- Evidência: Reinhart et al. 2025 (PNAS, Biber's 66 features, HAP-E corpus): GPT-4o used present participial clauses at 5.3× the human rate, 'that' clauses as subject 2.6×, nominalizations 2.1×, phrasal coordination 1.9×. A random forest on these features misclassified only 4.2% of LLM texts as human. Fake.br study (PT-BR): machine words longer (2.39 vs 2.17 syllables/word, d=1.87) with more adjectival modifiers. HC3: ChatGPT uses more NOUN/DET/ADJ/CCONJ and fewer ADV/PUNCT. Kobak et al. 2025: 66% of 2024 excess style words were verbs (delves, underscores, showcasing).
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122, https://aclanthology.org/2026.propor-2.22.pdf, https://arxiv.org/pdf/2301.07597, https://www.science.org/doi/10.1126/sciadv.adt3813

### Voz passiva NÃO é sinal confiável de IA (correção) [measured] (en/pt, sentence, adds-evidence-to-covered)

Correction to the 'passive voice' item in the covered list. For GPT-4o the agentless passive is actually under-used, at about half the human rate. Do not force every passive into active voice as an anti-AI move. The stronger targets are participial tails and nominalizations. Keep a natural passive where João would say it ('o PR foi mergeado ontem').

- Errado: (regra cega) reescrever toda passiva: 'o PR foi mergeado ontem' → 'o revisor realizou o merge do PR ontem'
- Certo: O PR foi mergeado ontem e eu só vi hoje de manhã.
- Evidência: Reinhart et al. 2025 (PNAS): 'GPT-4o uses the agentless passive voice at roughly half the rate as human texts', and Llama base models match human rates. Measured on English only.
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122

### Conectivos-muleta do português de IA [measured] (pt, vocabulary, adds-evidence-to-covered)

PT-specific LLM n-grams: 'além disso', 'mas também' (from 'não apenas... mas também'), 'em relação a', 'importância', 'é fundamental', 'é essencial', 'para garantir', 'nesse sentido', 'vale ressaltar', 'em suma', 'no cenário atual', plus calques like 'mergulhar em', 'navegar', 'jornada', 'robusto', 'alavancar', 'desbloquear'. Humans prefer 'e', 'mas', 'por isso', 'então', 'aí'. Test: read only the first word of each sentence. If they are connectives, cut them.

- Errado: Além disso, é fundamental destacar que, nesse sentido, a ferramenta se mostra robusta para garantir a qualidade.
- Certo: E outra, a ferramenta aguenta bem, eu rodei em três repos e não quebrou nenhum.
- Evidência: Rodrigues et al. 2026 (SAGE keyword analysis, PT news, GPT-4o/Mistral/Llama): LLM-salient terms were 'mas também', 'além disso', 'em relação', 'importância', 'é fundamental', 'é essencial', 'para garantir', 'um lembrete'. Human-salient terms were 'por isso', 'vai', 'então', 'porque'. Fake.br study: 'como' more frequent in machine text. Practitioner lists (Exame 2026, Jefferson Barbosa 2026, iahumaniza, textumi) converge on 'vale ressaltar', 'é importante destacar', 'em suma', 'no mundo atual', 'mergulhar', 'jornada', 'robusto', 'alavancar' (observed, not measured). Kobak et al. 2025 English common set: across, additionally, comprehensive, crucial, enhancing, exhibited, insights, notably, particularly, within (lower bound 13.5% of 2024 PubMed abstracts LLM-processed).
- Fontes: https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/, https://aclanthology.org/2026.propor-2.22.pdf, https://exame.com/inteligencia-artificial/estas-x-frases-entregam-que-seu-texto-foi-escrito-por-inteligencia-artificial-como-evitar/, https://jeffersonfbarbosa.substack.com/p/voce-esta-falando-como-o-chatgpt, https://iahumaniza.com/blog/palavras-que-denunciam-texto-de-ia/, https://textumi.com/pt/ai-text-signs, https://www.science.org/doi/10.1126/sciadv.adt3813

### Construções 'humanas' que a IA evita: prolixidade, intensificador, superlativo [observed] (en/pt/es, sentence, new)

Wikipedia editors list syntax that appears more in human text and that LLMs avoid: plain 'there is/it has', plain verbs ('wrote', not 'authored'), superlatives and definitive claims ('one of the best', 'the first'), everyday qualifiers and intensifiers ('very', 'perhaps', 'tends to'), and wordy constructions ('as a result of', 'in order to', 'the fact that'). In PT: 'tem um', 'muito', 'meio que', 'o fato de que', 'pra poder', 'o melhor que eu já usei'. A little looseness reads human. Over-tight prose reads edited by a model.

- Errado: A ferramenta destaca-se pela eficiência e configura-se como solução de referência.
- Certo: Tem uma coisa nessa ferramenta que eu acho muito boa, é de longe a melhor que eu já usei pra isso, e olha que eu testei umas cinco.
- Evidência: Wikipedia:Signs of AI writing, section 'Signs of human writing → Syntax': over 25 years of Wikipedia writing, simple is/has phrases, plainer word choices, superlative/definitive statements, qualifiers/intensifiers ('very', 'perhaps', 'tends to') and wordy constructions appear more often in human-written articles. Russell et al. 2025: humans repeat plain 'says', and AI cycles 'notes/explains' (elegant variation, now listed by Wikipedia as a historical indicator).
- Fontes: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing, https://arxiv.org/html/2501.15654v2

### Repetir a mesma palavra em vez de ciclar sinônimos [observed] (pt/en/es, vocabulary, new)

Elegant variation: AI rotates synonyms for the same referent or verb (says/notes/explains/highlights, ferramenta/solução/plataforma/recurso). Humans just repeat 'disse', 'a ferramenta'. When João refers to the same thing, keep the same word.

- Errado: O Claude Code é poderoso. A ferramenta permite... A solução também oferece... A plataforma ainda conta com...
- Certo: O Claude Code faz isso sozinho, e o Claude Code também já faz plano, então pra que eu ia manter o meu.
- Evidência: Russell et al. 2025: in o1-Pro articles, human writers repeatedly wrote 'says', while AI used synonyms like 'notes' and 'explains' (annotator-reported clue). Wikipedia:Signs of AI writing, section 13.8 'Lexical diversity/elegant variation' (listed under historical indicators). van Nuenen 2026: LLM rewrites raise vocabulary diversity (MTLD +53%). HC3 and Tobias 2025 report the opposite at document level (humans use more diverse vocabulary per length), so this applies to reference chains, not overall vocabulary.
- Fontes: https://arxiv.org/html/2501.15654v2, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing, https://arxiv.org/abs/2604.22142, https://doi.org/10.5753/webmedia.2025.15908

### Comprimento: humano escreve menos e conclui curto [measured] (pt/en/es, structure, adds-evidence-to-covered)

LLM output is several times longer than equivalent human text and ends with a long, optimistic, summarizing conclusion ('Em suma', 'Overall'). Human conclusions are shorter or simply stop. For the blog, cut the length and end on a concrete next step or an open admission, not a recap.

- Errado: Em suma, a evolução do harness representa uma oportunidade única para repensarmos nossos fluxos e abraçarmos um futuro mais produtivo.
- Certo: Por enquanto é isso, se o hook de commit também virar nativo eu apago mais uma pasta.
- Evidência: Tobias & Couto da Silva 2025 (Brazilian Reddit): human comments averaged 43 words vs 329 (GPT), 343 (Sabiá), 441 (Gemini) on r/desabafos, and 51 vs 178–254 on r/EuSouOBabaca. Fake.br: machine fake news 368.78 vs 191.14 tokens. Russell et al. 2025: experts flagged 'formulaic, optimistically vague endings'. Pangram guide: AI conclusions are 'often very long, start with Overall/In conclusion... repeats most of what was already written', and human conclusions are shorter. Caveat: Appel 2025 had humans writing longer under a length-bounded task.
- Fontes: https://doi.org/10.5753/webmedia.2025.15908, https://aclanthology.org/2026.propor-2.22.pdf, https://arxiv.org/html/2501.15654v2, https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns

### Repetição alta de palavras e de estruturas [measured] (pt/en/es, rhythm, new)

Repetitive content was one of the few lay-reader cues that actually predicted AI. LLM comments re-use more than half their words, versus about 20% in human comments. GPT-4 op-eds repeat fixed bigram sequences ('can we...?', end-loaded 'we must'). Check that no paragraph restates the previous one and that the same frame does not recur.

- Errado: Os agentes economizam tempo. Os comandos economizam tempo. A automação economiza tempo.
- Certo: Os agentes me poupavam uns 10 minutos por PR, os comandos eu nem sei, acho que perdia mais tempo mantendo do que ganhava.
- Evidência: Jakesch et al. 2023 (PNAS, N=4,600): repetitive self-presentations were 47% more likely to be AI-generated (odds ratio), one of only three valid cues next to nonsense and conversational words. Tobias 2025: about 80% of words were used only once in human comments, and over 50% of words were repeated in all three models' comments (about 22% repeated in the second human set). Thorold 2025: GPT-4 standardised bigram sequences absent in human op-eds.
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2208839120, https://doi.org/10.5753/webmedia.2025.15908, https://hdl.handle.net/2077/90156

### Nomes, títulos e citações inventadas [measured] (pt/en/es, content, new)

Expert detectors flagged stock invented names (Emily, Sarah), over-use of titles (Dr., Prof.) and quotes that sound too formal or too similar to the surrounding prose. Even after humanization these cues stayed. For João's posts: no invented colleagues or quotes. Quote real people verbatim with a link, or paraphrase loosely as people do ('um cara no Discord falou que...').

- Errado: Como explica o Dr. Ricardo Almeida, especialista em IA: 'A automação inteligente redefine a produtividade do desenvolvedor moderno.'
- Certo: Um colega do trabalho me falou uma vez que 'agente bom é agente que você esquece que existe', e eu fiquei com isso na cabeça.
- Evidência: Russell et al. 2025 (ACL; 5 experts; majority vote misclassified 1 of 300 articles): quotes clue in 22.3% of explanations (33.8% for paraphrased articles). 'Emily' or 'Sarah' appeared in 63.3% of GPT-4o and 70% of Claude-3.5 articles. Humanized articles used titles (Dr., Prof.) 'much more frequently than in human-written articles'. Experts stayed accurate after paraphrasing and an o1-Pro humanizer built from their own clues.
- Fontes: https://arxiv.org/html/2501.15654v2, https://aclanthology.org/2025.acl-long.267/

### Vocabulário-tique muda com a versão do modelo [measured] (en, vocabulary, adds-evidence-to-covered)

Tic words drift between model releases. ChatGPT cut 'delve', 'ensure', 'crucial', 'significant', 'various', and raised 'core' (5× year over year), 'modern' (>8% of messages) and contractions. Different models also favor different phrases. A static banned-word list goes stale, so the skill should treat word lists as a secondary check and rely on structural and voice rules. New English tics to add: 'core', 'modern'.

- Errado: The core idea is a modern approach to agent orchestration.
- Certo: The idea is simple, I stopped orchestrating agents myself.
- Evidência: Washington Post (Merrill et al., Nov 2025; 328,744 GPT-4o messages, May 2024–Jul 2025): 'delve' in only 1 of 1,000 chats by July 2025, 'core' 5× more than the year before, 'modern' in >8% of messages, 'not just X but Y' in 6% of chats, em dash in >50% of responses by summer 2025 (from <10%). The Post discloses a content partnership with OpenAI. Pangram: per-model phrase lists, phrases like 'as a poignant' 49,000×, 'serves as a testament' 4,000×. Wikipedia now lists em dash overuse (2022–Sep 2026) and elegant variation as 'historical indicators'.
- Fontes: https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/, https://www.yahoo.com/news/articles/clues-chatgpt-wrote-something-analyzed-214947550.html, https://www.pangram.com/blog/walking-through-ai-phrases, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

### Markdown, bullets e tríades no texto corrido: medidos [measured] (pt/en/es, formatting, adds-evidence-to-covered)

Pangram's corpus measurement gives multipliers for structural tells in prose: Markdown 12×, AI phrases 12×, em dashes 10×, bullet lists 9×, triads 4×, 'not just X but Y' 3×. Russell's experts cited consistent groupings of three. Counterpoint: a small 2026 pilot found bullets and headers not significant. In a blog post, bullets belong only where content is a real list, and body prose should run in paragraphs.

- Errado: Três motivos: velocidade, simplicidade e confiabilidade.
- Certo: Mudei por dois motivos, ficou mais rápido e eu parei de ter que lembrar de rodar o script na mão.
- Evidência: Pangram '9 Signs of AI Writing' (per 10k words, human vs AI): Markdown 8 vs 90, AI phrases 3 vs 30, em dashes 2 vs 17, bullets 3 vs 28, triads 5 vs 19, 'not just' 1 vs 3 (vendor data, method not peer-reviewed). Russell 2025: sentence structure clue 35.9%, incl. triads and 'not only... but also'. Godar et al. 2026 (N=60 pilot): bullet-point and header use not statistically significant (p=0.182, p=1.000).
- Fontes: https://www.pangram.com/signs-of-ai-writing, https://arxiv.org/html/2501.15654v2, https://doi.org/10.1109/gaiss66401.2026.11779697

### Leitor experiente pega o conjunto, não um sinal isolado [measured] (pt/en/es, other, new)

Meta-finding for the skill's goal. Readers who use LLMs heavily for writing detect AI text almost perfectly even after paraphrasing and humanization, because they use many weak cues together (vocabulary, structure, originality, quotes, formality, conclusions). Non-experts are at chance. Dev.to, TabNews and LinkedIn readers are often heavy LLM users, so treat them as experts. Removing surface words is not enough. The draft must be João's content (experiences, opinions, specifics), with style fixes on top.

- Errado: Estratégia: rodar o texto da IA num 'humanizador' que troca palavras e adiciona typos.
- Certo: Estratégia: o João dita o conteúdo real (o que fez, quanto tempo levou, o que deu errado, o que ele acha), e a IA só organiza, sem polir a voz.
- Evidência: Russell et al. 2025: experts TPR 92.7% / FPR 3.3–4.0% vs non-experts TPR 56.7% / FPR 51.7%. Expert majority vote perfect on GPT-4o, Claude-3.5, paraphrased and humanized o1-Pro sets. Vocabulary was the top clue (53.1%), but for humanized o1-Pro it dropped to 42.3% while detection stayed perfect. Jakesch 2023: lay readers at 50–52% accuracy, and AI optimized for lay heuristics was rated human 65.7% vs 51.7% for real human text, so lay-reader heuristics can be gamed but expert ones much less. PISA 2025 study: teachers recognized under half of GPT-4 essays (45.1%, 37.8%). Wikipedia: 'Fixing surface signs without addressing underlying problems could just make detection harder'.
- Fontes: https://arxiv.org/html/2501.15654v2, https://www.pnas.org/doi/10.1073/pnas.2208839120, https://arxiv.org/html/2611.12487, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

### Autocorreção no meio da frase (ou melhor, na verdade) [observed] (pt/en/es, rhythm, new)

Humans revise in the open: 'ou melhor', 'na verdade', 'quer dizer', 'pelo menos no meu caso'. The conversational booster 'actually' to correct an expectation is nearly absent in AI essays. One honest self-correction or narrowing per post signals a person thinking while writing. Do not overuse it.

- Errado: A ferramenta resolve todos os problemas de orquestração.
- Certo: A ferramenta resolve a orquestração, quer dizer, quase toda, o paralelismo eu ainda faço na mão.
- Evidência: He 2025: 'actually' 0.54 per 1k words in human essays vs 0.15 in AI, used 'to correct expectations' ('It actually makes a difference'). Russell 2025: 'actually'/'just' were informality cues that read human. The link to self-correction as a broader pattern is my synthesis. I found no study that counts self-corrections directly.
- Fontes: https://doi.org/10.22158/eltls.v7n6p103, https://arxiv.org/html/2501.15654v2

## Linha de pesquisa: structure-formatting

**Notas do pesquisador:** I found 24 patterns. Most of the measured evidence comes from four sources, and each has limits worth keeping in mind.

**How I read the sources**
- Opened in full: Wikipedia "Signs of AI writing" (first ~140k of 252k characters; I did not read the rest), arXiv 2603.27006 (Freeburg, markdown and em dashes), the Hastewire 7-language study, SlopShape arXiv 2609.15369, the lieflat-less-ai-tone RESEARCH.en.md, and Russell et al. arXiv 2501.15654 (I read the abstract and introduction, not Table 3 itself).
- Read only through Exa search extracts (substantial page text, but not a full fetch): AEO Content, IntactVoice, Build to Launch, Benchwrite, Unscarcity, StealthGPT, agent-kb, stephenoffer/human-voice, the seo-content-writer skill, WROITER, TextPulse, Desaire (Cell 2023), Martinez (EDM 2024), the Godar IEEE abstract, Pangram PT, aigc.com.br, iaemfoco, textadviser, iahumanizador, Mike Fluff and Bacelar.
- I did not open Singhal et al. 2023; I only saw it cited by Build to Launch.
- The 77/12, 88/27, 97/38, 93/51 and 76/26 percentages come from Sitefire as relayed by IntactVoice. The SlopShape paper itself reports gaps (0.650 and so on).

**Limits of the main studies**
- SlopShape is a single-author preprint from a company that sells a detector, and it is not peer reviewed. Its human side is B2B company blogs from 2008-2022, not personal dev blogs. Version 3 withdrew the heading, list and title features, including the "title promises the payoff" tip.
- AEO Content used its own detector trained on its own pipeline's output, so its numbers are an internal test.
- Hastewire used OpenAI models only, and its human pages are any mC4 web page with markup stripped. Its formatting figures describe the AI side only.
- lieflat is Chinese-only. Its matched-pair round rejected several popular rules: numbered subheadings and an intro sentence before a list are MORE human, paragraph-length uniformity showed no difference, and intra-sentence parallelism is more human.

**Conflicting evidence**
- Godar et al. 2026 (N=60) found that header use and bullet use did not differ significantly between human and AI writing.
- Sentence length points both ways. WROITER/HC3 found ChatGPT writes LONGER sentences in Q&A, while TextPulse and Desaire found flattening. Wikipedia says mid-2026+ models write short 8-20 word, period-heavy sentences. So the length tell depends on the model and the genre. The safe rule is to vary length, with real long comma-chained sentences and real short ones.

**Where the data cuts against João's own rules**
- Hastewire's Portuguese numbers show human web pages use MORE semicolons (1.39 vs 0.53 per 1,000 words) and MORE colons (3.85 vs 2.77) than AI articles. So João's no-colon and no-semicolon rules are valid as his personal voice, but they are not universal human-vs-AI markers. The skill should frame them as João's style, not as detection rules.
- The same study found humans ask far more questions and use far more exclamation marks. An open question or an exclamation now and then is pro-human. Only a question that the writer answers right away is the AI tell.

**What has no measurement**
- Every-section-same-shape, moral at the end of each section, balanced pros and cons, and generic headings rest on editor and practitioner observation, with no numbers.

**Memory**
- No memory facts were used. The only stored note (show blog drafts as rendered markdown) does not bear on this research.

### Conclusão que repete a abertura / seção 'Em resumo' [measured] (pt/en/es, structure, new)

The post ends by restating its thesis or summarizing the sections, often under a heading like 'Conclusão' or 'Considerações finais', or opening with 'Em resumo/Em suma/Em conclusão'. This is the strongest single structural tell measured on blog posts. A human post usually ends on the last new fact, a status, a caveat or a next step.

- Errado: ## Conclusão

Em resumo, o harness do Claude Code mudou muito. Vimos que os subagentes, os hooks e as skills substituem boa parte do meu workflow antigo. Vale a pena revisar o seu setup.
- Certo: Ainda mantenho o hook de commit por fora, porque o do harness não respeita o gitmoji. Se isso mudar na próxima versão eu apago ele também.
- Evidência: SlopShape (arXiv 2609.15369, 2,250 pre-ChatGPT human company blog posts vs 11,250 AI mirrors): 'conclusion behavior = restated thesis or reframe' is the top AI-leaning feature (gap 0.650). Sitefire's numbers as reported by IntactVoice: close restates opening claim 77% AI vs 12% human; summary/synthesis stage 88% vs 27%. Hastewire 7-language study: 'em resumo/em suma/em conclusão' in 12% of PT AI articles vs 1% of human pages (ES 38% vs 1%). AEO Content internal test: closing paragraphs flagged AI 87% of the time. Russell et al. ACL 2025: conclusions came up in 13.1% of expert detectors' explanations ('repetitive and overly optimistic summaries'). Pangram PT guide: long conclusion starting 'Em geral/Em conclusão/Em resumo' that repeats the body.
- Fontes: https://arxiv.org/html/2609.15369, https://intactvoice.com/guides/how-readers-spot-ai-writing, https://hastewire.com/research/words-that-give-ai-away, https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/, https://arxiv.org/html/2501.15654, https://www.pangram.com/pt/blog/comprehensive-guide-to-spotting-ai-writing-patterns

### Tese anunciada antes da primeira seção (roteiro na introdução) [measured] (pt/en/es, structure, adds-evidence-to-covered)

The intro states the thesis and lists what the post will cover before the first real section. The post then states the point three times, in the roadmap, in the body and in the summary. Already covered as 'writing about the document itself', but there are now hard numbers, and humans do it too, at about half the AI rate.

- Errado: Neste post vou mostrar o que mudou no harness, quais ferramentas eu abandonei e o que eu ainda uso por fora.
- Certo: Semana passada eu apaguei 14 dos 20 comandos que eu tinha no ~/.claude, e nada quebrou.
- Evidência: SlopShape: 'thesis before first unit = no' leans human (gap 0.419). Reported rates: 93% of AI posts vs 51% of human posts announce the thesis before the first section. AEO Content: intro teasers flagged AI 87%, opening paragraphs 86%.
- Fontes: https://arxiv.org/html/2609.15369, https://intactvoice.com/guides/how-readers-spot-ai-writing, https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/

### Penalidade da abertura (o primeiro parágrafo é o mais 'IA') [measured] (pt/en/es, structure, new)

The first passage of an AI article is where the default frame sits: a context-setting claim about why the topic matters plus a smooth transition into the body. Detectors and readers rate it the most machine-like part. Rewrite the opening by hand first and open on a concrete thing (a number, a bug, a date, something you did).

- Errado: Com a evolução rápida das ferramentas de IA, o Claude Code se tornou parte central do dia a dia de muitos desenvolvedores, e entender o harness ficou cada vez mais importante.
- Certo: Eu tinha 45 agentes configurados no Claude Code e usava uns 6, fui ver o porquê.
- Evidência: AEO Content (2,625 sections across 146 AI-drafted articles, its own ModernBERT detector, so an internal test): first passages read AI 87% vs 64-75% for later passages in the same articles. A single machine-like passage was enough to call 144 of 146 articles AI.
- Fontes: https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/, https://www.stealthgpt.ai/blog/how-to-detect-ai-slop

### Enquadramento 'jeito antigo vs jeito novo' e escalada de importância [measured] (pt/en/es, content, new)

AI posts frame the topic as an obsolete old way against a modern, next-generation way, and raise the stakes. This bears directly on João's titles ('deixou meu workflow obsoleto'). Keep the contrast only when it is literally true and backed by a specific fact. Humans anchor in dates and history instead of using 'modern' framing.

- Errado: O jeito antigo de configurar agentes ficou para trás. A nova geração do harness muda completamente a forma como trabalhamos com IA.
- Certo: Em março eu tinha um comando /review meu, em outubro o /code-review nativo fazia a mesma coisa e eu tirei o meu.
- Evidência: SlopShape: 'legacy-versus-modern contrast = no' leans human (gap 0.497). 'Freshness signaling = modern or next-generation framing' leans AI (gap 0.360). 'Temporal reference types = historical date or period' leans human (gap 0.283). As reported by IntactVoice/Sitefire: old-vs-new framing in 76% of AI posts vs 26% of human posts, stakes escalation 88% vs 52% (the second figure is from an earlier paper version).
- Fontes: https://arxiv.org/html/2609.15369, https://intactvoice.com/guides/how-readers-spot-ai-writing

### Nenhum jeito do leitor participar / nada utilizável [measured] (pt/en/es, content, new)

AI posts are commentary with no way in for the reader: no repo link, command, config snippet, version number, or question only this audience can answer. Human posts more often hand over something usable. For a tech blog, end with or include the actual file, command or link.

- Errado: Espero que essas dicas ajudem você a repensar o seu workflow com IA.
- Certo: Meu settings.json atual tá no repo dotfiles, pasta claude/, e o hook de commit é esse aqui (bloco de código).
- Evidência: SlopShape: 'external participation pathway = absent' leans AI (gap 0.592). Reported rates: 97% of AI posts vs 38% of human posts.
- Fontes: https://arxiv.org/html/2609.15369, https://intactvoice.com/guides/how-readers-spot-ai-writing

### Blocos-template: Key takeaways, TL;DR, FAQ, mito vs fato, quadro de decisão, antes/depois [measured] (pt/en/es, structure, new)

Fixed rhetorical boxes get appended to the post: a takeaways list, a TL;DR, an FAQ, a myth-vs-fact box, a 'which option should you choose' decision table, a before/after comparison, an outlook ('o que vem por aí'). These were the most detectable section types, more than the vocabulary. A personal blog post needs none of them.

- Errado: ## Principais aprendizados
- **Menos é mais:** ...
- **Confie no harness:** ...
- **Meça antes:** ...

## Perguntas frequentes
**O Claude Code substitui o OMC?** ...
- Certo: (no box at all, the last paragraph is the last real point, and if a reader question matters, answer it inside the text: 'alguém me perguntou no TabNews se dá pra usar isso sem o OMC, dá, eu testei numa máquina limpa')
- Evidência: AEO Content (internal detector, 146 articles): decision frameworks read AI 100%, prediction/outlook charts 99%, before-and-after comparisons 94%, outlook sections 89%, myth vs fact 87%, key takeaways 87%, FAQ 81%. Phrases shared across sites were at most 0.5% of the text, so the shapes alone carried the signal. Practitioner rule (agent-kb): no 'Key takeaways/Conclusion/In summary/Final thoughts/TL;DR' block outside reports over 800 words, and never a summary and a conclusion in the same document. SEO-template skill shows FAQ with '3-5 questions, 40-60 word answers' as a stock pillar-guide section.
- Fontes: https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/, https://agent-kb-autopublish.vercel.app/text-uniform-structure/, https://buildtolaunch.ai/p/make-ai-writing-sound-human, https://github.com/cdeistopened/skill-stack-skills/blob/main/writing-voice/seo-content-writer/SKILL.md

### Excesso de subtítulos para pouco texto [measured] (pt/en/es, formatting, new)

Models add headings unprompted and many of them: one every ~80 words, H2/H3 nesting on a 900-word post. Human blog posts of that length often have 0-3 headings. Heading volume is the tell. Heading style (questions, numbers) is not.

- Errado: A 900-word post with 8 H2s and 6 H3s: '## Contexto', '### O problema', '### A solução', '## O que mudou', '### Subagentes', '### Hooks'...
- Certo: A 900-word post with 2 or 3 H2s that name what is in them ('Os 14 comandos que eu apaguei', 'O que ainda fica por fora'), or none at all.
- Evidência: Hastewire (one-line 'write a web article' prompt, 3 OpenAI models): 40% of PT AI articles had Markdown headings and 42% had bold, unprompted (GPT-5.5 headings in 81% of its articles). Human pages could not be compared because mC4 strips markup. lieflat-less-ai-tone (Chinese, 629 articles): generated articles averaged ~10 subheadings vs 1-2 for human articles. Interrogative subheadings showed no difference as a share of all headings, and numbered subheadings were MORE human in the matched-pair round (8.6% vs 4.9%). Practitioner thresholds: stephenoffer/human-voice flags 'a heading every ~80 words'. agent-kb flags any heading in a document of 300 words or fewer. Counter-evidence: Godar et al. 2026 (N=60) found header use and bullet use not significant (p=1.000, p=0.182).
- Fontes: https://hastewire.com/research/words-that-give-ai-away, https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md, https://github.com/stephenoffer/human-voice/blob/main/skills/human-voice/SKILL.md, https://agent-kb-autopublish.vercel.app/text-uniform-structure/, https://doi.org/10.1109/gaiss66401.2026.11779697

### Subtítulos genéricos que caberiam em qualquer artigo [observed] (pt/en/es, title-headline, new)

Headings like 'Introdução', 'Contexto', 'Por que isso importa', 'Principais aprendizados', 'Conclusão', 'Considerações finais', 'O futuro' carry no information. Human headings name the specific content. Wikipedia also flags 'X and Y' section headers ('Desafios e perspectivas', 'Awards and recognition') and rigid 'Challenges'/'Future Outlook' sections.

- Errado: ## Por que isso importa
## Desafios e perspectivas futuras
## Considerações finais
- Certo: ## O hook que eu não consegui matar
## Onde o /code-review nativo ainda erra
- Evidência: Build to Launch prompt: 'Flag any heading that could sit on any article ("Key Takeaways", "Conclusion", "Why It Matters")'. The author notes this layer is practitioner knowledge and not measured. Wikipedia: 'Challenges'/'Future Prospects' outline-like conclusions and 'X and Y' headers ('Awards and recognition').
- Fontes: https://buildtolaunch.ai/p/make-ai-writing-sound-human, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

### Toda seção com o mesmo molde (título, parágrafo-intro, 3 bullets, frase de transição/moral) [observed] (pt/en/es, structure, new)

Each section repeats one skeleton: heading, a paragraph introducing the topic, a 3-item list, a closing sentence that names the lesson or bridges to the next section. A five-paragraph-essay mold scaled up. Humans let structure follow the argument, so one section is three paragraphs and the next is one sentence or a code block.

- Errado: ## Subagentes
Os subagentes são uma parte importante do harness.
- Rodam em paralelo
- Têm contexto isolado
- São fáceis de configurar
Com isso, fica claro por que eu parei de usar os meus.

## Hooks
Os hooks são outra parte importante...
- ...
- ...
- ...
Isso mostra que...
- Certo: ## Subagentes
Eu parei de escrever os meus quando vi que o Explore nativo fazia a mesma busca em metade do tempo (tava medindo com time no terminal, 41s vs 19s).

## Hooks
(bloco de código do settings.json e uma frase)
- Evidência: Unscarcity cleanup guide: 'Heading + Summary + Bullets' pattern. Every section has the same number of sub-points, every bullet roughly the same length. Benchwrite: 'Draw the section path in the margin: definition, list, expansion, recap. If every section follows that path, send it back.' stephenoffer/human-voice: 'five sections of identical length', 'five-paragraph mold'. Pangram PT: blog posts default to 'introdução, 3-4 parágrafos, alguns pontos-chave e uma conclusão'. No study measured section-shape repetition directly. SlopShape excluded heading and list features because they reacted to formatting.
- Fontes: https://unscarcity.ai/static/docs/ai-slop-cleanup-guide.md, https://benchwrite.com/blog/how-to-spot-ai-written-text-using-structural-review, https://github.com/stephenoffer/human-voice/blob/main/skills/human-voice/SKILL.md, https://www.pangram.com/pt/blog/how-to-detect-ai-writing

### Parágrafos todos do mesmo tamanho (e curtos demais) [measured] (pt/en/es, rhythm, adds-evidence-to-covered)

AI produces a wall of neat, similar-sized, short blocks (2-3 sentences each, more paragraph breaks). Humans mix long paragraphs that chain several clauses with one-line paragraphs. This bears on João's rule that too many short period-separated sentences read as AI. The fix is also at paragraph level: let some paragraphs run long.

- Errado: Six consecutive paragraphs of 2-3 sentences each, ~40 words apiece.
- Certo: One 120-word paragraph telling how the setup broke, chained with commas, followed by a one-line paragraph: 'Apaguei tudo.' and then a mid-size one.
- Evidência: Desaire et al. 2023 (Cell Reports Physical Science): the biggest discriminators were sentences per paragraph and words per paragraph, both lower in ChatGPT. Martinez et al. EDM 2024 (recommendation letters): human 4.92 sentences/paragraph and 2.56 paragraphs vs GPT-3.5 2.78 sentences/paragraph and 4.87 paragraphs (Llama2 8.83 paragraphs). WROITER on HC3: within-document paragraph-length variation 1.06 human vs 0.54 AI. Counter-evidence: lieflat matched-pair Chinese corpus found no paragraph-uniformity difference (0.94x) once a measurement artifact was removed. Practitioner thresholds: Build to Launch flags 'any run of four or more paragraphs of about the same length'. StealthGPT flags 'every paragraph three or four sentences'.
- Fontes: https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(23)00200-X, https://educationaldatamining.org/edm2024/proceedings/2024.EDM-long-papers.9/2024.EDM-long-papers.9.pdf, https://wroiter.com/research/quantitative-signals/, https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md, https://buildtolaunch.ai/p/make-ai-writing-sound-human, https://www.stealthgpt.ai/blog/how-to-detect-ai-slop

### Frases achatadas na faixa média (sem as muito longas nem as muito curtas) [measured] (pt/en/es, rhythm, adds-evidence-to-covered)

Models trim the long sentences and drop the very short ones, so everything sits in a 12-20 word band. Humans have both 35+ word sentences that chain clauses and 2-6 word ones. This supports João's comma-chaining rule: write some genuinely long comma-chained sentences, not just fewer periods. Newer models (GPT-6 era per Wikipedia) are especially period-heavy and short.

- Errado: Eu criei um workflow com 20 comandos. Hoje o Claude Code faz quase tudo sozinho. Muita coisa mudou no harness. Vou mostrar o que eu ainda uso.
- Certo: Eu tinha montado um workflow com uns 20 comandos e 45 agentes, e hoje o Claude Code faz quase tudo isso sozinho, então fui ver o que ainda fazia sentido manter por fora. Sobrou pouco.
- Evidência: TextPulse (60,779 human/AI paraphrase pairs, 8 model configs): human CV of sentence length 0.449 vs AI 0.376, and 79.3% of rewrites were flatter. Models remove short direct sentences and trim long ones. No safe single threshold: catching 62% of rewrites also flags 39% of human texts. Desaire 2023: humans more often use 35+ word and ≤10 word sentences. Wikipedia: mid-2026+ output shows 'much more period and comma usage and shorter sentences around a strict 8–20 word limit'. Benchwrite: 'sentence after sentence in the 12-to-18-word band'. stephenoffer: at least 1 in 8 sentences ≤8 words. Counter-evidence: WROITER/HC3 found ChatGPT sentences LONGER (31.1 vs 22.6 words) in Q&A, and lieflat Chinese matched pairs found no uniformity difference (0.87x).
- Fontes: https://textpulse.ai/research/ai-burstiness-sentence-length, https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(23)00200-X, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing, https://benchwrite.com/blog/how-to-spot-ai-written-text-using-structural-review, https://github.com/stephenoffer/human-voice/blob/main/skills/human-voice/SKILL.md, https://wroiter.com/research/quantitative-signals/

### Bullets com rótulo em negrito e dois-pontos em todo item [measured] (pt/en/es, formatting, adds-evidence-to-covered)

Every bullet starts '**Rótulo:** texto'. Wikipedia calls these inline-header vertical lists. In a blog post they read as a slide deck. Turn them into prose or a plain list. Keep bold to a minimum (a practitioner threshold says under 5% of the text, another says at most one phrase per section).

- Errado: - **Velocidade:** o harness é mais rápido.
- **Simplicidade:** menos coisa pra configurar.
- **Integração:** tudo funciona junto.
- Certo: Ficou mais rápido e eu configuro bem menos coisa, o que eu mais senti foi não ter que sincronizar os agentes na mão.
- Evidência: Hastewire: 42% of PT AI web articles had bold text, unprompted (GPT-4.1 mini bold in 84%). Wikipedia lists 'frequent use of inline-header vertical lists' and boldface overuse. Russell et al.: formatting cues ('bolded lists, paragraphs of similar length') appeared in 15.0% of expert explanations, as reported by agent-kb citing their Table 3. Unscarcity: strip bold if more than 5% of text. agent-kb: zero '- **Label:**' lines in posts.
- Fontes: https://hastewire.com/research/words-that-give-ai-away, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing, https://agent-kb-autopublish.vercel.app/text-uniform-structure/, https://unscarcity.ai/static/docs/ai-slop-cleanup-guide.md, https://arxiv.org/html/2501.15654

### Listas para o que é argumento (listicle compulsion) [observed] (pt/en/es, formatting, new)

Arguments, reasons and opinions get broken into bullets. Lists belong to steps, commands, files and items the reader will scan or copy. Practitioner rule: use bullets only for 3+ genuinely parallel items that still make sense reordered, and never for 1-2 items or items that depend on each other.

- Errado: Por que eu abandonei o OMC:
- Redundância com o harness
- Manutenção
- Complexidade
- Certo: Abandonei o OMC porque metade dele já tava no harness e a outra metade eu tinha que atualizar toda vez que saía versão nova, cansei.
- Evidência: Unscarcity: 'A human writer might use 1-2 lists in an article; AI structures the entire piece as nested lists', convert at least half back to prose. agent-kb rules 6 (bullets only for 3+ parallel items) and the genre table. iaemfoco (PT): 'Excesso de tópicos e negrito: até um e-mail curto vira apresentação'. Martinez EDM 2024: Llama2 used bullet points for achievements, 'a practice seldom observed in human' letters. Hastewire: lists in only 9% of PT AI articles, so list overuse is weaker than heading/bold overuse in plain article prompts.
- Fontes: https://unscarcity.ai/static/docs/ai-slop-cleanup-guide.md, https://agent-kb-autopublish.vercel.app/text-uniform-structure/, https://iaemfoco.com.br/humanizar-texto-ia/, https://educationaldatamining.org/edm2024/proceedings/2024.EDM-long-papers.9/2024.EDM-long-papers.9.pdf, https://hastewire.com/research/words-that-give-ai-away

### Listas com tamanho sempre igual e itens simétricos [observed] (pt/en/es, structure, adds-evidence-to-covered)

Every list has 3 (or 5) items, each item about the same length and grammatical shape, and every section has the same number of sub-points. Vary counts (2, 4, 7), let one item be long and another two words. Note: the evidence does NOT support banning parallelism inside a sentence.

- Errado: Three sections, each with exactly 3 bullets of 6-8 words starting with a noun.
- Certo: One list of 7 deleted commands (just names in code font), one 2-item aside in prose, no list in the third section.
- Evidência: Seo-content-writer skill: 'Perfect Parallelism: every bullet same length/structure', 'Triple Threat Syndrome'. Unscarcity: 'If every list has exactly three items, break the pattern'. textadviser (PT): 'listas com o mesmo número de itens'. Counter-evidence from lieflat Chinese matched pairs: intra-sentence parallelism was MORE human (0.61x), the tripartite x7.3 claim did not replicate, and three-case paragraphs were near-identical (91.0% vs 92.6%). Adjacent-sentence isomorphism (two neighboring sentences with the same shape) was AI-leaning, 9.41 vs 4.81 per 100 paragraphs (1.96x).
- Fontes: https://github.com/cdeistopened/skill-stack-skills/blob/main/writing-voice/seo-content-writer/SKILL.md, https://unscarcity.ai/static/docs/ai-slop-cleanup-guide.md, https://textadviser.com/pt/ai-guides/como-saber-se-um-texto-foi-feito-por-ia, https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md

### Frases vizinhas com a mesma forma (isomorfismo) [measured] (pt/en/es/zh, sentence, new)

Two or three adjacent sentences share one template (subject + verb + object of the same length, or the same opening), which gives a metronomic beat. Distinct from repeated sentence openings across the text: this one is local, inside a paragraph.

- Errado: O harness gerencia os subagentes. O harness controla os hooks. O harness carrega as skills.
- Certo: O harness gerencia os subagentes e os hooks, e as skills ele carrega sozinho quando o pedido bate com a descrição.
- Evidência: lieflat-less-ai-tone matched pairs (Chinese, 540 articles, GPT-5.6 and Claude Opus 4.6): two adjacent isomorphic sentences 9.41 vs 4.81 per 100 paragraphs (1.96x), three adjacent 0.84 vs 0.41 (2.03x). Mike Fluff PT checker lists 'o mesmo verbo em frases vizinhas'. Only measured in Chinese, so cross-language transfer is an assumption.
- Fontes: https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md, https://www.mikefluff.com/pt/ai-text-checker

### Parágrafo que não retoma o anterior (anáfora ausente) [measured] (pt/en/es/zh, structure, new)

Each paragraph starts as if self-contained, with a fresh subject and no reference back to the previous one ('esse', 'isso que eu falei', 'aí'), or with a generic connective ('Além disso,') instead of a specific link. Humans tie paragraphs together by referring to the concrete thing just said. The lack of that link is the tell, not the connective count.

- Errado: ...e o cache estourou.

Além disso, os hooks também são uma parte importante do harness.
- Certo: ...e o cache estourou.

Foi aí que eu fui olhar os hooks, porque o que limpava o cache era meu e não do harness.
- Evidência: lieflat (Chinese): zero-anaphora paragraph openings 0.61% generated vs 0.14% human (4.4x). Paragraph-initial connective density showed no difference (14.4% vs 15.1%), because generated text omits the anaphoric element, not the connective. WROITER/HC3 (English): paragraphs opening with a transition word 1.7% AI vs 0.5% human, and humans put a clear topic sentence first 23.7% vs 9.9%. The two studies conflict on connectives. iahumanizador PT: 'Fila de conectivos: Além disso, Ademais, Nesse sentido no começo de quase toda frase'.
- Fontes: https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md, https://wroiter.com/research/quantitative-signals/, https://iahumanizador.org/como-saber-se-um-texto-foi-feito-por-ia

### Exemplos genéricos de 'empresa famosa + ação' [measured] (pt/en/es/zh, content, new)

AI fills paragraphs with case sentences of the form 'A Netflix, por exemplo, usa X para Y' or 'Empresas como a Shopify...', generic famous-name examples instead of the author's own case. In a personal tech blog the example should be João's repo, his client project, his error message.

- Errado: Empresas como a Shopify e a Stripe já usam agentes de IA para automatizar code review.
- Certo: No projeto que eu mantenho, o /code-review pegou um null que passou por mim e por um colega no PR #212.
- Evidência: lieflat (Chinese): paragraphs with 'proper noun + action' case sentences 9.11% generated vs 3.13% human (3-4x), kept as guidance, not a hard rule. Wikipedia: LLMs replace specific facts with generic statements ('regression to the mean'). AEO: author bios built from a real profile read human 51% vs AI 8%.
- Fontes: https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing, https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/

### Credibilidade por explicação institucional em vez de experiência [measured] (pt/en/es, voice, adds-evidence-to-covered)

AI earns authority by confidently explaining how a thing works, in manual register ('O harness funciona da seguinte forma...'), with a 'mechanism explanation' stage. Humans earn it by experience: what I tried, what broke, what I measured. AI text also has measurably fewer personal pronouns and more nouns. This adds hard evidence to João's first-person rule.

- Errado: O harness do Claude Code é composto por três camadas principais, que trabalham em conjunto para orquestrar as tarefas.
- Certo: Eu só entendi as camadas do harness quando um hook meu rodou duas vezes e fui ler o log.
- Evidência: SlopShape: 'dominant credibility basis = confident institutional explanation' leans AI (gap 0.347), 'functional stage = mechanism explanation' leans AI (gap 0.285). Godar et al. 2026 (N=60, GPT-5.6, Claude Sonnet 5.0, Gemini 3.1 Pro vs human): LLM text used significantly fewer personal pronouns (p=0.0046, the largest effect size) and more nouns (p=0.039).
- Fontes: https://arxiv.org/html/2609.15369, https://doi.org/10.1109/gaiss66401.2026.11779697

### Texto longo demais (padding) [measured] (pt/en/es, structure, new)

AI posts run longer than the human posts on the same brief, and length itself is rewarded by preference training. Short posts (under 800 words) lean human. Cut the sections that exist to look complete (context, definitions, outlook).

- Errado: A 1,500-word post where 400 words are definitions of 'agente', 'hook' and 'skill' that readers of a Claude Code post already know.
- Certo: A 600-900 word post that starts at the change and links to the docs for definitions.
- Evidência: SlopShape: 'article length class = short, under 800 words' leans human (gap 0.274). AI mirrors averaged 1,064-1,541 words per model, slightly longer than human, although length alone could not classify. Build to Launch cites Singhal et al. 2023: length alone explained 70-90% of measured preference-training improvement (I did not open Singhal directly).
- Fontes: https://arxiv.org/html/2609.15369, https://buildtolaunch.ai/p/make-ai-writing-sound-human

### Equilíbrio artificial (prós e contras simétricos, sem posição) [observed] (pt/en/es, content, new)

Every claim gets a balanced counterpoint, pros and cons come in equal counts, and the post avoids committing ('depende do seu caso'). A personal opinion post takes a side and says where the author would not follow his own advice.

- Errado: O harness tem vantagens e desvantagens. Por um lado, simplifica; por outro, reduz o controle. A escolha depende do seu contexto.
- Certo: Pra mim o harness ganhou, a única coisa que eu sinto falta é controlar a ordem dos hooks, e isso eu resolvo com um script de 10 linhas.
- Evidência: textadviser (PT): 'Equilíbrio excessivo. O texto apresenta "os dois lados" de tudo e evita tomar posição'. Seo-content-writer skill: 'Fake Objectivity', 'Hedge Stack'. educacaotecnologica (Bacelar, PT): 'conflito dissolvido, equilíbrio artificial e conclusão ornamental'. No measured study found.
- Fontes: https://textadviser.com/pt/ai-guides/como-saber-se-um-texto-foi-feito-por-ia, https://github.com/cdeistopened/skill-stack-skills/blob/main/writing-voice/seo-content-writer/SKILL.md, https://www.educacaotecnologica.com.br/index.php/ojs/article/download/467/690/1671

### Moral no fim de cada seção [observed] (pt/en/es, structure, adds-evidence-to-covered)

Each section ends with a sentence that names the lesson the section already showed ('Isso mostra que...', 'Ou seja, menos é mais'). Close to the covered one-line closers, but at section level and repeated. Delete the last sentence of each section and check whether anything is lost.

- Errado: ...e o build caiu de 4 min pra 1 min. Isso mostra como simplificar o setup pode trazer ganhos reais.
- Certo: ...e o build caiu de 4 min pra 1 min.
- Evidência: Benchwrite: 'Over-explanation: a sentence names the lesson after the paragraph has already made it'. Unscarcity 3.4: section summaries ('In summary', 'Overall', 'Ultimately'), which Wikipedia also lists. Bacelar (PT): 'Conclusão explícita demais: explicação final que elimina inferência do leitor'.
- Fontes: https://benchwrite.com/blog/how-to-spot-ai-written-text-using-structural-review, https://unscarcity.ai/static/docs/ai-slop-cleanup-guide.md, https://www.educacaotecnologica.com.br/index.php/ojs/article/download/467/690/1671

### Introdução dupla (descrição/subtítulo repetidos no primeiro parágrafo) [observed] (pt/en/es, structure, new)

The title, then a subtitle or lede that restates it, then a first paragraph that restates both. For João's Astro posts: the frontmatter description is rendered under the title and the first paragraph often paraphrases it. Make the first paragraph start after the description, not repeat it.

- Errado: description: 'Criei um workflow com 20 comandos e hoje o Claude Code faz quase tudo sozinho.' First paragraph: 'Há alguns meses eu criei um workflow com 20 comandos. Hoje, o Claude Code faz quase tudo isso sozinho.'
- Certo: description as above. First paragraph: 'O que me fez perceber foi um sábado que eu fui atualizar o OMC e metade dos comandos dava conflito com os nativos.'
- Evidência: AEO Content: 'Check for a double introduction. Intro teasers read AI 87% of the time and opening paragraphs 86%. Two stacked introductions give the same template two chances to show.' Mike Fluff PT checker: 'uma linha sob o título que repete o título'. agent-kb: 'a heading that repeats the document title'.
- Fontes: https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/, https://www.mikefluff.com/pt/ai-text-checker, https://agent-kb-autopublish.vercel.app/text-uniform-structure/

### Ausência de perguntas reais e exclamações [measured] (pt/en/es/it/fr/de/ca, punctuation, new)

AI articles almost never ask a genuine question or exclaim. Human Portuguese web text has about 6x more question marks and 60x more exclamation marks. This is different from the covered rhetorical question answered right away. Humans leave questions open, ask the reader, or exclaim at a surprise ('e funcionou!').

- Errado: Não está claro se o harness vai suportar isso no futuro.
- Certo: Será que na próxima versão eles resolvem a ordem dos hooks? Não sei, mas eu apostaria que sim. E o pior, o bug era meu!
- Evidência: Hastewire (300 human mC4 pages vs 300 AI articles per language, same subjects): Portuguese question marks 0.34 AI vs 2.18 human per 1,000 words, exclamation marks 0.04 vs 2.44. All seven languages: 0.43 vs 2.19 and 0.05 vs 1.96. The authors note part of this is genre (human pages were any web page).
- Fontes: https://hastewire.com/research/words-that-give-ai-away

### Palavras-tique específicas do português gerado (cenário, fundamental/essencial/crucial, especialmente, não apenas) [measured] (pt/es/en, vocabulary, adds-evidence-to-covered)

Language-specific tells for PT measured against matched human pages. 'Cenário' is the standout PT-specific word. Calling things 'fundamental/essencial/crucial', 'especialmente' and 'não apenas/não só' are cross-language. Wikipedia's GPT-6 list (challenge, clearer, dependable, foster, leverage, matters, practical, prioritize, quietly, steady) applies to the EN/ES translations.

- Errado: No cenário atual, é fundamental entender o harness, especialmente porque ele não apenas organiza os agentes, mas também...
- Certo: Hoje vale entender o harness, principalmente porque ele já organiza os agentes sozinho.
- Evidência: Hastewire PT: 'cenário' 30% of AI articles vs 3% of human pages. 'fundamental/essencial/crucial' 62% vs 11%. 'especialmente' 42% vs 6%. 'não apenas/não só' 28% vs 8%. ES: 'clave/fundamental/esencial' 71% vs 7%, 'suele' 26% vs 3%. EN em dash 37% vs 15%, but PT only 10% vs 5%, so in PT the em dash is a weak sign. Wikipedia lists mid-2026+ vocabulary.
- Fontes: https://hastewire.com/research/words-that-give-ai-away, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

### Tabela/quadro comparativo para tudo [measured] (pt/en/es, formatting, new)

Comparison tables, 'antes vs depois' grids and decision matrices appear even when there are 2 items or the content is an opinion. In a personal post, use a table only for real tabular data (benchmarks, versions, timings), not for summarizing your own argument.

- Errado: | | Workflow antigo | Harness nativo |
|---|---|---|
| Complexidade | Alta | Baixa |
| Manutenção | Difícil | Fácil |
- Certo: | Comando | Antes (s) | Depois (s) |
|---|---|---|
| build | 240 | 61 |
(only because those are real measurements)
- Evidência: AEO Content: before-and-after comparisons read AI 94%, decision frameworks 100%, outlook charts 99% (internal detector). No study measured table frequency in human vs AI blog posts directly.
- Fontes: https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/

## Linha de pesquisa: claude-specific-and-recent

**Notas do pesquisador:** How sources were read: I fetched these in full or in large part: Graphite AI Tells (Sep 2026), the Graphite Opus 5.5 update (most of its content came through the search extract), the Bitsy wiki 'Claude's Verbal Tics', paddo.dev, Anthropic's Fable 5.1 prompting guide, and Russell et al. arXiv 2501.15654. I also read about 200k of the 252k characters of Wikipedia 'Signs of AI writing' (the last 52k were not read, including the em-dash section body). For the iScience PT paper I read the summary and introduction, and for the Amazônica paper the abstract only. For Kobak (Science Advances) I read only the abstract and used none of its numbers. I verified the claude.ai system-prompt word bans myself with curl on the Opus 4.8 and Fable 5.1 pages. The Opus 5.5 prompt (Nov 9 2026) contains no such ban, only formatting rules against bold and bullets. Anthropic says these prompts do not apply to the API or Claude Code, so the blog skill has to carry the ban itself. The sources below I know only from the long content extracts the search tool returned, not from a separate fetch: PNAS Reinhart, ACL STYGENAI 2026, Pew, Washington Post (via the Boston Globe syndication), TextPulse, the Polish De Gruyter study, Muñoz-Ortiz, GenPolish, VentureBeat, Signal Box, Claudisms, Kemp, PostHero, IAê, Marfin, Correria, LabIIA, Diario Vida, Walter and El Debate. Several numbers are second hand and should be labelled that way. Arena's Opus 5 stats (em dash 2.3x, load-bearing about 2x, honestly/frankly +50%) come via paddo, and I did not open Arena. Wikipedia's citation of an Economist July 2026 finding that only Claude used em dashes more than professionals comes via Bitsy, and I did not open it. The Bitsy counts have no human baseline. Conflicting evidence: (1) The em dash is no longer a reliable universal tell. Opus 5.5 is down 99% and GPT-6/Gemini overcorrected, but GPT-4o translations into PT/ES are saturated with it, so keep the PT/ES ban. (2) Graphite measured that humans use parenthetical asides far more than models. This is a nuance on João's rule 3: the parenthetical problem is in titles, not in the body. (3) Graphite found humans use more exclamation marks (over 100x). (4) The ACL PT/ES study is tiny (12 texts) and only covers GPT-4o. I found no large-scale frequency study of AI tells in Brazilian Portuguese, so the PT vocabulary lists are practitioner observations. One finding is relevant to the skill itself: this session runs on Claude Opus 5.5, so the Graphite Opus 5.5 tells ('this matters' at 116x, 'what comes next', 'looking ahead', 'adds another layer', helpfulness phrasing, superlatives, evaluative adjectives like steady/dependable/thoughtful) are the most directly applicable. One memory note was relevant to how drafts are shown (show drafts as rendered markdown, not in a code block); it does not affect these findings.

### Claude's sincerity intensifiers (genuinely, honestly, truly, frankly, actually) [measured] (en/pt/es, vocabulary, new)

Claude uses sincerity words as intensifiers that add nothing. Anthropic's own claude.ai system prompts ban them. Those prompts do not apply to the API or to Claude Code, which is where this skill runs, so the skill has to ban them itself. In PT they come out as genuinamente, honestamente, sinceramente, de fato, na verdade, realmente, francamente, and in ES as genuinamente, honestamente, realmente, la verdad es que.

- Errado: PT: Isso é genuinamente melhor que o setup antigo, e honestamente eu não esperava.
- Certo: PT: Ficou melhor que o setup antigo, e eu não esperava isso não.
- Evidência: Verified in Anthropic's system prompts: Opus 4.8 (28 May 2026) says 'Claude avoids using "genuinely", "honestly", or "actually"', and Fable 5.1 (1 Sep 2026) says 'Claude avoids saying "genuinely", "honestly", or "straightforward"'. Anthropic's page says these prompts 'do not apply to the Claude API'. Graphite: 'is genuinely' appeared 1,021 times in Claude Opus 5 articles against 4 in human articles, and Opus 5 uses 'is genuinely' 26x as often as Opus 5.5. Bitsy wiki count over 279,575 words drafted by Claude in Claude Code: genuinely 52 uses, actually 114, honestly 8. Paddo, citing Arena (second hand): Opus 5 'honestly' and 'frankly' up 50%.
- Fontes: https://platform.claude.com/docs/en/release-notes/system-prompts/claude-opus-4-8, https://platform.claude.com/docs/en/release-notes/system-prompts/claude-fable-5-1, https://graphite.io/research/ai-tells, https://graphite.io/research/ai-tells-opus-5-5-update, https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://paddo.dev/blog/a-dial-worth-turning/

### Flagging importance ('this matters', 'why X matters', 'matters because') [measured] (en/pt/es, content, new)

The text tells the reader that something matters instead of showing the consequence. This is Claude Opus 5.5's strongest measured tell. In PT it comes out as 'isso importa', 'por que isso importa', 'e é aqui que importa', 'o que realmente importa', 'tão importante quanto'.

- Errado: PT: E é por isso que isso importa. Contexto importa mais do que o modelo.
- Certo: PT: Sem o CLAUDE.md o agente apagou meu .env duas vezes na mesma semana, foi aí que eu parei de pular essa parte.
- Evidência: Graphite Opus 5.5 update: 'this matters' at 116x the human rate, 'why _ matters' at 92x, 'matters most' at 12x, 'just as important' at 13x. Original study: Claude Opus 5 'matters because' at 132x, GPT-6 Astra 'matters because' at 357x, and 'distinction matters' never occurs in human text.
- Fontes: https://graphite.io/research/ai-tells-opus-5-5-update, https://graphite.io/research/ai-tells, https://davidkemp.ai/blog/the-ai-tells-reference-sheet/

### 'Less like X and more like Y' and 'is more than a X, it is' [measured] (en/pt/es, sentence, adds-evidence-to-covered)

These are Claude's versions of the contrast frame. They redefine a thing by comparing it with a metaphor, or by saying it is 'more than' something. The PT forms are 'menos um X e mais um Y', 'é mais do que um X, é', 'mais do que X, é Y', 'parece menos X e mais Y'.

- Errado: PT: O Claude Code hoje é menos uma ferramenta e mais um colega de time.
- Certo: PT: Hoje eu deixo o Claude Code rodar a suíte de testes e abrir o PR sozinho, eu só reviso.
- Evidência: Graphite: Claude Opus 5 uses 'less like a _ and more like' at 105x the human rate (125 occurrences against 1 in human articles), and Claude's overall 'less X, more Y' comparisons run at 82x and are rising across versions. Opus 5.5 still uses 'is more than a _ it' at 98x and 'rather than simply' at 32x.
- Fontes: https://graphite.io/research/ai-tells, https://graphite.io/research/ai-tells-opus-5-5-update

### Corrective 'rather than' / ', not Y' tail [measured] (en/pt/es, sentence, adds-evidence-to-covered)

The contrast moves into a tail clause, either 'X rather than Y' or 'X, not Y'. This is the form that survived after models were tuned away from 'not just X but Y'. In PT it appears as 'em vez de simplesmente', 'e não apenas', ', não um X', 'ao invés de'. Wikipedia notes 'Y rather than X' is 'particularly common in recent LLM output' (2026 examples).

- Errado: PT: O problema era de contexto, não de modelo. Eu passei a documentar em vez de simplesmente prompar.
- Certo: PT: O modelo tava ok, o que faltava era contexto, aí eu comecei a documentar o repo.
- Evidência: Graphite: GPT-6 Astra 'rather than relying' at 187x, 'the _ is not simply' at 576x, overall corrective framing at 12x human. Claude Opus 5 'rather than merely' at 160x. Bitsy count on Claude Code output: ', not Y' tail 221 uses on 146 pages and 'rather than' 652 uses on 236 pages, at 7.9 per 10k words against 1.4 for all classic AI words combined.
- Fontes: https://graphite.io/research/ai-tells, https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

### Two-sentence negation ('It is not X. It is Y.') [measured] (en/pt/es, rhythm, adds-evidence-to-covered)

The contrast is split across two short sentences. This also produces the period-heavy rhythm João flagged. In PT it reads 'Não é X. É Y.' or 'Não foi sorte. Foi processo.'

- Errado: PT: Não é sobre a ferramenta. É sobre o processo.
- Certo: PT: A ferramenta mudou pouco, o que mudou foi como eu organizo o trabalho antes de abrir ela.
- Evidência: Bitsy: 28 pairs on 25 pages (hand-checked from 48 matches) in Claude Code output, and 7.7 to 15.9 per 10k words in four Claude-drafted novels. Pew: negative parallelism on the web nearly tripled from 0.87 per 10k words (Jan 2023) to 2.72 (Jul 2025).
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/

### Mannered prose (metaphor in place of the literal phrase) [measured] (en/pt/es, vocabulary, new)

Anthropic's own name for Claude's habit of putting a flourish where a plain phrase exists, such as 'a dial worth turning' for 'a parameter worth varying' or 'this point earns its keep' for 'this point still matters'. It includes trade and labor verbs for abstractions (buys, pays for, earns, does the work, carries the weight) and 'load-bearing'. In PT it comes out as 'carrega o peso', 'faz o trabalho pesado', 'paga o preço', 'ganha seu lugar', 'compra a gente tempo', 'peça que segura tudo', 'é a viga mestra'.

- Errado: PT: Esse hook é a peça que segura o resto, ele faz o trabalho pesado e paga o próprio custo.
- Certo: PT: Sem esse hook o build quebra, e ele roda em menos de um segundo.
- Evidência: Anthropic's Fable 5.1 prompting guide defines mannered prose and says to paste the definition into prompts, or the short form 'Please remove all mannered prose.' Graphite: Claude Opus 5 mannered-prose score is about 2.5x human. Opus 5.5 is 37% lower (10.57 against 16.75) but still 1.6x human (6.65), while GPT-6 Astra is 1.2x. Bitsy: 'load-bearing' 10 uses on 10 pages. Paddo/Arena (second hand): 'load-bearing' about twice as frequent in Opus 5.
- Fontes: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-1, https://graphite.io/research/ai-tells, https://graphite.io/research/ai-tells-opus-5-5-update, https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://paddo.dev/blog/a-dial-worth-turning/

### Inanimate subjects and personified components [observed] (en/pt/es, sentence, new)

Abstract or inanimate nouns become the grammatical subject, so the verb can 'land' at the end, and code components are given intentions (the function wants, decides, knows, happily accepts). This replaces the person who acted, usually 'eu', and so works directly against João's first-person voice. In PT it reads 'O harness decide...', 'o agente sabe que...', 'a mudança chegou silenciosa'.

- Errado: PT: O harness decide sozinho quando compactar, e o contexto agradece.
- Certo: PT: Eu deixei o harness compactar sozinho e parei de perder contexto no meio da tarefa.
- Evidência: Bitsy C12 (named) and S4: in Claude novels, 85 to 96% of sentences open on their grammatical subject. Signal Box: personification up 55% in Opus 5.5 novel output. A Hacker News comment (barrkel, Aug 14 2026, quoted in paddo) describes 'inanimate nouns as the subjects... where the real action can land like a surprise at the end'. Graphite: human writing has more first person and anecdotes.
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://research.signalbox.studio/research/opus-5-5-articles-vs-novels/, https://paddo.dev/blog/a-dial-worth-turning/

### Signpost as subject ('The catch is', 'The trick is', 'The honest answer') [observed] (en/pt/es, sentence, adds-evidence-to-covered)

A label noun opens the sentence and announces the payoff before it arrives. This extends the covered staged run-up with newer 2025-26 variants such as 'the real unlock', 'the uncomfortable truth', 'here's the kicker' and 'that's the whole game'. In PT it reads 'O pulo do gato é', 'O segredo é', 'A pegadinha é', 'A verdade é que', 'A resposta honesta é', 'O grande lance é', 'E aqui está a sacada'.

- Errado: PT: O pulo do gato é simples: deixar o agente planejar antes de codar.
- Certo: PT: Eu peço o plano antes do código, e só isso já cortou metade das idas e voltas.
- Evidência: Bitsy C8: 23 uses on 22 pages of Claude Code output. PostHero lists the 'newer wave' phrases as field notes from editing and says no study counts them yet. Claudisms bans the 'useful thing is' framing.
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://posthero.ai/blog/ai-words-to-avoid, https://claudisms.ai/

### Counted announcement ('Two caveats.', 'Three things follow.') [measured] (en/pt/es, structure, new)

A fragment states how many items are coming before giving them. This also feeds the rule-of-three habit. In PT it reads 'Duas ressalvas.', 'Três coisas mudaram.', 'Tem dois detalhes aqui.'

- Errado: PT: Três coisas mudaram. Primeiro, o contexto. Segundo, os hooks. Terceiro, os subagentes.
- Certo: PT: O que mais mudou pra mim foi o contexto, os hooks e os subagentes vieram depois e eu uso bem menos.
- Evidência: Bitsy C9: 69 uses on 62 pages of Claude-drafted text (279,575 words). Self-named by Claude as a tic.
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/

### Trailing 'which is why' explainer clause [measured] (en/pt/es, sentence, new)

The sentence ends with a clause that explains the sentence itself (', which is why...', ', which is what...'). In PT it reads ', o que explica por que...', ', e é por isso que...', ', o que faz com que...', ', o que significa que...'.

- Errado: PT: O contexto enche rápido, o que explica por que o agente esquece as regras no meio da tarefa.
- Certo: PT: O contexto enche rápido e no meio da tarefa o agente esquece as regras, eu vi isso acontecer umas três vezes ontem.
- Evidência: Bitsy C4: 144 uses on 107 pages, 13.7 per 10k words in Claude Code output, and 3.3 to 15.5 in Claude novels. No human baseline.
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/

### Totalizers and superlatives ('the whole X', 'the single most', 'every single') [measured] (en/pt/es, vocabulary, new)

Claude frames things as complete or extreme. In PT it reads 'é só isso, esse é o mecanismo inteiro', 'a única coisa', 'o mais importante de tudo', 'cada um deles', 'absolutamente todo', 'de longe o melhor'.

- Errado: PT: Esse é o mecanismo inteiro. É de longe a mudança mais importante do ano.
- Certo: PT: Pra mim foi a mudança que mais fez diferença esse ano, mas eu uso pouco das outras então posso estar enviesado.
- Evidência: Graphite: Claude Opus 5 against GPT-6 Astra, 'single most' and 'arguably the most' never occur in Astra, 'every single' at 112x, 'enormously' at 45x. Opus 5.5 against Astra: 'the most popular' at 45x, 'one of the best _ about' at 79x. Bitsy C3: 'is the whole/entire X' 29 uses, 'the only' 136 uses.
- Fontes: https://graphite.io/research/ai-tells, https://graphite.io/research/ai-tells-opus-5-5-update, https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/

### Evaluative adjectives that rate without describing [measured] (en/pt/es, vocabulary, new)

These adjectives grade a thing instead of saying what it does. Claude's set is deliberate, measured, steady, dependable, thoughtful and meaningful. GPT's is dependable, practical and meaningful. Gemini's is incredibly, profound and immense. In PT they are deliberado, intencional, cuidadoso, consistente, confiável, significativo, prático, sólido, e um 'pensado' solto.

- Errado: PT: Foi uma escolha deliberada e cuidadosa, que trouxe um ganho significativo e consistente.
- Certo: PT: Escolhi o Postgres porque eu já tinha ele rodando, e as queries caíram de 800ms pra 90ms.
- Evidência: Graphite: Claude Opus 5 'deliberate' at 26x, 'steady' at 6x, 'measured' at 4.2x. Opus 5.5 'dependable' at 23x, 'steady' at 11x, 'thoughtful' at 9x, 'meaningful' at 8x. GPT-6 Astra 'dependable' at 59x, 'practical' at 26x. Gemini 3.1 'profound' at 25x, 'immense' at 22x, 'incredibly' at 18x.
- Fontes: https://graphite.io/research/ai-tells, https://graphite.io/research/ai-tells-opus-5-5-update

### Forward-looking transitions ('what comes next', 'looking ahead', 'adds another layer') [measured] (en/pt/es, structure, new)

These are stock bridges to a next section or a closing outlook. In PT they read 'o que vem pela frente', 'olhando pra frente', 'daqui pra frente', 'isso adiciona mais uma camada', 'na prática' (overused). The Gemini variant uses formal connectives such as 'além disso', 'adicionalmente' and 'em última análise'.

- Errado: PT: Olhando pra frente, o que vem a seguir adiciona mais uma camada a essa discussão.
- Certo: PT: Semana que vem eu vou testar o mesmo fluxo no repo do trabalho, que é bem maior, e conto aqui se quebrou.
- Evidência: Graphite: Opus 5.5 'looking ahead the' at 40x, 'adds another layer' at 27x, 'what comes next' at 24x, 'in practice' at 7x. Gemini 3.1 'ultimately this' at 78x, 'furthermore the' at 43x. Gemini against Astra: 'additionally' at 1,139x, 'furthermore' never occurs in Astra.
- Fontes: https://graphite.io/research/ai-tells, https://graphite.io/research/ai-tells-opus-5-5-update

### No-tradeoff promises ('without losing', 'without sacrificing') [measured] (en/pt/es, content, new)

A benefit is claimed with no cost attached. A real author names the cost. In PT it reads 'sem perder', 'sem abrir mão de', 'sem comprometer', 'sem sacrificar'.

- Errado: PT: Dá pra acelerar o fluxo sem perder qualidade e sem abrir mão do controle.
- Certo: PT: Ficou mais rápido, mas eu revejo menos o código e já deixei passar um bug bobo por causa disso.
- Evidência: Graphite: GPT-6 Astra 'without requiring' at 70x and 'without losing' at 22x, Claude Opus 5 'without losing' at 6.1x and 'without sacrificing' at 4.3x, Gemini 'without sacrificing' at 7.8x.
- Fontes: https://graphite.io/research/ai-tells

### Fake-concrete round numbers ('twenty minutes', 'a handful', 'two or three') [measured] (en/pt/es, content, new)

Claude has learned to sound specific with round, unverifiable quantities. When they are not João's real numbers they read as invented. In PT they read 'uns vinte minutos', 'meia dúzia de', 'dois ou três', 'em seis meses', 'uma década'. Fix it with a real measured number from João, or drop it.

- Errado: PT: Em vinte minutos eu tinha meia dúzia de agentes rodando.
- Certo: PT: Levei a tarde toda pra deixar quatro agentes rodando, e um deles eu desliguei no dia seguinte.
- Evidência: Graphite: across Claude versions, 'concrete numbers and timeframes' ('twenty minutes', 'ten minutes', 'five minutes', 'a dozen', 'a handful', 'six months', 'a decade', 'two or three') become more common relative to human writing.
- Fontes: https://graphite.io/research/ai-tells

### 'Quietly' / 'silently' as hidden-drama adverb [observed] (en/pt/es, vocabulary, new)

The adverb implies that a change went unnoticed, or credits an ordinary act with discretion nobody claimed. It is listed for GPT-6 era output (mid-2026) and for Claude. In PT it reads 'silenciosamente', 'discretamente', 'sem alarde', 'sem ninguém perceber', 'de mansinho'.

- Errado: PT: A Anthropic mudou silenciosamente o harness e meu workflow ficou obsoleto sem alarde.
- Certo: PT: Eu só percebi que o harness tinha mudado quando li o changelog da 2.1.
- Evidência: Wikipedia lists 'quietly', 'leverage', 'multifaceted' and 'prioritize' as mid-2026 GPT-6 vocabulary. Bitsy W5: 'quietly' 14 and 'silently' 25 uses in Claude Code output. PostHero calls 'quietly' 'the word I see most in newer client drafts'. Claudisms and Kemp both flag it.
- Fontes: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing, https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://posthero.ai/blog/ai-words-to-avoid, https://claudisms.ai/, https://davidkemp.ai/blog/the-ai-tells-reference-sheet/

### 'Worth X' appraisal family [measured] (en/pt/es, vocabulary, adds-evidence-to-covered)

'Worth noting' is already covered. This adds the whole family: worth knowing, worth holding onto, worth sitting with, worth stating plainly, worth a look. In PT it reads 'vale notar', 'vale lembrar', 'vale a pena guardar', 'vale ressaltar', 'vale destacar', 'cabe destacar'. In ES it reads 'cabe destacar', 'vale la pena señalar'.

- Errado: PT: Vale guardar duas coisas daqui. Vale notar também que...
- Certo: PT: Duas coisas que eu aprendi apanhando, o hook roda antes do commit e ele não vê arquivo fora do repo.
- Evidência: Bitsy W7: 85 uses on 61 pages of Claude-drafted text. Paddo quotes an HN comparison listing 'worth stating plainly' as an Opus 5 Claude-ism. PT practitioner lists (IAê, Marfin, Correria) all put 'vale ressaltar/destacar' near the top.
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://paddo.dev/blog/a-dial-worth-turning/, https://iaenews.substack.com/p/as-100-palavras-que-fazem-seu-texto, https://blog.marfin.co/escrever-com-ia-sem-parecer-ia

### Precision/candour frame ('to be clear', 'I want to be precise', 'I'll be honest') [measured] (en/pt/es, voice, new)

The writer announces their own care or candour. Anthropic banned this in the Oct 2024 system prompt ('I aim to be direct', 'I need to be honest'). It survives edits, because the slot gets refilled with new adjectives. In PT it reads 'pra ser claro', 'sendo bem honesto', 'vou ser direto', 'pra ser preciso', 'falando sério'.

- Errado: PT: Vou ser direto: sendo bem honesto, eu não uso mais metade desses agentes.
- Certo: PT: Metade desses agentes eu não uso mais.
- Evidência: Bitsy C10: 1.3 to 5.1 per 10k words in Claude novels. After a critique ordered the frame cut, the polish pass left it 32 times across 23 of 39 chapters with new adjectives (true, clear, modest, careful, honest). Anthropic Sonnet 3.5 prompt, 22 Oct 2024: 'Claude NEVER starts with or adds caveats about its own purported directness or honesty' (quoted by Bitsy, not reopened here).
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/

### Closing maxim and paragraphs that end more abstract [measured] (en/pt/es, rhythm, adds-evidence-to-covered)

A paragraph closes on a short sentence that restates it as a maxim, or on a longer, more abstract sentence than the ones before. This extends the covered 'one-line closer' rule with measurement. Human paragraphs often just stop on a detail.

- Errado: PT: ...e foi assim que eu migrei os hooks. No fim, ferramenta boa é a que some.
- Certo: PT: ...e foi assim que eu migrei os hooks, o último que sobrou foi o de lint porque eu tenho preguiça de mexer.
- Evidência: Bitsy S5: in Claude novels, 51 to 65% of multi-sentence paragraphs close on a sentence longer than the paragraph's average. C7 (short maxim close) is self-named. Wikipedia and Marfin both note closing summaries.
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://blog.marfin.co/escrever-com-ia-sem-parecer-ia

### Flat sentence-length rhythm (low burstiness) [measured] (en/pt/es, rhythm, adds-evidence-to-covered)

AI sentence lengths cluster in a narrow mid band. Models trim long sentences and drop short direct ones. This supports João's rule against chains of short period-terminated sentences, but the measured fix is variance, not uniform long sentences. Mix one long comma-chained sentence with an occasional very short one. A paragraph of five 12-word sentences is the tell.

- Errado: PT: Eu criei vinte comandos. Eles funcionavam bem. Depois o harness evoluiu. Hoje uso só três. O resto ficou obsoleto.
- Certo: PT: Eu criei uns vinte comandos e por um tempo eles funcionavam bem, até o harness começar a fazer sozinho metade do que eles faziam e eu ir largando um por um. Sobraram três.
- Evidência: TextPulse (60,779 human/AI pairs, 8 model configs): human CV 0.449 against AI 0.376, and 79.3% of rewrites are flatter. Models 'remove the short, direct sentences almost entirely'. Graphite: sentence-length SD is much lower in AI. Druck (VentureBeat): 'LLMs tend to generate sentences that are just more uniform in length'. Polish 2,400-pair study: AI sentence-length SD lower. Muñoz-Ortiz 2024: LLMs concentrate in the 10 to 30 token range.
- Fontes: https://textpulse.ai/research/textpulse-burstiness-sentence-length-2026.pdf, https://graphite.io/research/ai-tells, https://venturebeat.com/data/claude-opus-5-5-uses-em-dashes-99-less-often-and-sounds-more-human-but-still-exhibits-2-548-ai-writing-tells, https://www.degruyterbrill.com/document/doi/10.1515/psicl-2025-0063/html, https://link.springer.com/article/10.1007/s10462-024-10903-2

### Period-heavy PT output and translations [measured] (pt/es, punctuation, adds-evidence-to-covered)

In Brazilian Portuguese and Spanish, GPT output uses more periods and shorter sentences than human writers, who chain clauses with commas. This also hits AI translations into PT/ES, which matters for this pipeline (PT first, then EN/ES). Wikipedia also notes GPT-6 era text has 'much more period and comma usage' with sentences held near 8 to 20 words.

- Errado: PT: Testei o recurso. Funcionou. Mas tem um problema. O contexto estoura.
- Certo: PT: Testei o recurso e funcionou, só que o contexto estoura rapidinho quando o repo é grande.
- Evidência: ACL STYGENAI 2026 (ChatGPT-4o, EN/PT-BR/ES, small corpus of 12 texts): GPT translations into PT use 108.2 periods per 1k tokens against 86.7 for humans, and ES 105.1 against 95.8. Mean sentence length for the ES original is 8.9 words for GPT against 19.6 for humans, and GPT is also shorter in PT-BR. Wikipedia (GPT-6, mid-2026): 'much more period and comma usage', 'strict 8–20 word limit'.
- Fontes: https://aclanthology.org/2026.stygenai-1.5.pdf, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

### Em dash: model-dependent, and worst in PT/ES translation [measured] (pt/es/en, punctuation, adds-evidence-to-covered)

The em dash is no longer a universal tell. GPT-6 and Gemini 3.1 nearly dropped it, and Opus 5.5 is down 99% to 0.015 per 1k words, but Opus 5 used it at about the human rate. In PT/ES the travessão used English-style is foreign to normal blog prose, and GPT-4o translations into PT were full of it. Keep banning it in PT/ES, and check the EN version separately for dashes the translation step adds.

- Errado: PT: O harness — e isso me pegou de surpresa — já faz isso sozinho.
- Certo: PT: O harness já faz isso sozinho, e isso me pegou de surpresa.
- Evidência: ACL 2026: em dashes per 1k tokens, GPT-4o translation into PT at 27.3, into ES at 25.3, PT original at 9.5, against human PT/ES at 0.0. Graphite Opus 5.5: 0.015 per 1k words against 2.92 for Opus 5. GenPolish on the Human Detectors data: Claude 3.5 Sonnet articles had an em dash in 16.67% of cases against 82.67% for journalists. Washington Post: GPT-4o em dash went from under 1 in 10 responses to more than half (mid-2025). Pew: web em-dash rate roughly doubled (5.79 to 11.19 per 10k words, 2023 to 2026).
- Fontes: https://aclanthology.org/2026.stygenai-1.5.pdf, https://graphite.io/research/ai-tells-opus-5-5-update, https://genpolish.app/blog/ai-tells-study, https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/, https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/

### Quoting or bolding your own slang [observed] (pt/es, formatting, new)

When an LLM writes informal Portuguese it puts colloquial expressions in quotation marks or bold, as if flagging a deviation from the norm. A real Brazilian writer just uses 'gambiarra', 'na mão', 'deu ruim', 'tankar' without marking them.

- Errado: PT: Era uma "gambiarra" que funcionava, mas quando **deu ruim** eu tive que refazer tudo na mão.
- Certo: PT: Era uma gambiarra que funcionava, mas quando deu ruim eu tive que refazer tudo na mão.
- Evidência: Lira and Barbosa (Amazônica, Oct 2026, qualitative, ChatGPT and Gemini): 'features associated with spoken language are frequently highlighted in bold or enclosed in quotation marks, as though they constituted deviations from standard linguistic norms', and regional varieties come out as stereotypes.
- Fontes: https://periodicos.ufam.edu.br/index.php/amazonica/article/view/21436

### Formal, positive, impersonal register in PT [measured] (pt/en, voice, adds-evidence-to-covered)

In Portuguese, LLM text is more formal, positive and motivational, with fewer personal and temporal references and little negative emotion. Human PT text varies more in length, complains, gets annoyed, and anchors on 'eu', 'ontem', 'semana passada', 'no meu trampo'. This measured support for João's first-person rule adds complaint and specific time anchors.

- Errado: PT: Essa abordagem oferece uma experiência mais fluida e produtiva para desenvolvedores.
- Certo: PT: Semana passada eu perdi uma manhã inteira brigando com isso e fiquei bem irritado, até descobrir que era um flag.
- Evidência: Rodrigues, Sturm and Pinheiro (iScience 2026, Portuguese news, GPT-4o/Mistral/Llama, LIWC+SAGE): AI is 'more formal, structured, positive, and motivational', and human texts 'vary more in length, exhibit negative emotions, and often use personal references' and 'specific temporal and personal references'. Graphite (EN): human tells are first person, 'my favorite', 'last year', 'years ago', casual qualifiers 'pretty' and 'sort of', and over 100x more exclamation marks.
- Fontes: https://www.cell.com/iscience/fulltext/S2589-0042(26)00351-2, https://graphite.io/research/ai-tells

### Humans make more errors (supports colloquial grammar rule) [measured] (pt/en/es, voice, adds-evidence-to-covered)

This is measured support for João's rule that perfect grammar reads as AI. Experienced detectors know humans make more grammatical errors, and AI text has fewer errors. Allow PT-BR colloquial grammar that a real dev writes: 'pra', 'tá', 'a gente', 'tipo', a pronoun opening the sentence ('Me deu trabalho'), 'ter' for 'haver' ('tem dois jeitos'), a missing comma before 'mas' now and then, 'aí'. Do not fake spelling typos that make João look careless.

- Errado: PT: Há duas formas de fazê-lo, e cada uma delas apresenta vantagens.
- Certo: PT: Tem dois jeitos de fazer isso e cada um tem lá suas vantagens, me deu trabalho escolher.
- Evidência: Russell, Karpinska and Iyyer (ACL 2025): nonexperts believe humans write more grammatical sentences, 'while experts realize the opposite is true: humans actually make more grammatical errors'. A majority of 5 experts misclassified 1 of 300 articles. Kutyła et al. (2,400 Polish report pairs): 'LLMG texts demonstrate... fewer errors'. Walter (ES practitioner): 'cero faltas de ortografía, cero tildes olvidadas, cero opiniones' as a tell.
- Fontes: https://arxiv.org/abs/2501.15654, https://www.degruyterbrill.com/document/doi/10.1515/psicl-2025-0063/html, https://walterwrites.ai/es/como-saber-si-un-texto-es-de-ia/

### Rarer, longer words and dense nominalizations [measured] (pt/en/es, vocabulary, new)

AI uses longer, rarer content words and turns verbs into nouns ('a implementação de', 'a realização de', 'a utilização de', 'a otimização do processo'). Human PT blog prose uses short common verbs ('fiz', 'botei', 'usei', 'rodei').

- Errado: PT: A implementação da automatização possibilitou a otimização da utilização dos recursos.
- Certo: PT: Automatizei o deploy e parei de gastar máquina à toa.
- Evidência: Reinhart et al. (PNAS 2025): GPT-4o uses nominalizations at 2.1x and present participial clauses at 5.3x the human rate. Graphite: AI averages 5.2 to 5.7 characters per word against 4.9 for humans, with higher MTLD. ACL 2026: GPT PT-BR originals have rarer vocabulary (mean Zipf 3.51 against 3.70) and higher lexical density (0.540 against 0.485).
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122, https://graphite.io/research/ai-tells, https://aclanthology.org/2026.stygenai-1.5.pdf

### Gerund tails in PT ('garantindo', 'permitindo', 'tornando') [measured] (pt/es/en, sentence, adds-evidence-to-covered)

This is the Portuguese surface form of the covered -ing participle tail, with evidence attached. A sentence ends in a gerund clause that adds superficial analysis. In PT it reads ', garantindo mais segurança', ', permitindo que', ', tornando o processo mais ágil', ', o que contribui para'. In ES it reads ', garantizando', ', permitiendo'.

- Errado: PT: Configurei os hooks antes do commit, garantindo mais segurança e permitindo um fluxo mais ágil.
- Certo: PT: Configurei os hooks pra rodar antes do commit, assim eu não subo mais chave de API sem querer.
- Evidência: Reinhart et al. (PNAS 2025): GPT-4o present participial clauses at 5.3x the human rate (English measurement, not PT). Wikipedia 'Superficial analyses' words to watch: highlighting, ensuring, reflecting, contributing to, fostering, enhancing.
- Fontes: https://www.pnas.org/doi/10.1073/pnas.2422455122, https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

### PT calques of English AI vocabulary [observed] (pt/es, translation, adds-evidence-to-covered)

English AI vocabulary resurfaces as calques in PT, and this is what the PT-first draft must avoid. The verbs are mergulhar (delve), alavancar (leverage), potencializar, desbloquear (unlock), navegar (navigate) and fomentar. The nouns are cenário/panorama (landscape), jornada, ecossistema, tapeçaria and pilar. The adjectives are robusto, crucial, fundamental, transformador and sem emenda/fluido (seamless). The openers and closers are 'No cenário atual', 'Em um mundo onde', 'Em suma' and 'Diante do exposto'. The ES equivalents are sumergirse, adentrarse, panorama, abanico, cabe destacar and sin fisuras.

- Errado: PT: No cenário atual, vale mergulhar nessa jornada para alavancar um workflow robusto.
- Certo: PT: Eu passei uns meses mexendo nisso pra deixar meu workflow mais simples.
- Evidência: These are consistent practitioner lists from PT (IAê 100-word list, Aug 2026, Marfin, Correria Digital, O Tecido) and ES (Diario Vida, El Debate). No PT frequency study with counts was found. LabIIA (qualitative, ChatGPT PT) adds 'Claro!' openers, every paragraph opening with a time marker ('na última sexta-feira', 'à noite'), excessive adjectives, and direct SVO short periods.
- Fontes: https://iaenews.substack.com/p/as-100-palavras-que-fazem-seu-texto, https://blog.marfin.co/escrever-com-ia-sem-parecer-ia, https://correria.digital/sotaque-de-ia/, https://diariovida.com/tics-texto-escrito-con-ia-espanol/, https://www.eldebate.com/tecnologia/20261013/posible-saber-texto-esta-escrito-inteligencia-artificial-cns_469014.html, https://labiialab.com.br/publicacoes/marcas-linguisticas-e-estruturais-no-chatgpt-implicacoes-da-ia-generativa-para-o-ensino-aprendizagem-da-escrita/

### Single-word italics for stress [measured] (en/pt/es, formatting, new)

Claude italicizes one word for emphasis (*real*, *antes*, *nunca*). Human PT blog prose rarely does this. Use plain words, and if stress is needed, put it in word order or add 'mesmo'.

- Errado: PT: Eu *nunca* rodo isso *antes* do review.
- Certo: PT: Isso eu não rodo antes do review de jeito nenhum.
- Evidência: Bitsy S6: 11.1 to 27.0 single-word italics per 10k words in Claude novels. No human baseline.
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/

### Placeholder nouns ('thing', 'something', 'nothing') [measured] (en/pt/es, vocabulary, new)

Claude reaches for empty nouns where a specific one exists, often in maxim form ('Nothing needs to be lost.'). In PT it reads 'a coisa é que', 'algo mudou', 'nada se perde', 'tudo muda'.

- Errado: PT: Algo mudou no harness, e nada mais foi igual.
- Certo: PT: O harness ganhou subagentes nativos, e aí meus 45 agentes ficaram sem função.
- Evidência: Bitsy W8: 'nothing' 463 uses on 186 pages of Claude Code output, and thing(s) at 41.6 to 81.1 per 10k words in Claude novels. No human baseline.
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/

### Helpfulness and benefit language (Opus 5.5) [measured] (en/pt/es, vocabulary, new)

Opus 5.5 drifts toward reader-benefit phrasing that reads like a tutorial or marketing. In PT it reads 'pode te ajudar a', 'facilita', 'te ajuda a evitar', 'é especialmente útil', 'isso torna mais fácil'. A personal post says what happened to João, not what the reader will gain.

- Errado: PT: Esse hook é especialmente útil e pode te ajudar a evitar erros, tornando o fluxo mais fácil.
- Certo: PT: Esse hook me salvou de commitar um .env pelo menos duas vezes.
- Evidência: Graphite Opus 5.5 against Opus 5: 'is especially helpful' at 12x, 'can help you' at 8x, 'makes it easier' at 6x, 'helps you avoid' at 5x.
- Fontes: https://graphite.io/research/ai-tells-opus-5-5-update

### Fixing named tells is not enough: count frames, not words [measured] (en/pt/es, other, new)

Word banlists catch little in current Claude output. The tells live in frames with open slots, and the slot gets refilled with new words. The skill's review step should count frames per draft (', não Y' tails, 'Não é X. É Y.', 'o que explica', sentence-length spread, 'isso importa') and not only grep a word list. GPT shifts tells between versions, so model-version notes must be dated.

- Errado: Review step greps for 'delve, crucial, robusto' and passes a draft with eight ', não Y' tails.
- Certo: Review step reports, for example, 0 travessões, 2 ', não Y' tails, a sentence-length SD of 9 words, 0 'isso importa' and 0 'genuinamente', then rewrites the frames.
- Evidência: Bitsy: 16 classic AI words appear 1.4 per 10k words in Claude output, against 7.9 for the ', not Y' tail alone. A novel blacklist matched '0–2 times in 355,000 words' against 399 uses of one simile frame. Graphite: 65% of tells are unique to one model family, and 55 to 72% of tells differ between consecutive versions. Well-known tells fell 41 to 86%, but Opus 5.5 still has 2,548 tells.
- Fontes: https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/, https://graphite.io/research/ai-tells, https://graphite.io/research/ai-tells-opus-5-5-update

### ChatGPT-era emoji and newer GPT words (for comparison) [measured] (en/pt/es, formatting, adds-evidence-to-covered)

This is for comparison with GPT drafts. GPT-4o emoji use exploded, led by check marks, brains and blue diamonds, and its words shifted from delve, ensure and crucial to core, modern and contractions. Don't put ✅ or 🧠 in headings or lists, and don't use 'core' or 'moderno' as filler.

- Errado: PT: ✅ O core do meu setup moderno
- Certo: PT: O que sobrou do meu setup
- Evidência: Washington Post analysis of 328,744 GPT-4o messages (May 2024 to July 2025): emojis appear in 70% of July messages, ✅ at 11x the human rate, 'not just X but Y' in 6% of chats, 'delve' in 1 of 1,000 chats in July 2025, 'core' up 5x, 'modern' in over 8% of messages, and contractions up sharply.
- Fontes: https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/

## Linha de pesquisa: gaps

**Notas do pesquisador:** Sources opened in full or in substantial part: arXiv 2410.16107 (Reinhart et al., main text only, so the SI pronoun table could not be checked), graphite.io/research/ai-tells, tropes.fyi, plus long Exa extracts of the ACL/arXiv/Nature/SBES/RAEL/RIFOP papers. Only the abstracts were available for Petrenko et al. (Dialnet) and Pérez-Montero et al. 2026; they are cited as abstract-level support only. I could not confirm the second-person 52%/63% figures in the primary Reinhart source; they come from a secondary style guide that cites it. Findings that work against expectations: (1) overuse of parentheses and of quotation marks is NOT an AI tell. Humans use more of both (Spanish corpus study plus Graphite), so the skill should not strip asides. (2) Second-person address is a human marker in blogs. Closing calls to action are already covered under engagement-bait closers, and Graphite says those well-known tells are declining in newer models, so I added nothing new there. I found no rigorous source on link anchor text as an AI tell and left it out. The dev-word false-friend examples (apagar/borrar etc.) are my own illustrations; the paper's own example is salsa (parsley) mistranslated as salsa (sauce). Practical implication for the skill's translation step, from Li et al. 2025: write each language version as a rewrite from the PT meaning, add a separate polish pass, run a final check of number, date and currency formats against the target locale, and run a false-friend check for ES. Adding 'be natural' to the translation prompt alone did not help. Nothing was taken from the user's memory for this report.

### Tradução que mantém o esqueleto da frase em PT (shining-through) [measured] (en/es/pt, translation, new)

When the PT post is machine-translated to EN or ES, the model keeps the source sentence shape: same clause order, same length, same comma chains, PT idioms rendered literally. In EN, João's long comma-chained PT sentences turn into comma splices and run-ons that no native writer produces. The fix is to stop asking for a translation. Ask for a rewrite in the target language from the PT meaning, re-segment sentences by the target language's norms, and then do a second polish pass on the result. Asking the model to 'make it natural' in the same translation prompt does not help and can make it worse.

- Errado: EN from PT 'Eu testei isso por duas semanas, quebrou três vezes, aí eu desisti e voltei pro script antigo' -> 'I tested this for two weeks, it broke three times, then I gave up and returned to the old script.'
- Certo: 'I gave it two weeks. It broke three times, so I went back to my old script.' (EN re-segmented, phrasal verb 'went back' in place of the literal 'returned to')
- Evidência: Li et al. 2025 (ACL, 'Lost in Literalism'): more than 40% of GPT-4 translations had translationese errors (up to 76% for Mistral-7B, EN-ZH). A two-step 'translate then polish' prompt cut GPT-4 from 43% to 25%. A prompt that only specified naturalness requirements did not reliably help and raised GPT-4's errors in some cases (reported by Slator). Bizzoni et al. 2020 (IWSLT): MT shows more structural shining-through of the source and less normalization than human translation. Aranberri 2020: MT output tends to keep source sentence length.
- Fontes: https://arxiv.org/abs/2503.04369, https://aclanthology.org/2025.acl-long.630/, https://slator.com/translationese-remains-challenge-for-large-language-models-study-finds/, https://aclanthology.org/2020.iwslt-1.34.pdf, http://hdl.handle.net/10045/104728

### Tradução achata o vocabulário (gíria e expressão viram palavra neutra) [measured] (en/es/pt, translation, new)

Machine translation lowers lexical diversity compared with text written in the target language. PT slang, regional words and idioms ('gambiarra', 'deu ruim', 'na unha') get swapped for one flat neutral word, and the same plain word repeats. The EN/ES version loses the voice the PT version had. The fix is to map each colloquial PT expression to a colloquial expression a dev in the target language would use, not to its dictionary meaning.

- Errado: PT 'fiz na gambiarra e deu ruim' -> EN 'I made an improvised solution and it went badly' / ES 'hice una solución improvisada y salió mal'
- Certo: EN 'I hacked it together and it blew up' / ES 'lo hice a lo bruto y se rompió todo'
- Evidência: Vanmassenhove, Shterionov & Gwilliam 2021 (EACL): all MT paradigms tested (SMT and NMT) lose lexical and morphological richness, for EN<->ES and EN<->FR. Niu & Jiang 2024 (Humanities & Social Sciences Communications): in government documents, MTLD was 10.05 in originals, 8.26 in human translations and 7.56 in Google MT, so MT is more simplified than human translation. For novels, MT differed significantly from originals while human translation did not.
- Fontes: https://aclanthology.org/2021.eacl-main.188.pdf, https://www.nature.com/articles/s41599-024-02986-7

### Número, data, moeda e unidade sem localização na tradução [measured] (en/es/pt, translation, new)

When LLMs translate, they often keep the source locale's number format (PT '1.500,50' left as-is in EN), get dates wrong or garble them, keep abbreviated units in the source form, or spell numbers out as words. A US/UK reader who sees '1.500 requisições' or '26/11' in an EN post knows it came from a pipeline. Each target version needs a check: EN uses 1,500.50, 'Nov 26' and '2 pm'. ES follows the reader's locale (Spain writes 1.500,50, Mexico writes 1,500.50). Currency should be rewritten for the reader (R$ 50, about US$ 10) or kept on purpose with context.

- Errado: EN: 'The bill went from R$ 1.200,00 to R$ 340,00 on 03/10.'
- Certo: EN: 'The bill dropped from about R$1,200 to R$340 (roughly $220 to $60) in early October.'
- Evidência: Kaye 2026 (arXiv 2608.05232), 5 LLMs, EN<->DE: mean localization accuracy was only 50.3% with plain translation and 53.3% with the formatting rules in the prompt (best). Chain-of-thought dropped it to 40.2%. Failure modes included shifted times, dropped days and numerals turned into words. Sousa et al. 2024 (SBES), MT into Portuguese: 88% of abbreviated units were left in English form. 66% of 'correct-format' dates were hallucinated (03/31/2023 became 30/03/2023). AM/PM got confused (10:00 AM -> 22:00). Wang et al. 2021: a separator that stays unchanged after translation is a common error.
- Fontes: https://arxiv.org/html/2608.05232, https://doi.org/10.5753/sbes.2024.3587, https://ar5iv.labs.arxiv.org/html/2107.08357

### Portunhol na versão em espanhol (falsos amigos PT-ES) [measured] (es/pt, translation, new)

Because PT and ES share so much vocabulary, LLMs carry PT words into ES with the PT meaning. Models do worse on closely related language pairs than on distant ones, because the overlap hides the difference in meaning. In dev posts the risky words are everyday ones: PT 'apagar' (delete) is ES 'borrar' (ES 'apagar' = turn off), PT 'esquisito' (weird) vs ES 'exquisito' (delicious/refined), PT 'contestar' (dispute) vs ES 'contestar' (answer), PT 'pegar' (grab) vs ES 'pegar' (hit/paste), PT 'tirar' (remove) vs ES 'tirar' (throw away), PT 'largar' (drop) vs ES 'largo' (long). One false friend is enough for a native reader to see a translation.

- Errado: ES: 'Apagué la tabla en producción y el comportamiento fue muy exquisito.'
- Certo: ES: 'Borré la tabla en producción y pasó algo rarísimo.'
- Evidência: Vázquez Abuín, Camacho-Collados & Garcia 2026 (ACL), 704 validated GL/PT/ES word pairs, 29 models: 'linguistic proximity itself introduces errors'. Closely related pairs perform worse, partial false friends are the hardest category for ES-PT, and MT keeps showing false-friend interference (PT 'salsa' (parsley) translated as ES 'salsa' (sauce)). Sepúlveda Torres & Aluísio 2011: about 20% of ES-PT cognates are false. The dev-word examples are my own illustrations, not from the papers.
- Fontes: https://aclanthology.org/2026.acl-long.1818.pdf, https://aclanthology.org/W11-4508, https://www.scielo.br/j/delta/a/XmWRCG7mDWCxdqNKJ6XtsNj/

### ES: 'se' impersonal + 'es fundamental' + enumeración [measured] (es, voice, new)

Spanish AI text leans on one combination: an enumerative list structure plus impersonal evaluative statements ('es fundamental desarrollar', 'se debe fomentar', 'es necesario'), closed with predictable connectors ('en la actualidad', 'por lo tanto', 'en conclusión'). Human Spanish writers mix first person with concrete experience and break syntax on purpose for emphasis. The Spanish version needs 'yo', verbs of experience ('probé', 'me di cuenta', 'me pasó') and no 'se' impersonal verbs where a person did the thing.

- Errado: ES: 'En la actualidad, es fundamental automatizar el despliegue. Por lo tanto, se recomienda utilizar herramientas de CI.'
- Certo: ES: 'Yo automaticé el deploy después de romper producción un viernes, y desde entonces lo hace GitHub Actions.'
- Evidência: RIFOP study (Universidad de Murcia), 50 ChatGPT texts vs 82 student texts, 784 coded fragments: 96.07% of AI fragments fell into 'probable' or 'de-subjectivized' writing, against 49.2% for students. The enumerative-structure + evaluative-impersonality pairing appeared in 41 of 50 AI texts (82%). Predictable connectors + neutral phrasing ('en conclusión', 'por lo tanto', 'en la actualidad') appeared in 35. Student texts combined first person with experience in 56 cases. Pérez-Montero, Moreda & Lloret 2026 (abstract only): Spanish AI text homogenizes subjectivity and does not reproduce the polarized extremes humans show.
- Fontes: https://revistas.um.es/rifop/article/download/738601/408771/3001081, https://hdl.handle.net/10045/171166

### ES: adjetivos de más, adverbios y pronombres de menos [measured] (es, vocabulary, new)

In Spanish, GPT models use more adjectives, and more distinct adjectives, than humans, and fewer adverbs and pronouns, again counted both as tokens and as distinct words. The Spanish version reads as a stack of qualified nouns ('una solución robusta y escalable') with little 'yo/me/le/lo' and few adverbs like 'ya', 'todavía', 'casi', 'bastante', 'igual'. Fix: cut rating adjectives and put back pronouns and the small adverbs a speaker uses.

- Errado: ES: 'Implementé una solución robusta, escalable y eficiente para la gestión integral de colas.'
- Certo: ES: 'Lo armé con una cola en Redis, y todavía aguanta bastante bien.'
- Evidência: Alonso Simón et al. 2025 (RAEL 23(1)), ROBOT-TALK corpus sample of 180 texts (human vs GPT-3.5 vs GPT-4): 17 of 41 features differed with very high significance. Adjectives and unique adjectives were higher in the LLMs. Adverbs, unique adverbs, pronouns and unique pronouns were higher in humans. Human type-token ratio was higher by 2.3% (vs GPT-3.5) and 2.8% (vs GPT-4). The models used more periods and more sentences per text, which confirms the covered ES 'too many periods' rule. Petrenko et al. (Dialnet, abstract only): AI media text in Spanish had fewer metaphors and less emotional expressiveness.
- Fontes: https://doi.org/10.58859/rael.v23i1.666, https://dialnet.unirioja.es/servlet/articulo?codigo=10651021

### Parênteses e aspas: o humano usa MAIS (não cortar tudo) [measured] (pt/en/es, punctuation, adds-evidence-to-covered)

A correction. Overuse of parentheses or quotes is not an AI tell. Humans use parenthetical asides and quotation marks more than models do. If a humanizer pass strips every parenthesis and every quoted term, the result moves toward the AI profile. Keep João's real asides, like '(sim, eu sei)' and '(isso foi às 2 da manhã)'. Only cut scare quotes around ordinary words that need no flag.

- Errado: 'Rodei a migration em produção sem testar. Quebrou o checkout.' (every aside removed for being 'informal')
- Certo: 'Rodei a migration em produção sem testar (sim, numa sexta), e quebrou o checkout.'
- Evidência: Alonso Simón et al. 2025 (Spanish, ROBOT-TALK): humans use opening and closing parentheses, quotation marks, colons, semicolons, slashes and short hyphens significantly more than GPT-3.5/GPT-4. The only exception is the period, which the models overuse. Graphite 2026 (10,000 human vs 90,000 AI articles in English): human writers use parenthetical asides 'far more often' than models (no ratio given) and use exclamation marks more than 100 times as often.
- Fontes: https://doi.org/10.58859/rael.v23i1.666, https://graphite.io/research/ai-tells

### Falta de 'você' direto com o leitor [measured] (pt/en/es, voice, new)

Instruction-tuned models address the reader directly much less than human bloggers do. They fall back on 'o usuário', 'o desenvolvedor', 'é possível' or 'pode-se'. A dev blog post written by a person talks to the reader with 'você' (or 'tu'/'vos' in ES, 'you' in EN) when it gives advice. This pairs with the first-person rule: the 'eu' tells the story and the 'você' gives the advice.

- Errado: 'É possível configurar o hook no arquivo settings.json, o que permite ao desenvolvedor automatizar a tarefa.'
- Certo: 'Se você quiser automatizar isso, joga o hook no settings.json e pronto.'
- Evidência: Graphite 2026: 'the human articles use contractions and the second person much more often' than the nine AI models tested (no ratio given). A secondary style guide (mr-k-man/llm-tips) cites Reinhart/Brown et al. (PNAS 2025, Biber features) as reporting second-person pronouns at 52% of the human rate for GPT-4o and 63% for GPT-4o Mini. I opened the Reinhart paper (arXiv 2410.16107), but its main text does not show the pronoun table, which is in SI Tables S5-S6. I could not confirm those two figures in the primary source.
- Fontes: https://graphite.io/research/ai-tells, https://arxiv.org/abs/2410.16107, https://github.com/mr-k-man/llm-tips/blob/main/style_guide.md

### Analogia de prateleira ('pense nisso como um canivete suíço') [observed] (pt/en/es, content, new)

To explain a concept, the model reaches for a ready-made analogy from a small stock: Swiss Army knife, orchestra conductor, highway for data, scaffolding vs building, compass vs map, lighthouse, bridge. It often introduces it with 'Pense nisso como' or 'É como se'. Two variants make it worse. One stretches the same metaphor across the whole post. The other stacks historical comparisons ('assim como foi com a web, o mobile e a cloud') to borrow authority. Humans either skip the analogy or use one from their own life, once.

- Errado: 'Pense no harness como um maestro de orquestra, que coordena cada agente como um instrumento.'
- Certo: 'O harness faz o que eu fazia na mão com 20 comandos, ele decide sozinho qual agente chamar.'
- Evidência: tropes.fyi (ossama.is) names it 'Think of It As... the patronizing analogy', plus 'Dead metaphor' (the same metaphor 5-10 times) and 'Historical analogy stacking' ('especially common in technical writing'). Bremner 2026 lists recurring AI metaphors he cut from a manuscript: brochure, lighthouse, scaffolding, compass, bridge, orchestra, toolkit. Cheng et al. 2026 (Communications Psychology) used ChatGPT's 'AI is the conductor of a grand symphony' as the reference text for spotting AI-written survey answers (cosine similarity 0.85-0.90). Graphite measured 'mannered prose' at about 2.5x the human score for Claude Opus 5 (already covered as mannered prose; this entry adds the stock-analogy inventory).
- Fontes: https://tropes.fyi, https://github.com/understudylabs/understudy-agent-tools/blob/main/skills/deslop/references/tropes.md, https://stevebremner.com/2026/08/metaphors-ai-overuses, https://pmc.ncbi.nlm.nih.gov/articles/PMC12808644/, https://graphite.io/research/ai-tells

### Comentário de código que narra o óbvio [observed] (pt/en/es, other, new)

Code snippets in a dev post written by AI carry comments that restate the next line ('// Inicializa o array'), 'This function...' preambles, step-numbered narration ('# Passo 1: validar entrada'), NOTE:/IMPORTANT: labels on routine lines, decorative separators ('// ─────') and multi-line comments padding a one-line fact. Humans comment rarely, explain why rather than what, and write in short informal lines, often in mixed PT/EN. Fix: delete every comment that only restates the code. Keep one short line for a real constraint or workaround.

- Errado: // Passo 1: Importar as dependências necessárias
import { readFile } from 'fs/promises';
// Esta função é responsável por ler o arquivo de configuração
async function loadConfig() { ... }
- Certo: import { readFile } from 'fs/promises';

// o Windows salva com BOM, por isso o trim
async function loadConfig() { ... }
- Evidência: Several independent practitioner detectors encode the same rules. SynthScan patterns: 'This X does Y' tautologies, 'Step N:' narration, NOTE:/IMPORTANT: overuse ('AI uses them on nearly every comment block'). The aislop engine has trivial-comment, narrative-comment and decorative-separator rules. The anti-ai-slop skill covers restating comments, workflow narration and over-explained comments. The Vibe Coding chapter calls over-commenting AI's first habit. No study with numbers found.
- Fontes: https://github.com/marcoramilli/SynthScan/blob/main/patterns/synthetic_patterns.md, https://deepwiki.com/scanaislop/aislop/3.1-ai-slop-engine, https://github.com/zuancrisp/anti-ai-slop/blob/main/skills/antislop-code/SKILL.md, https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/plugins/testing/code-cleanup/agents/slop-remover.md, https://datafield.dev/vibe-coding/part-i-foundations/ch07-understanding-ai-generated-code/

### Exemplo técnico genérico (sem versão, sem erro real, foo/bar) [opinion] (pt/en/es, content, new)

AI-written dev posts give technical detail no one ran. 'Certifique-se de ter o Node instalado' with no version, placeholder names (foo, myApp, example.com, YOUR_API_KEY), invented or paraphrased error messages, and a generic Pré-requisitos/Instalação/Uso skeleton. A person who did the work pastes the real version, the real path, the real stack trace and the real command they typed, warts included.

- Errado: 'Primeiro, certifique-se de ter o Node.js instalado. Em seguida, configure suas variáveis de ambiente e execute o projeto.'
- Certo: 'Eu tava no Node 20.11 e o npm run build cuspia `ERR_REQUIRE_ESM` no astro.config.mjs, tive que trocar o require por import.'
- Evidência: mr-k-man/llm-tips style guide, section 9.2: real docs state exact versions ('python>=3.11', 'node 20.11.1'), while AI docs say 'ensure you have Python installed'. AI rarely produces real error strings, and when it does they are often slightly wrong. It also flags the generic Prerequisites/Installation/Usage scaffold. This is one practitioner source and the claim is not independently measured.
- Fontes: https://github.com/mr-k-man/llm-tips/blob/main/style_guide.md

### 'Simplesmente', 'é só', 'basta', 'fácil' em instrução [observed] (pt/en/es, vocabulary, new)

Minimizers in instructions ('basta rodar', 'é só configurar', 'simplesmente adicione', 'é fácil') read as tutorial or marketing boilerplate and talk down to the reader. Leave them out of how-to steps, or replace them with a concrete measure ('um comando', 'levou 5 minutos'). Note that a colloquial 'é só' inside João's own narrative ('aí é só esperar o build') is natural speech, so this applies to instruction steps, not to storytelling.

- Errado: 'Para resolver, basta simplesmente adicionar a flag e tudo funcionará facilmente.'
- Certo: 'Eu adicionei a flag --no-cache e o build passou.'
- Evidência: Google developer documentation style guide says to avoid 'simply', 'It's that simple', 'It's easy' and 'quickly' in procedures. Vercel's writing guidelines (quoted in the Quegenx anti-slop TELLS.md) ban 'easy', 'simple' and 'quick' describing what the reader does, because they put pressure on the reader and read as marketing. This is doc-style guidance, not an AI-specific measurement. Graphite's measured 'simply' ratios ('not simply' 157x, 'rather than simply' 43x) belong to the already covered corrective-framing pattern.
- Fontes: https://developers.google.com/style/tone, https://github.com/Quegenx/agent-skills/blob/main/skills/anti-ai-slop/anti-slop-writing/TELLS.md, https://graphite.io/research/ai-tells


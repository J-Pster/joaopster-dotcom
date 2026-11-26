# Planos do Claude e limites de uso

Pesquisa de 26/11/2026, feita na página oficial de preços (https://claude.com/pricing) e na central de ajuda (https://support.claude.com/en/articles/9266767-what-is-the-team-plan e https://support.claude.com/en/articles/9797531-what-is-the-team-plan, que hoje mostra o artigo do Enterprise). Preço e plano mudam com frequência, confira de novo antes de reutilizar.

## Planos individuais

| Plano | Preço | Limite a cada 5 horas | Limite semanal | Outros |
|---|---|---|---|---|
| Free | US$ 0 | limitado | limitado | sem Claude Code |
| Pro | US$ 20/mês, ou US$ 17/mês no anual (US$ 200/ano) | 1x | 1x | Claude Code, Fable com créditos de uso |
| Max | US$ 100/mês (só mensal) | 5x o Pro | 5x o Pro | Fable até 50% do limite semanal, US$ 100/mês em créditos de API, prioridade em horário de pico |
| Ultra | US$ 200/mês (só mensal) | sem limite de 5 horas (conta verificada) | 10x o Pro | US$ 200/mês em créditos de API |

Todos os planos individuais estão sob os termos de consumidor e têm "Model training: Opt-out" na tabela de preços, ou seja, entram no treino se a opção de melhoria do modelo estiver ligada.

O "Max 20x" que o João assinava em maio/2026 não aparece mais na página de preços. Não consegui confirmar se continua existindo para quem já assinava.

## Team (2 a 150 assentos)

| Assento | Preço | Limite a cada 5 horas | Limite semanal |
|---|---|---|---|
| Standard | US$ 25/mês, ou US$ 20/mês no anual | 1,25x o Pro | existe, sem número publicado |
| Premium | US$ 125/mês, ou US$ 100/mês no anual | 6,25x o Pro | existe, sem número publicado |

- O limite é por pessoa, não da equipe. Não dá para transferir sobra entre assentos, e um membro que estoura não afeta os outros.
- O limite semanal reseta num horário fixo da conta (visível em Settings > Usage) e vale para todos os modelos.
- Dá para misturar Standard e Premium no mesmo time.
- A organização pode liberar usage credits (pré-pagos) para quem bater o limite continuar.
- Inclui SSO, JIT, permissões por papel, controle de gasto, enterprise search, conectores (Drive, Gmail, Calendar, GitHub, Microsoft 365, Slack), Claude Code, Cowork e créditos mensais de API (valor não confirmado).
- É plano comercial. Pelas políticas da Anthropic, não treina com os dados do cliente sem opt-in (ver `anthropic-ipo-e-uso-de-dados.md`).

Comparação: o Premium rende um pouco mais que o Max por sessão de 5 horas (6,25x contra 5x), mas a Anthropic não publica o limite semanal dele como múltiplo do Pro, então não dá para afirmar se ele empata com o Max ou o Ultra na semana. Ele fica abaixo do Ultra, que não tem janela de 5 horas e tem 10x o Pro na semana.

## Enterprise

- A mensalidade do assento paga só o acesso. Todo uso (Chat, Claude Code, Cowork) é cobrado à parte pelo preço da API, sem limite por assento e sem cota incluída.
- O admin define teto de gasto por organização e por usuário.
- Mínimo de 20 assentos no self-serve (cartão ou ACH, só USD, créditos pagos antes) e 50 no sales-assisted (fatura, várias moedas, cobrança mensal depois do uso).
- Inclui audit logs, SCIM, retenção de dados customizada, Compliance API, Analytics API, chave de criptografia do cliente, inferência só nos EUA, HIPAA-ready.
- Organizações antigas com assentos Standard e Premium no Enterprise seguem com limite de uso.

## Fontes de terceiros consultadas (menos confiáveis)

- https://lord.technology/2026/03/28/claude-team-premium-vs-max-plans-usage-limits-pricing-and-which-to-choose.html
- https://aitoolsreview.co.uk/insights/claude-team-premium-vs-max
- https://runelab.ai/en/blog/post/claude-pricing-pro-max-ultra-team
- https://www.morphllm.com/claude-code-team-pricing

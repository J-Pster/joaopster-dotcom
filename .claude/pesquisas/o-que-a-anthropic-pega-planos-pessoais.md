# O que a Anthropic pega nos planos pessoais (Free, Pro, Max, Ultra)

Pesquisa de 26/11/2026, feita nas fontes primárias da própria Anthropic. Conflito de interesse: a pesquisa foi feita por um modelo Claude, da Anthropic, e as políticas abaixo são autodeclaradas pela empresa, sem auditoria independente conhecida.

Fontes:
- Claude Code, data usage: https://code.claude.com/docs/en/data-usage
- Privacy Center, "How long do you store my data?" (01/07/2026): https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data
- Privacy Center, "Is my data used for model training?" (16/03/2026): https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training
- Anúncio da mudança de termos (28/08/2025): https://www.anthropic.com/news/updates-to-our-consumer-terms

## A ideia central

A Anthropic não varre o teu repositório. No Claude Code local, ela recebe o que passa pela conversa: o que você escreve, o que o Claude responde e tudo que as ferramentas trazem para dentro da conversa (arquivos que ele lê, comandos que ele roda, resultados de busca, diffs). A doc diz que os dados enviados incluem "all user prompts and model outputs". O resto do repositório, que o Claude nunca abriu, fica só na tua máquina.

A exceção é a sessão na nuvem (Claude Code na web): o repositório inteiro é clonado numa VM da Anthropic durante a sessão, e "code and session data are subject to the retention and usage policies for your account type".

A chave "permitir uso para melhorar o Claude" muda duas coisas: se a conversa entra no treino e por quanto tempo ela fica guardada. Ela não muda o que é enviado. Com a chave desligada, a Anthropic recebe a mesma coisa, só guarda por menos tempo e não treina com ela.

## Tabela

| O que | Chave de treino DESLIGADA | Chave de treino LIGADA |
|---|---|---|
| Teus prompts e as respostas do Claude (chat e Claude Code) | Enviados. Guardados 30 dias. Não entram no treino | Enviados. Guardados até 5 anos, de forma desidentificada, no pipeline de treino. Entram no treino |
| Código e arquivos que o Claude lê ou escreve na sessão | Mesmo que acima, porque o conteúdo entra na conversa | Mesmo que acima |
| Saída de comandos (testes, logs, build, `env`, `cat .env`) | Mesmo que acima. Segredo que aparece no terminal vai junto | Mesmo que acima, e pode ir para o treino (a Anthropic diz que filtra ou ofusca dado sensível com ferramentas automáticas) |
| CLAUDE.md, memória, skills e regras carregadas no contexto | Mesmo que acima | Mesmo que acima |
| Resto do repositório que o Claude nunca abriu (Claude Code local) | Não é enviado | Não é enviado |
| Repositório inteiro numa sessão na nuvem (Claude Code na web) | Clonado na VM da Anthropic, segue a retenção do plano | Idem, e a sessão pode ir para o treino |
| Conteúdo bruto de connectors e MCP (Google Drive, servidores MCP) | Não se aplica ao treino | O Privacy Center diz que não entra no treino, "though data may be included if it's directly copied into your conversation". Não está claro como isso vale para o resultado de uma ferramenta MCP dentro de uma sessão do Claude Code, que entra na conversa |
| Conversa que você apaga | Some do histórico na hora e do back-end em até 30 dias | Idem, e não entra em treino futuro |
| Chat anônimo (incognito, no app) | Não entra no treino | Não entra no treino, mesmo com a chave ligada |
| Joinha (thumbs up/down) e `/feedback`, `/bug`, `/share` | Conversa inteira guardada 5 anos. O feedback é desvinculado do teu usuário e pode ser usado para treinar modelos | Idem |
| Pesquisa de satisfação do Claude Code, se você responder "Yes" para mandar a transcrição | Transcrição, transcrições de subagentes e log da sessão enviados como estão (código incluído, só chaves e tokens conhecidos são mascarados). Guardados até 6 meses. Não entram no treino | Idem |
| Conversa marcada pelos filtros de segurança como violação da política de uso | Entradas e saídas guardadas até 2 anos, notas de classificação até 7 anos. Pode ser usada para treinar os modelos da equipe de Safeguards | Idem |
| Métricas de uso (telemetria) | Latência, confiabilidade, padrão de uso. Ligado por padrão. A doc diz que nunca inclui código, prompts ou caminhos de arquivo. Desliga com `DISABLE_TELEMETRY=1` | Idem |
| Relatório de erro | Mensagens de erro e stack traces do próprio Claude Code, com segredos, caminhos, e-mails e dados pessoais mascarados antes de sair, enviados a um serviço de terceiros. Ligado para Pro, Max e Ultra na v2.1.198 ou mais nova. Desliga com `DISABLE_ERROR_REPORTING=1` | Idem |
| Checagem de segurança do WebFetch | Só o nome do domínio (não a URL nem a página) vai para a Anthropic antes de buscar uma página | Idem |
| Remote Control | A transcrição fica nos servidores da Anthropic enquanto está conectado, para sincronizar entre aparelhos | Idem |
| Transcrições na tua própria máquina (`~/.claude/projects/`) | Texto puro, 30 dias por padrão no CLI (`cleanupPeriodDays`). Sessões do Claude Desktop e do Cowork ficam fora desse limite por padrão | Idem |
| O que já foi usado num treino antes de você desligar a chave | Continua nos modelos já treinados e nos treinos em andamento. Sai dos próximos | Não se aplica |
| Retenção por obrigação legal ou disputa | Pode guardar além dos prazos acima | Idem |

## Detalhes que importam

- A chave de treino só vale para conversas e sessões novas ou retomadas depois que ela foi ligada.
- "Desligado" não quer dizer que a Anthropic não vê. Ela recebe e guarda por 30 dias, segundo a política, para operação e combate a abuso.
- Desligar a chave não cobre joinha nem `/feedback`, que têm regra própria de 5 anos e podem ir para treino.
- O teu disco também é uma cópia. No Claude Desktop, as transcrições locais não são apagadas sozinhas depois de 30 dias.
- A Anthropic diz que não vende dados a terceiros ("We do not sell users' data to third parties", anúncio de 28/08/2025).

## Como reduzir o que vai

1. Desligar a chave em claude.ai/settings/data-privacy-controls.
2. Não dar joinha e não usar `/feedback`, `/bug` ou `/share` com código sensível. Para bloquear: `DISABLE_FEEDBACK_COMMAND=1`.
3. Responder "No" ou "Don't ask again" na pergunta de mandar a transcrição, ou desligar com `CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY=1`.
4. Desligar telemetria e relatório de erro com `DISABLE_TELEMETRY=1` e `DISABLE_ERROR_REPORTING=1`, ou tudo de uma vez com `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` (isso também desliga feature flags e pode deixar o Remote Control indisponível).
5. Não deixar segredo aparecer na conversa. Bloquear leitura de `.env` e afins com regras de `permissions.deny` no `settings.json` e não pedir para o Claude rodar comando que imprime credenciais.
6. Para código de empresa, usar plano comercial (Team, Enterprise ou API), onde a Anthropic diz que não treina e guarda 30 dias, ou ZDR negociado.
7. Limpar as transcrições locais com `cleanupPeriodDays` e, no Desktop, apagar sessões antigas.

## Versão resumida da tabela (para o "povão")

É a mesma informação da tabela completa acima, simplificada como foi mostrada ao João no chat em 26/11/2026.

| O que | Chave DESLIGADA | Chave LIGADA |
|---|---|---|
| Teus prompts e as respostas do Claude | Guardados 30 dias, não entram no treino | Guardados até 5 anos, desidentificados, e entram no treino |
| Código que o Claude lê ou escreve na sessão | Igual aos prompts, 30 dias, sem treino | Igual, até 5 anos, entra no treino |
| Saída de comandos (testes, logs, `cat .env`) | Igual, 30 dias. Senha que aparece no terminal vai junto | Igual, e pode ir para o treino. A Anthropic diz que filtra dado sensível automaticamente |
| CLAUDE.md, memória e skills carregadas | Igual, 30 dias | Igual, até 5 anos |
| Resto do repositório que o Claude nunca abriu (no teu PC) | Não é enviado | Não é enviado |
| Repositório inteiro no Claude Code na web | Clonado na máquina da Anthropic, segue os 30 dias | Idem, e a sessão pode ir para o treino |
| Conteúdo de connectors e MCP (Drive, servidores MCP) | Não entra no treino | A Anthropic diz que o conteúdo bruto não entra, "a não ser que seja copiado para a conversa". No Claude Code, o resultado de um MCP entra na conversa, e a política não deixa claro o que vale nesse caso |
| Conversa que você apaga | Some na hora do histórico e do servidor em até 30 dias | Idem, e sai dos próximos treinos |
| Chat anônimo (incognito, no app) | Não entra no treino | Não entra no treino, mesmo com a chave ligada |
| Joinha e `/feedback`, `/bug`, `/share` | Conversa inteira guardada 5 anos e pode ir para treino | Idem |
| Pesquisa de satisfação do Claude Code, se responder "Yes" para mandar a transcrição | Manda a sessão e o código como estão (só mascara chaves conhecidas). Guarda 6 meses, não usa para treino | Idem |
| Conversa marcada pelo filtro de segurança | Guardada até 2 anos (a nota da classificação, até 7 anos). Pode treinar os modelos de segurança | Idem |
| Telemetria | Ligada por padrão. Mede latência e uso. A Anthropic diz que nunca inclui código, prompt nem caminho de arquivo | Idem |
| Relatório de erro | Erros internos do Claude Code com dados sensíveis mascarados. Ligado no Pro, Max e Ultra | Idem |
| O que já foi treinado antes de você desligar | Fica nos modelos já treinados e nos treinos em andamento | Não se aplica |
| Retenção por obrigação legal ou disputa | Pode guardar além desses prazos | Idem |

### O que o "povão" precisa saber

1. Desligar a chave não esconde nada da Anthropic. Ela continua recebendo tudo e guarda por 30 dias, só não treina e não guarda por 5 anos.
2. Ela não pega o repositório inteiro, só o que o Claude abre ou roda. Mas numa tarefa grande ele abre muita coisa.
3. O joinha e o `/feedback` furam a chave. Mesmo com treino desligado, a conversa vai inteira, fica 5 anos e pode ir para treino.
4. O teu próprio PC também guarda cópia. As sessões ficam em texto puro em `~/.claude/projects/`. No CLI são apagadas depois de 30 dias, no Claude Desktop não são apagadas sozinhas.

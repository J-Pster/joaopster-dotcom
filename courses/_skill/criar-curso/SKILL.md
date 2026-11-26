---
name: criar-curso
description: Cria um curso autodidata completo em PT-BR, como um vault do Obsidian (módulos, aulas em texto, glossário com hover, callouts, questionários com gabarito e painel de progresso), a partir de um tema e de um objetivo final. Use quando a pessoa pedir "cria um curso de X", "Aprendendo X, quero chegar em Y", "monta uma trilha para eu aprender X", "quero estudar X do zero até Y", mesmo sem dizer a palavra curso.
---

# Criar um curso autodidata (vault do Obsidian)

Esta skill monta um curso completo para a pessoa estudar sozinha, em português do Brasil, numa pasta
`Aprendendo <Tema>` que é um vault do Obsidian. O resultado final tem: nota de início com painel de
progresso, módulos em ordem de dependência, aulas escritas em texto (o material principal), glossário
com uma nota por termo (para ler a definição passando o mouse), questionários com gabarito recolhido e
um projeto final ligado ao objetivo da pessoa.

Antes de escrever qualquer aula, leia [referencias/guia-de-escrita.md](referencias/guia-de-escrita.md)
inteiro: ele define o estilo, o formato Obsidian e a autoverificação. A pasta [modelo/](modelo/) tem a
estrutura pronta para copiar (nota de início, módulo, aula, termo do glossário, `Progresso.base` e
`.obsidian/`).

## Filosofia (não negociável)

A pessoa só aceita um conhecimento novo depois de entender a fonte: o porquê e o como. Por isso:

- O primeiro módulo é sempre o fundamento mais profundo do assunto.
- Cada aula responde "por que é assim?" antes de "como se faz?".
- A ordem é: fundamento (por quê), mecanismo (como funciona), ferramenta (como fazer), projeto (aplicar).
- Nenhum módulo assume algo que ainda não foi ensinado em módulo anterior.
- O curso termina num projeto real (capstone) ligado ao objetivo final da pessoa.

## Processo em 5 fases

### Fase 0: entender o pedido

Identifique o tema e o objetivo final ("quero chegar em Y"). Se o objetivo for ambíguo de um jeito que
muda o currículo (nível de partida, prova específica, uso profissional ou hobby), faça UMA pergunta
focada. Se der para decidir com bom senso, decida, diga a decisão e siga. O nome da pasta é
`Aprendendo <Tema>` (sem acento).

### Fase 1: desenhar o currículo (antes de pesquisar ou escrever)

1. Lista de módulos em ordem de dependência (de 10 a 14 costuma servir; cursos de certificação ou de
   saúde podem passar de 20). Do mais fundamental ao capstone.
2. Para cada módulo, de 3 a 5 subtópicos já na ordem de ensino, cada um formulado como pergunta ou
   motivo (o "porquê"), não como rótulo seco.
3. Uma justificativa curta da ordem dos módulos (vai para a nota de início).

Regras de desenho:

- Fundamentos primeiro, ferramentas no meio, capstone por último.
- Várias ferramentas equivalentes (vários softwares, por exemplo): um módulo prático por ferramenta e
  um módulo de panorama antes deles, para a pessoa escolher.
- Temas regulatórios, legais ou de segurança ganham módulo próprio, com o limite claro entre estudo ou
  hobby e uso profissional.
- Cursos grandes se dividem em partes (`Parte I - Fundamentos`, ...), cada uma com uma nota de mapa.

Mostre o currículo à pessoa e só siga com o "pode seguir" dela.

### Fase 2: pesquisar e escrever as aulas

O conteúdo principal é texto escrito com base em pesquisa real, direto ao ponto, contextualizado, numa
voz só. Links (artigos, normas, documentação, vídeos) são apoio: nos módulos práticos de software ou
hardware há mais vídeos (3 a 6 por aula), nos conceituais poucos (0 a 3).

Cada módulo vira de 4 a 10 aulas de 1.500 a 3.500 palavras, já no formato do guia (frontmatter,
callouts, Resumo no padrão, questionário com gabarito recolhido), mais as notas de glossário que
faltarem.

**Se você pode lançar subagentes** (Claude Code com a ferramenta Agent, por exemplo):

- Um subagente por módulo, em segundo plano, no máximo 5 ao mesmo tempo. Lance o bloco inteiro numa
  mensagem e espere todos terminarem antes do próximo bloco.
- Prepare antes dois arquivos: o guia de escrita e um `CURSO_<TEMA>.md` com o contexto (objetivo,
  perfil de quem estuda, lista de módulos com os nomes de pasta exatos, cuidados de segurança ou
  regulamentação do tema). O prompt de cada subagente manda ler os dois primeiro e traz só o que é do
  módulo: pasta, módulos anteriores, próximo módulo, subtópicos e o tipo (conceitual ou prático).
- Subagentes em paralelo não conhecem os módulos irmãos ainda não escritos: para esses, linkam só a
  nota do módulo, nunca uma aula. O capstone vai por último, lendo as notas dos módulos prontos.
- Nunca dois subagentes no mesmo arquivo. Mudanças estruturais (renomear, linkar o glossário em massa)
  só depois que todos terminarem, por script, com backup e simulação antes.

**Se não pode** (Claude.ai, por exemplo): escreva módulo por módulo na ordem, entregando cada módulo
pronto antes do próximo. Num chat sem acesso a arquivos, entregue cada arquivo como um bloco Markdown
com o caminho completo no título, para a pessoa salvar na pasta do vault.

### Fase 3: consolidar

1. Reconcilie fatos entre módulos: um módulo pode marcar "não confirmado" algo que outro confirmou.
2. Escreva a nota de início (`<Tema> - Inicio.md`): objetivo, aviso de limites quando o tema exigir,
   painel `![[Progresso.base]]`, tabela `# | Módulo | Do que trata`, "Por que essa ordem", "Como usar
   esta trilha" e "Sobre o formato e a curadoria" (vídeos não assistidos, itens "não confirmado"
   marcados, preços, licenças e regras datados).
3. Gere as notas de mapa das partes e a seção `## Onde aparece` de cada termo do glossário a partir dos
   links reais.
4. Ligue toda menção de termo do glossário (a primeira por parágrafo, item de lista, linha de tabela e
   callout), pulando títulos, links existentes, URLs, código e alternativas de questionário. Audite os
   pares texto e nota antes: um alias que leva ao sentido errado engana mais que link nenhum.

### Fase 4: verificar antes de dizer que terminou

1. Cada módulo do índice tem pasta e nota do módulo; não sobrou cópia de conflito de sincronização.
2. Nenhum travessão longo (U+2014) em nenhum arquivo.
3. Todo wikilink aponta para uma nota que existe (o alvo antes de `#`, `|` ou `\|` é o nome de um `.md`
   do vault) e não sobrou link markdown para `.md`.
4. Questionários: a alternativa correta é a mais longa em 30% ou menos das questões (meça com script;
   texto gerado por IA tende a deixar a correta mais longa).
5. URLs: se algum recurso parece inventado ou houve incerteza, valide abrindo a página ou remova.

### Fase 5: informar

Resumo curto: onde ficou o curso, a lista de módulos, as decisões (nome, ordem, o que ficou de fora) e
as limitações honestas (módulos sem vídeo bom, fatos não confirmados).

## Lições de cursos anteriores

- Temas de nicho às vezes só têm artigos e documentação. Tudo bem, mas sinalize no módulo que ali não
  tem vídeo. Nunca esconda uma lacuna com um recurso fraco.
- Ninguém assistiu aos vídeos: confirme título e canal (oEmbed do YouTube) e não afirme o conteúdo.
- Preço, licença e versão de software mudam rápido: verifique na página oficial e registre mês e ano.
- Assunto com regra legal ou risco (construção, saúde, segurança, rádio): aviso claro na nota de início
  e no módulo próprio sobre o limite entre estudo e atuação profissional.
- Para temas com material abundante em português, pesquise em português primeiro; em nicho técnico, o
  inglês domina e tudo bem.
- O Resumo é a seção mais relida: mostre um modelo à pessoa antes de aplicar no curso inteiro.

## Compartilhar o curso

Quem quiser publicar o curso em joaopster.com/cursos pode mandar a pasta zipada para o e-mail indicado na
página "Como eu crio os cursos". Ele é revisado antes de entrar no site.

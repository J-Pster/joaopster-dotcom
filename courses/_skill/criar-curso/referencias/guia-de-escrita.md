# Guia de escrita dos módulos (leia inteiro antes de começar)

## Situação
Você vai escrever um módulo de um curso autodidata em PT-BR para uma pessoa que estuda sozinha. O
conteúdo PRINCIPAL é texto escrito por você: um material único, com uma só voz, para ler rápido sem
pular de vídeo em vídeo. Links são apoio, para o que texto não explica bem (esquemas, demonstração de
software, normas oficiais).

Você vai (1) ler o contexto do curso (objetivo, módulos e os subtópicos deste módulo), (2) pesquisar na
web para embasar o conteúdo, (3) dividir o módulo em aulas (de 4 a 10 arquivos, conforme o assunto pede)
e (4) ESCREVER os arquivos finais diretamente na pasta do módulo.

## Filosofia de quem estuda (não negociável)
Só aceita um conhecimento depois de entender a fonte: o porquê e o como. Ordem dentro do módulo e de
cada aula: fundamento (por quê) > mecanismo (como funciona) > ferramenta/método (como se faz) > aplicação.
Nenhuma aula pode assumir algo que ainda não foi ensinado (neste módulo ou nos anteriores; a lista de
módulos está no seu prompt). Se precisar de um conceito de módulo posterior, explique em uma frase ou
remeta com wikilink para a nota do módulo.

## Estilo do texto (o mais importante)
- Direto ao ponto, sem enrolação, sem introdução vaga ("neste texto vamos ver..."), sem moral no fim.
- Contextualizado: todo o contexto necessário para entender, sem depender de outra fonte. A pessoa lê
  rápido e não pode perder informação: não pule etapas lógicas, defina cada termo na primeira vez que
  aparece, dê o número/fórmula/exemplo concreto quando existir.
- Sem espaçamento vazio: nada de parágrafo que só repete, transição vazia, frase motivacional, lista de
  "o que você vai aprender" gigante. Sem fugir do tema nem divagar.
- Sempre conecte ao que a pessoa já sabe (módulos anteriores) em uma frase quando útil.
- Comece cada aula respondendo "por que isso existe / que problema resolve?", depois o mecanismo, depois
  o método prático.
- Use: títulos `##`, parágrafos curtos, listas e tabelas onde ajudam, negrito para termos-chave na
  definição, blocos de exemplo numérico resolvido quando há cálculo. Fórmulas em texto simples ou
  código inline (ex.: `P = V x I`), sem LaTeX.
- Tom de professor experiente falando com adulto inteligente. Sem "galera", sem emojis.
- Tamanho: cada aula de 1.500 a 3.500 palavras (o necessário, sem encher). O que for denso e importante
  merece espaço; o que é óbvio merece uma linha.
- Português do Brasil com acentuação completa. Termos técnicos consagrados em inglês podem ficar em
  inglês (com a explicação na primeira vez). Unidades e normas brasileiras quando existirem (ABNT NBR,
  Anatel, etc.).
- **NUNCA use o travessão longo (em dash, U+2014) em nenhum arquivo.** Use vírgula, dois-pontos,
  parênteses ou reescreva. Hífen simples e en dash em intervalos não são necessários; prefira "a" ou hífen.

## Precisão e honestidade
- Baseie o conteúdo em pesquisa real (fontes oficiais, normas, documentação, livros didáticos, artigos
  sérios). Não invente números, normas, artigos de lei, versões de software, atalhos ou menus. Se não
  conseguiu confirmar algo, escreva "não confirmado" no texto ou deixe fora.
- Coisas que mudam (preço, licença, versão de software, regulamentação, legislação) ganham a data
  "(verificado em <mês> de <ano>)" e a fonte oficial.
- Temas de segurança, estrutura, elétrica, legislação e regulamentação: inclua um aviso curto e claro
  do limite entre entender/hobby e projeto/execução profissional (exigência legal, responsável técnico).
- Onde há controvérsia ou variação regional (ex.: leis municipais), diga isso.

## Links de apoio
- Só URLs que você viu em resultado de busca real ou abriu.
  NUNCA invente, complete ou adivinhe URL. Vídeos do YouTube: o WebFetch não abre a página, mas você pode
  confirmar título e canal via oEmbed (https://www.youtube.com/oembed?url=URL_DO_VIDEO&format=json).
  Vídeo que você não conseguiu confirmar: não inclua.
- Os vídeos NÃO foram assistidos por ninguém. Descreva o vídeo pelo que o título/canal indicam e não
  afirme conteúdo específico dele que você não confirmou.
- Formato de cada link: `- [ ] [Título](URL) (Canal ou autor): o que é e por que ajuda neste ponto`.
  Coloque-os em uma seção final da aula chamada `## Para aprofundar` (e, quando um vídeo ilustra um
  passo específico, pode aparecer no meio do texto como `Veja: [Título](URL) (Canal)`).
- Módulos conceituais/teóricos: 0 a 3 links por aula, só os que realmente acrescentam (norma, artigo
  excelente, vídeo/animação que mostra o que texto não mostra). Não force.
- Módulos de software e de imagem (prática 3D, modelagem, render): MAIS vídeos de apoio, de 3 a 6 por
  aula, porque ver a interface e o gesto é insubstituível. Mesmo assim, o texto explica o conceito, a
  lógica e o passo a passo; o vídeo demonstra.
- Se não há bom material de apoio para um ponto, não inclua link e siga. Não preencha com fraco.

## O curso é lido no Obsidian (vale para todos os cursos)

A pasta do curso é um vault do Obsidian. Tudo é escrito para o modo de leitura dele: links internos com
hover (Page Preview), callouts, propriedades e Bases. Regras:

- **Links internos são sempre wikilinks**, nunca link markdown com caminho relativo:
  `[[Nome da Nota]]`, `[[Nome da Nota#Título da seção|texto]]`. Dentro de tabela, o separador vira `\|`
  (`[[Nota\|texto]]`). Links externos (URL) continuam `[Título](URL)`.
- **Nomes de arquivo únicos no vault inteiro**, porque o wikilink resolve pelo nome:
  - nota do curso: `<Tema> - Inicio.md`;
  - nota do módulo: o próprio nome da pasta, `NN - Nome do Modulo.md`;
  - aula: `NN.AA - Titulo Sem Acento.md` (módulo.aula, dois dígitos cada). Ex.: `05.03 - Torniquete.md`.
  Sem acento e sem caracteres especiais no nome do arquivo; o título `#` dentro do arquivo tem acentuação.
- **Frontmatter (propriedades)** no topo de toda aula e de toda nota de módulo, com aliases em lista de
  bloco (lista entre colchetes quebra na vírgula, como em "0,9%"):
  ```yaml
  ---
  aliases:
    - Aula 5.3
  modulo: 5
  aula: 3
  parte: "II Socorro imediato"
  lida: false
  tags:
    - aula
    - modulo-05
  ---
  ```
  A nota do módulo leva o alias `Módulo N`, `modulo`, `parte` e a tag `modulo`. A propriedade `lida`
  (checkbox) alimenta o painel de progresso (`Progresso.base`) embutido na nota de início.
- **Glossário com hover.** O curso tem uma pasta `Glossario/` com uma nota por termo difícil ou pouco
  conhecido, inclusive os comuns que a pessoa pode não dominar (anemia, anestesia). Cada nota: frontmatter
  com `aliases` (formas que aparecem no texto: plural, sigla, sinônimo exato) e `tags: [glossario, ...]`,
  `# Termo`, definição de 2 a 5 frases com o porquê, um `> [!example] Exemplo` concreto, links para termos
  vizinhos e `## Onde aparece` (gerado por script a partir dos links reais). **Toda menção de termo do
  glossário no texto é linkada** (a primeira por parágrafo, item de lista, linha de tabela e callout),
  inclusive em Erros comuns, Resumo e tabelas. Um alias nunca pode levar ao sentido errado (ex.:
  "glicose" não é "glicemia"); na dúvida, crie uma nota própria.
- **Callouts** para dar ritmo e ligar os pontos (exemplos concretos fixam o conteúdo):
  - `> [!question] Pergunta que esta aula responde` logo abaixo do título;
  - `> [!example] Título` com um caso concreto e curto (pessoa, cena, números) em cada seção importante;
  - `> [!info] Ligando os pontos` para conectar com aulas e módulos anteriores e futuros (com wikilinks);
  - `> [!warning]` para limite legal e risco; `> [!tip]` para macetes.
- **Questionário de múltipla escolha** em toda aula (seção `## Pratique`) e no fim de cada módulo:
  - 10 a 15 questões por aula, 4 ou 5 alternativas, uma correta, com caixinha clicável:
    ```markdown
    **1.** Enunciado?

    - [ ] a) alternativa
    - [ ] b) alternativa
    ```
  - Gabarito comentado recolhido logo depois: `> [!success]- Gabarito`, uma linha por questão no formato
    `> **1. b)** por que b está certa e por que as outras erram`.
  - **Tamanho equilibrado:** a correta NÃO pode ser sistematicamente a mais longa nem a mais curta (alvo:
    correta mais longa em 30% ou menos das questões). Distratores plausíveis, com o mesmo nível de
    detalhe, cada um com um erro conceitual real explicado no gabarito.
- **Ordem do fim de cada aula:** `## Resumo`, `## Erros comuns`, `## Pratique` (questionário e prática
  com o kit, quando houver), `## Para aprofundar`, link para a próxima aula.
- **Resumo (a seção mais relida do curso):** referência rápida para lembrar em 1 a 2 minutos o que foi
  estudado e o que fazer. Blocos, nesta ordem, usando os que a aula justificar:
  1. `> [!abstract] A aula em uma frase` (ideia central e o porquê);
  2. **A lógica, em N passos** (3 a 6 passos numerados de causa e consequência);
  3. **Números para lembrar** (tabela `O quê | Valor | Por que importa`), se a aula tem números;
  4. **Tabela-síntese**, se a aula comparou tipos, achados ou condutas;
  5. **Na hora H** (passos de execução com o critério de "fiz certo") em aula de técnica, ou **Na
     prática, isso significa** (3 a 5 bullets) em aula conceitual;
  6. `> [!tip] Liga com` (de onde a aula vem e para onde vai, com wikilinks).
  De 200 a 450 palavras, nada que a aula não ensinou, cada item compreensível sozinho, sem duplicar os
  Erros comuns. Modelo de ouro: a aula 1.1 do curso de Primeiros Socorros em joaopster.com/cursos.

## Estrutura de arquivos (dentro da pasta do módulo)
- Nota do módulo `NN - Nome do Modulo.md`: título `# Módulo N: Nome`; parágrafo de contexto (o que a pessoa
  já sabe, que pergunta o módulo responde, por que vem agora); seção `## Aulas` com lista numerada de
  wikilinks para cada aula + uma linha do que cada uma responde; seção `## Checklist de saída do módulo`
  com 5 a 10 perguntas de "porquê" (caixas `- [ ]`); questionário do módulo com gabarito recolhido; no
  fim, `[[NN - Nome do Proximo Modulo|Próximo módulo: Nome]]` (ou mensagem de fim de curso no último).
  Use exatamente os nomes de pasta do seu prompt.
- Início de cada aula: frontmatter, `# Aula N: Título`, `[[NN - Nome do Modulo|Voltar ao módulo]]` e o
  callout `[!question]`.
- Workers escrevendo em paralelo: para módulos irmãos ainda não escritos, linke só a nota do módulo
  (`[[NN - Nome do Modulo]]`), nunca uma aula.
- NÃO apague arquivos que a pessoa colocou na pasta (imagens, planilhas, txt).
- Crie com Write e **edite com Edit**, nunca reescrevendo o arquivo inteiro por script, porque outros
  processos podem estar editando o mesmo arquivo. A sincronização de pasta cria cópias "Name clash" e
  "Edit conflict" quando duas escritas colidem; se aparecer uma, consolide no arquivo canônico e apague a
  cópia. Não crie arquivos fora da pasta do seu módulo (exceto notas novas em `Glossario/`, quando o
  prompt pedir). Se um arquivo ficar muito grande, divida em duas aulas.

## Ferramentas de pesquisa
Carregue com ToolSearch (query "select:WebSearch,WebFetch"). A cota do WebSearch esgota em cursos
longos; use `mcp__exa__web_search_exa` e `mcp__exa__web_fetch_exa` como alternativa (se o Exa der
erro 401, siga com WebFetch). Faça pesquisa suficiente para o conteúdo
ser correto e rico (não se limite a poucas buscas; use quantas precisar para dar segurança ao texto).

## Antes de terminar (autoverificação obrigatória)
1. Liste os arquivos do seu módulo e confirme que a nota do módulo lista todas as aulas com wikilinks.
2. Procure o caractere travessão longo (U+2014) em todos os seus arquivos e substitua qualquer ocorrência.
   Em PowerShell: `Select-String -Path "PASTA\*.md" -Pattern ([string][char]0x2014)`.
3. Confira que todo wikilink aponta para uma nota que existe (nome exato, sem caminho) e que não sobrou
   link markdown para arquivo `.md`.
4. Confira que cada aula tem frontmatter, `[!question]`, Resumo no padrão, Erros comuns, questionário com
   gabarito recolhido e alternativas de tamanho equilibrado.
5. Releia procurando enrolação, termo do glossário sem link e afirmações não confirmadas; corte, linke ou
   marque.

## Resposta final (curta)
Devolva só: lista de arquivos criados (com nº aproximado de palavras), decisões de reestruturação
(o que juntou/separou/moveu e por quê), lacunas ou incertezas honestas (o que não conseguiu confirmar,
onde falta material de apoio) e URLs que você incluiu mas não conseguiu confirmar (ideal: nenhuma).
Não cole o conteúdo das aulas na resposta.

# Estrutura de post

Adaptado do plugin [Online Writing](https://github.com/DonHeidi/online-writing-skills), de Sebastian Heitmann, que por sua vez se baseia no livro *The Art and Business of Online Writing*, de Nicolas Cole. Foi ajustado para o blog do João, que é técnico, educativo e não é de criador de conteúdo.

## Princípios

- **Ritmo de revelação.** Toda frase precisa levar o leitor para a frente. Frase que repete a anterior, com outras palavras, sai ou se junta à de cima. Isso vale mais do que qualquer outra regra daqui.
- **O leitor é o protagonista.** A experiência do João é a prova e o contexto, e o post é sobre o que o leitor aprende com ela. Teste: o espaço que fala do João nunca pode passar do espaço que fala do que serve ao leitor. "Eu usei X por 6 meses e aprendi Y" é bom. Uma seção inteira de "olha o que eu fiz", sem lição, não é.
- **Específico ganha de genérico.** "20 comandos, 45 agentes" ganha de "um monte de comandos". O exemplo real do João ganha de um exemplo hipotético. Não generalize o que ele contou de forma concreta.
- **Explicar sem enrolar.** Termo novo ganha uma ou duas frases de explicação, com analogia se ajudar, e o texto segue.

## Tipos de post

O tipo define a forma do post:

| Tipo | Quando | O que precisa |
|---|---|---|
| Opinião | O João defende uma posição | A posição logo na abertura, provas concretas e os limites dela |
| Guia prático | Ensinar a fazer algo | Pré-requisitos, passos em ordem, comandos e código, como saber que deu certo |
| Relato de projeto | Algo que ele construiu ou migrou | Problema, decisões e por quê, o que deu errado, resultado com números |
| Lista curada | Ferramentas, recursos, dicas | Itens específicos, um parágrafo curto por item dizendo por que importa |
| Análise | Explicar um conceito ou uma mudança | Como era, o que mudou, o que isso significa na prática |

Um post pode misturar tipos. O post sobre o Claude Code deixar workflows obsoletos, por exemplo, é opinião com partes de relato.

## Título

Escreva o título antes do post. Ele é uma promessa, e a abertura e as seções precisam cumprir essa promessa.

O título precisa dizer **o assunto**, **para quem é** (às vezes já fica implícito no assunto) e **a promessa**: o que o leitor ganha ou descobre.

- Pode criar curiosidade, mas sem esconder o assunto e sem exagerar. O Google pede títulos que descrevam o conteúdo e que não sejam exagerados nem chocantes (ver `seo.md`).
- Números funcionam quando são reais: "Eu migrei do Cursor para o Claude Code e economizei $400".
- Tire as palavras vazias.
- Gere de 3 a 5 opções com formatos diferentes, que podem ser:
  - afirmação direta;
  - resultado com número;
  - pergunta com resposta;
  - "X que eu aprendi com Y".

  Recomende uma e diga por quê.

## Abertura

A abertura responde rápido a três perguntas: do que é este post, se ele é para mim e o que vou ganhar lendo.

Formatos:

- **1/3/1 (padrão).** Uma frase de abertura, três frases que esclarecem e dão credibilidade (um número, um fato, a experiência do João) e uma frase que fecha a ideia e leva para a primeira seção. É o formato mais versátil.
- **1/5/1.** O mesmo, com mais espaço para contexto. Use quando o assunto precisa de preparo antes de a promessa fazer sentido. Cada frase extra tem que se justificar.
- **1/3/1 + lista.** A última frase da abertura vira o título de uma lista com os pontos do post. Use quando o post tem pontos bem separados.
- **Duas camadas (1/3/1 + 1/3/1).** Primeiro o que todo mundo pensa ou como era, depois a virada. Funciona bem em post de opinião que contradiz algo, inclusive um post anterior do próprio João.

Não abra com definição de dicionário, com "Neste post vamos ver..." nem com uma pergunta retórica genérica.

## Seções do desenvolvimento

- Cada seção tem um `##` que diz o conteúdo dela. Quem ler só os títulos precisa entender o post. "O que o Claude Code faz sozinho hoje" é bom. "A virada" não diz nada.
- Use título em forma de pergunta quando a seção responde a uma dúvida que o leitor teria ("O que é o harness?"). Nesse caso, a primeira ou as duas primeiras frases da seção já trazem a resposta, e o detalhe vem depois. Isso ajuda o leitor que chegou pela busca e ajuda os buscadores a citarem o trecho.
- **Varie a profundidade.** Um ponto importante pode ganhar o formato longo: abertura, por que importa, exemplo ou história, o que o leitor não sabia e a conclusão do ponto. Um ponto de apoio pode ser rápido, com abertura, duas frases e por que importa. Se todas as seções têm o mesmo tamanho e o mesmo formato, o post fica monótono.
- **Alterne o tamanho dos parágrafos.** Nunca três parágrafos longos seguidos. Parágrafo de 1 a 4 frases. Frase curta depois de frase longa.
- Entre 2 e 5 seções costuma bastar. Mais pontos significa menos espaço para cada um.

### Recursos visuais

- **Tabela** para comparar: antes e depois, ferramenta A e B, o que um plugin fazia e o que o Claude Code faz hoje.
- **Lista** só quando os itens são paralelos de verdade. Explicação flui melhor em prosa.
- **Bloco de código** para comandos, configs e estruturas de pasta. Código inline para nome de comando, arquivo e ferramenta.
- **Citação (`>`)** para uma frase de outra pessoa ou uma saída real.
- **Negrito** só no termo que o leitor não pode perder, no máximo um ou dois por seção.
- **Imagem ou print** quando mostrar é mais claro que descrever. Precisa de texto alternativo (ver `seo.md`).

## Fechamento

O fechamento é opcional e nunca repete o post. Escolha um:

- **Resumo prático:** checklist, passos ou o setup recomendado. É o melhor depois de um post que ensinou algo.
- **Opinião forte:** a posição do João dita uma última vez, com uma consequência nova.
- **Estender o último ponto:** se a última seção já é a mais forte, acrescente uma frase e pare.
- **Gancho para o próximo:** o que ele vai testar ou escrever depois, se for verdade.

O convite para comentar e o link para outro post ficam no fim, curtos. O blog tem comentários pelo Giscus.

## Tamanho

Escreva o necessário para o leitor sair sabendo o suficiente para agir. Post de opinião com contexto costuma dar de 800 a 1.500 palavras, e guia completo pode passar de 2.000. Não estique para bater um número: o Google diz que não tem tamanho preferido. Se passar muito disso, veja se não são dois posts.

## Checklist de diagnóstico

Rode antes de mostrar o rascunho. Para cada problema que encontrar, corrija citando a frase ou a seção:

1. **Abertura lenta.** A promessa demora mais de 5 frases para aparecer?
2. **Título e abertura não batem.** A abertura cumpre o que o título promete?
3. **Seções iguais.** Todas têm o mesmo formato e o mesmo tamanho? Varie.
4. **Frase que não acrescenta.** Alguma frase repete a anterior, ou só anuncia o que vem? Corte.
5. **Termo sem explicação.** Algum termo que um dev médio não conhece aparece sem explicação?
6. **Afirmação sem prova.** Alguma afirmação importante está sem exemplo, número ou link?
7. **Eu demais.** O espaço que fala do João passa do espaço que fala do que serve ao leitor?
8. **Ritmo monótono.** Tem três frases ou parágrafos longos seguidos?
9. **Conclusão forçada.** O fechamento repete o post em vez de entregar algo?
10. **Meio fraco.** Em post longo, as seções do meio estão mais fracas que a primeira e a última?

# Padrões de texto de IA para evitar

O `humanizer:humanizer` cobre a maior parte dos padrões, porque se baseia no [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) da Wikipédia. Esta lista complementa o Humanizer com as regras que o próprio João pediu e com padrões de outras fontes que ele não destaca. Rode esta lista junto com as duas passadas do Humanizer.

Um padrão isolado não prova nada. O que denuncia o texto é o mesmo recurso se repetindo ou vários recursos juntos no mesmo parágrafo. Mesmo assim, as regras do João valem sempre, e não só quando se acumulam.

## Regras do João (valem sempre)

### Dois-pontos só antes de lista

Dois-pontos no meio de uma frase para explicar, revelar ou definir algo tem cara de IA. Pode até estar gramaticalmente certo, mas ninguém escreve assim. Troque por vírgula ou reescreva a frase. Ponto e vírgula também não serve.

Dois-pontos só entram quando logo em seguida vem uma lista, uma tabela ou um bloco de código, normalmente no fim de um parágrafo.

| Errado | Certo |
|---|---|
| A primeira era **previsibilidade**: o README dizia que... | A primeira era a **previsibilidade**, o próprio README dizia que... |
| Faltava outra peça: rodar vários agentes ao mesmo tempo. | Faltava outra peça, que era rodar vários agentes ao mesmo tempo. |
| E o que eu acho mais foda: agora um chat consegue... | E o que eu acho mais foda é que agora um chat consegue... |
| A dica é esta: tudo que você explica duas vezes vira skill. | A dica é que tudo que você explica duas vezes vira skill. |
| Uma analogia que ajuda: o modelo é o motor... | Uma analogia que ajuda é pensar que o modelo é o motor... |
| Ferramentas que entendem o código: `find_symbol`, ... | Ferramentas que entendem o código, como o `find_symbol`, ... |

Pode:

- "O fluxo era assim:" seguido de uma lista ou de um bloco de código.
- "Esta é a comparação:" seguido de uma tabela.

Vale para todos os idiomas do post (PT, EN e ES) e também para o texto do LinkedIn e das outras plataformas.

### Sem travessão e sem ponto e vírgula

Nada de travessão (—) nem meia-risca (–) ligando frases, e nada de ponto e vírgula. Use vírgula, ponto ou parênteses.

## Outros padrões, de outras fontes

### Pergunta retórica que você mesmo responde

"O resultado? Mais velocidade." e "O melhor de tudo? Você não precisa de nada." O texto inventa um suspense que o leitor não pediu. Escreva a afirmação direto. Uma pergunta como título de seção, quando é a dúvida real do leitor ("O que é o harness?"), pode. Fonte: [hrih.si, Signs of AI writing](https://hrih.si/articles/signs-of-ai-writing/).

### Rabicho com gerúndio

"..., garantindo uma experiência fluida", "..., permitindo que você foque no que importa", "..., tornando tudo mais fácil". É uma oração pendurada no fim de um fato para dizer ao leitor o que achar dele. Um estudo citado pelo hrih.si encontrou modelos ajustados para instruções usando esse tipo de oração de 2 a 5 vezes mais que humanos. Corte o rabicho. Se ele tinha uma consequência real, ela vira uma frase própria com um fato.

### "Seja você X ou Y" e "de X a Y"

"Seja você iniciante ou sênior", "de pequenos projetos a grandes empresas". Fala com todo mundo e não se compromete com ninguém. Diga para quem é o post.

### "Não é X, é Y" e "Não só X, mas também Y"

Já está no Humanizer, mas é o padrão que mais aparece. O Pew Research contou "it's not just X, it's Y" subindo de 0,87 para 2,36 por 10 mil palavras na web entre janeiro de 2023 e janeiro de 2026 (citado pelo hrih.si). Diga a afirmação positiva com um fato.

### "Sem X. Sem Y. Só Z."

"Sem planilha. Sem correria. Só resultado." Diga o que acontece de fato.

### Conectivos em todo parágrafo

"Além disso", "Vale ressaltar", "É importante destacar", "Em suma", "Dessa forma", "Nesse sentido", "Por fim". A Fast Company Brasil e o TecMundo citam o excesso desses conectivos como um dos sinais mais comuns em português. Quase sempre dá para cortar sem perder nada. Se precisar ligar duas ideias, use "e", "mas", "também" ou "então".

### Abertura e fechamento de enfeite

Abertura: "No mundo atual", "Nos dias de hoje", "Cada vez mais", "Quando se trata de", "Não é segredo que", "Imagine um mundo onde", "Vamos lá".

Fechamento: "Em conclusão", "No fim das contas", "Resumindo", "O futuro é promissor", "Pronto para levar seu X ao próximo nível?".

A primeira frase traz conteúdo, e a última traz um fato ou o próximo passo.

### "Serve como", "conta com", "se destaca por"

Use "é" e "tem". "O plano Pro conta com projetos ilimitados" vira "O plano Pro tem projetos ilimitados".

### Grupos de três por ritmo

Três adjetivos, três exemplos ou três bullets só porque três soa completo. Ponha só os itens que existem.

### Frases todas do mesmo tamanho

Uma frase atrás da outra com o mesmo tamanho e a mesma estrutura é sinal de texto gerado. Alterne, curta depois de longa. Leia em voz alta, porque o ritmo monótono se ouve mais fácil do que se vê.

### Frase que sobrevive ao teste de apagar

Apague a frase. Se o parágrafo não perde nenhuma informação, ela era enchimento ("O segredo é encontrar o equilíbrio", "Tudo depende do contexto"). Fonte: [SlopDetector, Signs of AI writing](https://slopdetector.org/blog/signs-of-ai-writing).

### Autoridade sem fonte

"Estudos mostram", "Especialistas concordam", "Muita gente diz". Ou vem com nome, número e link, ou sai.

## Checagem rápida antes de mostrar o post

1. Procure `: ` fora de blocos de código. Cada um precisa vir antes de uma lista, tabela ou bloco. Se não vier, troque.
2. Procure `—`, `–` e `;` no texto corrido.
3. Procure "?" no meio de parágrafo. Se o próprio texto responde a pergunta logo depois, reescreva como afirmação.
4. Procure gerúndio depois de vírgula no fim de frase ("garantindo", "permitindo", "tornando", "ajudando").
5. Procure os conectivos da lista acima.

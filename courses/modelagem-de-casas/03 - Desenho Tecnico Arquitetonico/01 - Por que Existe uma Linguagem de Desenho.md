[Voltar ao módulo](./README.md)

# Aula 1: Por que existe uma linguagem padronizada de desenho

*Pergunta que esta aula responde: por que o projeto de uma casa precisa ser escrito numa linguagem gráfica com regras fixas, e quais normas e etapas organizam essa linguagem?*

## O problema: construir sem ambiguidade

Uma casa é feita por muita gente que nunca conversou entre si: o cliente que a idealizou, o arquiteto que a projetou, o engenheiro que calculou a estrutura, a prefeitura que a aprova, o mestre de obras que a levanta, o marceneiro que faz os armários, o fornecedor que entrega as esquadrias. Ninguém consegue ficar ao lado de todos explicando "a parede vai até aqui, a porta abre para lá". O projeto é o substituto dessa conversa: **um documento que diz o que construir, onde, com que medidas e com que materiais, de modo que duas pessoas diferentes leiam a mesma coisa**.

Se cada projetista desenhasse do seu jeito, o leitor teria que adivinhar: esta linha grossa é parede ou é só um contorno? Este número é metro ou centímetro? Este desenho está na proporção de 1 para quanto? A obra pagaria o preço em erro, retrabalho e discussão. A própria ABNT NBR 6492:2021 diz isso na introdução: para uma obra ser construída, todos os agentes envolvidos (clientes, projetistas, construtores, fornecedores, órgãos legais) precisam compreender os projetos, e os objetivos principais da norma são a **comunicação correta entre os agentes**, a produção de uma **base documental para tomada de decisões e para o histórico do projeto**, e a redução de falhas e retrabalhos.

A solução é a mesma que resolve qualquer comunicação entre estranhos: uma **linguagem com gramática comum**. O desenho técnico é essa linguagem. Cada regra dela existe porque, sem ela, haveria uma pergunta sem resposta:

| Pergunta que o leitor faria | Regra que a responde | Aula |
|---|---|---|
| Como um objeto 3D vira um desenho plano sem perder informação? | Projeção ortogonal (vistas) | 2 |
| Qual o tamanho real disto? | Escala e cotas | 3 |
| Isto é parede cortada, aresta visível ou o que está escondido? | Tipos e espessuras de linha | 4 |
| O que significa este símbolo? | Simbologia e legenda | 4 |
| O que este desenho está mostrando (o piso, o telhado, uma fachada)? | Tipos de peça e título | 5 a 7 |
| De quem é, de quando, em que versão? | Carimbo e prancha | 7 |

## Aviso sobre o que a norma cobre (e o que não cobre)

Os textos populares dizem "a NBR 6492 padroniza o desenho arquitetônico". Isso era mais verdadeiro na edição antiga (1994). A edição atual, **ABNT NBR 6492:2021**, se chama "Documentação técnica para projetos arquitetônicos e urbanísticos: Requisitos" e diz em seu escopo que estabelece os requisitos da documentação técnica **em função das etapas de projeto, especificando em cada uma os documentos pertinentes e seus conteúdos**. Ela **não trata de critérios e diretrizes de projeto** (para isso remete à NBR 16636 e à legislação). O Anexo A (informativo, ou seja, sugestões) traz a padronização gráfica: linhas, letras, escalas usuais, símbolos, cotas, designações, quadros e hachuras.

Outras normas cobrem o "gramática" geral do desenho técnico, e a própria NBR 6492:2021 as lista na bibliografia. A tabela abaixo diz o que cada uma trata, com base nos títulos oficiais e na descrição de fontes didáticas (vigência e edição atual de cada uma devem ser conferidas no catálogo da ABNT se você for usar profissionalmente):

| Norma | Título (resumido) | O que trata |
|---|---|---|
| NBR 6492 | Documentação técnica para projetos arquitetônicos e urbanísticos | O que cada etapa do projeto deve entregar (plantas, cortes, fachadas, memoriais), carimbo, formatos, dobramento, e orientações gráficas (Anexo A) |
| NBR 10067 | Princípios gerais de representação em desenho técnico | Método de projeção ortográfica (1º e 3º diedro), nome e posição das vistas, escolha das vistas, cortes e seções. É a base geométrica de qualquer planta, corte e fachada |
| NBR 8196 | Desenho técnico: emprego de escalas | Define escala natural, de ampliação e de redução, e como designá-las |
| NBR 8403 | Aplicação de linhas em desenhos: tipos de linhas, larguras das linhas | Tipos de linha (contínua, tracejada, traço e ponto etc.) e séries de larguras |
| NBR 10126 | Cotagem em desenho técnico | Como indicar medidas com linhas, símbolos e números |
| NBR 10068 | Folha de desenho: leiaute e dimensões | Formato físico da folha, margens, moldura, marcas de centro |
| NBR 13142 | Desenho técnico: dobramento de cópia | Como dobrar as cópias até o formato final A4 com o carimbo visível |
| NBR 8402 | Execução de caracteres para escrita em desenho técnico | Forma e altura de letras e números |
| NBR 12298 | Representação de área de corte por meio de hachuras | Padrões de hachura para material cortado |

Observação de honestidade: confirmei o conteúdo da NBR 6492:2021 no texto integral e o da NBR 10067 (edição de 1995) no texto integral. Para as demais, a descrição vem do título oficial (citado na bibliografia da NBR 6492:2021) e de páginas didáticas; os detalhes numéricos que aparecem nas próximas aulas só vêm de norma quando eu disser que vêm.

A NBR 6492:2021 traz uma regra de transição: a versão anterior (1994) podia ser usada em projetos protocolados no prazo de 180 dias após a data de entrada em vigor da nova. A edição de 2021 é a que consultei (edição vigente não reconfirmada no catálogo da ABNT em setembro de 2026).

## Como a linguagem se organiza: o projeto em etapas

A NBR 6492:2021 não descreve "o desenho da casa" como um único objeto. Ela descreve **etapas**, e cada etapa entrega documentos com mais detalhe que a anterior. Isso responde ao "para que serve cada desenho": o mesmo tipo de peça (planta, corte) reaparece em cada etapa, mais preciso.

| Etapa (sigla da norma) | O que é | Documentos gráficos típicos |
|---|---|---|
| Levantamento de dados (LV-ARQ) | Coleta de informações do terreno, vizinhança, legislação e clima | Plantas cadastrais, levantamento planialtimétrico (curvas de nível, pontos cotados) |
| Programa de necessidades (PN-ARQ) | O que a casa precisa ter (você fez isso no módulo 1) | Organograma funcional, esquemas de ambientes |
| Estudo de viabilidade (EV-ARQ) | Opções de forma que atendem ao programa | Estudos volumétricos, perspectivas, plantas e cortes esquemáticos |
| Estudo preliminar (EP-ARQ) | Concepção inicial (o partido do módulo 1) | Planta de implantação, plantas dos pavimentos, cortes, elevações |
| Anteprojeto (AP-ARQ) | Partido desenvolvido e pré-dimensionado, base para aprovação | Implantação, plantas, planta de coberturas, cortes, elevações (fachadas), detalhes principais |
| Projeto para licenciamento (PL-ARQ) | Versão para aprovação na prefeitura e órgãos | Formas de representação variam por região e seguem a legislação local |
| Projeto executivo (PE-ARQ) | Tudo o que é necessário para construir | Implantação com locação, plantas, coberturas com detalhes, ambientes especiais (áreas molhadas), detalhes de elementos |
| As built | Última revisão, que registra a obra como foi realmente executada | Executivo corrigido pelas alterações de obra |

Repare na continuidade com o módulo 1: a etapa de programa de necessidades e o estudo preliminar são exatamente os produtos que você aprendeu a construir (necessidades, setorização, partido). Agora você está aprendendo a **linguagem em que esses estudos são registrados**.

Duas coisas a guardar:

1. **Nem toda peça existe em toda etapa, nem toda casa precisa de todas.** A norma diz o que é obrigatório no executivo, mas uma casa de hobby, modelada por você, não precisa cumprir isso. O que interessa é entender o que cada peça mostra.
2. **O projeto para licenciamento varia por município.** A própria norma diz que as formas de representação variam em cada região e devem atender à legislação vigente. Isso será retomado no módulo 6.

## As peças básicas (mapa da linguagem)

A norma define estes termos (3. Termos e definições) e eles são o vocabulário do restante do módulo:

- **Planta**: vista superior em projeção ortogonal da edificação ou de outro objeto, em determinada altura.
- **Planta de pavimento**: vista superior resultante de um plano secante horizontal que corta a edificação em determinada altura (é o que costumamos chamar de "planta baixa").
- **Corte**: representação a partir de um plano secante vertical que divide a edificação em duas partes, no sentido longitudinal ou transversal.
- **Fachada**: projeção vertical ortogonal de cada um dos lados planos externos da edificação.
- **Elevação**: projeção vertical ortogonal de planos internos ou de elementos da edificação.
- **Planta de situação**: situa a área de intervenção em relação aos vizinhos, às quadras e às ruas.
- **Planta de implantação**: mostra a localização e as dimensões da edificação no lote, com recuos, projeção da cobertura e áreas permeáveis e impermeáveis.
- **Detalhes (ampliações)**: pormenores necessários, em escala adequada, para completo entendimento e correta execução.
- **Prancha**: reunião de desenhos e textos numa folha.
- **Carimbo**: espaço na folha destinado à identificação e às informações do conteúdo da folha.
- **Cota**: qualquer medida expressa nas peças gráficas.
- **Escala**: relação dimensional entre a representação de um objeto no desenho e suas dimensões reais.

Note o padrão: todas essas definições falam em **projeção ortogonal**. Planta, corte e fachada são a mesma operação geométrica (olhar para o objeto de um jeito fixo e desenhar o que se vê, sem perspectiva), só que em direções diferentes. É por isso que a aula 2 vem antes de qualquer peça.

## Do croqui ao desenho técnico

A norma também distingue o **croqui**: desenho de caráter livre, sem precisão, sem escala nem dimensões exatas, usado nos primeiros passos do processo criativo e para discutir o partido. O croqui não é linguagem padronizada, é pensamento. Tudo o que vem depois de "esta decisão está tomada" precisa virar desenho técnico. Quando você modelar sua casa em 3D (módulos 7 a 14), o modelo funciona como um croqui muito preciso que depois gera as peças técnicas automaticamente.

## Resumo

- O desenho técnico existe para comunicar o que construir sem ambiguidade a pessoas que nunca conversaram entre si (cliente, projetista, prefeitura, obra); a norma justifica a padronização pela comunicação correta, base documental e redução de retrabalho.
- A NBR 6492:2021 define quais documentos cada etapa do projeto entrega, o carimbo, formatos e dobramento; o Anexo A (informativo) sugere linhas, letras, escalas, símbolos e cotas. Ela não trata de critérios de projeto.
- Outras normas fornecem a gramática: NBR 10067 (projeção e vistas), 8196 (escalas), 8403 (linhas), 10126 (cotagem), 10068 (folha), 13142 (dobramento).
- O projeto avança em etapas (levantamento, programa, viabilidade, estudo preliminar, anteprojeto, licenciamento, executivo, as built), e as mesmas peças reaparecem com mais precisão a cada etapa.
- Planta, corte e fachada são projeções ortogonais do mesmo objeto em direções diferentes; croqui é livre, desenho técnico é padronizado.

## Para aprofundar

- [ ] [ABNT NBR 6492:2021 (texto integral, PDF hospedado pela UFRRJ)](https://arquivos.ufrrj.br/arquivos/2021103028882828758439fd707c0a63a/NBR_6492_2021.pdf) (ABNT): fonte primária deste módulo. Leia o Anexo A (páginas 17 a 39) para ver as figuras de linhas, símbolos, cotas e quadros.
- [ ] [Aprenda quais são as normas ABNT para desenho técnico na arquitetura](https://arquitetura.vivadecora.com.br/normas-de-desenho-tecnico/) (Viva Decora): resumo didático de cada norma. Atenção: cita a NBR 6492 de 1994, então trate os detalhes dela como informação antiga.

[Próxima aula: Projeção ortogonal](./02%20-%20Projecao%20Ortogonal.md)
